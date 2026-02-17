/**
 * VMukti Prerender Routes Configuration
 *
 * This script generates a list of all routes that need to be prerendered
 * for SEO crawlability. Used by react-snap during build.
 *
 * Usage: Add to package.json scripts:
 *   "postbuild": "react-snap"
 *
 * And add reactSnap config to package.json:
 *   "reactSnap": {
 *     "include": [routes from this file],
 *     "headless": true,
 *     "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]
 *   }
 */

const routes = [
  // Core pages
  '/',
  '/about-us',
  '/contact-us',
  '/book-a-demo',
  '/careers',
  '/blog',
  '/privacy-policy',
  '/terms-and-conditions',

  // Regional pages
  '/usa/video-surveillance-solutions',
  '/uk/video-surveillance-solutions',

  // Solutions
  '/solution',
  '/solution/video-management-system',
  '/solution/enterprise-management-system',
  '/solution/integrated-command-control-center',
  '/solution/live-streaming-solution',
  '/solution/flying-squad-vehicle',
  '/solution/cloudai',
  '/solution/genai',
  '/solution/visualbot',

  // Industries
  '/industry',
  '/industry/banking',
  '/industry/healthcare',
  '/industry/smart-city',
  '/industry/manufacturing',
  '/industry/oil-and-gas',
  '/industry/construction',
  '/industry/education',
  '/industry/transportation',
  '/industry/warehouse',
  '/industry/logistics',
  '/industry/sports-entertainment',
  '/industry/defense',
  '/industry/election',
  '/industry/hospitality',
  '/industry/pharma',
  '/industry/enterprise',
  '/industry/government',
,
    // SEO Landing Pages - 114 routes
    '/solutions/cloud-native-vms',
    '/solutions/generative-ai-surveillance',
    '/solutions/ai-video-analytics',
    '/solutions/smart-cities',
    '/solutions/transportation',
    '/solutions/banking-finance',
    '/solutions/retail-analytics',
    '/solutions/oil-gas',
    '/middle-east',
    '/saudi-arabia',
    '/africa',
    '/europe',
    '/middle-east/cloud-native-vms',
    '/middle-east/ai-video-analytics',
    '/middle-east/smart-city-surveillance',
    '/middle-east/enterprise-management',
    '/middle-east/generative-ai',
    '/middle-east/edge-computing',
    '/saudi-arabia/cloud-native-vms',
    '/saudi-arabia/ai-video-analytics',
    '/saudi-arabia/smart-city-surveillance',
    '/saudi-arabia/enterprise-management',
    '/saudi-arabia/generative-ai',
    '/saudi-arabia/edge-computing',
    '/uae/cloud-native-vms',
    '/uae/ai-video-analytics',
    '/uae/smart-city-surveillance',
    '/uae/enterprise-management',
    '/uae/generative-ai',
    '/uae/edge-computing',
    '/qatar/cloud-native-vms',
    '/qatar/ai-video-analytics',
    '/qatar/smart-city-surveillance',
    '/qatar/enterprise-management',
    '/qatar/generative-ai',
    '/qatar/edge-computing',
    '/africa/cloud-native-vms',
    '/africa/ai-video-analytics',
    '/africa/smart-city-surveillance',
    '/africa/enterprise-management',
    '/africa/generative-ai',
    '/africa/edge-computing',
    '/europe/cloud-native-vms',
    '/europe/ai-video-analytics',
    '/europe/smart-city-surveillance',
    '/europe/enterprise-management',
    '/europe/generative-ai',
    '/europe/edge-computing',
    '/latin-america/cloud-native-vms',
    '/latin-america/ai-video-analytics',
    '/latin-america/smart-city-surveillance',
    '/latin-america/enterprise-management',
    '/latin-america/generative-ai',
    '/latin-america/edge-computing',
    '/southeast-asia/cloud-native-vms',
    '/southeast-asia/ai-video-analytics',
    '/southeast-asia/smart-city-surveillance',
    '/southeast-asia/enterprise-management',
    '/southeast-asia/generative-ai',
    '/southeast-asia/edge-computing',
    '/middle-east/banking-finance-surveillance',
    '/middle-east/oil-gas-surveillance',
    '/middle-east/transportation-surveillance',
    '/middle-east/retail-surveillance',
    '/saudi-arabia/banking-finance-surveillance',
    '/saudi-arabia/oil-gas-surveillance',
    '/saudi-arabia/transportation-surveillance',
    '/saudi-arabia/retail-surveillance',
    '/uae/banking-finance-surveillance',
    '/uae/oil-gas-surveillance',
    '/uae/transportation-surveillance',
    '/uae/retail-surveillance',
    '/qatar/banking-finance-surveillance',
    '/qatar/oil-gas-surveillance',
    '/qatar/transportation-surveillance',
    '/qatar/retail-surveillance',
    '/africa/banking-finance-surveillance',
    '/africa/oil-gas-surveillance',
    '/africa/transportation-surveillance',
    '/africa/retail-surveillance',
    '/europe/banking-finance-surveillance',
    '/europe/oil-gas-surveillance',
    '/europe/transportation-surveillance',
    '/europe/retail-surveillance',
    '/latin-america/banking-finance-surveillance',
    '/latin-america/oil-gas-surveillance',
    '/latin-america/transportation-surveillance',
    '/latin-america/retail-surveillance',
    '/southeast-asia/banking-finance-surveillance',
    '/southeast-asia/oil-gas-surveillance',
    '/southeast-asia/transportation-surveillance',
    '/southeast-asia/retail-surveillance',
    '/industry/healthcare-surveillance',
    '/industry/education-surveillance',
    '/industry/hospitality-surveillance',
    '/industry/manufacturing-surveillance',
    '/industry/warehousing-surveillance',
    '/industry/government-defense-surveillance',
    '/compare/vmukti-vs-milestone',
    '/compare/vmukti-vs-genetec',
    '/compare/vmukti-vs-avigilon',
    '/compare/vmukti-vs-hikvision',
    '/compare/cloud-vms-vs-on-premise',
    '/compare/ai-vs-traditional-surveillance',
    '/compare/open-vs-proprietary-vms',
    '/compare/hosted-vs-self-hosted-vms',
    '/resources/vms-buyers-guide',
    '/resources/video-surveillance-roi',
    '/resources/cloud-migration-guide',
    '/resources/smart-city-implementation',
    '/resources/compliance-guide',
    '/resources/integration-guide',
    '/resources/infrastructure-planning',
    '/resources/ai-analytics-deployment'
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('VMukti Prerender Routes:');
  console.log(JSON.stringify(routes, null, 2));
  console.log(`Total: ${routes.length} routes`);
}
/**
 * VMukti Prerender Routes Configuration
 *
 * This script generates a list of all routes that need to be prerendered
 * for SEO crawlability. Used by react-snap during build.
 *
 * Usage: Add to package.json scripts:
 *   "postbuild": "react-snap"
 *
 * And add reactSnap config to package.json:
 *   "reactSnap": {
 *     "include": [routes from this file],
 *     "headless": true,
 *     "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]
 *   }
 */

