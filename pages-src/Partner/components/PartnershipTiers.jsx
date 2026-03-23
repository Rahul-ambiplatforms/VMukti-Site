'use client';
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const tiers = [
  {
    id: "authorized",
    name: "Authorized Partner",
    level: "Entry Level",
    badge: null,
    highlight: false,
    dividerColor: "#E2E8F0",
    features: [
      "Online training & certification",
      "Deal registration portal",
      "Standard partner margins",
      "Access to partner resource centre",
    ],
  },
  {
    id: "silver",
    name: "Silver Partner",
    level: "10+ Deployments",
    badge: "Most Popular",
    highlight: true,
    dividerColor: "#E8834A",
    features: [
      "Dedicated channel manager",
      "Co-marketing development funds",
      "Enhanced partner margins",
      "Priority technical support",
    ],
  },
  {
    id: "gold",
    name: "Gold Partner",
    level: "25+ Deployments",
    badge: null,
    highlight: false,
    dividerColor: "#E2E8F0",
    features: [
      "Priority lead sharing",
      "Joint go-to-market strategy",
      "Premium margins & incentives",
      "Executive-level access",
    ],
  },
];

const CheckMark = ({ highlight }) => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" flexShrink="0">
    <path
      d="M1.5 5.5L5.5 9.5L13.5 1.5"
      stroke={highlight ? "#E8834A" : "#3F77A5"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PartnershipTiers = () => {
  return (
    <Box
      px={{ base: "16px", md: "24px", lg: "34px" }}
      py={{ base: "48px", md: "64px" }}
    >
      <Box maxW="1445px" mx="auto">

        {/* Outer container with bg */}
        <Box
          bg="#BECEDC"
          borderRadius="24px"
          px={{ base: "20px", md: "40px", lg: "56px" }}
          pt={{ base: "40px", md: "56px", lg: "64px" }}
          pb={{ base: "40px", md: "52px", lg: "60px" }}
        >
          {/* Heading */}
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontSize={{ base: "28px", md: "36px", lg: "44px" }}
            fontWeight="700"
            color="#1A1A2E"
            textAlign="center"
            lineHeight="1.15"
            mb="16px"
          >
            Choose Your Partnership Level
          </Text>

          {/* Subtitle */}
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="400"
            color="#4A5568"
            textAlign="center"
            maxW="560px"
            mx="auto"
            lineHeight="1.6"
            mb={{ base: "36px", md: "48px" }}
          >
            Progress through our tiered program as your business grows. Each
            level unlocks new benefits and opportunities.
          </Text>

          {/* Cards */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "20px", md: "24px" }}
            align="flex-start"
          >
            {tiers.map((tier, i) => (
              <MotionBox
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                flex="1"
                w={{ base: "100%", lg: "410.67px" }}
                minW={{ base: "auto", lg: "410.67px" }}
                h={{ base: "auto", lg: "535.29px" }}
                bg={tier.highlight ? "#3F77A5" : "white"}
                borderRadius="24px"
                border={`1.11px solid ${tier.highlight ? "#3F77A5" : "#E2E8F0"}`}
                p={{ base: "24px", md: "28px", lg: "32px" }}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                position="relative"
              >
                {/* Most Popular badge */}
                {tier.badge && (
                  <Box
                    position="absolute"
                    top="-16px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="white"
                    color="#3F77A5"
                    fontSize="0.75rem"
                    fontWeight="700"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    px="20px"
                    py="5px"
                    borderRadius="999px"
                    whiteSpace="nowrap"
                    border="1px solid #E2E8F0"
                  >
                    {tier.badge}
                  </Box>
                )}

                {/* Tier name */}
                <Text
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem" }}
                  fontWeight="700"
                  color={tier.highlight ? "white" : "#3F77A5"}
                  lineHeight="1.2"
                  mb="8px"
                >
                  {tier.name}
                </Text>

                {/* Level */}
                <Text
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize="0.875rem"
                  color={tier.highlight ? "rgba(255,255,255,0.75)" : "#888"}
                  mb="20px"
                >
                  {tier.level}
                </Text>

                {/* Divider */}
                <Box
                  h="1.5px"
                  bg={tier.dividerColor}
                  mb="24px"
                  opacity={tier.highlight ? 1 : 0.6}
                />

                {/* Features */}
                <Box flex="1" mb="32px">
                  {tier.features.map((f) => (
                    <Flex key={f} align="flex-start" gap="10px" mb="16px">
                      <Box flexShrink={0} mt="2px">
                        <CheckMark highlight={tier.highlight} />
                      </Box>
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize="0.875rem"
                        color={tier.highlight ? "rgba(255,255,255,0.9)" : "#444"}
                        lineHeight="1.5"
                      >
                        {f}
                      </Text>
                    </Flex>
                  ))}
                </Box>

                {/* CTA — matches PricingPlans button exactly */}
                <Link href="/contact-us">
                  <Box
                    as="button"
                    w="100%"
                    py="13px"
                    borderRadius="25px"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize="0.9375rem"
                    fontWeight="600"
                    textAlign="center"
                    cursor="pointer"
                    transition="all 0.2s ease"
                    bg={tier.highlight ? "white" : "white"}
                    color={tier.highlight ? "#3F77A5" : "#1A1A2E"}
                    border={tier.highlight ? "none" : "1.5px solid #D1D5DB"}
                    _hover={{
                      bg: tier.highlight ? "#f0f4f8" : "#F5F5F5",
                      transform: "translateY(-1px)",
                    }}
                  >
                    Learn More →
                  </Box>
                </Link>
              </MotionBox>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnershipTiers;
