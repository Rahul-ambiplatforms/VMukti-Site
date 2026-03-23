'use client';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function SharedCTABanner({
  title = "Ready to Transform Your Enterprise Security?",
  subtitle = "Join 900+ enterprises worldwide using VMukti's AI-powered surveillance platform.",
  wrapperBg = 'transparent',
  wrapperPx = { base: '16px', md: '33px' },
  wrapperPb,
  wrapperMb,
}) {
  return (
    <Box
      bg={wrapperBg}
      px={wrapperPx}
      pb={wrapperPb}
      mb={wrapperMb}
      maxW="1512px"
      mx="auto"
    >
      <Flex
        bg="#3F77A5"
        borderRadius={{ base: '16px', md: '20px' }}
        px={{ base: '20px', sm: '28px', md: '48px' }}
        py={{ base: '24px', md: '28px', lg: '32px' }}
        align={{ base: 'flex-start', md: 'center' }}
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: '20px', md: '24px' }}
        flexWrap="wrap"
      >
        {/* Left Text */}
        <Box flex="1" minW="0">
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="500"
            fontSize={{ base: '1rem', sm: '1.125rem', md: '1.375rem', lg: '1.75rem' }}
            lineHeight="1.3"
            color="#FFFFFF"
            mb="6px"
          >
            {title}
          </Text>
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="500"
            fontSize={{ base: '0.75rem', sm: '0.8125rem', md: '0.875rem', lg: '0.9375rem' }}
            lineHeight="1.5"
            color="rgba(255,255,255,0.85)"
          >
            {subtitle}
          </Text>
        </Box>

        {/* Right Buttons */}
        <Flex gap={{ base: '10px', md: '12px' }} flexShrink={0} flexWrap="wrap">
          <Link href="/contact-us">
            <Button
              bg="white"
              color="#3F77A5"
              borderRadius="999px"
              px={{ base: '16px', md: '24px' }}
              h={{ base: '38px', md: '44px' }}
              fontSize={{ base: '0.8125rem', md: '0.9375rem' }}
              fontWeight="600"
              _hover={{ bg: '#f0f8ff', transform: 'translateY(-1px)' }}
              transition="all 0.2s ease"
            >
              Contact Us
            </Button>
          </Link>
          <Link href="/book-a-demo">
            <Button
              bg="white"
              color="#3F77A5"
              borderRadius="999px"
              px={{ base: '16px', md: '24px' }}
              h={{ base: '38px', md: '44px' }}
              fontSize={{ base: '0.8125rem', md: '0.9375rem' }}
              fontWeight="600"
              gap="8px"
              _hover={{ bg: '#f0f8ff', transform: 'translateY(-1px)' }}
              transition="all 0.2s ease"
            >
              Book Demo
              <svg width="13" height="13" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z" fill="#3F77A5" />
              </svg>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
