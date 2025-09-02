import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Content is managed in this array. Add new objects here to create new buttons and content slides.
const computerVisionSteps = [
  {
    heading: "Data Input",
    content:
      "Input raw data (e.g., images, videos, live link) from relevant sources like surveillance feeds, cloud server, physical storage, etc).",
    image: "./assets/ComputerVision1.png", // Placeholder image, replace with your actual asset
  },
  {
    heading: "Model Selection",
    content:
      "Find the API model that suits your application. (Agentic Live Summarization, Agentic Video Summarization, Agentic Pose Detection, Zero Shot Object Detection, etc).",
    image: "./assets/ComputerVision2.png",
  },
  {
    heading: "API Wrapping",
    content:
      "We wrap the model in a RESTful API using frameworks like Flask or FastAPI, adding endpoints for easy input, prediction, and integration.",
    image: "./assets/ComputerVision3.png",
  },
  {
    heading: "Integration",
    content:
      "Provide the API key, documentation and SDKs to developers/clients to integrate the AI features into their apps or systems.",
    image: "./assets/ComputerVision4.png",
  },
  {
    heading: "Deployment",
    content:
      "Deploy the API on cloud servers or edge devices (depending on the use case), ensuring scalability and low-latency access.",
    image: "./assets/ComputerVision5.png",
  },
];

const ComputerVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  // Animation variants for the slider effect
  const variants = {
    enter: {
      x: 100,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -100,
      opacity: 0,
    },
  };

  return (
    <Box>
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h1" fontSize="48px" fontWeight="500">
          Explore Our{" "}
          <Text as="span" color="#3F77A5" fontWeight="500">
            Computer Vision Roadmap
          </Text>{" "}
           <br />and{" "}
          <Text as="span" color="#DB7B3A">
            API Strategy
          </Text>
        </Heading>
        <Text color="#000000" fontSize="16px" fontWeight="500" w="95%">
          We handle the complete lifecycle from data collection to computer
          vision models selection, API development to full system integration
          and final deployment. Our goal is to deliver high-performance AI
          computer vision solutions through reliable and scalable APIs built to
          meet your unique needs.
        </Text>
      </VStack>

      <Box
        bg="white"
        px={{ base: 4, md: 8 }}
        pt={{ base: 4, md: 4 }}
        borderRadius="24px"
      >
        <Flex
          justify="center"
          wrap="nowrap"
          mb={8}
          maxW={{ base: "100%", lg: "75%" }}
          mx="auto"
        >
          {computerVisionSteps.map((step, index) => (
            <Button
              key={step.heading}
              onClick={() => handleButtonClick(index)}
              bg={activeIndex === index ? "#3F77A5" : "#e8e8e8"}
              color={activeIndex === index ? "white" : "black"}
              _hover={{
                bg: activeIndex === index ? "#3F77A5" : "#dcdcdc",
              }}
              mx="8px"
              mt="4"
              px={8}
              py={6}
              borderRadius="full"
              fontSize="md"
              fontWeight="medium"
              transition="background-color 0.2s ease-in-out"
              w="170px"
            >
              {step.heading}
            </Button>
          ))}
        </Flex>

        <Box
          position="relative"
          h={{ base: "auto", md: "600px" }}
          overflow="hidden"
        >
          <AnimatePresence initial={true}>
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0 },
              }}
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
              <VStack spacing={6} align="center" textAlign="center">
                <Text fontSize="14px" fontWeight="500" color="#444444" w="50%">
                  {computerVisionSteps[activeIndex].content}
                </Text>
                <Box
                  w="full"
                  h={{ base: "200px", md: "500px" }}
                  // bg="#0e2d47"
                  borderRadius="24px"
                  overflow="hidden"
                >
                  <Image
                    src={computerVisionSteps[activeIndex].image}
                    alt={computerVisionSteps[activeIndex].heading}
                    objectFit="contain"
                    w="full"
                    h="full"
                  />
                </Box>
              </VStack>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default ComputerVision;
