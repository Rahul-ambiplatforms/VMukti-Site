'use client';
import HeroSection from "./components/HeroSection";
import PartnerTypes from "./components/PartnerTypes";
import PartnershipTiers from "./components/PartnershipTiers";
import PartnerBenefits from "./components/PartnerBenefits";
import PartnerApply from "./components/PartnerApply";

const Partner = () => {
  return (
    <>
      <HeroSection />
      <PartnershipTiers />
      <PartnerBenefits />
      <PartnerTypes />
      <PartnerApply />
    </>
  );
};

export default Partner;
