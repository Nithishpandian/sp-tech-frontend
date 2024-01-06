import axios from "axios";

export const adminToken = sessionStorage.getItem("adminToken").replace(/"([^"]+(?="))"/g, '$1');

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { 
    Authorization: "Bearer " + adminToken ,
  },
});
