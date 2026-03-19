'use client';

import { Box, Text, Button, Flex, CloseButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

/**
 * Sticky Demo Banner - Shows at bottom of screen after scrolling 50% of page
 * Drives blog readers to book a demo
 */
export default function StickyDemoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="#1B3A5C"
      color="white"
      py="12px"
      px="20px"
      zIndex="1000"
      boxShadow="0 -4px 20px rgba(0,0,0,0.15)"
      transform={isVisible ? 'translateY(0)' : 'translateY(100%)'}
      transition="transform 0.3s ease"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        gap="16px"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <Text
          fontSize={{ base: '13px', md: '15px' }}
          fontWeight="500"
          flex="1"
        >
          See how VMukti&apos;s 26+ AI models can transform your enterprise video surveillance.
        </Text>

        <Flex gap="12px" align="center" flexShrink={0}>
          <Link href="/book-a-demo">
            <Button
              bg="#3F77A5"
              color="white"
              size="sm"
              fontSize="14px"
              fontWeight="600"
              borderRadius="6px"
              px="20px"
              _hover={{ bg: '#4d8ab8' }}
            >
              Book Demo
            </Button>
          </Link>
          <CloseButton
            size="sm"
            color="white"
            onClick={() => setIsDismissed(true)}
            opacity="0.7"
            _hover={{ opacity: 1 }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
