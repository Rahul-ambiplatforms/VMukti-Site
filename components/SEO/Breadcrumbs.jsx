'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  'integrated-command-control-center': 'Integrated Command & Control Center (Enterprise Command Center)',
  'ai-video-analytics': 'AI Video Analytics',
  'face-recognition': 'Face Recognition',
  'anpr-lpr': 'ANPR / LPR',
  'cloud-surveillance': 'Cloud Surveillance',
  'edge-ai': 'Edge AI',
  'industry': 'Industries',
  'banking': 'Banking & Finance',
  'healthcare': 'Healthcare',
  'smart-city': 'Enterprise Campus',
  'retail': 'Retail',
  'manufacturing': 'Manufacturing',
  'education': 'Education',
  'warehouse': 'Warehouse & Logistics',
  'oil-gas': 'Oil & Gas',
  'oil-and-gas': 'Oil & Gas',
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
  const pathname = usePathname() || '/';
  const pathSegments = pathname.split('/').filter(Boolean);

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
      item: `https://www.vmukti.com${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`seo-breadcrumbs ${className}`}
        style={{
          padding: '6px 14px',
          fontSize: '13px',
          color: '#555e6d',
          background: '#E7E7E7',
          borderRadius: '0 0 8px 8px',
          display: 'inline-flex',
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
                  <span style={{ color: '#8a9099', margin: '0 2px' }}>/</span>
                )}
                {isLast ? (
                  <span
                    style={{ color: '#1e2a38', fontWeight: 500 }}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    style={{
                      color: '#3F77A5',
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
