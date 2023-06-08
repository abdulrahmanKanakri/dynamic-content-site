import React from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import type { VariantType } from "notistack";

export const NotificationProvider: React.FC = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3} />
    </>
  );
};

export const AppNotification = {
  open(message: string, variant?: VariantType) {
    enqueueSnackbar(message, { variant });
  },
  success(message: string) {
    this.open(message, "success");
  },
  error(message: string) {
    this.open(message, "error");
  },
  info(message: string) {
    this.open(message, "info");
  },
  warning(message: string) {
    this.open(message, "warning");
  },
};
