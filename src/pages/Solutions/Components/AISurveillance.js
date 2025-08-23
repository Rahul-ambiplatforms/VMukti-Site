import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

// --- DATA: Centralized object for easy updates ---
const surveillanceData = [
  {
    title: "Video Management System",
    description:
      "Our VMS provides a scalable and robust platform for monitoring, recording, and managing video feeds from an extensive network of cameras, ensuring comprehensive oversight.",
    image: "/assets/WebPageMockup1.1.png", // <-- Replace with your image path
  },
  {
    title: "Enterprise Video Management System",
    description:
      "Tailored for large-scale deployments, the EVMS integrates seamlessly across multiple sites, offering advanced analytics, centralized control, and high-availability performance for mission-critical operations.",
    image: "/assets/WebPageMockup1.1.png", // <-- Replace with your image path
  },
  {
    title: "Integrated Command and Control Centre",
    description:
      "With our intelligent system, you continuously track machinery performance and behavioral patterns to detect anomalies early, prevent costly breakdowns, and maximize your operational efficiency and uptime.",
    image: "/assets/WebPageMockup1.1.png", // <-- Replace with your image path
  },
  {
    title: "Live Streaming",
    description:
      "Experience ultra-low latency, high-definition live streaming direct from any camera to your command center or mobile device, enabling real-time decision-making and rapid response.",
    image: "/assets/WebPageMockup1.1.png", // <-- Replace with your image path
  },
  {
    title: "Flying Squad Vehicle",
    description:
      "Equip your on-ground teams with mobile surveillance units featuring GPS tracking, AI-powered alerts, and instant video access, extending your security perimeter and enhancing field operations.",
    image: "/assets/WebPageMockup1.1.png", // <-- Replace with your image path
  },
];

// --- MAIN COMPONENT ---
const AISurveillance = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the 3rd item as active
  const activeFeature = surveillanceData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % surveillanceData.length);
  };
  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + surveillanceData.length) % surveillanceData.length
    );
  };

  const mainPadding = useBreakpointValue({ base: 4, md: 8, lg: 16 });
  const headerHeadingSize = useBreakpointValue({
    base: "2xl",
    md: "3xl",
    lg: "4xl",
  });
  const featureHeadingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <Box bg="#3F77A5" p="3%" borderRadius={{ base: "0", md: "24px" }}>
      {/* 1. TOP HEADER SECTION */}
      <Flex justify="space-between" align="center" mb={8}>
        <Box color="white">
          <Heading as="h1" fontSize="48px" fontWeight="600">
            {" "}
            {/* ✅ FIX: Corrected fontWeight */}
            Your All-in-One AI Surveillance
            <br />
            Ecosystem
          </Heading>
          <Box w="80px" h="4px" bg="white" mt={4} borderRadius="full" />
        </Box>
        <HStack spacing={2} position="absolute" right="5%">
          <IconButton
            size="lg"
            icon={
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.978953 7.29289C0.588428 7.68342 0.588429 8.31658 0.978953 8.7071L7.34291 15.0711C7.73344 15.4616 8.3666 15.4616 8.75713 15.0711C9.14765 14.6805 9.14765 14.0474 8.75713 13.6569L3.10027 8L8.75713 2.34314C9.14765 1.95262 9.14765 1.31946 8.75713 0.928932C8.3666 0.538408 7.73344 0.538407 7.34291 0.928932L0.978953 7.29289ZM24.3135 8L24.3135 7L1.68606 7L1.68606 8L1.68606 9L24.3135 9L24.3135 8Z"
                  fill="#3F77A5"
                />
              </svg>
            }
            onClick={handlePrev}
            isRound
            aria-label="Previous Feature"
            bg="#fff"
          />
          <IconButton
            size="lg"
            icon={
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.021 8.70711C24.4116 8.31658 24.4116 7.68342 24.021 7.29289L17.6571 0.928932C17.2666 0.538408 16.6334 0.538407 16.2429 0.928932C15.8523 1.31946 15.8523 1.95262 16.2429 2.34315L21.8997 8L16.2429 13.6569C15.8523 14.0474 15.8523 14.6805 16.2429 15.0711C16.6334 15.4616 17.2666 15.4616 17.6571 15.0711L24.021 8.70711ZM0.686523 8V9L23.3139 9L23.3139 8L23.3139 7L0.686523 7V8Z"
                  fill="#3F77A5"
                />
              </svg>
            }
            onClick={handleNext}
            isRound
            aria-label="Next Feature"
            bg="#fff"
          />
        </HStack>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={10}
        borderRadius="24px"
      >
        {/* --- LEFT CONTAINER (Now on the blue background) --- */}
        <VStack
          align="stretch"
          spacing={5}
          w={{ base: "100%", lg: "30%" }}
          color="white" // ✅ FIX: Set base text color for children
          justifyContent="center"
        >
          {surveillanceData.map((item, index) => (
            <Flex
              key={item.title}
              align="center"
              cursor="pointer"
              onClick={() => setActiveIndex(index)}
              fontWeight={activeIndex === index ? "700" : "400"}
              color={activeIndex === index ? "#FFFFFF" : "#E7E7E7"}
              //   opacity={activeIndex === index ? 1 : 0.7} // Active is full opacity, inactive is faded
              transition="all 0.2s"
              _hover={{ opacity: 1 }} // ✅ FIX: Hover just brings to full opacity
            >
              <Icon
                width="13"
                height="25"
                viewBox="0 0 13 25"
                mr={2}
                // boxSize="12px"
                visibility={activeIndex === index ? "visible" : "hidden"}
                color="white" // This prop still controls the icon's color
              >
                {/* 2. The old <path> is replaced with the new one */}
                <path
                  d="M13 12.5L0 0L-4.37114e-06 25L13 12.5Z"
                  fill="currentColor"
                />
              </Icon>

              <Text fontSize="16px">{item.title}</Text>
            </Flex>
          ))}
        </VStack>

        {/* --- RIGHT CONTAINER (This is now the white card) --- */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          //   gap={10}
          flex="1"
          // ✅ FIX: The background and padding are applied here now
          bg="white"
          borderRadius="24px"
          //   p={useBreakpointValue({ base: 5, md: 10 })}
          minH="511px"
        >
          {/* Sub-container: Heading, description, link */}
          <VStack
            h="100%"
            align="stretch"
            justify="space-between"
            spacing={5}
            p="8"
            // flex="1"
            flex={{ base: "1", md: "0 0 40%" }}
            // bg="red"
          >
            <Box>
              <Heading
                as="h3"
                // size={featureHeadingSize}
                fontSize="24px"
                fontWeight="700"
                color="#000"
              >
                {activeFeature.title}
              </Heading>
              <Box w="20px" h="3px" bg="#3F77A5" mt={1} borderRadius="full" />
              <Text color="#444444" lineHeight="1.2" mt={2}>
                {activeFeature.description}
              </Text>
            </Box>
            <Link
              color="#3F77A5"
              fontWeight="bold"
              href="#"
              display="flex"
              alignItems="center"
            >
              Know More <Icon as={FaArrowRight} ml={2} />
            </Link>
          </VStack>
          <Box
            flex="1"
            justify="center"
            align="center"
            // p={4}
            bg="#E7E7E7"
            h="100%"
            borderRadius="24px"
            // boxShadow="inner"
          >
            <Image
              src={activeFeature.image}
              alt={activeFeature.title}
              objectFit="contain"
              //   maxH="350px"
              h="100%"
              w="100%"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AISurveillance;
