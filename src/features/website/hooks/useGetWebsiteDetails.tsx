import { useQuery } from "react-query";

import { getWebsiteDetails } from "../api/getWebsiteDetails";
import { WebsiteContent } from "../types";

export const useGetWebsiteDetails = (id: string | undefined) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["websiteDetails"],
    queryFn: () => getWebsiteDetails(id as string),
    enabled: !!id,
  });

  return {
    websiteDetails: (data?.data ?? {}) as WebsiteContent,
    isLoading,
    isSuccess,
    isError,
  };
};
