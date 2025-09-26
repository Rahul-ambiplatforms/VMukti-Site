import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Grid,
  GridItem,
  Icon,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
// import { solutionsData } from "../data/solutionsContent";

const Solutions = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentBoxRef = useRef(null);
  const buttonSize = useBreakpointValue({ base: 8, md: 0 });

  const activeSolution = data.solutions[activeIndex];
  const imageSrc = useBreakpointValue({
    base: activeSolution.image_mobile,
    md: activeSolution.image,
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".content-item",
        { opacity: 0, scale: 0.65 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
      );
      gsap.fromTo(
        ".content-image",
        { opacity: 0, scale: 0.65 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
      );
    },
    { scope: contentBoxRef, dependencies: [activeIndex] }
  );

  if (!data || !data.solutions || data.solutions.length === 0) {
    return null;
  }

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      bg="#3F77A5"
      pt={{ base: 10, md: 10 }}
      mt={{ base: "4%", md: "2%" }}
      borderRadius="24px"
    >
      <Flex
        w="full"
        mx="auto"
        textAlign="center"
        color="white"
        direction="column"
        alignItems="center"
      >
        <VStack>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "30px", md: "60px" }}
            fontWeight="500"
            w={["90vw", "90vw", "80vw", "60vw"]}
          >
            {data.heading}
          </Heading>

          {data.description && (
            <Text
              w={["90%", "90%", "90%", "90%"]}
              lineHeight={["18px", "18px", "20px", "20px"]}
              mt="1%"
              fontSize={{ base: "14px", md: "16px" }}
              as="p"
            >
              {data.description}
            </Text>
          )}
        </VStack>

        <Box
          overflowX={{ base: "auto", md: "hidden" }}
          w="full"
          py={{ base: 2, md: 0 }}
          sx={{
            "&::-webkit-scrollbar": {
              height: { buttonSize },
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#d1d9e2",
              borderRadius: "8px",
            },
          }}
        >
          <Flex
            // wrap={{ base: "nowrap", md: "wrap" }}
            wrap={["nowrap", "nowrap", "wrap", "wrap"]}
            justifyContent={{ base: "flex-start", md: "center" }}
            w={["", "", "100%", "80%"]}
            mx="auto"
            mt="2%"
          >
            {data.solutions.map((solution, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                bg={activeIndex === index ? "white" : "#BECEDC"}
                color="black"
                fontWeight={activeIndex === index ? "700" : "400"}
                _hover={{
                  bg:
                    activeIndex === index
                      ? "#f0f0f0"
                      : "rgba(255, 255, 255, 0.4)",
                }}
                // 'm' provides margin on all sides, good for wrapping layout.
                m={["2", "2", "2", "4"]}
                height={{ base: "34px", md: "48px" }}
                borderRadius="24px"
                fontSize="16px"
                // --- Static Size Enforcement ---
                flexShrink={0} // Prevents shrinking on mobile.
                w={["125px", "125px", "125px", "170px"]}
                // as="h3"
                as="p"
              >
                {solution.heading1}
              </Button>
            ))}
          </Flex>
        </Box>
      </Flex>

      {/* Content and image part */}
      <Box
        w="100%"
        bg="white"
        borderRadius="24px"
        p={{ base: 6, md: 10 }}
        mt={{ base: 2, md: 4 }}
        ref={contentBoxRef}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 4, md: 4 }}
          alignItems="stretch"
        >
          {/* Left side content container */}
          <Box
            className="content-item"
            bg={{ base: "#E7E7E7", md: "#F3F3F3" }}
            opacity="0.85"
            p={6}
            borderRadius="24px"
            // w={{ base: "100%", md: "30%", lg: "30%" }}
            w={["100%", "100%", "100%", "35%"]}
            display="flex"
            flexDirection={["row", "row", "row", "column"]}
            order={{ base: 2, lg: 1 }}
          >
            <Flex direction="column" align="start" gap={4} flex="1">
              {/* <Box> */}
                <Heading
                  as="h3"
                  fontSize={{ base: "20px", md: "36px" }}
                  fontWeight="500"
                  color="black"
                  // font-family= "Wix Madefor Display"
                >
                  {activeSolution.heading2}
                </Heading>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                    fill="#3F77A5"
                  />
                </svg>
                <Text
                  color="#444444"
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight={{ base: "18px", md: "20px" }}
                  align="justify"
                  as="p"
                >
                  {activeSolution.content}
                </Text>
              {/* </Box> */}
              <Spacer />
                <Box w="180px" h="52px">
                  <img 
                    src={activeSolution.image_certi}
                    alt={activeSolution.heading}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
              <Flex gap="2" justifyContent="center" align="center">
                <Link
                  to={activeSolution.path}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="link"
                    fontSize="16px"
                    fontWeight="400"
                    color="black"
                  >
                    Know More
                  </Button>
                </Link>
                <Box
                  as="svg"
                  width="22px"
                  height="24px"
                  viewBox="0 0 22 24"
                  fill="black"
                >
                  <path d="M20.9602 13.0607C21.546 12.4749 21.546 11.5251 20.9602 10.9393L11.4143 1.3934C10.8285 0.807612 9.87876 0.807612 9.29297 1.3934C8.70719 1.97919 8.70719 2.92893 9.29297 3.51472L17.7783 12L9.29297 20.4853C8.70719 21.0711 8.70719 22.0208 9.29297 22.6066C9.87876 23.1924 10.8285 23.1924 11.4143 22.6066L20.9602 13.0607ZM0.100586 13.5L19.8996 13.5V10.5L0.100586 10.5V13.5Z" />
                </Box>
              </Flex>
            </Flex>
          </Box>

          {/* Right side image container */}
          <Box
            w={{ base: "100%", lg: "70%" }}
            display="flex"
            alignItems="stretch"
            order={{ base: 1, lg: 2 }}
          >
            <Image
              className="content-image"
              src={imageSrc}
              alt={activeSolution.heading2}
              objectFit="cover"
              w="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Solutions;
