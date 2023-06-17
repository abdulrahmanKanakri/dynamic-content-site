import { ApiEndpoints } from "@/constants/api-endpoints";
import { axios } from "@/lib/axios";
import { BaseResponse } from "@/types";
import { WebsiteContent } from "../types";

export type CreateWebsiteDTO = {
  websiteName: string;
  websiteDescription: string;
  targetUser: string;
};

export interface CreateWebsiteResponse extends BaseResponse {
  data: WebsiteContent;
}

export const createWebsite = (
  data: CreateWebsiteDTO
): Promise<CreateWebsiteResponse> => {
  return axios.post(ApiEndpoints.createWebsite, data);
};
