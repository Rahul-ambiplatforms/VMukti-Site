'use client';
import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionBox = motion(Box);

const tabs = [
  {
    id: "system",
    label: "System Integrators",
    title: "System Integrators",
    desc: "Install, configure, and maintain VMukti for enterprise clients. Perfect for security integrators looking to add cutting-edge AI video surveillance to their portfolio.",
    bullets: [
      "Technical training and certification",
      "Installation best practices",
      "Ongoing technical support",
      "Customer success resources",
    ],
    image: "/assets/AISurveillance_1.png",
  },
  {
    id: "tech",
    label: "Technology Partners",
    title: "Technology Partners",
    desc: "Integrate your products with VMukti to deliver end-to-end security solutions. Compatible with cameras, access control systems, and PSIM platforms.",
    bullets: [
      "API & SDK access",
      "Co-development opportunities",
      "Joint solution testing lab",
      "Technology alliance benefits",
    ],
    image: "/assets/Dashboard.png",
  },
  {
    id: "resellers",
    label: "Resellers",
    title: "Resellers",
    desc: "Add VMukti Cloud VMS to your enterprise security portfolio and unlock new revenue streams with a proven, scalable platform.",
    bullets: [
      "Competitive reseller margins",
      "Sales enablement toolkit",
      "Demo environment access",
      "Dedicated partner support",
    ],
    image: "/assets/SolutionDash.png",
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" flexShrink="0">
    <circle cx="10" cy="10" r="10" fill="#4CAF50" />
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PartnerTypes = () => {
  const [active, setActive] = useState("system");
  const current = tabs.find((t) => t.id === active);

  return (
    <Box
      px={{ base: "16px", md: "24px", lg: "32px" }}
      pt={{ base: "48px", md: "64px" }}
      pb="0"
    >
      <Box maxW="1448px" mx="auto">
        {/* Blue header */}
        <Box
          bg="#3F77A5"
          borderTopRadius="20px"
          pt={{ base: "40px", md: "56px" }}
          pb={{ base: "48px", md: "60px" }}
          px={{ base: "20px", md: "40px" }}
        >
          {/* Title */}
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontSize={{ base: "32px", md: "44px", lg: "52px" }}
            fontWeight="700"
            color="white"
            textAlign="center"
            lineHeight="1.1"
            mb={{ base: "28px", md: "40px" }}
          >
            Partner Types
          </Text>

          {/* Tabs */}
          <Flex
            justify="center"
            gap={{ base: "10px", md: "16px" }}
            flexWrap="wrap"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <Box
                  key={tab.id}
                  as="button"
                  onClick={() => setActive(tab.id)}
                  px={{ base: "20px", md: "32px" }}
                  py={{ base: "10px", md: "13px" }}
                  borderRadius="999px"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight={isActive ? "700" : "500"}
                  bg={isActive ? "white" : "rgba(255,255,255,0.2)"}
                  color={isActive ? "#1A1A2E" : "white"}
                  cursor="pointer"
                  transition="all 0.2s ease"
                  border="none"
                  _hover={{
                    bg: isActive ? "white" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {tab.label}
                </Box>
              );
            })}
          </Flex>
        </Box>

        {/* White content card */}
        <Box
          bg="white"
          borderBottomRadius="20px"
          p={{ base: "20px", md: "32px" }}
          overflow="hidden"
        >
          <AnimatePresence mode="wait">
            <MotionBox
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Flex
                direction={{ base: "column", lg: "row" }}
                gap={{ base: "20px", md: "28px" }}
                align="stretch"
              >
                {/* Left text panel */}
                <Box
                  flex="none"
                  w={{ base: "100%", lg: "435px" }}
                  bg="#F3F3F3"
                  borderRadius="20px"
                  p={{ base: "24px", md: "32px" }}
                  opacity="0.85"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  minH={{ base: "auto", lg: "513px" }}
                >
                  <Box>
                    {/* Title */}
                    <Text
                      fontFamily="'Wix Madefor Display', sans-serif"
                      fontSize={{ base: "24px", md: "30px", lg: "34px" }}
                      fontWeight="700"
                      color="#1A1A2E"
                      lineHeight="1.2"
                      mb="16px"
                    >
                      {current.title}
                    </Text>

                    {/* Arrow icon */}
                    <Box mb="20px">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 6h16v16" stroke="#3F77A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 22L22 6" stroke="#3F77A5" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </Box>

                    {/* Description */}
                    <Text
                      fontFamily="'Wix Madefor Display', sans-serif"
                      fontSize={{ base: "13px", md: "14px" }}
                      fontWeight="400"
                      color="#444"
                      lineHeight="1.7"
                      mb="24px"
                      textAlign="justify"
                    >
                      {current.desc}
                    </Text>

                    {/* Bullet points */}
                    <Box>
                      {current.bullets.map((bullet) => (
                        <Flex key={bullet} align="center" gap="10px" mb="14px">
                          <Box flexShrink={0}>
                            <CheckIcon />
                          </Box>
                          <Text
                            fontFamily="'Wix Madefor Display', sans-serif"
                            fontSize={{ base: "13px", md: "14px" }}
                            fontWeight="400"
                            color="#333"
                            lineHeight="1.5"
                          >
                            {bullet}
                          </Text>
                        </Flex>
                      ))}
                    </Box>
                  </Box>

                  {/* Learn More link */}
                  <Link href="/contact-us">
                    <Flex
                      align="center"
                      gap="8px"
                      mt="24px"
                      cursor="pointer"
                      _hover={{ opacity: 0.75 }}
                      width="fit-content"
                    >
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="600"
                        color="#1A1A2E"
                      >
                        Learn More
                      </Text>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M10 4l6 6-6 6" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Flex>
                  </Link>
                </Box>

                {/* Right image */}
                <Box
                  flex="1"
                  borderRadius="20px"
                  overflow="hidden"
                  minH={{ base: "240px", md: "360px", lg: "513px" }}
                  position="relative"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                    sizes="(max-width: 1024px) 100vw, 917px"
                  />
                </Box>
              </Flex>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerTypes;
