'use client';

import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';
import Link from 'next/link';

/**
 * Blog CTA Banner - Appears at the end of every blog post
 * Drives readers to book a demo or contact sales
 */
export default function BlogCTA() {
  return (
    <Box
      bg="linear-gradient(135deg, #1B3A5C 0%, #2E6DA4 100%)"
      borderRadius="16px"
      p={{ base: '32px 24px', md: '48px 40px' }}
      my="48px"
      mx="auto"
      maxW="800px"
      textAlign="center"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top="0"
        right="0"
        width="200px"
        height="200px"
        bg="rgba(255,255,255,0.05)"
        borderRadius="50%"
        transform="translate(50%, -50%)"
      />

      <VStack spacing="16px">
        <Heading
          as="h3"
          fontSize={{ base: '22px', md: '28px' }}
          fontWeight="700"
          lineHeight="1.3"
        >
          Ready to See VMukti in Action?
        </Heading>

        <Text
          fontSize={{ base: '15px', md: '17px' }}
          opacity="0.9"
          maxW="600px"
          lineHeight="1.6"
        >
          Get a personalized demo of our Cloud VMS with 26+ AI analytics models.
          See how enterprises across 50+ countries use VMukti to transform their
          video surveillance operations.
        </Text>

        <Flex
          gap="16px"
          mt="8px"
          direction={{ base: 'column', sm: 'row' }}
          align="center"
        >
          <Link href="/book-a-demo">
            <Button
              bg="white"
              color="#1B3A5C"
              size="lg"
              fontSize="16px"
              fontWeight="600"
              borderRadius="8px"
              px="32px"
              _hover={{ bg: '#f0f4f8', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Book Your Free Demo
            </Button>
          </Link>

          <Link href="/contact-us">
            <Button
              variant="outline"
              borderColor="white"
              color="white"
              size="lg"
              fontSize="16px"
              fontWeight="600"
              borderRadius="8px"
              px="32px"
              _hover={{ bg: 'rgba(255,255,255,0.1)', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Contact Sales
            </Button>
          </Link>
        </Flex>

        <Text fontSize="13px" opacity="0.7" mt="8px">
          900+ enterprise deployments | STQC & ISO 27001 certified | Camera-agnostic platform
        </Text>
      </VStack>
    </Box>
  );
}
