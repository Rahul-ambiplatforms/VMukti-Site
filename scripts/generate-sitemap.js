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
        loc: "/video-surveillance-solutions-usa",
        priority: "0.9",
        changefreq: "weekly",
        lastmod: getPageLastModified("Home_US"),
      },
      {
        loc: "/video-surveillance-solutions-uk",
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
