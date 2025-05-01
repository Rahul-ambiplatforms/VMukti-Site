import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  // Container,
  // Icon,  
  useBreakpointValue,
} from "@chakra-ui/react";
import WhyAmbicamPage from "./whyambi";
import PageContentWrapper from "../../components/PageContentWrapper";
import TrustedBy from "./TrustedBy";
import Discover from "./Discover";

export default function AmbicamLandingPage() {

  const svgSize = useBreakpointValue({ base: "25px", md: "33px" });

  return (
    <PageContentWrapper>
      <Box
        bgImage="url('./assets/ambidash1.png')"
        // bgColor="red"
        bgSize={{ base: "auto 50%", md: "cover" }} // Decrease bg image width in mobile view
        w="100%"
        h="100%"
        bgPosition={{ base: "70% center", md: "center" }} // Adjust bg position for mobile view
        bgRepeat="no-repeat"
      // This is needed because the whole component shifts upwards, if mt is required then remove this
      //   opacity={{ base: 0.6, md: 1 }} 
      >
        {/* Optional overlay to improve readability */}
        <Box
          bg={{ base: "rgba(255, 255, 255, 0.7)", md: "transparent" }} // Semi-transparent white background for mobile
          p={{ base: 4, md: 0 }} // Add padding for mobile view
          borderRadius={{ base: "20px", md: "0" }} // Rounded corners for mobile
        // mx={{ base: "5%", md: "0" }} // Add horizontal margin for mobile
        // bg="red

        >
          <Box>
            {/* <Container maxW="100%"> */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={8}
            //This is needed because the heading needs to be alligned as per the image of camera
            // bg="red"
            >
              <Box w={{ base: "100%", md: "50%", lg: "60%" }}>
                <Flex direction="column" gap={6} mb={{ md: "50%" }}>
                  <Heading
                    lineHeight="1.2"
                    fontWeight="600"
                    fontSize={{ base: "20px", md: "48px" }}
                    mb="4"
                  >
                    <Text as="span" color="#3F77A5">
                      Ambicam –{" "}
                    </Text>
                    <Text as="span">Redefining Smart Surveillance for the </Text>
                    <Text as="span" color="#DB7B3A">
                      Modern World
                    </Text>
                    <Text as="span" color="#3F77A5">
                      .
                    </Text>
                  </Heading>
                  {/* <Icon boxSize={10} color="blue.500" /> */}
                  <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                      fill="#3F77A5"
                    />
                  </svg>

                  <Box w={{ base: "100%", md: "60%" }} lineHeight="1.2">
                    <Text fontWeight="700" fontSize="16px">
                      Ambicam,{" "}
                      <Text as="span" fontWeight="500">
                        a proudly developed brand by{" "}
                      </Text>
                      VMukti Solutions,
                      <Text as="span" fontWeight="500">
                        {" "}
                        stands at the forefront of{" "}
                      </Text>
                      cloud-based video surveillance technology.
                    </Text>

                    <Text fontSize="16px" fontWeight="500" mb="4">
                      Engineered to simplify security while enhancing
                      intelligence, Ambicam offers a robust lineup of{" "}
                      <strong>plug-and-play smart cameras </strong>
                      tailored for modern surveillance demands across{" "}
                      <strong>
                        residential, commercial, and public infrastructures.
                      </strong>
                    </Text>

                    <Text mb="4">
                      From <strong>real-time remote monitoring</strong> to{" "}
                      <strong>AI-driven analytics</strong>, Ambicam is built to
                      empower individuals, enterprises, and smart cities with
                      actionable insights and reliable protection—anytime,
                      anywhere.
                    </Text>
                  </Box>

                  <Flex
                    direction={{ base: "column", md: "row" }} // Column in mobile view, row in desktop view
                    align="center"
                    gap={6}
                  >
                    <Button
                      // marginTop="100px"
                      // height={{ base: "50px", md: "50px" }} // Responsive height
                      height="50px"
                      minWidth="146px"
                      // justifyContent="space-between"
                      alignItems="center"
                      bg="white"
                      color="#3F77A5"
                      borderRadius="20px"
                      // _hover={{ bg: "#2c5a7a", color: "white" }}
                      _hover={{
                        bg: "#E0F2FE",
                        color: "#2C5E84",
                      }}
                      px={{ base: "2px", md: "15px", lg: "20px" }}
                      py={{ base: "2%", md: "2%", lg: "3%" }}
                      display="flex"
                      order={{ base: 2, md: 1 }} // Button first in mobile view
                      alignSelf="center" // Move button to the extreme left in mobile view
                      as="a"
                      href="https://www.ambicam.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Know More
                      <Box
                        as="span"
                        display="flex"
                        alignItems="center"
                        marginLeft="8px"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                            fill="#3F77A5"
                          />
                        </svg>
                      </Box>
                    </Button>
                    <Image
                      src="./assets/ambicam_logo.png"
                      alt="Ambicam logo"
                      w="204px"
                      h="33px"
                      order={{ base: 1, md: 0 }} // Logo second in mobile view
                    />
                  </Flex>
                </Flex>
              </Box>
              {/* Ellipse */}
               <Box
                position="absolute"
                top="10px"
                left="20px"
                opacity="1"
                zIndex="2"
                display={{base:"none",md:"block"}}
              >
                <Box
                  width="408px"
                  height="408px"
                  flexShrink={0}
                  borderRadius="408px"
                  border="1px solid #000"
                  opacity="0.12"
                  background="#3F77A5"
                  filter="blur(56.6px)"
                />
              </Box> 
            </Flex>
            {/* </Container> */}
          </Box>
        </Box>
      </Box>
      <WhyAmbicamPage />
      <TrustedBy />
      <Discover />
    </PageContentWrapper>
  );
}