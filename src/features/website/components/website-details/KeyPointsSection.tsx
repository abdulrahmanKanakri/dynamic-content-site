import React from "react";
import { Typography, Box, Grid, Stack, Paper, Container } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { KeyPoint } from "../../types";

interface KeyPointCardProps {
  keyPoint: KeyPoint;
}

function RandomIcon() {
  const icons = [
    <AccessTimeIcon fontSize="large" />,
    <PeopleOutlineIcon fontSize="large" />,
    <PeopleIcon fontSize="large" />,
    <DashboardIcon fontSize="large" />,
    <AcUnitIcon fontSize="large" />,
  ];
  return icons[+(Math.random() * icons.length).toFixed() % icons.length];
}

const KeyPointCard: React.FC<KeyPointCardProps> = ({ keyPoint }) => {
  return (
    <Paper elevation={6} sx={{ p: 4, height: "100%", borderRadius: "1rem" }}>
      <Box
        sx={{
          display: "inline-block",
          bgcolor: "#eff0f6",
          padding: "8px",
          borderRadius: "50%",
          lineHeight: "1px",
          marginBottom: "1rem",
        }}
      >
        {RandomIcon()}
      </Box>
      <Typography component="h5" variant="h6" fontWeight={600} gutterBottom>
        {keyPoint.title}
      </Typography>
      <Typography component="p" variant="subtitle2">
        {keyPoint.description}
      </Typography>
    </Paper>
  );
};

interface KeyPointsSectionProps {
  keyPoints: KeyPoint[];
}

export const KeyPointsSection: React.FC<KeyPointsSectionProps> = ({
  keyPoints,
}) => {
  return (
    <>
      <Box sx={{ py: 12, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight={500}
              textAlign="center"
            >
              Key points
            </Typography>
            <Box>
              <Grid container spacing={2} justifyContent="center">
                {keyPoints.map((keyPoint, i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    <KeyPointCard keyPoint={keyPoint} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
