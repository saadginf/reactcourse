import client from "./client";

export const getToken = (username, password) =>
  client.post("/login?username=" + username + "&password=" + password);

export const getUsers = () => client.get("/auth/users");
export const addUSer = (data) => client.post("/auth/users", data);
