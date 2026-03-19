'use client';
import React, { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

const RelatedResources = () => {

  const [activeCard, setActiveCard] = useState("solutions");

  const cards = [
    {
      id: "solutions",
      href: "/solutions-comparison",
      label: "Solutions Comparison",
      description:
        "Explore innovative, scalable solutions designed to meet the unique security and operational needs of enterprises.",
      image: "/assets/Related_Resource.png",
      bg: "#F2F4F7",
    },
    {
      id: "roi",
      href: "/blog", // currently added wrong path
      label: "ROI Calculator",
      description:
        "Estimate the financial impact of deploying our enterprise solutions and calculate the return on your investment.",
      image: "/assets/Related_Resource.png",
      bg: "#EBEBEB",
    },
    {
      id: "guide",
      href: "/blog", // currently added wrong path
      label: "Enterprise Buyer's Guide",
      description:
        "A comprehensive guide to help enterprise teams evaluate, compare, and choose the right security platform.",
      image: "/assets/Related_Resource.png",
      bg: "#BECEDC",
    },
  ];

  return (
    <Box bg="#E7E7E7" py={{ base: "24px", md: "32px" }} maxW="1450px" m="0 auto">

      <Box
        bg="white"
        borderRadius="24px"
        mx={{ base: "16px", lg: "33px" }}
        px={{ base: "16px", md: "33px" }}
        pt={{ base: "40px", md: "56px", lg: "80px" }}
        pb={{ base: "48px", md: "60px" }}
        overflow="hidden"
      >

        {/* Title */}
        <Text
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          fontWeight="400"
          mb={{ base: "24px", md: "36px", lg: "56px" }}
        >
          Related Resources
        </Text>

        {/* Mobile stacked cards */}
        <Box display={{ base: "block", md: "none" }}>
          {cards.map((card) => (
            <Link key={card.id} href={card.href}>
              <Box bg={card.bg} borderRadius="16px" mb="12px" p="20px" cursor="pointer">
                <Text fontSize="15px" fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" mb="10px">
                  {card.label}
                </Text>
                <Box w="28px" h="2px" bg="#3F77A5" mb="14px" borderRadius="1px" />
                <Text fontSize="13px" color="#666" lineHeight="1.65" fontFamily="'Wix Madefor Display', sans-serif" mb="16px">
                  {card.description}
                </Text>
                <Flex align="center" gap="8px">
                  <Text fontSize="14px" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E">
                    Know More
                  </Text>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Flex>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Desktop expand layout */}
        <Flex
          display={{ base: "none", md: "flex" }}
          gap="16px"
          h="439px"
        >

          {cards.map((card) => {

            const isActive = activeCard === card.id;

            return (
              <Link
                key={card.id}
                href={card.href}
                style={{
                  display: "flex",
                  flex: isActive ? 3 : "0 0 146px",
                  transition: "flex 0.55s cubic-bezier(.22,1,.36,1)",
                }}
              >

                <Flex
                  h="439px"
                  borderRadius="24px"
                  overflow="hidden"
                  bg={card.bg}
                  cursor="pointer"
                  onMouseEnter={() => setActiveCard(card.id)}
                  transition="background-color 0.35s ease, transform 0.45s cubic-bezier(.22,1,.36,1)"
                  flex="1"
                  position="relative"
                >

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

                    {/* TEXT */}
                    <Box
                      p="28px"
                      w="50%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text fontSize="17px" fontWeight="700" fontFamily="'Wix Madefor Display', sans-serif" mb="10px">
                          {card.label}
                        </Text>
                        <Box w="28px" h="2px" bg="#3F77A5" mb="16px" borderRadius="1px" />
                        <Text fontSize="13px" color="#666" lineHeight="1.65" fontFamily="'Wix Madefor Display', sans-serif">
                          {card.description}
                        </Text>
                      </Box>
                      <Flex align="center" gap="8px" mt="20px">
                        <Text fontSize="14px" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif" color="#1A1A2E">
                          Know More
                        </Text>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                      </Flex>
                    </Box>

                    {/* IMAGE */}
                    <Box flex="1">
                      <Image src={card.image} alt={card.label} w="100%" h="100%" objectFit="cover" />
                    </Box>

                  </Flex>

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
                        sx={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {card.label}
                      </Text>
                      <Box w="2px" h="28px" bg="#3F77A5" borderRadius="1px" flexShrink={0} />
                    </Flex>
                  </Box>

                </Flex>
              </Link>
            );
          })}

        </Flex>

        {/* Navigation arrows */}
        <Flex justify="flex-end" gap="8px" mt="24px">
          <Box
            as="button"
            cursor="pointer"
            onClick={() => {
              const idx = cards.findIndex((c) => c.id === activeCard);
              setActiveCard(cards[(idx - 1 + cards.length) % cards.length].id);
            }}
          >
            <Image src="/assets/nevigate-left.svg" alt="Previous" w="31px" h="31px" />
          </Box>
          <Box
            as="button"
            cursor="pointer"
            onClick={() => {
              const idx = cards.findIndex((c) => c.id === activeCard);
              setActiveCard(cards[(idx + 1) % cards.length].id);
            }}
          >
            <Image src="/assets/nevigate-right.svg" alt="Next" w="31px" h="31px" />
          </Box>
        </Flex>

      </Box>
    </Box>
  );
};

export default RelatedResources;
