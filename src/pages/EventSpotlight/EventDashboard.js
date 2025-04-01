import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CulturalSection from "../../components/CulturalSection";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";

const MotionBox = motion(Box);

const DashboardItem = ({ item }) => (
  <Box
    px={6}
    width={{ base: "100%", md: "50%" }}
    minHeight="300px"
    borderColor="gray.100"
  >
    <Image
      src={item.image}
      alt={item.title}
      borderRadius="24px"
      mb={4}
      height={{ base: "200px", md: "305px" }}
      objectFit="cover"
      width="100%"
    />
    <Box pl={{ base: 0, md: 4 }} textAlign={{ base: "center", md: "left" }}>
      <Text
        fontSize="16px"
        fontWeight="600"
        color="black"
        mb={1}
        letterSpacing="-0.24px"
      >
        {item.title}
      </Text>
      <Box
        width="5%"
        height="2px"
        bg="blue.600"
        mx={{ base: "auto", md: 0 }}
        mb={2}
      />
      <Text
        fontSize="16px"
        fontWeight="500"
        color="black"
        mb={1}
        letterSpacing="-0.24px"
      >
        {item.description}
      </Text>
    </Box>
  </Box>
);

const NavigationButton = ({ onClick, direction }) => (
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
    onClick={onClick}
  >
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          direction === "left"
            ? "M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
            : "M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
        }
        fill="#3F77A5"
      />
    </svg>
  </Button>
);

const EventSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const dashboardItems = [
    {
      image: "./assets/EventSpot.png",
      title: "AI Surveillance",
      description: "Advanced monitoring solutions",
    },
    {
      image: "./assets/EventSpot.png",
      title: "Smart Automation",
      description: "Efficiency-driven systems",
    },
    {
      image: "./assets/EventSpot.png",
      title: "Security Systems",
      description: "Next-gen protection",
    },
    {
      image: "./assets/EventSpot.png",
      title: "Connected World",
      description: "Seamless integration",
    },
  ];

  const visibleItems = [
    dashboardItems[currentIndex % dashboardItems.length],
    dashboardItems[(currentIndex + 1) % dashboardItems.length],
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % dashboardItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + dashboardItems.length) % dashboardItems.length
    );
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? "50%" : "-50%", opacity: 1 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: (direction) => ({
      x: direction < 0 ? "50%" : "-50%",
      opacity: 1,
      transition: { duration: 0.5 },
    }),
  };
  const gridItems = [
    { bgColor: "transparent" },
    {
      title: "2025",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "white",
    },
    { bgColor: "transparent" },
    { title: "Attended Events", bgColor: "transparent" },
    {
      title: "2024",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "white",
    },
    { bgColor: "transparent" },
    {
      title: "2019",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "#BECEDC",
    },
    {
      title: "2019",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "white",
    },
    {
      title: "2019",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "#3F77A5",
    },
    {
      title: "2017",
      description: "Participated in Gitex Technology Week Dubai 2017",
      bgColor: "white",
    },
    { bgColor: "transparent" },
    {},
  ];
  return (
    <Flex
      direction="column"
      position="relative"
      overflow="hidden"
      px={{ base: 4, md: 8 }}
    >
      {/* Title Section */}
      <Box pt={{ base: 8, md: 16 }} mb={{ base: 4, md: 8 }}>
        <HeadingAnimation>
          <Text
            fontSize={{ base: "20px", md: "32px", lg: "48px" }}
            fontWeight="600"
            lineHeight="normal"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text as="span" color="#3F77A5">
              Event Spotlight:{" "}
            </Text>
            <Text as="span" color="black">
              Where{" "}
            </Text>
            <Text as="span" color="#DB7B3A">
              Innovation{" "}
            </Text>
            <Text as="span" color="black">
              Meets <br /> Engagement
            </Text>
            <Text as="span" color="#3F77A5">
              .
            </Text>
          </Text>
        </HeadingAnimation>
      </Box>

      {/* Dynamic Dashboard */}
      <Flex
        direction={{ base: "column", md: "row" }}
        width="100%"
        mb={{ base: "4%", md: "8%" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {/* Left Section */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "25%" }}
          mb={{ base: 8, md: 0 }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          {/* <SubHeadingAnimation> */}
          <Box mb={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                fill="#3F77A5"
              />
            </svg>
          </Box>
          {/* </SubHeadingAnimation> */}

          <Box
            width={{ base: "90%", md: "331px" }}
            height="auto"
            mb={8}
            textAlign={{ base: "center", md: "left" }}
          >
            <SubHeadingAnimation>
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                color="#000000"
                fontWeight="500"
              >
                VMukti is driving innovation with advanced AI technologies,
                transforming surveillance, automation, and security for a
                smarter, more connected world.
              </Text>
            </SubHeadingAnimation>
          </Box>

          <Box
            borderRadius="24px"
            width={{ base: "90%", md: "336px" }}
            height={{ base: "auto", md: "336px" }}
            bg="#BECEDC"
            p={4}
            my={4}
            display="grid"
            placeItems="center"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "24px", md: "36px" }}
              fontWeight="600"
              color="black"
            >
              Incoming Events
            </Text>
          </Box>
        </Flex>

        {/* Right Section - Slider */}
        
        <Box
          width={{ base: "100%", md: "75%" }}
          position="relative"
          overflow="hidden"
          borderRadius="24px"
          height={{ base: "auto", md: "521px" }}
          bg="white"
          py={6}
        >
          <AnimatePresence custom={direction} initial={false}>
            <MotionBox
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              position="absolute"
              width="100%"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
            >
              {visibleItems.map((item, index) => (
                <DashboardItem key={`${currentIndex}-${index}`} item={item} />
              ))}
            </MotionBox>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Flex
            position="absolute"
            bottom={4}
            left={6}
            gap="0.5"
            justifyContent={{ base: "center", md: "flex-start" }}
            width="100%"
          >
            <NavigationButton onClick={prevSlide} direction="left" />
            <NavigationButton onClick={nextSlide} direction="right" />
          </Flex>
        </Box>
        {/* <CulturalSection gridItems={gridItems} /> */}
      </Flex>
      <CulturalSection gridItems={gridItems} />
    </Flex>
  );
};

export default EventSpotlight;
