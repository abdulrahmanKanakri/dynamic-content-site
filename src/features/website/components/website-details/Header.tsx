import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface ElevationScrollProps {
  children: React.ReactElement;
}

function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const props = trigger
    ? {
        elevation: 4,
        sx: {
          background: "white",
          color: "black",
        },
      }
    : { elevation: 0 };

  return React.cloneElement(children, props);
}

interface HeaderProps {
  websiteName: string;
}

export const Header: React.FC<HeaderProps> = ({ websiteName }) => {
  return (
    <>
      <ElevationScroll>
        <AppBar component="nav" color="transparent">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {websiteName}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
