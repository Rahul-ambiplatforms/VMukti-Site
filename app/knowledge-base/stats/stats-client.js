'use client';
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
  HStack,
  Divider,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';


const StatCard = ({ label, value, helpText, stat = true }) => (
  <Box p={6} bg="white" border="1px solid" borderColor="gray.200" borderRadius="lg" shadow="sm">
    {stat ? (
      <Stat>
        <StatLabel fontSize="sm" color="gray.600" textTransform="uppercase">
          {label}
        </StatLabel>
        <StatNumber fontSize="3xl" color="#2563eb" fontWeight="700" mt={2}>
          {value}
        </StatNumber>
        {helpText && <StatHelpText fontSize="xs" mt={2}>{helpText}</StatHelpText>}
      </Stat>
    ) : (
      <>
        <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="600" mb={2}>
          {label}
        </Text>
        <Text fontSize="2xl" fontWeight="700" color="#1a202c">
          {value}
        </Text>
        {helpText && <Text fontSize="xs" color="gray.500" mt={2}>{helpText}</Text>}
      </>
    )}
  </Box>
);

const StatsPage = () => {
  const claimReviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vmukti.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Knowledge Base',
        item: 'https://vmukti.com/knowledge-base',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Statistics',
        item: 'https://vmukti.com/knowledge-base/stats',
      },
    ],
  };

  // ClaimReview schema for verifiable statistics
  const claimReviewStatsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed: 'VMukti platform operates 900+ projects across 700+ districts',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    url: 'https://vmukti.com/knowledge-base/stats',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VMukti Cloud VMS',
    applicationCategory: 'VideoManagementSoftware',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2000+',
      reviewCount: '500+',
    },
    statistics: [
      {
        '@type': 'StatisticDescription',
        name: 'Total Projects',
        value: '900+',
        description: 'Active video surveillance deployments'
      },
      {
        '@type': 'StatisticDescription',
        name: 'Geographic Coverage',
        value: '700+ districts, 50+ smart cities',
        description: 'Across India and Asia-Pacific'
      },
      {
        '@type': 'StatisticDescription',
        name: 'Enterprise Customers',
        value: '200+',
        description: 'Government, retail, logistics, utilities'
      },
      {
        '@type': 'StatisticDescription',
        name: 'Video Feeds Processed',
        value: '1 billion+',
        description: 'Monthly video streams processed'
      },
      {
        '@type': 'StatisticDescription',
        name: 'AI Analytics Modules',
        value: '30+',
        description: 'Computer vision and behaviour detection'
      },
      {
        '@type': 'StatisticDescription',
        name: 'Platform Uptime',
        value: '99.99%',
        description: 'Production SLA guarantee'
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewStatsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Container maxW="1200px" py={12}>
        {/* Header */}
        <VStack spacing={6} mb={12} textAlign="center">
          <Heading as="h1" size="2xl" color="#1a202c">
            VMukti Platform Statistics
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="700px">
            Enterprise-scale cloud video management platform statistics, verified performance metrics, and market presence across Asia-Pacific.
          </Text>
        </VStack>

        {/* Core Metrics */}
        <Box mb={12}>
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Core Platform Metrics
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <StatCard label="Active Projects" value="900+" helpText="Deployed across government, retail, logistics sectors" />
            <StatCard label="Geographic Districts" value="700+" helpText="Coverage across India and Asia-Pacific regions" />
            <StatCard label="Smart Cities" value="50+" helpText="Integrated with urban surveillance infrastructure" />
            <StatCard label="Enterprise Customers" value="200+" helpText="Government agencies, retail chains, utilities" />
          </Grid>
        </Box>

        {/* Video Processing */}
        <Box mb={12} p={8} bg="blue.50" borderRadius="lg" borderLeft="4px" borderColor="#2563eb">
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Video Processing & Analytics Capacity
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <StatCard
              label="Video Feeds Processed Monthly"
              value="1 billion+"
              helpText="Ingested and analysed across platform"
            />
            <StatCard
              label="AI Analytics Modules"
              value="30+"
              helpText="Computer vision, behaviour detection, classification"
            />
            <StatCard
              label="Average Streaming Throughput"
              value="10+ Gbps"
              helpText="Peak concurrent video stream capacity"
            />
            <StatCard
              label="Real-time Analytics Processing"
              value="500+ fps"
              helpText="At edge locations for sub-100ms detection latency"
            />
          </Grid>
        </Box>

        <Divider my={8} />

        {/* Reliability & Performance */}
        <Box mb={12}>
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Reliability & Performance Guarantees
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <StatCard
              label="Platform Uptime SLA"
              value="99.99%"
              helpText="Maximum 52 minutes downtime annually"
            />
            <StatCard
              label="Incident Response Time"
              value="< 5 minutes"
              helpText="Enterprise support tier average"
            />
            <StatCard
              label="Data Recovery RTO"
              value="< 1 hour"
              helpText="Recovery time objective for disaster scenarios"
            />
            <StatCard
              label="Redundancy Zones"
              value="3+"
              helpText="Multi-region failover for high availability"
            />
          </Grid>
        </Box>

        <Divider my={8} />

        {/* Customer Satisfaction */}
        <Box mb={12} p={8} bg="green.50" borderRadius="lg">
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Customer Satisfaction & Adoption
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <StatCard
              label="Customer Satisfaction"
              value="4.8/5"
              helpText="Average rating across 500+ reviews"
            />
            <StatCard
              label="Implementation Success Rate"
              value="98%"
              helpText="Projects deployed on-time and within budget"
            />
            <StatCard
              label="Annual Retention Rate"
              value="94%"
              helpText="Enterprise customer renewal rate"
            />
            <StatCard
              label="Platform Adoption Rate"
              value="87%"
              helpText="Active daily users vs. licensed accounts"
            />
          </Grid>
        </Box>

        <Divider my={8} />

        {/* AI Analytics Coverage */}
        <Box mb={12}>
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            AI Analytics Module Capabilities
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={6}>
            <Box p={4} bg="gray.50" borderRadius="lg">
              <HStack mb={3}>
                <Badge colorScheme="blue">Detection</Badge>
              </HStack>
              <Text fontSize="sm" color="gray.700" lineHeight="1.8">
                <strong>People Counting:</strong> 95%+ accuracy<br/>
                <strong>Crowd Detection:</strong> Real-time density mapping<br/>
                <strong>Intrusion Detection:</strong> Perimeter breach alerts
              </Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="lg">
              <HStack mb={3}>
                <Badge colorScheme="purple">Recognition</Badge>
              </HStack>
              <Text fontSize="sm" color="gray.700" lineHeight="1.8">
                <strong>Facial Recognition:</strong> 98%+ accuracy<br/>
                <strong>Licence Plate Recognition:</strong> 97%+ in daylight<br/>
                <strong>Vehicle Classification:</strong> 25+ vehicle types
              </Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="lg">
              <HStack mb={3}>
                <Badge colorScheme="orange">Behaviour</Badge>
              </HStack>
              <Text fontSize="sm" color="gray.700" lineHeight="1.8">
                <strong>Loitering Detection:</strong> 94%+ accuracy<br/>
                <strong>Fall Detection:</strong> Emergency alerting<br/>
                <strong>Fighting Detection:</strong> Violence prevention
              </Text>
            </Box>
          </Grid>
        </Box>

        <Divider my={8} />

        {/* Deployment & Scale */}
        <Box mb={12}>
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Deployment Scale & Infrastructure
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            <StatCard
              label="Maximum Cameras Per Site"
              value="5,000+"
              helpText="Supported in single command centre deployment"
            />
            <StatCard
              label="Maximum Sites in Network"
              value="Unlimited"
              helpText="Centralised management across any number"
            />
            <StatCard
              label="Storage Per Site"
              value="Up to 500 PB"
              helpText="Elastic cloud storage with tiered pricing"
            />
            <StatCard
              label="Concurrent Users Per Deployment"
              value="1,000+"
              helpText="Enterprise role-based access control"
            />
          </Grid>
        </Box>

        <Divider my={8} />

        {/* ROI & Cost Savings */}
        <Box mb={12} p={8} bg="amber.50" borderRadius="lg">
          <Heading as="h2" size="lg" color="#1a202c" mb={6}>
            Enterprise ROI & Cost Metrics
          </Heading>
          <VStack align="stretch" spacing={4}>
            <Box>
              <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="600" mb={2}>
                Total Cost of Ownership Reduction
              </Text>
              <Text fontSize="2xl" fontWeight="700" color="#16a34a">
                40-60%
              </Text>
              <Text fontSize="sm" color="gray.600">Compared to on-premise NVR deployments (infrastructure, maintenance, staffing)</Text>
            </Box>

            <Divider />

            <Box>
              <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="600" mb={2}>
                Average Payback Period
              </Text>
              <Text fontSize="2xl" fontWeight="700" color="#16a34a">
                12-18 months
              </Text>
              <Text fontSize="sm" color="gray.600">Through reduced operator staffing, faster incident resolution, and maintenance cost elimination</Text>
            </Box>

            <Divider />

            <Box>
              <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="600" mb={2}>
                Infrastructure Cost Savings
              </Text>
              <Text fontSize="2xl" fontWeight="700" color="#16a34a">
                70%+
              </Text>
              <Text fontSize="sm" color="gray.600">Elimination of on-site hardware (servers, storage arrays, UPS systems)</Text>
            </Box>

            <Divider />

            <Box>
              <Text fontSize="sm" color="gray.600" textTransform="uppercase" fontWeight="600" mb={2}>
                Operational Efficiency Gain
              </Text>
              <Text fontSize="2xl" fontWeight="700" color="#16a34a">
                3-5x
              </Text>
              <Text fontSize="sm" color="gray.600">Improvement in incident detection speed and operator productivity through AI automation</Text>
            </Box>
          </VStack>
        </Box>

        {/* Data Sourcing Note */}
        <Box mt={8} p={4} bg="gray.100" borderRadius="lg" fontSize="sm" color="gray.600">
          <Text mb={2}>
            <strong>Data Sources:</strong> Statistics derived from VMukti platform operational data (2020-2026), customer deployments, and verified through independent audits.
          </Text>
          <Text>
            <strong>Accuracy Note:</strong> All metrics are current as of April 2026 and updated quarterly. Customer counts and project deployments reflect active subscription status.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default StatsPage;
