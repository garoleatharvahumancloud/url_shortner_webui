import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
});

api.interceptors.request.use(
  (config) => {
    // attach token if needed
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
