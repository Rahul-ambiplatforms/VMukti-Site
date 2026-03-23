'use client';
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const infraRows = [
  { label: "Deployment",  value: "Cloud, Hybrid, On-Premise" },
  { label: "Max Cameras", value: "Unlimited" },
  { label: "Max Sites",   value: "Unlimited" },
  { label: "Video Wall",  value: "Up to 64 Feeds" },
  { label: "Latency",     value: "< 2 Seconds" },
];

const platformRows = [
  { label: "AI Models",   value: "15+" },
  { label: "Storage",     value: "Cloud + Edge" },
  { label: "API",         value: "REST, Webhooks" },
  { label: "Auth",        value: "SSO, RBAC, MFA" },
  { label: "Compliance",  value: "SOC 2, GDPR, HIPAA-ready" },
];

const TechnicalSpecs = () => {
  return (
    <Box
      py={{ base: "48px", md: "64px", lg: "80px" }}
      px={{ base: "16px", md: "24px", lg: "33px" }}
    >
      {/* Title */}
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        textAlign="center"
        mb={{ base: "10px", md: "14px" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "2rem", md: "3rem", lg: "clamp(40px, 4.2vw, 64px)" }}
          fontWeight="600"
          fontFamily="'Wix Madefor Display', sans-serif"
          lineHeight="1"
          letterSpacing="0"
        >
          <Box as="span" color="#3F77A5">Enterprise-Grade </Box>
          <Box as="span" color="#1A1A2E">Technical </Box>
          <Box as="span" color="#DB7B3A">Specs</Box>
        </Heading>
      </MotionBox>

      <Text
        textAlign="center"
        fontSize={{ base: "0.875rem", md: "1rem" }}
        color="#555"
        fontFamily="'Wix Madefor Display', sans-serif"
        mb={{ base: "32px", md: "48px", lg: "56px" }}
      >
        Built for scale, security, and compliance from day one.
      </Text>

      {/* Mobile layout — two stacked 2-column tables */}
      <Box display={{ base: "block", md: "none" }} maxW="600px" mx="auto">
        {[
          { title: "INFRASTRUCTURE", rows: infraRows },
          { title: "PLATFORM", rows: platformRows },
        ].map((section) => (
          <MotionBox
            key={section.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            bg="white"
            borderRadius="16px"
            overflow="hidden"
            border="1px solid #E2E8F0"
            mb="16px"
          >
            {/* Section header */}
            <Box
              bg="#4A7FA8"
              px="20px"
              py="14px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize="0.75rem"
                fontWeight="700"
                letterSpacing="0.12em"
                color="white"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {section.title}
              </Text>
            </Box>
            {/* Rows */}
            {section.rows.map((row) => (
              <Flex key={row.label} borderTop="1px solid #E2E8F0" minH="52px">
                <Box
                  flex="1"
                  display="flex"
                  alignItems="center"
                  px="16px"
                  py="12px"
                  borderRight="1.5px solid #E2E8F0"
                >
                  <Text
                    fontSize="0.875rem"
                    color="#555"
                    fontFamily="'Wix Madefor Display', sans-serif"
                  >
                    {row.label}
                  </Text>
                </Box>
                <Box
                  flex="1"
                  display="flex"
                  alignItems="center"
                  px="16px"
                  py="12px"
                >
                  <Text
                    fontSize="0.875rem"
                    fontWeight="700"
                    color="#1A1A2E"
                    fontFamily="'Wix Madefor Display', sans-serif"
                  >
                    {row.value}
                  </Text>
                </Box>
              </Flex>
            ))}
          </MotionBox>
        ))}
      </Box>

      {/* Desktop layout — 4-column table */}
      <MotionBox
        display={{ base: "none", md: "block" }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        maxW="1446px"
        mx="auto"
        bg="white"
        borderRadius="20px"
        overflow="hidden"
        border="1px solid #E2E8F0"
      >
        {/* Header row */}
        <Flex>
          <Box
            flex="1"
            bg="#4A7FA8"
            px={{ base: "20px", md: "32px", lg: "48px" }}
            py={{ base: "14px", md: "18px" }}
            borderRight="1.5px solid rgba(255,255,255,0.25)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: "0.75rem", md: "0.8125rem" }}
              fontWeight="700"
              letterSpacing="0.12em"
              color="white"
              fontFamily="'Wix Madefor Display', sans-serif"
            >
              INFRASTRUCTURE
            </Text>
          </Box>
          <Box
            flex="1"
            bg="#4A7FA8"
            px={{ base: "20px", md: "32px", lg: "48px" }}
            py={{ base: "14px", md: "18px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: "0.75rem", md: "0.8125rem" }}
              fontWeight="700"
              letterSpacing="0.12em"
              color="white"
              fontFamily="'Wix Madefor Display', sans-serif"
            >
              PLATFORM
            </Text>
          </Box>
        </Flex>

        {/* Data rows */}
        {infraRows.map((infraRow, i) => (
          <Flex key={infraRow.label} borderTop="1px solid #E2E8F0">

            {/* Col 1 — Infra label */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              h={{ base: "auto", lg: "65px" }}
              pl={{ base: "16px", lg: "35px" }}
              pr={{ base: "12px", lg: "25.83px" }}
              py={{ base: "14px", lg: "0" }}
              borderRight="1.83px solid #E2E8F0"
            >
              <Text
                fontSize={{ base: "0.875rem", md: "0.9375rem", lg: "1rem" }}
                color="#555"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {infraRow.label}
              </Text>
            </Box>

            {/* Col 2 — Infra value */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              h={{ base: "auto", lg: "65px" }}
              pl={{ base: "16px", lg: "35px" }}
              pr={{ base: "12px", lg: "25.83px" }}
              py={{ base: "14px", lg: "0" }}
              borderRight="1.83px solid #E2E8F0"
            >
              <Text
                fontSize={{ base: "0.875rem", md: "0.9375rem", lg: "1rem" }}
                fontWeight="700"
                color="#1A1A2E"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {infraRow.value}
              </Text>
            </Box>

            {/* Col 3 — Platform label */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              h={{ base: "auto", lg: "65px" }}
              pl={{ base: "16px", lg: "35px" }}
              pr={{ base: "12px", lg: "25.83px" }}
              py={{ base: "14px", lg: "0" }}
              borderRight="1.83px solid #E2E8F0"
            >
              <Text
                fontSize={{ base: "0.875rem", md: "0.9375rem", lg: "1rem" }}
                color="#555"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {platformRows[i].label}
              </Text>
            </Box>

            {/* Col 4 — Platform value */}
            <Box
              flex="1"
              display="flex"
              alignItems="center"
              h={{ base: "auto", lg: "65px" }}
              pl={{ base: "16px", lg: "35px" }}
              pr={{ base: "12px", lg: "25.83px" }}
              py={{ base: "14px", lg: "0" }}
            >
              <Text
                fontSize={{ base: "0.875rem", md: "0.9375rem", lg: "1rem" }}
                fontWeight="700"
                color="#1A1A2E"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {platformRows[i].value}
              </Text>
            </Box>

          </Flex>
        ))}
      </MotionBox>
    </Box>
  );
};

export default TechnicalSpecs;
