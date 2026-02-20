// src/pages/VMuktiHomepage/index.js
import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PageContentWrapper from "../../components/PageContentWrapper";
import AdvancedComputerVision from "../../components/AdvancedComputerVision";
import VideoAnalytics from "./Components/VideoAnalytics";
import Achieved from "./Components/Achieved";
import Diagram from "./Components/Diagram";
import Industries from "./Components/industriesData";
import AdvancedSurveillance from "../../components/AdvancedSurveillance";
import SurveillanceSoftware from "./Components/SurveillanceSoftware";
import ObjectDescription from "../../components/ObjectDescription";
import StickySection from "./Data/StickySection";
import HeroSection from "./Components/HeroSection";
import { customData, customData1 } from "../../data/AdvancedComputerVisionData";
import ComputerVision from "./Components/ComputerVision";
import Solutions from "../../components/Solutions";
import Trusted from "../../components/Trusted";
import Reviews from "./Components/Reviews";
import Results from "./Components/Results";
import CtaBanner from "../../components/CtaBanner";
import { homeSolutions } from "../../data/solutionsContent";
import FaqsSection from "../../components/faqsSection";
import faqsData from "../../data/faqsData";
import schemaData from "../../data/schemaData";
import BlogView from "./Components/BlogView";
import { Helmet } from "react-helmet-async";
import CertificationSection from "../Solutions/Components/CertificationsSection";
const VMuktiHomepage = () => {
  const homepageSchemas = schemaData.homepage;

  return (
    <>
      {/* Convergence India 2026 Event Banner */}
      <Box bg="linear-gradient(90deg,#0f3460,#1a1a2e)" color="white" py={3} px={4} textAlign="center">
        <Flex align="center" justify="center" gap={4} flexWrap="wrap">
          <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Meet us at Convergence India 2026 | March 23-25 | Booth F4-06, Hall 04</Text>
          <Button as={Link} to="/events/convergence-india-2026" colorScheme="orange" size="sm">Learn More</Button>
        </Flex>
      </Box>
      <script>
        {homepageSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </script>
      <Helmet>
        <title>
          Cloud Video Surveillance Solutions In USA | VMukti Solutions
        </title>
        <meta
          name="description"
          content="We offers flexible cloud video surveillance solutions for USA businesses. Add cloud intelligence to your current CCTV infrastructure effortlessly."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Cloud Video Surveillance Solutions In USA | VMukti Solutions"
        />
        <meta
          property="og:description"
          content="We offers flexible cloud video surveillance solutions for USA businesses. Add cloud intelligence to your current CCTV infrastructure effortlessly."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vmukti.com/" />
        <meta property="og:site_name" content="VMukti Solutions" />
        {/* <!-- Twitter Card Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="Best Cloud Video Surveillance & AI Video Monitoring Platform in the USA"
        />
        <meta
          name="twitter:description"
          content="VMukti delivers enterprise-grade cloud video surveillance and AI video monitoring solutions in the USA with secure streaming, centralized management, advanced analytics, and scalable deployments."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <link rel="canonical" href="https://www.vmukti.com" />
        {homepageSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </Helmet>

      <PageContentWrapper noPadding>
        <HeroSection id="section-hero" />
      </PageContentWrapper>

      <PageContentWrapper>
        <Diagram id="section-diagram" />
      </PageContentWrapper>
      <Box id="section-certifications">
        <CertificationSection />
      </Box>
      <PageContentWrapper>
        <Box id="section-computervision">
          <ComputerVision />
        </Box>
      </PageContentWrapper>
      <Box id="section-trusted">
        <Trusted />
      </Box>
      <PageContentWrapper>
        <Solutions data={homeSolutions} id="section-solutions" />
        <Box id="section-reviews">
          <Reviews />
        </Box>
        <Box id="section-industries">
          <Industries heading="Industry-Focused Cloud-Based Video Surveillance Solutions" />
        </Box>
        <Box
          position="relative"
          zIndex="9"
          mt={{ base: "4%", md: "-9%" }}
          id="section-results"
        >
          <Results />
        </Box>
      </PageContentWrapper>

      <Box id="section-achievements">
        <Achieved
          heading="Milestones of Our Journey"
          description="Our journey is defined by innovation, impact, and measurable success. We continue to set benchmarks in visual surveillance. Every milestone reflects our commitment to solving real-world challenges using our Computer Vision Systems."
        />
      </Box>
      <PageContentWrapper>
        <BlogView id="section-blogs" />
        <Box id="section-contact-cta">
          <CtaBanner href="/contact-us">
          Experience Our AI-Powered Video Surveillance Today
          </CtaBanner>
        </Box>
        <Box id="section-faq">
          <FaqsSection faqsList={faqsData.homepage} />
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default VMuktiHomepage;
