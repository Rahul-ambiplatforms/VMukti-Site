"use client";

import React, { useRef } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// --- GSAP Plugin Registration ---
// It's essential to register the plugin for ScrollTrigger to work.
gsap.registerPlugin(ScrollTrigger);

// --- Feature Card Component (Your Exact Code) ---
const FeatureCard = ({ feature, bgColor }) => (
  <Flex
    direction="column"
    w={["85vw", "85vw", "92vw", "92vw"]}
    h={["60vh", "60vh", "60vh", "65vh"]}
    flexShrink={0}
    mr={["5vw", "5vw", "5vw", "2vw"]}
    align="center"
    justify="center"
    mt="1%"
  >
    <Box
      position="relative"
      w="100%"
      h={["60vh", "60vh", "60vh", "65vh"]}
      borderRadius="20px"
      overflow="hidden"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/assets/${feature.image}`}
        alt={feature.title}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Box
        position="absolute"
        bottom={{ base: 0, md: 8 }}
        left={{
          base: "0",
          sm: bgColor === "blue" ? "50%" : 8, 
          md: bgColor === "blue" ? "50%" : 8, 
          lg: bgColor === "blue" ? "66%" : 8, 
        }}
        // left={{ base: 0, md: bgColor === "blue" ? "66%" : 8 }}
        // left={["0","bgColor === "blue" ? "50%" : 8","bgColor === "blue" ? "66%" : 8","bgColor === "blue" ? "66%" : 8"]}
        p={{ base: 4, md: 5 }}
        // w={{ base: "85%", sm: "60%", md: "30%" }}
        w={["100%", "100%", "45%", "30%"]}
        h={["45%", "45%", "90%", "90%"]}
        bg="rgba(255, 255, 255, 0.95)"
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h3"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight="700"
          color="#000"
          lineHeight="30px"
          textAlign="center"
          w="70%"
        >
          {feature.title}
        </Heading>
        <Box
          width="25px"
          height="3px"
          borderRadius="full"
          bg="#3F77A5"
          my={2}
        />
        <Text
          fontSize={{ base: "14px", md: "14px", lg: "14px" }}
          fontWeight="500"
          color="#444444"
          lineHeight="18px"
          textAlign="center"
          as="p"
        >
          {feature.description}
        </Text>
      </Box>
    </Box>
  </Flex>
);

// --- Horizontal Scroll Component (Your Exact Code) ---
const HorizontalScrollFeatures = ({ scrollData = [] }) => {
  const mainContainerRef = useRef(null);

  useGSAP(
    () => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      horizontalSections.forEach((section) => {
        const track = section.querySelector(".horizontal-track");
        const scrollAmount = track.scrollWidth - section.offsetWidth;

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 16% top",
            pin: true,
            scrub: 1.5,
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: mainContainerRef, dependencies: [scrollData] }
  );

  if (!scrollData || scrollData.length === 0) {
    return null;
  }

  return (
    <Box ref={mainContainerRef} width="100%">
      {scrollData.map((sectionData) => (
        <Flex
          key={sectionData.id}
          className="horizontal-section"
          direction="column"
          justify="center"
          h={["80vh", "80vh", "80vh", "85vh"]}
          w="100%"
          position="relative"
          overflow="hidden"
          bg={sectionData.bgColor === "blue" ? "#3F77A5" : "white"}
          borderRadius="24px"
          mt="2%"
          mb="-4%"
        >
          <Heading
            as="h2"
            fontSize={{ base: "20px", md: "36px" }}
            fontWeight="500"
            lineHeight={{ base: "25px", md: "45px" }}
            w={["90%", "90%", "90%", "60%"]}
            position="absolute"
            top={{ base: "3%", md: "2%" }}
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
            zIndex={2}
            color={sectionData.bgColor === "blue" ? "white" : "black"}
          >
            {sectionData.mainHeading}
          </Heading>

          <Flex
            className="horizontal-track"
            w="max-content"
            h="100%"
            align="center"
            pl={{ base: "5vw", md: "2vw" }}
            mt={["15%", "10%", "10%", "2%"]}
          >
            {sectionData.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                bgColor={sectionData.bgColor}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default HorizontalScrollFeatures;
