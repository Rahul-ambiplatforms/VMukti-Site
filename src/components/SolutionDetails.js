import { useParams } from "react-router-dom";
import SolutionContent from "./SolutionContent";
import React from "react";
import PageContentWrapper from "./PageContentWrapper";
import { Box } from "@chakra-ui/react";
import { solutionsData } from "../data/solutionsConstData";


const SolutionDetails = () => {
  const { name } = useParams();

  const solutionKey = name.replace(/-/g, "");

  const content = solutionsData[solutionKey];

  // If no content is found, show the message.
  if (!content) {
    return (
      <PageContentWrapper>
        <Box mt="2%" textAlign="center" fontSize="xl">
          Solution content not found.
        </Box>
      </PageContentWrapper>
    );
  }

  return <SolutionContent content={content} />;
};

export default SolutionDetails;