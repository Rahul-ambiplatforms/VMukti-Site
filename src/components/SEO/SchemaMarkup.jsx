/**
 * Schema Markup Generator for VMukti Solutions
 * Creates JSON-LD structured data for enterprise VMS, EMS, ICCC platforms
 * Global enterprise positioning
 */

/**
 * Organization Schema for VMukti Solutions
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions',
  legalName: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description:
    'Enterprise cloud VMS, EMS, and ICCC platform provider with STQC certification. 18+ years, 900+ deployments, 1B+ camera feeds processed globally.',
  foundingDate: '2007',
  foundingLocation: 'Ahmedabad, Gujarat, India',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Enterprise Sales',
    email: 'info@vmukti.com',
    telephone: '+91-79-6160-0000',
    url: 'https://www.vmukti.com/contact',
    areaServed: ['Worldwide'],
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/vmukti',
    'https://twitter.com/VMuktiSolutions',
    'https://www.facebook.com/vmukti',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'GeoCircle', name: 'Middle East' },
    { '@type': 'GeoCircle', name: 'Africa' },
    { '@type': 'GeoCircle', name: 'Southeast Asia' },
    { '@type': 'GeoCircle', name: 'Latin America' },
    { '@type': 'GeoCircle', name: 'Europe' },
    { '@type': 'GeoCircle', name: 'India' },
  ],
  knowsAbout: [
    'Video Management System',
    'Enterprise Management System',
    'Integrated Command and Control Center',
    'Cloud Surveillance',
    'AI Video Analytics',
    'Smart City Solutions',
  ],
  award: ['NASSCOM Top 50 Emerging Product Company', 'IIM-Ahmedabad Incubated', 'STQC Certified'],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 100,
    maxValue: 500,
  },
};

/**
 * Website Schema with SearchAction
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VMukti Solutions',
  url: 'https://www.vmukti.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.vmukti.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Product Schema Template
 * @param {Object} productData - { name, description, image, url, features }
 */
export const createProductSchema = (productData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productData.name,
  description: productData.description,
  image: productData.image,
  brand: {
    '@type': 'Brand',
    name: 'VMukti',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'VMukti Solutions Pvt. Ltd.',
    url: 'https://www.vmukti.com',
  },
  offers: {
    '@type': 'Offer',
    price: 'Contact for pricing',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: productData.url || 'https://www.vmukti.com/contact',
  },
  aggregateRating: productData.rating
    ? {
        '@type': 'AggregateRating',
        ratingValue: productData.rating,
        reviewCount: productData.reviewCount || 0,
      }
    : undefined,
});

/**
 * BreadcrumbList Schema
 * @param {Array} breadcrumbs - [ { name: 'Home', url: 'https://www.vmukti.com' }, ... ]
 */
export const createBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Article Schema for Blog Posts
 * @param {Object} articleData - { title, description, image, author, datePublished, dateModified, url }
 */
export const createArticleSchema = (articleData) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: articleData.title,
  description: articleData.description,
  image: articleData.image,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified || articleData.datePublished,
  author: {
    '@type': 'Person',
    name: articleData.author || 'VMukti Solutions',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.vmukti.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleData.url,
  },
  url: articleData.url,
});

/**
 * FAQPage Schema Template
 * @param {Array} faqs - [ { question: 'Q?', answer: 'A.' }, ... ]
 */
export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * VMukti Core Platform Schemas - Enterprise VMS, EMS, ICCC
 */