const routes = [
  // Core pages
  '/',
  '/about-us',
  '/contact-us',
  '/book-a-demo',
  '/careers',
  '/blog',
  '/privacy-policy',
  '/terms-and-conditions',

  // Regional pages
  '/usa/video-surveillance-solutions',
  '/uk/video-surveillance-solutions',

  // Solutions
  '/solution',
  '/solution/video-management-system',
  '/solution/enterprise-management-system',
  '/solution/integrated-command-control-center',
  '/solution/live-streaming-solution',
  '/solution/flying-squad-vehicle',
  '/solution/cloudai',
  '/solution/genai',
  '/solution/visualbot',

  // Industries
  '/industry',
  '/industry/banking',
  '/industry/healthcare',
  '/industry/smart-city',
  '/industry/manufacturing',
  '/industry/oil-and-gas',
  '/industry/construction',
  '/industry/education',
  '/industry/transportation',
  '/industry/warehouse',
  '/industry/logistics',
  '/industry/sports-entertainment',
  '/industry/defense',
  '/industry/election',
  '/industry/hospitality',
  '/industry/pharma',
  '/industry/enterprise',
  '/industry/government',
,
  // SEO Landing Pages
  '/technology/cloud-native-vms',
  '/technology/generative-ai-surveillance',
  '/technology/ai-video-analytics',
  '/solutions/smart-cities',
  '/solutions/transportation',
  '/solutions/banking-finance',
  '/solutions/retail-analytics',
  '/solutions/oil-gas',
  '/middle-east/video-surveillance-solutions',
  '/saudi-arabia/smart-city-surveillance',
  '/africa/video-surveillance',
  '/europe/cloud-vms',
  '/compare/cloud-vms-vs-on-premise',
  '/resources/vms-buyers-guide'

  // Expansion SEO pages
  '/usa/cloud-video-surveillance-new-york',
  '/usa/cloud-video-surveillance-los-angeles',
  '/usa/cloud-video-surveillance-chicago',
  '/usa/cloud-video-surveillance-houston',
  '/usa/cloud-video-surveillance-miami',
  '/usa/cloud-video-surveillance-dallas',
  '/usa/cloud-video-surveillance-san-francisco',
  '/usa/cloud-video-surveillance-seattle',
  '/usa/cloud-video-surveillance-boston',
  '/usa/cloud-video-surveillance-atlanta',
  '/uk/cloud-video-surveillance-london',
  '/uk/cloud-video-surveillance-manchester',
  '/uk/cloud-video-surveillance-birmingham',
  '/uk/cloud-video-surveillance-leeds',
  '/uk/cloud-video-surveillance-glasgow',
  '/uk/cloud-video-surveillance-liverpool',
  '/uk/cloud-video-surveillance-bristol',
  '/uk/cloud-video-surveillance-edinburgh',
  '/uk/cloud-video-surveillance-cardiff',
  '/uk/cloud-video-surveillance-belfast',
  '/india/cloud-video-surveillance-mumbai',
  '/india/cloud-video-surveillance-delhi',
  '/india/cloud-video-surveillance-bangalore',
  '/india/cloud-video-surveillance-hyderabad',
  '/india/cloud-video-surveillance-chennai',
  '/india/cloud-video-surveillance-pune',
  '/india/cloud-video-surveillance-ahmedabad',
  '/india/cloud-video-surveillance-kolkata',
  '/india/cloud-video-surveillance-jaipur',
  '/india/cloud-video-surveillance-surat',
  '/canada/cloud-video-surveillance-toronto',
  '/canada/cloud-video-surveillance-vancouver',
  '/canada/cloud-video-surveillance-montreal',
  '/canada/cloud-video-surveillance-calgary',
  '/canada/cloud-video-surveillance-ottawa',
  '/australia/cloud-video-surveillance-sydney',
  '/australia/cloud-video-surveillance-melbourne',
  '/australia/cloud-video-surveillance-brisbane',
  '/australia/cloud-video-surveillance-perth',
  '/australia/cloud-video-surveillance-adelaide',
  '/industry/cloud-video-surveillance-for-manufacturing',
  '/industry/cloud-video-surveillance-for-retail',
  '/industry/cloud-video-surveillance-for-healthcare',
  '/industry/cloud-video-surveillance-for-education',
  '/industry/cloud-video-surveillance-for-banking',
  '/industry/cloud-video-surveillance-for-hospitality',
  '/compare/vmukti-vs-milestone',
  '/compare/vmukti-vs-genetec',
  '/compare/vmukti-vs-hikvision',
  '/compare/vmukti-vs-axis',
  '/compare/vmukti-vs-dahua',
  '/resources/cloud-vms-buyers-guide',
  '/resources/video-surveillance-roi-calculator',
  '/resources/ai-analytics-whitepaper',
  '/resources/cloud-migration-guide',
  '/resources/enterprise-security-playbook',
  // Innovation SEO Pages - Tier 1: Visual Bot Product Pages
  '/product/visual-bot-ai-video-assistant',
  '/product/visual-bot-enterprise-security',
  '/product/visual-bot-smart-city',
  '/product/visual-bot-retail-analytics',
  '/product/visual-bot-banking-finance',
  '/product/visual-bot-manufacturing',
  '/product/visual-bot-healthcare',
  '/product/visual-bot-logistics',
  '/product/visual-bot-education',
  '/product/visual-bot-vs-traditional-vms',
  // Innovation SEO Pages - Tier 2: Technology Authority Pages
  '/technology/generative-ai-video-surveillance',
  '/technology/computer-vision-security-cameras',
  '/technology/ai-video-analytics-platform',
  '/technology/edge-ai-video-processing',
  '/technology/gpt-powered-video-intelligence',
  '/technology/multi-camera-ai-tracking',
  '/technology/real-time-anomaly-detection',
  '/technology/ai-video-summarization',
  '/technology/cloud-native-vms-architecture',
  '/technology/open-api-video-integration',
  // Innovation SEO Pages - Tier 3: Event & Buyer Journey Pages
  '/resources/isc-west-2025-ai-surveillance',
  '/resources/isc-west-2026-visual-bot',
  '/resources/intersec-dubai-video-intelligence',
  '/resources/enterprise-vms-buyers-guide',
  '/resources/ai-surveillance-roi-calculator',
  '/resources/migrate-from-milestone-to-vmukti',
  '/resources/migrate-from-genetec-to-vmukti',
  '/resources/cloud-vms-total-cost-ownership',
  '/resources/multi-site-video-management',
  '/resources/video-analytics-deployment-guide',
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('VMukti Prerender Routes:');
  console.log(JSON.stringify(routes, null, 2));
  console.log(`Total: ${routes.length} routes`);
}
