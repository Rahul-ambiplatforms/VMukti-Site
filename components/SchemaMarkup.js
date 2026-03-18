'use client';

/**
 * SchemaMarkup.js - Reusable JSON-LD Schema Components
 * Renders structured data for GEO optimization
 * Exports individual schema components and a default Organization+Breadcrumb schema
 */

/**
 * OrganizationSchema - Global organization data
 * Appears on every page via root layout
 */
export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VMukti Solutions Pvt Ltd',
    legalName: 'VMukti Solutions Pvt. Ltd.',
    url: 'https://www.vmukti.com',
    logo: 'https://www.vmukti.com/VMuktiLogo.png',
    description: "VMukti is India's leading AI-powered video surveillance software company, providing Cloud VMS, Enterprise Management System (EMS), and Integrated Command & Control Center (Enterprise Command Center) solutions for enterprise campuses, enterprises, and government projects.",
    foundingDate: '2007',
    foundingLocation: 'Ahmedabad, Gujarat, India',
    founder: {
      '@type': 'Person',
      name: 'Kushal Sanghvi',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380054',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/vmuktisolutions',
      'https://www.youtube.com/@VMukti1',
      'https://twitter.com/VMukti',
      'https://www.facebook.com/VMuktisolutions',
      'https://www.instagram.com/vmuktisolutions/',
      'https://www.crunchbase.com/organization/vmukti-solutions',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 200,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        telephone: '+91-968-777-0000',
        email: 'info@vmukti.com',
        areaServed: ['IN', 'US', 'GB', 'AE', 'SG', 'SA', 'AU'],
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Support',
        telephone: '+91-968-777-0000',
        areaServed: 'Worldwide',
      },
    ],
    knowsAbout: [
      'Video Management System',
      'AI Video Analytics',
      'Enterprise Campus Surveillance',
      'Cloud VMS',
      'Enterprise Command Center',
      'Enterprise Management System',
      'ANPR',
      'Face Recognition',
      'Crowd Analytics',
    ],
    award: [
      'NASSCOM Top 50 Emerging Companies',
      'IIM-Ahmedabad Incubated',
      'STQC Certified',
      'Make in India Certified',
      'ISO 27001:2022 Certified',
      'ISO 9001:2015 Certified',
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Australia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'VMukti Solutions Product Catalog',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Cloud VMS', description: 'Available on Microsoft Azure Marketplace', url: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=vmukti' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti EMS (Enterprise Management System)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Enterprise Command Center' } },
      ],
    },
    event: [
      {
        '@type': 'Event',
        name: 'VMukti at ISC West 2025',
        description: 'VMukti exhibited Cloud VMS, AI Video Analytics, and Enterprise Command Center platform at ISC West 2025 — the largest security industry trade show in the Americas.',
        startDate: '2025-04-02',
        endDate: '2025-04-04',
        location: { '@type': 'Place', name: 'Venetian Expo', address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' } },
        organizer: { '@type': 'Organization', name: 'RX Global (Reed Exhibitions)' },
      },
      {
        '@type': 'Event',
        name: 'VMukti at GITEX Global 2024',
        description: 'VMukti showcased enterprise Cloud VMS and enterprise campus Enterprise Command Center solutions at GITEX Global 2024 in Dubai.',
        startDate: '2024-10-14',
        endDate: '2024-10-18',
        location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
        organizer: { '@type': 'Organization', name: 'DWTC (Dubai World Trade Centre)' },
      },
      {
        '@type': 'Event',
        name: 'VMukti at GITEX Global 2023',
        description: 'VMukti exhibited AI-powered video surveillance and cloud VMS platform at GITEX Global 2023 in Dubai.',
        startDate: '2023-10-16',
        endDate: '2023-10-20',
        location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
        organizer: { '@type': 'Organization', name: 'DWTC (Dubai World Trade Centre)' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * ProductSchema - Software application/product schema
 * @param {Object} props - {name, description, url, image, category, operatingSystem, features, aggregateRating}
 */
export const ProductSchema = (props) => {
  const {
    name = 'VMukti Product',
    description = '',
    url = 'https://www.vmukti.com',
    image = 'https://www.vmukti.com/og-image.jpg',
    category = 'SecurityApplication',
    operatingSystem = 'Cloud-based (Web, iOS, Android)',
    features = '',
    aggregateRating = null,
  } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: category,
    operatingSystem,
    author: {
      '@type': 'Organization',
      name: 'VMukti Solutions',
      url: 'https://www.vmukti.com',
    },
    offers: {
      '@type': 'Offer',
      category: 'Enterprise Software',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      seller: {
        '@type': 'Organization',
        name: 'VMukti Solutions',
      },
    },
    ...(features && { featureList: features }),
    ...(aggregateRating && { aggregateRating }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * FAQSchema - FAQ page schema
 * @param {Object} props - {faqs: [{question, answer}, ...]}
 */
export const FAQSchema = (props) => {
  const { faqs = [] } = props;

  if (!faqs || faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * ArticleSchema - Article schema for blog posts
 * @param {Object} props - {title, description, datePublished, dateModified, authorName, image, url}
 */
export const ArticleSchema = (props) => {
  const {
    title = '',
    description = '',
    datePublished = new Date().toISOString(),
    dateModified = new Date().toISOString(),
    authorName = 'VMukti Solutions',
    image = 'https://www.vmukti.com/og-image.jpg',
    url = 'https://www.vmukti.com',
  } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://www.vmukti.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VMukti Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vmukti.com/VMuktiLogo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * BreadcrumbSchema - Breadcrumb navigation schema
 * @param {Object} props - {items: [{name, url}, ...]}
 */
export const BreadcrumbSchema = (props) => {
  const { items = [] } = props;

  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * ComparisonSchema - Product/Service comparison schema
 * @param {Object} props - {product1, product2}
 * product format: {name, description, url, image, features}
 */
export const ComparisonSchema = (props) => {
  const { product1 = {}, product2 = {} } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${product1.name} vs ${product2.name}`,
    description: `Comparison between ${product1.name} and ${product2.name}`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: product1.name,
          description: product1.description,
          url: product1.url,
          image: product1.image,
          ...(product1.features && { featureList: product1.features }),
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: product2.name,
          description: product2.description,
          url: product2.url,
          image: product2.image,
          ...(product2.features && { featureList: product2.features }),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * LocalBusinessSchema - Local business information
 * @param {Object} props - {name, address, phone, email, hours, coordinates}
 */
export const LocalBusinessSchema = (props) => {
  const {
    name = 'VMukti Solutions Pvt. Ltd.',
    streetAddress = 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality = 'Ahmedabad',
    addressRegion = 'Gujarat',
    postalCode = '380054',
    addressCountry = 'IN',
    phone = '+91-968-777-0000',
    email = 'info@vmukti.com',
    latitude = '23.0225',
    longitude = '72.5714',
  } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url: 'https://www.vmukti.com',
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * EventSchema - Event structured data for exhibitions, conferences, etc.
 * @param {Object} props - {name, description, startDate, endDate, location, image, url, organizer, performer}
 */
export const EventSchema = (props) => {
  const {
    name = '',
    description = '',
    startDate = '',
    endDate = '',
    locationName = '',
    streetAddress = '',
    addressLocality = '',
    addressRegion = '',
    addressCountry = 'IN',
    image = '',
    url = '',
    organizer = 'VMukti Solutions',
    eventStatus = 'https://schema.org/EventScheduled',
    eventAttendanceMode = 'https://schema.org/OfflineEventAttendanceMode',
  } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventStatus,
    eventAttendanceMode,
    location: {
      '@type': 'Place',
      name: locationName,
      address: {
        '@type': 'PostalAddress',
        streetAddress,
        addressLocality,
        addressRegion,
        addressCountry,
      },
    },
    ...(image && { image }),
    url,
    organizer: {
      '@type': 'Organization',
      name: organizer,
      url: 'https://www.vmukti.com',
    },
    performer: {
      '@type': 'Organization',
      name: 'VMukti Solutions',
      url: 'https://www.vmukti.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * Default export: Organization + Breadcrumb schema
 * Renders global organization data (recommended for root layout)
 */
export default function SchemaMarkup() {
  return (
    <>
      <OrganizationSchema />
    </>
  );
}
