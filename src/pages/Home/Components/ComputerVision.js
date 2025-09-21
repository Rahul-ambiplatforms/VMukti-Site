import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const computerVisionSteps = [
    {
      heading: "Data Input",
      content:
        "Input raw data (e.g., images, videos, live link) from relevant sources like surveillance feeds, cloud server, physical storage, etc.",
      image: "./assets/ComputerVision1.png",
      image_mobile: "./assets/ComputerVision1_mobile.png", 
    },
    {
      heading: "Model Selection",
      content:
        "Find the API model that suits your application. (Agentic Live Summarization, Agentic Video Summarization, Agentic Pose Detection, Zero Shot Object Detection, etc).",
      image: "./assets/ComputerVision2.png",
      image_mobile: "./assets/ComputerVision2_mobile.png",
    },
    {
      heading: "API Wrapping",
      content:
        "We wrap the model in a RESTful API using frameworks like Flask or FastAPI, adding endpoints for easy input, prediction, and integration.",
      image: "./assets/ComputerVision3.png",
      image_mobile: "./assets/ComputerVision3_mobile.png",
    },
    {
      heading: "Integration",
      content:
        "Provide the API key, documentation and SDKs to developers/clients to integrate the AI features into their apps or systems.",
      image: "./assets/ComputerVision4.png",
      image_mobile: "./assets/ComputerVision4_mobile.png",
    },
    {
      heading: "Deployment",
      content:
        "Deploy the API on cloud servers or edge devices (depending on the use case), ensuring scalability and low-latency access.",
      image: "./assets/ComputerVision5.png",
      image_mobile: "./assets/ComputerVision5_mobile.png",
    },
  ];

const ComputerVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleButtonClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const variants = {
    enter: (direction) => ({
      x: isMobile ? 0 : direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: isMobile ? 0 : direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <Box >
      <VStack spacing={4} textAlign="center" mb={{ base: 4, md: 8 }}>
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "40px", lg: "48px" }}
          fontWeight="500"
          w={["100%","100%","90%","70%"]}
        >
          Explore Our{" "}
          <Text as="span" color="#3F77A5" fontWeight="500">
            Computer Vision Roadmap
          </Text>{" "}
          and{" "}
          <Text as="span" color="#DB7B3A">
            API Strategy
          </Text>
        </Heading>
        <Text
          color="#000000"
          fontSize={{base:"14px",md:"16px"}}
          fontWeight="500"
          lineHeight={{base:"18px",md:"20px"}}
          w={{ base: "100%", md: "95%", lg: "95%" }}
          as="p"
        >
          We handle the complete lifecycle from data collection to computer
          vision models selection, API development to full system integration
          and final deployment. Our goal is to deliver high-performance AI
          computer vision solutions through reliable and scalable APIs built to
          meet your unique needs.
        </Text>
      </VStack>

      <Box
        bg="white"
        // p={{ base: 4, sm: 6, md: 8 }}
        pt={["4","4","6","8"]}
        borderRadius="24px"
      >
        <Box
          overflowX="auto"
          pb={4}
          sx={{
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              background: "#e2e8f0",
              borderRadius: "8px",
            },
          }}
        >
          <Flex justify={{ base: "flex-start", lg: "center" }} wrap="nowrap" mb={4}>
            {computerVisionSteps.map((step, index) => (
              <Button
                key={step.heading}
                onClick={() => handleButtonClick(index)}
                bg={activeIndex === index ? "#3F77A5" : "#e8e8e8"}
                color={activeIndex === index ? "white" : "black"}
                _hover={{ bg: activeIndex === index ? "#3F77A5" : "#dcdcdc" }}
                mx={2}
                px={{ base: 6, md: 8 }}
                py={6}
                borderRadius="full"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="medium"
                transition="background-color 0.2s ease-in-out"
                flexShrink={0}
                w={{ base: "150px", md: "170px" }}
                as="h3"
              >
                {step.heading}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Removed fixed height. The container is now fully dynamic. */}
        <Box position="relative" overflow="hidden" p={["4","4","6","8"]}>
          {/* mode="wait" ensures old content leaves before new content enters, preventing height jumps. */}
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <VStack spacing={6} align="center" textAlign="center">
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  color="#444444"
                  w={{ base: "95%", md: "70%", lg: "60%" }}
                  minH={{ base: "auto", md: "60px" }}
                  as="p"
                >
                  {computerVisionSteps[activeIndex].content}
                </Text>
                
                <Box
                  w="full"
                  px={{ base: 0, md: 4 }}
                >
                  <AspectRatio
                    ratio={{ base: 3 / 4, md: 16 / 9 }}
                    w="100%"
                    borderRadius="24px"
                    overflow="hidden"
                  >
                    <Image
                      src={isMobile ? computerVisionSteps[activeIndex].image_mobile : computerVisionSteps[activeIndex].image}
                      alt={computerVisionSteps[activeIndex].heading}
                      objectFit="contain"
                      w="full"
                      h="full"
                    />
                  </AspectRatio>
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