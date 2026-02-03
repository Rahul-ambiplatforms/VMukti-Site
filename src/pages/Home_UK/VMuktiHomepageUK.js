// src/pages/VMuktiHomepage/index.js
import React from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./Components/HeroSection";
import Solutions from "../../components/Solutions";
import Results from "./Components/Results";
import { homeSolutions } from "../../data/ukHomeSolutions";
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
import CTABanner from "./Components/CTABanner";

const VMuktiHomepage = () => {
  const homepageSchemas_uk = schemaData.homepage_uk;

  return (
    <>
      <Helmet>
        <title>AI Cloud Video Surveillance for Multi-Location Business in UK</title>
        <meta
          name="description"
          content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AI Cloud Video Surveillance for Multi-Location Business in UK"
        />
        <meta
          property="og:description"
          content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vmukti.com/video-surveillance-solutions-uk" />
        <meta property="og:site_name" content="VMukti Solutions" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="AI Cloud Video Surveillance for Multi-Location Business in UK"
        />
        <meta
          name="twitter:description"
          content="AI video surveillance and cloud video surveillance system for UK multi-location enterprises. Centralise monitoring, automate incidents, and improve visibility with Cloud VMS."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/tablet1.webp"
        />
        <link rel="canonical" href="https://www.vmukti.com/video-surveillance-solutions-uk" />
        {homepageSchemas_uk.map((schema, index) => (
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
        <CTABanner href="/book-a-demo">
          Request a Demo of Our UK AI Video Surveillance & Cloud VMS Platform
        </CTABanner>
        <Box id="section-faq">
          <FaqsSection faqsList={faqsData.homepage_uk} />
        </Box>
      </PageContentWrapper>
      
      {/* Popup Form */}
      <PopupForm />
    </>
  );
};

export default VMuktiHomepage;