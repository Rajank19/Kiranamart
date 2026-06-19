import axios from "axios";

const API = axios.create({
  baseURL: "https://kiranamart.onrender.com/api",
});

export default API;