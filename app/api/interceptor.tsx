import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",  // Spring Boot URL
  withCredentials: true,             // if using cookies
});

api.interceptors.request.use(
  (config) => {
    // add bearer token if needed
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
