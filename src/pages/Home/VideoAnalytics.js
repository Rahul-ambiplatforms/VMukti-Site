"use client"

import React, { useState } from "react"
import { Box, Flex, Text, Image, Button, Divider, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation"

const MotionBox = motion(Box)

const VideoAnalytics = () => {
  const [featureIndex, setFeatureIndex] = useState(0)
  const [progress, setProgress] = useState(0)

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

  const featureImages = [
    { image: "/assets/iphone_image.png", height: "100%", minWidth: "250px" },
    { image: "/assets/LaptopMockup1.png", height: "100%", minWidth: "800px" },
    { image: "/assets/WebPageMockup1.png", height: "100%", minWidth: "700px" },
    { image: "/assets/iPadProMockup1.png", height: "100%", minWidth: "250px" },
  ]

  const handleNext = () => {
    setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
    setProgress((prev) => (prev + 25) % 100)
  }

  const handlePrevious = () => {
    setFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
    setProgress((prev) => (prev - 25 < 0 ? 75 : prev - 25))
  }

  return (
    <Flex borderRadius="20px" bgColor="#3F77A5" overflow="hidden" position="relative" marginTop="-50px" zIndex={1}>
      <Flex padding={{ base: "20px", md: "40px" }} gap={4} direction={{ base: "column", lg: "row" }} width="100%">
        {/* Left Section - Completely unchanged */}
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
            <Flex position="relative" bg="#fff" height="0.1px" width="100%" align="center" mt={{ base: "10px", md: "25px" }}>
              <Box
                position="absolute"
                height="4px"
                width="25%"
                bg="#FFFFFF"
                transform={`translateX(${progress}%)`}
                transition="transform 0.3s ease-in-out"
              />
            </Flex>
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

          <Grid templateColumns="20px 1fr" gap="2">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  {index === featureIndex && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                      <path d="M7.38461 7.38462L0 0L-2.58233e-06 14.7692L7.38461 7.38462Z" fill="white" />
                    </svg>
                  )}
                </Box>
                <Text
                  padding="10px 0"
                  fontSize={{ base: "14px", md: "15px" }}
                  color={index === featureIndex ? "white" : "rgba(255, 255, 255, 0.6)"}
                  fontWeight={index === featureIndex ? "bold" : "normal"}
                  cursor="pointer"
                  onClick={() => {
                    setFeatureIndex(index)
                    setProgress(index * 25)
                  }}
                >
                  {feature.title}
                </Text>
              </React.Fragment>
            ))}
          </Grid>
        </Flex>

        {/* Right Section - Only added overflow:hidden and key prop */}
        <Flex
          marginTop={{ base: "20px", md: "171px" }}
          position="relative"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          width="100%"
          minHeight="511px"
          mb="50px"
        >
          <MotionBox
            position={"absolute"}
            width="50%"
            height="511px"
            borderRadius="24px 0 0 24px"
            bgColor="white"
            padding="25px 50px 25px 25px"
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

          {/* Only changed this Box by adding overflow:hidden */}
          <Box
            position={"absolute"}
            width="55%"
            height="511px"
            borderRadius="24px"
            padding="25px"
            bgColor="#E7E7E7"
            zIndex={2}
            right={0}
            // overflow="hidden" // Only added this line
          >
            {/* Only added key prop to Image */}
            <Image
              key={`image-${featureIndex}`} // Added this line
              src={featureImages[featureIndex].image}
              alt={features[featureIndex].title}
              objectFit="contain"
              width="100%"
              minWidth={featureImages[featureIndex].minWidth}
              position="absolute"
              bottom={0}
              right={0}
              zIndex={3}
              style={{
                transition: 'opacity 0.3s ease' // Smooth transition
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoAnalytics