export const StoreToken = (authToken) => {
  localStorage.setItem("eventApp", authToken);
  console.log("token stored");
};
export const getToken = () => {
  return localStorage.getItem("eventApp");
};
export const removeToken = () => {
  localStorage.removeItem("eventApp");
};
