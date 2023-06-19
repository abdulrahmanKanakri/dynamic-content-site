import React from "react";
import * as z from "zod";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import { Form } from "@/components/Form";
import { AppNotification } from "@/providers/notification";

import { useCreateWebsite } from "../hooks/useCreateWebsite";
import { useGetTargetUsers } from "../hooks/useGetTargetUsers";

const schema = z.object({
  name: z
    .string()
    .nonempty("name is required")
    .max(32, "name must be less than 32 characters"),
  title: z
    .string()
    .nonempty("title is required")
    .max(60, "title must be less than 60 characters"),
  description: z
    .string()
    .nonempty("description is required")
    .min(20, "description must be at least 20 characters")
    .max(200, "description must be at most 200 characters"),
  targetUser: z.string().nonempty("target user is required"),
});

interface FormValues {
  name: string;
  description: string;
  title: string;
  targetUser: string;
}

interface CreateWebsiteFormProps {
  onSuccess: (id: string) => void;
}

export const CreateWebsiteForm: React.FC<CreateWebsiteFormProps> = ({
  onSuccess,
}) => {
  const { targetUsersList, isLoading: targetUsersListLoading } =
    useGetTargetUsers();
  const { createWebsite, isLoading } = useCreateWebsite();

  const handleSubmit = async (values: FormValues) => {
    const response = await createWebsite({
      name: values.name,
      description: values.description,
      title: values.title,
      targetUser: values.targetUser,
    });
    onSuccess(response.data._id);
    AppNotification.success(response.message);
  };

  return (
    <>
      <Form<FormValues, typeof schema> onSubmit={handleSubmit} schema={schema}>
        {({ register, formState: { errors } }) => (
          <>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  label="Website Name"
                  required
                  error={!!errors.name}
                  helperText={errors.name?.message ?? ""}
                  {...register("name")}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Website Title"
                  required
                  error={!!errors.title}
                  helperText={errors.title?.message ?? ""}
                  {...register("title")}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Website Description"
                  multiline
                  rows={5}
                  required
                  error={!!errors.description}
                  helperText={errors.description?.message ?? ""}
                  {...register("description")}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel
                    id="target-user-select-label"
                    error={!!errors.targetUser}
                  >
                    Target user *
                  </InputLabel>
                  <Select
                    labelId="target-user-select-label"
                    id="target-user-select"
                    label="Target User *"
                    required
                    error={!!errors.targetUser}
                    {...register("targetUser")}
                    defaultValue=""
                    disabled={isLoading || targetUsersListLoading}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {targetUsersList.map((type) => (
                      <MenuItem
                        value={type}
                        key={type}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.targetUser && (
                    <FormHelperText error>
                      {errors.targetUser.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
              disabled={isLoading}
              loading={isLoading}
            >
              Submit
            </LoadingButton>
          </>
        )}
      </Form>
    </>
  );
};
