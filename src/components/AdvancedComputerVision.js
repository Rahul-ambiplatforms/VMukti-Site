//Updated code.

import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionFlex = motion.create(Flex);

const AdvancedComputerVision = ({
  title = [
    { text: "IoT Integration & Secure Connectivity for", color: "black" },
    { text: "Smart Surveillance", color: "#3F77A5" },
  ],
  subtitle = "AI-Powered Visual Processing",
  cards = [
    {
      type: "image",
      label: "Real-Time Monitoring",
      media: "/assets/car.png",
      description:
        "IoT-enabled cameras and sensors continuously track environmental changes and security events.",
    },
    {
      type: "image",
      label: "End-to-End Security",
      media: "/assets/ete.png",
      description:
        "Ensures encrypted data transmission and secure cloud or on-prem storage",
    },
    {
      type: "image",
      label: "Seamless System Integration",
      media: "/assets/ssi.png",
      description:
        "Connects effortlessly with third-party platforms for enhanced situational awareness.",
    },
    {
      type: "image",
      label: "Automated Insights",
      media: "/assets/ssi1.png",
      description:
        "Transforms sensor data into actionable alerts for proactive decision-making",
    },
  ],
  backgroundImage = "/assets/VMuktidot.png",
  bgColor = "white",
  myMargin = "3%",
  myZIndex = "1",
  textColor,
  lineColor = "#3F77A5",
  cardBgColor1,
  cardBgColor2,
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
      borderRadius="24px"
      bgColor={bgColor}
      position="relative"
      height="100%"
      overflow="hidden"
      // px="5%"
      px={{ base: "6%", md: "5%" }}
      pb={{ base: "6%", md: "4%" }}
      // pb="4%"
      pt="1.5%"
      zIndex={myZIndex}
      mt={myMargin}
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        right="0"
        opacity="0.8"
        pointerEvents="none"
      >
        <Image
          src={backgroundImage}
          alt="Background"
          objectFit="cover"
          width="100%"
        />
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
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.8, x: -50 }}
        // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.8, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        mt={{ base: "1%", md: "1%" }}
      >
        <Flex flexWrap="wrap">
          {title.map((item, index) => (
            <Text
              as="span"
              color={item.color}
              display="inline"
              key={index}
              fontSize={{ base: "20px", md: "36px" }}
              fontWeight="500"
            >
              {index !== 0 && " "}
              {item.text}
              &nbsp;
            </Text>
          ))}
        </Flex>
      </MotionFlex>

      <Flex direction="column">
        {/* Navigation Buttons */}
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          // mb={{ base: "2%" , md: "5%" }}
          gap="1px"
          zIndex={2}
          pointerEvents="auto"
          mb="5%"
        >
          {/* <Button
            width="31px"
            height="31px"
            minWidth="31px"
            minHeight="31px"
            padding="0"
            borderRadius="5px"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bgColor="#E7E7E7"
            _hover={{ bgColor: "#e0e0e0" }}
            onClick={() => handleNavigation("left")}
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
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bgColor="#E7E7E7"
            _hover={{ bgColor: "#e0e0e0" }}
            onClick={() => handleNavigation("right")}
          >
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path
                d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                fill="#3F77A5"
              />
            </svg>
          </Button> */}

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
              onClick={() => handleNavigation("left")}
              // onClick={handlePrev}
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
            onClick={() => handleNavigation("right")}
              // onClick={handleNext}
              isRound
              aria-label="Next Feature"
              bg="#fff"
            />
          </HStack>
        </Flex>

        {/* Card Contents */}
        <Flex
          justifyContent="space-between"
          direction={{ base: "column", md: "row", lg: "row" }}
          gap={{ base: 4, md: 2, lg: 1 }}
          width="100%"
        >
          {/* Cards Section */}
          {cards.map((card, index) => (
            // Parent container for each card with separate hover state
            <Flex
              key={index}
              direction="column"
              alignItems="flex-start"
              width={{
                base: "100%", // Full width on mobile regardless of active state
                md: effectiveCard === index ? "814px" : "149px", // Original behavior on desktop
                lg: effectiveCard === index ? "814px" : "149px", // Original behavior on desktop
              }}
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
                borderRadius={{ base: "20px", md: "24px" }}
                bgColor={index % 2 !== 0 ? cardBgColor1 : cardBgColor2} // Fixed reference
                display="flex"
                overflow="hidden"
                justifyContent="flex-start"
                position="relative"
                height={{
                  base: effectiveCard === index ? "194px" : "54px", // Fixed height for mobile
                  md: "439px", // Original desktop height
                  lg: "439px",
                }}
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
                      src={`${process.env.PUBLIC_URL}${card.media}`}
                      alt={card.label}
                      width={{ base: "100%", md: "100%", lg: "100%" }}
                      height={{ base: "", md: "100%", lg: "100%" }}
                      objectFit={{ base: "fit", md: "cover" }}
                      borderRadius={{ base: "20", md: "24px" }}
                    />
                  )
                ) : (
                  // Inactive cards show vertical text overlay
                  <Text
                    as="div"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight="700"
                    sx={{
                      writingMode: { base: "horizontal-tb", md: "vertical-rl" },
                      transform: { base: "", md: "rotate(180deg)" },
                      left: { base: "4%", md: "auto" }, // Left-aligned on mobile
                      right: { base: "auto", md: "15%" }, // Right-aligned on desktop
                      bottom: { base: "25%", md: "5%" },
                      width: { base: "90%", md: "auto" }, // Take more width on mobile
                      height: { base: "auto", md: "100%" },
                      textAlign: { base: "left", md: "inherit" }, // Force left alignment on mobile
                    }}
                    position="absolute"
                    bottom="5%"
                    right="15%"
                    height="100%"
                  >
                    {card.label}
                    <Box
                      width="18px"
                      height="2px"
                      bgColor="#3f77a5"
                      sx={{
                        writingMode: {
                          base: "",
                          md: "vertical-rl",
                        },
                        transform: { base: "", md: "rotate(90deg)" },
                        mt: { md: "6px" },
                        mr: { md: "-5px" },
                        ml: { md: "-10px" },
                      }}
                      borderRadius="2px"
                    />
                  </Text>
                )}
              </Box>

              {/* Text below the card for the active card */}
              {effectiveCard === index && (
                <Box mt={3}>
                  <Text
                    as="div"
                    whiteSpace="nowrap"
                    fontSize={{ base: "14px", md: "16px" }} // fontSize={{ base: '14px', md: '16px', lg: '18px' }}
                    fontWeight="700"
                    color={textColor}
                  >
                    {card.label}
                    <Box
                      width="15px"
                      height="2px"
                      bgColor={lineColor}
                      borderRadius="2px"
                      marginBottom="8px"
                    />
                  </Text>
                  <Text
                    fontWeight="500"
                    whiteSpace={{ base: "wrap", md: "nowrap" }}
                    fontSize={{ base: "12px", md: "14px" }}
                    color="#696969"
                  >
                    {card.description}
                  </Text>
                </Box>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdvancedComputerVision;
