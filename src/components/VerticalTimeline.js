"use client";

import React, { useRef } from "react";
import {
  Grid,
  Box,
  Text,
  Heading,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Make sure motion is imported

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

  // This ref is for the outer container, to set the drag constraints
  const constraintsRef = useRef(null);

  const columnWidth = useBreakpointValue({ base: 300, md: 350 }); // Fixed width for each column
  const gridGap = useBreakpointValue({ base: 16, md: 24 }); // Gap between columns

  return (
    <Flex
      p={{ base: 4, md: 8 }}
      direction="column"
      bg="#FFFFFF"
      borderRadius="24px"
      mt="2%"
    >
      <Heading
        mb={{ base: 6, md: 10 }}
        textAlign="center"
        fontSize={{ base: "24px", md: "48px" }}
      >
        <Box as="span" color="#3F77A5">
          The VMukti
        </Box>{" "}
        Timeline: A History of Progress
      </Heading>

      {/* --- THIS IS THE DRAGGABLE SLIDER --- */}
      {/* Outer container to hide overflow and set drag boundaries */}
      <Box
        ref={constraintsRef}
        w="100%"
        overflow="hidden" // Hides the parts of the grid that are off-screen
      >
        <motion.div
          drag="x" // Enables horizontal dragging
          dragConstraints={constraintsRef} // Prevents dragging beyond the container
          style={{
            display: "flex",
            cursor: "grab",
            width: `${(columnWidth + gridGap) * timelineItems.length}px`,
            padding: "0 10px",
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {timelineItems.map((item, index) => {
            const isOddItem = index % 2 === 0;
            return (
              <Flex
                key={item.year}
                direction="column"
                justify={isOddItem ? "flex-end" : "flex-start"} // Alternates layout up/down
                width={`${columnWidth}px`}
                flexShrink={0} // Prevents columns from shrinking
                mr={`${gridGap}px`} // Margin between items
                minH="350px"
              >
                {!isOddItem && (
                  <Text
                    fontSize={{ base: "14px", md: "16px" }}
                    color="#000"
                    fontWeight="500"
                    lineHeight="20px"
                    textAlign="center"
                    mb={4}
                  >
                    {item.content}
                  </Text>
                )}

                <Flex direction="column" align="center" w="100%">
                  {!isOddItem && <Box w="2px" h="50px" bg="#3F77A5" />}

                  <Text
                    color="#3F77A5"
                    fontSize={{ base: "48px", md: "64px" }}
                    fontWeight="700"
                  >
                    {item.year}
                  </Text>

                  {isOddItem && <Box w="2px" h="50px" bg="#3F77A5" />}
                </Flex>

                {isOddItem && (
                  <Text
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight="500"
                    color="#000"
                    lineHeight="20px"
                    textAlign="center"
                    mt={4}
                  >
                    {item.content}
                  </Text>
                )}
              </Flex>
            );
          })}
        </motion.div>
      </Box>
    </Flex>
  );
};

export default TimelineGrid;
