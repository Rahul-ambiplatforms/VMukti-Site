'use client';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = ({ hero, meta }) => {
  const title = hero?.h1 || meta?.title || 'Comparison';
  // Extract short subtitle like "Enterprise VMS Comparison" from hero.subtitle
  // If subtitle is long, use a shorter version
  const subtitle = hero?.subtitle || '';

  return (
    <Box
      bg="#3F77A5"
      borderBottomLeftRadius="24px"
      borderBottomRightRadius="24px"
      w="100%"
      minH={{ base: 'auto', md: '420px' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '80px', md: '100px' }}
      pb={{ base: '48px', md: '72px' }}
    >
      <Box textAlign="center" px={{ base: '16px', md: '32px' }} maxW="1000px" mx="auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Heading
            as="h1"
            fontFamily="'WixMadeforDisplay', sans-serif"
            fontWeight="600"
            fontSize={{ base: '32px', md: '48px', lg: '60px' }}
            lineHeight="1.05"
            letterSpacing="0"
            color="white"
            mx="auto"
            mb={{ base: '16px', md: '20px' }}
          >
            {title}
          </Heading>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Text
            fontFamily="'WixMadeforDisplay', sans-serif"
            fontWeight="500"
            fontSize={{ base: '16px', md: '20px', lg: '24px' }}
            lineHeight="1.3"
            letterSpacing="0"
            color="white"
            mx="auto"
            mb={{ base: '28px', md: '40px' }}
          >
            {subtitle}
          </Text>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Flex
            justify="center"
            align="center"
            gap={{ base: '12px', md: '16px' }}
            flexWrap="wrap"
          >
            <Box
              as={Link}
              href="/book-a-demo"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              color="#3F77A5"
              fontFamily="'WixMadeforDisplay', sans-serif"
              fontWeight="600"
              fontSize={{ base: '14px', md: '16px' }}
              px={{ base: '28px', md: '36px' }}
              py={{ base: '12px', md: '14px' }}
              borderRadius="50px"
              border="2px solid white"
              _hover={{ bg: 'transparent', color: 'white' }}
              transition="all 0.25s ease"
              textDecoration="none"
            >
              Book A Demo
            </Box>
            <Box
              as={Link}
              href="/solution"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              bg="transparent"
              color="white"
              fontFamily="'WixMadeforDisplay', sans-serif"
              fontWeight="600"
              fontSize={{ base: '14px', md: '16px' }}
              px={{ base: '28px', md: '36px' }}
              py={{ base: '12px', md: '14px' }}
              borderRadius="50px"
              border="2px solid white"
              _hover={{ bg: 'white', color: '#3F77A5' }}
              transition="all 0.25s ease"
              textDecoration="none"
            >
              View All Solutions
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
