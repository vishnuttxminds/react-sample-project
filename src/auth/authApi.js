import axiosInstance from "../api/axiosInstance";

export const loginApi = (payload) => {
  return axiosInstance.post("/v2/login", payload);
};


export const getProducts = (page = 1, size = 10) => {
  return axiosInstance.get(
    `/v2/products_list?page=${page}&size=${size}`
  );
};


export const logOutApi = (payload) => {
  return axiosInstance.post("/logout", payload);
};
