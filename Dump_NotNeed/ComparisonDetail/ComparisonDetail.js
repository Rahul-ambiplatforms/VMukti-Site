'use client';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import SharedCTABanner from '../../components/SharedCTABanner';

const ComparisonDetail = ({ data, seoData }) => {
  if (!data) return null;

  // Use sections from seoData (seoPageDataCompare) which has title, content, stats, features
  const sections = seoData?.sections || [];

  return (
    <>
      <HeroSection hero={data.hero} meta={data.meta} />
      <ContentSection sections={sections} />
      <SharedCTABanner
        title={seoData?.cta?.title || "Switch to VMukti Today"}
        subtitle={seoData?.cta?.description || "Join 700+ organizations using India's #1 AI-powered VMS platform"}
        wrapperMb={{ base: '40px', md: '64px' }}
      />
    </>
  );
};

export default ComparisonDetail;
