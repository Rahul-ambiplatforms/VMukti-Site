import React from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../SEO';
import { getSEOConfig } from '../../config/seo-config';
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  vmuktiPlatforms,
} from '../SEO/SchemaMarkup';

/**
 * SEORouter - Automatically applies correct SEO meta tags based on current route
 * Global enterprise VMS/EMS/ICCC positioning
 * Drop this component inside your Router and it handles everything.
 */
const SEORouter = () => {
  const location = useLocation();
  const path = location.pathname;

  // Map routes to SEO config keys
  const getPageKey = (pathname) => {
    const clean = pathname.replace(/^\/|\/$/g, '').toLowerCase();

    if (clean === '') return 'home';
    if (clean === 'about-us') return 'about';
    if (clean === 'contact-us') return 'contact';
    if (clean === 'careers') return 'careers';
    if (clean === 'blog') return 'blog';
    if (clean.startsWith('blog/')) return 'blog';
    if (clean === 'solution') return 'solutions';
    if (clean === 'book-a-demo') return 'contact';

    // Solution/Product pages - specific mappings
    if (clean.startsWith('solution/')) {
      const solution = clean.replace('solution/', '');
      const solutionMap = {
        'video-management-system': 'productVMS',
        'vms': 'productVMS',
        'cloud-vms': 'productVMS',
        'enterprise-management-system': 'productEMS',
        'ems': 'productEMS',
        'iccc': 'productICCC',
        'command-control-center': 'productICCC',
        'cloudai': 'solutionCloudAI',
        'cloud-ai': 'solutionCloudAI',
        'genai': 'solutionGenAI',
        'gen-ai': 'solutionGenAI',
        'generative-ai': 'solutionGenAI',
        'visualbot': 'solutionVisualBot',
        'visual-bot': 'solutionVisualBot',
        'live-streaming': 'solutionLiveStreaming',
        'livestreaming': 'solutionLiveStreaming',
        'face-surveillance': 'solutionFSV',
        'fsv': 'solutionFSV',
        'face-recognition': 'solutionFSV',
      };
      return solutionMap[solution] || 'solutions';
    }

    if (clean === 'industry') return 'industries';

    // Industry pages - expanded mappings
    if (clean.startsWith('industry/')) {
      const industry = clean.replace('industry/', '');
      const industryMap = {
        'banking': 'industryBanking',
        'finance': 'industryBanking',
        'banking-finance': 'industryBanking',
        'healthcare': 'industryHealthcare',
        'hospital': 'industryHealthcare',
        'smart-city': 'industrySmartCity',
        'smart-cities': 'industrySmartCity',
        'manufacturing': 'industryManufacturing',
        'factory': 'industryManufacturing',
        'oil-gas': 'industryOilGas',
        'oil-and-gas': 'industryOilGas',
        'government': 'industryGovernment',
        'defense': 'industryDefense',
        'military': 'industryDefense',
        'warehouse': 'industryWarehouse',
        'warehousing': 'industryWarehouse',
        'logistics': 'industryLogistics',
        'education': 'industryEducation',
        'school': 'industryEducation',
        'university': 'industryEducation',
        'election': 'industryElection',
        'transportation': 'industryTransportation',
        'transport': 'industryTransportation',
        'pharma': 'industryPharma',
        'pharmaceutical': 'industryPharma',
        'construction': 'industryConstruction',
        'hospitality': 'industryHospitality',
        'hotel': 'industryHospitality',
        'sports-entertainment': 'industrySports',
        'sports': 'industrySports',
        'enterprise': 'industryEnterprise',
        'retail': 'industryRetail',
      };
      return industryMap[industry] || 'industries';
    }

    // Product/platform pages (legacy URL patterns)
    if (clean.includes('vms')) return 'productVMS';
    if (clean.includes('ems')) return 'productEMS';
    if (clean.includes('iccc')) return 'productICCC';

    // Skip SEO meta for SEO Landing Pages - they set their own Helmet
    // Check for expansion page routes: /:category/:pageSlug patterns
    const parts = clean.split('/');
    if (parts.length === 2) {
      const categories = [
        'usa', 'uk', 'india', 'canada', 'australia',
        'uae', 'sg', 'sa', 'in',
        'technology', 'solutions', 'compare', 'resources'
      ];
      if (categories.includes(parts[0])) return null;
    }

    // Check for industry SEO pages (not standard industry dashboard pages)
    if (clean.startsWith('industry/') && clean.includes('-')) return null;

    return 'home';
  };

  const pageKey = getPageKey(path);
  const seoConfig = getSEOConfig(pageKey);

  // Build JSON-LD based on page
  const getJsonLd = () => {
    const schemas = [organizationSchema, websiteSchema];

    if (pageKey === 'home') {
      schemas.push(localBusinessSchema);
      // Add all platform schemas on homepage
      schemas.push(vmuktiPlatforms.cloudVMS);
      schemas.push(vmuktiPlatforms.ems);
      schemas.push(vmuktiPlatforms.iccc);
    }

    if (pageKey === 'productVMS') {
      schemas.push(vmuktiPlatforms.cloudVMS);
    }
    if (pageKey === 'productEMS') {
      schemas.push(vmuktiPlatforms.ems);
    }
    if (pageKey === 'productICCC') {
      schemas.push(vmuktiPlatforms.iccc);
    }

    return schemas;
  };

  // Don't render SEO tags for pages that handle their own meta (SEO Landing Pages)
  if (!pageKey) return null;

  return (
    <SEO
      title={seoConfig.title}
      description={seoConfig.description}
      keywords={seoConfig.keywords}
      canonicalUrl={seoConfig.canonicalUrl}
      ogImage={seoConfig.ogImage}
      ogType={seoConfig.ogType}
      noindex={seoConfig.noindex}
      jsonLd={getJsonLd()}
    />
  );
};

export default SEORouter;
