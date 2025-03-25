import React, { useState } from 'react'
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'

import Navbar from '../../components/Navbar'
import AdvancedComputerVision from '../../components/AdvancedComputerVision '

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
    backgroundImage: '/assets/VMukti Brochure O2 1.png',
  }

  const ellipseSize = useBreakpointValue({
    base: '200px',
    md: '300px',
    lg: '408px',
  })

  const buttonWidth = useBreakpointValue({
    base: '120px',
    md: '130px',
    lg: '146px',
  })
  const buttonHeight = useBreakpointValue({
    base: '40px',
    md: '45px',
    lg: '50px',
  })

  return (
    <Box minH="100vh" bg="#f3f3f3" overflow="hidden" position="relative">
      {/* Background Boxes */}
      <Image
        src={'/assets/Ellipse38.png' || '/placeholder.svg'}
        alt="ellipse38"
        position="absolute"
        left="0" // Align to the left edge of the screen
        top="0" // Align to the top edge of the screen
        transform="none" // Remove unwanted translations
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
          height={{ base: '80px', md: '140px', lg: '188px' }}
          minHeight="50px"
          aspectRatio="1/1"
          bg="#BECEDC"
          borderRadius="24px"
          opacity="0.7"
          mt={{ base: '80px', md: '160px', lg: '240px' }}
        />
        <Box
          height={{ base: '80px', md: '140px', lg: '188px' }}
          minHeight="50px"
          aspectRatio="1/1"
          bg="#EAEAEA"
          borderRadius="24px"
          opacity="0.7"
          mt={{ base: '40px', md: '80px', lg: '120px' }}
        />
        <Box
          height={{ base: '80px', md: '140px', lg: '188px' }}
          minHeight="50px"
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
        <Image
          src="/assets/tablet.png"
          position="absolute"
          right="0px"
          zIndex={1}
        />
        <Box
          flex="1"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: 'center', md: 'right' }}
          minH={{ base: '40vh', md: '80vh' }}
          zIndex={1}
        >
          <Box
            fontSize={{ base: '24px', md: '48px', lg: '75px' }} // Reduced font sizes
            fontWeight="550"
            textStyle="normal"
            // letterSpacing="-1px"
            textAlign={{ base: 'center', md: 'left' }}
            zIndex={1}
            mt={{ base: '20px', md: '40px' }} // Added top margin to push the text lower
          >
            <Text as="span" color="#000">
              Unlocking the{' '}
            </Text>
            <Text as="span" color="#3F77A5">
              Power of
            </Text>
            <br />
            <Text as="span" color="#3F77A5">
              Data
            </Text>
            <Text as="span" color="#000">
              {' '}
              with{' '}
            </Text>
            <Text as="span" color="#DB7B3A">
              AI.
            </Text>
          </Box>
          <Flex
            mt="16px"
            align="flex-start"
            direction={{ base: 'column', md: 'row' }}
          >
            <Box>
              {/* <img
                src="/assets/arrowdb.svg"
                alt="Arrow Up"
                width="40px"
                height="40px"
              />{' '} */}
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
            </Box>
            <Text
              color="#4a5568"
              maxW={{ base: '90%', md: '400px' }} // Reduced max width
              ml={{ base: '0', md: '8px' }}
              fontSize={{ base: '14px', md: '16px' }} // Reduced font size
            >
              We harness AI to optimize operations, drive efficiency, and
              deliver real-time insights across industries.
            </Text>
            {/* </Flex> */}
          </Flex>

          <Flex
            position="relative"
            mt={{ base: '10px', md: '-40px' }}
            ml={{ base: '0', md: '-40px' }}
            alignItems="center"
          >
            <Image
              src="/assets/robohand.png"
              alt="Robotic Hand"
              w={{ base: '80%', md: '500px' }} // Reduced image size
              h={{ base: 'auto', md: '500px' }}
            />

            <Button
              position="absolute"
              top={{ base: '35%', md: '180px' }} // Keeps the original position
              left={{ base: '65%', md: '300px' }} // Keeps the original position
              transform={{ base: 'translateX(-50%)', md: 'none' }}
              width={buttonWidth} // Imported width
              height={buttonHeight} // Imported height
              justifyContent="space-between"
              alignItems="center"
              bg="white"
              gap="4%"
              color="#3F77A5"
              borderRadius="20px"
              _hover={{ bg: '#2c5a7a' }}
              px={{ base: '12px', md: '15px', lg: '20px' }}
              flexShrink={0}
              ml={{ base: '5px', md: '10px', lg: '15px' }}
            >
              Book Demo
              <svg
                width={{ base: '100%', md: '14' }}
                height={{ base: '100%', md: '14' }}
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
      </Flex>
      <AdvancedComputerVision />
      <VideoAnalytics />
      <AdvancedComputerVision {...customData} />
      <Diagram />
      <Industries />
      <AdvancedSurveillance />
      <Achieved />
      {/* <NewsletterSubscription /> */}
      {/* <TechnologyDashboard /> */}
    </Box>
  )
}

export default VMuktiHomepage
