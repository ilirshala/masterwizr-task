import axios from "axios";
import { BASE_URL } from "./apiConstants";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("promise.error");
    return Promise.reject(error);
  }
);

export default instance;
