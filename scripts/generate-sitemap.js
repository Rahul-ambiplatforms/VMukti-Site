const fs = require("fs");
const path = require("path");
const axios = require("axios");

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const API_URL = "https://vmukti.com/backend/api";
const BASE_URL = "https://www.vmukti.com";

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

const getPageLastModified = (pagePath) => {
  try {
    const stats = fs.statSync(
      path.join(process.cwd(), "src", "pages", pagePath)
    );
    return stats.mtime.toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error getting last modified date for ${pagePath}:`, error);
    return new Date().toISOString().split("T")[0];
  }
};

const fetchBlogPosts = async () => {
  // 1. Initial request to get pagination details
  const initialResponse = await axios.get(`${API_URL}/blogs`, {
    params: {
      page: 1,
      limit: 6 // You can keep the default limit for the initial check
    }
  });

  const pagination = initialResponse.data.pagination;
  const totalPages = pagination.total;
  const allBlogs = initialResponse.data.data;

  // 2. If there is more than one page, fetch the rest
  if (totalPages > 1) {
    const promises = [];
    for (let page = 2; page <= totalPages; page++) {
      promises.push(axios.get(`${API_URL}/blogs`, { params: { page, limit: 6 } }));
    }

    // 3. Execute all promises concurrently
    const responses = await Promise.all(promises);

    // 4. Combine the results
    responses.forEach(response => {
      allBlogs.push(...response.data.data);
    });
  }

  return allBlogs;
};

const generateSitemap = async () => {
  try {
    const blogPosts = await fetchBlogPosts();
    // console.log("Fetched blog posts:", blogPosts.length);

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const staticPages = [
      {
        loc: "/",
        priority: "1.0",
        changefreq: "daily",
        lastmod: getPageLastModified("Home"),
      },
      {
        loc: "/usa/video-surveillance-solutions",
        priority: "0.9",
        changefreq: "weekly",
        lastmod: getPageLastModified("Home_US"),
      },
      {
        loc: "/uk/video-surveillance-solutions",
        priority: "0.9",
        changefreq: "weekly",
        lastmod: getPageLastModified("Home_UK"),
      },
      {
        loc: "/solution",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/video-management-system",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/enterprise-management-system",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/integrated-command-control-center",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/live-streaming-solution",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/flying-squad-vehicle",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/cloudai",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/genai",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/visualbot",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/industry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/construction",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/manufacturing",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/healthcare",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/education",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/oil-and-gas",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/transportation",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/smart-city",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      // {
      //   loc: "/industry/agricultureindustry",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("IndustriesDashboard"),
      // },
      {
        loc: "/industry/warehouse",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/logistics",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/sports-entertainment",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/defense",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/election",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/hospitality",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/pharma",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/enterprise",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/banking",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/government",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      // {
      //   loc: "/serving",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      // {
      //   loc: "/serving/enterprise",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      // {
      //   loc: "/serving/government",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      {
        loc: "/whoweare",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Who"),
      },
      // {
      //   loc: "/whoweare/event-spotlight",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("EventSpotlight"),
      // },
      {
        loc: "/blog",
        priority: "0.6",
        changefreq: "monthly",
        lastmod: getPageLastModified("Blogs"),
      },
      // {
      //   loc: "/whoweare/careers",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("career"),
      // },
      // {
      //   loc: "/ambicam",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("Ambicam"),
      // },
      {
        loc: "/contact-us",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("ContactUs"),
      },
    // SEO Landing Pages - 114 URLs
    { loc: '/solutions/cloud-native-vms', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/generative-ai-surveillance', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/ai-video-analytics', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/smart-cities', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/transportation', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/banking-finance', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/retail-analytics', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/solutions/oil-gas', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe', priority: 0.8, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/uae/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/qatar/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/africa/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/europe/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/latin-america/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/cloud-native-vms', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/ai-video-analytics', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/smart-city-surveillance', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/enterprise-management', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/generative-ai', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/edge-computing', priority: 0.7, changefreq: 'weekly', lastmod: '2026-02-15' },
    { loc: '/middle-east/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/middle-east/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/middle-east/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/middle-east/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/saudi-arabia/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/uae/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/uae/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/uae/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/uae/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/qatar/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/qatar/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/qatar/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/qatar/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/africa/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/africa/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/africa/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/africa/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/europe/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/europe/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/europe/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/europe/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/latin-america/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/latin-america/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/latin-america/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/latin-america/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/banking-finance-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/oil-gas-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/transportation-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/southeast-asia/retail-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/healthcare-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/education-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/hospitality-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/manufacturing-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/warehousing-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/industry/government-defense-surveillance', priority: 0.6, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/vmukti-vs-milestone', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/vmukti-vs-genetec', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/vmukti-vs-avigilon', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/vmukti-vs-hikvision', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/cloud-vms-vs-on-premise', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/ai-vs-traditional-surveillance', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/open-vs-proprietary-vms', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/compare/hosted-vs-self-hosted-vms', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/vms-buyers-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/video-surveillance-roi', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/cloud-migration-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/smart-city-implementation', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/compliance-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/integration-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/infrastructure-planning', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' },
    { loc: '/resources/ai-analytics-deployment', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-15' }
    ,
      // === Expansion SEO Pages (56 routes) ===
      { loc: '/usa/cloud-video-surveillance-new-york', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-los-angeles', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-chicago', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-houston', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-miami', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-dallas', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-san-francisco', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-seattle', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-boston', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/usa/cloud-video-surveillance-atlanta', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-london', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-manchester', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-birmingham', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-leeds', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-glasgow', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-edinburgh', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-bristol', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-liverpool', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-cardiff', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/uk/cloud-video-surveillance-belfast', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-mumbai', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-delhi', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-bangalore', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-hyderabad', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-chennai', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-pune', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-ahmedabad', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-kolkata', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-jaipur', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/india/cloud-video-surveillance-lucknow', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/canada/cloud-video-surveillance-toronto', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/canada/cloud-video-surveillance-vancouver', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/canada/cloud-video-surveillance-montreal', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/canada/cloud-video-surveillance-calgary', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/canada/cloud-video-surveillance-ottawa', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/australia/cloud-video-surveillance-sydney', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/australia/cloud-video-surveillance-melbourne', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/australia/cloud-video-surveillance-brisbane', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/australia/cloud-video-surveillance-perth', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/australia/cloud-video-surveillance-adelaide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/port-security-surveillance', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/airport-surveillance', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/highway-monitoring', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/data-center-security', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/critical-infrastructure', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/industry/public-transportation', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/compare/vmukti-vs-milestone', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/compare/vmukti-vs-genetec', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/compare/vmukti-vs-avigilon', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/compare/vmukti-vs-verkada', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/compare/vmukti-vs-rhombus', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/resources/cloud-vms-buyers-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/resources/ai-surveillance-roi-calculator', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/resources/multi-site-deployment-guide', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/resources/edge-vs-cloud-processing', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' },
      { loc: '/resources/video-analytics-use-cases', priority: 0.7, changefreq: 'monthly', lastmod: '2026-02-17' }
    ];

    for (const page of staticPages) {
      sitemap += `
        <url>
          <loc>${BASE_URL}${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`;

      if (page.loc === "/blog") {
        blogPosts.forEach((post) => {
          if (post.metadata?.urlWords && post.updatedAt) {
            const lastmod = formatDate(post.updatedAt.$date || post.updatedAt);
            sitemap += `
              <url>
                <loc>${BASE_URL}/blog/${post.metadata.urlWords}</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
              </url>`;
          }
        });
      }
    }

    sitemap += "\n</urlset>";
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

generateSitemap()
  .then(() => {
    console.log("Sitemap generation completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });

//npm i sitemap-generator
// npm run generate-sitemap
const fs = require("fs");
const path = require("path");
const axios = require("axios");

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const API_URL = "https://vmukti.com/backend/api";
const BASE_URL = "https://www.vmukti.com";

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

const getPageLastModified = (pagePath) => {
  try {
    const stats = fs.statSync(
      path.join(process.cwd(), "src", "pages", pagePath)
    );
    return stats.mtime.toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error getting last modified date for ${pagePath}:`, error);
    return new Date().toISOString().split("T")[0];
  }
};

