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

  // === Expansion SEO Pages (50 new routes) ===
  // US City Pages
  '/video-surveillance-new-york',
  '/video-surveillance-los-angeles',
  '/video-surveillance-chicago',
  '/video-surveillance-houston',
  '/video-surveillance-phoenix',
  '/video-surveillance-philadelphia',
  '/video-surveillance-san-antonio',
  '/video-surveillance-san-diego',
  '/video-surveillance-dallas',
  '/video-surveillance-san-jose',
  // UK City Pages
  '/video-surveillance-london',
  '/video-surveillance-manchester',
  '/video-surveillance-birmingham-uk',
  '/video-surveillance-leeds',
  '/video-surveillance-glasgow',
  '/video-surveillance-liverpool',
  '/video-surveillance-bristol',
  '/video-surveillance-edinburgh',
  '/video-surveillance-cardiff',
  '/video-surveillance-belfast',
  // India City Pages
  '/video-surveillance-mumbai',
  '/video-surveillance-delhi',
  '/video-surveillance-bangalore',
  '/video-surveillance-hyderabad',
  '/video-surveillance-chennai',
  '/video-surveillance-kolkata',
  '/video-surveillance-pune',
  '/video-surveillance-ahmedabad',
  '/video-surveillance-jaipur',
  '/video-surveillance-lucknow',
  // Canada City Pages
  '/video-surveillance-toronto',
  '/video-surveillance-vancouver',
  '/video-surveillance-montreal',
  '/video-surveillance-calgary',
  '/video-surveillance-ottawa',
  // Australia City Pages
  '/video-surveillance-sydney',
  '/video-surveillance-melbourne',
  '/video-surveillance-brisbane',
  '/video-surveillance-perth',
  '/video-surveillance-adelaide',
  // Industry Verticals
  '/video-surveillance-healthcare',
  '/video-surveillance-education',
  '/video-surveillance-manufacturing',
  '/video-surveillance-logistics',
  '/video-surveillance-hospitality-industry',
  '/video-surveillance-critical-infrastructure',
  // Resource Pages
  '/video-analytics-roi-calculator',
  '/smart-city-surveillance-whitepaper',
  '/ai-surveillance-trends-2025',
  '/choosing-right-vms',
];


module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('VMukti Prerender Routes:');
  console.log(JSON.stringify(routes, null, 2));
  console.log(`Total: ${routes.length} routes`);
}
