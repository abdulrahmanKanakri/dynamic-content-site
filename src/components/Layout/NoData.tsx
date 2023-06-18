import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const NoData: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
        gap: 1,
        p: 8,
      }}
    >
      <Avatar
        sx={{
          width: 128,
          height: 128,
          fontSize: "92px",
          bgcolor: "#eff0f6",
        }}
      >
        <ArticleOutlinedIcon fontSize="inherit" sx={{ color: "#d3d9dd" }} />
      </Avatar>
      <Typography component="h3" variant="h5" color="text.secondary">
        No results found
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Try again later
      </Typography>
    </Box>
  );
};
