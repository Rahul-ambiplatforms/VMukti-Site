import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CertificationsData from "../../../data/certificationsConstData";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";

const CertificationsSection = () => {
  return (
    <Box py={{ base: "2", md: "4" }} mt="5%" position="relative">
      <HeadingAnimation>
        <Heading
          textAlign="center"
          mb={{ base: "4", md: "10" }}
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          lineHeight="normal"
          color="#000"
          as="h2"
        >
          Our Certifications
        </Heading>
      </HeadingAnimation>

      {/* This is the scrolling container */}
      <Flex
        direction="row" // Explicitly set direction
        alignItems="center" // Good practice to vertically align items
        overflowX="auto" // Always allow horizontal scrolling
        // **** FIX #1: Change justifyContent to flex-start ****
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap={{ base: "wrap", md: "nowrap" }} // Keep wrapping on mobile
        gap={{ base: 4, md: 4 }}
        // **** FIX #2: Add horizontal padding for visual spacing ****
        px={{ base: 4, md: 8 }} // Adds space on the left and right
        mx="auto"
        // **** FIX #3: Correct the scrollbar hiding syntax ****
        sx={{
          "&::-webkit-scrollbar": {
            display: "none", // Hides scrollbar on Chrome, Safari, Edge
          },
          "scrollbar-width": "none", // Hides scrollbar on Firefox
        }}
      >
        {CertificationsData.map((cert, index) => (
          // This is a certification item
          <Flex
            as={motion.div}
            key={index}
            direction="column"
            align="center"
            justify="center"
            bg="#fff"
            borderRadius="24px"
            textAlign="center"
            // Use minW to prevent shrinking and ensure consistent size
            minW={{ base: "150px", md: "140px" }}
            boxSize={{ base: "166px", md: "140px" }}
            flexShrink={0} // Ensure items do not shrink
          >
            <Box mb={3} color={cert.color}>
              {cert.icon}
            </Box>
            <Text
              fontSize="14px"
              fontWeight="500"
              color="black"
              mb={1}
              lineHeight="1.2"
            >
              {cert.name}
            </Text>
            {cert.description && (
              <Text fontSize="14px" color="black" fontWeight="500">
                {cert.description}
              </Text>
            )}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default CertificationsSection;
