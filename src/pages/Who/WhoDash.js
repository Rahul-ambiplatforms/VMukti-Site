import React from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import VerticalTimeline from "../../components/VerticalTimeline";
// import CertificationsSection from "./components/CertificationsSection";
// import ReviewsSection from "./components/ReviewsSection";
import AdvancedComputerVision from "../../components/AdvancedComputerVision";
import { customData2 } from "../../data/AdvancedComputerVisionData";
import CulturalSection from "../../components/CulturalSection";
import StickySection from "../Home/Data/StickySection";
import CertificationsSection from "../Solutions/Components/CertificationsSection";
import Reviews from "../Home/Components/Reviews";

const gridItems = [
  {
    description: (
      <>
        <b>18 + Years</b>
        <br />of Technology Leadership
      </>
    ),
    bgColor: "white",
    textColor: "black",
    alignItems: "Center",
  },
  {
    description: (
      <>
        End-to-End <b>OEM</b> &<br /> Customizable Solutions
      </>
    ),
    bgColor: "#3F77A5",
    textColor: "white", 
    alignItems: "Center",
  },
  {
    title: [
      {
        text: "Why ",
        textColor: "black",
        fontSize: "64px",
      },
      {
        text: "VMukti?",
        textColor: "#3F77A5",
        fontSize: "64px",
        fontWeight: "bold",
      },
    ],
    bgColor: "transparent",
    alignItems: "Center",
    isWide: true,
  },
  {
    description: (
      <>
        <b> STQC-Certified VMS,</b>
        <br /> <b>EMS & ICCC</b> Platforms
      </>
    ),
    textColor: "white", // Add if needed
    alignItems: "Center",
    bgColor: "#3F77A5",
  },
  { bgColor: "transparent" },
  {
    description: (
      <>
        Deployed Across
        <br />
        <b>1,42,000+</b> Locations
      </>
    ),
    textColor: "black", 
    alignItems: "Center",
    bgColor: "white",
  },
  {
    description: (
      <>
        Trusted by Government &<br /> Enterprise Sectors
      </>
    ),
    bgColor: "#BECEDC",
    textColor: "black", // Add if needed
    alignItems: "Center",
  },
];

const WhoWeare = () => {
  return (
    <>
    <PageContentWrapper>
      <HeroSection />
      <VisionMissionSection />

      <StickySection>
        <AdvancedComputerVision
          bgColor="#5887AE"
          textColor="white" // New prop for text color
          cardBgColor1="white" // New prop for card background color
          cardBgColor2="white" // New prop for card background color
          lineColor="white" // New prop for line color
          {...customData2}
        />
        <VerticalTimeline />
      </StickySection>

      <Box mt={{base:"5%",md:"2%"}}>
        <CulturalSection gridItems={gridItems} />
      </Box>
      </PageContentWrapper>
      <CertificationsSection />
      <PageContentWrapper>
      <Reviews />
      {/* <ReviewsSection /> */}
      </PageContentWrapper>
    </>
  );
};

export default WhoWeare;
