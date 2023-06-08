import React from "react";
import { styled } from "@mui/material/styles";

import { HeroSection } from "../components/website-details/HeroSection";
import { IntroSection } from "../components/website-details/IntroSection";
import { KeyPointsSection } from "../components/website-details/KeyPointsSection";
import { KeyPoint } from "../types";

const MainContent = styled("main")({});

const keyPoints: KeyPoint[] = [
  {
    title: "Creative Advertising",
    description:
      "Ultrices leo dictum integer quam nulla morbi adipiscing ac suspendisse neque vel non egestas commodo sit felis consectetur.",
  },
  {
    title: "Digital Advertising",
    description:
      "Elementum duis volutpat ullamcorper nec elementum in fermentum tortor sed ut nunc nisl ipsum aenean ante.",
  },
  {
    title: "Traditional",
    description:
      "Risus turpis lacus fusce odio turpis duis vitae volutpat diam malesuada ullamcorper egestas elit, lacus vulputate.",
  },
  {
    title: "Social Media",
    description:
      "Porttitor leo dictumst ipsum pellentesque nunc, ultricies scelerisque quam volutpat nunc.",
  },
  {
    title: "24 Hrs Access",
    description:
      "This is a short description elaborating the service you have mentioned above.",
  },
];

export const WebsiteDetails: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Minimau"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, praesentium dignissimos. Expedita, vero! Omnis voluptatem unde iure beatae adipisci molestiae!"
      />
      <MainContent>
        <IntroSection text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, debitis laborum. Omnis ipsum dolor corporis reiciendis veritatis quasi pariatur numquam sapiente tempora praesentium, odit aliquam. Quasi eos dolor culpa numquam ut fuga consequatur illo aliquam sed, ratione maxime ad delectus, voluptatem minus voluptas odio omnis! Sint quis placeat molestias, iste minus illum mollitia necessitatibus nisi totam, ipsam veritatis dicta eligendi illo minima. Cum, temporibus, architecto perspiciatis doloremque omnis praesentium qui corporis, expedita alias voluptatum aut. Quisquam dolor vel hic, reprehenderit cumque minus excepturi repellendus reiciendis aliquam suscipit iste soluta quas. Ab perspiciatis eligendi voluptate molestiae quaerat alias officiis sapiente necessitatibus!" />
        <KeyPointsSection keyPoints={keyPoints} />
      </MainContent>
    </>
  );
};
