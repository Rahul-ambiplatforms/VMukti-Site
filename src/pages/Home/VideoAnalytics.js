"use client"

import React, { useState } from "react"
import { Box, Flex, Text, Image, Button, Divider, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation"
import ImagePop from "../../components/Animation/Image/ImagePop"

const MotionBox = motion(Box)

const VideoAnalytics = () => {
  const [featureIndex, setFeatureIndex] = useState(0)

  // Example features
  const features = [
    {
      title: "Instant Reporting",
      description: "Quickly analyze video data and extract key information.",
    },
    {
      title: "Contextual Video Analysis",
      description: "Understand video content with advanced AI context recognition.",
    },

    {
      title: "Conversational AI for Video",
      description: "Enables natural language interaction with surveillance data.",
    },
    {
      title: "Custom AI Queries",
      description: "Generate customized video insights using AI-powered queries.",
    },


  ]

  // Handlers for navigation buttons
  const [progress, setProgress] = useState(0);
  const handleNext = () => {
    setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
    setProgress((prev) => (prev + 25) % 100);
  }

  const handlePrevious = () => {
    setFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
    setProgress((prev) => (prev - 25 < 0 ? 75 : prev - 25));
  }
  return (
    <Flex borderRadius="20px" bgColor="#3F77A5" overflow="hidden" position={"relative"} marginTop="-50px" zIndex={1}>
      <Flex padding={{ base: "20px", md: "40px" }} gap={4} direction={{ base: "column", lg: "row" }} width="100%">
        {/* Left Section with Title and Menu */}
        <Flex
          color="white"
          paddingTop={{ base: "10px", md: "20px" }}
          direction="column"
          width={{ base: "100%", md: "auto" }}
          minWidth={{ md: "250px" }}
          flexShrink={0}
        >
          <HeadingAnimation>
          <Text
            color="#FFF"

            fontSize={{ base: "24px", md: "36px" }}
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            letterSpacing="-0.54px"
          >
            GPT-Powered
            <br />
            Video Analytics & Insights
          </Text>
          </HeadingAnimation>
          <Flex
            direction={{ base: "row", md: "column" }}
            alignItems="center"
            justifyContent={{ base: "space-between", md: "flex-start" }}
            width="100%"
          >
            {/* Progress Bar Container */}
            <Flex position="relative" bg="white" height="1px" width="100%" align="center" mt={{ base: "10px", md: "25px" }}>
              {/* Progress Indicator */}
              <Box
                position="absolute"
                height="3px"
                width="25%" // Fixed width at 25%
                bg="white"
                transform={`translateX(${(progress * 400) / 100}%)`} // Corrected movement range
                transition="transform 0.3s ease-in-out"
              />
            </Flex>




            {/* Navigation Buttons */}
            <Flex
              gap="0.5"
              mt={{ base: "10px", md: "25px" }}
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
                onClick={handlePrevious}
              >
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z" fill="#3F77A5" />
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
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z" fill="#3F77A5" />
                </svg>
              </Button>
            </Flex>
          </Flex>

          {/* Feature List */}
          <Grid templateColumns="20px 1fr" gap="2">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {/* Left Column - SVG Only Appears for Active Item */}
                <Box display="flex" alignItems="center" justifyContent="center">
                  {index === featureIndex && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                      <path d="M7.38461 7.38462L0 0L-2.58233e-06 14.7692L7.38461 7.38462Z" fill="white" />
                    </svg>
                  )}
                </Box>

                {/* Right Column - Text */}
                <Text
                  padding="10px 0"
                  fontSize={{ base: "14px", md: "15px" }}
                  color={index === featureIndex ? "white" : "rgba(255, 255, 255, 0.6)"}
                  fontWeight={index === featureIndex ? "bold" : "normal"}
                  cursor="pointer"
                  onClick={() => setFeatureIndex(index)}
                >
                  {feature.title}
                </Text>
              </React.Fragment>
            ))}
          </Grid>

        </Flex>

        {/* Right Section with Feature Card and Devices */}
        <Flex
          marginTop={{ base: "20px", md: "171px" }}
          position="relative"
          // width={{ base: "100%", md: "auto" }}
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          width="100%"
          minHeight="511px"
          mb="50px" // Adjusted margin
        // flexDirection="row" // Always horizontal layout
        >
          {/* Animated Feature Card */}
          <MotionBox
            position={"absolute"}
            width="50%"
            height="511px"
            borderRadius="24px 0 0 24px" // Fully rounded on small screens
            bgColor="white"
            padding="25px"
            zIndex={2}
            left={0}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text color="black" fontSize={{ base: "14px", md: "18px" }} fontWeight="700" letterSpacing="-0.24px">
              {features[featureIndex].title}
            </Text>
            <Text
              width="100%"
              color="#696969"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="500"
              letterSpacing="-0.21px"
              marginTop="10px"
            >
              {features[featureIndex].description}
            </Text>
          </MotionBox>

          {/* Device Image */}
          <Box
            position={"absolute"}
            width="55%"
            height="511px"
            borderRadius="24px"
            padding="25px"  // Fully rounded like left box
            bgColor="#E7E7E7"
            zIndex={2}
            right={0}
            // bg="red"
          >

          </Box>
          {/* <ImagePop> */}
          <Image
            src="/assets/ipad.png"
            alt="iPad"
            objectFit="contain"
            width="100%"  // Makes it responsive
            maxWidth="542px"
            minWidth="250px"
            position="absolute"
            bottom={0}
            right={0}
            zIndex={3}
            // bg="red"
          />
          {/* </ImagePop> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoAnalytics
