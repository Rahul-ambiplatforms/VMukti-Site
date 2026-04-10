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
    default: 'Enterprise AI Video Intelligence Platform | Cloud VMS | VMukti',
    template: '%s | VMukti Solutions',
  },
  description: 'VMukti: Enterprise AI video intelligence platform with 26+ AI analytics models. STQC-certified cloud VMS, EMS, and Enterprise Command Center. 900+ global deployments. Trusted by enterprises worldwide.',
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
    title: 'Enterprise AI Video Intelligence Platform | Cloud VMS | VMukti',
    description: 'Enterprise AI video intelligence platform with 26+ AI analytics models. STQC-certified cloud VMS, EMS, and Enterprise Command Center. 900+ global deployments.',
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
    title: 'Enterprise AI Video Intelligence Platform | Cloud VMS | VMukti',
    description: 'Enterprise AI video intelligence platform with 26+ AI analytics models. STQC-certified cloud VMS, EMS, and Enterprise Command Center.',
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
    languages: {
      'x-default': SITE_URL,
      'en': SITE_URL,
      'en-US': `${SITE_URL}/usa/video-surveillance-solutions`,
      'en-GB': `${SITE_URL}/uk/video-surveillance-solutions`,
      'en-IN': `${SITE_URL}/india/ai-video-analytics`,
      'en-AE': `${SITE_URL}/uae/smart-city-surveillance`,
      'en-SG': `${SITE_URL}/singapore/enterprise-vms`,
      'en-SA': `${SITE_URL}/saudi-arabia/ai-video-analytics`,
    },
  },
  verification: {
    google: ['flDIui2sl1Ra_gCswQ3hySZ1JZSNVfEpoIIzPQonnM', 'xpBGpHVKKaxEJ6Ykwzl2vsw01uSyXXdcx4-8Qa6Rus8'],
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.03;72.51',
    'ICBM': '23.03, 72.51',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
};

// Organization JSON-LD (global)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VMukti Solutions Pvt. Ltd.',
  url: 'https://www.vmukti.com',
  logo: 'https://www.vmukti.com/VMukti-logo.webp',
  foundingDate: '2007',
  description: 'Enterprise Cloud VMS, EMS & Enterprise Command Center Provider. 18+ years of innovation in video surveillance and intelligent operations management.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
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
      name: 'VMukti at ISC West 2026',
      description: 'VMukti Solutions is exhibiting its Cloud VMS, AI Video Analytics, and Enterprise Command Center platform at ISC West 2026, the largest security industry trade show in the Americas.',
      startDate: '2026-04-01',
      endDate: '2026-04-03',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Venetian Expo', address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' } },
      organizer: { '@type': 'Organization', name: 'RX Global (Reed Exhibitions)' },
    },
    {
      '@type': 'Event',
      name: 'VMukti at GITEX Global 2025',
      description: 'VMukti Solutions showcased its enterprise Cloud VMS and Enterprise Command Center solutions at GITEX Global 2025, the world\'s largest tech exhibition in Dubai.',
      startDate: '2025-10-13',
      endDate: '2025-10-17',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
      organizer: { '@type': 'Organization', name: 'DWTC (Dubai World Trade Centre)' },
    },
    {
      '@type': 'Event',
      name: 'VMukti at GITEX Global 2024',
      description: 'VMukti Solutions showcased its enterprise Cloud VMS and Enterprise Command Center solutions at GITEX Global 2024, the world\'s largest tech exhibition in Dubai.',
      startDate: '2024-10-14',
      endDate: '2024-10-18',
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

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VMukti Solutions - Enterprise AI Video Intelligence',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable', '[data-speakable]', '.hero-description']
  },
  url: 'https://www.vmukti.com'
};

const wixFont = localFont({
  src: '../public/assets/Wix_Madefor_Display/WixMadeforDisplay-VariableFont_wght.ttf',
  variable: '--font-wix',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={wixFont.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Issue #4 â Preconnect hints for third-party domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Issue #3 â Preload hero image to improve LCP */}
        {/* Preload hero image for desktop */}
        <link
          rel="preload"
          as="image"
          href="/assets/tablet2.webp"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        {/* Preload hero image for mobile */}
        <link
          rel="preload"
          as="image"
          href="/assets/tablet.webp"
          fetchPriority="high"
          media="(max-width: 767px)"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
      </head>
      {/* Issue #2 â suppressHydrationWarning prevents React from throwing on SSR/CSR
          mismatches caused by ChakraUI color-mode attribute injected by the browser
          extension, or minor differences in client-only hooks (useInView, etc.). */}
      <body suppressHydrationWarning>
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
