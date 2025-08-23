import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

// You can create a new component file (e.g., HeroSection.jsx) and paste this code.
const SolutionDashboard = () => {
  // These responsive values ensure the component looks great on all screen sizes.
  const heroHeight = useBreakpointValue({ base: "70vh", md: "95vh" });
  const contentWidth = useBreakpointValue({
    base: "95%",
    md: "100%",
    lg: "100%",
  });
  //   const contentBottom = useBreakpointValue({ base: '20px', md: '40px' });
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 16 });
  const mainHeadingSize = useBreakpointValue({
    base: "3xl",
    md: "5xl",
    lg: "6xl",
  });
  const subHeadingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    // 1. The main Flex container.
    // It sets the background and centers its direct child (the VStack).
    <Flex
      w="100%"
      h={heroHeight}
      position="relative" // Crucial for layering the overlay
      alignItems="center"
      justifyContent="center"
      // Note: mt="-7%" can sometimes cause layout shifts.
      // This is kept as requested but be aware of its effects.
      mt="-7%"
      bgImage="url('../assets/solution_dash.png')" // Set your background here
      bgSize="cover"
      bgPosition="center"
      borderRadius="0px 0px 24px 24px"
    >
      {/* 2. A VStack now wraps both the heading and content box. */}
      {/* This stack is centered vertically and horizontally by the parent Flex. */}
      {/* It controls the vertical spacing and alignment of its children. */}
      // --- REPLACE your current VStack wrapper with this one ---
      <VStack
        // This group of props positions the entire block at the bottom
        position="absolute"
        bottom="-1%" // Anchors it to the bottom of the parent Flex container
        w="100%"
        align="center"
        // Controls the space BETWEEN the heading and the content box
        spacing={{ base: 6, md: 8 }}
        zIndex={1} // Ensures it appears on top of the background overlay
      >
        {/* The Heading and Box content remain unchanged */}

        <Heading
          as="h1"
          color="white"
          textAlign="center"
          fontSize={mainHeadingSize} // Make sure this variable is defined
          fontWeight="bold"
          w="80%"
        >
          Cutting-Edge Visual Solutions for a Smarter World
        </Heading>

        <Box
          w="100%"
          bg="rgba(255, 255, 255, 0.85)"
          backdropFilter="blur(10px)"
          py="2%"
          borderRadius="24px"
        >
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" fontSize="36px" fontWeight="500" color="black">
              Unified Surveillance Intelligence for Every Sector
            </Heading>
            <Text fontSize="16px" fontWeight="500" lineHeight="tall" w="80%">
              VMukti offers a unified surveillance solution with centralized
              video management, scalable enterprise VMS, and an integrated
              command center for real-time monitoring and response. Secure live
              streaming sends CCTV feeds directly to command centers with
              ultra-HD clarity and zero delay. Our Flying Squad Vehicle adds
              mobility with GPS tracking, AI surveillance, and instant video
              access for on-ground teams.
            </Text>
            <Text fontSize="16px" fontWeight="500" w="80%">
              Our smart analytics suite includes CloudAI for real-time threat
              detection, facial recognition, and safety alerts. GenAI enables
              smart search, automated reports, and camera access through VMS
              integration. VisualBot turns video into insights with API support
              for quick, actionable results.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default SolutionDashboard;