const fetchBlogPosts = async () => {
  // 1. Initial request to get pagination details
  const initialResponse = await axios.get(`${API_URL}/blogs`, {
    params: {
      page: 1,
      limit: 6 // You can keep the default limit for the initial check
    }
  });

  const pagination = initialResponse.data.pagination;
  const totalPages = pagination.total;
  const allBlogs = initialResponse.data.data;

  // 2. If there is more than one page, fetch the rest
  if (totalPages > 1) {
    const promises = [];
    for (let page = 2; page <= totalPages; page++) {
      promises.push(axios.get(`${API_URL}/blogs`, { params: { page, limit: 6 } }));
    }

    // 3. Execute all promises concurrently
    const responses = await Promise.all(promises);

    // 4. Combine the results
    responses.forEach(response => {
      allBlogs.push(...response.data.data);
    });
  }

  return allBlogs;
};

const generateSitemap = async () => {
  try {
    const blogPosts = await fetchBlogPosts();
    // console.log("Fetched blog posts:", blogPosts.length);

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const staticPages = [
      {
        loc: "/",
        priority: "1.0",
        changefreq: "daily",
        lastmod: getPageLastModified("Home"),
      },
      {
        loc: "/usa/video-surveillance-solutions",
        priority: "0.9",
        changefreq: "weekly",
        lastmod: getPageLastModified("Home_US"),
      },
      {
        loc: "/uk/video-surveillance-solutions",
        priority: "0.9",
        changefreq: "weekly",
        lastmod: getPageLastModified("Home_UK"),
      },
      {
        loc: "/solution",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/video-management-system",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/enterprise-management-system",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/integrated-command-control-center",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/live-streaming-solution",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/flying-squad-vehicle",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/cloudai",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/genai",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/solution/visualbot",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/industry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/construction",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/manufacturing",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/healthcare",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/education",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/oil-and-gas",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/transportation",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/smart-city",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      // {
      //   loc: "/industry/agricultureindustry",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("IndustriesDashboard"),
      // },
      {
        loc: "/industry/warehouse",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/logistics",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/sports-entertainment",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/defense",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/election",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/hospitality",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/pharma",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/enterprise",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/banking",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industry/government",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      // {
      //   loc: "/serving",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      // {
      //   loc: "/serving/enterprise",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      // {
      //   loc: "/serving/government",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("OurServings"),
      // },
      {
        loc: "/whoweare",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Who"),
      },
      // {
      //   loc: "/whoweare/event-spotlight",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("EventSpotlight"),
      // },
      {
        loc: "/blog",
        priority: "0.6",
        changefreq: "monthly",
        lastmod: getPageLastModified("Blogs"),
      },
      // {
      //   loc: "/whoweare/careers",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("career"),
      // },
      // {
      //   loc: "/ambicam",
      //   priority: "0.8",
      //   changefreq: "weekly",
      //   lastmod: getPageLastModified("Ambicam"),
      // },
      {
        loc: "/contact-us",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("ContactUs"),
      },

      // SEO Landing Pages
      {
        loc: `/technology/cloud-native-vms`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/technology/generative-ai-surveillance`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/technology/ai-video-analytics`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/solutions/smart-cities`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/solutions/transportation`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/solutions/banking-finance`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/solutions/retail-analytics`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/solutions/oil-gas`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/middle-east/video-surveillance-solutions`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/saudi-arabia/smart-city-surveillance`,
        priority: `0.8`,
        changefreq: `weekly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/africa/video-surveillance`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/europe/cloud-vms`,
        priority: `0.7`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/compare/cloud-vms-vs-on-premise`,
        priority: `0.8`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
      {
        loc: `/resources/vms-buyers-guide`,
        priority: `0.8`,
        changefreq: `monthly`,
        lastmod: `2026-02-15`,
      },
    ];

    for (const page of staticPages) {
      sitemap += `
        <url>
          <loc>${BASE_URL}${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`;

      if (page.loc === "/blog") {
        blogPosts.forEach((post) => {
          if (post.metadata?.urlWords && post.updatedAt) {
            const lastmod = formatDate(post.updatedAt.$date || post.updatedAt);
            sitemap += `
              <url>
                <loc>${BASE_URL}/blog/${post.metadata.urlWords}</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.6</priority>
              </url>`;
          }
        });
      }
    }

    sitemap += "\n</urlset>";
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemap);
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

generateSitemap()
  .then(() => {
    console.log("Sitemap generation completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });

//npm i sitemap-generator
// npm run generate-sitemap
