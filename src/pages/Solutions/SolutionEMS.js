import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Heading, useBreakpointValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/icons";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";
import ImagePop from "../../components/Animation/Image/ImagePop";
import ImagePopBox from "../../components/Animation/Image/ImagePopBox";
const SolutionEMS = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideRange, setVisibleSlideRange] = useState({
    start: 0,
    end: 3,
  }); // Track visible slide names

  // Data for each slide
  const slides = [
    {
      title1: "Video Management System",
      title2: "(VMS)",
      description: [
        "AI-powered computer vision analyzes and interprets visual data with unmatched accuracy, recognizing faces, objects, and patterns. It enhances surveillance, automates processes, and optimizes decision-making across industries like security, retail, healthcare, and manufacturing.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "xyz1",
            image: "./assets/holdingtab.png",
          },
          {
            title: "xyz2",
            image: "./assets/holdingtab.png",
          },
          {
            title: "xyz3",
            image: "./assets/holdingtab.png",
          },
          {
            title: "xyz4",
            image: "./assets/holdingtab.png",
          },
        ],
      },
    },
    {
      title1: "Enterprise Management System",
      title2: "(EMS)",
      description: [
        "Object detection algorithms identify and locate multiple objects within images or video streams with remarkable precision. These systems can distinguish between different object classes, track their movements, and analyze their behaviors in real-time.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "abc1", image: "./assets/holdingtab.png" },
          { title: "abc2", image: "./assets/holdingtab.png" },
          { title: "abc3", image: "./assets/holdingtab.png" },
          { title: "abc4", image: "./assets/holdingtab.png" },
        ],
      },
    },
    {
      title1: "Integrated Command & Control Center",
      title2: "(ICCC)",
      description: [
        "Deep learning algorithms utilize multi-layered neural networks to process complex data sets and derive meaningful patterns. These sophisticated models can handle unstructured data types including images, text, and audio with unprecedented accuracy.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
        ],
      },
    },
    {
      title1: "AI-Optimized Cloud Services",
      title2: "",
      description: [
        "Neural networks form the backbone of modern AI systems, mimicking the human brain's structure to process and learn from vast amounts of data. These interconnected layers of artificial neurons excel at pattern recognition and feature extraction.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
        ],
      },
    },
    {
      title1: "AI-Driven Automation",
      title2: "",
      description: [
        "AI-driven automation streamlines repetitive tasks, reducing human error and increasing efficiency in industries like manufacturing, logistics, and customer service.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
        ],
      },
    },
    {
      title1: "GPT in Video Surveillance",
      title2: "",
      description: [
        "GPT models enhance video surveillance by analyzing footage in real-time, detecting anomalies, and providing actionable insights for security teams.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
        ],
      },
    },
    {
      title1: "Edge AI Computing",
      title2: "",
      description: [
        "Edge AI brings computation and data storage closer to the devices, enabling real-time processing and reducing latency for critical applications.",
      ],
      image: "./assets/holdingtab.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
          { title: "xyz", image: "./assets/holdingtab.png" },
        ],
      },
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
      setVisibleSlideRange({ start: currentSlide, end: currentSlide + 3 });
    } else if (currentSlide > visibleSlideRange.end) {
      setVisibleSlideRange({ start: currentSlide - 3, end: currentSlide });
    }
  }, [currentSlide]);

  // Responsive styles
  const cardDirection = useBreakpointValue({ base: "column", md: "row" });
  const cardContentWidth = useBreakpointValue({ base: "100%", md: "100%" });

  return (
    <Flex
      direction="column"
      bg=" #E7E7E7"
      //   bg="darkblue"
      // minH="50vh"
      overflowX="hidden"
      borderRadius="24px"
    // width="100%"
    // mb="5%"
    >
      {/* Navigation */}
      <Flex

        justify="center"
        // p={5}
        gap={{ base: 4, md: 12 }}
        position="relative"
      >
        {/* Left Dots */}
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
        <Box display="flex" justifyContent="space-between" w="100%" pl="1" pb={8}>
          {slides
            .slice(visibleSlideRange.start, visibleSlideRange.end + 1)
            .map((slide, index) => {
              const fullTitle = `${slide.title1} ${slide.title2}`.trim();
              const words = fullTitle.split(" ");
              const firstPart = words.slice(0, -1).join(" ");
              const lastWord = words[words.length - 1];
              return (
                <Box
                  key={index + visibleSlideRange.start}
                  flex="1"
                  textAlign="left"
                >
                  {/* <HeadingAnimation> */}
                  <Text
                    whiteSpace="normal"
                    wordBreak="break-word"
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
                    onClick={() =>
                      updateSlider(index + visibleSlideRange.start)
                    }
                  >
                    {firstPart} <br /> {lastWord}
                  </Text>
                  {/* </HeadingAnimation> */}
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
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Box>
              );
            })}
        </Box>

        {/* Slider Controls */}
        <Flex
          position="absolute"
          right={{ base: 4, md: 0 }}
          top="20%"
          // transform="translateY(-50%)"
          align="spacwe-between"
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

          <Flex
            justifyContent="space-between"
            alignItems="center"
            zIndex={2}
            pointerEvents="auto"
          >
            {/* <Box /> */}

            <Flex justifyContent="space-between" gap={1}>
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
                bgColor="white"
                _hover={{ bgColor: '#e0e0e0' }}
                onClick={handlePrev}// Use handlePrev for left navigation
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
                bgColor="white"
                _hover={{ bgColor: '#e0e0e0' }}
                onClick={handleNext} // Use handleNext for right navigation
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
      </Flex>

      {/* Slider Container */}
      <Flex
        w={`${slides.length * 100}%`}
        transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
        transition="transform 0.5s ease"
      >
        {slides.map((slide, index) => (
          <Box key={index} minW={`${100 / slides.length}%`}>
            {/* Main Container */}
            <Flex
              // top="-3%"
              bg="#FFFFFF"
              borderRadius="24px"
              overflow="hidden"
              // boxShadow="lg"
              direction={cardDirection}
              position="relative"
            >
              {/* Card Content */}
              <Flex p={5} justifyContent="space-between" gap={5} direction={{ base: "column", md: "row" }}>
                {/* left portion of the content card */}
                <Flex direction="column" gap={5} zIndex={1} width={{ base: "100%", md: "40%" }}>
                  {/* First Box with 0.1s delay */}
                  <Flex
                    as={motion.div}
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    p={8}
                    direction="column"
                    bg="#E7E7E7"
                    // width="100%"
                    // mb="-0.5%"
                    borderRadius="24px"
                    zIndex={2}
                    backdropFilter="blur(2px)"
                  >
                    <HeadingAnimation>
                      <Heading
                        fontSize={{ base: "24px", md: "36px" }}
                        fontWeight="500"
                        lineHeight="normal"
                        fontStyle="normal"
                        color="black"
                      >
                        {slide.title1}{" "}
                        <span style={{ color: "#DB7B3A" }}>
                          {slide.title2}
                        </span>
                      </Heading>
                    </HeadingAnimation>
                    <SubHeadingAnimation>
                      <Text fontSize="24px" color="blue.600" mb={3} mt="5%">
                        {/* SVG code remains unchanged */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                          <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
                        </svg>
                      </Text>
                    </SubHeadingAnimation>
                    <SubHeadingAnimation>
                      <Box>
                        {slide.description.map((text, i) => (
                          <Text
                            key={i}
                            fontWeight="500"
                            fontSize="16px"
                            color="black"
                            lineHeight="1.6"
                            mb={2}
                          >
                            {text}
                          </Text>
                        ))}
                      </Box>
                    </SubHeadingAnimation>
                  </Flex>

                  {/* Second Box with 0.3s delay (0.2s after first) */}
                  <Flex
                    as={motion.div}
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    p={8}
                    direction="column"
                    bg="#BECEDC"
                    minH="333px"
                    borderRadius="24px"
                    zIndex={2}
                    backdropFilter="blur(2px)"
                  >
                    <SubHeadingAnimation>
                      <Box>
                        {slide.description.map((text, i) => (
                          <Text
                            key={i}
                            fontWeight="500"
                            fontSize="16px"
                            color="black"
                            lineHeight="1.6"
                            mb={5}
                          >
                            {text}
                          </Text>
                        ))}
                      </Box>
                    </SubHeadingAnimation>
                  </Flex>

                </Flex>
                {/* Right portion (positioned absolutely) */}
                <Flex direction="column" justifyContent={{ base: "center", md: "space-between" }} alignItems={{ base: "center" }} 
                    width="100%"
                    >
                  {/* Top right Image (positioned absolutely) */}
                  <Box
                    as={motion.div}
                    width="100%"        // Allow the box to take up available space
                    maxWidth="630px"
                    height="360px"
                    zIndex={3}
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                      duration: 0.6,
                      ease: [0, 0.3, 0.5, 1],
                      delay: 0.2, // Add delay if needed
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt="Solution"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  {/* New Bottom Right Box for Benefits */}
                  {slide.benefits && (
                    <Box
                      width="full"
                      display="flex"
                      flexDirection="column"
                      borderRadius="12px"
                      gap={4}
                      maxWidth="630px"
                      zIndex={3}
                      p={4}
                    >
                      <Text
                        color="#000000"
                        fontWeight="700"
                        fontSize="16px"
                        lineHeight="100%"
                        letterSpacing="-1.5%"
                      >
                        {slide.benefits.title}
                      </Text>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {slide.benefits.data.map((benefit, idx) => (
                          <Box
                            as={motion.div}
                            key={idx}
                            initial={{ scale: 0.7, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                              duration: 0.9,
                              ease: [0.5, 1],
                              delay: 0.5 * idx // Individual delay based on index
                            }}
                          >
                            <Image
                              src={benefit.image}
                              alt={benefit.title}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                            <Text
                              fontSize="16px"
                              fontWeight="500"
                              color="black"
                              mt={2}
                            >
                              {benefit.title}
                            </Text>
                          </Box>
                        ))}
                      </Flex>
                    </Box>
                  )}
                </Flex>
              </Flex>

            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex >
  );
};

export default SolutionEMS;
