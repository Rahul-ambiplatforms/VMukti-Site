import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for VMukti Solutions
 * Handles all SEO meta tags, Open Graph tags, Twitter Card tags, and structured data
 * Global enterprise positioning for VMS, EMS, ICCC platforms
 *
 * Props:
 * - title (string): Page title
 * - description (string): Meta description
 * - keywords (string): Comma-separated keywords
 * - canonicalUrl (string): Canonical URL for the page
 * - ogImage (string): Open Graph image URL
 * - ogType (string): Open Graph type (default: "website")
 * - noindex (boolean): Disable indexing if true
 * - jsonLd (object|array): JSON-LD structured data (single object or array of objects)
 * - article (object): Article-specific data (author, publishedTime, modifiedTime)
 */

// Only USA and UK have dedicated regional pages; others point to homepage until regional pages are created
const REGIONAL_HREFLANG = [
  { lang: 'en-IN', path: '/' },
  { lang: 'en-US', path: '/usa/video-surveillance-solutions' },
  { lang: 'en-GB', path: '/uk/video-surveillance-solutions' },
  { lang: 'en-AE', path: '/' },
  { lang: 'en-SG', path: '/' },
  { lang: 'en-SA', path: '/' },
  { lang: 'en-AU', path: '/' },
];

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://www.vmukti.com/og/default.jpg',
  ogType = 'website',
  noindex = false,
  jsonLd = null,
  article = null,
}) => {
  const siteName = 'VMukti Solutions';
  const siteUrl = 'https://www.vmukti.com';

  // Ensure title includes site name
  const fullTitle = title && title.includes('VMukti')
    ? title
    : `${title} | ${siteName}`;

  // Fallback description if not provided
  const finalDescription = description ||
    'VMukti Solutions: STQC-certified enterprise cloud VMS, EMS, and ICCC platform. 900+ global deployments, 1B+ camera feeds processed.';

  // Default keywords if not provided
  const finalKeywords = keywords ||
    'enterprise cloud VMS, video management system, ICCC platform, EMS, STQC certified, global surveillance';

  // Ensure absolute URL for og:image
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Ensure absolute URL for canonical
  const finalCanonicalUrl = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="English" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="VMukti Solutions" />
      <meta name="theme-color" content="#1a237e" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VMuktiSolutions" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Additional SEO Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Global Targeting - hreflang for all regional markets */}
      <link rel="alternate" hrefLang="en" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={finalCanonicalUrl} />
      {REGIONAL_HREFLANG.map(({ lang, path }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={`${siteUrl}${path}`} />
      ))}

      {/* Article-specific tags */}
      {article && (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && Array.isArray(article.tags) && article.tags.map((tag, idx) => (
            <meta key={idx} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
