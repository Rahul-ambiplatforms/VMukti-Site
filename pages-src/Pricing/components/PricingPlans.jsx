'use client';
import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import CompareFeatures from "./CompareFeatures";

const MotionBox = motion(Box);

const MONTHLY_PRICES = { starter: 29, professional: 49, enterprise: null };
const ANNUAL_PRICES  = { starter: 23, professional: 39, enterprise: null };

const plans = [
  {
    id: "starter",
    name: "STARTER",
    description: "For growing businesses",
    unit: "/cam/mo",
    cameras: "Up to 50 cameras",
    badge: null,
    highlight: false,
    features: [
      "Cloud VMS",
      "Basic AI analytics",
      "Email support",
      "7-day cloud recording",
      "Standard dashboard",
    ],
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    description: "For enterprises",
    unit: "/cam/mo",
    cameras: "Up to 500 cameras",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Cloud VMS + Edge Management",
      "Full AI analytics suite",
      "24/7 support + dedicated CSM",
      "Enterprise Command Center",
      "30-day cloud recording",
      "Advanced alerting rules",
    ],
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    description: "For large organizations",
    unit: null,
    cameras: "Unlimited cameras",
    badge: null,
    highlight: false,
    features: [
      "Full platform access",
      "Custom AI models",
      "White-label options",
      "On-premise deployment option",
      "SLA guarantee",
      "Unlimited recording",
    ],
  },
];

