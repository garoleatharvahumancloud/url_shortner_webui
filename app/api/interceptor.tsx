import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://cloud62-backend.onrender.com",
  withCredentials: false, // set true only if using cookies/JSESSIONID
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or cookie
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Token expired or unauthorized → redirect to login
      if (error.response.status === 401) {
        console.warn("Unauthorized: Token expired or invalid");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
