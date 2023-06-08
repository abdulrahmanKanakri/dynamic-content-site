import React from "react";

import {
  FAQSection,
  HeroSection,
  IntroSection,
  KeyPointsSection,
  Footer,
} from "../components/website-details";
import { FAQItem, KeyPoint } from "../types";

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

const faqs: FAQItem[] = [
  {
    title:
      "What factors should I consider when purchasing homeowners insurance?",
    description:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    title: "Where and when is my personal property covered?",
    description:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    title: "Do I need earthquake coverage? How can I get it?",
    description:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
  {
    title: "What does homeowners insurance cover?",
    description:
      "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
  },
];

const websiteName = "Minimau";

export const WebsiteDetails: React.FC = () => {
  return (
    <>
      <HeroSection
        title={websiteName}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, praesentium dignissimos. Expedita, vero! Omnis voluptatem unde iure beatae adipisci molestiae!"
      />
      <IntroSection text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, debitis laborum. Omnis ipsum dolor corporis reiciendis veritatis quasi pariatur numquam sapiente tempora praesentium, odit aliquam. Quasi eos dolor culpa numquam ut fuga consequatur illo aliquam sed, ratione maxime ad delectus, voluptatem minus voluptas odio omnis! Sint quis placeat molestias, iste minus illum mollitia necessitatibus nisi totam, ipsam veritatis dicta eligendi illo minima. Cum, temporibus, architecto perspiciatis doloremque omnis praesentium qui corporis, expedita alias voluptatum aut. Quisquam dolor vel hic, reprehenderit cumque minus excepturi repellendus reiciendis aliquam suscipit iste soluta quas. Ab perspiciatis eligendi voluptate molestiae quaerat alias officiis sapiente necessitatibus!" />
      <KeyPointsSection keyPoints={keyPoints} />
      <FAQSection faqs={faqs} />
      <Footer
        websiteName={websiteName}
        description="A great app to instantly generate content for your website"
      />
    </>
  );
};
