import { useMutation } from "react-query";

import { CreateWebsiteDTO, createWebsite } from "../api/createWebsite";

export const useCreateWebsite = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useMutation(
    (data: CreateWebsiteDTO) => createWebsite(data)
  );

  const handleCreateWebsite = (data: CreateWebsiteDTO) => {
    return mutateAsync(data);
  };

  return {
    createWebsite: handleCreateWebsite,
    isError,
    isLoading,
    isSuccess,
  };
};
