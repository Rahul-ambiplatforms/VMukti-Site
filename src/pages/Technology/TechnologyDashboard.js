import React, { useRef, useEffect, useState } from "react";
import { Flex, Image, Text, Heading, Box, useBreakpointValue } from "@chakra-ui/react";
import ComputerVisionPage from "./AITechnologies";
import PageContentWrapper from "../../components/PageContentWrapper";
import { motion } from "framer-motion";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";

const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

// Reusable styles and animation constants
const responsiveSizes = {
  ring: { base: "200px", md: "300px", lg: "408px" },
  headingFontSize: { base: "24px", sm: "30px", md: "36px", lg: "48px" },
  textFontSize: { base: "16px", md: "16px" },
  squareBox: { base: "120px", md: "200px", lg: "336px" },
};

const animations = {
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  popIn: {
    initial: { scale: 0.8, opacity: 1 },
    whileInView: { scale: 1 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Extracted reusable components
const BackgroundRing = () => (
  <Box
    position="absolute"
    top="30%"
    left="50%"
    transform="translate(-50%, -50%)"
    width={responsiveSizes.ring}
    height={responsiveSizes.ring}
    borderRadius="50%"
    opacity="0.12"
    background="#3F77A5"
    filter="blur(40px)"
    zIndex={3}
  />
);

const DesktopBackgroundImages = () => (
  <Flex
    position="absolute"
    right={{ base: "-10%", md: "-5%", lg: "-2%" }}
    bottom={{ base: "10%", md: "15%", lg: "18%" }}
    width={{ base: "90%", md: "80%", lg: "70%" }}
    height={{ base: "100%", md: "110%" }}
    display={{ base: "none", lg: "flex" }}
    zIndex={2}
  >
    <Box
      position="absolute"
      top="70%"
      width="1095px"
      height="62%"
      opacity="80%"
      zIndex={2}
    >
      <Image
        src="/assets/VMukti Brochure O2 1.png"
        alt="VMukti Brochure"
        width="100%"
        height="100%"
        objectFit="contain"
        opacity={0.8}
      />
    </Box>
    <Box
      position="absolute"
      top={{ base: "60%", md: "65%", lg: "77%" }}
      right={{ base: "5%", md: "3%" }}
      transform="translateY(-50%) perspective(1000px)"
      width={{ base: "90%", md: "100%", lg: "109%" }}
      height={{ base: "30%", md: "40%", lg: "50%" }}
      bg="#FFF"
      borderRadius="20px"
      zIndex={2}
    />
    <MotionImage
      src="./assets/Dashboard.png"
      alt="AI Dashboard Interface"
      position="absolute"
      top={{ base: "20%", md: "25%", lg: "10%" }}
      right={{ base: "10%", md: "16", lg: "8" }}
      w={{ base: "90%", md: "100%" }}
      objectFit="contain"
      zIndex={3}
      {...animations.popIn}
    />
  </Flex>
);

const HeadingSection = ({ refProp, display, isAnimationTriggered }) => (
  <MotionHeading
    ref={refProp}
    fontSize={responsiveSizes.headingFontSize}
    lineHeight={{ base: "1.3", lg: "normal" }}
    mt={{ base: "1px", lg: "-22%" }}
    mb={12}
    ml={{ base: "06%", lg: "0" }}
    color="#000"
    fontWeight="600"
    display={display}
    initial={{ opacity: 0, x: -50 }}
    animate={isAnimationTriggered ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    Breakthroughs in Visual AI:{" "}
    <Text
      as="span"
      color="#3F77A5"
      fontWeight="600"
      fontSize={{
        base: "20px",
        sm: "30px",
        md: "40px",
        lg: "48px",
      }}
    >
      Smarter Vision
    </Text>{" "}
    for a{" "}
    <Text
      as="span"
      color="#DB7B3A"
      fontWeight="600"
      fontSize={{
        base: "20px",
        sm: "30px",
        md: "40px",
        lg: "48px",
      }}
    >
      Smarter World
    </Text>
    .
  </MotionHeading>
);

const TechnologyDashboard = () => {
  const ref = useRef(null);
  const svgSize = useBreakpointValue({ base: "13px", md: "33px" });
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsAnimationTriggered(true);
  }, []);

  return (
    <PageContentWrapper>
      <Box mx={{ base: "0", md: "2%" }}>
        <Flex
          bg="#E7E7E7"
          w="100%"
          position="relative"
          overflow="hidden"
          direction="column"
          pt={{ base: "5%", md: "10%", lg: "15%" }}
        >
          <BackgroundRing />
          <DesktopBackgroundImages />
          <Box position="relative" zIndex={4} flex="1" display="flex" alignItems="center">
            <Flex
              direction={{ base: "column", lg: "row" }}
              align={{ base: "flex-start", lg: "flex-start" }}
              justify="flex-start"
              w={{ base: "339px", md: "auto" }}
              minH={{ base: "auto", lg: "50vh" }}
            >
              <HeadingSection
                refProp={ref}
                display={{ base: "block", lg: "none" }}
                isAnimationTriggered={isAnimationTriggered}
              />
              <Flex
                display={{ base: "flex", lg: "none" }}
                w="538px"
                h="556px"
                mt={-16}
                position="relative"
                justify="center"
                align="center"
              >
                <MotionImage
                  src="./assets/Dashboard.png"
                  alt="AI Dashboard Interface"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  zIndex={3}
                  {...animations.popIn}
                />
              </Flex>
              <Flex direction="column" maxW={{ base: "100%", lg: "70%" }} position="relative" zIndex={3}>
                <HeadingSection
                  refProp={ref}
                  display={{ base: "none", lg: "block" }}
                  isAnimationTriggered={isAnimationTriggered}
                />
                <SubHeadingAnimation
                  display="flex"
                  flexDirection={{ base: "row", md: "column" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAnimationTriggered ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Box width={{ md: "30px" }} ml={{ base: "6%", md: "0" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={svgSize}
                      height={svgSize}
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                  <Flex align="center" ml={{ base: "-1px", md: "5%", lg: "0%" }}>
                    <Text
                      fontSize={responsiveSizes.textFontSize}
                      color="#000"
                      lineHeight="normal"
                      maxW={{ base: "90%", md: "60%", lg: "30%" }}
                      m={3}
                      fontWeight="500"
                    >
                      VMukti is driving innovation with advanced AI technologies, transforming surveillance, automation, and security for a smarter, more connected world.
                    </Text>
                  </Flex>
                </SubHeadingAnimation>
                <Box
                  width={responsiveSizes.squareBox}
                  height={responsiveSizes.squareBox}
                  borderRadius="20px"
                  background="#BECEDC"
                  marginBottom={{ lg: "13%" }}
                  display={{ base: "none", md: "none", lg: "block" }}
                  zIndex="0"
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        {/* <PageContentWrapper> */}
        <ComputerVisionPage />
        {/* </PageContentWrapper> */}
      </Box>
    </PageContentWrapper>
  );
};

export default TechnologyDashboard;
