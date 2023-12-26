import axios from "axios";

export const adminToken = sessionStorage.getItem("adminToken");

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 
    Authorization: "Bearer " + adminToken ,
    'Content-Type': 'multipart/form-data',
  },
});
