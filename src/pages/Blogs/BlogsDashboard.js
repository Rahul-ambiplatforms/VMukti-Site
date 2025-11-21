import React from "react";
import HeroSection from "./HeroSection";
import BlogsGrid from "./BlogsGrid";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
const BlogsDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Latest Trends & Insights for AI Video Surveillance & Cloud VMS | VMukti </title>
        <meta
          name="description"
          content="Explore expert insights on AI surveillance, Cloud VMS, EMS ICCC, video intelligence and smart security solutions. Stay updated with VMukti’s latest blogs and key trends."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Latest Trends & Insights for AI Video Surveillance & Cloud VMS | VMukti"
        />
        <meta
          property="og:description"
          content="Explore expert insights on AI surveillance, Cloud VMS, EMS ICCC, video intelligence and smart security solutions. Stay updated with VMukti’s latest blogs and key trends."
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
          content="Latest Trends & Insights for AI Video Surveillance & Cloud VMS | VMukti"
        />
        <meta
          name="twitter:description"
          content="Explore expert insights on AI surveillance, Cloud VMS, EMS ICCC, video intelligence and smart security solutions. Stay updated with VMukti’s latest blogs and key trends."
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
        <BlogsGrid />
      </Box>
    </>
  );
};

export default BlogsDashboard;
