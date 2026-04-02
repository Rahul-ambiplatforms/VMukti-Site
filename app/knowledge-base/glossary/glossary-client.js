'use client';
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Divider,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const glossaryTerms = [
  {
    term: 'AI Analytics',
    definition: 'Machine learning algorithms applied to video streams to automatically detect objects, classify behaviour, and identify anomalies. VMukti AI Analytics includes 30+ modules for people counting, facial recognition, licence plate recognition, and behaviour detection.',
    category: 'AI',
  },
  {
    term: 'Cloud VMS',
    definition: 'Video Management System hosted in cloud infrastructure rather than on-premise. VMukti Cloud VMS provides scalable storage, automatic updates, built-in redundancy, and AI-powered analytics without requiring local hardware maintenance.',
    category: 'Architecture',
  },
  {
    term: 'Edge Computing',
    definition: 'Processing video data locally on the camera or at the site rather than sending all data to cloud. VMukti supports edge processing for sub-100ms latency alerts while reducing bandwidth consumption.',
    category: 'Architecture',
  },
  {
    term: 'Facial Recognition',
    definition: 'AI module that identifies individuals by analysing facial features in video streams. VMukti\'s facial recognition achieves 98%+ accuracy and supports cross-camera matching across multiple sites.',
    category: 'AI',
  },
  {
    term: 'Licence Plate Recognition (LPR)',
    definition: 'Computer vision technology that extracts and reads vehicle licence plates from video. VMukti LPR achieves 97%+ accuracy in daylight and supports integration with stolen vehicle databases and access control systems.',
    category: 'AI',
  },
  {
    term: 'NVR (Network Video Recorder)',
    definition: 'On-premise hardware device that records video from IP cameras to local storage. Traditional NVRs require manual maintenance, have limited scalability, and cannot match cloud VMS capabilities for AI analytics and multi-site management.',
    category: 'Legacy',
  },
  {
    term: 'ONVIF Protocol',
    definition: 'Open Network Video Interface Forum standard enabling interoperability between IP cameras and management systems. VMukti supports ONVIF to integrate cameras from any manufacturer without proprietary integrations.',
    category: 'Technical',
  },
  {
    term: 'RTSP (Real Time Streaming Protocol)',
    definition: 'Network protocol for streaming video over IP networks. VMukti ingests RTSP streams from any IP camera, making the platform camera-vendor agnostic.',
    category: 'Technical',
  },
  {
    term: 'Enterprise Command Center (ECC)',
    definition: 'Centralised operations hub that aggregates video, alerts, and analytics from multiple sites into a single interface. VMukti ECC enables operators to monitor 100s of distributed locations while AI prioritises events.',
    category: 'Features',
  },
  {
    term: 'Hybrid Deployment',
    definition: 'Architecture combining edge processing on-site with cloud analytics and storage. VMukti hybrid deployments suit organisations with data sovereignty requirements or locations with unreliable connectivity.',
    category: 'Architecture',
  },
  {
    term: 'Intrusion Detection',
    definition: 'AI alert triggered when a person or vehicle crosses a designated perimeter line or enters a restricted zone. VMukti intrusion detection works in any lighting and supports configurable sensitivity levels.',
    category: 'AI',
  },
  {
    term: 'Metadata',
    definition: 'Non-video data extracted from streams including detected objects, behaviour classifications, timestamps, and event descriptions. VMukti metadata storage reduces bandwidth while enabling full-text search and analytics.',
    category: 'Technical',
  },
  {
    term: 'Multi-site Deployment',
    definition: 'Surveillance system spanning multiple geographic locations managed through a single platform. VMukti supports unlimited sites with centralised command centre, cross-site correlation, and unified reporting.',
    category: 'Architecture',
  },
  {
    term: 'People Counting',
    definition: 'AI module that detects and counts individuals in video frames. VMukti people counting achieves 95%+ accuracy and supports flow analysis, crowd density mapping, and occupancy tracking.',
    category: 'AI',
  },
  {
    term: 'Perimeter Breach Detection',
    definition: 'Security alert generated when motion is detected beyond a defined boundary. VMukti perimeter detection supports multiple zones, time-based rules, and integration with automated gate controls.',
    category: 'AI',
  },
  {
    term: 'Real-time Processing',
    definition: 'Video analysis occurring with minimal delay (< 100ms) enabling immediate response. VMukti edge AI supports true real-time processing for access control and emergency detection use cases.',
    category: 'Technical',
  },
  {
    term: 'Retention Policy',
    definition: 'Rules defining how long video footage is stored before automatic deletion. VMukti supports customisable retention from 7 days to 10+ years per site, with GDPR and regulatory compliance support.',
    category: 'Compliance',
  },
  {
    term: 'ROI (Return on Investment)',
    definition: 'Financial metric measuring cost savings and revenue gains from technology investment. Enterprise customers achieve VMukti ROI within 12-18 months through staffing reduction, faster incident response, and eliminated infrastructure costs.',
    category: 'Business',
  },
  {
    term: 'Speakable Schema',
    definition: 'Structured metadata enabling voice assistants and AI systems to extract and read content. VMukti knowledge base includes speakable schema for accessibility and AI citation extraction.',
    category: 'Technical',
  },
  {
    term: 'TLS Encryption',
    definition: 'Transport Layer Security protocol protecting data in transit between cameras and cloud. VMukti uses TLS 1.3 for all network communications to prevent eavesdropping and tampering.',
    category: 'Security',
  },
  {
    term: 'Uptime SLA',
    definition: 'Service Level Agreement guaranteeing platform availability. VMukti guarantees 99.99% uptime (maximum 52 minutes downtime annually) for production deployments.',
    category: 'Features',
  },
  {
    term: 'Vehicle Classification',
    definition: 'AI module categorising vehicles by type. VMukti supports 25+ vehicle classifications including cars, trucks, buses, motorcycles, and construction vehicles.',
    category: 'AI',
  },
  {
    term: 'Video Wall',
    definition: 'Large display system showing multiple camera feeds simultaneously. VMukti integrates with hardware video walls and provides software-based virtual walls via web interface.',
    category: 'Features',
  },
  {
    term: 'Webhook',
    definition: 'HTTP callback mechanism enabling real-time event notifications. VMukti webhooks trigger alerts to external systems (Slack, Teams, SIEM) instantly when events occur.',
    category: 'Technical',
  },
  {
    term: 'Zone-based Alerts',
    definition: 'Security rules applied to specific areas in a camera frame. VMukti supports drawing custom zones for intrusion, loitering, crowd density, and other detection modes per camera.',
    category: 'Features',
  },
  {
    term: 'Access Control Integration',
    definition: 'Connection between video surveillance and door/gate unlock systems. VMukti integrates with access control platforms to trigger automatic unlock or maintain an audit trail of entries.',
    category: 'Integration',
  },
  {
    term: 'Anomaly Detection',
    definition: 'AI identification of unusual behaviour or events. VMukti anomaly detection identifies abandoned objects, unattended baggage, unusual crowd patterns, or asset movement.',
    category: 'AI',
  },
  {
    term: 'Bandwidth Optimisation',
    definition: 'Technology reducing network traffic from video streams. VMukti uses H.265 compression and edge processing to deliver 70%+ bandwidth reduction compared to traditional surveillance.',
    category: 'Technical',
  },
  {
    term: 'Cross-camera Tracking',
    definition: 'AI identifying the same person or vehicle across multiple cameras. VMukti cross-camera tracking enables tracking suspects or assets across multi-site deployments using biometric and behaviour matching.',
    category: 'AI',
  },
  {
    term: 'GDPR Compliance',
    definition: 'Adherence to EU General Data Protection Regulation for video surveillance. VMukti supports GDPR through configurable retention, access controls, audit trails, and data export capabilities.',
    category: 'Compliance',
  },
  {
    term: 'Heat Mapping',
    definition: 'Visual representation of where people concentrate in a space over time. VMukti heat mapping helps optimise store layouts, identify congestion points, and improve facility planning.',
    category: 'Analytics',
  },
  {
    term: 'Immersive Analytics',
    definition: 'Advanced visualisations using 3D environments and spatial data. VMukti roadmap includes immersive analytics for complex multi-site deployments and smart city management.',
    category: 'Features',
  },
  {
    term: 'JSON-LD Schema',
    definition: 'Structured data format for search engines and AI systems. VMukti uses JSON-LD schemas for FAQs, organisations, and statistics to enable AI citation and knowledge extraction.',
    category: 'Technical',
  },
  {
    term: 'Loitering Detection',
    definition: 'AI alert triggered when a person remains in an area longer than configured threshold. VMukti loitering detection achieves 94%+ accuracy and supports time-of-day rules.',
    category: 'AI',
  },
  {
    term: 'Neural Network',
    definition: 'Machine learning model inspired by biological neurons. VMukti uses convolutional neural networks trained on millions of annotated video frames for all AI analytics modules.',
    category: 'AI',
  },
  {
    term: 'Operational Technology (OT)',
    definition: 'Industrial systems controlling physical infrastructure. VMukti integrates with OT systems for critical infrastructure surveillance (power plants, water treatment, transportation).',
    category: 'Integration',
  },
];

