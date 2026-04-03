'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button } from '@chakra-ui/react';
import PageContentWrapper from '../../../components/PageContentWrapper';

export default function SingaporeClient() {
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(0);

  const stats = [
    { value: '100%', label: 'PDPA Compliant' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '24/7', label: 'SGT Support' },
    { value: '500+', label: 'Enterprise Deployments' },
  ];

  const useCases = [
    {
      title: 'Smart Nation Infrastructure',
      description: 'Support Singapore\'s Smart Nation initiative with AI analytics for traffic, public safety, and crowd management across the island.',
      features: ['Traffic Analytics', 'Event Monitoring', 'Crime Prevention', 'Public Safety']
    },
    {
      title: 'Enterprise Campus',
      description: 'Unified management for enterprise campuses in Singapore\'s business districts with multi-building coordination.',
      features: ['Campus-Wide Coverage', 'Access Integration', 'Employee Safety', 'Asset Protection']
    },
    {
      title: 'Banking & Financial',
      description: 'PDPA and MAS-compliant surveillance for Singapore\'s banking and financial services sector.',
      features: ['Branch Security', 'Transaction Monitoring', 'Fraud Detection', 'Compliance Reporting']
    },
    {
      title: 'Retail & Shopping',
      description: 'Multi-store management for Singapore\'s vibrant retail sector with behavioral analytics.',
      features: ['Store Analytics', 'Customer Flow', 'Loss Prevention', 'Merchandising Insights']
    },
    {
      title: 'Port & Logistics',
      description: 'Port of Singapore operations with real-time cargo tracking and container management.',
      features: ['Cargo Tracking', 'Vehicle Monitoring', 'Operational Efficiency', 'Security']
    },
    {
      title: 'Healthcare',
      description: 'PDPA-compliant hospital surveillance with patient privacy protection.',
      features: ['Privacy Protection', 'Patient Safety', 'Staff Security', 'Incident Documentation']
    },
  ];

  const compliance = [
    {
      title: 'PDPA Compliant',
      description: 'Full Personal Data Protection Act compliance',
      icon: 'â'
    },
    {
      title: 'Privacy-First AI',
      description: 'Face masking and anonymization for privacy',
      icon: 'â'
    },
    {
      title: 'On-Premise Option',
      description: 'Deploy locally with full data control',
      icon: 'â'
    },
    {
      title: 'Singapore Data Center',
      description: 'Local data residency available',
      icon: 'â'
    },
    {
      title: 'Audit Trails',
      description: 'Complete access and action logging',
      icon: 'â'
    },
    {
      title: 'Consent Management',
      description: 'Easy consent capture and management',
      icon: 'â'
    },
  ];

  const features = [
    { name: 'PDPA Compliance', value: '100%' },
    { name: 'Privacy Masking', value: 'Yes' },
    { name: 'Encryption', value: 'AES-256' },
    { name: 'Data Residency', value: 'Singapore' },
    { name: 'Uptime SLA', value: '99.99%' },
    { name: 'Support Language', value: 'English' },
  ];

  const faqs = [
    {
      question: 'Is VMukti Cloud VMS PDPA compliant?',
      answer: 'Yes, VMukti is fully PDPA compliant. We support data anonymization, on-premise processing options, configurable retention policies, user access controls, and complete audit trails for all data handling.'
    },
    {
      question: 'Does VMukti support on-premise deployment in Singapore?',
      answer: 'Yes, we offer fully on-premise deployment options for maximum data control and PDPA compliance. We also provide hybrid cloud and full cloud options, allowing you to choose the deployment model that best suits your organization.'
    },
    {
      question: 'What privacy protections does VMukti provide?',
      answer: 'Our platform includes face masking, automatic person anonymization, data minimization, and consent-based processing. All privacy-sensitive data can be processed locally on-premise to ensure full control over personal data.'
    },
    {
      question: 'Can VMukti support Smart Nation initiatives?',
      answer: 'Yes, our platform is designed to support Singapore\'s Smart Nation initiatives with AI analytics for traffic management, public safety, and urban operations while maintaining PDPA compliance.'
    },
    {
      question: 'What support does VMukti provide in Singapore?',
      answer: 'We provide 24/7 technical support in Singapore Standard Time. Our team is based locally and understands Singapore\'s regulatory environment and business requirements.'
    },
    {
      question: 'Can VMukti integrate with Singapore\'s existing systems?',
      answer: 'Yes, our platform integrates with existing security systems, access control, and business intelligence tools. We provide APIs and webhooks for seamless integration with your current infrastructure.'
    },
    {
      question: 'How does VMukti handle data retention?',
      answer: 'Retention policies are fully configurable and PDPA-compliant. You can set retention periods based on your specific requirements, and we automate secure deletion of data according to your policies.'
    },
    {
      question: 'Is VMukti suitable for MAS-regulated institutions?',
      answer: 'Yes, our platform is designed for Singapore\'s financial institutions and is compatible with Monetary Authority of Singapore (MAS) requirements for data protection and operational resilience.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageContentWrapper noPadding>
        <Box
          bg="linear-gradient(135deg, #d32f2f 0%, #c62828 100%)"
          color="white"
          py={{ base: 12, md: 20 }}
          textAlign="center"
        >
          <Container maxW="4xl">
            <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
              Cloud VMS for Singapore's Smart Nation
            </Heading>
            <Text fontSize="xl" mb={8} opacity={0.95}>
              PDPA-Compliant Enterprise Video Management with Privacy-First AI Analytics
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#c62828"
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
                <Heading size="2xl" color="#d32f2f" fontWeight="bold">
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
            Solutions for Singapore Enterprises
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
                      bg="#ffebee"
                      color="#c62828"
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

      {/* Compliance */}
      <PageContentWrapper>
        <Box bg="#f8f9fa" py={{ base: 8, md: 12 }} px={6} borderRadius="lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Privacy & Compliance Features
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
                borderLeftColor="#d32f2f"
              >
                <Text fontSize="2xl" fontWeight="bold" color="#d32f2f">
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
                <Text color="#d32f2f" fontWeight="bold">
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
          bg="linear-gradient(135deg, #d32f2f 0%, #c62828 100%)"
          color="white"
          py={{ base: 12, md: 16 }}
          borderRadius="lg"
          textAlign="center"
        >
          <Container maxW="2xl">
            <Heading as="h2" size="xl" mb={6}>
              Secure Your Enterprise Today
            </Heading>
            <Text fontSize="lg" mb={8} opacity={0.95}>
              Join Singapore enterprises managing their surveillance with privacy-first VMukti.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#c62828"
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
                Contact Us
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
            name: 'VMukti Solutions - Singapore Office',
            image: 'https://www.vmukti.com/assets/logo.webp',
            description: 'PDPA-compliant Cloud VMS provider for Singapore enterprises',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Singapore',
              addressCountry: 'SG',
            },
            url: 'https://www.vmukti.com/singapore/enterprise-vms',
            areaServed: { '@type': 'City', name: 'Singapore' },
          }),
        }}
      />
    </>
  );
}
