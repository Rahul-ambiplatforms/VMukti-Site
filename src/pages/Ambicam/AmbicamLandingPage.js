import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import WhyAmbicamPage from "./whyambi";
import PageContentWrapper from "../../components/PageContentWrapper";
import TrustedBy from "./TrustedBy";
import Discover from "./Discover";

export default function AmbicamLandingPage() {
  const svgSize = useBreakpointValue({ base: "18px", md: "33px" });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const mainContent = (
    <>
      <Box
        bgImage={{
          base: "url('./assets/ambidash-mobile.png')",
          md: "url('./assets/ambidash1.png')",
        }}
        bgSize="cover"
        
        h="100%"
        bgPosition={{ base: "10% center", md: "center" }}
        bgRepeat="no-repeat"
      >
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <Box w={{ base: "100%", md: "50%", lg: "60%" }}>
              <Flex
                direction="column"
                gap={6}
                mb={{ md: "50%" }}
                w={{ base: "100%" }}
                px={{ base: "5%", md: "0" }}
              >
                <Heading
                  lineHeight="1.2"
                  fontWeight="600"
                  fontSize={{ base: "32px", md: "48px" }}
                  mb="4"
                  pb={{ base: "500", md: "0" }}
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
                {/* Content Desktop View */}
                <Box display={{ base: "none", md: "block" }}>
                  <Box mb={{ base: "4", md: "6" }}>
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
                  </Box>
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
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    gap={6}
                  >
                    <Button
                      height="50px"
                      minWidth="146px"
                      alignItems="center"
                      bg="white"
                      color="#3F77A5"
                      borderRadius="20px"
                      _hover={{
                        bg: "#E0F2FE",
                        color: "#2C5E84",
                      }}
                      px={{ base: "2px", md: "15px", lg: "20px" }}
                      py={{ base: "2%", md: "2%", lg: "3%" }}
                      display="flex"
                      order={{ base: 2, md: 1 }}
                      alignSelf="center"
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
                      order={{ base: 1, md: 0 }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>
            {/* Ellipse */}
            <Box
              position="absolute"
              top="10px"
              left="20px"
              opacity="1"
              zIndex="2"
              display={{ base: "none", md: "block" }}
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
        </Box>
      </Box>
      {/* Only Mobile View */}
      <Box
        display={{ base: "block", md: "none" }}
        mt="4"
        mb="12"
        align="justify"
        px={{ base: "5%", md: "0" }}
      >
        <Box mb="2">
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
        </Box>
        <Box w="100%" lineHeight="1.2">
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
            Engineered to simplify security while enhancing intelligence,
            Ambicam offers a robust lineup of{" "}
            <strong>plug-and-play smart cameras </strong>
            tailored for modern surveillance demands across{" "}
            <strong>
              residential, commercial, and public infrastructures.
            </strong>
          </Text>

          <Text mb="4">
            From <strong>real-time remote monitoring</strong> to{" "}
            <strong>AI-driven analytics</strong>, Ambicam is built to empower
            individuals, enterprises, and smart cities with actionable insights
            and reliable protection—anytime, anywhere.
          </Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} align="center" gap={8} mt="8">
          <Button
            height="50px"
            minWidth={{base:"170px",md:"146px"}}
            alignItems="center"
            bg="white"
            color="#3F77A5"
            borderRadius="20px"
            _hover={{
              bg: "#E0F2FE",
              color: "#2C5E84",
            }}
            px={{ base: "2px", md: "15px", lg: "20px" }}
            py={{ base: "2%", md: "2%", lg: "3%" }}
            display="flex"
            order={{ base: 2, md: 1 }}
            alignSelf="center"
            as="a"
            href="https://www.ambicam.in/"
            target="_blank"
            rel="noopener noreferrer"
            fontSize="18px"
            fontWeight="700"
          >
            Know More
            <Box as="span" display="flex" alignItems="center" marginLeft="8px">
              <svg
                width="24"
                height="24"
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
            w={{base:"180px",md:"204px"}}
            h={{base:"auto",md:"33px"}}
            order={{ base: 1, md: 0 }}
          />
        </Flex>
      </Box>
      <WhyAmbicamPage />
      <TrustedBy />
      <Discover />
    </>
  );

  if (isDesktop) {
    return <PageContentWrapper>{mainContent}</PageContentWrapper>;
  } else {
    return mainContent;
  }
}
