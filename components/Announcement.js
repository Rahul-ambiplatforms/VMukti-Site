'use client';
import React, { useState } from 'react';
import { Box, Flex, Text, CloseButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Flex
      bg="#1A365D"
      height={{ base: "40px", md: "44px" }}
      width="100%"
      align="center"
      justify="center"
      position="fixed"
      top={{ base: "56px", md: "80px" }}
      zIndex="999"
      px={4}
    >
      <Flex
        align="center"
        justify="center"
        gap={{ base: 2, md: 4 }}
        maxW="1200px"
        w="100%"
      >
        <Text
          fontSize={{ base: "11px", md: "14px" }}
          color="white"
          fontWeight="400"
          textAlign="center"
          noOfLines={1}
        >
          India Surveillance Market 2026: 140+ data points on AI-powered security trends.
        </Text>
        <Box
          as={RouterLink}
          to="/blog"
          bg="#3F77A5"
          color="white"
          fontSize={{ base: "10px", md: "13px" }}
          fontWeight="600"
          px={{ base: 3, md: 5 }}
          py={{ base: "4px", md: "6px" }}
          borderRadius="6px"
          whiteSpace="nowrap"
          _hover={{ bg: "#4A8BC2", textDecoration: "none" }}
          transition="background 0.2s"
        >
          Read the Report
        </Box>
      </Flex>
      <CloseButton
        color="whiteAlpha.700"
        size="sm"
        position="absolute"
        right={{ base: 1, md: 3 }}
        onClick={() => setIsVisible(false)}
        _hover={{ color: "white" }}
      />
    </Flex>
  );
};

export default Announcement;
