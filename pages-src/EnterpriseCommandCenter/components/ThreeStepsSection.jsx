'use client';

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    number: "Step 1",
    title: "CONNECT",
    description: "Connect cameras from any site. ONVIF, RTSP, any brand. Cloud or on-premise deployment — your choice.",
  },
  {
    number: "Step 2",
    title: "CENTRALIZE",
    description: "All feeds flow to your Enterprise Command Center. AI processes every frame in real time.",
  },
  {
    number: "Step 3",
    title: "ACT",
    description: "Real-time alerts, automated workflows, instant response. One platform, total control over all operations.",
  },
];

const ThreeStepsSection = () => {
  return (
    <Box py={{ base: "24px", lg: "32px" }} px={{ base: "16px", md: "24px", lg: "33px" }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        bg="#3F77A5"
        borderRadius={{ base: "16px", md: "24px" }}
        maxW="1446px"
        mx="auto"
        overflow="hidden"
      >
        {/* ── Title & Subtitle ── */}
        <Box
          textAlign="center"
          pt={{ base: "40px", md: "52px", lg: "60px" }}
          px={{ base: "24px", md: "48px" }}
          pb={{ base: "32px", md: "40px", lg: "48px" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "1.875rem", md: "2.5rem", lg: "clamp(2rem, 3vw, 3rem)" }}
            fontWeight="400"
            fontFamily="'Wix Madefor Display', sans-serif"
            color="white"
            lineHeight="1.15"
            letterSpacing="0"
            mb={{ base: "12px", lg: "16px" }}
          >
            Three Steps{" "}
            <Box as="span" fontWeight="700">to Total Control</Box>
          </Heading>
          <Text
            fontSize={{ base: "0.875rem", md: "1rem" }}
            fontWeight="400"
            fontFamily="'Wix Madefor Display', sans-serif"
            color="rgba(255,255,255,0.82)"
            lineHeight="1.6"
            maxW="680px"
            mx="auto"
          >
            Get up and running in days, not months. Our streamlined deployment gets you operational fast.
          </Text>
        </Box>

        {/* ── White Inner Card ── */}
        <Box
          bg="white"
          borderRadius={{ base: "16px", md: "20px" }}
          mx={{ base: "16px", md: "32px", lg: "48px" }}
          mb={{ base: "24px", md: "32px", lg: "40px" }}
          px={{ base: "24px", md: "48px", lg: "131px" }}
          py={{ base: "28px", md: "36px", lg: "44px" }}
        >

          {/* ── MOBILE: badge first, then content per step ── */}
          <Flex display={{ base: "flex", md: "none" }} direction="column" gap="28px">
            {steps.map((step) => (
              <Box key={step.title}>
                <Box display="inline-flex" bg="#3F77A5" color="white" borderRadius="41px" w="180px" h="38px" alignItems="center" justifyContent="center" fontSize="0.875rem" fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" mb="14px">
                  {step.number}
                </Box>
                <Text fontSize="0.8125rem" fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E" letterSpacing="0.06em" mb="8px">
                  {step.title}
                </Text>
                <Box w="24px" h="2px" bg="#3F77A5" borderRadius="2px" mb="12px" />
                <Text fontSize="0.875rem" fontWeight="400" fontFamily="'Wix Madefor Display', sans-serif" color="rgba(26,26,46,0.68)" lineHeight="1.65">
                  {step.description}
                </Text>
              </Box>
            ))}
          </Flex>

          {/* ── DESKTOP md+: 1fr per step, fixed connector gap ── */}
          <Box
            display={{ base: "none", md: "grid" }}
            gridTemplateColumns={{ md: "1fr 60px 1fr 60px 1fr", lg: "1fr 80px 1fr 80px 1fr" }}
            gridTemplateRows="auto auto"
            rowGap={{ md: "20px", lg: "24px" }}
          >
            {/* Row 1 — Badges + connectors */}
            {steps.map((step, i) => (
              <>
                <Box key={step.number} gridColumn={i === 0 ? "1" : i === 1 ? "3" : "5"} gridRow="1">
                  <Box
                    bg="#3F77A5"
                    color="white"
                    borderRadius="41px"
                    w="100%"
                    h={{ md: "36px", lg: "40px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    px={{ md: "14px", lg: "20px" }}
                    fontSize={{ md: "0.85rem", lg: "1rem" }}
                    fontWeight="700"
                    fontFamily="'Wix Madefor Display', sans-serif"
                  >
                    {step.number}
                  </Box>
                </Box>
                {i < steps.length - 1 && (
                  <Box key={`line-${i}`} gridColumn={i === 0 ? "2" : "4"} gridRow="1" display="flex" alignItems="center">
                    <Box flex="1" h="1px" bg="#D1D5DB" />
                  </Box>
                )}
              </>
            ))}

            {/* Row 2 — Content (same columns as badges — guaranteed alignment) */}
            {steps.map((step, i) => (
              <Box key={step.title} gridColumn={i === 0 ? "1" : i === 1 ? "3" : "5"} gridRow="2">
                <Text
                  fontSize={{ md: "0.8125rem", lg: "0.9375rem" }}
                  fontWeight="700"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  color="#1A1A2E"
                  letterSpacing="0.06em"
                  mb="8px"
                >
                  {step.title}
                </Text>
                <Box w="24px" h="2px" bg="#3F77A5" borderRadius="2px" mb="12px" />
                <Text
                  fontSize={{ md: "0.8125rem", lg: "0.9375rem" }}
                  fontWeight="400"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  color="rgba(26,26,46,0.68)"
                  lineHeight="1.65"
                >
                  {step.description}
                </Text>
              </Box>
            ))}
          </Box>

        </Box>
      </MotionBox>
    </Box>
  );
};

export default ThreeStepsSection;