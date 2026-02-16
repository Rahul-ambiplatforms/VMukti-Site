import { useParams } from "react-router-dom";
import IndustryContent from "./IndustryContent";
import React, { Suspense, lazy } from "react";
import PageContentWrapper from "./PageContentWrapper";
import { Box } from "@chakra-ui/react";
import industriesData from "../data/industriesConstData"; // Centralized data file

// Lazy load SEOLandingPage for when slug doesn't match known industries
const SEOLandingPage = lazy(() => import("../pages/SEOLandingPages/SEOLandingPage"));

// const toCamelCase = (str) => {
//     return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// };

const IndustryDetails = () => {
    const { name } = useParams();
    const solutionKey = name.replace(/-/g, "");
    const content = industriesData[solutionKey.toLowerCase()];
    // console.log("Industry Name: ", solutionKey);

    if (!content) {
        // If not a known industry page, render SEO Landing Page instead
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <SEOLandingPage />
            </Suspense>
        );
    }

    return <IndustryContent content={content} />;
};

export default IndustryDetails;
