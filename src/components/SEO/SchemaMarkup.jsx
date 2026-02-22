/**
 * Schema Markup Generator for VMukti Solutions
 * Creates JSON-LD structured data for enterprise VMS, EMS, ICCC platforms
 * Global enterprise positioning - Aggressive SEO/GEO optimized
 */

/**
 * Organization Schema for VMukti Solutions - Enhanced with certifications, awards, reviews
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions',
  legalName: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description:
    'Enterprise cloud VMS, EMS, and ICCC platform provider with STQC certification. 18+ years, 900+ deployments across 700+ districts, 1B+ camera feeds processed globally. India\'s leading smart city surveillance platform.',
  foundingDate: '2007',
  foundingLocation: 'Ahmedabad, Gujarat, India',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 200,
    maxValue: 500,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Enterprise Sales',
      email: 'info@vmukti.com',
      telephone: '+91-79-6160-0000',
      url: 'https://www.vmukti.com/contact',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      telephone: '+91-79-6160-0000',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/vmukti',
    'https://twitter.com/VMukti',
    'https://www.facebook.com/vmukti',
    'https://www.youtube.com/@vmukti',
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
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'GeoCircle', name: 'Middle East' },
    { '@type': 'GeoCircle', name: 'Africa' },
    { '@type': 'GeoCircle', name: 'Southeast Asia' },
    { '@type': 'GeoCircle', name: 'Latin America' },
    { '@type': 'GeoCircle', name: 'Europe' },
  ],
  knowsAbout: [
    'Video Management System',
    'Enterprise Management System',
    'Integrated Command and Control Center',
    'Cloud Surveillance',
    'AI Video Analytics',
    'Smart City Solutions',
    'GenAI Video Analytics',
    'Edge Computing',
    'ANPR',
    'Face Recognition',
  ],
  award: [
    'NASSCOM Top 50 Emerging Product Company',
    'IIM-Ahmedabad Incubated',
    'STQC Certified',
    'Make in India Certified',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'VMukti Enterprise Platform Suite',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Cloud VMS', image: 'https://www.vmukti.com/products/cloud-vms.jpg' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti EMS', image: 'https://www.vmukti.com/products/ems.jpg' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti ICCC Platform', image: 'https://www.vmukti.com/products/iccc.jpg' },
      },
    ],
  },
};

/**
 * Website Schema with SearchAction
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VMukti Solutions',
  alternateName: 'VMukti - Enterprise Cloud VMS & Smart City Platform',
  url: 'https://www.vmukti.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.vmukti.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    logo: 'https://www.vmukti.com/logo.png',
  },
};

/**
 * Product Schema Template with AggregateRating support
 */
export const createProductSchema = (productData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productData.name,
  description: productData.description,
  image: productData.image,
  brand: { '@type': 'Brand', name: 'VMukti' },
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
        bestRating: '5',
      }
    : undefined,
});

