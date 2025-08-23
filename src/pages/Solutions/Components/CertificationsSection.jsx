import React from "react";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CertificationsData from "../../../data/certificationsConstData";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import { easeOut } from "framer-motion";

const CertificationsSection = () => {
  return (
    <Box py={{ base: "6", md: "12" }} position="relative" mb="-2%">
      {/* --- This section remains unchanged --- */}
      <HeadingAnimation>
        <Heading
          textAlign="center"
          mb={{ base: "4", md: "10" }}
          fontSize={{ base: "2xl", md: "36px" }}
          fontWeight="600"
          lineHeight="normal"
          color="#000"
          zIndex={1}
        >
          Our Certifications
        </Heading>
      </HeadingAnimation>

      {/* <Box
        position="absolute"
        top={{ base: "20%", md: "0%" }}
        left={{ base: "5%", md: "30%" }}
        width="60%"
        opacity={0.8}
        zIndex={0}
      >
        <Image
          src={`${process.env.PUBLIC_URL}/assets/BannerBroucher.png`}
          alt="VMukti Brochure"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </Box> */}

      {/* <Box
        position="absolute"
        left={{ base: "50%", md: "20%", lg: "12%" }}
        top={{ base: "5%", md: "7%", lg: "9%" }}
        transform={{ base: "translateX(-50%)", md: "none", lg: "none" }}
        width={{ base: "200px", md: "300px", lg: "408px" }}
        height={{ base: "200px", md: "300px", lg: "408px" }}
        borderRadius="408px"
        opacity="0.12"
        background="#3F77A5"
        filter="blur(56.6px)"
        flexShrink={0}
        pointerEvents="none"
        zIndex="0"
      /> */}

      {/* --- ✅ ALL CHANGES ARE IN THIS BLOCK --- */}
      <Flex
        zIndex="3"
        gap={{ base: "15px", md: "25px" }} 
        flexWrap="nowrap"
        overflowX="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none", // For Firefox
        }}
        // Aligns items and provides padding at the start and end of the scroll area
        justifyContent="flex-start"
        // maxW="1200px"
        // mx="auto"
        px={4} // Adds some padding so cards don't touch the edges
      >
        {CertificationsData.map((cert, index) => (
          <Flex
            as={motion.div}
            key={index}
            direction="column"
            align="center"
            justify="center"
            p={{ base: "2", md: "4" }}
            bg="#fff"
            borderRadius="24px"
            textAlign="center"
            // ✅ CHANGE: Decreased card size and added flexShrink
            boxSize={{ base: "140px", md: "140px" }} // Cleaner way to set a square size
            flexShrink={1} // Prevents items from shrinking
            zIndex="3"
          >
            <Box mb={3} color={cert.color}>
              {cert.icon}
            </Box>
            <Text
              fontSize={{ base: "12px", md: "14px" }} // Slightly adjusted font for new size
              fontWeight="500"
              color="black"
              mb={1}
              lineHeight="1.2" // Improves readability
            >
              {cert.name}
            </Text>
            {cert.description && (
              <Text
                fontSize={{ base: "sm", md: "14px" }} // Adjusted font
                color="black"
                fontWeight="500"
              >
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
