import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { NoData } from "@/components/Layout/NoData";

import {
  FAQSection,
  HeroSection,
  IntroSection,
  KeyPointsSection,
  Footer,
} from "../components/website-details";
import { useGetWebsiteDetails } from "../hooks/useGetWebsiteDetails";

export const WebsiteDetails: React.FC = () => {
  const { id } = useParams();

  const { websiteDetails, isLoading, isError } = useGetWebsiteDetails(id);

  if (isLoading) {
    return (
      <>
        <Box
          sx={{
            height: "100vh",
            textAlign: "center",
            lineHeight: "70vh",
            fontSize: "48px",
          }}
        >
          Loading...
        </Box>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <NoData />
      </>
    );
  }

  return (
    <>
      <HeroSection
        title={websiteDetails.name}
        description={websiteDetails.description}
      />
      <IntroSection text={websiteDetails.introduction} />
      <KeyPointsSection keyPoints={websiteDetails.keyPoints} />
      <FAQSection faqs={websiteDetails.faqs} />
      <Footer
        websiteName={websiteDetails.name}
        description={websiteDetails.subtitle}
      />
    </>
  );
};
