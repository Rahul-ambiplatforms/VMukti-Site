import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

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
    base: "48px",
    md: "64px",
    lg: "64px",
  });
  const subHeadingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <>
      <Helmet>
        <title>
          Powerful, Flexible Visual Intelligence Solutions for Businesses
        </title>
        <meta
          name="description"
          content="Tackle complex challenges with AI vision solutions built for speed, control and resilience trusted across industries where uptime and security are non-negotiable."
        />
      </Helmet>
      <Flex
        w="100%"
        h={heroHeight}
        position="relative" 
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
        <VStack
          position="absolute"
          bottom="-1%" 
          w="100%"
          align="center"
          spacing={{ base: 6, md: 8 }}
          zIndex={1}
        >
          <Heading
            as="h1"
            color="white"
            textAlign="center"
            fontSize={mainHeadingSize} // Make sure this variable is defined
            fontWeight="600"
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
              <Text fontSize="16px" fontWeight="500" w="80%" lineHeight="20px" color="#444">
                VMukti offers a unified surveillance solution with centralized
                video management, scalable enterprise VMS, and an integrated
                command center for real-time monitoring and response. Secure
                live streaming sends CCTV feeds directly to command centers with
                ultra-HD clarity and zero delay. Our Flying Squad Vehicle adds
                mobility with GPS tracking, AI surveillance, and instant video
                access for on-ground teams.
              </Text>
              <Text fontSize="16px" fontWeight="500" w="80%">
                Our smart analytics suite includes CloudAI for real-time threat
                detection, facial recognition, and safety alerts. GenAI enables
                smart search, automated reports, and camera access through VMS
                integration. VisualBot turns video into insights with API
                support for quick, actionable results.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};

export default SolutionDashboard;
