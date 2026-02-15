import React from 'react';
import { useLocation } from 'react-router-dom';
import FAQSchema from './FAQSchema';
import LocalBusinessSchema from './LocalBusinessSchema';
import GeoTargeting from './GeoTargeting';

/**
 * SEOIntegration - Unified wrapper for all Phase 4-6 SEO components
 * Drop this single component into App.js to activate:
import React from 'react';
import { useLocation } from 'react-router-dom';
import FAQSchema from './FAQSchema';
import LocalBusinessSchema from './LocalBusinessSchema';
import GeoTargeting from './GeoTargeting';
import CapabilitiesSchema from './CapabilitiesSchema';

/**
 * SEOIntegration - Unified wrapper for ALL VMukti SEO components
 * Activates complete SEO:
 *   - FAQ rich snippets (FAQSchema)
 *   - Organization & Regional JSON-LD (LocalBusinessSchema)
 *   - Geo meta tags (GeoTargeting)
 *   - VMS, EMS, ICCC, Cloud AI, Use Cases, Industries (CapabilitiesSchema)
 */

const SEOIntegration = () => {
  const location = useLocation();
  const path = location.pathname;

  const getPageType = () => {
    if (path.includes('/vms') || path.includes('/video-management')) return 'vms';
    if (path.includes('/ems') || path.includes('/enterprise-management')) return 'ems';
    if (path.includes('/iccc') || path.includes('/command-control')) return 'iccc';
    return 'home';
  };

  const getRegion = () => {
    if (path.startsWith('/usa')) return 'usa';
    if (path.startsWith('/uk')) return 'uk';
    return 'global';
  };

  return (
    <>
      {/* FAQ Schema */}
      <FAQSchema pageType={getPageType()} />

      {/* Organization + LocalBusiness JSON-LD */}
      <LocalBusinessSchema region={getRegion()} />

      {/* Regional geo-targeting meta tags */}
      <GeoTargeting region={getRegion()} />

      {/* Full Platform Capabilities: VMS, EMS, ICCC, Cloud AI, Use Cases, Industries */}
      <CapabilitiesSchema
        includeVMS={true}
        includeEMS={true}
        includeICCC={true}
        includeCloudAI={true}
        includeUseCases={path === '/' || path.includes('/solution') || path.includes('/industry')}
        includeIndustries={path === '/' || path.includes('/industry')}
      />
    </>
  );
};

export default SEOIntegration; *   - FAQ rich snippets (FAQSchema)
 *   - Organization & LocalBusiness JSON-LD (LocalBusinessSchema)
 *   - Regional geo-targeting meta tags (GeoTargeting)
 *
 * Usage in App.js:
 *   import SEOIntegration from './components/SEO/SEOIntegration';
 *   // Inside Router:
 *   <SEOIntegration />
 */

const SEOIntegration = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine page type for FAQ schema
  const getPageType = () => {
    if (path.includes('/vms') || path.includes('/video-management')) return 'vms';
    if (path.includes('/ems') || path.includes('/enterprise-management')) return 'ems';
    if (path.includes('/iccc') || path.includes('/command-control')) return 'iccc';
    return 'home';
  };

  // Determine region for geo targeting
  const getRegion = () => {
    if (path.startsWith('/usa')) return 'usa';
    if (path.startsWith('/uk')) return 'uk';
    return 'global';
  };

  return (
    <>
      {/* FAQ Schema - generates FAQPage JSON-LD for rich snippets */}
      <FAQSchema pageType={getPageType()} />

      {/* Organization + LocalBusiness JSON-LD for Knowledge Panel */}
      <LocalBusinessSchema region={getRegion()} />

      {/* Regional geo-targeting meta tags */}
      <GeoTargeting region={getRegion()} />
    </>
  );
};

export default SEOIntegration;
