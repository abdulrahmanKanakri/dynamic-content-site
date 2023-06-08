import { ApiEndpoints } from "@/constants/api-endpoints";
import { axios } from "@/lib/axios";
import { BaseResponse } from "@/types";

import { TargetUser } from "../types";

interface GetTargetUsersResponse extends BaseResponse {
  data: TargetUser[];
}

export const getTargetUsers = (): Promise<GetTargetUsersResponse> => {
  return axios.get(ApiEndpoints.getTargetUsers);
};
