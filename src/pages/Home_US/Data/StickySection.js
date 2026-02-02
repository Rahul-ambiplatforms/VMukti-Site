import React from "react";
import { Box } from "@chakra-ui/react";

const StickySection = ({ children }) => (
    <Box
        position="relative"
        height={`${children.length}%`}
    >
        {children.map((child, index) => (
            <Box
                key={index}
                position="sticky"
                borderRadius="24px"
                top="15%"
                height="fit-content"
                zIndex={index + 1}
            >
                {child}
            </Box>
        ))}
    </Box>
);

export default StickySection;
