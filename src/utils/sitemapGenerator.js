const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL of your website
const BASE_URL = 'https://vmukti.com';

// Function to get current date in ISO format
const getCurrentDate = () => {
    return new Date().toISOString();
};

// Function to fetch blog posts from your backend
const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
};

// Function to generate sitemap XML
const generateSitemap = async () => {
    try {
        // Fetch blog posts
        const blogPosts = await fetchBlogPosts();

        // Start XML content
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        // Add static pages
        const staticPages = [
            {
                loc: '/',
                priority: '1.0',
                changefreq: 'daily',
                lastmod: getCurrentDate()
            },
            {
                loc: '/whoweare',
                priority: '0.8',
                changefreq: 'monthly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/solutions',
                priority: '0.9',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/our-servings',
                priority: '0.9',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/technology',
                priority: '0.8',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/ambicam',
                priority: '0.8',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/industries',
                priority: '0.8',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/event-spotlight',
                priority: '0.7',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/blogs',
                priority: '0.8',
                changefreq: 'daily',
                lastmod: getCurrentDate()
            },
            {
                loc: '/career',
                priority: '0.7',
                changefreq: 'weekly',
                lastmod: getCurrentDate()
            },
            {
                loc: '/contact-us',
                priority: '0.6',
                changefreq: 'monthly',
                lastmod: getCurrentDate()
            }
        ];

        // Add static pages to sitemap
        staticPages.forEach(page => {
            sitemap += `
    <url>
        <loc>${BASE_URL}${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`;
        });

        // Add blog posts to sitemap
        blogPosts.forEach(post => {
            sitemap += `
    <url>
        <loc>${BASE_URL}/blogs/${post.slug}</loc>
        <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`;
        });

        // Close XML
        sitemap += '\n</urlset>';

        // Write to sitemap.xml
        const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap);
        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

module.exports = generateSitemap; 