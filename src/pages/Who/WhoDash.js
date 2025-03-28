import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import CertificationsSection from "./components/CertificationsSection";
import ReviewsSection from "./components/ReviewsSection";
import VerticalTimeline from "../../components/VerticalTimeline";

const WhoWeare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box>
      <PageContentWrapper>
        <HeroSection />
        <VisionMissionSection />
        <VerticalTimeline />
        <CertificationsSection />
        <ReviewsSection
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </PageContentWrapper>
    </Box>
  );
};

export default WhoWeare;
