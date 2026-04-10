'use client';
// src/pages/VMuktiHomepage/index.js
import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./Components/HeroSection";
import { PopupFormContext } from "./Components/PopupForm";
import { homeSolutions } from "../../data/usHomeSolutions";
import faqsData from "../../data/faqsData";
import schemaData from "../../data/schemaData";
import { Helmet } from "react-helmet-async";

// Below-fold sections — code-split to reduce initial JS bundle & TBT
const PopupForm = dynamic(() => import("./Components/PopupForm").then(m => ({ default: m.default })));
const Solutions = dynamic(() => import("../../components/Solutions"));
const Results = dynamic(() => import("./Components/Results"));
const CTABanner = dynamic(() => import("./Components/CTABanner"));
const FaqsSection = dynamic(() => import("../../components/faqsSection"));
const CoreSecurity = dynamic(() => import("./Components/CoreSecurity"));
const CertificateSection = dynamic(() => import("./Components/CertificateSection"));
const BestCloudVideo = dynamic(() => import("./Components/BestCloudVideo"));
const Features = dynamic(() => import("./Components/Features"));
const KeyFeatures = dynamic(() => import("./Components/KeyFeatures"));

const VMuktiHomepage = () => {
  const homepageSchemas_us = schemaData.homepage_us;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <PopupFormContext.Provider value={{ openPopup }}>
      <Helmet>
        <title>AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises</title>
        <meta name="description" content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises" />
        <meta property="og:description" content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS." />
        <meta property="og:image" content="https://www.vmukti.com/assets/tablet1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vmukti.com/usa/video-surveillance-solutions" />
        <meta property="og:site_name" content="VMukti Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content="AI-Powered Cloud Video Surveillance for US Multi-Location Enterprises" />
        <meta name="twitter:description" content="Enterprise-grade AI cloud video surveillance solution for US multi-location companies. Improve visibility, automate incident response, and manage all sites from one Cloud VMS." />
        <meta name="twitter:image" content="https://www.vmukti.com/assets/tablet1.webp" />
        <link rel="canonical" href="https://www.vmukti.com/usa/video-surveillance-solutions" />
        {homepageSchemas_us.map((schema, index) => (
          <script key={`schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
        <CTABanner>
          Schedule a Demo of Our AI Video Surveillance & Cloud VMS Platform
        </CTABanner>
        <Box id="section-faq">
          <FaqsSection faqsList={faqsData.homepage_us} />
        </Box>
      </PageContentWrapper>
      
      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </PopupFormContext.Provider>
  );
};

export default VMuktiHomepage;