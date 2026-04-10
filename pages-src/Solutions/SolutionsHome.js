'use client';
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageContentWrapper from "../../components/PageContentWrapper";
import SolutionDashboard from "./Components/SolutionDashboard";
import { solutionSolutions } from "../../data/solutionsContent.js";
import schemaData from "../../data/schemaData";
import { Helmet } from "react-helmet-async";

// Below-fold sections — code-split to reduce initial JS bundle & TBT
const Trusted = dynamic(() => import("../../components/Trusted.js"));
const AISurveillance = dynamic(() => import("./Components/AISurveillance.js"));
const Solutions = dynamic(() => import("../../components/Solutions.js"));
const CertificationsSection = dynamic(() => import("./Components/CertificationsSection.jsx"));
const CtaBanner = dynamic(() => import("../../components/CtaBanner.js"));

const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the slider section when a specific slide is requested
    if (location.search.includes("slider=")) {
      const sliderSection = document.getElementById("solutions-slider");
      if (sliderSection) {
        sliderSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const solutionpageSchemas = schemaData.solutionpage;

  return (
    <>
      {solutionpageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Helmet>
        <title>Enterprise Video Surveillance Products & Solutions in the USA | VMukti</title>
        <meta name="description" content="Explore VMukti's enterprise video surveillance products and solutions for the USA market, designed for large-scale deployments, secure monitoring, and centralized video management." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Enterprise Video Surveillance Products & Solutions in the USA | VMukti" />
        <meta property="og:description" content="Explore VMukti's enterprise video surveillance products and solutions for the USA market, designed for large-scale deployments, secure monitoring, and centralized video management." />
        <meta property="og:image" content="https://www.vmukti.com/assets/solution_dash.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vmukti.com/solution" />
        <meta property="og:site_name" content="VMukti Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content="Enterprise Video Surveillance Products & Solutions in the USA | VMukti" />
        <meta name="twitter:description" content="Explore VMukti's enterprise video surveillance products and solutions for the USA market, designed for large-scale deployments, secure monitoring, and centralized video management." />
        <meta name="twitter:image" content="https://www.vmukti.com/assets/solution_dash.webp" />
        <link rel="canonical" href="https://www.vmukti.com/solution" />
      </Helmet>
      <SolutionDashboard />
      <Box mt={{base:"5%",md:"0"}}>
        <Trusted />
      </Box>
      <PageContentWrapper>
        <AISurveillance />
        <Solutions data={solutionSolutions} />
      </PageContentWrapper>
      <CertificationsSection />
      <PageContentWrapper>
        <CtaBanner href="/contact-us" buttonText="Get in Touch">
          Step Into The Future of Visual Intelligence with Our AI
          <br />
          Surveillance Ecosystem
        </CtaBanner>
      </PageContentWrapper>
    </>
  );
};

export default Hero;
