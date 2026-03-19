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
      href: "/book-a-demo",
      label: "Get a Personalized Demo",
      description:
        "See VMukti in action with a live demo tailored to your industry. Our team will show you exactly how 26+ AI models work for your use case.",
      image: "/assets/Related_Resource.png",
      bg: "#EBEBEB",
    },
    {
      id: "guide",
      href: "/contact-us",
      label: "Talk to Our Enterprise Team",
      description:
        "Speak directly with our solutions team about your surveillance requirements. Get pricing, deployment timelines, and technical specifications.",
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

        {/* Cards */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap="16px"
          h={{ base: "650px", md: "439px" }}
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
                  h={{ base: "auto", md: "439px" }}
                  minH={{ base: "120px", md: "unset" }}
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
                    // direction={{ base: "row", md: "row" }}
                  >

                    {/* TEXT */}
                    <Box
                      p="32px"
                      w="280px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                    >
                      <Text
                        fontSize="17px"
                        fontWeight="700"
                        mb="10px"
                      >
                        {card.label}
                      </Text>

                      <Box
                        w="28px"
                        h="2px"
                        bg="#3F77A5"
                        mb="16px"
                        borderRadius="1px"
                      />

                      <Text
                        fontSize="13px"
                        color="#666"
                        lineHeight="1.65"
                      >
                        {card.description}
                      </Text>
                    </Box>

                    {/* IMAGE */}
                    <Box flex="1">
                      <Image
                        src={card.image}
                        alt={card.label}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
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
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      align={{ base: "flex-start", md: "flex-end" }}
                      gap="8px"
                    >
                      <Text
                        fontSize="14px"
                        fontWeight="600"
                        sx={{
                          writingMode: { base: "horizontal-tb", md: "vertical-rl" },
                          transform: { base: "none", md: "rotate(180deg)" }
                        }}
                      >
                        {card.label}
                      </Text>
                      <Box
                        w={{ base: "28px", md: "2px" }}
                        h={{ base: "2px", md: "28px" }}
                        bg="#3F77A5"
                        borderRadius="1px"
                        flexShrink={0}
                      />
                    </Flex>
                  </Box>

                </Flex>
              </Link>
            );
          })}

        </Flex>
      </Box>
    </Box>
  );
};

export default RelatedResources;
