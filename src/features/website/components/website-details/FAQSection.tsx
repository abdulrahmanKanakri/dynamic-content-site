import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FAQItem } from "../../types";

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <>
      <Box sx={{ py: 12, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography
              component="h3"
              variant="h4"
              fontWeight={500}
              textAlign="center"
            >
              FAQ
            </Typography>
            <Box>
              {faqs.map((item, i) => {
                return (
                  <Accordion key={i}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={600}>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
