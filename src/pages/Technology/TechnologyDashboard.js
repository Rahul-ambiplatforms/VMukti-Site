import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import ComputerVisionPage from "./Components/AITechnologies";
import HeroSection from "./Components/HeroSection";

const TechnologyDashboard = () => {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  useEffect(() => {
    setIsAnimationTriggered(true);
  }, []);

  return (
    <>
      <Box>
        <PageContentWrapper noPadding>
          <HeroSection isAnimationTriggered={isAnimationTriggered} />
        </PageContentWrapper>
        <PageContentWrapper>
          <ComputerVisionPage />
        </PageContentWrapper>
      </Box>
    </>
  );
};

export default TechnologyDashboard;