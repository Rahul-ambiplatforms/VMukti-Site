const fs = require("fs");
const path = require("path");
const axios = require("axios");

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const BASE_URL = "https://vmukti.com";

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0]; // Only date
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
  try {
    const response = await axios.get(`${API_URL}/blog`);
    if (Array.isArray(response.data)) return response.data;
    else if (Array.isArray(response.data.blogs)) return response.data.blogs;
    else if (Array.isArray(response.data.data)) return response.data.data;
    else {
      console.error("Unexpected blog API format:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching blog posts from API:", error);
    return [];
  }
};

const generateSitemap = async () => {
  try {
    const blogPosts = await fetchBlogPosts();

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const staticPages = [
      {
        loc: "/",
        priority: "1.0",
        changefreq: "daily",
        lastmod: getPageLastModified("Home"),
      },
      {
        loc: "/technology",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Technology"),
      },
      {
        loc: "/solutions",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Solutions"),
      },
      {
        loc: "/industries",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/retailindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/manufacturingindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/healthcareindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/educationindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/financeindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/transportationindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/citymonitoring",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/agricultureindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/warehousinglogisticIndustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/entertainmentindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/defenseindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/election",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/industries/hospitalityindustry",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("IndustriesDashboard"),
      },
      {
        loc: "/serving",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("OurServings"),
      },
      {
        loc: "/serving/enterprise",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("OurServings"),
      },
      {
        loc: "/serving/government",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("OurServings"),
      },
      {
        loc: "/whoweare",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("WhoweAre"),
      },
      {
        loc: "/whoweare/event-spotlight",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("EventSpotlight"),
      },
      {
        loc: "/blogs",
        priority: "0.6",
        changefreq: "monthly",
        lastmod: getPageLastModified("BlogsDashboard"),
      },
      {
        loc: "/whoweare/careers",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("career"),
      },
      {
        loc: "/ambicam",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("Ambicam"),
      },
      {
        loc: "/contact-us",
        priority: "0.8",
        changefreq: "weekly",
        lastmod: getPageLastModified("ContactUs"),
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

      if (page.loc === "/blogs") {
        blogPosts.forEach((post) => {
          if (post.metadata?.urlWords && post.updatedAt) {
            const lastmod = formatDate(post.updatedAt.$date || post.updatedAt);
            sitemap += `
              <url>
                <loc>${BASE_URL}/blogs/${post.metadata.urlWords}</loc>
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
