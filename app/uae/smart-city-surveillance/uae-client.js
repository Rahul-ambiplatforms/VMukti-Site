'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react';
import PageContentWrapper from '../../../components/PageContentWrapper';

export default function UAEClient() {
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(0);

  const stats = [
    { value: '7', label: 'Emirates Covered' },
    { value: '50K+', label: 'Cameras Per Deployment' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '200+', label: 'Enterprise Clients' },
  ];

  const useCases = [
    {
      title: 'Smart City Infrastructure',
      description: 'Unified surveillance for Dubai, Abu Dhabi, Sharjah and other emirates with AI-powered traffic management and crowd control.',
      features: ['Traffic Optimization', 'Crowd Analytics', 'Event Management', 'Real-time Response']
    },
    {
      title: 'Enterprise Campus & Hospitality',
      description: 'Multi-site management for enterprise campuses, hotels, and commercial complexes across the UAE.',
      features: ['Campus-Wide Coverage', 'Guest Safety', 'Asset Protection', 'Incident Tracking']
    },
    {
      title: 'Retail & Shopping Districts',
      description: 'End-to-end surveillance for shopping malls, retail districts, and commercial zones.',
      features: ['Store Analytics', 'Inventory Protection', 'Customer Flow', 'Loss Prevention']
    },
    {
      title: 'Industrial & Port Operations',
      description: 'Port and industrial facility surveillance with edge processing and mesh connectivity.',
      features: ['Port Monitoring', 'Asset Tracking', 'Safety Compliance', 'Operational Analytics']
    },
    {
      title: 'Healthcare Facilities',
      description: 'Privacy-compliant surveillance for hospitals and medical facilities across Emirates.',
      features: ['Patient Privacy', 'OR Coverage', 'Access Control', 'Emergency Response']
    },
    {
      title: 'GCC Region Coordination',
      description: 'Multi-emirate and GCC-wide management with unified reporting and analytics.',
      features: ['Cross-Border Monitoring', 'Unified Dashboards', 'Regional Analytics', 'Compliance Reporting']
    },
  ];

  const compliance = [
    {
      title: 'NDAA Compliant',
      description: 'Non-Chinese technology trusted by Western governments',
      icon: 'â'
    },
    {
      title: 'Arabic Language',
      description: 'Full RTL support with Arabic UI, reports, and alerts',
      icon: 'â'
    },
    {
      title: 'UAE Data Sovereignty',
      description: 'On-premise and hybrid deployment options',
      icon: 'â'
    },
    {
      title: '24/7 UAE Support',
      description: 'Local support team in Gulf Standard Time',
      icon: 'â'
    },
    {
      title: 'Edge AI Processing',
      description: 'Process data locally with cloud coordination',
      icon: 'â'
    },
    {
      title: 'Multi-Site Management',
      description: 'Seamless management across all Emirates',
      icon: 'â'
    },
  ];

  const features = [
    { name: 'Arabic Interface', value: 'Yes' },
    { name: 'On-Premise Deployment', value: 'Yes' },
    { name: 'Hybrid Cloud', value: 'Yes' },
    { name: 'Data Residency', value: 'Guaranteed' },
    { name: 'Alert Latency', value: '<500ms' },
    { name: 'Uptime SLA', value: '99.99%' },
  ];

  const faqs = [
    {
      question: 'Does VMukti Cloud VMS support Arabic language?',
      answer: 'Yes, our platform provides complete Arabic language support including RTL text display, Arabic user interface, Arabic reports, and Arabic alert notifications. All system messages and documentation are available in Arabic.'
    },
    {
      question: 'Can VMukti deploy on-premise in UAE?',
      answer: 'Yes, we support fully on-premise deployment, hybrid cloud, and full cloud models to meet UAE data sovereignty requirements. You can choose the deployment model that best fits your organization\'s needs and compliance requirements.'
    },
    {
      question: 'Is VMukti NDAA compliant?',
      answer: 'Yes, VMukti is fully NDAA compliant with zero Chinese components. Our platform is trusted by US and Western organizations and is suitable for government and sensitive deployments in the UAE.'
    },
    {
      question: 'Can VMukti manage 50,000+ cameras?',
      answer: 'Yes, our architecture is designed to manage 50,000+ cameras in a single deployment with sub-second latency. We have successfully deployed such scale in enterprise environments across the GCC region.'
    },
    {
      question: 'What support do you provide in UAE?',
      answer: 'We provide 24/7 support to UAE enterprises with response times in Gulf Standard Time. Our support team understands local requirements and provides multilingual assistance.'
    },
    {
      question: 'Can VMukti integrate with existing systems?',
      answer: 'Yes, our platform integrates with most existing security infrastructure, access control systems, and business intelligence tools. We provide APIs and webhooks for seamless integration.'
    },
    {
      question: 'How does edge AI processing work?',
      answer: 'Our edge AI processes video locally on cameras or edge servers, reducing bandwidth requirements and improving response times. Cloud coordination enables multi-site analytics and centralized management.'
    },
    {
      question: 'What is the typical deployment timeline?',
      answer: 'Deployment timelines vary based on scope and complexity. For enterprise deployments, we typically handle full installation, configuration, and staff training within 4-8 weeks.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageContentWrapper noPadding>
        <Box
          bg="linear-gradient(135deg, #00a651 0%, #004d2e 100%)"
          color="white"
          py={{ base: 12, md: 20 }}
          textAlign="center"
        >
          <Container maxW="4xl">
            <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
              Enterprise Cloud VMS for the UAE
            </Heading>
            <Text fontSize="xl" mb={8} opacity={0.95}>
              Manage Unlimited Cameras Across All Emirates with NDAA-Compliant Technology
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#004d2e"
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
                Request Trial
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
                <Heading size="2xl" color="#00a651" fontWeight="bold">
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
            Solutions for Emirates Enterprise
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
                      color="#004d2e"
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

      {/* Compliance & Features */}
      <PageContentWrapper>
        <Box bg="#f8f9fa" py={{ base: 8, md: 12 }} px={6} borderRadius="lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Enterprise-Grade Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
            {compliance.map((item, idx) => (
              <VStack
                key={idx}
                align="start"
                p={6}
                bg="white"
                borderRadius="lg"
                borderLeftWidth={4}
                borderLeftColor="#00a651"
              >
                <Text fontSize="2xl" fontWeight="bold" color="#00a651">
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

          <Heading as="h3" size="lg" mb={8} textAlign="center">
            Key Specifications
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {features.map((feature, idx) => (
              <HStack key={idx} justify="space-between" p={4} bg="white" borderRadius="lg">
                <Text fontWeight="500">{feature.name}</Text>
                <Text color="#00a651" fontWeight="bold">
                  {feature.value}
                </Text>
              </HStack>
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
          bg="linear-gradient(135deg, #00a651 0%, #004d2e 100%)"
          color="white"
          py={{ base: 12, md: 16 }}
          borderRadius="lg"
          textAlign="center"
        >
          <Container maxW="2xl">
            <Heading as="h2" size="xl" mb={6}>
              Transform Your Enterprise Surveillance
            </Heading>
            <Text fontSize="lg" mb={8} opacity={0.95}>
              Join 200+ enterprises across UAE and GCC region managing their surveillance with VMukti.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#004d2e"
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
            name: 'VMukti Solutions - UAE Office',
            image: 'https://www.vmukti.com/assets/logo.webp',
            description: 'Enterprise Cloud VMS provider for UAE and GCC region',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Dubai, UAE',
              addressLocality: 'Dubai',
              addressCountry: 'AE',
            },
            url: 'https://www.vmukti.com/uae/smart-city-surveillance',
            areaServed: [
              { '@type': 'City', name: 'Dubai' },
              { '@type': 'City', name: 'Abu Dhabi' },
              { '@type': 'City', name: 'Sharjah' },
            ],
          }),
        }}
      />
    </>
  );
}
