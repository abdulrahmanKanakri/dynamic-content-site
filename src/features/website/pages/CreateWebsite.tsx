import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";

import { CreateWebsiteForm } from "../components/CreateWebsiteForm";
import { AppPaths } from "@/constants/app-paths";

export const CreateWebsite: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 4 }}>
      <Typography variant="h4" fontWeight={500} textAlign={"center"}>
        Generate website content
      </Typography>
      <Paper elevation={6} sx={{ p: 8 }}>
        <CreateWebsiteForm
          onSuccess={(id) => {
            navigate(AppPaths.websiteDetails.replace(":id", id));
          }}
        />
      </Paper>
    </Box>
  );
};
