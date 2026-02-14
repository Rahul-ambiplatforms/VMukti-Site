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
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('VMukti Prerender Routes:');
  console.log(JSON.stringify(routes, null, 2));
  console.log(`Total: ${routes.length} routes`);
}
