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
import StickySection from "../Home/Data/StickySection";

const gridItems = [
  {
    description: (
      <>
        <b>18 + Years of</b>
        <br /> Technology Leadership
      </>
    ),
    bgColor: "white",
    textColor: "black", // Add if needed
    alignItems: "Center"
  },
  {
    description: (
      <>
        End-to-End <b>OEM</b> &<br /> Customizable Solutions
      </>
    ),
    bgColor: "white",
    textColor: "black", // Add if needed
    alignItems: "Center",
  },
  {
    title: [
      {
        text: "Why ",
        textColor: "black",
        fontSize: "100px"
      },
      {
        text: "VMukti?",
        textColor: "#3F77A5",
        fontSize: "100px",
        fontWeight: "bold"
      }
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
        Deployed Across<br />
        <b>1,42,000+</b> Locations
      </>
    ),
    textColor: "black", // Add if needed
    alignItems: "Center",
    bgColor: "#BECEDC",

  },
  {
    description: (
      <>
        Trusted by Government &<br /> Enterprise Sectors
      </>
    ),
    bgColor: "white",
    textColor: "black", // Add if needed
    alignItems: "Center"
  },
];

const WhoWeare = () => {
  return (
    <PageContentWrapper>
      <HeroSection />
      <VisionMissionSection />
      <StickySection>
        <AdvancedComputerVision bgColor="#5887AE" {...customData2} />
        <VerticalTimeline />
      </StickySection>
      <Box mt={"5%"}>
        <CulturalSection gridItems={gridItems} />
      </Box>
      <CertificationsSection />
      <ReviewsSection />
    </PageContentWrapper>
  );
};

export default WhoWeare;