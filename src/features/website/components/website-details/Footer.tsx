import React from "react";
import { Typography, Box, Container } from "@mui/material";

interface FooterProps {
  websiteName: string;
  description: string;
}

export const Footer: React.FC<FooterProps> = ({ websiteName, description }) => {
  return (
    <Box
      component="footer"
      sx={{ py: 8, backgroundColor: "#333", color: "#fff" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2"align="center">
          {"Copyright © "}
          {websiteName} {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};
