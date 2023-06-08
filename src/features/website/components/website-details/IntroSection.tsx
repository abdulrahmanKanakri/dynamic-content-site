import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";

import { SecondaryStyledButton } from "@/components/styled";

interface IntroSectionProps {
  text: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ text }) => {
  return (
    <>
      <Box sx={{ py: 12 }}>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Typography
              component="h2"
              variant="h3"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              our abstract introduction
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Stack spacing={2} alignItems="flex-start">
              <Typography variant="body1">{text}</Typography>
              <SecondaryStyledButton variant="outlined">
                read more
              </SecondaryStyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