const CheckMark = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path d="M1.5 5.5L5.5 9.5L13.5 1.5" stroke="#3F77A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingPlans = () => {
  const [billing, setBilling] = useState("monthly");
  const prices = billing === "annual" ? ANNUAL_PRICES : MONTHLY_PRICES;

  return (
    <>
    <Box px={{ base: "16px", md: "24px", lg: "32px" } }>
      <Box 
      maxW="1448px" 
      mx="auto"
      >

        {/* Outer bordered container */}
        <Box
          borderTopRadius="24px"
          borderBottomRadius="0"
          overflow="hidden"
        >

          {/* Blue header — toggle only */}
          <Box
            bg="#3F77A5"
            pt={{ base: "36px", md: "48px" }}
            pb={{ base: "40px", md: "52px" }}
            px={{ base: "20px", md: "40px", lg: "56px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* Toggle bar — width 351, height 58, border-radius 49px, padding 5px */}
            <Box
              display="inline-flex"
              alignItems="center"
              bg="#ffffff"
              borderRadius="49px"
              p="5px"
              border="1.5px solid rgba(255,255,255,0.25)"
              minW={{ base: "280px", md: "351px" }}
              h="58px"
              justifyContent="center"
            >
              <Box
                as="button"
                onClick={() => setBilling("monthly")}
                flex="1"
                h="100%"
                borderRadius="44px"
                fontFamily="'Wix Madefor Display', sans-serif"
                fontSize="0.9375rem"
                fontWeight={billing === "monthly" ? "700" : "500"}
                color={billing === "monthly" ? "#ffffff" : "#000000"}
                bg={billing === "monthly" ? "#3F77A5" : "transparent"}
                transition="all 0.25s ease"
                cursor="pointer"
              >
                Monthly
              </Box>
              <Flex
                as="button"
                onClick={() => setBilling("annual")}
                flex="1"
                h="100%"
                borderRadius="44px"
                fontFamily="'Wix Madefor Display', sans-serif"
                fontSize="0.9375rem"
                fontWeight={billing === "annual" ? "700" : "500"}
                color={billing === "annual" ? "#ffffff" : "#000000"}
                bg={billing === "annual" ? "#3F77A5" : "transparent"}
                transition="all 0.25s ease"
                cursor="pointer"
                align="center"
                justify="center"
                gap="7px"
              >
                Annual
                <Box
                  as="span"
                  bg="#BECEDC"
                  color="#000000"
                  fontSize="0.625rem"
                  fontWeight="700"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  px="8px"
                  py="3px"
                  borderRadius="999px"
                  letterSpacing="0.02em"
                >
                  Save 20%
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* White cards section */}
          <Box
            bg="#ffffff"
            borderRadius="0"
            px={{ base: "20px", md: "40px", lg: "56px" }}
            pt={{ base: "32px", md: "44px" }}
            pb={{ base: "40px", md: "52px" }}
          >
            {/* 3 Cards — width 1282, height 535, border-radius 24px, border-width 1.11px */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: "20px", md: "24px" }}
              w="100%"
              align="stretch"
            >
            {plans.map((plan, i) => {
              const price = prices[plan.id];
              return (
                <MotionBox
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  flex="1"
                  bg="white"
                  borderRadius="24px"
                  border={`1.11px solid ${plan.highlight ? "#3F77A5" : "#E2E8F0"}`}
                  p={{ base: "24px", md: "28px", lg: "32px" }}
                  display="flex"
                  flexDirection="column"
                  position="relative"
                >
                  {/* Most Popular badge */}
                  {plan.badge && (
                    <Box
                      position="absolute"
                      top="-16px"
                      left="50%"
                      transform="translateX(-50%)"
                      bg="#3F77A5"
                      color="white"
                      fontSize="0.75rem"
                      fontWeight="700"
                      fontFamily="'Wix Madefor Display', sans-serif"
                      px="20px"
                      py="5px"
                      borderRadius="999px"
                      whiteSpace="nowrap"
                    >
                      {plan.badge}
                    </Box>
                  )}

                  {/* Plan name */}
                  <Text
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize="0.75rem"
                    fontWeight="700"
                    letterSpacing="0.1em"
                    color="#3F77A5"
                    textTransform="uppercase"
                    mb="4px"
                  >
                    {plan.name}
                  </Text>

                  <Text
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize="0.875rem"
                    color="#888"
                    mb="20px"
                  >
                    {plan.description}
                  </Text>

                  {/* Price */}
                  {price !== null ? (
                    <Flex align="baseline" gap="3px" mb="4px">
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize={{ base: "3rem", lg: "3.5rem" }}
                        fontWeight="700"
                        color="#1A1A2E"
                        lineHeight="1"
                      >
                        ${price}
                      </Text>
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize="0.875rem"
                        color="#999"
                        pb="4px"
                      >
                        {plan.unit}
                      </Text>
                    </Flex>
                  ) : (
                    <Text
                      fontFamily="'Wix Madefor Display', sans-serif"
                      fontSize={{ base: "3rem", lg: "3.5rem" }}
                      fontWeight="700"
                      color="#1A1A2E"
                      lineHeight="1"
                      mb="4px"
                    >
                      Custom
                    </Text>
                  )}

                  <Text
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize="0.8125rem"
                    color="#999"
                    mb="28px"
                  >
                    {plan.cameras}
                  </Text>

                  {/* Features */}
                  <Box flex="1" mb="32px">
                    {plan.features.map((f) => (
                      <Flex key={f} align="flex-start" gap="10px" mb="14px">
                        <Box flexShrink={0} mt="2px">
                          <CheckMark />
                        </Box>
                        <Text
                          fontFamily="'Wix Madefor Display', sans-serif"
                          fontSize="0.875rem"
                          color="#444"
                          lineHeight="1.5"
                        >
                          {f}
                        </Text>
                      </Flex>
                    ))}
                  </Box>

                  {/* CTA */}
                  <Link href="/contact-us">
                    <Box
                      as="button"
                      w="100%"
                      py="13px"
                      borderRadius="10px"
                      fontFamily="'Wix Madefor Display', sans-serif"
                      fontSize="0.9375rem"
                      fontWeight="600"
                      cursor="pointer"
                      transition="all 0.2s ease"
                      bg={plan.highlight ? "#3F77A5" : "white"}
                      color={plan.highlight ? "white" : "#1A1A2E"}
                      border={plan.highlight ? "none" : "1.5px solid #D1D5DB"}
                      _hover={{
                        bg: plan.highlight ? "#2d5f88" : "#F5F5F5",
                        transform: "translateY(-1px)",
                      }}
                    >
                      Contact Sales
                    </Box>
                  </Link>
                </MotionBox>
              );
            })}
            </Flex>
          </Box>

        </Box>
      </Box>
    </Box> 
    </>
  );
};

export default PricingPlans;