export const vmuktiPlatforms = {
  cloudVMS: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti Cloud VMS',
    description:
      'STQC-certified enterprise cloud video management system. Multi-site monitoring, AI analytics, face recognition, ANPR, scalable to 50,000+ cameras. Cloud and on-premise deployment.',
    brand: { '@type': 'Brand', name: 'VMukti' },
    image: 'https://www.vmukti.com/products/cloud-vms.jpg',
    url: 'https://www.vmukti.com/products/vms',
    applicationCategory: 'VideoManagementSystem',
    operatingSystem: ['Cloud-based', 'On-premise', 'Hybrid'],
    softwareVersion: 'Latest',
    features: [
      'STQC Certified',
      'Cloud & On-Premise Deployment',
      'AI-Powered Analytics',
      'Face Recognition',
      'ANPR',
      'Multi-Site Management',
      'Real-Time Monitoring',
      'Smart Playback',
      '50,000+ Camera Scalability',
      'Enterprise Dashboard',
    ],
    manufacturer: {
      '@type': 'Organization',
      name: 'VMukti Solutions Pvt. Ltd.',
    },
  },

  ems: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti Enterprise Management System (EMS)',
    description:
      'Centralized enterprise management platform for multi-location surveillance operations. Real-time dashboards, event management, compliance reporting, and workforce analytics.',
    brand: { '@type': 'Brand', name: 'VMukti' },
    image: 'https://www.vmukti.com/products/ems.jpg',
    url: 'https://www.vmukti.com/products/ems',
    applicationCategory: 'EnterpriseManagement',
    operatingSystem: ['Cloud-based', 'On-premise'],
    softwareVersion: 'Latest',
    features: [
      'Multi-Location Management',
      'Real-Time Dashboards',
      'Event Management',
      'Compliance Reporting',
      'Workforce Analytics',
      'Asset Tracking',
      'SLA Monitoring',
      'Enterprise Integration',
    ],
    manufacturer: {
      '@type': 'Organization',
      name: 'VMukti Solutions Pvt. Ltd.',
    },
  },

  iccc: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti ICCC Platform',
    description:
      'Integrated Command and Control Center for smart cities and enterprise campuses. Unified operations with traffic management, emergency response, crowd analytics, and multi-agency coordination.',
    brand: { '@type': 'Brand', name: 'VMukti' },
    image: 'https://www.vmukti.com/products/iccc.jpg',
    url: 'https://www.vmukti.com/products/iccc',
    applicationCategory: 'CommandControlCenter',
    operatingSystem: ['Cloud-based', 'On-premise', 'Hybrid'],
    softwareVersion: 'Latest',
    features: [
      'Unified Command Center',
      'Traffic Management',
      'Emergency Response',
      'Crowd Analytics',
      'Multi-Agency Coordination',
      'GIS Integration',
      'Real-Time Alerts',
      'Incident Management',
      '50+ City Deployments',
    ],
    manufacturer: {
      '@type': 'Organization',
      name: 'VMukti Solutions Pvt. Ltd.',
    },
  },
};

/**
 * AI Analytics Capabilities Schema
 */
export const aiCapabilitiesSchema = {
  cloudAI: {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: 'VMukti AI Video Analytics',
    description: 'Enterprise-grade AI analytics for cloud VMS and ICCC platforms',
    capabilities: [
      'Face Recognition',
      'ANPR (Automatic Number Plate Recognition)',
      'Crowd Counting & Analytics',
      'Vehicle Counting',
      'PPE Detection',
      'Fire & Smoke Detection',
      'Intrusion Detection',
      'Object Detection & Tracking',
      'Weapon Detection',
      'Behavioral Analytics',
    ],
  },
};

/**
 * LocalBusiness Schema - VMukti Global HQ
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VMukti Solutions',
  url: 'https://www.vmukti.com',
  telephone: '+91-79-6160-0000',
  email: 'info@vmukti.com',
  description:
    'Enterprise cloud VMS, EMS, and ICCC platform provider. STQC certified, 18+ years, 900+ global deployments.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  priceRange: 'Enterprise',
};

export default {
  organizationSchema,
  websiteSchema,
  createProductSchema,
  createBreadcrumbSchema,
  createArticleSchema,
  createFAQSchema,
  vmuktiPlatforms,
  aiCapabilitiesSchema,
  localBusinessSchema,
};
