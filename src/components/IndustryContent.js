import React from 'react'
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react' // Chakra UI components
import PageContentWrapper from './PageContentWrapper'

const IndustryContent = ({ props, content }) => {
  const titleFontSize = '48px' // Font size for the title
  const buttonWidth = useBreakpointValue({
    base: '130px',
    md: '130px',
    lg: '146px',
  })
  const buttonHeight = useBreakpointValue({
    base: '40px',
    md: '45px',
    lg: '50px',
  })
  if (!content || !Array.isArray(content.title) || !Array.isArray(content.keyApplications)) {
    return <Box mt="5%"><Text>Not found</Text></Box>;
  }



  return (
    <>
      {/* Import the custom font */}


      {/* Container Box with background and width */}
      {/* Main Container Box */}
      <PageContentWrapper>
        <Box
          mt={{ base: '20px', md: '40px' }}
          as="section"

          backgroundColor="#E7E7E7"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
        >
          {/* Title Container with relative positioning */}
          <Box position="relative" mb="20px">
            {/* Title Text (above the white rectangle) */}
            <Text
              fontSize={{ base: '24px', md: '48px' }}
              fontWeight="600"
              lineHeight="normal"
              textAlign="left"
              position="relative"
              zIndex="1" // Ensures text stays above the rectangle
            >
              {content.title.map((part, index) => (
                <Text as="span" color={part.color} display="inline" key={index}>
                  {index !== 0 && ' '}
                  {part.text}
                </Text>
              ))}
              <Text as="span" color="#3F77A5" display="inline">
                .
              </Text>{' '}
              {/* Static blue dot without space */}
            </Text>
          </Box>

          {/* Arrow & Description - Flex Container */}
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="start"

            justifyContent="left"
            mt="1%" // Adjust spacing as needed
          >
            {/* Left Section: Arrow & Description */}
            <Box
              flex="1"
              maxWidth={{ base: '100%', md: '30%' }}
              textAlign={{ base: 'center', md: 'left' }}
              position="relative" // Ensure child absolute positioning works inside
            >
              {/* Arrow */}
              <Box mb="8px" display="flex" justifyContent="flex-start">
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
              </Box>

              {/* Description */}
              <Text
                color="#000"
                fontWeight="500"
                textAlign={{ base: 'center', md: 'left' }}
                fontSize={{ base: '14px', md: '16px' }}
                maxW="100%"
              >
                {' '}
                {content.para}
              </Text>

              {/* Button Below the Description */}
              <Button
                marginTop="20px"
                width={buttonWidth}
                height={buttonHeight}
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                color="#3F77A5"
                borderRadius="20px"
                _hover={{ bg: '#2c5a7a', color: 'white' }}
                px={{ base: '12px', md: '15px', lg: '20px' }}
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
              </Button>
            </Box>
          </Flex>

          {/* Two White Boxes Above Key Applications - Bottom Aligned */}
          <Flex
            // justifyContent="space-between"
            alignItems="flex-end" // Changed to align bottoms
            direction={{ base: 'column', md: 'row' }}
            mt={{ base: '-5%', md: '-10%' }}
            gap="3"
            position="relative"
          >
            {/* Small image (35% width) - Fixed height */}
            <Image
              flex="0 0 30%"
              src={content.small_image}
              alt={content.small_image_alt}
              maxHeight={{ base: '180px', md: '336px' }} // Changed to minHeight
              backgroundColor="white"
              borderRadius="24px"
              flexShrink="0"
            />

            {/* Large image (60% width) - Will extend upward */}
            <Image
              src={content.large_image}
              alt={content.large_image_alt}
              flex="0 0 68%"
              maxHeight={{ base: '300px', md: '630px' }} // Changed to minHeight
              height="auto" // Prevent sudden jumps
              backgroundColor="white"
              borderRadius="24px"
              flexShrink="1"
            />
          </Flex>

          {/* Key Applications Section */}
          {/* <Flex mx="2%"> */}

          <Flex
            // flexShrink="0"
            borderRadius="24px"
            backgroundColor="#FFF"
            px="2%"
            py="2%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="10"
            marginTop="5%"
            position="relative" // Needed for absolute positioning inside
          >
            {/* SVG Positioned at Top Right */}
            <Box
              position="absolute"
              top="0"
              right="0"
              width="70%" // SVG covers 70% of the background width
              zIndex="0"
            >
              <Image src={"./assets/VMukti_Brochure_O2_1.png"} alt="" width="100%" opacity="0.8" />
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              left="0"
              width="70%" // SVG covers 70% of the background width
              zIndex="0"
            >
              <Image src={"./assets/VMukti_Brochure_O2_2.png"} alt="" width="100%" opacity="0.8" />
            </Box>

            <Text
              fontSize={{ base: '20px', md: '36px' }}
              fontWeight="700"
              color="#000"
              maxWidth={'90%'}
              textAlign="flex-start"
              width={'100%'}
              mt="1%"
            >
              Key Applications
            </Text>

            {content.keyApplications.map((card, index) => (
              <Box
                key={index}
                width={{ base: '100%', md: '48%' }} // Responsive: 1-column mobile, 2-column desktop
                maxWidth="645px"
                flexShrink="0"
                gap="2"
                // borderRadius="24px"
                // padding="2%"
                display="flex"
                flexDirection="column"
                // marginBottom="5%"
                zIndex={1}
              >
                {/* Grey Placeholder */}
                <Image
                  src={card.image}
                  alt={card.image_alt}
                  width="100%"
                  height={{ base: '200px', md: '368px' }}
                  backgroundColor="#E7E7E7"
                  borderRadius="24px"
                  flexShrink="0"
                // marginBottom="16px"
                />

                {/* Title */}
                <Text
                  color="#000"
                  fontSize={{ base: '12px', md: '16px' }}
                  fontWeight="700"
                  textAlign="left"
                >
                  {card.title}
                </Text>

                {/* Blue Dash */}
                <Box
                  width="18px"
                  height="3px"
                  borderRadius="2px"
                  // marginTop="5px"
                  backgroundColor="#3F77A5"
                  alignSelf="flex-start"
                />

                {/* Description */}
                <Text
                  color="#696969"
                  fontSize={{ base: '12px', md: '14px' }}
                  fontWeight="500"
                  textAlign="left"
                // marginTop="10px"
                >
                  {card.description}
                </Text>
              </Box>
            ))}
          </Flex>
          {/* </Flex> */}

          {/* Key Benefits Section */}
          <Box
            width="100%"
            backgroundColor="#3F77A5"
            borderRadius="24px"
            flexShrink="0"
            marginTop="40px"
            padding="24px"
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Key Benefits Title */}
            <Text
              color="#FFF"
              fontSize="36px"
              fontWeight="600"

              textAlign={{ base: 'center', md: 'left' }}
              marginBottom={{ base: '16px', md: '0' }}
            >
              Key Benefits
            </Text>

            {/* Benefits Grid */}
            <Flex
              flex="1"
              justifyContent="space-evenly"
              alignItems="center"
              flexWrap="wrap"
              gap="20px"
            >
              {content.keyBenefits.map((benefit, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  width={{ base: '50%', md: 'auto' }}
                  maxWidth="160px" // Controls text wrapping for two lines
                >
                  {/* SVG Icon */}
                  <Box
                    // width="40px"
                    // height="40px"
                    // backgroundColor="white"
                    // borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start" // Aligns icon to the left
                  // paddingLeft="8px" // Adds slight spacing from the edge
                  >
                    <Image src={benefit.svg} alt={benefit.title} />
                  </Box>
                  <Text
                    color="#FFF"
                    fontSize="16px"
                    fontWeight="500"
                    width="190px"
                    lineHeight="1.2"
                    textAlign="left"
                    mt="5%"
                    wordBreak="break-word" // or "break-all"
                    overflowWrap="break-word"
                  >
                    {benefit.title}
                  </Text>{' '}
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
              height={{ base: '40px', md: '50px' }} // Responsive height
              minWidth="146px" // Minimum width to fit content
              backgroundColor="white"
              color="#3F77A5"
              fontSize="14px"
              fontWeight="600"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="8px 16px" // Padding for better spacing
              gap="8px" // Space between text and icon
              zIndex="2"
              _hover={{ backgroundColor: '#f0f0f0' }}
            >
              All Industries
              <svg
                style={{
                  width: '1em',
                  height: '1em',
                  minWidth: '14px',
                  minHeight: '14px',
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
  )
}

export default IndustryContent
