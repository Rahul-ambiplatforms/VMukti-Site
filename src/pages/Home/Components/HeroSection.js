// src/components/HeroSection/index.js
import React, { useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useBreakpointValue,
  Show,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation"; // <-- 1. Import the new component

// Motion components
const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

// Array of words for the typewriter animation
const industries = [
  "MANUFACTURING",
  "WAREHOUSE",
  "HEALTHCARE",
  "OIL & GAS",
  "ELECTION",
  "EDUCATION",
  "TRANSPORTATION",
  "SMART CITY",
  "PHARMA",
  "BANKING",
  "ENTERPRISE",
  "LOGISTICS",
  "GOVERNMENT",
  "SPORTS",
  "ENTERTAINMENT",
  "DEFENSE",
  "HOSPITALITY",
  "CONSTRUCTION",
];

const HeroSection = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.9, triggerOnce: false });

  // 2. Transform the industries array into a sequence for the typewriter
  // This format is ['Word 1', 1500ms pause, 'Word 2', 1500ms pause, ...]
  const typewriterSequence = industries.flatMap((industry) => [industry, 1500]);

  const handleImageHover = () => {
    gsap.to(imageRef.current, {
      y: -20, // Negative value for a lift effect
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });

  return (
    <Box bg="#E7E7E7" position="relative" mt="5%">
      {/* Background Ellipse */}
      <Box
        position="absolute"
        top="0"
        left="15%"
        transform="translateX(-50%)"
        width={ellipseSize}
        height={ellipseSize}
        bg="#3F77A5"
        borderRadius="50%"
        zIndex={0}
        opacity={0.12}
        filter="blur(100px)"
        display={{ base: "none", md: "block" }}
        ref={sectionRef}
      />

      <Show above="md">
        <Flex
          position="absolute"
          top={["", "", "25%", "12%"]}
          bottom={{ base: "59%" }}
          left={["", "", "25%", "25%"]}
          transform="translateX(-50%)"
          gap="3%"
          zIndex={0}
          width="auto"
          justifyContent="center"
          pt={{ base: "10vh", md: "8vh", lg: "20%" }}
        >
          <Box
            display={{ base: "none", md: "block" }}
            height={["", "100px", "120px", "200px"]}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#BECEDC"
            borderRadius="24px"
            mt={["", "", "80%", "30%"]}
          />
          <Box
            display={{ base: "none", md: "block" }}
            height={["", "100px", "120px", "200px"]}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#FFFFFF"
            borderRadius="24px"
            mt={["", "", "65%", "15%"]}
          />
          <Box
            display={{ base: "none", md: "block" }}
            height={["", "100px", "120px", "200px"]}
            minHeight="50px"
            width="100%"
            aspectRatio="1/1"
            bg="#3F77A5"
            borderRadius="24px"
            mt={["", "", "50%", "-1%"]}
          />
        </Flex>
      </Show>

      {/* Main Content */}
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="center"
        position="relative"
        zIndex={1}
      >
        {/* Mobile View Image */}
        <Box width="full" display={{ base: "block", md: "none" }}>
          <Flex
            mt={{ base: "-10%" }}
            direction="column"
            position="relative"
            width="auto"
          >
            <MotionImage
              mt="1%"
              src="/assets/tablet.png"
              alt="Computer Vision Solution for Smart Surveillance"
              zIndex={1}
              w="100%"
              h="100%"
              objectFit="cover"
              initial={{ scale: 0.9, opacity: 1 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 1 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </Flex>
        </Box>

        {/* Content Section */}
        <Box
          flex="1"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: "center", md: "right" }}
          minH={{ base: "20vh" }}
          zIndex={1}
          ml={{ base: "5%", md: "0" }}
        >
          {/* Animated Heading */}
          <MotionBox
            ref={ref}
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            fontWeight="600"
            letterSpacing="0%"
            lineHeight="1.2"
            zIndex={1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            mt={{ base: "2%", md: "0" }}
          >
            <Text as="span" color="#000">
              Deliver Excellence Using{" "}
            </Text>
            <Text as="span" color="#3F77A5">
              Computer Vision{" "}
            </Text>
            <Text as="span" color="#000">
              Solution for{" "}
            </Text>
            <TypeAnimation
              sequence={typewriterSequence}
              speed={50}
              style={{ color: "#DB7B3A" }}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
            />
            {/* --- END OF UPDATE --- */}
          </MotionBox>
          <Flex>
            <Flex direction="column" zIndex={1}>
              {!useBreakpointValue({ base: false, md: false }) && (
                <Flex mt="8px" direction={{ base: "column", md: "row" }}>
                  <MotionBox
                    mt="1%"
                    display="flex"
                    alignItems="flex-start"
                    gap={2}
                    initial={{ opacity: 0, x: -80 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      gap={{ base: "2", md: "4" }}
                    >
                      <Box
                        width={{ base: "20px", md: "33px" }}
                        height={{ base: "25px", md: "33px" }}
                      >
                        <svg
                          viewBox="0 0 33 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ display: "block" }}
                        >
                          <path
                            d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                            fill="#3F77A5"
                          />
                        </svg>
                      </Box>
                      <Text
                        fontWeight="500"
                        lineHeight="100%"
                        w={["90%", "90%", "85%", "35%"]}
                        fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                        color="#444444"
                        textAlign="justify"
                      >
                        With over 18 years of domain excellence, we safeguard
                        700+ districts through state-backed and enterprise-grade
                        deployments powered by proprietary visual intelligence
                        and precision-tuned computer vision frameworks for
                        mission-critical surveillance.
                      </Text>
                    </Flex>
                  </MotionBox>
                </Flex>
              )}
              {/* Robotic Hand and Button */}
              <Flex
                position="relative"
                mt={{ base: "1", md: "" }}
                ml={["", "", "-65px", "-30px"]}
                mb={{ base: "15%", md: "5%" }}
                width="fit-content"
              >
                <Image
                  ref={imageRef}
                  src="/assets/robohand.png"
                  alt="Robotic Hand"
                  display={{ base: "none", md: "block" }}
                  width={["", "", "55%", "90%"]}
                />
                <Link to="/contact-us">
                  <MotionButton
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                    position="relative"
                    py={["20px", "12px", "12px", "24px"]}
                    px={["15px", "20px", "15px", "24px"]}
                    top={["35%", "35%", "25%", "25%"]}
                    right={["", "", "25%", "30%"]}
                    bg="white"
                    height={{ base: "34px", sm: "50px" }}
                    borderRadius="24px"
                    color="#3F77A5"
                    gap="2"
                    display="flex"
                    _hover={{
                      bg: "#E0F2FE",
                      color: "#2C5E84",
                    }}
                    fontSize={{ base: "14px", sm: "16px" }}
                  >
                    Book Demo
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </MotionButton>
                </Link>
              </Flex>
            </Flex>

            {!useBreakpointValue({ base: true, md: false }) && ( // Show on md and up
              <MotionImage
                src="/assets/tablet1.webp"
                position="absolute"
                top={["", "", "44%", "25%"]}
                right={["-10px", "-20px", "-30px", "-45px"]}
                width={["320px", "480px", "72%", "70%"]}
                height={["auto", "auto", "70%", "98%"]}
                initial={{ scale: 0.8, opacity: 1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              />
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
