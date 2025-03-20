import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

import Navbar from '../../components/Navbar';
import AdvancedComputerVision from '../../components/AdvancedComputerVision ';
import NewsletterSubscription from './NewsletterSubscription';
import VideoAnalytics from './VideoAnalytics';
import Achieved from './Achieved'
import Diagram from './Diagram'
import Industries from './industriesData';
import AdvancedSurveillance from './AdvancedSurveillance';
import TechnologyDashboard from '../Technology/TechnologyDashboard'

const VMuktiHomepage = () => {
  const customData = {
    title1: "IoT Integration & Secure Connectivity for",
    title2: "Smart Surveillance",
    subtitle: "Real-Time Monitoring",
    description: "IoT-enabled cameras and sensors continuously track environmental changes and security events.",
    cards: [
      {
        type: 'image',
        label: 'Multi-Modal Recognition',
        media: "/assets/car.png", // Dummy image URL
      },
      { type: 'text', label: 'Custom Scene Understanding' },
      { type: 'text', label: 'Custom Multi-Modal Recognition' },
      { type: 'text', label: 'Custom Automated Decision Making' },
    ],
    backgroundImage: "/assets/VMukti Brochure O2 1.png",
  };


  return (
    <Box minH="100vh" bg="#f4f4f4" overflow="hidden">
      {/* Navigation Bar */}
      <Flex p={{ base: "10px", md: "20px" }}>
        {/* <Navbar /> */}
      </Flex>

      {/* Main Content */}
      <Flex
        pl={{ base: "10px", md: "20px" }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        h="100vh" // Ensure the content fits within the viewport
      >
        {/* Left Side */}
        <Box
          flex="1"
          bgImage="url('/assets/tablet.png')"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: "center", md: "right" }}
          minH={{ base: "40vh", md: "80vh" }}
        >
          <Text
            fontSize={{ base: "24px", md: "48px", lg: "80px" }} // Reduced font sizes
            fontWeight="600"
            letterSpacing="-1px"
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: "20px", md: "80px" }} // Added top margin to push the text lower
          >
            <Text as="span" color="#000">Unlocking the </Text>
            <Text as="span" color="#3F77A5">Power of</Text>
            <br />
            <Text as="span" color="#3F77A5">Data</Text>
            <Text as="span" color="#000"> with </Text>
            <Text as="span" color="#DB7B3A">AI.</Text>
          </Text>
          <Flex mt="16px" align="flex-start" direction={{ base: "column", md: "row" }}>
            <Box>
              <img src="/assets/arrowdb.svg" alt="Arrow Up" width="40px" height="40px" /> {/* Reduced size */}
            </Box>
            {/* <Flex mt="16px" align="flex-start" direction={{ base: "column", md: "row" }}> */}
            <Text
              color="#4a5568"
              maxW={{ base: "90%", md: "400px" }} // Reduced max width
              ml={{ base: "0", md: "8px" }}
              fontSize={{ base: "14px", md: "16px" }} // Reduced font size
            >
              We harness AI to optimize operations, drive efficiency, and deliver real-time insights across industries.
            </Text>
            {/* </Flex> */}
          </Flex>

          <Box position="relative" mt={{ base: "10px", md: "-40px" }} ml={{ base: "0", md: "-40px" }}>
            <Image
              src="/assets/robohand.png"
              alt="Robotic Hand"
              w={{ base: "80%", md: "500px" }} // Reduced image size
              h={{ base: "auto", md: "500px" }}
            />

            {/* Book Demo Button */}
            <Button
              position="absolute"
              top={{ base: "10px", md: "180px" }} // Moved the button upward
              left={{ base: "50%", md: "300px" }} // Adjusted position
              transform={{ base: "translateX(-50%)", md: "none" }}
              bg="white"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              borderRadius="full"
              px="16px" // Reduced padding
              py="8px"
              color="#3182ce"
              fontWeight="500"
              gap="2"
              fontSize={{ base: "12px", md: "14px" }} // Reduced font size
            >
              Book Demo
              <img src="/assets/arrowuprb.svg" alt="Arrow Up" width="12px" height="12px" /> {/* Reduced size */}
            </Button>
          </Box>
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
  );
};

export default VMuktiHomepage;