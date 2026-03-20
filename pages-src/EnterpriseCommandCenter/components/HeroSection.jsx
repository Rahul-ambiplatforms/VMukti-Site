'use client';
import { Box, Flex, Heading, Text, Button, Image, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const HeroSection = () => {
  return (
    <Box
      bg="#3F77A5"
      borderBottomLeftRadius={{ base: "16px", md: "24px" }}
      borderBottomRightRadius={{ base: "16px", md: "24px" }}
      overflow="hidden"
      w="100%"
      pb={{ base: "24px", md: "40px" }}
    >
      <Box maxW="1512px" mx="auto" w="100%">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "flex-start", lg: "flex-start" }}
        >

          {/* ── LEFT COLUMN ~36% ── */}
          <Box
            w={{ base: "100%", lg: "35.7%" }}
            flexShrink={0}
            pl={{ base: "24px", lg: "32px" }}
            pr={{ base: "24px", lg: "24px" }}
            pt={{ base: "60px", lg: "75px" }}
            pb={{ base: "40px", lg: "60px" }}
            display="flex"
            flexDirection="column"
            zIndex={1}
          >
            {/* Heading */}
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              mb={{ base: "16px", lg: "clamp(12px, 1.3vw, 20px)" }}
            >
              <Heading
                as="h1"
                fontSize={{ base: "2.25rem", md: "2.75rem", lg: "clamp(28px, 3.17vw, 48px)" }}
                fontWeight="600"
                fontFamily="'Wix Madefor Display', sans-serif"
                color="white"
                lineHeight="1"
                letterSpacing="0"
              >
                Enterprise<br />Command Center
              </Heading>
            </MotionBox>

            {/* Arrow icon */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              mb={{ base: "16px", lg: "clamp(12px, 1.3vw, 20px)" }}
            >
              <svg width="30" height="30" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="white" />
              </svg>
            </MotionBox>

            {/* Subtitle */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              mb={{ base: "24px", lg: "clamp(16px, 1.6vw, 24px)" }}
            >
              <Text
                fontSize={{ base: "0.875rem", md: "0.95rem", lg: "clamp(13px, 1.06vw, 16px)" }}
                fontWeight="500"
                fontFamily="'Wix Madefor Display', sans-serif"
                color="rgba(255,255,255,0.85)"
                lineHeight="1.5"
                letterSpacing="0"
                maxW={{ lg: "499px" }}
              >
                Centralized video operations for multi-site enterprises. One platform to see, analyze &amp; act across every location
              </Text>
            </MotionBox>

            {/* Book Demo */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              mb={{ base: "24px", lg: "clamp(16px, 1.6vw, 24px)" }}
            >
              <Link href="/book-a-demo">
                <Button
                  bg="white"
                  color="#3F77A5"
                  borderRadius="999px"
                  px={{ base: "22px", lg: "clamp(18px, 1.85vw, 28px)" }}
                  h={{ base: "44px", lg: "clamp(40px, 3.3vw, 50px)" }}
                  fontSize={{ base: "0.9rem", lg: "clamp(13px, 1.06vw, 16px)" }}
                  fontWeight="700"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  gap="8px"
                  _hover={{ bg: "#f0f8ff", transform: "translateY(-2px)" }}
                  transition="all 0.2s ease"
                >
                  Book Demo
                  <svg width="14" height="14" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z" fill="#3F77A5" />
                  </svg>
                </Button>
              </Link>
            </MotionBox>

            {/* Logos */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HStack gap="0" align="center">
                <Image
                  loading="lazy"
                  src="/assets/stqc.svg"
                  alt="STQC Certified"
                  w={{ base: "44px", lg: "clamp(36px, 3.5vw, 53px)" }}
                  h={{ base: "44px", lg: "clamp(36px, 3.5vw, 53px)" }}
                  objectFit="contain"
                  flexShrink={0}
                />
                <Box position="relative" top="6px" ml={{ base: "16px", lg: "23px" }}>
                  <Image
                    loading="lazy"
                    src="/assets/onvif.svg"
                    alt="ONVIF"
                    w={{ base: "85px", lg: "clamp(70px, 6.8vw, 103px)" }}
                    h={{ base: "24px", lg: "clamp(20px, 1.85vw, 28px)" }}
                    objectFit="contain"
                    flexShrink={0}
                  />
                </Box>
              </HStack>
            </MotionBox>
          </Box>

          {/* ── RIGHT COLUMN ~64% ── */}
          <Box
            flex="1"
            minW={0}
            pt={{ base: "0", lg: "20px" }}
            pb={{ base: "40px", lg: "40px" }}
            px={{ base: "24px", lg: "0" }}
          >
            <MotionBox
              w="100%"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                loading="lazy"
                src="/assets/enterprise-command-center-dashboard.png"
                alt="Enterprise Command Center Dashboard"
                w="100%"
                h={{ base: "auto", lg: "clamp(360px, 41.5vw, 500px)" }}
                borderRadius="12px"
                boxShadow="0 24px 64px rgba(0,0,0,0.3)"
                objectFit="cover"
              />
            </MotionBox>
          </Box>

        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
