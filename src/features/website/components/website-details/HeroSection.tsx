import React from "react";
import { Box, Container, CssBaseline, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PrimaryStyledButton } from "@/components/styled";

import { Header } from "./Header";

const ContentStack = styled(Stack)({
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
  paddingTop: "16vh",
});

const BoxWithBackground = styled(Box)({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#000000",
    opacity: 0.6,
  },
  height: "100vh",
  color: "white",
});

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <CssBaseline />
      <BoxWithBackground
        sx={{ backgroundImage: "url('https://picsum.photos/1200/720')" }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", height: "100%" }}>
          <Header websiteName={title} />
          <ContentStack spacing={4}>
            <Typography component="h1" variant="h3" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <PrimaryStyledButton variant="outlined">read more</PrimaryStyledButton>
          </ContentStack>
        </Container>
      </BoxWithBackground>
    </>
  );
};
