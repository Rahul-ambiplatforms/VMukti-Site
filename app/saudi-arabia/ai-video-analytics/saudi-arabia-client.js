'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react';
import PageContentWrapper from '../../../components/PageContentWrapper';

export default function SaudiArabiaClient() {
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(0);

  const stats = [
    { value: '13', label: 'Regions Supported' },
    { value: '142K+', label: 'Cameras Managed' },
    { value: '1M+', label: 'Daily Analytics Events' },
    { value: '100%', label: 'NDAA Compliant' },
  ];

  const useCases = [
    {
      title: 'Hajj Crowd Management',
      description: 'Hajj-scale crowd analytics handling millions of pilgrims in real-time. Temperature detection, crowd density, flow optimization, and incident detection.',
      features: ['Crowd Counting', 'Density Mapping', 'Flow Control', 'Incident Detection']
    },
    {
      title: 'Vision 2030 Enterprise Campuses',
      description: 'Enterprise security for NEOM and other mega-projects transforming Saudi Arabia\'s infrastructure.',
      features: ['Campus Security', 'Construction Monitoring', 'Access Control', 'Safety Management']
    },
    {
      title: 'Aramco & Industrial Security',
      description: 'Critical infrastructure protection for Saudi Arabia\'s energy sector with real-time threat detection.',
      features: ['Perimeter Security', 'Facility Monitoring', 'Threat Detection', 'Emergency Response']
    },
    {
      title: 'Smart City Infrastructure',
      description: 'Riyadh, Jeddah, and other major cities surveillance with AI analytics for urban safety and management.',
      features: ['Traffic Analytics', 'Public Safety', 'Event Monitoring', 'Emergency Coordination']
    },
    {
      title: 'Banking & Financial Sector',
      description: 'Secure surveillance for Saudi Arabia\'s banking and financial institutions.',
      features: ['Branch Security', 'Vault Monitoring', 'Fraud Detection', 'Compliance']
    },
    {
      title: 'Retail & Commerce',
      description: 'Multi-location retail management across Saudi Arabia\'s expanding commercial sector.',
      features: ['Store Analytics', 'Inventory Protection', 'Customer Analytics', 'Loss Prevention']
    },
  ];

  const compliance = [
    {
      title: 'NDAA Compliant',
      description: 'Non-Chinese technology approved for government and sensitive deployments',
      icon: 'â'
    },
    {
      title: 'Arabic Interface',
      description: 'Full Arabic language UI, reports, and system messages',
      icon: 'â'
    },
    {
      title: 'Hajj-Scale Capacity',
      description: 'Proven to handle millions of people in real-time analytics',
      icon: 'â'
    },
    {
      title: '142K+ Cameras',
      description: 'Single deployment managing over 142,000 cameras',
      icon: 'â'
    },
    {
      title: '24/7 Regional Support',
      description: 'Local support team understanding Saudi Arabia requirements',
      icon: 'â'
    },
    {
      title: 'Edge & Cloud Processing',
      description: 'Hybrid architecture with local processing and cloud coordination',
      icon: 'â'
    },
  ];

  const deployment = [
    { region: 'Riyadh Region', status: 'Active', cameras: '15,000+' },
    { region: 'Jeddah & Western Region', status: 'Active', cameras: '12,000+' },
    { region: 'Eastern Region (ARAMCO)', status: 'Active', cameras: '18,000+' },
    { region: 'NEOM & Projects', status: 'Deployment', cameras: '25,000+' },
    { region: 'Other Regions', status: 'Active', cameras: '72,000+' },
  ];

  const faqs = [
    {
      question: 'Can VMukti handle Hajj-scale crowd management?',
      answer: 'Yes, VMukti has proven capability managing deployments of 142,000+ cameras in a single instance with millions of people being analyzed in real-time. Our crowd analytics can handle temperature detection, crowd density mapping, flow optimization, and incident detection at Hajj scale.'
    },
    {
      question: 'Does VMukti support Arabic language interface?',
      answer: 'Yes, we provide complete Arabic language support including RTL text, Arabic UI, Arabic reports, alerts, and documentation. All system interfaces and communications are available in Arabic.'
    },
    {
      question: 'Is VMukti NDAA compliant?',
      answer: 'Yes, VMukti is fully NDAA Section 889 compliant with zero Chinese-manufactured components. Our platform is trusted for critical infrastructure and government deployments.'
    },
    {
      question: 'Can VMukti be deployed across all 13 Saudi regions?',
      answer: 'Yes, our architecture supports unified management across all 13 regions of Saudi Arabia with regional processing, central coordination, and single-pane-of-glass reporting.'
    },
    {
      question: 'What is VMukti\'s experience with Vision 2030 projects?',
      answer: 'VMukti is actively deployed in Vision 2030 mega-projects including NEOM and enterprise campuses across Saudi Arabia. We understand the scale and complexity required for these transformational projects.'
    },
    {
      question: 'How does VMukti protect critical infrastructure?',
      answer: 'We provide comprehensive threat detection, perimeter security, real-time alerting, and integration with emergency response systems. Our platform is proven for critical infrastructure including energy sector facilities.'
    },
    {
      question: 'Can VMukti integrate with existing Saudi infrastructure systems?',
      answer: 'Yes, we provide APIs and integrations with existing security systems, access control, emergency response, and business intelligence platforms. We work with your current infrastructure.'
    },
    {
      question: 'What support do you provide in Saudi Arabia?',
      answer: 'We provide 24/7 support with teams based in Saudi Arabia understanding local requirements, language, regulations, and business practices. We offer multi-language support and regional expertise.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageContentWrapper noPadding>
        <Box
          bg="linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)"
          color="white"
          py={{ base: 12, md: 20 }}
          textAlign="center"
        >
          <Container maxW="4xl">
            <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
              Cloud VMS for Saudi Arabia's Vision 2030
            </Heading>
            <Text fontSize="xl" mb={8} opacity={0.95}>
              Scale Security Across the Kingdom. Hajj Analytics. Enterprise Campuses. Critical Infrastructure.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#1a472a"
                _hover={{ bg: '#f0f0f0' }}
                fontWeight="bold"
              >
                Schedule Demo
              </Button>
              <Button
                size="lg"
                borderWidth={2}
                borderColor="white"
                bg="transparent"
                color="white"
                _hover={{ bg: 'whiteAlpha.1' }}
                fontWeight="bold"
              >
                Learn More
              </Button>
            </HStack>
          </Container>
        </Box>
      </PageContentWrapper>

      {/* Stats Section */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, idx) => (
              <VStack key={idx} textAlign="center">
                <Heading size="2xl" color="#1a472a" fontWeight="bold">
                  {stat.value}
                </Heading>
                <Text fontSize="sm" color="#666" fontWeight="500">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </PageContentWrapper>

      {/* Use Cases */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Solutions for Saudi Arabia
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {useCases.map((useCase, idx) => (
              <Box
                key={idx}
                p={6}
                borderWidth={1}
                borderColor="#e0e0e0"
                borderRadius="lg"
                _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
                transition="all 0.3s"
              >
                <Heading as="h3" size="md" mb={3}>
                  {useCase.title}
                </Heading>
                <Text mb={4} color="#666">
                  {useCase.description}
                </Text>
                <HStack flexWrap="wrap" gap={2}>
                  {useCase.features.map((feature, fidx) => (
                    <Box
                      key={fidx}
                      bg="#e8f5e9"
                      color="#1a472a"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="500"
                    >
                      {feature}
                    </Box>
                  ))}
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </PageContentWrapper>

      {/* Regional Deployments */}
      <PageContentWrapper>
        <Box bg="#f8f9fa" py={{ base: 8, md: 12 }} px={6} borderRadius="lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Active Deployments Across Saudi Regions
          </Heading>
          <Box overflowX="auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#1a472a', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #1a472a' }}>
                    Region
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #1a472a' }}>
                    Status
                  </th>
                  <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #1a472a' }}>
                    Cameras
                  </th>
                </tr>
              </thead>
              <tbody>
                {deployment.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: idx % 2 === 0 ? 'white' : '#f5f5f5' }}>
                    <td style={{ padding: '12px' }}>
                      <strong>{item.region}</strong>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#1a472a', fontWeight: 'bold' }}>
                      {item.status}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      {item.cameras}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </PageContentWrapper>

      {/* Compliance */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Enterprise-Grade Capabilities
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {compliance.map((item, idx) => (
              <VStack
                key={idx}
                align="start"
                p={6}
                bg="white"
                borderRadius="lg"
                borderLeftWidth={4}
                borderLeftColor="#1a472a"
                borderWidth={1}
                borderTopColor="#e0e0e0"
                borderRightColor="#e0e0e0"
                borderBottomColor="#e0e0e0"
              >
                <Text fontSize="2xl" fontWeight="bold" color="#1a472a">
                  {item.icon}
                </Text>
                <Heading as="h3" size="md">
                  {item.title}
                </Heading>
                <Text color="#666" fontSize="sm">
                  {item.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </PageContentWrapper>

      {/* FAQs */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Frequently Asked Questions
          </Heading>
          <VStack spacing={4} maxW="3xl" mx="auto">
            {faqs.map((faq, idx) => (
              <Box
                key={idx}
                width="100%"
                borderWidth={1}
                borderColor="#e0e0e0"
                borderRadius="lg"
                overflow="hidden"
              >
                <button
                  style={{
                    width: '100%',
                    padding: '16px',
                    textAlign: 'left',
                    backgroundColor: '#f8f9fa',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}
                  onClick={() => setSelectedFaqCategory(selectedFaqCategory === idx ? -1 : idx)}
                >
                  {faq.question}
                </button>
                {selectedFaqCategory === idx && (
                  <Box p={4} borderTopWidth={1} borderTopColor="#e0e0e0" bg="white">
                    <Text color="#666" lineHeight="1.6">
                      {faq.answer}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </VStack>
        </Box>
      </PageContentWrapper>

      {/* CTA */}
      <PageContentWrapper>
        <Box
          bg="linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)"
          color="white"
          py={{ base: 12, md: 16 }}
          borderRadius="lg"
          textAlign="center"
        >
          <Container maxW="2xl">
            <Heading as="h2" size="xl" mb={6}>
              Power Your Vision 2030 Projects
            </Heading>
            <Text fontSize="lg" mb={8} opacity={0.95}>
              Join Saudi Arabia's leading enterprises securing their future with VMukti.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#1a472a"
                _hover={{ bg: '#f0f0f0' }}
                fontWeight="bold"
              >
                Book Demo
              </Button>
              <Button
                size="lg"
                borderWidth={2}
                borderColor="white"
                bg="transparent"
                color="white"
                _hover={{ bg: 'whiteAlpha.1' }}
                fontWeight="bold"
              >
                Contact Sales
              </Button>
            </HStack>
          </Container>
        </Box>
      </PageContentWrapper>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'VMukti Solutions - Saudi Arabia Office',
            image: 'https://www.vmukti.com/assets/logo.webp',
            description: 'Cloud VMS provider for Saudi Arabia\'s Vision 2030 enterprises',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Riyadh, Saudi Arabia',
              addressLocality: 'Riyadh',
              addressCountry: 'SA',
            },
            url: 'https://www.vmukti.com/saudi-arabia/ai-video-analytics',
            areaServed: [
              { '@type': 'City', name: 'Riyadh' },
              { '@type': 'City', name: 'Jeddah' },
              { '@type': 'City', name: 'Dammam' },
            ],
          }),
        }}
      />
    </>
  );
}
