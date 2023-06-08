import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { queryClient } from "@/lib/react-query";

import { NotificationProvider } from "./notification";
import { ThemeProvider } from "./theme";

const ErrorFallback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" component="h1">
        Ooops, something went wrong :(
      </Typography>
      <Button
        sx={{ mt: 3 }}
        variant="outlined"
        onClick={() => window.location.assign(window.location.origin)}
        onMouseDown={(e) => e.preventDefault()}
      >
        Refresh
      </Button>
    </Box>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          suspense
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <NotificationProvider />
          <ThemeProvider>
            <Router>{children}</Router>
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
