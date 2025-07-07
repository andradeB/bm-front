import api from "@shared/api/axios";

export const getBillingGroups = async (params: {
  search: string;
  filter: string;
  page: number;
}) => {
  const response = await api.get("/billing-groups", { params });
  return response.data;
};
