import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * CanonicalUrl & Hreflang Component for VMukti
 *
 * - Sets canonical URL to prevent duplicate content issues
 * - Adds hreflang tags for international/regional targeting
 * - VMukti targets: Middle East, Africa, Southeast Asia, Latin America, Europe
 * - Prevents ?utm_source, ?ref= etc. from creating duplicate pages
 */

const BASE_URL = 'https://www.vmukti.com';

// Regional route mappings for hreflang
const REGIONAL_ALTERNATES = {
  '/': [
    { hreflang: 'x-default', href: '/' },
    { hreflang: 'en', href: '/' },
    { hreflang: 'en-US', href: '/usa/video-surveillance-solutions' },
    { hreflang: 'en-GB', href: '/uk/video-surveillance-solutions' },
  ],
  '/usa/video-surveillance-solutions': [
    { hreflang: 'x-default', href: '/' },
    { hreflang: 'en-US', href: '/usa/video-surveillance-solutions' },
    { hreflang: 'en-GB', href: '/uk/video-surveillance-solutions' },
    { hreflang: 'en', href: '/' },
  ],
  '/uk/video-surveillance-solutions': [
    { hreflang: 'x-default', href: '/' },
    { hreflang: 'en-GB', href: '/uk/video-surveillance-solutions' },
    { hreflang: 'en-US', href: '/usa/video-surveillance-solutions' },
    { hreflang: 'en', href: '/' },
  ],
};

const CanonicalUrl = ({ path: overridePath, noIndex = false }) => {
  const location = useLocation();

  // Use override path or current path, strip trailing slash and query params
  const cleanPath = (overridePath || location.pathname)
    .replace(/\/+$/, '') || '/';

  const canonicalUrl = BASE_URL + cleanPath;
  const alternates = REGIONAL_ALTERNATES[cleanPath] || [];

  return (
    <Helmet>
      {/* Canonical URL - prevents duplicate content */}
      <link rel="canonical" href={canonicalUrl} />

      {/* noindex for pages that should not appear in search */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang tags for international targeting */}
      {alternates.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={BASE_URL + href}
        />
      ))}

      {/* Default language */}
      <meta httpEquiv="content-language" content="en" />

      {/* Geo targeting meta tags for global enterprise */}
      <meta name="geo.region" content="GLOBAL" />
      <meta name="geo.placename" content="Global Enterprise Solutions" />
    </Helmet>
  );
};

export default CanonicalUrl;
