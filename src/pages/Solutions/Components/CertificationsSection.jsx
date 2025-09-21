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

      <Flex
        flexWrap={{ base: "wrap", md: "nowrap" }}
        justifyContent={{ base: "center", md: "center" }}
        overflowX={{ base: "visible", md: "auto" }}
        gap={{ base: 2, md: 4 }}
        mx="auto"
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          "&::-webkit-scrollbar-thumb": {},
          "scrollbar-width": "none", // For Firefox
        }}
      >
        {CertificationsData.map((cert, index) => (
          <Flex
            as={motion.div}
            key={index}
            direction="column"
            align="center"
            justify="center"
            bg="#fff"
            borderRadius="24px"
            textAlign="center"
            boxSize={{ base: "166px", md: "140px" }}
            flexShrink={{ base: 0, md: 1 }}
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
