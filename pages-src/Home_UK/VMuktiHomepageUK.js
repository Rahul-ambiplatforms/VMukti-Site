'use client';
// src/pages/VMuktiHomepage/index.js
import { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./Components/HeroSection";
import { PopupFormContext } from "./Components/PopupForm";
import { homeSolutions } from "../../data/ukHomeSolutions";
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
  const homepageSchemas_uk = schemaData.homepage_uk;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <PopupFormContext.Provider value={{ openPopup }}>
      <Helmet>
        <title>AI Cloud Video Surveillance for Multi-Location Business in UK</title>
        <meta name="description" content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Cloud Video Surveillance for Multi-Location Business in UK" />
        <meta property="og:description" content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS." />
        <meta property="og:image" content="https://www.vmukti.com/assets/tablet1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vmukti.com/uk/video-surveillance-solutions" />
        <meta property="og:site_name" content="VMukti Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content="AI Cloud Video Surveillance for Multi-Location Business in UK" />
        <meta name="twitter:description" content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS." />
        <meta name="twitter:image" content="https://www.vmukti.com/assets/tablet1.webp" />
        <link rel="canonical" href="https://www.vmukti.com/uk/video-surveillance-solutions" />
        {homepageSchemas_uk.map((schema, index) => (
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
          Request a Demo of Our UK AI Video Surveillance & Cloud VMS Platform
        </CTABanner>
        <Box id="section-faq">
          <FaqsSection faqsList={faqsData.homepage_uk} />
        </Box>
      </PageContentWrapper>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </PopupFormContext.Provider>
  );
};

export default VMuktiHomepage;
