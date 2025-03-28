import { useParams } from "react-router-dom";
import IndustryContent from "../../components/IndustryContent";
import React from "react";
import PageContentWrapper from "../../components/PageContentWrapper";
import { Box } from "@chakra-ui/react";
import industriesData from "../../data/industriesConstData"; // Centralized data file

const toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
};

const IndustryDetails = () => {
    const { name } = useParams();
    const camelCaseName = toCamelCase(name);
    // Fetch content directly from the centralized data file
    const content = industriesData[name.toLowerCase()];
    // console.log("name is [", name, "], content is ", content);


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