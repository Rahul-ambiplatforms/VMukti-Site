/**
 * Schema Data Configuration for VMukti Solutions
 * Structured data for SEO optimization across site pages
 */

export const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'VMukti Solutions - Enterprise Cloud VMS & Smart City Platform',
  description: 'VMukti is a leading provider of enterprise cloud VMS, EMS, and ICCC platforms with STQC certification. 18+ years, 900+ deployments, 1B+ camera feeds processed globally.',
  url: 'https://www.vmukti.com',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/tablet1.webp',
    width: '1200',
    height: '630',
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com',
  },
};

export const solutionpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'VMukti Solutions & Products',
  description: 'Enterprise video management, incident management, and command center solutions for smart cities and surveillance operations.',
  url: 'https://www.vmukti.com/solutions',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/solutions-hero.webp',
    width: '1200',
    height: '630',
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.vmukti.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solutions',
        item: 'https://www.vmukti.com/solutions',
      },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'VMukti Solutions',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Cloud VMS',
        description: 'Enterprise-grade cloud-based Video Management System',
        url: 'https://www.vmukti.com/solutions/cloud-vms',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'EMS',
        description: 'Enterprise Management System for coordinated surveillance operations',
        url: 'https://www.vmukti.com/solutions/ems',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'ICCC',
        description: 'Integrated Command and Control Center for emergency response',
        url: 'https://www.vmukti.com/solutions/iccc',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'GenAI Analytics',
        description: 'Next-generation AI-powered video analytics',
        url: 'https://www.vmukti.com/solutions/genai-analytics',
      },
    ],
  },
};

export const industrypageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'VMukti Industries & Use Cases',
  description: 'VMukti solutions for smart cities, transportation, healthcare, banking, retail, and government sectors.',
  url: 'https://www.vmukti.com/industries',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/industries-hero.webp',
    width: '1200',
    height: '630',
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.vmukti.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://www.vmukti.com/industries',
      },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'VMukti Industry Solutions',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
     name: 'Smart Cities',
        description: 'Unified platform for city-wide surveillance and emergency response',
        url: 'https://www.vmukti.com/industries/smart-cities',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Transportation',
        description: 'Traffic monitoring, ANPR, and intelligent transportation systems',
        url: 'https://www.vmukti.com/industries/transportation',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Healthcare',
        description: 'Secure facility monitoring and access control',
        url: 'https://www.vmukti.com/industries/healthcare',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Banking & Finance',
        description: 'High-security surveillance for financial institutions',
        url: 'https://www.vmukti.com/industries/banking-finance',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Retail',
        description: 'Store security, loss prevention, and customer analytics',
        url: 'https://www.vmukti.com/industries/retail',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Government',
        description: 'Public safety and cross-agency coordination',
        url: 'https://www.vmukti.com/industries/government',
      },
    ],
  },
};

export const productpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'VMukti Cloud VMS',
  description: 'Enterprise-grade cloud-based Video Management System with STQC certification, supporting 1B+ concurrent camera feeds with AI analytics and smart city integration.',
  url: 'https://www.vmukti.com/products/cloud-vms',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/cloud-vms-hero.webp',
    width: '1200',
    height: '630',
  },
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
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://www.vmukti.com/products/cloud-vms',
    description: 'Contact for enterprise pricing',
  },
};

export const aboutpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About VMukti Solutions',
  description: 'Learn about VMukti Solutions - 18+ years of innovation in enterprise surveillance platforms, with 900+ deployments across 700+ districts.',
  url: 'https://www.vmukti.com/about',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/about-hero.webp',
    width: '1200',
    height: '630',
  },
};

