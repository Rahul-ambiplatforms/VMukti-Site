'use client';
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import FeaturesSection from "./components/FeaturesSection";
import ThreeStepsSection from "./components/ThreeStepsSection";
import IndustryUseCases from "./components/IndustryUseCases";
import TechnicalSpecs from "./components/TechnicalSpecs";
import BookDemoSection from "./components/BookDemoSection";

const EnterpriseCommandCenter = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <ThreeStepsSection />
      <IndustryUseCases />
      <TechnicalSpecs />
      <BookDemoSection />
    </>
  );
};

export default EnterpriseCommandCenter;
