import api from "./interceptor";
 
// Create Short URL
export const createShortUrl = async (data: any) => {
  try {
    const res = await api.post("/api/shorten", data);
    return res.data;
  } catch (error) {
    console.error("Error creating short URL:", error);
    throw error;
  }
};
 
// Register User
export const registerUser = async (data: any) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};
 
// Login User
export const loginUser = async (data: any) => {
  try {
    const res = await api.post("/auth/login", data);
 
    // If backend returns token inside data
    if (res.data?.token) return res.data;
 
    // If backend wraps everything inside "data"
    return res.data || res;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
 
// Redirect for short URL
export const getRedirect = async (shortCode: string) => {
  try {
    const res = await api.get(`/${shortCode}`);
    return res.data;
  } catch (error) {
    console.error("Redirect Error:", error);
    throw error;
  }
};
 
export const getDashboardAnalytics = async () => {
  const res = await api.get("/api/analytics/dashboard");
  return res.data;
};
 
export const getMyLinks = async () => {
  const res = await api.get("/my-links");
  return res.data;
};