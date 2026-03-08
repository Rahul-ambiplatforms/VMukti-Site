import { Providers } from './providers';
import SiteLayout from './site-layout';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://www.vmukti.com';

// Default metadata for all pages (can be overridden per page)
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VMukti | Enterprise Cloud VMS, EMS & ICCC Platform | 18+ Years',
    template: '%s | VMukti Solutions',
  },
  description: 'VMukti Solutions: STQC-certified enterprise cloud VMS, EMS, and ICCC platform. 900+ global deployments, 1B+ camera feeds processed. Trusted by governments and enterprises worldwide.',
  keywords: ['enterprise cloud VMS', 'video management system', 'ICCC platform', 'EMS enterprise management', 'STQC certified surveillance', 'global VMS provider'],
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
    title: 'VMukti | Enterprise Cloud VMS, EMS & ICCC Platform',
    description: 'STQC-certified enterprise cloud VMS, EMS, and ICCC platform. 900+ global deployments.',
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
    title: 'VMukti | Enterprise Cloud VMS, EMS & ICCC Platform',
    description: 'STQC-certified enterprise cloud VMS, EMS, and ICCC platform.',
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
  description: 'Enterprise Cloud VMS, EMS & ICCC Platform Provider. 18+ years of innovation in video surveillance and intelligent operations management.',
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
  knowsAbout: ['Cloud VMS', 'Enterprise Management System', 'ICCC', 'AI Video Analytics', 'Smart City Surveillance'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
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
