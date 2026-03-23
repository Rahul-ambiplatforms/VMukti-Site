'use client';
import { Box, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HeroSection = () => {
  return (
    <Box
      pt={{ base: "25px", md: "35px", lg: "80px" }}
      pb={{ base: "25px", md: "40px", lg: "48px" }}
      px={{ base: "16px", md: "24px" }}
      textAlign="center"
    >
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading
          as="h1"
          fontFamily="'Wix Madefor Display', sans-serif"
          fontWeight="600"
          fontSize={{ base: "2.5rem", md: "3.5rem", lg: "64px" }}
          lineHeight="1"
          letterSpacing="0"
          mb={{ base: "16px", md: "20px" }}
          color="#1A1A2E"
        >
          Simple, Transparent
          <br />
          <Box as="span" color="#3F77A5">Enterprise </Box>
          <Box as="span" color="#DB7B3A">Pricing</Box>
        </Heading>

        <Text
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={{ base: "0.9375rem", md: "1rem" }}
          color="#777"
        >
          Scale from 10 cameras to 10,000+. Pay for what you use.
        </Text>
      </MotionBox>
    </Box>
  );
};

export default HeroSection;
