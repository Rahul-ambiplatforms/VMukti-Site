'use client';
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      as="section"
      bg="transparent"
      w="100%"
      maxW="1456px"
      mx="auto"
      px={{ base: "20px", md: "28px", lg: "33px" }}
      pt={{ base: "32px", md: "48px", lg: "52px" }}
      pb={{ base: "48px", md: "64px", lg: "80px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "32px", md: "24px", lg: "24px" }}
        align={{ base: "stretch", md: "flex-start" }}
      >
        {/* ── Left column ── */}
        <Flex
          direction="column"
          w={{ base: "100%", md: "45%", lg: "460px" }}
          minW={{ base: "auto", lg: "460px" }}
          flexShrink={0}
          position="relative"
          minH={{ lg: "679px" }}
        >
          {/* Title */}
          <Heading
            as="h1"
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="600"
            fontSize={{ base: "32px", md: "38px", lg: "48px" }}
            lineHeight="1.1"
            letterSpacing="0"
            color="#1A1A2E"
            mb={{ base: "20px", md: "24px" }}
          >
            <Box as="span" color="#3F77A5">Grow Your </Box>
            <Box as="span" color="#1A1A2E">Business</Box>
            <br />
            <Box as="span" color="#1A1A2E">with </Box>
            <Box as="span" color="#E8834A">VMukti</Box>
          </Heading>

          {/* Orange diagonal arrow */}
          <Box mb={{ base: "16px", md: "20px" }}>
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 8L32 32M32 32V14M32 32H14"
                stroke="#E8834A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          {/* Description */}
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            fontWeight="400"
            color="#555"
            lineHeight="1.65"
            mb={{ base: "28px", md: "32px", lg: "36px" }}
          >
            Join 100+ global partners delivering enterprise AI video surveillance.
            Training, leads, and margin support to accelerate your growth.
          </Text>

          {/* CTA buttons */}
          <Flex
            gap={{ base: "12px", md: "14px" }}
            wrap="wrap"
            mb={{ base: "0", lg: "0" }}
          >
            <Link href="/contact-us">
              <Box
                as="button"
                bg="#3F77A5"
                color="white"
                fontFamily="'Wix Madefor Display', sans-serif"
                fontSize={{ base: "14px", md: "15px" }}
                fontWeight="600"
                px={{ base: "22px", md: "28px" }}
                py={{ base: "12px", md: "14px" }}
                borderRadius="999px"
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap="8px"
                transition="all 0.2s ease"
                _hover={{ bg: "#2d5f88", transform: "translateY(-1px)" }}
              >
                Apply Now &nbsp;→
              </Box>
            </Link>

            <Box
              as="button"
              bg="white"
              color="#1A1A2E"
              fontFamily="'Wix Madefor Display', sans-serif"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              px={{ base: "18px", md: "24px" }}
              py={{ base: "12px", md: "14px" }}
              borderRadius="999px"
              border="1.5px solid #D1D5DB"
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="8px"
              transition="all 0.2s ease"
              _hover={{ bg: "#F5F5F5", transform: "translateY(-1px)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Partner Brochure
            </Box>
          </Flex>

          {/* Decorative boxes — desktop: absolutely positioned, mobile/tablet: flow */}

          {/* Desktop (lg+): exact positions from spec */}
          {/* Blue box: bottom-left anchor */}
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            bottom="0"
            left="0"
            w="188px"
            h="188px"
            borderRadius="24px"
            bg="#BECEDC"
          />
          {/* White box: 94px above blue, 203px to the right */}
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            bottom="65px"
            left="203px"
            w="188px"
            h="188px"
            borderRadius="24px"
            bg="#FFFFFF"
            border="1.5px solid #E2E8F0"
          />

        </Flex>

        {/* ── Right column — hero image ── */}
        <Box
          flex={{ base: "none", lg: "1 1 744px" }}
          w={{ base: "100%", lg: "auto" }}
          minW={0}
          h={{ base: "220px", sm: "300px", md: "400px", lg: "679px" }}
          borderRadius="24px"
          overflow="hidden"
        >
          <Image
            src="/assets/partner-hero.svg"
            alt="Partner with VMukti"
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
            borderRadius="24px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
