'use client';
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import PricingPlans from "./components/PricingPlans";
import CompareFeatures from "./components/CompareFeatures";
import SharedCTABanner from "../../components/SharedCTABanner";
import FaqsSection from "../../components/faqsSection";
import faqsData from "../../data/faqsData";
import Trusted from "../../components/Trusted";
import ClientTestimonials from "./components/ClientTestimonials";

const Pricing = () => {
  return (
    <>
      <HeroSection />
      <PricingPlans />
      <CompareFeatures />

      {/* CTA Banner */}
      <Box pt={{ base: "48px", md: "64px" }} pb={{ base: "16px", md: "24px" }}>
        <SharedCTABanner
          title="Need a Custom Enterprise Plan?"
          subtitle="We work with enterprises of all sizes to create the right solution. Volume discounts, multi-year agreements, and custom deployments."
        />
      </Box>

      {/* FAQ Section */}
      <Box
        px={{ base: "16px", md: "24px", lg: "32px" }}
        pt={{ base: "48px", md: "72px" }}
        pb={{ base: "64px", md: "96px" }}
      >
        <FaqsSection faqsList={faqsData.pricing} />
      </Box>

      <Trusted title="Trusted By 900+ enterprises worldwide" />
      <ClientTestimonials />
    </>
  );
};

export default Pricing;
