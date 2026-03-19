'use client';
import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const DEFAULT_STATS = [
  { value: "900+", label: "Deployments" },
  { value: "1BN+", label: "Camera Feeds" },
  { value: "3M+", label: "Users" },
  { value: "18+", label: "Years" },
];

const DEFAULT_TITLE_LINES = [
  { text: "Enterprise", color: "#3F77A5" },
  { parts: [{ text: "Customer ", color: "#000000" }, { text: "Stories", color: "#DB7B3A" }] },
];

const DEFAULT_DESCRIPTION = "See how organizations worldwide transform their security infrastructure with VMukti\u2019s AI-powered video surveillance platform \u2014 delivering measurable ROI and operational excellence.";

const DEFAULT_IMAGE = {
  src: "/assets/customer-stories-hero.png",
  alt: "Enterprise video surveillance deployments worldwide",
};

const HeroSection = ({
  titleLines = DEFAULT_TITLE_LINES,
  description = DEFAULT_DESCRIPTION,
  stats = DEFAULT_STATS,
  image = DEFAULT_IMAGE,
  buttons = [],
}) => {
  return (
    <Box bg="#E7E7E7" pt={{ base: "25px", md: "20px" }} pb={{ base: "40px", md: "60px" }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        px={{ base: "16px", md: "33px" }}
        gap={{ base: "28px", lg: "20px" }}
        maxW="1512px"
        mx="auto"
      >
        {/* Left Content */}
        <Box flex={{ base: "1", lg: "1 1 647px" }} w={{ base: "100%", lg: "auto" }} minW={0}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Heading
              as="h1"
              fontWeight="600"
              lineHeight="1.15"
              mb={{ base: "14px", md: "20px" }}
            >
              {titleLines.map((line, i) =>
                line.parts ? (
                  <Text
                    key={i}
                    as="span"
                    display="block"
                    fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                  >
                    {line.parts.map((part, j) => (
                      <Text key={j} as="span" color={part.color}>
                        {part.text}
                      </Text>
                    ))}
                  </Text>
                ) : (
                  <Text
                    key={i}
                    as="span"
                    display="block"
                    fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                    color={line.color}
                  >
                    {line.text}
                  </Text>
                )
              )}
            </Heading>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Flex align="flex-start" gap="12px" mb={{ base: "20px", md: "32px" }}>
              <Box flexShrink={0} mt="3px">
                <svg width="22" height="22" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                    fill="#000000"
                  />
                </svg>
              </Box>
              <Text
                as="p"
                fontSize={{ base: "13px", md: "15px", lg: "16px" }}
                fontWeight="500"
                lineHeight="1.6"
                color="#444444"
              >
                {description}
              </Text>
            </Flex>
          </motion.div>

          {/* Buttons */}
          {buttons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Flex gap="12px" mb={{ base: "20px", md: "32px" }} flexWrap="wrap">
                {buttons.map((btn, i) =>
                  btn.variant === "outline" ? (
                    <Link key={i} href={btn.href}>
                      <Box
                        as="span"
                        display="inline-block"
                        px={{ base: "20px", md: "28px" }}
                        py={{ base: "12px", md: "14px" }}
                        borderRadius="999px"
                        border="2px solid #3F77A5"
                        color="#3F77A5"
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="500"
                        cursor="pointer"
                        transition="all 0.2s ease"
                        _hover={{ bg: "#3F77A5", color: "white" }}
                      >
                        {btn.label}
                      </Box>
                    </Link>
                  ) : (
                    <Link key={i} href={btn.href}>
                      <Box
                        as="span"
                        display="inline-block"
                        px={{ base: "20px", md: "28px" }}
                        py={{ base: "12px", md: "14px" }}
                        borderRadius="999px"
                        bg="#3F77A5"
                        color="white"
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="500"
                        cursor="pointer"
                        transition="all 0.2s ease"
                        _hover={{ bg: "#2d5f8a" }}
                      >
                        {btn.label}
                      </Box>
                    </Link>
                  )
                )}
              </Flex>
            </motion.div>
          )}

          {/* Stats Grid — 2×2 on mobile, 4 in a row on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SimpleGrid columns={{ base: 2, sm: 4 }} gap={{ base: "10px", md: "10px" }}>
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  bg="white"
                  borderRadius="20px"
                  p={{ base: "20px 10px", md: "26px 14px" }}
                  textAlign="center"
                  boxShadow="0 2px 12px rgba(0,0,0,0.06)"
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  minH={{ base: "110px", md: "130px", lg: "150px" }}
                >
                  <Text
                    fontSize="clamp(35px, 2.5vw, 42px)"
                    fontWeight="700"
                    color="#3F77A5"
                    lineHeight="1.1"
                    mb="6px"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="clamp(11px, 1vw, 13px)"
                    fontWeight="500"
                    color="#555555"
                    lineHeight="1.3"
                  >
                    {stat.label}
                  </Text>
                  <Box
                    position="absolute"
                    w="15px"
                    h="2px"
                    bg="#3F77A5"
                    opacity={0.8}
                    bottom={{ base: "14px", md: "20px", lg: "29px" }}
                    left="50%"
                    transform="translateX(-50%)"
                    borderRadius="1px"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </motion.div>
        </Box>

        {/* Right Image */}
        <Box
          flex={{ base: "1", lg: "1 1 744px" }}
          w={{ base: "100%", lg: "auto" }}
          minW={0}
          h={{ base: "220px", sm: "300px", md: "380px", lg: "511px" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              loading="lazy"
              src={image.src}
              alt={image.alt}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="24px"
              boxShadow="0 8px 32px rgba(0,0,0,0.12)"
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
