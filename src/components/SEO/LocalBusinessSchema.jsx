import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness & Organization Schema for VMukti
 * - Generates Organization JSON-LD for global presence
 * - Adds regional LocalBusiness schemas for USA & UK offices
 * - Enables Google Knowledge Panel eligibility
 * - Improves local pack rankings in target regions
 */

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions',
  alternateName: 'VMukti',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description:
    'VMukti is a global enterprise platform offering Video Management System (VMS), Enterprise Management System (EMS), and Integrated Command & Control Center (ICCC) solutions for AI-powered video surveillance across 16+ industries.',
  foundingDate: '2007',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 50,
    maxValue: 200,
  },
  sameAs: [
    'https://www.linkedin.com/company/vmukti',
    'https://twitter.com/vmukti',
    'https://www.youtube.com/@vmukti',
    'https://www.facebook.com/vmukti',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-79-40370104',
      contactType: 'sales',
      areaServed: ['US', 'GB', 'AE', 'IN', 'SG', 'ZA', 'BR'],
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-79-40370104',
      contactType: 'technical support',
      availableLanguage: ['English'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B-604, Sakar-IX, Near Old Wadaj Bus Stand',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380013',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Australia' },
  ],
  knowsAbout: [
    'Video Management System',
    'Enterprise Management System',
    'ICCC',
    'AI Video Analytics',
    'Face Recognition',
    'ANPR',
    'Cloud Surveillance',
    'Smart City Solutions',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'VMukti VMS',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web, Windows, Linux',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'VMukti EMS',
        applicationCategory: 'BusinessApplication',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: 'VMukti ICCC',
        applicationCategory: 'SecurityApplication',
      },
    },
  ],
};

// Regional schemas for target markets
const REGIONAL_SCHEMAS = {
  usa: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.vmukti.com/usa/video-surveillance-solutions#business',
    name: 'VMukti Solutions - USA',
    description:
      'VMukti provides enterprise video surveillance, VMS, EMS, and ICCC solutions for businesses across the United States. AI-powered security for banking, healthcare, retail, smart cities, and more.',
    url: 'https://www.vmukti.com/usa/video-surveillance-solutions',
    telephone: '+91-79-40370104',
    priceRange: '$$$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VMukti USA Solutions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Management System (VMS)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Management System (EMS)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Video Analytics' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Face Recognition System' } },
      ],
    },
  },
  uk: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.vmukti.com/uk/video-surveillance-solutions#business',
    name: 'VMukti Solutions - UK',
    description:
      'VMukti delivers enterprise-grade video surveillance, VMS, EMS, and ICCC platforms for organisations across the United Kingdom. GDPR-compliant AI security solutions.',
    url: 'https://www.vmukti.com/uk/video-surveillance-solutions',
    telephone: '+91-79-40370104',
    priceRange: '$$$$',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VMukti UK Solutions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Management System (VMS)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Management System (EMS)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GDPR-Compliant AI Analytics' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart City ICCC Platform' } },
      ],
    },
  },
};

const LocalBusinessSchema = ({ region = 'global' }) => {
  const schemas = [ORGANIZATION_SCHEMA];

  if (region === 'usa' || region === 'all') {
    schemas.push(REGIONAL_SCHEMAS.usa);
  }
  if (region === 'uk' || region === 'all') {
    schemas.push(REGIONAL_SCHEMAS.uk);
  }
  if (region === 'global') {
    schemas.push(REGIONAL_SCHEMAS.usa, REGIONAL_SCHEMAS.uk);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export { ORGANIZATION_SCHEMA, REGIONAL_SCHEMAS };
export default LocalBusinessSchema;
