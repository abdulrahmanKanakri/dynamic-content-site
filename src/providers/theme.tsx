import React from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </>
  );
};
