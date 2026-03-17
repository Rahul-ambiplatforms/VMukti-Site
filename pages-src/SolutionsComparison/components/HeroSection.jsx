'use client';
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const CERTIFICATIONS = ['STQC Certified', 'ISO 9001:2015', 'BIS', 'CE', 'FCC'];

const HeroSection = () => {
  return (
    <Box
      bg="#3F77A5"
      borderBottomLeftRadius="24px"
      borderBottomRightRadius="24px"
      w="100%"
      minH={{ base: 'auto', md: '493px' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '60px', md: '80px' }}
      pb={{ base: '48px', md: '72px' }}
    >
      <Box textAlign="center" px={{ base: '16px', md: '32px' }}>

        {/* H1 — 814×162, top:155, font 64px SemiBold, lh 100% */}
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
            fontSize={{ base: '36px', md: '52px', lg: '64px' }}
            lineHeight="1"
            letterSpacing="0"
            color="white"
            maxW={{ base: '100%', lg: '814px' }}
            mx="auto"
            mb={{ base: '20px', md: '30px' }}
          >
            Enterprise VMS Platform Comparison 2026
          </Heading>
        </motion.div>

        {/* Subtitle — 844×30, top:337, font 24px Medium, lh 100% */}
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
            lineHeight="1"
            letterSpacing="0"
            color="white"
            maxW={{ base: '100%', lg: '844px' }}
            mx="auto"
            mb={{ base: '28px', md: '40px' }}
          >
            Make an informed decision. See how VMukti stacks up against the industry.
          </Text>
        </motion.div>

        {/* Certification badges — 850×31, top:399, each pill 162×27, bg:#BECEDC, radius:35px */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Flex
            justify="center"
            align="center"
            gap={{ base: '8px', md: '10px' }}
            flexWrap="wrap"
            maxW={{ base: '100%', lg: '900px' }}
            mx="auto"
            h={{ base: 'auto', md: '31px' }}
          >
            {CERTIFICATIONS.map((cert) => (
              <Box
                key={cert}
                w="166px"
                h="31px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="37px"
                bg="#BECEDC"
                border="2px solid white"
              >
                <Text
                  fontFamily="'WixMadeforDisplay', sans-serif"
                  fontWeight="500"
                  fontSize="13px"
                  color="#1A3A52"
                  whiteSpace="nowrap"
                >
                  {cert}
                </Text>
              </Box>
            ))}
          </Flex>
        </motion.div>

      </Box>
    </Box>
  );
};

export default HeroSection;
