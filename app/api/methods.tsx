import api from "./interceptor";

export const createShortUrl = async (data: any) => {
  const res = await api.post("/api/shorten", data);  
  return res.data;
};

export const registerUser = async (data: any) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: any) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const getRedirect = async (shortCode: string) => {
  const res = await api.get(`/${shortCode}`);
  return res.data;
};
