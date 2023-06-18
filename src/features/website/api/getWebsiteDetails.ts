import { ApiEndpoints } from "@/constants/api-endpoints";
import { axios } from "@/lib/axios";
import { BaseResponse } from "@/types";

import { WebsiteContent } from "../types";

interface GetWebsiteDetailsResponse extends BaseResponse {
  data: WebsiteContent;
}

export const getWebsiteDetails = (
  id: string
): Promise<GetWebsiteDetailsResponse> => {
  return axios.get(ApiEndpoints.getWebsiteDetails.replace(":id", id));
};
