import React from "react";
import { Typography, Box, Paper } from "@mui/material";

import { CreateWebsiteForm } from "../components/CreateWebsiteForm";

export const CreateWebsite: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 4 }}>
      <Typography variant="h4" fontWeight={500} textAlign={"center"}>
        Generate website content
      </Typography>
      <Paper elevation={6} sx={{ p: 8 }}>
        <CreateWebsiteForm
          onSuccess={() => {
            console.log("success");
          }}
        />
      </Paper>
    </Box>
  );
};
