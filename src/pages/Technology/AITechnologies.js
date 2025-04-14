import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

const AITechnologies = () => {
  // Data for each slide
  const slides = [
    {
      title: "Computer\nVision",
      description: [
        "AI-powered computer vision analyzes and interprets visual data with unmatched accuracy, recognizing faces, objects, and patterns. It enhances surveillance, automates processes, and optimizes decision-making across industries like security, retail, healthcare, and manufacturing.\n\n Beyond simple recognition, AI-driven computer vision tracks movement, monitors crowd behavior, and predicts potential threats. Integrated with edge AI and cloud computing, it enables real-time responses, improving security and efficiency.",
        // "Beyond simple recognition, AI-driven computer vision tracks movement, monitors crowd behavior, and predicts potential threats. Integrated with edge AI and cloud computing, it enables real-time responses, improving security and efficiency.",
      ],
      image: "./assets/comvi.png",
    },
    {
      title: "Object\nDetection",
      description: [
        "AI-driven object detection identifies and classifies objects, people, and vehicles with high accuracy. It enables automated tracking, suspicious activity detection, and seamless security system integration.\n\nIn surveillance, real-time object detection triggers instant alerts for unauthorized access or unusual movement. Combined with predictive analytics, it enhances risk assessment and operational intelligence.",
        // "In surveillance, real-time object detection triggers instant alerts for unauthorized access or unusual movement. Combined with predictive analytics, it enhances risk assessment and operational intelligence.",
      ],
      image: "./assets/objd.png",
    },
    {
      title: "Deep Learning Algorithms",
      description: [
        "Deep learning enables AI to analyse complex data, detect patterns, and make precise decisions. Neural networks process vast information efficiently, continuously learning and improving.\n\nIn video analytics, deep learning enhances facial recognition, behaviour analysis, and anomaly detection. These self-learning models adapt to threats, improving accuracy and reducing false alarms.",
        // "In video analytics, deep learning enhances facial recognition, behaviour analysis, and anomaly detection. These self-learning models adapt to threats, improving accuracy and reducing false alarms.",
      ],
      image: "./assets/dla.png",
    },
    {
      title: "Neural Networks & Predictive Analytics",
      description: [
        "Advanced neural networks process video data with precision, identifying threats and recognizing patterns. Unlike traditional surveillance, AI actively analyses movements, behaviours, and anomalies in real time.\n\nPredictive analytics anticipates security threats by analysing historical patterns and real-time data. This proactive approach minimizes risks, optimizes response times, and enhances situational awareness.",
        // "Predictive analytics anticipates security threats by analysing historical patterns and real-time data. This proactive approach minimizes risks, optimizes response times, and enhances situational awareness.",
      ],
      image: "./assets/npd.png",
    },
    {
      title: "AI-Driven\nAutomation",
      description: [
        "AI-driven automation streamlines processes, reduces human intervention, and improves efficiency. Machine learning algorithms detect patterns, make intelligent decisions, and automate workflows.\n\nIn surveillance, AI minimizes false alarms and optimizes resource allocation. Automated monitoring of live feeds and video analysis ensures faster decision-making and cost savings.",
        // "In surveillance, AI minimizes false alarms and optimizes resource allocation. Automated monitoring of live feeds and video analysis ensures faster decision-making and cost savings.",
      ],
      image: "./assets/aidr.png",
    },
    {
      title: "GPT in Video Surveillance",
      description: [
        "GPT-powered surveillance enhances security by analyzing footage, identifying patterns, and generating real-time alerts. Unlike rule-based systems, it adapts to new threats and improves response times.\n\nBy automating report generation and anomaly detection, GPT reduces human workload. It provides precise monitoring, summarizes long video recordings, and enhances security accuracy.",
        // "In surveillance, AI minimizes false alarms and optimizes resource allocation. Automated monitoring of live feeds and video analysis ensures faster decision-making and cost savings.",
      ],
      image: "./assets/gptr.png",
    },
  ];

  const visibleSlidesValue = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 4,
  });

  const showCircles = useBreakpointValue({ base: false, md: true });
  const [visibleSlides, setVisibleSlides] = useState(1); // Default to 1
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideRange, setVisibleSlideRange] = useState({
    start: 0,
    end: Math.min(1 - 1, slides.length - 1), // Default range for 1 visible slide
  });

  useEffect(() => {
    if (visibleSlidesValue) {
      setVisibleSlides(visibleSlidesValue);

      // Adjust currentSlide to ensure it fits within the new visible range
      const adjustedCurrentSlide = Math.min(
        currentSlide,
        slides.length - visibleSlidesValue
      );

      setCurrentSlide(adjustedCurrentSlide);

      setVisibleSlideRange({
        start: adjustedCurrentSlide,
        end: Math.min(
          adjustedCurrentSlide + visibleSlidesValue - 1,
          slides.length - 1
        ),
      });
    }
  }, [visibleSlidesValue, slides.length]);

  // Add state for touch positions
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Update the slider
  const updateSlider = (index) => {
    setCurrentSlide(index);
  };

  // Handle previous and next slide
  const handlePrev = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      return newSlide < 0 ? slides.length - 1 : newSlide; // Wrap around to the last slide
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      return newSlide >= slides.length ? 0 : newSlide; // Wrap around to the first slide
    });
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      handlePrev(); // Swipe right
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!visibleSlides || !slides.length) return;

      let newStart = visibleSlideRange.start;
      let newEnd = visibleSlideRange.end;

      // Adjust range only when the active slide reaches the last visible position
      if (currentSlide > visibleSlideRange.end) {
        newStart = currentSlide - (visibleSlides - 1);
        newEnd = currentSlide;
      } else if (currentSlide < visibleSlideRange.start) {
        newStart = currentSlide;
        newEnd = currentSlide + (visibleSlides - 1);
      }

      setVisibleSlideRange({
        start: Math.max(newStart, 0),
        end: Math.min(newEnd, slides.length - 1),
      });
    };

    updateVisibleSlides();
  }, [currentSlide, visibleSlides, slides.length]);

  // Responsive styles
  const cardDirection = useBreakpointValue({ base: "column", md: "row" });
  const cardContentWidth = useBreakpointValue({ base: "100%", md: "35%" });
  const svgSize = useBreakpointValue({ base: "25px", md: "33px" });
  return (
    <Box bg="white" overflowX="visible" borderRadius="24px">
      {/* Navigation */}
      <Flex
        justify="space-between"
        align="center"
        p={{ base: 4, md: 8 }}
        position="relative"
        width="100%"
        minH="80px"
      // bg="red"
      >
        {/* Center Titles - Modified for responsiveness only */}
        <Flex
          flex="1"
          mx={{ base: 0, md: 12 }}
          justify={{ base: "left", md: "space-between" }}
          align="center"
          gap={{ base: 0, md: 3 }}
          height="72px"
          wrap="nowrap"
          minWidth="0"
          overflowX={{ base: "hidden", md: "auto" }} // Hide overflow on mobile
          // overflowX="auto"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          {slides
            .slice(visibleSlideRange.start, visibleSlideRange.end + 1)
            .map((slide, index) => (
              <Box
                key={index + visibleSlideRange.start}
                flex={{ base: "0 0 100%", md: "1 0 auto" }} // Mobile: Only one visible
                minW={{ base: "100%", md: "160px" }} // Full width on mobile
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
                  textAlign={"left"}
                  whiteSpace="pre-line"
                >
                  {slide.title}
                </Text>
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

        {/* Right Controls - Completely unchanged */}
        <Flex
          width={{ base: "80px", md: "120px" }}
          justify="flex-end"
          align="right"
          gap={{ base: "0", md: "2" }}
          flexShrink={0}
          ml={{ base: "0", md: "5%" }}
        // bg="red"
        >
          {visibleSlideRange.end < slides.length - 1 && showCircles && (
            <Flex gap={1} align="center">
              {[...Array(slides.length - visibleSlideRange.end - 1)].map(
                (_, index) => (
                  <Box
                    key={index}
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg="#3F77A5"
                  />
                )
              )}
            </Flex>
          )}
          <Flex
            gap="0.5"
            mt={{ base: "10px", md: "0" }}
            direction="row"
            justifyContent={{ base: "flex-end", md: "flex-end" }}
            width="100%"
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
            // bg="blue"
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
      <Box
        w="100%"
        overflow="hidden"
        p={0}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
                  position={{ base: "relative", md: "absolute" }} // Relative for mobile
                  top={{ base: "0", md: "0" }}
                  left={{ base: "0", md: "0" }}
                  w="100%"
                  h={{ base: "200px", md: "100%" }} // Adjust height for mobile
                  // bgImage={slide.image}
                  bgImage={`url(${process.env.PUBLIC_URL}${slide.image})`}
                  bgSize="cover"
                  bgPosition="center"
                  zIndex={1} // Behind the text
                />
                {/* Card Content */}
                <Flex
                  as={motion.div}
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  direction="column"
                  justify="space-between"
                  p={{ base: "0", md: "8" }}
                  bg="rgba(255, 255, 255, 0.8)"
                  w={cardContentWidth}
                  h="90%"
                  m={{ base: "0", md: "2%" }} // Adjust margin for mobile
                  borderRadius={"20px"}
                  zIndex={2}
                  backdropFilter="blur(2px)"
                // bg="green"
                >
                  <Flex
                    // gap={1}
                    direction="column"
                    // mt={{ base: "10px", md: "0" }} // Add margin-top for mobile
                    bg={{ base: "#f0f4ff", md: "transparent" }} // Background for heading in mobile
                    // p={{ base: "10px", md: "0" }} // Padding for mobile
                    borderRadius={{ base: "20px", md: "0" }} // Rounded corners for mobile
                    mt={{ base: "-10%", md: "0" }}
                  // bg="red"
                  >
                    {/* <SubHeadingAnimation> */}
                    {/* <Box
                        as={motion.div}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      > */}
                    <Text
                      fontSize="24px"
                      color="blue.600"
                      m={5}
                      width={{ base: "20px", md: "30" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={svgSize}
                        height={svgSize}
                        viewBox="0 0 33 33"
                        fill="none"
                      >
                        <path
                          d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    </Text>
                    {/* </Box> */}
                    {/* </SubHeadingAnimation> */}

                    {/* <HeadingAnimation> */}
                    <Heading
                      ml={5}
                      // as={motion.div}
                      // initial={{ y: 20, opacity: 0 }}
                      // whileInView={{ y: 0, opacity: 1 }}
                      // viewport={{ once: false }}
                      // transition={{
                      //   duration: 0.5,
                      //   ease: "easeOut",
                      //   delay: 0.3,
                      // }}
                      fontSize={{ base: "20px", md: "36px" }}
                      fontWeight="bold"
                      width={{ base: "217px", md: "auto" }}
                      color="black"
                    >
                      {slide.title}
                    </Heading>
                    {/* </HeadingAnimation> */}
                  </Flex>

                  {/* <SubHeadingAnimation> */}
                  <Flex>  {/*//If it affects remove this and comment out SubHeadingAnimation. */}
                    <Box
                      // as={motion.div}
                      // initial={{ y: 10, opacity: 0 }}
                      // whileInView={{ y: 0, opacity: 1 }}
                      // viewport={{ once: false }}
                      mb={{ base: "10%", md: "auto" }}
                      width={{ base: "312.731px", md: "auto" }}
                      pl={{ base: "5%", md: "0" }}
                      pt={{ base: "5%", md: "0" }}
                      // transition={{
                      //   duration: 0.5,
                      //   ease: "easeOut",
                      //   delay: 0.4,
                      // }}
                      bg={{ base: "white", md: "transparent" }} // Background for description in mobile
                      // p={{ base: "10px", md: "0" }} // Padding for mobile
                      borderRadius={{ base: "10px", md: "0" }} // Rounded corners for mobile
                    >
                      {slide.description.map((text, i) => (
                        <Text
                          key={i}
                          fontSize="14px"
                          fontWeight="500"
                          color="black"
                          lineHeight="1.6"
                          whiteSpace="pre-line"
                        >
                          {text}
                        </Text>
                      ))}
                    </Box>
                  </Flex>
                  {/* </SubHeadingAnimation> */}
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
