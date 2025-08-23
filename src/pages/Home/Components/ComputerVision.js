import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Content is managed in this array. Add new objects here to create new buttons and content slides.
const computerVisionSteps = [
  {
    heading: 'Data Input',
    content:
      'Input raw data (e.g., images, videos, live link) from relevant sources like surveillance feeds, cloud server, physical storage, etc).',
    image: './assets/ComputerVision1.png', // Placeholder image, replace with your actual asset
  },
  {
    heading: 'Model Selection',
    content:
      'Choose from a variety of pre-trained models or bring your own to best suit the specific requirements of your computer vision task.',
    image: './assets/ComputerVision1.png',
  },
  {
    heading: 'API Wrapping',
    content:
      'Our platform automatically wraps the selected model in a high-performance, scalable API, making it ready for integration.',
    image: './assets/ComputerVision1.png',
  },
  {
    heading: 'Integration',
    content:
      'Seamlessly integrate the API into your existing applications, workflows, and systems with our comprehensive documentation.',
    image: './assets/ComputerVision1.png',
  },
  {
    heading: 'Deployment',
    content:
      'Deploy the final solution to the cloud or on-premise infrastructure with our tools, ensuring reliability and high availability.',
    image: './assets/ComputerVision1.png',
  },
  // To test the row-wrapping logic, you can uncomment this 6th item
//   {
//     heading: 'Monitoring',
//     content:
//       'Continuously monitor the performance and accuracy of the deployed model, with options for retraining and updates.',
//     image: './assets/ComputerVision1.png',
//   },
];

const ComputerVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  
  // Animation variants for the slider effect
  const variants = {
    enter: {
      x: 100,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: -100,
      opacity: 0,
    },
  };

  return (
    <Box>
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h1"  fontSize="48px" fontWeight="500">
          Explore Our{' '}
          <Text as="span" color="#3F77A5" fontWeight="500">
            Computer Vision Roadmap
          </Text>
        </Heading>
        <Heading as="h2"  fontSize="48px" fontWeight="500" mt={-4}>
          and{' '}
          <Text as="span" color="#f5a623">
            API Strategy
          </Text>
        </Heading>
        <Text color="#000" fontSize="16px" fontWeight="500" w="95%">   
          We handle the complete lifecycle from data collection to computer vision models selection, API development to full system integration and final deployment. Our goal is to deliver high-performance AI computer vision solutions through reliable and scalable APIs built to meet your unique needs.
        </Text>
      </VStack>

        <Box bg="white" px={{ base: 4, md: 8 }} py={{ base: 4, md: 4 }} borderRadius="24px">
          <Flex
            justify="center"
            wrap="nowrap"
            mb={8}
            maxW={{ base: "100%", lg: "75%" }}
            mx="auto"
          >
            {computerVisionSteps.map((step, index) => (
              <Button
                key={step.heading}
                onClick={() => handleButtonClick(index)}
                bg={activeIndex === index ? '#3F77A5' : '#e8e8e8'}
                color={activeIndex === index ? 'white' : 'black'}
                _hover={{
                  bg: activeIndex === index ? '#3F77A5' : '#dcdcdc',
                }}
                m={2}
                px={8}
                py={6}
                borderRadius="full"
                fontSize="md"
                fontWeight="medium"
                transition="background-color 0.2s ease-in-out"
                w="170px"
              >
                {step.heading}
              </Button>
            ))}
          </Flex>
          
          <Box position="relative" h={{ base: "auto", md: "600px" }} overflow="hidden">
            <AnimatePresence initial={false}>
                <motion.div
                  key={activeIndex}
                  variants={variants} 
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 100, damping: 20 },
                    opacity: { duration: 0 },
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                  }}
                >
                    <VStack spacing={6} align="center" textAlign="center">
                      <Text fontSize="lg" color="#444444" maxW="xl">
                        {computerVisionSteps[activeIndex].content}
                      </Text>
                      <Box
                        w="full"
                        h={{ base: "200px", md: "500px" }}
                        bg="#0e2d47"
                        borderRadius="24px"
                        overflow="hidden"
                      >
                        <Image
                          src={computerVisionSteps[activeIndex].image}
                          alt={computerVisionSteps[activeIndex].heading}
                          objectFit="contain"
                          w="full"
                          h="full"
                        />
                      </Box>
                    </VStack>
                </motion.div>
            </AnimatePresence>
          </Box>

        </Box>
    </Box>
  );
};

export default ComputerVision;