import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import CertificationsData from "../../../data/certificationsConstData";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";

const CertificationsSection = () => {
  // animation speed (higher = slower). Adjust seconds as needed.
  const durationSeconds = 20;

  return (
    <Box py={{ base: "2", md: "4" }} mt="3%" position="relative" overflow="hidden">
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

      {/* MARQUEE WRAPPER */}
      <Box
        // outer wrapper hides overflow and handles hover to pause
        width="100%"
        overflow="hidden"
        px={{ base: 4, md: 8 }}
        // pause animation on hover
        sx={{
          "&:hover .marqueeTrack": {
            animationPlayState: "paused",
          },
        }}
      >
        {/* TRACK: duplicated content for seamless infinite scroll */}
        <Flex
          as="div"
          className="marqueeTrack"
          align="center"
          // the keyframes are declared here via sx
          sx={{
            display: "inline-flex",
            gap: "24px",
            animation: `marquee ${durationSeconds}s linear infinite`,
            animationPlayState: "running",
            whiteSpace: "nowrap",
            // hide native scrollbar on webkit & firefox
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            // keyframes
            "@keyframes marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: `translateX(-50%)` }, // moves half the width because we duplicate items
            },
          }}
        >
          {/* first copy */}
          <Flex as="div" align="center" gap={{ base: 4, md: 6 }}>
            {CertificationsData.map((cert, index) => (
              <Flex
                key={`first-${index}`}
                direction="column"
                align="center"
                justify="center"
                bg="#fff"
                borderRadius="24px"
                textAlign="center"
                minW={{ base: "150px", md: "140px" }}
                boxSize={{ base: "166px", md: "140px" }}
                flexShrink={0}
                px={3}
                py={4}
                boxShadow="sm"
              >
                <Box mb={3} color={cert.color}>
                  {cert.icon}
                </Box>
                <Text fontSize="14px" fontWeight="500" color="black" mb={1} lineHeight="1.2">
                  {cert.name}
                </Text>
                {cert.description && (
                  <Text fontSize="12px" color="black" fontWeight="500">
                    {cert.description}
                  </Text>
                )}
              </Flex>
            ))}
          </Flex>

          {/* second copy (duplicate) */}
          <Flex as="div" align="center" gap={{ base: 4, md: 6 }}>
            {CertificationsData.map((cert, index) => (
              <Flex
                key={`second-${index}`}
                direction="column"
                align="center"
                justify="center"
                bg="#fff"
                borderRadius="24px"
                textAlign="center"
                minW={{ base: "150px", md: "140px" }}
                boxSize={{ base: "166px", md: "140px" }}
                flexShrink={0}
                px={3}
                py={4}
                boxShadow="sm"
              >
                <Box mb={3} color={cert.color}>
                  {cert.icon}
                </Box>
                <Text fontSize="14px" fontWeight="500" color="black" mb={1} lineHeight="1.2">
                  {cert.name}
                </Text>
                {cert.description && (
                  <Text fontSize="12px" color="black" fontWeight="500">
                    {cert.description}
                  </Text>
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CertificationsSection;
