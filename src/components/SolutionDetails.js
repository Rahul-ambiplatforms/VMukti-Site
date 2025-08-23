import { useParams } from "react-router-dom";
import SolutionContent from "./SolutionContent"; // We'll assume a new component for rendering solutions
import React from "react";
import PageContentWrapper from "./PageContentWrapper"; // Assuming this is a shared layout wrapper
import { Box } from "@chakra-ui/react";
import { solutionsData } from "../data/solutionsConstData"; // Import your new centralized solutions data

// Helper function to convert "kebab-case-url" to "PascalCaseKey"
// e.g., "video-management-system" -> "VideoManagementSystem"
const toPascalCase = (str) => {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const SolutionDetails = () => {
  const { name } = useParams(); // e.g., "videomanagementsystem"

  // ✅ The lookup is now direct and case-insensitive
  const content = solutionsData[name.toLowerCase()];

  // If no content is found for that key, show a message
  if (!content) {
    return (
      <PageContentWrapper>
        <Box mt="2%" textAlign="center" fontSize="xl">
          Content not found.
        </Box>
      </PageContentWrapper>
    );
  }

  // If content is found, pass it to the rendering component
  return <SolutionContent content={content} />;
};

export default SolutionDetails;