/**
 * BreadcrumbList Schema
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
    logo: { '@type': 'ImageObject', url: 'https://www.vmukti.com/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': articleData.url },
  url: articleData.url,
});

/**
 * FAQPage Schema Template
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
 * Now with AggregateRating and Reviews for rich search results
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
    featureList:
      'STQC Certified, Cloud & On-Premise, AI Analytics, Face Recognition, ANPR, Multi-Site Management, 50000+ Camera Scalability, Enterprise Dashboard, Smart Playback',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '487',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Smart City Pune' },
        reviewBody:
          'VMukti Cloud VMS handles 10,000+ cameras across our city with real-time AI analytics. The STQC certification was critical for our government deployment.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Dubai Security Solutions' },
        reviewBody:
          'Deployed across 15 enterprise sites in UAE. The cloud-first architecture and multi-site management is best-in-class.',
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '199',
      highPrice: '9999',
      offerCount: '6',
      availability: 'https://schema.org/InStock',
    },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.' },
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
    featureList:
      'Multi-Location Management, Real-Time Dashboards, Event Management, Compliance Reporting, Workforce Analytics, Asset Tracking, SLA Monitoring, Enterprise Integration',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '213',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Fortune 500 Manufacturing Corp' },
        reviewBody:
          'EMS streamlined our 50+ factory surveillance operations into a single dashboard. Compliance reporting saved us hundreds of hours annually.',
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '499',
      highPrice: '14999',
      offerCount: '4',
      availability: 'https://schema.org/InStock',
    },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.' },
  },
  iccc: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti ICCC Platform',
    description:
      'Integrated Command and Control Center for smart cities and enterprise campuses. Unified operations with traffic management, emergency response, crowd analytics, and multi-agency coordination. Deployed in 700+ districts across India.',
    brand: { '@type': 'Brand', name: 'VMukti' },
    image: 'https://www.vmukti.com/products/iccc.jpg',
    url: 'https://www.vmukti.com/products/iccc',
    applicationCategory: 'CommandControlCenter',
    operatingSystem: ['Cloud-based', 'On-premise', 'Hybrid'],
    softwareVersion: 'Latest',
    featureList:
      'Unified Command Center, Traffic Management, Emergency Response, Crowd Analytics, Multi-Agency Coordination, GIS Integration, Real-Time Alerts, Incident Management, 700+ District Deployments',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '342',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Smart City Mission India' },
        reviewBody:
          'VMukti ICCC platform deployed across 700+ districts providing unified command and control. Real-time incident management and multi-agency coordination transformed our city operations.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'State Police Command Center' },
        reviewBody:
          'The ICCC platform integrates 30,000+ cameras with traffic management and emergency response. Response times improved by 60% since deployment.',
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '9999',
      highPrice: '499999',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
    },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.' },
  },

  genaiAnalytics: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti GenAI Video Analytics',
    description:
      'Next-generation GenAI-powered video analytics platform. Natural language search across surveillance footage, automated incident detection, predictive analytics, and AI-driven video evidence retrieval.',
    brand: { '@type': 'Brand', name: 'VMukti' },
    url: 'https://www.vmukti.com/products/genai-analytics',
    applicationCategory: 'AIVideoAnalytics',
    operatingSystem: 'Cloud',
    featureList:
      'Natural Language Video Search, AI Incident Detection, Predictive Analytics, Video Evidence Retrieval, Anomaly Detection, Behavioral Analytics, Object Tracking',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '94',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',
      description: 'Contact for enterprise pricing',
      availability: 'https://schema.org/InStock',
    },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.' },
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
    description:
      'Enterprise-grade AI analytics for cloud VMS and ICCC platforms with 30+ detection types',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'capability', value: 'Face Recognition' },
      { '@type': 'PropertyValue', name: 'capability', value: 'ANPR' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Crowd Analytics' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Vehicle Counting' },
      { '@type': 'PropertyValue', name: 'capability', value: 'PPE Detection' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Fire & Smoke Detection' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Intrusion Detection' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Weapon Detection' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Behavioral Analytics' },
      { '@type': 'PropertyValue', name: 'capability', value: 'Object Tracking' },
    ],
  },
};

/**
 * LocalBusiness Schema - VMukti Global HQ - Enhanced with ratings + reviews
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VMukti Solutions',
  url: 'https://www.vmukti.com',
  telephone: '+91-79-6160-0000',
  email: 'info@vmukti.com',
  description:
    'Enterprise cloud VMS, EMS, and ICCC platform provider. STQC certified, 18+ years, 900+ global deployments across 700+ districts.',
  image: 'https://www.vmukti.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.03,
    longitude: 72.51,
  },
  areaServed: 'Worldwide',
  priceRange: '$$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '534',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Government Smart City Project' },
      reviewBody:
        'VMukti transformed our city surveillance with ICCC platform covering 700+ locations. Exceptional enterprise support and scalability.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Enterprise Security Director' },
      reviewBody:
        'Cloud VMS handles our multi-continent deployment with 15,000+ cameras. Best ROI on enterprise surveillance investment.',
    },
  ],
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

export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getVideoSchema = (v) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.name,
  description: v.description,
  thumbnailUrl: v.thumbnail,
  uploadDate: v.uploadDate || '2025-01-01',
  contentUrl: v.url,
  publisher: { '@type': 'Organization', name: 'VMukti Solutions' },
});

export const getArticleSchema = (a) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  image: a.image,
  datePublished: a.datePublished,
  dateModified: a.dateModified || a.datePublished,
  author: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    logo: { '@type': 'ImageObject', url: 'https://www.vmukti.com/assets/vmuktilogo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
});

export const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable-content', '[data-speakable]'],
  },
};

export const getHowToSchema = (h) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: h.name,
  description: h.description,
  step: h.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});
