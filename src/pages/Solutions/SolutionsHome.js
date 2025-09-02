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
import CtaBanner from "../../components/CtaBanner.js";

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

  return (
    <>
      <SolutionDashboard />
      <Trusted />
      <PageContentWrapper noPadding>
        <AISurveillance />
        <Solutions data={solutionSolutions} />
        <CertificationsSection />
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
