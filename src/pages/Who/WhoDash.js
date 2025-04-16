import React from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import VerticalTimeline from "../../components/VerticalTimeline";
import CertificationsSection from "./components/CertificationsSection";
import ReviewsSection from "./components/ReviewsSection";
import AdvancedComputerVision from "../../components/AdvancedComputerVision";
import { customData2 } from "../../data/AdvancedComputerVisionData";
import CulturalSection from "../../components/CulturalSection";

const gridItems = [
  { bgColor: "transparent" },
  {
    title: "2025",
    subtitle: "SmartTech ", // Add this new field
    description: "Participated in Gitex Technology Week Dubai 2017",
    bgColor: "white",
    textColor: "black" // Add if needed
  },
  { bgColor: "transparent" },
  {
    title: "Attended Events",
    bgColor: "transparent",
    alignItems: "Center" // Added to center this item in the grid
  },
  {
    title: "2024",
    subtitle: "IFSEC", // Add this new field
    description: "Visited Hong Kong for Global Sources Exhibition 2019",
    bgColor: "white",
  },
  { bgColor: "transparent" },
  {
    title: "2019",
    subtitle: "Vibrant Startup & Technology Summit ", // Add this new field
    description: "Participated in Vibrant Startup & Technology Summit",
    bgColor: "#BECEDC",

  },
  {
    title: "2019",
    subtitle: "Indian Mobile Congress", // Add this new field
    description: "Participated in the 2019 Indian Mobile Congress, New Delhi.",
    bgColor: "white",
  },
  {
    title: "2019",
    subtitle: "Global Sources Exhibition", // Add this new field
    textColor: "white",
    description: "Participated in Gitex Technology Week Dubai 2017",
    bgColor: "#3F77A5",
  },
  {
    title: "2017",
    subtitle: "Gitex Technology Week", // Add this new field
    description: "Participated in Vibrant Startup & Technology Summit",
    bgColor: "white",
  },
];

const WhoWeare = () => {
  return (
    <PageContentWrapper>
      <HeroSection />
      <VisionMissionSection />
      <AdvancedComputerVision {...customData2} />
      <VerticalTimeline />
      <CulturalSection gridItems={gridItems} />
      <CertificationsSection />
      <ReviewsSection />
    </PageContentWrapper>
  );
};

export default WhoWeare;