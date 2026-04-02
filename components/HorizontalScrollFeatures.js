'use client';
import React, { useRef, useEffect } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

// --- GSAP Plugin Registration ---
// It's essential to register the plugin for ScrollTrigger to work.
// Only register on the client side to avoid SSR errors
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Feature Card Component (Your Exact Code) ---
const FeatureCard = ({ feature, bgColor }) => (
  <Flex
    direction="column"
    w={["85vw", "85vw", "92vw", "92vw"]}
    h={["55vh", "55vh", "55vh", "62vh"]}
    flexShrink={0}
    mr={["5vw", "5vw", "5vw", "2vw"]}
    align="center"
    justify="center"
    mt="0"
  >
    <Box
      position="relative"
      w="100%"
      h={["55vh", "55vh", "55vh", "62vh"]}
      borderRadius="20px"
      overflow="hidden"
      justifyContent={["center", "", "", ""]}
      alignItems={["center", "", "", ""]}
    >
      <Image loading="lazy"
        src={feature.image}
        alt={feature.title}
        className="lazyload"
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Box
        position="absolute"
        bottom={["0", "0", "2", "4"]}
        left={{
          base: "0",
          sm: bgColor === "blue" ? "50%" : 8,
          md: bgColor === "blue" ? "50%" : 2,
          lg: bgColor === "blue" ? "68%" : 8,
        }}
        // left={{ base: 0, md: bgColor === "blue" ? "66%" : 8 }}
        // left={["0","bgColor === "blue" ? "50%" : 8","bgColor === "blue" ? "66%" : 8","bgColor === "blue" ? "66%" : 8"]}
        p={{ base: 4, md: 5 }}
        w={["90%", "100%", "45%", "30%"]}
        h={["50%", "45%", "90%", "90%"]}
        bg="rgba(255, 255, 255, 0.95)"
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={["5%", "5%", "2%", "0"]}
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

  useEffect(() => {
    if (typeof window === 'undefined' || !mainContainerRef.current) return;
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      horizontalSections.forEach((section) => {
        const track = section.querySelector(".horizontal-track");
        const scrollAmount = track.scrollWidth - section.offsetWidth;

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 10% top",
            pin: true,
            scrub: 1.5,
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, mainContainerRef);
    return () => ctx.revert();
  }, [scrollData]);

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
          h={["75vh", "75vh", "75vh", "80vh"]}
          w="100%"
          position="relative"
          overflow="hidden"
          bg={sectionData.bgColor === "blue" ? "#3F77A5" : "white"}
          borderRadius="24px"
          mt="2%"
          mb="-4%"
          pt={{ base: 2, md: 3 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "18px", md: "36px" }}
            fontWeight="500"
            lineHeight={{ base: "24px", md: "45px" }}
            w={["90%", "90%", "90%", "60%"]}
            mx="auto"
            textAlign="center"
            flexShrink={0}
            zIndex={2}
            color={sectionData.bgColor === "blue" ? "white" : "black"}
            mb={{ base: 1, md: 1 }}
          >
            {sectionData.mainHeading}
          </Heading>

          <Flex
            className="horizontal-track"
            w="max-content"
            flex="1"
            align="center"
            pl={{ base: "5vw", md: "2vw" }}
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
