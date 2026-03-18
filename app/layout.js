import { Providers } from './providers';
import SiteLayout from './site-layout';
import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';

const SITE_URL = 'https://www.vmukti.com';

// Viewport configuration (must be separate from metadata in Next.js 13+ App Router)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Default metadata for all pages (can be overridden per page)
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VMukti | Enterprise Cloud VMS, EMS & Enterprise Command Center | 18+ Years',
    template: '%s | VMukti Solutions',
  },
  description: 'VMukti Solutions: STQC-certified enterprise cloud VMS, EMS, and Enterprise Command Center platform. 900+ global deployments, 1B+ camera feeds processed. Trusted by governments and enterprises worldwide.',
  keywords: ['enterprise cloud VMS', 'video management system', 'Enterprise Command Center platform', 'EMS enterprise management', 'STQC certified surveillance', 'global VMS provider'],
  authors: [{ name: 'VMukti Solutions' }],
  creator: 'VMukti Solutions',
  publisher: 'VMukti Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'VMukti Solutions',
    title: 'VMukti | Enterprise Cloud VMS, EMS & Enterprise Command Center',
    description: 'STQC-certified enterprise cloud VMS, EMS, and Enterprise Command Center platform. 900+ global deployments.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'VMukti Solutions - Enterprise Cloud VMS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VMuktiSolution',
    title: 'VMukti | Enterprise Cloud VMS, EMS & Enterprise Command Center',
    description: 'STQC-certified enterprise cloud VMS, EMS, and Enterprise Command Center platform.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': `${SITE_URL}/usa/video-surveillance-solutions`,
      'en-GB': `${SITE_URL}/uk/video-surveillance-solutions`,
      'en-IN': SITE_URL,
      'en-AE': SITE_URL,
      'en-SG': SITE_URL,
      'en-SA': SITE_URL,
      'en-AU': SITE_URL,
    },
  },
  verification: {
    google: 'flDIui2sl1Ra_gCswQ3hySZ1JZSNVfEpoIIzPQonnM',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.03;72.51',
    'ICBM': '23.03, 72.51',
  },
};

// Organization JSON-LD (global)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/VMukti-logo.png',
  foundingDate: '2007',
  description: 'Enterprise Cloud VMS, EMS & Enterprise Command Center Provider. 18+ years of innovation in video surveillance and intelligent operations management.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SG Business Hub, Off. SG Highway',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-79-4039-3733',
      contactType: 'sales',
      areaServed: ['IN', 'AE', 'SA', 'SG', 'US', 'GB', 'ZA', 'KE', 'NG'],
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/vmuktisolutions',
    'https://www.youtube.com/@VMukti1',
    'https://twitter.com/VMukti',
    'https://www.facebook.com/VMuktisolutions',
    'https://www.instagram.com/vmuktisolutions/',
    'https://www.crunchbase.com/organization/vmukti-solutions',
  ],
  award: ['NASSCOM Top 50 Emerging Companies', 'IIM-Ahmedabad Incubated', 'STQC Certified', 'ISO 27001:2022 Certified', 'ISO 9001:2015 Certified', 'Make in India Certified'],
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
  knowsAbout: ['Cloud VMS', 'Enterprise Management System', 'Enterprise Command Center', 'AI Video Analytics', 'Enterprise Campus Surveillance'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'VMukti Solutions Product Catalog',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Cloud VMS', url: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=vmukti' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti EMS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'VMukti Enterprise Command Center' } },
    ],
  },
  event: [
    {
      '@type': 'Event',
      name: 'VMukti at ISC West 2025',
      description: 'VMukti Solutions exhibited its Cloud VMS, AI Video Analytics, and Enterprise Command Center platform at ISC West 2025, the largest security industry trade show in the Americas.',
      startDate: '2025-04-02',
      endDate: '2025-04-04',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Venetian Expo', address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' } },
      organizer: { '@type': 'Organization', name: 'RX Global (Reed Exhibitions)' },
    },
    {
      '@type': 'Event',
      name: 'VMukti at GITEX Global 2024',
      description: 'VMukti Solutions showcased its enterprise Cloud VMS and enterprise campus Enterprise Command Center solutions at GITEX Global 2024, the world\'s largest tech exhibition in Dubai.',
      startDate: '2024-10-14',
      endDate: '2024-10-18',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
      organizer: { '@type': 'Organization', name: 'DWTC (Dubai World Trade Centre)' },
    },
    {
      '@type': 'Event',
      name: 'VMukti at GITEX Global 2023',
      description: 'VMukti Solutions exhibited its AI-powered video surveillance and cloud VMS platform at GITEX Global 2023 in Dubai.',
      startDate: '2023-10-16',
      endDate: '2023-10-20',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
      organizer: { '@type': 'Organization', name: 'DWTC (Dubai World Trade Centre)' },
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VMukti Solutions',
  url: 'https://www.vmukti.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.vmukti.com/blog?search={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const wixFont = localFont({
  src: '../public/assets/Wix_Madefor_Display/WixMadeforDisplay-VariableFont_wght.ttf',
  variable: '--font-wix',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={wixFont.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCPW3K5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Providers>
          <SiteLayout>
            {children}
          </SiteLayout>
        </Providers>

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCPW3K5');`,
          }}
        />
      </body>
    </html>
  );
}
