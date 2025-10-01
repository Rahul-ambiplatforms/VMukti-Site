import React from "react";
import HeroSection from "./HeroSection";
import BlogsContent from "./BlogsGrid";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
const BlogsDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Insights & Innovations: Explore Our Tech Journal </title>
        <meta
          name="description"
          content="Stay ahead of the curve with our expert insights, industry trends, and AI innovations. Explore our latest thoughts and breakthroughs."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Insights & Innovations: Explore Our Tech Journal"
        />
        <meta
          property="og:description"
          content="Stay ahead of the curve with our expert insights, industry trends, and AI innovations. Explore our latest thoughts and breakthroughs."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/blogs_dashboard.png"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://vmukti.com/blog" />
        <meta property="og:site_name" content="VMukti Solutions" />
        {/* <!-- Twitter Card Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content="Insights & Innovations: Explore Our Tech Journal"
        />
        <meta
          name="twitter:description"
          content="Stay ahead of the curve with our expert insights, industry trends, and AI innovations. Explore our latest thoughts and breakthroughs."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/blogs_dashboard.png"
        />
        <link rel="canonical" href="https://www.vmukti.com/blog" />
        {/* {blogsPageSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))} */}
      </Helmet>
      <Box>
        <HeroSection />
        <BlogsContent />
      </Box>
    </>
  );
};

export default BlogsDashboard;
