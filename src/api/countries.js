import client from "./client";

export const getCountries = () => client.get("/api/countries");
export const addCountry = (data) => client.post("/api/countries", data);