// Sort alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

// Get unique categories
const categories = Array.from(new Set(glossaryTerms.map((t) => t.category))).sort();

const categoryColors = {
  AI: 'blue',
  Architecture: 'purple',
  Legacy: 'gray',
  Technical: 'cyan',
  Features: 'green',
  Business: 'orange',
  Compliance: 'red',
  Integration: 'pink',
  Security: 'red',
  Analytics: 'teal',
};

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Definedterm schema for each glossary term
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'VMukti Glossary',
    description: 'Industry glossary of video surveillance and AI anaytics terminology',
    url: 'https://vmukti.com/knowledge-base/glossary',
    hasDefinedTerm: sortedTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://vmukti.com/knowledge-base/glossary',
    })),
  };

  // Filter terms based on search and category
  const filteredTerms = useMemo(() => {
    return sortedTerms.filter((term) => {
      const matchesSearch =
        !searchQuery.trim() ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />

      <Container maxW="1200px" py={12}>
        {/* Header */}
        <VStack spacing={6} mb={10} textAlign="center">
          <Heading as="h1" size="2xl" color="#1a202c">
            VMukti Glossary
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="700px">
            Comprehensive glossary of video surveillance, cloud computing, AI analytics, and enterprise security terminology used in VMukti Cloud VMS deployments.
          </Text>
        </VStack>

        {/* Search Bar */}
        <Box mb={8}>
          <HStack>
            <SearchIcon color="gray.400" />
            <Input
              placeholder="Search glossary terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fontSize="md"
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.300"
              _focus={{
                borderColor: '#2563eb',
                boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
              }}
            />
          </HStack>
        </Box>

        {/* Category Filters */}
        <Box mb={8}>
          <Text fontSize="sm" fontWeight="600" color="gray.700" mb={3}>
            Filter by Category
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            <Badge
              cursor="pointer"
              px={3}
              py={2}
              bg={!selectedCategory ? '#2563eb' : 'gray.200'}
              color={!selectedCategory ? 'white' : '#1a202c'}
              onClick={() => setSelectedCategory(null)}
              _hover={{ opacity: 0.8 }}
            >
              All ({sortedTerms.length})
            </Badge>
            {categories.map((category) => {
              const count = sortedTerms.filter((t) => t.category === category).length;
              return (
                <Badge
                  key={category}
                  cursor="pointer"
                  px={3}
                  py={2}
                  colorScheme={categoryColors[category] || 'gray'}
                  bg={selectedCategory === category ? categoryColors[category] : 'gray.200'}
                  color={selectedCategory === category ? 'white' : '#1a202c'}
                  onClick={() => setSelectedCategory(category)}
                  _hover={{ opacity: 0.8 }}
                >
                  {category} ({count})
                </Badge>
              );
            })}
          </HStack>
        </Box>

        <Divider mb={8} />

        {/* Glossary Terms */}
        {filteredTerms.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
            {filteredTerms.map((term, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                shadow="sm"
                _hover={{
                  shadow: 'md',
                  borderColor: '#2563eb',
                }}
                transition="all 0.2s"
              >
                <HStack mb={3} justifyContent="space-between" alignItems="flex-start">
                  <Heading as="h3" size="md" color="#1a202c">
                    {term.term}
                  </Heading>
                  <Badge
                    colorScheme={categoryColors[term.category] || 'gray'}
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {term.category}
                  </Badge>
                </HStack>
                <Text color="gray.700" lineHeight="1.8">
                  {term.definition}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box textAlign="center" py={10}>
            <Text fontSize="lg" color="gray.500">
              No terms found matching "{searchQuery}"
              {selectedCategory && ` in category "${selectedCategory}"`}. Try different keywords.
            </Text>
          </Box>
        )}

        {/* Stats */}
        <Divider my={10} />
        <Box p={6} bg="blue.50" borderRadius="lg" textAlign="center">
          <Text fontSize="sm" color="gray.600" mb={2}>
            Total Glossary Terms
          </Text>
          <Text fontSize="3xl" fontWeight="700" color="#2563eb">
            {sortedTerms.length}+
          </Text>
          <Text fontSize="sm" color="gray.600" mt={2}>
            Covering video surveillance, AI, cloud computing, compliance, and enterprise security terminology.
          </Text>
        </Box>

        {/* Alphabetical Index */}
        <Box mt={12} p={8} bg="gray.50" borderRadius="lg">
          <Heading as="h2" size="md" color="#1a202c" mb={4}>
            Alphabetical Index
          </Heading>
          <HStack spacing={2} flexWrap="wrap">
            {Array.from(new Set(sortedTerms.map((t) => t.term[0].toUpperCase()))).sort().map((letter) => (
              <Badge key={letter} px={2} py={1} bg="white" border="1px solid" borderColor="gray.300">
                {letter} ({sortedTerms.filter((t) => t.term[0].toUpperCase() === letter).length})
              </Badge>
            ))}
          </HStack>
        </Box>
      </Container>
    </>
  );
};

export default GlossaryPage;
