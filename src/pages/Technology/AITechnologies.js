import React, { useState, useEffect } from "react";
import ImagePop from "../../components/Animation/Image/ImagePop";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";

const AITechnologies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideRange, setVisibleSlideRange] = useState({
    start: 0,
    end: 3,
  }); // Track visible slide names

  // Data for each slide
  const slides = [
    {
      title: "Computer\nVision",
      description: [
        "AI-powered computer vision analyzes and interprets visual data with unmatched accuracy, recognizing faces, objects, and patterns. It enhances surveillance, automates processes, and optimizes decision-making across industries like security, retail, healthcare, and manufacturing.",
        "Beyond simple recognition, AI-driven computer vision tracks movement, monitors crowd behavior, and predicts potential threats. Integrated with edge AI and cloud computing, it enables real-time responses, improving security and efficiency.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Object\nDetection",
      description: [
        "Object detection algorithms identify and locate multiple objects within images or video streams with remarkable precision. These systems can distinguish between different object classes, track their movements, and analyze their behaviors in real-time.",
        "Modern object detection frameworks like YOLO, SSD, and R-CNN enable applications ranging from autonomous vehicles and robotics to retail analytics and medical imaging. These technologies continue to evolve with improved accuracy and reduced computational requirements.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Deep Learning Algorithms",
      description: [
        "Deep learning algorithms utilize multi-layered neural networks to process complex data sets and derive meaningful patterns. These sophisticated models can handle unstructured data types including images, text, and audio with unprecedented accuracy.",
        "Through techniques like transfer learning and reinforcement learning, deep learning systems continue to improve their capabilities, enabling breakthroughs in natural language processing, image recognition, and predictive analytics across various domains.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Neural Networks & Predictive Analytics",
      description: [
        "Neural networks form the backbone of modern AI systems, mimicking the human brain's structure to process and learn from vast amounts of data. These interconnected layers of artificial neurons excel at pattern recognition and feature extraction.",
        "When applied to predictive analytics, neural networks can forecast trends, identify anomalies, and make data-driven recommendations. This powerful combination enables businesses to anticipate market changes, optimize operations, and deliver personalized experiences.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "AI-Driven\nAutomation",
      description: [
        "AI-driven automation streamlines repetitive tasks, reducing human error and increasing efficiency in industries like manufacturing, logistics, and customer service.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "GPT in Video Surveillance",
      description: [
        "GPT models enhance video surveillance by analyzing footage in real-time, detecting anomalies, and providing actionable insights for security teams.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Edge AI Computing",
      description: [
        "Edge AI brings computation and data storage closer to the devices, enabling real-time processing and reducing latency for critical applications.",
      ],
      image: "./assets/holdingtab.png",
    },
  ];

  // Update the slider
  const updateSlider = (index) => {
    setCurrentSlide(index);
  };

  // Handle previous and next slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Update visible slide names based on the current slide
  useEffect(() => {
    if (currentSlide < visibleSlideRange.start) {
      // Move the visible range left
      setVisibleSlideRange({ start: currentSlide, end: currentSlide + 3 });
    } else if (currentSlide > visibleSlideRange.end) {
      // Move the visible range right
      setVisibleSlideRange({ start: currentSlide - 3, end: currentSlide });
    }
  }, [currentSlide]);

  // Responsive styles
  const cardDirection = useBreakpointValue({ base: "column", md: "row" });
  const cardContentWidth = useBreakpointValue({ base: "95%", md: "35%" });

  return (
    <Box bg="white" minH="100vh" overflowX="visible" borderRadius="24px">
      {/* Navigation */}
      <Flex
        justify="space-between" // Changed from "center"
        align="center"
        p={8}
        position="relative"
        width="100%"
        minH="80px" // Ensure enough height for two-line titles
        // bg="red"
      >
        {/* Left Dots - Fixed width container */}
        {/* <Flex width="60px" justify="flex-start" align="center" flexShrink={0}>
          {visibleSlideRange.start > 0 && (
            <Flex gap={1}>
              {[...Array(visibleSlideRange.start)].map((_, index) => (
                <Box
                  key={index}
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg="#3F77A5" // Removed semicolon
                />
              ))}
            </Flex>
          )}
        </Flex> */}

        {/* Center Titles - Constrained flexible container */}
        <Flex
          flex="1"
          mx={{ base: 2, md: 12 }}
          justify="space-between"
          align="center"
          gap={{ base: 2, md: 3 }}
          height="72px"
          wrap="wrap"
          minWidth="0" // Allows text truncation
          // bg="red"
        >
          {slides
            .slice(visibleSlideRange.start, visibleSlideRange.end + 1)
            .map((slide, index) => (
              <Box
                key={index + visibleSlideRange.start}
                flex="1 0 auto"
                minW={{ base: "120px", md: "160px" }}
                maxW="170px"
                textAlign="center"
                px={1}
              >
                <Text
                  py={1}
                  cursor="pointer"
                  fontSize="16px"
                  color={
                    currentSlide === index + visibleSlideRange.start
                      ? "blue.600"
                      : "gray.800"
                  }
                  fontWeight={
                    currentSlide === index + visibleSlideRange.start
                      ? "600"
                      : "500"
                  }
                  onClick={() => updateSlider(index + visibleSlideRange.start)}
                  noOfLines={2}
                  lineHeight="short"
                  // wordBreak="break-word"
                  textAlign={"left"}
                  whiteSpace="pre-line" // This makes \n work as line breaks
                >
                  {slide.title}
                </Text>
                {/* Active indicator */}
                {currentSlide === index + visibleSlideRange.start && (
                  <Box
                    width="17px"
                    height="2px"
                    borderRadius="24px"
                    mt="1%"
                    bg="#3F77A5"
                  />
                )}
              </Box>
            ))}
        </Flex>

        {/* Right Controls - Fixed width container */}
        <Flex
          width="120px"
          justify="flex-end"
          align="center"
          gap={2}
          flexShrink={0}
          ml="5%"
          // bg="red"
        >
          {visibleSlideRange.end < slides.length - 1 && (
            <Flex gap={1} align="center">
              {[...Array(slides.length - visibleSlideRange.end - 1)].map(
                (_, index) => (
                  <Box
                    key={index}
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg="#3F77A5" // Removed semicolon
                  />
                )
              )}
            </Flex>
          )}
          {/* Custom Navigation Buttons */}
          <Flex
            gap="0.5"
            mt={{ base: "10px", md: "0" }}
            direction="row"
            justifyContent={{ base: "flex-end", md: "flex-end" }}
            width="100%"
            // bg="red"
          >
            <Button
              width={{ base: "25px", md: "30.769px" }}
              height={{ base: "25px", md: "30.769px" }}
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
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
            <Button
              width={{ base: "25px", md: "30.769px" }}
              height={{ base: "25px", md: "30.769px" }}
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
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Slider Container */}
      <Box w="100%" overflow="hidden" p={0}>
        <Flex
          w={`${slides.length * 100}%`}
          transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
          transition="transform 0.5s ease"
        >
          {slides.map((slide, index) => (
            <Box key={index} minW={`${100 / slides.length}%`} p={0}>
              <Flex
                bg="white"
                borderRadius="24px"
                overflow="hidden"
                // boxShadow="lg"
                direction={cardDirection}
                position="relative"
                h={{ base: "auto", md: "753px" }} // Adjust height as needed
              >
                {/* Card Image (Background) */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bgImage={slide.image}
                  bgSize="cover"
                  bgPosition="center"
                  zIndex={1} // Behind the text
                  // bg="red"
                />
                {/* Card Content */}
                <Flex
                  as={motion.div}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  direction="column"
                  justify="space-between"
                  p={8}
                  bg="rgba(255, 255, 255, 0.8)"
                  w={cardContentWidth}
                  h="90%"
                  m={"2%"}
                  borderRadius={"20px"}
                  zIndex={2}
                  backdropFilter="blur(2px)"
                >
                  <Flex gap={1} direction="column">
                    <SubHeadingAnimation>
                      <Box
                        as={motion.div}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        <Text fontSize="24px" color="blue.600" mb={5}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                          >
                            <path
                              d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                              fill="#3F77A5"
                            />
                          </svg>
                        </Text>
                      </Box>
                    </SubHeadingAnimation>

                    <HeadingAnimation>
                      <Heading
                        as={motion.div}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        fontSize="28px"
                        fontWeight="bold"
                        color="black"
                      >
                        {slide.title}
                      </Heading>
                    </HeadingAnimation>
                  </Flex>

                  <SubHeadingAnimation>
                    <Box
                      as={motion.div}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                    >
                      {slide.description.map((text, i) => (
                        <Text
                          key={i}
                          fontSize="14px"
                          color="black"
                          lineHeight="1.6"
                        >
                          {text}
                        </Text>
                      ))}
                    </Box>
                  </SubHeadingAnimation>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default AITechnologies;
