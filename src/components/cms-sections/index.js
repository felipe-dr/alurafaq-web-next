import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./page-faq-display-questions-section";
import { PageHomeHeroSection } from "./page-home-hero-section";
import { SEOBlock } from "./seo-block";

export const cmsSections = {
  PagefaqDisplayQuestionsSectionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHeroSection,
  CommonFooterRecord: (props) => <Footer {...props} />,
};
