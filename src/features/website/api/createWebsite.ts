import { ApiEndpoints } from "@/constants/api-endpoints";
import { axios } from "@/lib/axios";
import { BaseResponse } from "@/types";

export type CreateWebsiteDTO = {
  name: string;
  description: string;
  target_user: string;
};

export const createWebsite = (
  data: CreateWebsiteDTO
): Promise<BaseResponse> => {
  return axios.post(ApiEndpoints.createWebsite, data);
};
