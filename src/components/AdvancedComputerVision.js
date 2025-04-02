import React, { useState } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionFlex = motion(Flex);

const AdvancedComputerVision = ({
  title1 = "Advanced Computer",
  title2 = "Vision & Image Intelligence",
  subtitle = "AI-Powered Visual Processing",
  description = "Extracts, analyzes, and interprets video data in real-time.",
  cards = [
    {
      type: "video",
      label: "Video Placeholder",
      media: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      type: "image",
      label: "Scene Understanding",
      media: "/assets/car.png",
    },
    {
      type: "image",
      label: "Multi-Modal Recognition",
      media: "/assets/car.png",
    },
    {
      type: "image",
      label: "Automated Decision Making",
      media: "/assets/car.png",
    },
  ],
  backgroundImage = "/assets/VMuktidot.png",
  myMargin = "3%",
  myZIndex = "1",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 }); // Triggers at 10% visibility

  // activeCard is persistent (updated on click or navigation)
  const [activeCard, setActiveCard] = useState(0);
  // hoverCard is temporary (updated on mouse enter/leave)
  const [hoverCard, setHoverCard] = useState(null);

  // effectiveCard determines which card is visually expanded
  const effectiveCard = hoverCard !== null ? hoverCard : activeCard;

  const handleNavigation = (direction) => {
    // Clear any hover state when navigating
    setHoverCard(null);
    if (direction === "left") {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else if (direction === "right") {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Flex
      direction="column"
      borderRadius="20px"
      bgColor="white"
      position="relative"
      height="100dvh"
      overflow="hidden"
      px="5%"
      pt="2%"
      zIndex={myZIndex}
      mt={myMargin}
    >
      {/* Background Image */}
      <Box position="absolute" top="0" right="0" opacity="0.8" pointerEvents="none">
        <Image src={backgroundImage} alt="Background" objectFit="cover" width="100%" />
      </Box>

      {/* Blurred Circle */}
      <Box
        position="absolute"
        top="25%"
        left="17%"
        transform="translate(-50%, -50%)"
        width="408px"
        height="408px"
        borderRadius="408px"
        opacity="9%"
        background="#3F77A5"
        filter="blur(56.6px)"
        zIndex={-1}
      />

      {/* Title Section */}
      <MotionFlex
        ref={ref}
        direction="column"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Text fontSize={{ base: "20px", md: "36px" }} fontWeight="500">
          {title1}
        </Text>
        <Text fontSize={{ base: "20px", md: "36px" }} fontWeight="500" color="#3f77a5">
          {title2}
        </Text>
      </MotionFlex>



      <Flex direction="column">
        {/* Navigation Buttons */}
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          mb={4}
          gap="1px"
          zIndex={2}
          pointerEvents="auto"
        >
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
            bgColor="#E7E7E7"
            _hover={{ bgColor: '#e0e0e0' }}
            onClick={() => handleNavigation("left")}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z" fill="#3F77A5" />
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
            bgColor="#E7E7E7"
            _hover={{ bgColor: '#e0e0e0' }}
            onClick={() => handleNavigation("right")}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z" fill="#3F77A5" />
            </svg>
          </Button>
        </Flex>

        <Flex justifyContent="space-between">{/* Cards Section */}
          {cards.map((card, index) => (
            // Parent container for each card with separate hover state
            <Flex
              key={index}
              direction="column"
              alignItems="flex-start"
              width={effectiveCard === index ? "814px" : "149px"}
              transition="width 0.5s ease, background-color 0.3s ease"
              onMouseEnter={() => setHoverCard(index)} // Set temporary hover state
              onMouseLeave={() => setHoverCard(null)} // Clear hover state
              onClick={() => setActiveCard(index)} // Update persistent active card on click
              cursor="pointer"
              position="relative"
              overflow="hidden"
            >
              <Box
                width="100%"
                height="439px"
                borderRadius="24px"
                bgColor={index % 2 !== 0 ? "#BECEDC" : "#EAEAEA"}
                display="flex"
                overflow="hidden"
                justifyContent="flex-start"
                position="relative"
              >
                {effectiveCard === index ? (
                  card.type === "video" ? (
                    <video
                      src={card.media}
                      autoPlay
                      loop
                      muted
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover", borderRadius: "24px" }}
                    />
                  ) : (
                    <Image
                      src={card.media}
                      alt={card.label}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover", borderRadius: "24px" }}
                    />
                  )
                ) : (
                  // Inactive cards show vertical text overlay
                  <Text
                    fontSize="1vw"
                    fontWeight="700"
                    sx={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    position="absolute"
                    bottom="5%"
                    right="15%"
                    height="100%"
                  >
                    {card.label}
                    <Box
                      width="18px"
                      height="2px"
                      sx={{ writingMode: "vertical-rl", transform: "rotate(90deg)" }}
                      bgColor="#3f77a5"
                      borderRadius="2px"
                      marginTop="6px"
                      marginRight="-5px"
                      marginLeft="-10px"
                    />
                  </Text>
                )}
              </Box>

              {/* Text below the card for the active card */}
              {effectiveCard === index && (
                <Box mt={3}>
                  <Text
                    whiteSpace="nowrap"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight="700"
                  >
                    {card.label}
                    <Box
                      width="15px"
                      height="2px"
                      bgColor="#3f77a5"
                      borderRadius="2px"
                      marginBottom="8px"
                    />
                  </Text>
                  <Text whiteSpace="nowrap" fontSize={{ base: "12px", md: "14px" }} color="#696969">
                    {description}
                  </Text>
                </Box>
              )}
            </Flex>
          ))}
        </Flex></Flex>
    </Flex>
  );
};

export default AdvancedComputerVision;
