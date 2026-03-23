'use client';
import { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const DEFAULT_TABS = [
  {
    id: "enterprise",
    label: "Multi-Campus Enterprise",
    description:
      "Managing security across corporate offices, warehouses, and retail locations from a single unified command center.",
    bullets: [
      "Unified dashboard for all corporate locations",
      "Cross-campus incident correlation",
      "Centralized access control management",
      "Executive-level security reporting",
    ],
    image: "/assets/Enterprise-Campus.png",
    link: "/industry/enterprise",
    bg: "#F2F4F7",
  },
  {
    id: "banking",
    label: "Banking Operations Center",
    description:
      "Centralized monitoring of 500+ branches, ATMs, and vaults from one command center with real-time AI alerts.",
    bullets: [
      "Live monitoring of all branch cameras",
      "ATM & vault anomaly detection",
      "Regulatory compliance audit trails",
      "Instant escalation to security teams",
    ],
    image: "/assets/BankingIndustry.png",
    link: "/industry/banking",
    bg: "#EBEBEB",
  },
  {
    id: "retail",
    label: "Retail Chain",
    description:
      "Loss prevention command center covering 200+ stores with AI analytics for shrinkage reduction and staff safety.",
    bullets: [
      "AI-powered theft & fraud detection",
      "Heatmaps for store traffic analytics",
      "Centralized incident management",
      "Remote store health monitoring",
    ],
    image: "/assets/Retail_Hospitality.png",
    link: "/industry/hospitality",
    bg: "#BECEDC",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    description:
      "Safety compliance monitoring across multiple plants and facilities to reduce incidents and meet regulatory standards.",
    bullets: [
      "PPE compliance detection via AI",
      "Hazardous zone intrusion alerts",
      "Multi-plant operational dashboard",
      "Automated safety incident reports",
    ],
    image: "/assets/ManufacturingIndustry.png",
    link: "/industry/manufacturing",
    bg: "#D6E4F0",
  },
];

const DEFAULT_HEADING = (
  <>
    Built for{" "}
    <Box as="span" color="#000000" fontWeight="700">Every</Box>{" "}
    <Box as="span" color="#DB7B3A" fontWeight="700">Industry</Box>
  </>
);

const DEFAULT_SUBHEADING = "See how enterprises across industries leverage the Command Center for their unique operational needs.";

const IndustryUseCases = ({
  heading,
  subheading = DEFAULT_SUBHEADING,
  tabs = DEFAULT_TABS,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <Box py={{ base: "24px", md: "32px" }} maxW="1512px" mx="auto" px={{ base: "16px", md: "33px" }}>
      <Box
        bg="white"
        borderRadius="24px"
        px={{ base: "16px", md: "33px" }}
        pt={{ base: "40px", md: "56px", lg: "80px" }}
        pb={{ base: "48px", md: "60px" }}
        overflow="hidden"
        position="relative"
      >

        {/* Section Title */}
        <Text
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          fontWeight="700"
          fontFamily="'Wix Madefor Display', sans-serif"
          color="#3F77A5"
          mb="4px"
        >
          {heading ?? DEFAULT_HEADING}
        </Text>
        <Text
          fontSize={{ base: "0.875rem", md: "1rem" }}
          color="#555"
          fontFamily="'Wix Madefor Display', sans-serif"
          mb={{ base: "28px", md: "40px", lg: "56px" }}
          maxW="440px"
        >
          {subheading}
        </Text>

        {/* Mobile accordion layout */}
        <Box display={{ base: "block", md: "none" }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Box
                key={tab.id}
                bg={tab.bg}
                borderRadius="16px"
                mb="12px"
                overflow="hidden"
                cursor="pointer"
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive ? (
                  <Box p="20px">
                    <Text fontSize="15px" fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" mb="10px">
                      {tab.label}
                    </Text>
                    <Box w="28px" h="2px" bg="#3F77A5" mb="14px" borderRadius="1px" />
                    <Text fontSize="13px" color="#555" lineHeight="1.65" fontFamily="'Wix Madefor Display', sans-serif" mb="16px">
                      {tab.description}
                    </Text>
                    <Box display="flex" flexDirection="column" gap="8px" mb="20px">
                      {tab.bullets.map((b) => (
                        <Flex key={b} align="flex-start" gap="8px">
                          <Text color="#3F77A5" fontSize="13px" flexShrink={0} mt="1px">✓</Text>
                          <Text fontSize="13px" color="#444" lineHeight="1.5" fontFamily="'Wix Madefor Display', sans-serif">{b}</Text>
                        </Flex>
                      ))}
                    </Box>
                    <Flex align="center" gap="8px">
                      <Text fontSize="14px" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E">
                        Know More
                      </Text>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Flex>
                  </Box>
                ) : (
                  <Box px="20px" py="16px">
                    <Flex align="center" gap="10px">
                      <Text fontSize="14px" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E">
                        {tab.label}
                      </Text>
                      <Box w="2px" h="20px" bg="#3F77A5" borderRadius="1px" flexShrink={0} />
                    </Flex>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        {/* Desktop expand layout */}
        <Flex
          display={{ base: "none", md: "flex" }}
          gap="16px"
          h="439px"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <Box
                key={tab.id}
                style={{
                  display: "flex",
                  flex: isActive ? 3 : "0 0 146px",
                  transition: "flex 0.55s cubic-bezier(.22,1,.36,1)",
                  minWidth: 0,
                }}
              >
                <Flex
                  h="439px"
                  borderRadius="24px"
                  overflow="hidden"
                  bg={tab.bg}
                  cursor="pointer"
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  transition="background-color 0.35s ease"
                  flex="1"
                  position="relative"
                >

                  {/* Expanded content */}
                  <Flex
                    w="100%"
                    h="100%"
                    position="absolute"
                    inset="0"
                    opacity={isActive ? 1 : 0}
                    transform={isActive ? "translateX(0)" : "translateX(24px)"}
                    transition="opacity 0.35s ease, transform 0.55s cubic-bezier(.22,1,.36,1)"
                    pointerEvents={isActive ? "auto" : "none"}
                  >
                    {/* Text panel */}
                    <Box
                      p={{ md: "28px", lg: "32px" }}
                      w={{ md: "280px", lg: "320px" }}
                      flexShrink={0}
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text fontSize={{ md: "15px", lg: "17px" }} fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" mb="10px">
                          {tab.label}
                        </Text>
                        <Box w="28px" h="2px" bg="#3F77A5" mb="14px" borderRadius="1px" />
                        <Text fontSize="13px" color="#555" lineHeight="1.65" fontFamily="'Wix Madefor Display', sans-serif" mb="16px">
                          {tab.description}
                        </Text>
                        <Box display="flex" flexDirection="column" gap="8px">
                          {tab.bullets.map((b) => (
                            <Flex key={b} align="flex-start" gap="8px">
                              <Text color="#3F77A5" fontSize="13px" flexShrink={0} mt="1px">✓</Text>
                              <Text fontSize="13px" color="#444" lineHeight="1.5" fontFamily="'Wix Madefor Display', sans-serif">{b}</Text>
                            </Flex>
                          ))}
                        </Box>
                      </Box>

                      {/* Know More */}
                      <Link href={tab.link} style={{ textDecoration: "none" }}>
                        <Flex align="center" gap="8px" mt="20px" _hover={{ opacity: 0.75 }}>
                          <Text fontSize="14px" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E">
                            Know More
                          </Text>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Flex>
                      </Link>
                    </Box>

                    {/* Image */}
                    <Box flex="1" minW={0}>
                      <Image loading="lazy" src={tab.image} alt={tab.label} w="100%" h="100%" objectFit="cover" />
                    </Box>
                  </Flex>

                  {/* Collapsed label */}
                  <Box
                    position="absolute"
                    bottom="24px"
                    left="24px"
                    opacity={isActive ? 0 : 1}
                    transform={isActive ? "translateX(-16px)" : "translateX(0)"}
                    transition="opacity 0.25s ease, transform 0.45s cubic-bezier(.22,1,.36,1)"
                    pointerEvents={isActive ? "none" : "auto"}
                  >
                    <Flex direction="row" align="flex-end" gap="8px">
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        fontFamily="'Wix Madefor Display', sans-serif"
                        sx={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {tab.label}
                      </Text>
                      <Box w="2px" h="28px" bg="#3F77A5" borderRadius="1px" flexShrink={0} />
                    </Flex>
                  </Box>

                </Flex>
              </Box>
            );
          })}
        </Flex>

        {/* Nav arrows */}
        <Flex justify="flex-end" gap="8px" mt="24px">
          <Box
            as="button"
            cursor="pointer"
            onClick={() => {
              const idx = tabs.findIndex(t => t.id === activeTab);
              setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length].id);
            }}
          >
            <Image src="/assets/nevigate-left.svg" alt="Previous" w="31px" h="31px" />
          </Box>
          <Box
            as="button"
            cursor="pointer"
            onClick={() => {
              const idx = tabs.findIndex(t => t.id === activeTab);
              setActiveTab(tabs[(idx + 1) % tabs.length].id);
            }}
          >
            <Image src="/assets/nevigate-right.svg" alt="Next" w="31px" h="31px" />
          </Box>
        </Flex>

      </Box>
    </Box>
  );
};

export default IndustryUseCases;
