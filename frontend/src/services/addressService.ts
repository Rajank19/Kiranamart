import api from "./api";

export const addAddress = async (addressData: any) => {
  const response = await api.post(
    "/address",
    addressData
  );

  return response.data;
};