"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Text,
  Heading,
  Flex,
  Button,
  useBreakpointValue,
  HStack,
  IconButton,
} from "@chakra-ui/react";

const TimelineGrid = () => {
  const timelineItems = [
    {
      year: "2007",
      content:
        "Founded with a vision to revolutionize surveillance technology.",
    },
    {
      year: "2010",
      content:
        "Developed proprietary video compression technology, reducing bandwidth usage by up to 96%.",
    },
    {
      year: "2013",
      content:
        "Expanded into AI-driven analytics, integrating facial recognition, object detection, and real-time monitoring.",
    },
    {
      year: "2016",
      content:
        "Played a crucial role in government projects, securing contracts across multiple states.",
    },
    {
      year: "2019",
      content:
        "Became the leading provider of election monitoring solutions across India.",
    },
    {
      year: "2021",
      content:
        "Launched GenAI-powered video analytics, revolutionizing real-time surveillance.",
    },
    {
      year: "2023",
      content:
        "Successfully deployed 4G-SIM-based intelligent monitoring across 23,000+ locations in Karnataka State Assembly Elections.",
    },
    {
      year: "2024",
      content:
        "Pioneering the future of Edge AI, Cloud AI, and multimodal Generative AI solutions.",
    },
  ];

  // Determine how many columns should be visible responsively.
  // For example, on mobile show 1 column; on medium and above, show 4.
  const visibleColumns = useBreakpointValue({ base: 1, md: 4 });

  // Refs for the scrollable container and its parent container.
  const scrollContainerRef = useRef(null);
  const containerRef = useRef(null);

  // Measure container width in pixels.
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleColumns]);

  // Compute the width (in pixels) of a single column based on the container width.
  const computedColumnWidth = containerWidth / visibleColumns;

  // Scroll the container by one column width on button clicks.
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: computedColumnWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -computedColumnWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex p="2%" direction="column" bg="#FFFFFF" borderRadius="24px" mt="2%">
      <Heading
        mb={10}
        textAlign="center"
        fontSize={{ base: "24px", md: "48px" }}
      >
        <Box as="span" color="#3F77A5">
          The VMukti
        </Box>{" "}
        Timeline: A History of Progress
      </Heading>

      <Flex
        align="flex-end"
        direction={{ base: "column", md: "column" }}
        gap={4}
      >
        {/* <Flex gap={1}>
          <Button
            width="31px"
            height="31px"
            minWidth="31px"
            minHeight="31px"
            padding="0"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bgColor="#E7E7E7"
            _hover={{ bgColor: "#e0e0e0" }}
            onClick={handlePrev}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path
                d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
          <Button
            width="31px"
            height="31px"
            minWidth="31px"
            minHeight="31px"
            padding="0"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bgColor="#E7E7E7"
            _hover={{ bgColor: "#e0e0e0" }}
            onClick={handleNext}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path
                d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Flex> */}

        {/* NaviGation BUTTon */}
        <Flex mb="4%">
          <HStack spacing={2} position="absolute" right="5%">
            <IconButton
              size="lg"
              bg="#3F77A5"
              color="#fff"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: "#BECEDC",
                color: "#3F77A5",
              }}
              icon={
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.978953 7.29289C0.588428 7.68342 0.588429 8.31658 0.978953 8.7071L7.34291 15.0711C7.73344 15.4616 8.3666 15.4616 8.75713 15.0711C9.14765 14.6805 9.14765 14.0474 8.75713 13.6569L3.10027 8L8.75713 2.34314C9.14765 1.95262 9.14765 1.31946 8.75713 0.928932C8.3666 0.538408 7.73344 0.538407 7.34291 0.928932L0.978953 7.29289ZM24.3135 8L24.3135 7L1.68606 7L1.68606 8L1.68606 9L24.3135 9L24.3135 8Z"
                    fill="currentColor"
                  />
                </svg>
              }
              // onClick={() => handleNavigation("left")}
              onClick={handlePrev}
              isRound
              aria-label="Previous Feature"
            />
            <IconButton
              size="lg"
              bg="#3F77A5"
              color="#fff"
              _hover={{
                bg: "#BECEDC",
                color: "#3F77A5",
              }}
              icon={
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.021 8.70711C24.4116 8.31658 24.4116 7.68342 24.021 7.29289L17.6571 0.928932C17.2666 0.538408 16.6334 0.538407 16.2429 0.928932C15.8523 1.31946 15.8523 1.95262 16.2429 2.34315L21.8997 8L16.2429 13.6569C15.8523 14.0474 15.8523 14.6805 16.2429 15.0711C16.6334 15.4616 17.2666 15.4616 17.6571 15.0711L24.021 8.70711ZM0.686523 8V9L23.3139 9L23.3139 8L23.3139 7L0.686523 7V8Z"
                    fill="currentColor"
                  />
                </svg>
              }
              // onClick={() => handleNavigation("right")}
              onClick={handleNext}
              isRound
              aria-label="Next Feature"
            />
          </HStack>
        </Flex>
        <Box
          ref={containerRef}
          width="100%"
          maxW={{ base: "100%", md: "100%" }}
          mx="auto"
          mt="2%"
        >
          <Box ref={scrollContainerRef} overflowX="hidden">
            <Grid
              templateRows="repeat(5, auto)"
              templateColumns={`repeat(${timelineItems.length}, calc(100% / ${visibleColumns}))`}
              gap={4}
              maxWidth={`calc(${timelineItems.length} * (100% / ${visibleColumns}))`}
            >
              {timelineItems.map((item, colIndex) => {
                const isOddColumn = colIndex % 2 === 0;
                return (
                  <React.Fragment key={colIndex}>
                    {isOddColumn ? (
                      <>
                        {/* Row 1: empty */}
                        <Box gridColumn={colIndex + 1} gridRow={1} />
                        {/* Row 2: empty */}
                        <Box gridColumn={colIndex + 1} gridRow={2} />
                        {/* Row 3: year */}
                        <Box gridColumn={colIndex + 1} gridRow={3}>
                          <Text
                            color="#3F77A5"
                            fontSize={{ base: "48px", md: "64px" }}
                            fontWeight="600"
                          >
                            {item.year}
                          </Text>
                        </Box>
                        {/* Row 4: vertical divider */}
                        <Box
                          gridColumn={colIndex + 1}
                          gridRow={4}
                          display="flex"
                          justifyContent="flex-start"
                        >
                          <Box w="2px" h="100px" bg="#3F77A5" />
                        </Box>
                        {/* Row 5: item content */}
                        <Box gridColumn={colIndex + 1} gridRow={5}>
                          <Text
                            fontSize={{ base: "14px", md: "16px" }}
                            color="#000"
                            fontWeight="500"
                            lineHeight="20px"
                          >
                            {item.content}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      <>
                        {/* Row 1: item content */}
                        <Box gridColumn={colIndex + 1} gridRow={1}>
                          <Text
                            fontSize={{ base: "14px", md: "16px" }}
                            fontWeight="500"
                            color="#000"
                            lineHeight="20px"
                          >
                            {item.content}
                          </Text>
                        </Box>
                        {/* Row 2: vertical divider */}
                        <Box
                          gridColumn={colIndex + 1}
                          gridRow={2}
                          display="flex"
                          justifyContent="flex-start"
                        >
                          <Box w="2px" h="100px" bg="#3F77A5" />
                        </Box>
                        {/* Row 3: year */}
                        <Box gridColumn={colIndex + 1} gridRow={3}>
                          <Text
                            color="#3F77A5"
                            fontSize={{ base: "48px", md: "64px" }}
                            fontWeight="700"
                          >
                            {item.year}
                          </Text>
                        </Box>
                        {/* Row 4: empty */}
                        <Box gridColumn={colIndex + 1} gridRow={4} />
                        {/* Row 5: empty */}
                        <Box gridColumn={colIndex + 1} gridRow={5} />
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TimelineGrid;
