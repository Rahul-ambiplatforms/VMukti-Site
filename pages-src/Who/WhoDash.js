'use client';
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import StickySection from "../Home/Data/StickySection";
import { customData2 } from "../../data/AdvancedComputerVisionData";
import { Helmet } from "react-helmet-async";

// Below-fold sections — code-split to reduce initial JS bundle & TBT
const AdvancedComputerVision = dynamic(() => import("../../components/AdvancedComputerVision"));
const VerticalTimeline = dynamic(() => import("../../components/VerticalTimeline"));
const CulturalSection = dynamic(() => import("../../components/CulturalSection"));
const CertificationsSection = dynamic(() => import("../Solutions/Components/CertificationsSection"));
const CtaBanner = dynamic(() => import("../../components/CtaBanner"));

const gridItems = [
  {
    description: (
      <>
        <b>18 + Years</b>
        <br />
        of Technology Leadership
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
        <br /> <b>EMS & Enterprise Command Center</b> Platforms
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
      <Helmet>
        <title>
          India's Leading AI & Cloud Video Intelligence Company | About VMukti
        </title>
        <meta
          name="description"
          content="Explore VMukti Solutions journey as an AI video intelligence and Cloud-based surveillance provider delivering surveillance solutions for enterprises and government projects."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="India's Leading AI & Cloud Video Intelligence Company | About VMukti"
        />
        <meta
          property="og:description"
          content="Explore VMukti Solutions journey as an AI video intelligence and Cloud-based surveillance provider delivering surveillance solutions for enterprises and government projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vmukti.com/about-us" />
        <meta property="og:site_name" content="VMukti Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="India's Leading AI & Cloud Video Intelligence Company | About VMukti"
        />
        <meta
          name="twitter:description"
          content="Explore VMukti Solutions journey as an AI video intelligence and Cloud-based surveillance provider delivering surveillance solutions for enterprises and government projects."
        />
        <link rel="canonical" href="https://www.vmukti.com/about-us" />
      </Helmet>
      <PageContentWrapper>
        <HeroSection />
        <VisionMissionSection />

        <StickySection>
          <AdvancedComputerVision
            bgColor="#5887AE"
            textColor="white"
            cardBgColor1="white"
            cardBgColor2="white"
            lineColor="white"
            {...customData2}
          />
          <VerticalTimeline />
        </StickySection>

        <Box mt={{ base: "5%", md: "2%" }}>
          <CulturalSection gridItems={gridItems} />
        </Box>
      </PageContentWrapper>
      <CertificationsSection />
      <PageContentWrapper>
        {/* <Reviews /> */}
        {/* <ReviewsSection /> */}
        <CtaBanner href="/book-a-demo">
          Ready to See VMukti in Action? Book a Free Demo
        </CtaBanner>
      </PageContentWrapper>
    </>
  );
};

export default WhoWeare;
