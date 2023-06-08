import React from "react";
import { ZodType, ZodTypeDef } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
  sx?: SxProps;
};

export const Form = <
  TFormValues extends FieldValues = FieldValues,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  onSubmit,
  children,
  className,
  options,
  schema,
  sx,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });
  return (
    <>
      <Box
        component="form"
        className={className}
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        width={"100%"}
        sx={sx}
      >
        {children(methods)}
      </Box>
    </>
  );
};
