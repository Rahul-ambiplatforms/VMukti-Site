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
  Button,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";

const surveillanceData = [
  {
    title: "Video Management System",
    description:
      "Our centralized video controller monitors, manages, and secures all locations through one unified system. Offers real-time viewing, incident playback and remote access for efficient surveillance.",
    image: "/assets/AISurveillance_1.png",
    path:"solution/video-management-system"
  },
  {
    title: "Enterprise Video Management System",
    description:
      "We deliver enterprise-level video surveillance that is designed for scalability, intelligence and seamless control. Supporting advanced user management and integration with existing security systems.",
    image: "/assets/AISurveillance_2.png",
    path:"solution/enterprise-management-system"
  },
  {
    title: "Integrated Command and Control Centre",
    description:
      "With our Integrated command center solution combine real-time citywide surveillance live video feeds, automated alerts and emergency coordination to enhance urban safety and efficiency.",
    image: "/assets/AISurveillance_3.png",
    path:"solution/integrated-command-control-center"
  },
  {
    title: "Live Streaming",
    description:
      "With VMukti’s live streaming, this isn’t public broadcasting - it’s secure, real-time CCTV feed transmission to your Command and Control Centre. Built for mission-critical use, it ensures ultra-HD clarity, zero-latency, and instant remote response across locations.",
    image: "/assets/AISurveillance_4.png",
    path:"solution/live-streaming-solution"
  },
  {
    title: "Flying Squad Vehicle",
    description:
      "Stay in control of a fast-moving vehicle with GPS tracking, AI surveillance & real-time command center powered by VMukti’s Intelligence, giving you crucial visibility at every second counts. it equips your teams with smart monitoring, remote access and live video access to act instantly.",
    image: "/assets/AISurveillance_5.png",
    path:"solution/flying-squad-vehicle"
  },
];

// --- MAIN COMPONENT ---
const AISurveillance = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = surveillanceData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % surveillanceData.length);
  };
  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + surveillanceData.length) % surveillanceData.length
    );
  };

  return (
    <Box bg="#3F77A5" p="3%" borderRadius={{ base: "0", md: "24px" }}>
      <Flex justify="space-between" align="center" mb={8}>
        <Box color="white">
          <Heading as="h1" fontSize="48px" fontWeight="600" lineHeight="60px">
            {" "}
            Your All-in-One AI Surveillance
            <br />
            Ecosystem
          </Heading>
          <Box
            position="relative"
            width={{ base: "70%", md: "65%" }}
            height="2px"
            bg="rgba(255,255,255,0.3)"
            mt={{ base: "6", md: "25px" }}
            borderRadius="full"
          >
            <Box
              position="absolute"
              height="4px"
              top="50%"
              transform="translateY(-50%)"
              bg="#FFFFFF"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              width={`${100 / surveillanceData.length}%`}
              left={`${(activeIndex / surveillanceData.length) * 100}%`}
              transition="left 0.2s ease-in-out"
            />
          </Box>
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
          color="white"
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
              transition="all 0.2s"
              _hover={{ opacity: 1 }}
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
                <path
                  d="M13 12.5L0 0L-4.37114e-06 25L13 12.5Z"
                  fill="currentColor"
                />
              </Icon>

              <Text fontSize="16px">{item.title}</Text>
            </Flex>
          ))}
        </VStack>

        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          flex="1"
          bg="white"
          borderRadius="24px"
          minH="511px"
        >
          <VStack
            h="100%"
            align="stretch"
            justify="space-between"
            spacing={5}
            p="8"
            flex={{ base: "1", md: "0 0 40%" }}
          >
            <Box>
              <Heading
                as="h3"
                fontSize="24px"
                fontWeight="700"
                color="#000"
                lineHeight="30px"
              >
                {activeFeature.title}
              </Heading>
              <Box w="20px" h="3px" bg="#3F77A5" mt={2} borderRadius="full" />
              <Text
                color="#444444"
                fontSize="14px"
                fontWeight="500"
                lineHeight="18px"
                mt={2}
              >
                {activeFeature.description}
              </Text>
            </Box>
            <Link href={activeFeature.path} style={{ textDecoration: "none" }}>
              <Button
                color="black"
                fontSize="16px"
                fontWeight="400"
                bg="white"
                // href="contact-us"
                // display="flex"
                alignItems="center"
              >
                Know More
                <Box ml="3%">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                  >
                    <path
                      d="M20.9612 13.0607C21.547 12.4749 21.547 11.5251 20.9612 10.9393L11.4153 1.3934C10.8295 0.807612 9.87974 0.807612 9.29395 1.3934C8.70816 1.97919 8.70816 2.92893 9.29395 3.51472L17.7792 12L9.29395 20.4853C8.70816 21.0711 8.70816 22.0208 9.29395 22.6066C9.87974 23.1924 10.8295 23.1924 11.4153 22.6066L20.9612 13.0607ZM0.101562 12V13.5L19.9006 13.5V12V10.5L0.101562 10.5V12Z"
                      fill="black"
                    />
                  </svg>
                </Box>
              </Button>
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
