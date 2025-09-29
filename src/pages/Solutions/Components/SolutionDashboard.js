import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

// You can create a new component file (e.g., HeroSection.jsx) and paste this code.
const SolutionDashboard = () => {
  // These responsive values ensure the component looks great on all screen sizes.
  const heroHeight = useBreakpointValue({ base: "120vh", md: "95vh" });
  const contentWidth = useBreakpointValue({
    base: "95%",
    md: "100%",
    lg: "100%",
  });
  //   const contentBottom = useBreakpointValue({ base: '20px', md: '40px' });
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 16 });
  const mainHeadingSize = useBreakpointValue({
    base: "32px",
    md: "64px",
    lg: "64px",
  });
  const subHeadingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <>
      <Flex
        w="100%"
        h={heroHeight}
        position="relative"
        alignItems="center"
        justifyContent="center"
        mt={["-4%", "", "-7%", "-7%"]}
        alt="Hero Image"
        bgSize="cover"
        bgPosition="center"
        borderRadius="0px 0px 24px 24px"
        // role="img"
        // aria-label="A modern dashboard displaying visual intelligence solutions and analytics"
      >
        {/* <Box borderRadius="24px"> */}
        <Image
          src="../assets/solution_dash.png"
          alt="Cutting-Edge Visual Solutions for a Smarter World"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex="base"
          borderRadius="24px"
          display={{ base: "none", md: "block" }}
        />
        <Image
          src="../assets/solution_dash_mobile.png"
          alt="Cutting-Edge Visual Solutions for a Smarter World"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex="base"
          borderRadius="24px"
          display={{ base: "block", md: "none" }}
        />
        {/* </Box> */}
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
            fontSize={mainHeadingSize}
            fontWeight="600"
            w={{ base: "100%", md: "80%" }}
            mb={["50%", "40%", "20%", "0"]}
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
              <Heading
                as="h2"
                fontSize={{ base: "20px", md: "36px" }}
                w="90%"
                p={["2%", "2%", "1%", "0"]}
                fontWeight="500"
                color="black"
                lineHeight={{ base: "25px", md: "40px" }}
              >
                Unified Surveillance Intelligence for Every Sector
              </Heading>
              <Text
                fontSize="16px"
                fontWeight="500"
                w="80%"
                lineHeight="20px"
                color="#444"
                as="p"
              >
                VMukti offers a unified surveillance solution with centralized
                video management, scalable enterprise VMS, and an integrated
                command center for real-time monitoring and response. Secure
                live streaming sends CCTV feeds directly to command centers with
                ultra-HD clarity and zero delay. Our Flying Squad Vehicle adds
                mobility with GPS tracking, AI surveillance, and instant video
                access for on-ground teams.
              </Text>
              <Text fontSize="16px" fontWeight="500" w="80%" as="p">
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
