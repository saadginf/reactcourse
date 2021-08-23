import { create } from "apisauce";
import { getToken } from "../auth/storage";

const apiClient = create({
  baseURL: "https://noumanager-api.herokuapp.com",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = getToken();
  if (!authToken) return;

  request.headers["Authorization"] = "Bearer " + authToken;
});
export default apiClient;
