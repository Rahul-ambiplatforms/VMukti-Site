import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, Button } from "@chakra-ui/icons";

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
  const cardContentWidth = useBreakpointValue({ base: "95%", md: "35%" });

  return (
    <Box
      bg=" #F3F3F3"
      //   bg="darkblue"
      minH="100vh"
      overflowX="hidden"
      borderRadius="24px"
      mb="5%"
    >
      {/* Navigation */}
      <Flex
        ml="2%"
        justify="center"
        p={5}
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
        <Box display="flex" justifyContent="space-between" w="100%" mr="2%">
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
          {/* <IconButton aria-label="Previous slide" icon={<ChevronLeftIcon />} variant="ghost" onClick={handlePrev} /> */}
          {/* <IconButton aria-label="Next slide" icon={<ChevronRightIcon />} variant="ghost" onClick={handleNext} /> */}

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
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#FFFFFF"
                _hover={{ bgColor: "#e0e0e0" }}
                onClick={handlePrev} // Use handlePrev for left navigation
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
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="#FFFFFF"
                _hover={{ bgColor: "#e0e0e0" }}
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
      <Box w="100%" overflow="hidden" p={5}>
        <Flex
          w={`${slides.length * 100}%`}
          transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
          transition="transform 0.5s ease"
        >
          {slides.map((slide, index) => (
            <Box key={index} minW={`${100 / slides.length}%`} p={5}>
              {/* Main Container */}
              <Flex
                top="-3%"
                bg="#FFFFFF"
                borderRadius="24"
                overflow="hidden"
                boxShadow="lg"
                direction={cardDirection}
                position="relative"
                h={{ base: "auto", md: "753px" }}
              >
                {/* Card Content */}
                <Flex direction="column">
                  <Flex direction="column">
                    <Box
                      p={8}
                      bg="#F3F3F3"
                      // bg="darkred"
                      w={cardContentWidth}
                      minW="562px"
                      minH="360px"
                      // minW="39%"
                      // minH="45%"
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
                        {slide.title1}{" "}
                        <span style={{ color: "#DB7B3A" }}>{slide.title2}</span>
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
                    </Box>

                    <Box
                      p={8}
                      bg="#BECEDC"
                      // bg="darkblue"
                      w={cardContentWidth}
                      // minW="39%"
                      // minH="40%"
                      minW="562px"
                      minH="333px"
                      m="2%"
                      borderRadius="24px"
                      zIndex={2}
                      backdropFilter="blur(2px)"
                    >
                      <Box>
                        {slide.description.map((text, i) => (
                          <Text
                            key={i}
                            //   fontWeight="700" for the title
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
                    </Box>
                  </Flex>

                  <Flex>
                    {/* Top right Image (positioned absolutely) */}
                    <Box
                      position="absolute"
                      top="4%"
                      right="4%"
                      bg="darkred"
                      width="630px"
                      height="360px"
                      zIndex={3}
                    >
                      <img
                        src={slide.image}
                        alt="Solution Image"
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
                        position="absolute"
                        bottom="7%"
                        right="4%"
                        width="650px"
                        height="160px"
                        color="white"
                        display="flex"
                        flexDirection="column"
                        borderRadius="12px"
                        //   bg="red"
                        zIndex={3}
                        p={4}
                      >
                        <Text
                          color="#000000"
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="100%"
                          letterSpacing="-1.5%"
                          position="absolute"
                          top="10px"
                          left="10px"
                        >
                          {slide.benefits.title}
                        </Text>
                        <Flex
                          justifyContent="space-between"
                          mt="30px"
                          alignItems="center"
                        >
                          {slide.benefits.data.map((benefit, idx) => (
                            <Box key={idx} textAlign="left">
                              <img
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
      </Box>
    </Box>
  );
};

export default SolutionEMS;


