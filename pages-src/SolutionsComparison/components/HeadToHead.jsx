'use client';
import { useState } from 'react';
import { Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { useAppNavigate } from '../../../lib/useAppNavigate';

const CARDS = [
  {
    title: 'VMukti vs Milestone XProtect',
    points: [
      'Cloud-native vs legacy on-premise architecture',
      'Built-in AI vs third-party integrations',
      '60% lower TCO over 5 years',
    ],
    slug: 'vmukti-vs-milestone',
  },
  {
    title: 'VMukti vs Genetec Security Center',
    points: [
      'True multi-tenant cloud vs hybrid complexity',
      'Edge AI built-in vs server-dependent processing',
      'Faster deployment: days vs months',
    ],
    slug: 'vmukti-vs-genetec',
  },
  {
    title: 'VMukti vs Eagle Eye Networks',
    points: [
      'Advanced AI analytics vs basic cloud VMS',
      'Enterprise Command Center vs simple dashboard',
      'On-premise + cloud hybrid flexibility',
    ],
    slug: 'vmukti-vs-eagle-eye',
  },
  {
    title: 'VMukti vs Verkada',
    points: [
      'BYOC (any camera) vs proprietary hardware lock-in',
      'Edge + Cloud hybrid vs cloud-only',
      'Enterprise-grade vs SMB-focused',
    ],
    slug: 'vmukti-vs-verkada-vms',
  },
];

const CARDS_PER_PAGE = 4;

export default function HeadToHead() {
  const navigate = useAppNavigate();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(CARDS.length / CARDS_PER_PAGE);

  const visible = CARDS.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <Box
      maxW="1448px"
      mx="auto"
      px={{ base: '16px', md: '32px' }}
      mb={{ base: '40px', md: '64px' }}
    >
      <Box
        bg="#3F77A5"
        borderRadius={{ base: '16px', lg: '24px' }}
        px={{ base: '16px', md: '28px', lg: '40px' }}
        py={{ base: '24px', md: '32px', lg: '40px' }}
        minH={{ base: 'auto', lg: '524px' }}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '24px', lg: '32px' }}
          w="100%"
          align="flex-start"
        >

          {/* ── Left panel ── */}
          <Box
            flexShrink={0}
            w={{ base: '100%', lg: '300px' }}
            minH={{ base: 'auto', lg: '460px' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            color="white"
          >
            {/* Top content */}
            <Box>
              <Heading
                as="h2"
                fontFamily="'WixMadeforDisplay', sans-serif"
                fontWeight="500"
                fontSize={{ base: '28px', md: '34px', lg: '40px' }}
                lineHeight="1.1"
                letterSpacing="0"
                mb="16px"
                color="#FFFFFF"
              >
                Head-to-Head Comparisons
              </Heading>

              {/* Arrow SVG */}
              <Box mb="20px">
                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.0506 32.9974C31.7073 32.9695 33.0275 31.6038 32.9996 29.9472L32.5437 2.95106C32.5158 1.29445 31.1501 -0.0258317 29.4935 0.00214148C27.8369 0.0301142 26.5166 1.39575 26.5446 3.05236L26.9498 27.0489L2.9532 27.4541C1.29658 27.4821 -0.0236974 28.8477 0.0042758 30.5044C0.0322485 32.161 1.39788 33.4813 3.0545 33.4533L30.0506 32.9974ZM5 5.82812L2.9148 7.98496L27.9148 32.1547L30 29.9979L32.0852 27.841L7.0852 3.67129L5 5.82812Z" fill="white"/>
                </svg>
              </Box>

              <Text
                fontFamily="'WixMadeforDisplay', sans-serif"
                fontWeight="500"
                fontSize={{ base: '14px', md: '15px', lg: '16px' }}
                lineHeight="1.5"
                letterSpacing="0"
                color="#FFFFFF"
              >
                Dive deeper into how VMukti compares against each major competitor.
              </Text>
            </Box>

            {/* Nav buttons */}
            <Flex justify="flex-end" gap="10px" mt={{ base: '20px', lg: '32px' }}>
              {/* Prev */}
              {/* Prev */}
              <Box
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor={page === 0 ? 'not-allowed' : 'pointer'}
                onClick={() => page > 0 && setPage(page - 1)}
              >
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30.7692" height="30.7692" rx="5" fill="white"/>
                  <path d="M11.0763 14.7716L18.4609 22.1562L18.4609 7.38702L11.0763 14.7716Z" fill="#3F77A5"/>
                </svg>
              </Box>
              {/* Next */}
              <Box
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor={page === totalPages - 1 ? 'not-allowed' : 'pointer'}
                onClick={() => page < totalPages - 1 && setPage(page + 1)}
              >
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30.7656" y="30.7656" width="30.7692" height="30.7692" rx="5" transform="rotate(-180 30.7656 30.7656)" fill="white"/>
                  <path d="M19.6893 15.994L12.3047 8.60938L12.3047 23.3786L19.6893 15.994Z" fill="#3F77A5"/>
                </svg>
              </Box>
            </Flex>
          </Box>

          {/* ── Right: cards grid ── */}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: '16px', md: '20px', lg: '27px' }}
            flex="1"
          >
            {visible.map((card) => (
              <Box
                key={card.slug}
                w="100%"
                minH={{ base: 'auto', lg: '221px' }}
                bg="white"
                borderRadius="20px"
                p={{ base: '18px', md: '20px', lg: '24px' }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                {/* Card title */}
                <Box>
                  <Text
                    fontFamily="'WixMadeforDisplay', sans-serif"
                    fontWeight="700"
                    fontSize={{ base: '18px', md: '18px', lg: '24px' }}
                    lineHeight="1.3"
                    letterSpacing="0"
                    color="#3F77A5"
                    mb="10px"
                  >
                    {card.title}
                  </Text>

                  {/* Underline accent */}
                  <Box w="32px" h="2px" bg="#3F77A5" borderRadius="2px" mb="14px" />

                  {/* Bullet points */}
                  <Flex direction="column" gap="6px" mb="16px">
                    {card.points.map((pt) => (
                      <Flex key={pt} align="flex-start" gap="8px">
                        <Text color="#3F77A5" fontSize="13px" mt="1px" flexShrink={0}>✓</Text>
                        <Text
                          fontFamily="'WixMadeforDisplay', sans-serif"
                          fontWeight="500"
                          fontSize={{ base: '13px', lg: '14px' }}
                          lineHeight="1.6"
                          letterSpacing="0"
                          color="#444444"
                        >
                          {pt}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Box>

                {/* View full comparison link */}
                <Flex
                  as="button"
                  align="center"
                  gap="8px"
                  onClick={() => navigate(`/compare/${card.slug}`)}
                  cursor="pointer"
                  _hover={{ opacity: 0.75 }}
                  transition="opacity 0.18s"
                  w="fit-content"
                >
                  <Text
                    fontFamily="'WixMadeforDisplay', sans-serif"
                    fontWeight="400"
                    fontSize={{ base: '14px', lg: '16px' }}
                    lineHeight="1"
                    letterSpacing="0"
                    color="#1A1A1A"
                  >
                    View full Comparison
                  </Text>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

        </Flex>
      </Box>
    </Box>
  );
}
