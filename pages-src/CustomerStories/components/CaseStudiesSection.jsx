'use client';
import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const filters = ["All", "Banking", "Retail", "Manufacturing", "Healthcare", "Corporate"];

export const caseStudies = [
  {
    id: 1,
    title: "Enterprise Campus Security Transformation",
    industry: "Corporate Campus",
    description:
      "Multi-national corporation deploys VMukti across 12 campus locations with 2,000+ cameras...",
    roi: "60% faster incident response",
    category: "Corporate",
    image: "/assets/Enterprise-Campus.png",
    href: "/customer-stories/",
  },
  {
    id: 2,
    title: "Banking Branch Surveillance Modernization",
    industry: "Banking & BFSI",
    description:
      "Leading bank replaces legacy NVR with VMukti Cloud VMS across 500+ branches...",
    roi: "45% reduction in security incidents",
    category: "Banking",
    image: "/assets/Banking-Branch.png",
    href: "/customer-stories/",
  },
  {
    id: 3,
    title: "Enterprise Perimeter Security Overhaul",
    industry: "Critical Infrastructure",
    description:
      "Large enterprise deploys AI-powered perimeter surveillance across multiple high-security sites...",
    roi: "99.7% threat detection accuracy",
    category: "Manufacturing",
    image: "/assets/Enterprise-Perimeter.png",
    href: "/customer-stories/",
  },
  {
    id: 4,
    title: "Enterprise Command Center Deployment",
    industry: "Multi-site Enterprise",
    image: "/assets/Enterprise-Command.png",
    description:
      "Global enterprise implements centralized command center managing 5,000+ cameras across 20 locations...",
    roi: "3x operational efficiency",
    category: "Corporate",
    image: "/assets/Enterprise-Command.png",
    href: "/customer-stories/",
  },
];

const MotionBox = motion(Box);
const CARDS_PER_PAGE = 4;

