import { useParams } from "react-router-dom";
import IndustryContent from "./IndustryContent";
import React from "react";
import PageContentWrapper from "./PageContentWrapper";
import { Box } from "@chakra-ui/react";
import industriesData from "../data/industriesConstData"; // Centralized data file

// const toCamelCase = (str) => {
//     return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// };

const IndustryDetails = () => {     
    const { name } = useParams();
    const solutionKey = name.replace(/-/g, "");
    const content = industriesData[solutionKey.toLowerCase()];
    // console.log("Industry Name: ", solutionKey);
    

    if (!content) {
        return (
            <PageContentWrapper>
                <Box mt="2%">Content not found.</Box>
            </PageContentWrapper>
        );
    }

    return <IndustryContent content={content} />;
};

export default IndustryDetails;