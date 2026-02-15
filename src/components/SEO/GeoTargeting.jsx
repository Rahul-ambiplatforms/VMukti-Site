import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Geo Targeting Component for VMukti
 * - Adds region-specific meta tags for Google regional targeting
 * - Injects OpenGraph locale tags for social sharing
 * - Provides regional content distribution signals
 * - Supports USA, UK, Middle East, Africa, SE Asia, LATAM, Europe
 *
 * Usage:
 *   <GeoTargeting />                    // Auto-detects from route
 *   <GeoTargeting region="usa" />       // Force USA targeting
 *   <GeoTargeting region="middle-east" /> // Middle East targeting
 */

const REGION_CONFIG = {
  usa: {
    name: 'United States',
    locale: 'en_US',
    geoRegion: 'US',
    geoPlacename: 'United States',
    geoPosition: '37.0902;-95.7129',
    icbm: '37.0902, -95.7129',
    currency: 'USD',
    contentLanguage: 'en-US',
    distributionTarget: 'US',
    title: 'VMukti USA - Enterprise Video Surveillance & AI Analytics',
    description: 'VMukti provides enterprise VMS, EMS, and ICCC platforms for businesses across the United States. AI-powered video surveillance for banking, healthcare, retail, and smart cities.',
    keywords: 'video surveillance USA, VMS software America, enterprise security platform US, AI video analytics United States, CCTV management system USA',
  },
  uk: {
    name: 'United Kingdom',
    locale: 'en_GB',
    geoRegion: 'GB',
    geoPlacename: 'United Kingdom',
    geoPosition: '55.3781;-3.4360',
    icbm: '55.3781, -3.4360',
    currency: 'GBP',
    contentLanguage: 'en-GB',
    distributionTarget: 'GB',
    title: 'VMukti UK - Enterprise Video Surveillance & GDPR-Compliant AI',
    description: 'VMukti delivers enterprise-grade VMS, EMS, and ICCC platforms for organisations across the UK. GDPR-compliant AI video surveillance for security and smart city deployments.',
    keywords: 'video surveillance UK, VMS software Britain, enterprise security platform UK, GDPR compliant CCTV, AI analytics United Kingdom',
  },
  'middle-east': {
    name: 'Middle East',
    locale: 'en_US',
    geoRegion: 'AE',
    geoPlacename: 'Middle East',
    geoPosition: '25.2048;55.2708',
    icbm: '25.2048, 55.2708',
    currency: 'USD',
    contentLanguage: 'en',
    distributionTarget: 'AE,SA,QA,KW,BH,OM',
    title: 'VMukti Middle East - Enterprise Video Surveillance & Smart City ICCC',
    description: 'VMukti provides enterprise VMS, EMS, and ICCC platforms for businesses across the Middle East including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.',
    keywords: 'video surveillance Middle East, VMS software Dubai, enterprise security UAE, smart city ICCC Saudi Arabia, AI video analytics Gulf',
  },
  africa: {
    name: 'Africa',
    locale: 'en_US',
    geoRegion: 'ZA',
    geoPlacename: 'Africa',
    geoPosition: '-30.5595;22.9375',
    icbm: '-30.5595, 22.9375',
    currency: 'USD',
    contentLanguage: 'en',
    distributionTarget: 'ZA,NG,KE,EG,GH',
    title: 'VMukti Africa - Enterprise Video Surveillance & Security Solutions',
    description: 'VMukti provides enterprise VMS, EMS, and ICCC solutions for businesses across Africa including South Africa, Nigeria, Kenya, Egypt, and Ghana.',
    keywords: 'video surveillance Africa, VMS software South Africa, enterprise security Nigeria, CCTV management Kenya, AI analytics Africa',
  },
  'southeast-asia': {
    name: 'Southeast Asia',
    locale: 'en_US',
    geoRegion: 'SG',
    geoPlacename: 'Southeast Asia',
    geoPosition: '1.3521;103.8198',
    icbm: '1.3521, 103.8198',
    currency: 'USD',
    contentLanguage: 'en',
    distributionTarget: 'SG,MY,TH,ID,PH,VN',
    title: 'VMukti Southeast Asia - Enterprise Video Surveillance & AI Analytics',
    description: 'VMukti delivers enterprise VMS, EMS, and ICCC platforms for businesses across Southeast Asia including Singapore, Malaysia, Thailand, Indonesia, and Philippines.',
    keywords: 'video surveillance Southeast Asia, VMS software Singapore, enterprise security Malaysia, AI analytics ASEAN, smart city solutions Asia',
  },
  global: {
    name: 'Global',
    locale: 'en_US',
    geoRegion: 'GLOBAL',
    geoPlacename: 'Worldwide',
    geoPosition: '23.0225;72.5714',
    icbm: '23.0225, 72.5714',
    currency: 'USD',
    contentLanguage: 'en',
    distributionTarget: 'global',
    title: 'VMukti - Global Enterprise Video Surveillance, VMS, EMS & ICCC Platform',
    description: 'VMukti is a global enterprise platform offering Video Management System (VMS), Enterprise Management System (EMS), and Integrated Command & Control Center (ICCC) solutions across 16+ industries worldwide.',
    keywords: 'video management system, VMS, enterprise management system, EMS, ICCC, AI video analytics, video surveillance, smart city, face recognition, ANPR',
  },
};

// Route-to-region mapping
const ROUTE_REGION_MAP = {
  '/usa': 'usa',
  '/usa/video-surveillance-solutions': 'usa',
  '/uk': 'uk',
  '/uk/video-surveillance-solutions': 'uk',
};

const GeoTargeting = ({ region: forcedRegion }) => {
  const location = useLocation();

  // Auto-detect region from route or use forced region
  const detectedRegion = ROUTE_REGION_MAP[location.pathname];
  const region = forcedRegion || detectedRegion || 'global';
  const config = REGION_CONFIG[region] || REGION_CONFIG.global;

  return (
    <Helmet>
      {/* Geo targeting meta tags */}
      <meta name="geo.region" content={config.geoRegion} />
      <meta name="geo.placename" content={config.geoPlacename} />
      <meta name="geo.position" content={config.geoPosition} />
      <meta name="ICBM" content={config.icbm} />

      {/* Content distribution */}
      <meta name="distribution" content={config.distributionTarget === 'global' ? 'global' : 'local'} />
      <meta httpEquiv="content-language" content={config.contentLanguage} />

      {/* OpenGraph locale */}
      <meta property="og:locale" content={config.locale} />
      <meta property="og:site_name" content="VMukti Solutions" />

      {/* Regional SEO meta */}
      <meta name="target" content={config.distributionTarget} />
      <meta name="audience" content={config.distributionTarget === 'global' ? 'all' : config.name} />

      {/* Regional title & description overrides */}
      {region !== 'global' && <title>{config.title}</title>}
      {region !== 'global' && <meta name="description" content={config.description} />}
      {region !== 'global' && <meta name="keywords" content={config.keywords} />}
    </Helmet>
  );
};

export { REGION_CONFIG, ROUTE_REGION_MAP };
export default GeoTargeting;
