import api from "./interceptor";

export const createShortUrl = async (data: any) => {
  const res = await api.post("/api/shorten", data);  
  return res.data;
};

