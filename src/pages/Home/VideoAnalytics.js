"use client"

import { useState } from "react"
import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const VideoAnalytics = () => {
  const [featureIndex, setFeatureIndex] = useState(0)

  // Example features
  const features = [
    {
      title: "Conversational AI for Video",
      description: "Enables natural language interaction with surveillance data.",
    },
    {
      title: "Custom AI Queries",
      description: "Generate customized video insights using AI-powered queries.",
    },
    {
      title: "Instant Reporting",
      description: "Quickly analyze video data and extract key information.",
    },
    {
      title: "Contextual Video Analysis",
      description: "Understand video content with advanced AI context recognition.",
    },
  ]

  // Handlers for navigation buttons
  const handleNext = () => {
    setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
  }

  const handlePrevious = () => {
    setFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
  }

  return (
    <Flex borderRadius="20px" bgColor="#3F77A5" mx="2%" overflow="hidden" position={"relative"} marginTop="-50px" zIndex={1}>
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
          <Text
            color="#FFF"
            fontFamily="'Wix Madefor Display', sans-serif"
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

          <Flex
            direction={{ base: "row", md: "column" }}
            alignItems="center"
            justifyContent={{ base: "space-between", md: "flex-start" }}
            width="100%"
          >
            <Divider
              width="100%"
              borderBottomWidth="0.5px"
              borderColor="white"
              mt={{ base: "20px", md: "38px" }}
              display={{ base: "none", md: "block" }}
            />

            {/* Navigation Buttons */}
            <Flex
              gap="1"
              mt={{ base: "10px", md: "25px" }}
              direction="row"
              justifyContent={{ base: "flex-end", md: "flex-end" }}
              width="100%"
            >
              <Button
                width="40px"
                height="40px"
                bgColor="white"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#4682B4"
                _hover={{ bgColor: "#E0E0E0" }}
                onClick={handlePrevious}
              >
                &#9664;
              </Button>
              <Button
                width="40px"
                height="40px"
                bgColor="white"
                borderRadius="5px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#4682B4"
                _hover={{ bgColor: "#E0E0E0" }}
                onClick={handleNext}
              >
                &#9654;
              </Button>
            </Flex>
          </Flex>

          {/* Feature List */}
          <Box mt={{ base: "15px", md: "25px" }}>
            {features.map((feature, index) => (
              <Text
                key={index}
                padding="10px 0"
                fontSize={{ base: "14px", md: "15px" }}
                color={index === featureIndex ? "white" : "rgba(255, 255, 255, 0.6)"}
                fontWeight={index === featureIndex ? "bold" : "normal"}
                position="relative"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => setFeatureIndex(index)}
                pl="20px"
              >
                {index === featureIndex && (
                  <Box as="span" position="absolute" left="0" fontSize="12px">
                    ▶
                  </Box>
                )}
                {feature.title}
              </Text>
            ))}
          </Box>
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
            bgColor="#F3F3F3"
            zIndex={2}
            right={0}
          >

          </Box>
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
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoAnalytics

