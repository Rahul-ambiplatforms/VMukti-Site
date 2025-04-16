"use client"

import React, { useRef, useState, useEffect } from "react"
import {
  Grid,
  Box,
  Text,
  Heading,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"

const TimelineGrid = () => {
  const timelineItems = [
    {
      year: "2007",
      content: "Founded with a vision to revolutionize surveillance technology.",
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
  ]

  // Determine how many columns should be visible responsively.
  // For example, on mobile show 1 column; on medium and above, show 4.
  const visibleColumns = useBreakpointValue({ base: 1, md: 4 })

  // Refs for the scrollable container and its parent container.
  const scrollContainerRef = useRef(null)
  const containerRef = useRef(null)

  // Measure container width in pixels.
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [visibleColumns])

  // Compute the width (in pixels) of a single column based on the container width.
  const computedColumnWidth = containerWidth / visibleColumns

  // Scroll the container by one column width on button clicks.
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: computedColumnWidth,
        behavior: "smooth",
      })
    }
  }

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -computedColumnWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <Flex p="6%" direction="column" bg="#FFFFFF" borderRadius="20px">
      <Heading
        mb={10}
        textAlign="left"
        fontSize={{ base: "24px", md: "36px" }}
      >
        <Box as="span" color="#3F77A5">
          The VMukti
        </Box>{" "}
        Timeline: A History of Progress
      </Heading>

      <Flex align="center" direction={{ base: "column", md: "row" }} gap={4}>
        {/* Parent container that sets the visible area for the grid, centered with mx="auto" */}
        <Box
          ref={containerRef}
          width="100%"
          maxW={{ base: "100%", md: "80%" }}
          mx="auto"
        >
          {/* Scrollable container */}
          <Box ref={scrollContainerRef} overflowX="hidden">
            <Grid
              templateRows="repeat(5, auto)"
              // Each column uses a relative width based on visible columns.
              templateColumns={`repeat(${timelineItems.length}, calc(100% / ${visibleColumns}))`}
              gap={4}
              // Overall grid width is set to fit all items
              maxWidth={`calc(${timelineItems.length} * (100% / ${visibleColumns}))`}
            >
              {timelineItems.map((item, colIndex) => {
                const isOddColumn = colIndex % 2 === 0
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
                            fontSize={{ base: "24px", md: "36px" }}
                            fontWeight="700"
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
                          <Box w="2px" h="20px" bg="#3F77A5" />
                        </Box>
                        {/* Row 5: item content */}
                        <Box gridColumn={colIndex + 1} gridRow={5}>
                          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
                            {item.content}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      <>
                        {/* Row 1: item content */}
                        <Box gridColumn={colIndex + 1} gridRow={1}>
                          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
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
                          <Box w="2px" h="20px" bg="#3F77A5" />
                        </Box>
                        {/* Row 3: year */}
                        <Box gridColumn={colIndex + 1} gridRow={3}>
                          <Text
                            color="#3F77A5"
                            fontSize={{ base: "24px", md: "36px" }}
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
                )
              })}
            </Grid>
          </Box>
        </Box>

        <Flex gap={1}>
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
            _hover={{ bgColor: '#e0e0e0' }}
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
            _hover={{ bgColor: '#e0e0e0' }}
            onClick={handleNext}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path
                d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TimelineGrid
