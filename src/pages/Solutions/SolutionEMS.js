import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/icons";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";
import ImagePop from "../../components/Animation/Image/ImagePop";
import ImagePopBox from "../../components/Animation/Image/ImagePopBox";
const SolutionEMS = () => {
  // Data for each slide
  const slides = [
    {
      title1: "Video Management System",
      title2: "(VMS)",
      description: [
        "AI-Powered VMS: The Core of Modern SurveillanceAn AI-enabled Video Management System (VMS) is the core of modern surveillance, offering a centralized platform for video monitoring, real-time threat detection, and intelligent incident management. It enables organizations to efficiently oversee multiple cameras across locations, using AI-driven analytics to boost situational awareness and security.",
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>24/7 AI-Powered Surveillance</li>
            <li>Multi-Camera Integration</li>
            <li>AI-Driven Video Analytics</li>
            <li>Incident Detection & Alerts</li>
            <li>Remote Access</li>
            <li>Smart Search & Retrieval</li>
            <li>Seamless Third-Party Integration</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_1.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Unified Security Control",
            image: "./assets/solution_1_1.svg",
          },
          {
            title: "Proactive Threat Management",
            image: "./assets/solution_1_2.svg",
          },
          {
            title: "Scalability & Cost Efficiency",
            image: "./assets/solution_1_3.svg",
          },
        ],
      },
    },
    {
      title1: "Enterprise Management System",
      title2: "(EMS)",
      description: [
        "EMS is a custom-built Video Management System (VMS) designed for large-scale enterprises, banks, manufacturing plants, and government institutions. Unlike generic VMS platforms, VMukti EMS provides complete ownership and control through a one-time deployment fee, allowing organizations to independently manage their security infrastructure.",
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Tailored Deployment</li>
            <li>Advanced Admin Control</li>
            <li>Comprehensive Camera & User Management</li>
            <li>Flexible Storage & Recording Options</li>
            <li>AI-Powered Surveillance</li>
            <li>High-Security & Compliance</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_2.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Operational Efficiency",
            image: "./assets/solution_2_1.svg",
          },
          {
            title: "Cost-Effective Ownership",
            image: "./assets/solution_2_2.svg",
          },
          {
            title: " Enhanced Security & Compliance",
            image: "./assets/solution_2_3.svg",
          },
          {
            title: " Scalability & Adaptability",
            image: "./assets/solution_2_4.svg",
          },
        ],
      },
    },
    {
      title1: "Integrated Command & Control Center",
      title2: "(ICCC)",
      description: [
        "The ICCC is a centralized intelligence hub that integrates live video feeds, IoT sensors, and AI-powered analytics across security systems. Designed for smart city management, critical infrastructure monitoring, and emergency response, it ensures real-time situational awareness and security coordination.",
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Centralized Surveillance & Data Fusion</li>
            <li>AI-Powered Insights & Heatmaps</li>
            <li>Automated Threat Alerts & Response</li>
            <li>Multi-Agency Collaboration</li>
            <li>Scalable & Flexible Deployment</li>
            <li>24/7 Monitoring & Health Diagnostics</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_3.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Faster Decision-Making",
            image: "./assets/solution_3_1.svg",
          },
          {
            title: "Reduced Operational Costs",
            image: "./assets/solution_3_2.svg",
          },
          {
            title: "Increased Public & Asset Safety",
            image: "./assets/solution_3_3.svg",
          },
          {
            title: "Future-Proof Infrastructure",
            image: "./assets/solution_3_4.svg",
          },
        ],
      },
    },
    {
      title1: "AI-Optimized Cloud",
      title2: "Services",
      description: [
        <>
          <span style={{ fontWeight: "bold", marginBottom: "2%" }}>
            Patented AI-Driven Storage for Surveillance
          </span>
          {"\n\n\n"}
          Traditional storage can’t handle high-resolution surveillance
          efficiently. Our AI-powered cloud storage optimizes bandwidth, reduces
          costs, and ensures seamless video access.
        </>,
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>AI-Driven Compression</li>
            <li>Unlimited Scalability</li>
            <li>Smart Search & Indexing</li>
            <li>Real-Time Video Access</li>
            <li>Industry-Specific AI Models</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_4.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Faster Decision-Making",
            image: "./assets/solution_4_1.svg",
          },
          {
            title: "Reduced Operational Costs",
            image: "./assets/solution_4_2.svg",
          },
          {
            title: "Increased Public & Asset Safety",
            image: "./assets/solution_4_3.svg",
          },
          {
            title: "Future-Proof Infrastructure",
            image: "./assets/solution_4_4.svg",
          },
        ],
      },
    },
    {
      title1: "Generative AI in Video",
      title2: "Surveillance",
      description: [
        <>
          <div style={{ fontWeight: "bold", marginBottom: "2%" }}>
            India’s First AI-Powered Surveillance System
          </div>
          <br />
          Transforming security with advanced AI-driven analytics, natural
          language search, and real-time automation.
        </>,
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Precision Object Tracking</li>
            <li>GPT-Powered Interaction</li>
            <li>Instant Video Retrieval</li>
            <li>Real-Time Summaries</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_5.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Faster Decision-Making",
            image: "./assets/solution_5_1.svg",
          },
          {
            title: "Reduced Operational Costs",
            image: "./assets/solution_5_2.svg",
          },
          {
            title: "Increased Public & Asset Safety",
            image: "./assets/solution_5_3.svg",
          },
          {
            title: "Future-Proof Infrastructure",
            image: "./assets/solution_4_4.svg",
          }, //--------------
        ],
      },
    },
    {
      title1: "AI-Powered Surveillance",
      title2: "Cameras",
      description: [
        <>
          <div style={{ fontWeight: "bold", marginBottom: "2%" }}>
            Redefining Security with Intelligent Vision
          </div>
          <br />
          Security is no longer just about recording—it’s about proactive
          intelligence. Our AI-powered surveillance cameras provide real-time
          alerts, data-driven insights, and advanced analytics for smarter
          threat detection.
        </>,
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Ultra-HD & Night Vision</li>
            <li>AI-Driven Threat Detection</li>
            <li>Edge AI Processing</li>
            <li>Facial Recognition & Biometric Access</li>
            <li>Smart Motion Tracking</li>
            <li>Remote Access</li>
            <li>Weatherproof Build</li>
            <li>Seamless VMS Integration</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_6.png",
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "Proactive Security", image: "./assets/solution_7_1.svg" }, //I have to add this-----
          { title: "Cost Optimization", image: "./assets/solution_7_2.svg" }, //I have to add this-----
          {
            title: "Data-Driven Insights",
            image: "./assets/sol_solution_7_3.svg",
          }, //I have to add this-----
        ],
      },
    },
    {
      title1: "Flying Squad Vehicle",
      title2: "(FSV)",
      description: [
        <>
          <div style={{ fontWeight: "bold", marginBottom: "2%" }}>
            Mobile Surveillance for Rapid Deployment
          </div>
          <br />
          Deploy AI-powered surveillance anywhere with real-time video
          streaming, GPS tracking, and automated reporting.
        </>,
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Live Area Monitoring</li>
            <li>GPS Tracking & Route Logging</li>
            <li>AI Anomaly Detection</li>
            <li>Two-Way Communication</li>
            <li>Night Vision & 360° Coverage</li>
          </ul>
        </>,
      ],
      
      benefits: {
        title: "Business Benefits",
        data: [
          { title: "Rapid Deployment", image: "./assets/solution_8_1.svg" },
          {
            title: "Real-Time Intelligence",
            image: "./assets/solution_8_2.svg",
          },
          {
            title: "Cost-Efficient Security",
            image: "./assets/solution_8_3.svg",
          },
        ],
      },
    },
    {
      title1: "Live Webcasting &",
      title2: "Streaming",
      description: [
        <>
          <div style={{ fontWeight: "bold", marginBottom: "2%" }}>
            Secure & High-Quality Video Broadcasting
          </div>
          <br />
          Seamless, secure, and scalable live streaming for corporate events,
          government briefings, and educational sessions.
        </>,
      ],
      description2: [
        <>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Key Features
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Low Latency Streaming</li>
            <li>Cloud-Scalable Infrastructure</li>
            <li>Advanced Security</li>
            <li>Multi-Platform Streaming</li>
            <li>Interactive Features</li>
          </ul>
        </>,
      ],
      image: "./assets/solution_8.png",
      benefits: {
        title: "Business Benefits",
        data: [
          {
            title: "Uninterrupted Streaming",
            image: "./assets/sol_solution_9_1.svg",
          },
          { title: "Global Scalability", image: "./assets/solution_9_2.svg" },
          {
            title: "Enhanced Security",
            image: "./assets/sol_solution_9_3.svg",
          },
        ],
      },
    },
  ];
  const visibleSlides = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 4,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideRange, setVisibleSlideRange] = useState({
    start: 0,
    end: 0,
  });

  // Initialize visible range
  useEffect(() => {
    const initialEnd = Math.min((visibleSlides || 1) - 1, slides.length - 1);
    setVisibleSlideRange({ start: 0, end: initialEnd });
  }, [visibleSlides, slides.length]);

  // Update visible range when currentSlide changes
  useEffect(() => {
    if (!visibleSlides || !slides.length) return;

    const N = visibleSlides;
    let newStart = currentSlide; // Changed from visibleSlideRange.start
    let newEnd = Math.min(currentSlide + N - 1, slides.length - 1);

    // Adjust if we don't have enough slides at the end
    if (newEnd - newStart + 1 < N) {
      newStart = Math.max(newEnd - N + 1, 0);
      newEnd = Math.min(newStart + N - 1, slides.length - 1);
    }

    setVisibleSlideRange({ start: newStart, end: newEnd });
  }, [currentSlide, visibleSlides, slides.length]);

  // Navigation handlers with loop
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Update slider position
  const updateSlider = (index) => {
    setCurrentSlide(index);
  };

  // Responsive styles
  const cardDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      direction="column"
      bg=" #E7E7E7"
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
        {/* Visible Slide Names */}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          pl="1"
          pb={8}
        >
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
                  flex={{ base: "0 0 100%", md: "1" }} // Single box in mobile, multiple in desktop
                  textAlign="left"
                // bg="orange"
                >
                  {/* <HeadingAnimation> */}
                  <Box w={{ base: "60%", md: "100%" }}>
                    <Text
                      whiteSpace="normal"
                      wordBreak="break-word"
                      overflowWrap="break-word"
                      hyphens="auto"
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
                  </Box>
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
          right={{ base: 1, md: 0 }}
          top="20%"
          // transform="translateY(-50%)"
          align="space-between"
          gap={2}
        // bg="green"
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
            {/* navigation buttons */}
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
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                bgColor="white"
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
      <Flex
        w={`${slides.length * 100}%`}
        transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
        transition="transform 0.5s ease"
        height="auto" // Change from fit-content to auto
        alignItems="stretch" // Ensure children stretch to fill the height
      >
        {slides.map((slide, index) => (
          <Box key={index} minW={`${100 / slides.length}%`} height="auto"> {/* Change from fit-content to auto */}
            {/* Main Container */}
            <Flex
              bg="#FFFFFF"
              borderRadius="24px"
              overflow="hidden"
              direction={cardDirection}
              position="relative"
              height="100%" // Ensure it fills the parent's height
            >
              {/* Card Content */}
              <Flex
                p={5}
                justifyContent="space-between"
                gap={5}
                height="100%"
                direction={{ base: "column", md: "row" }}
              >
                {/* left portion of the content card */}
                <Flex
                  order={{ base: "2", md: "1" }}
                  direction="column"
                  gap={5}
                  // height="100%"
                  zIndex={1}
                  width={{ base: "100%", md: "40%" }}
                >
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
                    <Heading
                      fontSize={{ base: "24px", md: "36px" }}
                      fontWeight="500"
                      lineHeight="normal"
                      fontStyle="normal"
                      color="black"
                    >
                      {slide.title1}{" "}
                      <span style={{ color: "#DB7B3A" }}>{slide.title2}</span>
                    </Heading>

                    <Text fontSize="24px" color="blue.600" mb={3} mt="5%">
                      {/* SVG code remains unchanged */}
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
                    height='100%'
                    bg="#BECEDC"
                    borderRadius="24px"
                    zIndex={2}
                    backdropFilter="blur(2px)"
                  >
                    <Box>
                      {slide.description2.map((text, i) => (
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
                  </Flex>
                </Flex>
                {/* Right portion (positioned absolutely) */}
                <Flex
                  order={{ base: "1", md: "2" }}
                  direction="column"
                  justifyContent={{ base: "center", md: "space-between" }}
                  alignItems={{ base: "center" }}
                  width="100%"
                >
                  {/* Top right Image (positioned absolutely) */}
                  <Box
                    as={motion.div}
                    width="90%" // Allow the box to take up available space
                    // maxWidth="630px"
                    // height="360px"
                    height="90%" // Height set to 90%
                    maxHeight="50%"
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
                    {slide.image ? (
                      <Image
                        src={slide.image}
                        alt={slide.title1}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : null}
                  </Box>
                  {/* New Bottom Right Box for Benefits */}
                  {slide.benefits && (
                    <Box
                      width="full"
                      // justifyContent="space-between"
                      // bg="red"
                      flexDirection="column"
                      borderRadius="12px"
                      gap={4}
                      display={{ base: "none", md: "flex" }}
                      maxWidth="630px"
                      zIndex={3}
                      p={6}
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
                        // bg="green"
                        gap={4}
                      >
                        {slide.benefits.data.map((benefit, idx) => (
                          <Box
                            as={motion.div}
                            key={idx}
                            // bg="red"
                            // width="100%"
                            initial={{ scale: 0.7, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                              duration: 0.9,
                              ease: [0.5, 1],
                              delay: 0.5 * idx, // Individual delay based on index
                            }}
                          >
                            <Image
                              src={benefit.image}
                              alt={benefit.title}
                              style={{
                                width: "35px",
                                height: "35px",
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
                              {benefit.title.split(" ").slice(0, -1).join(" ")}
                            </Text>
                            <Text
                              fontSize="16px"
                              fontWeight="500"
                              color="black"
                              mt={1}
                            >
                              {benefit.title.split(" ").slice(-1)}
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
    </Flex>
  );
};

export default SolutionEMS;
