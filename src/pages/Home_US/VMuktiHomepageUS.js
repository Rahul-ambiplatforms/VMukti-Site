// src/pages/VMuktiHomepage/index.js
import React from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./Components/HeroSection";
import Solutions from "../../components/Solutions";
import Results from "./Components/Results";
import CtaBanner from "../../components/CtaBanner";
import { homeSolutions } from "../../data/usHomeSolutions";
import FaqsSection from "../../components/faqsSection";
import CoreSecurity from "./Components/CoreSecurity";
import faqsData from "../../data/faqsData";
import schemaData from "../../data/schemaData";
import { Helmet } from "react-helmet-async";
import CertificateSection from "./Components/CertificateSection";
import BestCloudVideo from "./Components/BestCloudVideo";
import Features from "./Components/Features";
import KeyFeatures from "./Components/KeyFeatures";
import PopupForm from "./Components/PopupForm";

const VMuktiHomepage = () => {
  const homepageSchemas_us = schemaData.homepage_us;

  return (
    <>
      <Helmet>
        <title>AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises</title>
        <meta
          name="description"
          content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises"
        />
        <meta
          property="og:description"
          content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vmukti.com/video-surveillance-solutions-usa" />
        <meta property="og:site_name" content="VMukti Solutions" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises"
        />
        <meta
          name="twitter:description"
          content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <link rel="canonical" href="https://www.vmukti.com/video-surveillance-solutions-usa" />
        {homepageSchemas_us.map((schema, index) => (
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

      <Box id="section-certifications">
        <CertificateSection />
      </Box>

      <PageContentWrapper>
        <Box id="section-computervision">
          <CoreSecurity />
        </Box>
      </PageContentWrapper>

      <PageContentWrapper>
        <Results />
        <Solutions data={homeSolutions} id="section-solutions" />
      </PageContentWrapper>

      <PageContentWrapper>
        <BestCloudVideo />
      </PageContentWrapper>

      <PageContentWrapper>
        <KeyFeatures />
      </PageContentWrapper>
      
      <PageContentWrapper>
        <Features />
        <CtaBanner href="/contact-us">
          Schedule a Demo of Our AI Video Surveillance & Cloud VMS Platform
        </CtaBanner>
        <Box id="section-faq">
          <FaqsSection faqsList={faqsData.homepage_us} />
        </Box>
      </PageContentWrapper>
      
      {/* Popup Form */}
      <PopupForm />
    </>
  );
};

export default VMuktiHomepage;