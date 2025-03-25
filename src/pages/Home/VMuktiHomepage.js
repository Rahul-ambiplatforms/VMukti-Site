import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

import Navbar from '../../components/Navbar'
import AdvancedComputerVision from '../../components/AdvancedComputerVision'

import VideoAnalytics from './VideoAnalytics'
import Achieved from './Achieved'
import Diagram from './Diagram'
import Industries from './industriesData'
import AdvancedSurveillance from './AdvancedSurveillance'
import TechnologyDashboard from '../Technology/TechnologyDashboard'

const VMuktiHomepage = () => {
  const customData = {
    title1: 'IoT Integration & Secure Connectivity for',
    title2: 'Smart Surveillance',
    subtitle: 'Real-Time Monitoring',
    description:
      'IoT-enabled cameras and sensors continuously track environmental changes and security events.',
    cards: [
      {
        type: 'image',
        label: 'Multi-Modal Recognition',
        media: '/assets/car.png', // Dummy image URL
      },
      { type: 'text', label: 'Custom Scene Understanding' },
      { type: 'text', label: 'Custom Multi-Modal Recognition' },
      { type: 'text', label: 'Custom Automated Decision Making' },
    ],
    backgroundImage: "/assets/VMukti Brochure O2 1.png",
  };

  const ellipseSize = useBreakpointValue({
    base: '200px',
    md: '300px',
    lg: '408px',
  })
  return (
    <Box minH="100vh" bg="#f3f3f3" overflow="hidden" position="relative">
      <Image
        src={'/assets/Ellipse38.png' || '/placeholder.svg'}
        alt="ellipse38"
        position="absolute"
        left="0"   // Align to the left edge of the screen
        top="0"    // Align to the top edge of the screen
        transform="none"  // Remove unwanted translations
        width={ellipseSize}
        opacity="1"
        pointerEvents="none"
        zIndex="0"
      />

      <Flex
        position="absolute"
        top="4%"
        left="35%"
        transform="translateX(-50%)"
        gap={4}
        zIndex={0}
        width="100%"
        justifyContent="center"
        pt="10vh"
      >
        <Box
          height={{ base: "80px", md: "140px", lg: "188px" }} minHeight="50px"
          aspectRatio="1/1"
          bg="#BECEDC"
          borderRadius="24px"
          opacity="0.7"
          mt={{ base: "80px", md: "160px", lg: "240px" }}

        />
        <Box
          height={{ base: "80px", md: "140px", lg: "188px" }} minHeight="50px"
          aspectRatio="1/1"
          bg="#EAEAEA"
          borderRadius="24px"
          opacity="0.7"
          mt={{ base: "40px", md: "80px", lg: "120px" }}
        />
        <Box
          height={{ base: "80px", md: "140px", lg: "188px" }} minHeight="50px"
          aspectRatio="1/1"
          bg="#3F77A5"
          borderRadius="24px"
          opacity="0.7"
        />
      </Flex>

      {/* Main Content */}
      <Flex
        pl={{ base: '1%', md: '2.5%' }}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        h="100%" // Ensure the content fits within the viewport
        position="relative"
        zIndex={1}
      >
        {/* Left Side */}
        <Image src="/assets/tablet.png" position="absolute" right="0px" zIndex={1} />
        <Box
          flex="1"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: "center", md: "right" }}
          minH={{ base: "40vh", md: "80vh" }}
          zIndex={1}
        >


          <Box
            fontSize={{ base: "48px", md: "75px", lg: "100px" }} // Reduced font sizes
            fontWeight="600"
            textStyle="normal"
            // letterSpacing="-1px"
            textAlign={{ base: "center", md: "left" }}
            zIndex={1}
            mt={{ base: "20px", md: "40px" }} // Added top margin to push the text lower
          >
            <Text as="span" color="#000">
              Unlocking the{' '}
            </Text>
            <Text as="span" color="#3F77A5">
              Power of
            </Text>
            <br />
            <Text as="span" color="#3F77A5">Data</Text>
            <Text as="span" color="#000"> with </Text>
            <Text as="span" color="#DB7B3A">AI.</Text>
          </Box>
          <Flex mt="16px" align="flex-start" direction={{ base: "column", md: "row" }}>
            <Box
              display="flex"
              gap="10"
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
              {/* Reduced size */}
              <Text
                color="#4a5568"
                maxW={{ base: '90%', md: '60%' }} // Reduced max width
                ml={{ base: '0', md: '8px' }}
                fontSize={{ base: '14px', md: '16px' }} // Reduced font size
              >
                We harness AI to optimize operations, drive efficiency, and
                deliver real-time insights across industries.
              </Text>
            </Box>
            {/* </Flex> */}
          </Flex>

          <Flex position="relative" mt={{ base: "10px", md: "-8%" }} ml={{ base: "0", md: "-40px" }} alignItems="center">
            <Image
              src="/assets/robohand.png"
              alt="Robotic Hand"
              w={{ base: '80%', md: '500px' }} // Reduced image size
              h={{ base: 'auto', md: '500px' }}
            />

            {/* Book Demo Button */}
            <Button
              position="absolute"
              top={{ base: "35%", md: "180px" }} // Moved the button upward
              left={{ base: "65%", md: "300px" }} // Adjusted position
              transform={{ base: "translateX(-50%)", md: "none" }}
              bg="white"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              borderRadius="full"
              px="16px" // Reduced padding
              py="8px"
              color="#3182ce"
              fontWeight="500"
              gap="2"
              fontSize={{ base: '12px', md: '14px' }} // Reduced font size
            >
              Book Demo
              {/* <img
                src="/assets/arrowuprb.svg"
                alt="Arrow Up"
                width="12px"
                height="12px"
              />{' '} */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                  fill="#3F77A5"
                />
              </svg>
              {/* Reduced size */}
            </Button>
          </Flex>
        </Box>
      </Flex>
      <AdvancedComputerVision />
      <VideoAnalytics />
      <AdvancedComputerVision {...customData} />
      <Diagram />
      <Industries />
      <AdvancedSurveillance />
      <Achieved />
    </Box>
  )
}

export default VMuktiHomepage