export const contactpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact VMukti Solutions',
  description: 'Get in touch with VMukti for enterprise surveillance solutions, support, or partnership inquiries.',
  url: 'https://www.vmukti.com/contact',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.vmukti.com/assets/contact-hero.webp',
    width: '1200',
    height: '630',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description: 'Enterprise cloud VMS, EMS, and ICCC platform provider',
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
  telephone: '+91-968-777-0000',
  email: 'info@vmukti.com',
  priceRange: '$$$',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Enterprise Sales',
      email: 'info@vmukti.com',
      telephone: '+91-968-777-0000',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      telephone: '+91-968-777-0000',
    },
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions',
  legalName: 'VMukti Solutions Pvt. Ltd.',
    telephone: '+91-968-777-0000',
    founder: {
      '@type': 'Person',
      name: 'Hardik Sanghvi',
      jobTitle: 'Founder & CEO'
    },
    memberOf: {
      '@type': 'Organization',
      name: 'GESIA IT Association',
      description: 'Gujarat Electronics & Software Industries Association'
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Government Certification',
        name: 'STQC Certification',
        recognizedBy: { '@type': 'Organization', name: 'STQC, Ministry of Electronics & IT, Government of India' }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ISO Certification',
        name: 'ISO 27001:2022 - Information Security Management'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ISO Certification',
        name: 'ISO 9001:2015 - Quality Management System'
      }
    ],
    award: ['STQC Certified Enterprise VMS Platform'],
    subsidiaryOf: {
      '@type': 'Organization',
      name: 'Adiance Technologies Pvt. Ltd.',
      url: 'https://arcisai.io'
    },
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/logo.png',
  description: 'Enterprise cloud VMS, EMS, and ICCC platform provider with STQC certification. 18+ years, 900+ deployments across 700+ districts, 1B+ camera feeds processed globally.',
  foundingDate: '2003',
  foundingLocation: 'Ahmedabad, Gujarat, India',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 200,
    maxValue: 500,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Enterprise Sales',
      email: 'info@vmukti.com',
      telephone: '+91-968-777-0000',
      url: 'https://www.vmukti.com/contact',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      telephone: '+91-968-777-0000',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/vmukti',
    'https://twitter.com/VMukti',
    'https://www.facebook.com/vmukti',
    'https://www.youtube.com/@vmukti',
      'https://www.crunchbase.com/organization/adiance-technologies',
      'https://www.facebook.com/vmaboratoryukti',
      'https://arcisai.io',
  ],
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
};

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
    logo: 'https://www.vmuti.com/logo.png',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is VMukti Cloud VMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VMukti Cloud VMS is an enterprise-grade, cloud-based Video Management System designed for large-scale surveillance operations. It supports unlimited concurrent camera feeds with AI-powered analytics and is STQC certified.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does VMukti support integration with existing systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, VMukti platforms are designed with enterprise integration in mind. Our EMS and ICCC solutions seamlessly integrate with third-party VMS systems and legacy infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many camera feeds can VMukti process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VMukti has processed over 1 billion camera feeds globally and supports unlimited scalability for enterprise deployments. Our infrastructure is designed to handle the largest smart city and surveillance projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is VMukti STQC certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, VMukti Cloud VMS is STQC (Security Testing and Quality Certification) certified, ensuring it meets the highest security and quality standards for government and enterprise use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does VMukti serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VMukti serves a wide range of industries including smart cities, transportation, healthcare, banking, retail, and government. We have 900+ deployments across 700+ districts globally.',
      },
    },
  ],
};

export const breadcrumbHomepage = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.vmukti.com',
    },
  ],
};

export const breadcrumbSolution = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.vmukti.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Solutions',
      item: 'https://www.vmukti.com/solutions',
    },
  ],
};

export const breadcrumbIndustry = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.vmukti.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Industries',
      item: 'https://www.vmukti.com/industries',
    },
  ],
};

// Default export for backward compatibility with existing page components
// Pages import: import schemaData from "../../data/schemaData"
// and access: schemaData.homepage, schemaData.solutionpage, etc.
const schemaData = {
  homepage: [
    homepageSchema,
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    faqSchema,
    breadcrumbHomepage,
  ],
  homepage_us: [
    homepageSchema,
    organizationSchema,
    localBusinessSchema,
  ],
  homepage_uk: [
    homepageSchema,
    organizationSchema,
    localBusinessSchema,
  ],
  solutionpage: [
    solutionpageSchema,
    organizationSchema,
    breadcrumbSolution,
  ],
  industrypage: [
    industrypageSchema,
    organizationSchema,
    breadcrumbIndustry,
  ],
};

export default schemaData;
