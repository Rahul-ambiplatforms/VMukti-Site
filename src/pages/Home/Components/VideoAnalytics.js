'use client'

import React, { useState } from "react"
import { Box, Flex, Text, Image, Button, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation"

const MotionBox = motion(Box)

const VideoAnalytics = () => {
  const features = [
    {
      title: 'Instant Reporting',
      description: 'Quickly analyze video data and extract key information.',
    },
    {
      title: 'Contextual Video Analysis',
      description:
        'Understand video content with advanced AI context recognition.',
    },
    {
      title: 'Conversational AI for Video',
      description:
        'Enables natural language interaction with surveillance data.',
    },
    {
      title: 'Custom AI Queries',
      description:
        'Generate customized video insights using AI-powered queries.',
    },
  ]

  const featureImages = [
    { image: '/assets/iphone_image.png', height: '100%', minWidth: '250px' },
    { image: '/assets/LaptopMockup1.png', height: '100%', minWidth: '800px' },
    { image: '/assets/WebPageMockup1.png', height: '100%', minWidth: '700px' },
    { image: '/assets/iPadProMockup1.png', height: '100%', minWidth: '250px' },
  ]

  const [featureIndex, setFeatureIndex] = useState(0)
  // const progress = (featureIndex / (features.length - 1)) * 100

  const handleNext = () => {
    setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
  }

  const handlePrevious = () => {
    setFeatureIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    )
  }

  const handleFeatureClick = (index) => {
    setFeatureIndex(index)
  }

  return (
    <Flex
      borderRadius="24px"
      px="5%"
      pb="4%"
      pt="1.5%"
      bgColor="#3F77A5"
      overflow="hidden"
      position="relative"
      mt="3%"
      zIndex={1}
    >
      <Flex gap={4} direction={{ base: 'column', lg: 'row' }} width="100%">
        {/* Left Section */}
        <Flex
          color="white"
          paddingTop={{ base: '10px', md: '20px' }}
          direction="column"
          width={{ base: '100%', md: 'auto' }}
          minWidth={{ md: '250px' }}
          flexShrink={0}
          order={{ base: 1, md: 0 }}
        >
          <HeadingAnimation>
            <Text
              as="div"
              color="#FFF"
              fontSize={{ base: '20px', md: '36px' }}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              letterSpacing="-0.54px"
            >
              <Box as="div" display={{ base: 'none', md: 'block' }}>
                GPT-Powered
                <br />
                Video Analytics & Insights
              </Box>
              <Text as="div" display={{ base: 'block', md: 'none' }}>
                GPT-Powered Video Analytics & Insights
              </Text>
            </Text>
          </HeadingAnimation>

          {/* Mobile View */}
          <Box display={{ base: 'block', lg: 'none' }} mt="20px">
            <Box
              width="100%"
              height={{ base: '250px', md: '200px' }}
              borderRadius="20px"
              padding="15px"
              bgColor="#E7E7E7"
              position="relative"
              overflow="hidden"
              mb="15px"
            >
              <Image
                key={`mobile-image-${featureIndex}`}
                src={featureImages[featureIndex].image}
                alt={features[featureIndex].title}
                objectFit="contain"
                width="100%"
                height="100%"
                position="absolute"
                top="0"
                left="0"
              />
            </Box>

            <MotionBox
              width="100%"
              borderRadius="20px"
              bgColor="white"
              padding="15px"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              mt={{ base: '-14%', md: '0' }}
              height={{ base: '130px', md: 'auto' }}
              display="flex"
              gap={2}
              flexDirection="column"
              justifyContent={{ base: 'flex-end', md: 'flex-start' }}
            >
              <Flex direction="column">
                <Text
                  color="black"
                  fontSize={{ base: '14px', md: '16px' }}
                  fontWeight="700"
                  letterSpacing="-0.24px"
                >
                  {features[featureIndex].title}
                </Text>
                <Box
                  width="20px"
                  height="2px"
                  bg="#3F77A5"
                  borderRadius="2px"
                />
              </Flex>
              <Text
                width="100%"
                color="#696969"
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight="500"
                letterSpacing="-0.21px"
                marginTop="8px"
                // whiteSpace={{ base: "normal", md: "wrap" }}
              >
                {features[featureIndex].description}
              </Text>
            </MotionBox>
          </Box>

          {/* Progress Bar and Navigation */}
          <Flex
            direction={{ base: 'row', md: 'column' }}
            alignItems="center"
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            width="100%"
            mt={{ base: '20px', md: '25px' }}
            display={{ base: 'none', md: 'flex' }} // Hide progress bar in mobile view
          >
            <Box
              position="relative"
              width="100%"
              height="1px"
              bg="rgba(255,255,255,0.2)"
              mt={{ base: '0', md: '25px' }}
            >
              <Box
                position="absolute"
                mt="-1px"
                // height="100%"
                width={`${100 / features.length}%`}
                bg="#FFFFFF"
                left={`${(featureIndex / features.length) * 100}%`} // Adjusted calculation for initial position
                transform="translateX(0)" // Removed "-100%" to fix the initial position
                transition="left 0.3s ease-in-out"
                height="4px"
              />
            </Box>

            <Flex
              gap="0.5"
              mt={{ base: '10px', md: '25px' }}
              direction="row"
              justifyContent={{ base: 'flex-end', md: 'flex-end' }}
              width="100%"
              display={{ base: 'none', md: 'flex' }}
            >
              <Button
                width={{ base: '25px', md: '30.769px' }}
                height={{ base: '25px', md: '30.769px' }}
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
                onClick={handlePrevious}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
              <Button
                width={{ base: '25px', md: '30.769px' }}
                height={{ base: '25px', md: '30.769px' }}
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
                onClick={handleNext}
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
            </Flex>
          </Flex>

          {/* Feature List */}
          <Grid
            templateColumns="20px 1fr"
            mt={{ base: '20px', md: '0' }}
            rowGap={{ base: '3', md: '6' }}
          >
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  {index === featureIndex && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      fill="none"
                    >
                      <path
                        d="M7.38461 7.38462L0 0L-2.58233e-06 14.7692L7.38461 7.38462Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </Box>
                <Text
                  fontSize={{
                    base: index === featureIndex ? '14px' : '12px',
                    md: index === featureIndex ? '16px' : '14px',
                  }}
                  color={
                    index === featureIndex
                      ? 'white'
                      : 'rgba(255, 255, 255, 0.6)'
                  }
                  fontWeight={index === featureIndex ? 'bold' : 'normal'}
                  cursor="pointer"
                  onClick={() => handleFeatureClick(index)}
                >
                  {feature.title}
                </Text>
              </React.Fragment>
            ))}
          </Grid>
        </Flex>

        {/* Desktop View - Right Section */}
        <Flex
          marginTop={{ base: '0', md: '171px' }}
          position="relative"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          width="100%"
          minHeight="511px"
          mb="50px"
          display={{ base: 'none', lg: 'flex' }}
        >
          <MotionBox
            position={'absolute'}
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
            <Text
              color="black"
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight="700"
              letterSpacing="-0.24px"
            >
              {features[featureIndex].title}
            </Text>
            <Box width="18px" height="2.5px" borderRadius="2px" bg="#3F77A5" />
            <Text
              width="100%"
              color="#696969"
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight="500"
              letterSpacing="-0.21px"
              marginTop="10px"
            >
              {features[featureIndex].description}
            </Text>
          </MotionBox>

          <Box
            position={'absolute'}
            width="55%"
            height="511px"
            borderRadius="24px"
            padding="25px"
            bgColor="#E7E7E7"
            zIndex={2}
            right={0}
          >
            <Image
              key={`desktop-image-${featureIndex}`}
              // src={featureImages[featureIndex].image}
              src={`${process.env.PUBLIC_URL}${featureImages[featureIndex].image}`}
              alt={features[featureIndex].title}
              objectFit="contain"
              width="100%"
              minWidth={featureImages[featureIndex].minWidth}
              position="absolute"
              bottom={0}
              right={0}
              zIndex={3}
              style={{
                transition: 'opacity 0.3s ease',
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default VideoAnalytics
