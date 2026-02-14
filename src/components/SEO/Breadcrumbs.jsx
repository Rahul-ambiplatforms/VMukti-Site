import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Breadcrumbs Component
 * - Generates visible breadcrumb navigation
 * - Outputs BreadcrumbList JSON-LD schema for Google rich results
 * - Improves internal linking & crawlability
 * - Auto-generates from current URL path
 */

const ROUTE_LABELS = {
  '': 'Home',
  'about-us': 'About Us',
  'contact-us': 'Contact Us',
  'book-a-demo': 'Book a Demo',
  'careers': 'Careers',
  'blog': 'Blog',
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
  'solution': 'Solutions',
  'video-management-system': 'Video Management System (VMS)',
  'enterprise-management-system': 'Enterprise Management System (EMS)',
  'integrated-command-control-center': 'Integrated Command & Control Center (ICCC)',
  'ai-video-analytics': 'AI Video Analytics',
  'face-recognition': 'Face Recognition',
  'anpr-lpr': 'ANPR / LPR',
  'cloud-surveillance': 'Cloud Surveillance',
  'edge-ai': 'Edge AI',
  'industry': 'Industries',
  'banking': 'Banking & Finance',
  'healthcare': 'Healthcare',
  'smart-city': 'Smart City',
  'retail': 'Retail',
  'manufacturing': 'Manufacturing',
  'education': 'Education',
  'warehouse': 'Warehouse & Logistics',
  'oil-gas': 'Oil & Gas',
  'transportation': 'Transportation',
  'government': 'Government',
  'hospitality': 'Hospitality',
  'critical-infrastructure': 'Critical Infrastructure',
  'construction': 'Construction',
  'agriculture': 'Agriculture',
  'ports-maritime': 'Ports & Maritime',
  'mining': 'Mining',
  'usa': 'USA',
  'uk': 'United Kingdom',
};

function formatSegment(segment) {
  return ROUTE_LABELS[segment] || segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const Breadcrumbs = ({ customLabels = {}, className = '' }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  const mergedLabels = { ...ROUTE_LABELS, ...customLabels };

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => ({
      name: mergedLabels[segment] || formatSegment(segment),
      path: '/' + pathSegments.slice(0, index + 1).join('/'),
    })),
  ];

  // JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: \`https://www.vmukti.com\${item.path}\`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className={\`seo-breadcrumbs \${className}\`}
        style={{
          padding: '12px 0',
          fontSize: '14px',
          color: '#6b7280',
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '4px',
            alignItems: 'center',
          }}
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li
                key={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {index > 0 && (
                  <span style={{ color: '#9ca3af', margin: '0 2px' }}>/</span>
                )}
                {isLast ? (
                  <span
                    style={{ color: '#111827', fontWeight: 500 }}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
