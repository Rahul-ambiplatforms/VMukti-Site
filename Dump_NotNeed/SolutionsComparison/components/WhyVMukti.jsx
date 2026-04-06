'use client';
import { Box, Grid, Text, Heading } from '@chakra-ui/react';

const CARD_SIZE = '336px';
const CARD_RADIUS = '24px';
const CARD_P = '32px';

const titleStyle = {
  fontFamily: "'WixMadeforDisplay', sans-serif",
  fontWeight: '700',
  lineHeight: '1',
  letterSpacing: '-0.015em',
  textAlign: 'center',
};

const descStyle = {
  fontFamily: "'WixMadeforDisplay', sans-serif",
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.015em',
  textAlign: 'center',
};

// Square card — uses aspect-ratio on mobile for equal squares
function Card({ bg, opacity = 1, order, children }) {
  return (
    <Box
      bg={bg}
      borderRadius={CARD_RADIUS}
      p={{ base: '20px', lg: CARD_P }}
      opacity={opacity}
      order={order}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ aspectRatio: { base: '1 / 1', lg: 'unset' } }}
      minH={{ base: 'unset', lg: CARD_SIZE }}
    >
      {children}
    </Box>
  );
}

export default function WhyVMukti() {
  return (
    <Box
      maxW="1448px"
      mx="auto"
      px={{ base: '16px', md: '32px' }}
      mb={{ base: '40px', md: '64px' }}
    >
      <Box overflow="hidden" position="relative">
        {/* Background brochure image */}
        <Box
          as="img"
          src="/assets/vmukti-brocher.png"
          position="absolute"
          top="0px"
          left="10px"
          w="1050px"
          h="525px"
          opacity={0.8}
          transform="rotate(180deg)"
          pointerEvents="none"
          objectFit="cover"
        />

        <Grid
          position="relative"
          zIndex={1}
          templateColumns={{ base: '1fr 1fr', lg: 'repeat(4, 1fr)' }}
          gap={{ base: '12px', lg: '24px' }}
          alignItems="start"
        >
          {/* "Why VMukti?" — order 0 on mobile (first), order 3 on desktop (col 3-4) */}
          <Box
            order={{ base: 0, lg: 3 }}
            gridColumn={{ base: '1 / -1', lg: 'span 2' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minH={{ base: '80px', lg: CARD_SIZE }}
            py={{ base: '8px', lg: '0' }}
          >
            <Heading
              fontFamily="'WixMadeforDisplay', sans-serif"
              fontWeight="700"
              fontSize={{ base: '36px', md: '56px', lg: '80px' }}
              lineHeight="1.05"
              whiteSpace={{ base: 'normal', lg: 'nowrap' }}
              textAlign="center"
            >
              <Box as="span" color="#1A1A1A">Why </Box>
              <Box as="span" color="#3F77A5">VMukti?</Box>
            </Heading>
          </Box>

          {/* Col 1 — Cloud-Native, order 1 on mobile, order 1 on desktop */}
          <Card bg="#FFFFFF" order={{ base: 1, lg: 1 }}>
            <Text {...titleStyle} fontSize={{ base: '13px', md: '16px', lg: '24px' }} color="#1A1A1A" mb={{ base: '6px', lg: '12px' }}>
              Cloud-Native{' '}
              <Box as="span" fontWeight="400">Architecture</Box>
            </Text>
            <Text {...descStyle} fontSize={{ base: '11px', md: '12px', lg: '14px' }} color="#555555">
              Built for enterprise scale from day one. Multi-tenant, multi-site, with{' '}
              <Box as="span" fontWeight="700">99.9% guaranteed</Box> uptime SLA.
            </Text>
          </Card>

          {/* Col 2 — AI-First, order 2 on mobile, order 2 on desktop */}
          <Card bg="#FFFFFF" order={{ base: 2, lg: 2 }}>
            <Text {...titleStyle} fontSize={{ base: '13px', md: '16px', lg: '24px' }} color="#1A1A1A" mb={{ base: '6px', lg: '12px' }}>
              AI-First{' '}
              <Box as="span" fontWeight="400">Platform</Box>
            </Text>
            <Text {...descStyle} fontSize={{ base: '11px', md: '12px', lg: '14px' }} color="#555555">
              <Box as="span" fontWeight="700">15+ AI models</Box> built-in. Object detection,
              behavior analytics, facial recognition, and LPR — all out of the box.
            </Text>
          </Card>

          {/* Row 2, Col 1 — 18+ Years (blue), order 4 */}
          <Card bg="#3F77A5" order={{ base: 4, lg: 5 }}>
            <Text {...titleStyle} fontSize={{ base: '13px', md: '16px', lg: '24px' }} color="#FFFFFF" mb={{ base: '6px', lg: '12px' }}>
              18+ Years{' '}
              <Box as="span" fontWeight="400">Proven</Box>
            </Text>
            <Text {...descStyle} fontSize={{ base: '11px', md: '12px', lg: '14px' }} color="rgba(255,255,255,0.85)">
              900+ deployments, 1 Billion+ camera feeds processed, and 3M+ active users
              worldwide trust VMukti.
            </Text>
          </Card>

          {/* Row 2, Col 2 — empty, desktop only */}
          <Box display={{ base: 'none', lg: 'block' }} order={6} />

          {/* Row 2, Col 3 — Deployed Across, order 5 */}
          <Card bg="#BECEDC" opacity={0.85} order={{ base: 5, lg: 7 }}>
            <Text {...titleStyle} fontSize={{ base: '11px', md: '14px', lg: '18px' }} color="#1A1A1A" mb={{ base: '4px', lg: '8px' }}>
              Deployed Across
            </Text>
            <Text {...titleStyle} fontSize={{ base: '13px', md: '16px', lg: '24px' }} color="#1A1A1A">
              1,42,000+ Locations
            </Text>
          </Card>

          {/* Row 2, Col 4 — Trusted by Government, order 6 */}
          <Card bg="#FFFFFF" order={{ base: 6, lg: 8 }}>
            <Text {...titleStyle} fontSize={{ base: '11px', md: '14px', lg: '18px' }} color="#1A1A1A" mb={{ base: '4px', lg: '8px' }}>
              Trusted by Government &
            </Text>
            <Text {...titleStyle} fontSize={{ base: '13px', md: '16px', lg: '24px' }} color="#1A1A1A">
              Enterprise Sectors
            </Text>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}
