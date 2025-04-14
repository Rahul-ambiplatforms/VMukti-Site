//updated industry content

// Industry Content.js

import React from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"; // Chakra UI components
import PageContentWrapper from "./PageContentWrapper";
import { motion } from "framer-motion";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "./Animation/Text/SubHeadingAnimation";
import { Link } from "react-router-dom";
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const popAnimation1 = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (index) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.1, // Delay increases for each card
    },
  }),
};

const popAnimation = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const IndustryContent = ({ props, content }) => {
  const titleFontSize = "48px"; // Font size for the title
  const buttonWidth = useBreakpointValue({
    base: "130px",
    md: "130px",
    lg: "146px",
  });
  const buttonHeight = useBreakpointValue({
    base: "40px",
    md: "45px",
    lg: "50px",
  });
  if (
    !content ||
    !Array.isArray(content.title) ||
    !Array.isArray(content.keyApplications)
  ) {
    return (
      <Box mt="5%">
        <Text>Not found</Text>
      </Box>
    );
  }

  return (
    <>
      {/* Import the custom font */}

      {/* Container Box with background and width */}
      {/* Main Container Box */}
      <PageContentWrapper>
        <Box
          as="section"
          backgroundColor="#E7E7E7"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          {/* Title Container with relative positioning */}
          <Flex direction="column">
            <Box position="relative" mb="20px">
              {/* Title Text (above the white rectangle) */}
              <MotionText
                fontSize={{ base: "24px", md: "48px" }}
                fontWeight="600"
                lineHeight="normal"
                textAlign="left"
                position="relative"
                zIndex="1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                viewport={{ once: false, amount: 0.1 }}
              >
                {content.title.map((part, index) => (
                  <MotionText
                    as="span"
                    color={part.color}
                    display="inline"
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    {index !== 0 && " "}
                    {part.text}
                  </MotionText>
                ))}

                {/* Static blue dot with animation */}
                <MotionText
                  as="span"
                  color="#3F77A5"
                  display="inline"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: content.title.length * 0.1,
                  }}
                >
                  .
                </MotionText>
              </MotionText>
            </Box>

            {/* Arrow & Description - Flex Container */}
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              alignItems="start"
              justifyContent="left"
              mt="1%"
            >
              {/* Left Section: Arrow, Description, Button */}
              <Box
                flex="1"
                maxWidth={{ base: "100%", md: "30%" }}
                textAlign={{ base: "center", md: "left" }}
                position="relative"
              >
                {/* Arrow Animation */}
                {/* Desktop View */}
                <MotionBox
                  mb="8px"
                  display={{ base: "none", md: "flex" }}
                  justifyContent="flex-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </MotionBox>
                {/* Mobile View */}
                <MotionBox
                  ml="4
                  px"
                  mb="4px"
                  display={{ base: "flex", md: "none" }}
                  justifyContent="flex-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5C16.5 0.671573 15.8284 -2.38419e-07 15 -2.38419e-07C14.1716 -2.38419e-07 13.5 0.671573 13.5 1.5V13.5H1.5C0.671573 13.5 -2.38419e-07 14.1716 -4.76837e-07 15C-4.76837e-07 15.8284 0.671573 16.5 1.5 16.5H15ZM0.93934 3.06066L13.9393 16.0607L16.0607 13.9393L3.06066 0.93934L0.93934 3.06066Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </MotionBox>

                {/* Description Animation */}
                <MotionText
                  color="#000"
                  fontWeight="500"
                  // textAlign={{ base: "center", md: "left" }}
                  textAlign={{ base: "left", md: "left" }}
                  fontSize={{ base: "14px", md: "16px" }}
                  maxW="100%"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  {content.para}
                </MotionText>

                {/* Button Animation */}
                <MotionButton
                  marginTop="20px"
                  width={buttonWidth}
                  height={buttonHeight}
                  justifyContent="space-between"
                  alignItems="center"
                  bg="white"
                  color="#3F77A5"
                  borderRadius="20px"
                  _hover={{ bg: "#2c5a7a", color: "white" }}
                  px={{ base: "12px", md: "15px", lg: "20px" }}
                  display="flex"
                >
                  Book Demo
                  <Box
                    as="span"
                    display="flex"
                    alignItems="center"
                    marginLeft="8px"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                </MotionButton>
              </Box>
            </Flex>
          </Flex>
          {/* Two White Boxes Above Key Applications - Bottom Aligned */}
          <Flex
            // justifyContent="space-between"
            alignItems="flex-end" // Changed to align bottoms
            direction={{ base: "column", md: "row" }}
            mt={{ base: "5%", md: "-10%" }}
            gap="3"
            width="100%"
            position="relative"
            zIndex="1" // I added this code
          >
            {/* Small image (35% width) - Fixed height */}
            <Box
              flex="0 0 30%"
              display={{ base: "none", md: "flex" }}
              backgroundColor="white"
              height={{ base: "200px", md: "250px", lg: "336px" }}
              width={{ base: "200px", md: "250px", lg: "336px" }}
              aspectRatio={1}
              borderRadius="24px"
              flexShrink="0"
            />
            <Box width="100%" height="65%" borderRadius="20px">
              {/* Large image (60% width) - Will extend upward */}
              <MotionImage
                src={`${process.env.PUBLIC_URL}/assets/${content.large_image}`}
                alt={content.large_image_alt}
                width="100%"
                height="65%"
                backgroundColor="white"
                borderRadius="24px"
                flexShrink="1"
                initial="hidden"
                animate="visible" // Changed from whileInView to animate
                variants={popAnimation}
                viewport={{ once: false }} // Ensures animation runs every time the image enters the viewport
              />
            </Box>
          </Flex>

          {/* Key Applications Section */}

          <Flex
            borderRadius="24px"
            backgroundColor="#FFF"
            px="2%"
            pt="2%"
            pb="4%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="5"
            marginTop="5%"
            position="relative" // Needed for absolute positioning inside
            overflow="hidden"
          >
            {/* SVG Positioned at Top Right */}
            <Box
              position="absolute"
              top="-20%"
              right="-20%"
              width="70%" // SVG covers 70% of the background width
              zIndex="0"
            >
              <Image
                src={`${process.env.PUBLIC_URL}/assets/VMukti Brochure O2 1.png`}
                alt=""
                width="100%"
                opacity="0.8"
              />
            </Box>
            <Box
              position="absolute"
              bottom="2%"
              left="-10%"
              width="70%" // SVG covers 70% of the background width
              zIndex="0"
            >
              <Image
                src={`${process.env.PUBLIC_URL}/assets/VMukti Brochure O2 2.png`}
                alt=""
                width="100%"
                opacity="0.8"
              />
            </Box>

            <Text
              fontSize={{ base: "20px", md: "36px" }}
              fontWeight="600"
              color="#000"
              maxWidth={"93%"}
              textAlign="flex-end"
              width={"100%"}
              mt="2%"
              pb="1%"
            >
              Key Applications
            </Text>
            {content.keyApplications.map((card, index) => (
              <MotionBox
                key={index}
                width={{ base: "100%", md: "48%" }}
                maxWidth="645px"
                flexShrink="0"
                gap="2"
                display="flex"
                flexDirection="column"
                zIndex={1}
                initial="hidden"
                animate="visible" // Changed from whileInView to animate
                variants={popAnimation1}
                custom={index}
                viewport={{ once: false }} // Repeats animation on scroll
              >
                {/* Grey Placeholder */}
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/${card.image}`}
                  alt={card.image_alt}
                  width="100%"
                  height={{ base: "200px", md: "368px" }}
                  backgroundColor="#E7E7E7"
                  borderRadius="24px"
                  flexShrink="0"
                />

                {/* Title */}
                <HeadingAnimation>
                  <Text
                    color="#000"
                    fontSize={{ base: "12px", md: "16px" }}
                    fontWeight="700"
                    textAlign="left"
                    mt="5px"
                    width="90%"
                  >
                    {card.title}
                  </Text>
                </HeadingAnimation>
                {/* Blue Dash */}
                <Box
                  width="18px"
                  height="3px"
                  borderRadius="2px"
                  backgroundColor="#3F77A5"
                  alignSelf="flex-start"
                />

                {/* Description */}
                <SubHeadingAnimation>
                  <Text
                    color="#696969"
                    fontSize={{ base: "12px", md: "14px" }}
                    fontWeight="500"
                    textAlign="left"
                    width="80%"
                  >
                    {card.description}
                  </Text>
                </SubHeadingAnimation>
              </MotionBox>
            ))}
          </Flex>

          {/* Key Benefits Section */}
          <Box
            width="100%"
            backgroundColor="#3F77A5"
            borderRadius="24px"
            flexShrink="0"
            marginTop="15px"
            padding="45px"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Key Benefits Title */}
            <Text
              color="#FFF"
              fontSize="36px"
              fontWeight="600"
              textAlign={{ md: "left" }}
              marginBottom={{ base: "16px", md: "0" }}
            >
              Key Benefits
            </Text>

            {/* Benefits Grid */}
            <Flex
              flex="1"
              justifyContent={{md:"space-evenly"}}
              alignItems={{base:"left",md:"center"}}
              flexWrap="wrap"
              gap="30px"
              ml={{base:"-10%",md:"5%"}}
            >
              {content.keyBenefits.map((benefit, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  width={{ base: "60%", md: "250px" }}
                  flexShrink="0"
                >
                  {/* SVG Icon */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start" // Aligns icon to the left
                  >
                    <Image src={benefit.svg} alt={benefit.title} />
                  </Box>
                  <Text
                    color="#FFF"
                    fontSize="16px"
                    fontWeight="500"
                    width="auto" // Allow text to take up necessary width
                    minWidth="120px" // Prevents text from being too narrow
                    maxWidth="420px" // Expands width if needed for longer text
                    minHeight="3px"
                    lineHeight="1.2"
                    textAlign="left"
                    mt="5%"
                    wordBreak="break" // or "break-all"
                    overflowWrap="break-word"
                  >
                    {benefit.title}
                  </Text>{" "}
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Bottom elements */}
          <Flex
            justifyContent="flex-end" // Align to the right
            alignItems="center" // Vertically center
            mt="2%" // Margin top
            width="100%"
            position="relative" // Use relative positioning
            zIndex="2" // Ensure it's above other elements
          >
            {/* Line */}
            <Box
              width="30%" // Fixed width for the line
              height="1px"
              backgroundColor="#3f77a5"
              flexShrink={0} // Prevent the line from shrinking
              marginRight="2%" // Space between line and button
            />

            {/* Button */}
            <Button
              height={{ base: "40px", md: "50px" }} // Responsive height
              minWidth="146px" // Minimum width to fit content
              backgroundColor="white"
              color="#3F77A5"
              fontSize="16px"
              fontWeight="700"
              borderRadius="20px"
              as={Link}
              to="/industries"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="8px 16px" // Padding for better spacing
              gap="8px" // Space between text and icon
              zIndex="2"
              _hover={{ backgroundColor: "#f0f0f0" }}
            >
              All Industries
              <svg
                style={{
                  width: "14px",
                  height: "14px",
                  minWidth: "14px",
                  minHeight: "14px",
                  flexShrink: 0, // Prevent the icon from shrinking
                }}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
          </Flex>
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default IndustryContent;
