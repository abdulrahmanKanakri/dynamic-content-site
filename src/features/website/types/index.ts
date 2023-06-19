export type TargetUser = string;

export type KeyPoint = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type WebsiteContent = {
  _id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  introduction: string;
  keyPoints: KeyPoint[];
  faqs: FAQItem[];
};
