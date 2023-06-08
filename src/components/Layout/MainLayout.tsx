import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";

import Footer from "./Footer";

const Main = styled("main")({
  paddingTop: "3rem",
});

const MainLayout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            backgroundColor: "#f3f4f6",
            top: 0,
            left: 0,
            width: "100%",
            height: 300,
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Main>
            <Outlet />
          </Main>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
