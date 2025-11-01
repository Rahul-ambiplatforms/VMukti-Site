// src/pages/VMuktiHomepage/index.js
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
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
import { Helmet } from "react-helmet-async";
import BlogView from "./Components/BlogView";
// import BlogsDashboard from "../Blogs/HeroSection";
// import BlogsContent from "../Blogs/BlogsContent";
// import BlogsOverviewDash from "../Blogs/BlogsOverviewDash";

const VMuktiHomepage = () => {
  const homepageSchemas = schemaData.homepage;

  return (
    <>
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
          AI Computer Vision System for Smart Surveillance - VMukti Solutions
        </title>
        <meta
          name="description"
          content="VMukti Solutions is a trusted computer vision software company. We are offering AI surveillance for healthcare, education, manufacturing and more industries."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AI Computer Vision System for Smart Surveillance - VMukti Solutions"
        />
        <meta
          property="og:description"
          content="VMukti Solutions is a trusted computer vision software company. We are offering AI surveillance for healthcare, education, manufacturing and more industries."
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
          content="AI Computer Vision System for Smart Surveillance - VMukti Solutions"
        />
        <meta
          name="twitter:description"
          content="VMukti Solutions is a trusted computer vision software company. We are offering AI surveillance for healthcare, education, manufacturing and more industries."
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
        <HeroSection id="section-hero"/>
      </PageContentWrapper>

      <PageContentWrapper>
        <Diagram id="section-diagram"/>
        <Box id="section-computervision">
          <ComputerVision />
        </Box>
      </PageContentWrapper>
      <Box id="section-trusted">
        <Trusted />
      </Box>
      <PageContentWrapper>
        <Solutions data={homeSolutions} id="section-solutions"/>
        <Box id="section-reviews">
          <Reviews />
        </Box>
        <Box id="section-industries">
          <Industries heading="AI Computer Vision System for Evolving Industries" />
        </Box>
        <Box position="relative" zIndex="9" mt={{ base: "4%", md: "-9%" }} id="section-results">
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
        <BlogView id="section-blogs"/>
        <Box id="section-contact-cta">
          <CtaBanner href="/contact-us">
            Join the AI-Powered Surveillance Revolution with VMukti Solutions
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
