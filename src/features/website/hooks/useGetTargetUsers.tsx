import { useQuery } from "react-query";

import { getTargetUsers } from "../api/getTargetUsers";

export const useGetTargetUsers = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["targetUsers"],
    queryFn: () => getTargetUsers(),
  });

  return {
    targetUsersList: data?.data ?? [],
    isLoading,
    isSuccess,
    isError,
  };
};