const KnowMoreArrow = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 13H20"
      stroke="#111111"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M14 6L21 13L14 20"
      stroke="#111111"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CaseStudiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / CARDS_PER_PAGE));
  const paginatedStories = filtered.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [currentPage, totalPages]);

  return (
    <Box bg="#E7E7E7" pb={{ base: "48px", md: "45px" }} m="0 auto" maxW="1450px">

      {/* Filter Bar — sits on top via zIndex */}
      <Box
        bg="#3F77A5"
        borderRadius={{ base: "16px", md: "20px" }}
        mx={{ base: "16px", md: "32px" }}
        px={{ base: "16px", md: "32px" }}
        h="130px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
      >
        <Flex
          gap={{ base: "8px", md: "12px" }}
          flexWrap="wrap"
          justify="center"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <Box
                key={filter}
                as="button"
                onClick={() => setActiveFilter(filter)}
                px={{ base: "18px", md: "26px" }}
                py={{ base: "10px", md: "12px" }}
                borderRadius="999px"
                bg={isActive ? "white" : "#BECEDC"}
                color={isActive ? "#1A1A1A" : "#4A4A4A"}
                fontWeight={isActive ? "700" : "500"}
                fontSize={{ base: "13px", md: "15px" }}
                cursor="pointer"
                transition="all 0.2s ease"
                _hover={{
                  bg: isActive ? "white" : "#D0DCE8",
                }}
                border="none"
                outline="none"
                lineHeight="1"
              >
                {filter}
              </Box>
            );
          })}
        </Flex>
      </Box>

      {/* Cards Container — slides up behind the filter bar */}
      <Box
        bg="white"
        borderRadius={{ base: "16px", md: "20px" }}
        mx={{ base: "16px", md: "32px" }}
        pt={{ base: "36px", md: "48px" }}
        px={{ base: "20px", md: "28px" }}
        pb={{ base: "24px", md: "34px" }}
        mt="-20px"
        position="relative"
        zIndex={2}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "20px", md: "24px" }}
          justifyItems="center"
        >
          <AnimatePresence mode="popLayout">
            {paginatedStories.map((story) => (
              <MotionBox
                key={story.id}
                bg="#F6F6F6"
                borderRadius="24px"
                overflow="hidden"
                w="100%"
                maxW={{ base: "100%", xl: "674px" }}
                minH={{ base: "auto", xl: "596px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                layout
              >
                {/* Card Image */}
                <Image
                  loading="lazy"
                  src={story.image}
                  alt={story.title}
                  w="100%"
                  h={{ base: "220px", md: "320px", xl: "390px" }}
                  objectFit="cover"
                  borderTopRadius="24px"
                  borderBottomRadius="0"
                />

                {/* Card Body */}
                <Flex
                  p={{ base: "20px", md: "24px", xl: "32px" }}
                  direction="column"
                  minH={{ base: "auto", xl: "206px" }}
                >
                  {/* Title */}
                  <Text
                    fontSize={{ base: "15px", md: "17px", xl: "18px" }}
                    fontWeight="700"
                    color="#1A1A1A"
                    mb="10px"
                    lineHeight="1.3"
                  >
                    {story.title}
                  </Text>

                  {/* Title underline accent */}
                  <Box w="28px" h="2px" bg="#1A1A1A" borderRadius="1px" mb="14px" />

                  {/* Industry */}
                  <Text
                    fontSize={{ base: "13px", md: "14px", xl: "16px" }}
                    fontWeight="700"
                    color="#1A1A1A"
                    mb="6px"
                  >
                    Industry:{" "}
                    <Text as="span" fontWeight="700">
                      {story.industry}
                    </Text>
                  </Text>

                  {/* Description */}
                  <Text
                    fontSize={{ base: "13px", md: "14px", xl: "16px" }}
                    fontWeight="400"
                    color="#555555"
                    lineHeight="1.55"
                    mb="18px"
                  >
                    {story.description}
                  </Text>

                  {/* ROI Badge */}
                  <Flex
                    align="center"
                    gap="8px"
                    bg="#BECEDC"
                    borderRadius="999px"
                    px="16px"
                    py="10px"
                    display="inline-flex"
                    w="100%"
                    maxW="607px"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 1L1 13M13 1H5M13 1V9"
                        stroke="#3F77A5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text
                      fontSize={{ base: "12px", md: "13px", xl: "15px" }}
                      fontWeight="500"
                      color="#3F77A5"
                    >
                      {story.roi}
                    </Text>
                  </Flex>

                  <Flex mt="auto" pt="26px" align="center" justify="space-between">
                    <Link href={story.href}>
                      <Flex
                        as="span"
                        align="center"
                        gap="14px"
                        color="#111111"
                        fontSize={{ base: "16px", xl: "18px" }}
                        fontWeight="400"
                        transition="transform 0.25s ease"
                        _hover={{ transform: "translateX(4px)" }}
                      >
                        <Text as="span">Know More</Text>
                        <KnowMoreArrow />
                      </Flex>
                    </Link>
                  </Flex>
                </Flex>
              </MotionBox>
            ))}
          </AnimatePresence>
        </SimpleGrid>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Flex justify="center" align="center" py="60px">
            <Text fontSize="16px" color="#888888" fontWeight="500">
              No case studies found for this category.
            </Text>
          </Flex>
        )}

        {filtered.length > 0 && (
          <Flex justify="flex-end" mt={{ base: "24px", md: "28px" }} gap="10px">
            <Box
              as="button"
              type="button"
              aria-label="Previous case studies"
              onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
              disabled={currentPage === 0}
              w="38px"
              h="38px"
              borderRadius="8px"
              bg={currentPage === 0 ? "#F3F4F6" : "#EEF3F8"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.2s ease"
              _hover={
                currentPage === 0
                  ? {}
                  : { bg: "#DCE8F1", transform: "translateY(-1px)" }
              }
            >
              <Image
                src="/assets/nevigate-left.svg"
                alt="Previous"
                w="20px"
                h="20px"
                opacity={currentPage === 0 ? 0.45 : 1}
              />
            </Box>

            <Box
              as="button"
              type="button"
              aria-label="Next case studies"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages - 1, page + 1))
              }
              disabled={currentPage >= totalPages - 1}
              w="38px"
              h="38px"
              borderRadius="8px"
              bg={currentPage >= totalPages - 1 ? "#F3F4F6" : "#EEF3F8"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.2s ease"
              _hover={
                currentPage >= totalPages - 1
                  ? {}
                  : { bg: "#DCE8F1", transform: "translateY(-1px)" }
              }
            >
              <Image
                src="/assets/nevigate-right.svg"
                alt="Next"
                w="20px"
                h="20px"
                opacity={currentPage >= totalPages - 1 ? 0.45 : 1}
              />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default CaseStudiesSection;
