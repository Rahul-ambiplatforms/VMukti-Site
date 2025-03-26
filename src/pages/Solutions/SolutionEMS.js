import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { wrap } from "framer-motion";

const SolutionEMS = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideRange, setVisibleSlideRange] = useState({
    start: 0,
    end: 3,
  }); // Track visible slide names

  // Data for each slide
  const slides = [
    {
      title: "Video Management System (VMS)",
      description: [
        "AI-powered computer vision analyzes and interprets visual data with unmatched accuracy, recognizing faces, objects, and patterns. It enhances surveillance, automates processes, and optimizes decision-making across industries like security, retail, healthcare, and manufacturing.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Enterprise Management System (EMS)",
      description: [
        "Object detection algorithms identify and locate multiple objects within images or video streams with remarkable precision. These systems can distinguish between different object classes, track their movements, and analyze their behaviors in real-time.",
        "Modern object detection frameworks like YOLO, SSD, and R-CNN enable applications ranging from autonomous vehicles and robotics to retail analytics and medical imaging. These technologies continue to evolve with improved accuracy and reduced computational requirements.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "Integrated Command & Control Center (ICCC)",
      description: [
        "Deep learning algorithms utilize multi-layered neural networks to process complex data sets and derive meaningful patterns. These sophisticated models can handle unstructured data types including images, text, and audio with unprecedented accuracy.",
        "Through techniques like transfer learning and reinforcement learning, deep learning systems continue to improve their capabilities, enabling breakthroughs in natural language processing, image recognition, and predictive analytics across various domains.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "AI-Optimized Cloud Services",
      description: [
        "Neural networks form the backbone of modern AI systems, mimicking the human brain's structure to process and learn from vast amounts of data. These interconnected layers of artificial neurons excel at pattern recognition and feature extraction.",
        "When applied to predictive analytics, neural networks can forecast trends, identify anomalies, and make data-driven recommendations. This powerful combination enables businesses to anticipate market changes, optimize operations, and deliver personalized experiences.",
      ],
      image: "./assets/holdingtab.png",
    },
    {
      title: "AI-Driven Automation",
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
    <Box
      bg="#f9f9f9"
      minH="100vh"
      overflowX="hidden"
      borderRadius="24px"
      mb="5%"
    >
      {/* Navigation */}
      <Flex
        justify="center"
        p={5}
        gap={{ base: 4, md: 12 }}
        position="relative"
      >
        {/* Left Dots (Indicate more slides on the left) */}
        {visibleSlideRange.start > 0 && (
          <Flex gap={1} align="center">
            {[...Array(visibleSlideRange.start)].map((_, index) => (
              <Box
                key={index}
                w="8px"
                h="8px"
                borderRadius="full"
                bg="#3F77A5;"
              />
            ))}
          </Flex>
        )}

        {/* Visible Slide Names */}
        {slides
          .slice(visibleSlideRange.start, visibleSlideRange.end + 1)
          .map((slide, index) => (
            <Box key={index + visibleSlideRange.start}>
              <Text
                whiteSpace="nowrap"
                py={2}
                cursor="pointer"
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
              >
                {slide.title}
              </Text>
              {/* Conditionally render a divider */}
              {currentSlide === index + visibleSlideRange.start && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="2"
                  viewBox="0 0 17 2"
                  fill="none"
                >
                  <path
                    d="M16 1L1 0.999999"
                    stroke="#3F77A5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </Box>
          ))}

        {/* Slider Controls */}
        <Flex
          position="absolute"
          right={{ base: 4, md: 10 }}
          top="50%"
          transform="translateY(-50%)"
          align="center"
          gap={2}
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
                    bg="#3F77A5;"
                  />
                )
              )}
            </Flex>
          )}
          <IconButton
            aria-label="Previous slide"
            icon={<ChevronLeftIcon />}
            variant="ghost"
            onClick={handlePrev}
          />
          <IconButton
            aria-label="Next slide"
            icon={<ChevronRightIcon />}
            variant="ghost"
            onClick={handleNext}
          />
        </Flex>
      </Flex>

      {/* Slider Container */}
      <Box w="100%" overflow="hidden" p={5}>
        <Flex
          w={`${slides.length * 100}%`}
          transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
          transition="transform 0.5s ease"
        >
          {slides.map((slide, index) => (
            <Box key={index} minW={`${100 / slides.length}%`} p={5}>
              {/* The main container */}
              <Flex
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                direction={cardDirection}
                position="relative"
                h={{ base: "auto", md: "753px" }} // Adjust height as needed
              >
                {/* Card Image (Background) */}
                {/* <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bgImage={slide.image}
                  bgSize="cover"
                  bgPosition="center"
                  zIndex={1} // Behind the text
                /> */}

                {/* Card Content */}

                {/* ------------------------------------------------ */}

                <Flex direction="column" position="relative">
                  <Box
                    position="absolute"
                    top="4%"
                    right="4%"
                    width="630px"
                    height="360px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={3} // Ensures it appears above other elements
                  >
                    <img
                      src={slide.image} // Dynamically set image
                      alt="Solution Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        // borderRadius: "12px",
                      }}
                    />
                  </Box>

                  <Box
                    p={8}
                    bg="#F3F3F3"
                    w={cardContentWidth}
                    // minW="562px" // Ensures minimum width
                    // minH="360px" // Ensures minimum height
                    minW="39%"
                    minH="45%"
                    m="2%"
                    mb="-0.5%"
                    borderRadius="24px"
                    zIndex={2}
                    backdropFilter="blur(2px)"
                  >
                    <Heading
                      fontSize="36px"
                      fontWeight="500"
                      mb={3}
                      color="black"
                    >
                      {slide.title}
                    </Heading>

                    <Text fontSize="24px" color="blue.600" mb={3} mt="5%">
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

                    <Box>
                      {slide.description.map((text, i) => (
                        <Text
                          key={i}
                          fontSize="16px"
                          color="black"
                          lineHeight="1.6"
                          mb={2}
                        >
                          {text}
                        </Text>
                      ))}
                    </Box>
                  </Box>

                  {/* ------------------------------------------------- */}

                  <Box
                    p={8}
                    bg="#BECEDC"
                    w={cardContentWidth}
                    // minW="562px" // Ensures minimum width
                    // minH="360px" // Ensures minimum height
                    minW="39%"
                    minH="40%"
                    m="2%"
                    borderRadius="24px"
                    zIndex={2}
                    backdropFilter="blur(2px)"
                  >
                    <Box>
                      {slide.description.map((text, i) => (
                        <Text
                          key={i}
                          fontSize="16px"
                          color="black"
                          lineHeight="1.6"
                          mb={5}
                        >
                          {text}
                        </Text>
                      ))}
                    </Box>
                  </Box>

                  {/* New Bottom Right Box */}
                  <Box
                    position="absolute"
                    bottom="7%"
                    right="4%"
                    width="400px" // Adjust width as needed
                    height="200px" // Adjust height as needed
                    bg="blue.500" // Example background color
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="12px"
                    zIndex={3}
                  >
                    <Text fontSize="20px">New Bottom Right Box</Text>
                  </Box>

                  {/* ------------------------------------------------- */}
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default SolutionEMS;
