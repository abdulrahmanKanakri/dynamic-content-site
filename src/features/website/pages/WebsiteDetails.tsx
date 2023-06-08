import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { HeroSection } from "../components/website-details/HeroSection";
import { IntroSection } from "../components/website-details/IntroSection";

const MainContent = styled("main")({});

export const WebsiteDetails: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Minimau"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, praesentium dignissimos. Expedita, vero! Omnis voluptatem unde iure beatae adipisci molestiae!"
      />
      <MainContent>
        <Container maxWidth="lg">
          <IntroSection text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, debitis laborum. Omnis ipsum dolor corporis reiciendis veritatis quasi pariatur numquam sapiente tempora praesentium, odit aliquam. Quasi eos dolor culpa numquam ut fuga consequatur illo aliquam sed, ratione maxime ad delectus, voluptatem minus voluptas odio omnis! Sint quis placeat molestias, iste minus illum mollitia necessitatibus nisi totam, ipsam veritatis dicta eligendi illo minima. Cum, temporibus, architecto perspiciatis doloremque omnis praesentium qui corporis, expedita alias voluptatum aut. Quisquam dolor vel hic, reprehenderit cumque minus excepturi repellendus reiciendis aliquam suscipit iste soluta quas. Ab perspiciatis eligendi voluptate molestiae quaerat alias officiis sapiente necessitatibus!" />
        </Container>
      </MainContent>
    </>
  );
};
