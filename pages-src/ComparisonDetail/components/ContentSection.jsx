'use client';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ArrowSVG = () => (
  <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.0506 32.9974C31.7073 32.9695 33.0275 31.6038 32.9996 29.9472L32.5437 2.95106C32.5158 1.29445 31.1501 -0.0258317 29.4935 0.00214148C27.8369 0.0301142 26.5166 1.39575 26.5446 3.05236L26.9498 27.0489L2.9532 27.4541C1.29658 27.4821 -0.0236974 28.8477 0.0042758 30.5044C0.0322485 32.161 1.39788 33.4813 3.0545 33.4533L30.0506 32.9974ZM5 5.82812L2.9148 7.98496L27.9148 32.1547L30 29.9979L32.0852 27.841L7.0852 3.67129L5 5.82812Z"
      fill="#3F77A5"
    />
  </svg>
);

const ContentSection = ({ sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <Box
      maxW="1446px"
      mx="auto"
      px={{ base: '16px', md: '32px' }}
      py={{ base: '40px', md: '56px' }}
    >
      <Flex direction="column" gap={{ base: '48px', md: '72px' }} >
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              bg="white"
                padding={{ base: '24px', md: '32px' }}
                borderRadius="20px"
            >
              {/* Main content area */}
              <Flex
                direction={{ base: 'column', lg: 'row' }}
                gap={{ base: '20px', lg: '18px' }}
                mb={{ base: '24px', md: '30px' }}
              >
                {/* Left side - two stacked containers */}
                <Flex
                  direction="column"
                  gap={{ base: '16px', md: '20px' }}
                  w={{ base: '100%', lg: '562px' }}
                  flexShrink={0}
                >
                  {/* Top container - Title + Description */}
                  <Box
                    bg="#F3F3F3"
                    borderRadius="24px"
                    p={{ base: '24px', md: '32px', lg: '36px' }}
                    minH={{ base: 'auto', lg: '360px' }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Heading
                      as="h2"
                      fontFamily="'WixMadeforDisplay', sans-serif"
                      fontWeight="500"
                      fontSize={{ base: '28px', md: '34px', lg: '40px' }}
                      lineHeight="1.1"
                      letterSpacing="0"
                      color="#1A1A1A"
                      mb={{ base: '16px', md: '20px' }}
                    >
                      {section.title}
                    </Heading>

                    {/* Arrow */}
                    <Box mb={{ base: '16px', md: '20px' }}>
                      <ArrowSVG />
                    </Box>

                    <Text
                      fontFamily="'WixMadeforDisplay', sans-serif"
                      fontWeight="400"
                      fontSize={{ base: '14px', md: '15px', lg: '16px' }}
                      lineHeight="1.6"
                      letterSpacing="0"
                      color="#333"
                    >
                      {section.content}
                    </Text>
                  </Box>

                  {/* Bottom container - Key Features */}
                  {section.features && section.features.length > 0 && (
                    <Box
                      bg="#BECEDC"
                      borderRadius="24px"
                      p={{ base: '24px', md: '32px', lg: '36px' }}
                      minH={{ base: 'auto', lg: '302px' }}
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                    >
                      <Text
                        fontFamily="'WixMadeforDisplay', sans-serif"
                        fontWeight="700"
                        fontSize={{ base: '16px', md: '18px' }}
                        lineHeight="1.3"
                        color="#1A1A1A"
                        mb={{ base: '14px', md: '18px' }}
                      >
                        Key Features:
                      </Text>

                      <Flex direction="column" gap={{ base: '8px', md: '10px' }}>
                        {section.features.map((feature, i) => (
                          <Flex key={i} align="flex-start" gap="10px">
                            <Box
                              flexShrink={0}
                              w="6px"
                              h="6px"
                              borderRadius="50%"
                              bg="#1A1A1A"
                              mt="8px"
                            />
                            <Text
                              fontFamily="'WixMadeforDisplay', sans-serif"
                              fontWeight="500"
                              fontSize={{ base: '14px', md: '16px' }}
                              lineHeight="1.5"
                              color="#1A1A1A"
                            >
                              {feature}
                            </Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Box>
                  )}
                </Flex>

                {/* Right side - Image */}
                <Box
                  flex="1"
                  borderRadius="24px"
                  overflow="hidden"
                  minH={{ base: '300px', lg: '682px' }}
                  position="relative"
                >
                  <Image
                    src={section.image || '/assets/home_solution_3.png'}
                    alt={section.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 1024px) 100vw, 820px"
                  />
                </Box>
              </Flex>

              {/* Bottom stats row */}
              {section.stats && section.stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Flex
                    justify="center"
                    align="center"
                    maxW="781px"
                    mx="auto"
                    py={{ base: '16px', md: '20px' }}
                  >
                    {section.stats.map((stat, i) => (
                      <Flex
                        key={i}
                        flex="1"
                        direction="column"
                        align="center"
                        borderLeft={i > 0 ? '1px solid #3F77A5' : 'none'}
                        px={{ base: '8px', md: '16px' }}
                      >
                        <Text
                          fontFamily="'WixMadeforDisplay', sans-serif"
                          fontWeight="700"
                          fontSize={{ base: '20px', md: '28px', lg: '32px' }}
                          lineHeight="1.2"
                          color="#3F77A5"
                          textAlign="center"
                        >
                          {stat.value}
                        </Text>
                        <Text
                          fontFamily="'WixMadeforDisplay', sans-serif"
                          fontWeight="400"
                          fontSize={{ base: '13px', md: '16px' }}
                          lineHeight="1.4"
                          color="#1A1A1A"
                          textAlign="center"
                        >
                          {stat.label}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </motion.div>
              )}
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default ContentSection;
