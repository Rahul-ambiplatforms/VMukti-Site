/**
 * Schema Markup Generator for VMukti Solutions
 * Creates JSON-LD structured data for enterprise VMS, EMS, ICCC platforms
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions',
  legalName: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description: 'Enterprise cloud VMS, EMS, and ICCC platform provider with STQC certification. 18+ years, 900+ deployments across 700+ districts, 1B+ camera feeds processed globally.',
  foundingDate: '2007',
  foundingLocation: 'Ahmedabad, Gujarat, India',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 200, maxValue: 500 },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'Enterprise Sales', email: 'info@vmukti.com', telephone: '+91-79-6160-0000', url: 'https://www.vmukti.com/contact', areaServed: 'Worldwide', availableLanguage: ['English', 'Hindi'] },
    { '@type': 'ContactPoint', contactType: 'Technical Support', telephone: '+91-79-6160-0000', areaServed: 'Worldwide', availableLanguage: ['English'] },
  ],
  sameAs: ['https://www.linkedin.com/company/vmukti', 'https://twitter.com/VMukti', 'https://www.facebook.com/vmukti', 'https://www.youtube.com/@vmukti'],
  address: { '@type': 'PostalAddress', streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', postalCode: '380054', addressCountry: 'IN' },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'Africa' },
    { '@type': 'Place', name: 'Southeast Asia' },
    { '@type': 'Place', name: 'Latin America' },
    { '@type': 'Place', name: 'Europe' },
  ],
  knowsAbout: ['Video Management System', 'Enterprise Management System', 'Integrated Command and Control Center', 'Cloud Surveillance', 'AI Video Analytics', 'Smart City Solutions', 'GenAI Video Analytics', 'Edge Computing', 'ANPR', 'Face Recognition'],
  award: ['NASSCOM Top 50 Emerging Product Company', 'IIM-Ahmedabad Incubated', 'STQC Certified', 'Make in India Certified'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'VMukti Enterprise Platform Suite',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Cloud VMS', image: 'https://www.vmukti.com/products/cloud-vms.jpg' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti EMS', image: 'https://www.vmukti.com/products/ems.jpg' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti ICCC Platform', image: 'https://www.vmukti.com/products/iccc.jpg' } },
    ],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VMukti Solutions',
  alternateName: 'VMukti - Enterprise Cloud VMS & Smart City Platform',
  url: 'https://www.vmukti.com',
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://www.vmukti.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
  publisher: { '@type': 'Organization', name: 'VMukti Solutions', logo: 'https://www.vmukti.com/logo.png' },
};

export const createProductSchema = (productData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productData.name,
  description: productData.description,
  image: productData.image,
  brand: { '@type': 'Brand', name: 'VMukti' },
  manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.', url: 'https://www.vmukti.com' },
  offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: productData.url || 'https://www.vmukti.com/contact' },
});

export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createArticleSchema = (articleData) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: articleData.headline,
  description: articleData.description,
  image: articleData.image,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified || articleData.datePublished,
  author: { '@type': 'Organization', name: 'VMukti Solutions' },
  publisher: { '@type': 'Organization', name: 'VMukti Solutions', logo: 'https://www.vmukti.com/logo.png' },
});

export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const vmuktiPlatforms = {
  cloudVMS: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VMukti Cloud VMS',
    description: 'Enterprise-grade cloud-based Video Management System with STQC certification. Supports 1B+ concurrent camera feeds, AI-powered analytics, and smart city integration. 900+ deployments across 700+ districts.',
    image: 'https://www.vmukti.com/products/cloud-vms.jpg',
    brand: { '@type': 'Brand', name: 'VMukti' },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.', url: 'https://www.vmukti.com' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.vmukti.com/cloud-vms',
      description: 'Contact for enterprise pricing',
    },
    features: ['Cloud-based deployment', 'AI Video Analytics', 'ANPR Integration', 'Face Recognition', 'STQC Certified'],
    applicationCategory: 'Enterprise Software',
  },

  ems: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VMukti EMS (Enterprise Management System)',
    description: 'Comprehensive Enterprise Management System for coordinated surveillance operations, incident management, and cross-platform control. Seamlessly integrates with VMukti Cloud VMS and third-party systems.',
    image: 'https://www.vmukti.com/products/ems.jpg',
    brand: { '@type': 'Brand', name: 'VMukti' },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.', url: 'https://www.vmukti.com' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.vmukti.com/ems',
      description: 'Contact for enterprise pricing',
    },
    features: ['Incident Management', 'Multi-system integration', 'Workflow automation', 'Real-time monitoring', 'Audit trails'],
    applicationCategory: 'Enterprise Software',
  },

  iccc: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VMukti ICCC Platform',
    description: 'Integrated Command and Control Center platform for unified emergency response, smart city operations, and cross-agency coordination. Features multi-agency dashboards, incident tracking, and real-time analytics.',
    image: 'https://www.vmukti.com/products/iccc.jpg',
    brand: { '@type': 'Brand', name: 'VMukti' },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.', url: 'https://www.vmukti.com' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.vmukti.com/iccc',
      description: 'Contact for enterprise pricing',
    },
    features: ['Multi-agency coordination', 'Emergency response', 'Real-time dashboards', 'Smart city integration', 'Scalable architecture'],
    applicationCategory: 'Enterprise Software',
  },

  genaiAnalytics: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VMukti GenAI Video Analytics',
    description: 'Next-generation AI-powered video analytics engine for intelligent surveillance. Provides real-time object detection, behavioral analysis, crowd monitoring, and predictive insights. Processes 1B+ camera feeds globally.',
    image: 'https://www.vmukti.com/products/genai-analytics.jpg',
    brand: { '@type': 'Brand', name: 'VMukti' },
    manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.', url: 'https://www.vmukti.com' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.vmukti.com/contact',
      description: 'Contact for enterprise pricing',
    },
    features: ['Real-time AI analysis', 'Object detection', 'Behavior analysis', 'Crowd monitoring', 'Predictive insights'],
    applicationCategory: 'Enterprise Software',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VMukti Solutions Pvt. Ltd.',
  legalName: 'VMukti Solutions Pvt. Ltd.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.0225',
    longitude: '72.5714',
  },
  telephone: '+91-79-6160-0000',
  email: 'info@vmukti.com',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description: 'Enterprise cloud VMS, EMS, and ICCC platform provider with STQC certification. 18+ years of experience, 900+ deployments across 700+ districts.',
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Enterprise Sales',
      email: 'info@vmukti.com',
      telephone: '+91-79-6160-0000',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      telephone: '+91-79-6160-0000',
      availableLanguage: ['English'],
    },
  ],
};

export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getVideoSchema = (videoData) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: videoData.title,
  description: videoData.description,
  thumbnailUrl: videoData.thumbnail,
  uploadDate: videoData.uploadDate,
  duration: videoData.duration,
  contentUrl: videoData.contentUrl,
});

export const getArticleSchema = (articleData) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: articleData.headline,
  description: articleData.description,
  image: articleData.image,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified || articleData.datePublished,
  author: { '@type': 'Organization', name: 'VMukti Solutions' },
  publisher: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    logo: { '@type': 'ImageObject', url: 'https://www.vmukti.com/logo.png' },
  },
});

export const speakableSchema = {
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', 'h2', 'h3', '.article-content'],
};

export const getHowToSchema = (howToData) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howToData.title,
  description: howToData.description,
  image: howToData.image,
  step: howToData.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
  })),
});
