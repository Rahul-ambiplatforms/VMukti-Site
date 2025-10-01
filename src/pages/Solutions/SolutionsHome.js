import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SolutionEMS from "./Components/SolutionEMS";
import TripleImageSection from "../../components/TripleImageSection";
import PageContentWrapper from "../../components/PageContentWrapper";
import SolutionDashboard from "./Components/SolutionDashboard";
import Trusted from "../../components/Trusted.js";
import AISurveillance from "./Components/AISurveillance.js";
import Solutions from "../../components/Solutions.js";
import { solutionSolutions } from "../../data/solutionsContent.js";
import CertificationsSection from "./Components/CertificationsSection.jsx";
import schemaData from "../../data/schemaData";
import CtaBanner from "../../components/CtaBanner.js";
import { Helmet } from "react-helmet-async";

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
      <script>
        {solutionpageSchemas.map((schema, index) => (
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
        {/* SEO Tags */}
        <title>
          Powerful, Flexible Visual Intelligence Solutions for Businesses
        </title>
        <meta
          name="description"
          content="Tackle complex challenges with AI vision solutions built for speed, control and resilience trusted across industries where uptime and security are non-negotiable."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Powerful, Flexible Visual Intelligence Solutions for Businesses"
        />
        <meta
          property="og:description"
          content="Tackle complex challenges with AI vision solutions built for speed, control and resilience trusted across industries where uptime and security are non-negotiable."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/solution_dash.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vmukti.com/solution" />
        <meta property="og:site_name" content="VMukti Solutions" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="Powerful, Flexible Visual Intelligence Solutions for Businesses"
        />
        <meta
          name="twitter:description"
          content="Tackle complex challenges with AI vision solutions built for speed, control and resilience trusted across industries where uptime and security are non-negotiable."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/solution_dash.png"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.vmukti.com/solution" />

        {/* 
    Add structured data (JSON-LD schema) for the solutions page if you have it.
    For example:
    {solutionPageSchemas.map((schema, index) => (
      <script
        key={`schema-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ))}
  */}
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
