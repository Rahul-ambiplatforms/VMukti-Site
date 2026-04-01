'use client';

import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import PageContentWrapper from '../../../components/PageContentWrapper';
import FaqsSection from '../../../components/faqsSection';

export default function IndiaClient() {
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(0);

  const stats = [
    { value: '700+', label: 'Districts Covered' },
    { value: '50+', label: 'Smart Cities' },
    { value: '900+', label: 'Live Projects' },
    { value: '100%', label: 'STQC Certified' },
  ];

  const useCases = [
    {
      title: 'Government & Smart Cities',
      description: 'Smart city surveillance for 50+ Indian cities with real-time AI analytics for traffic management, crowd control, and public safety.',
      features: ['Traffic Analytics', 'Crowd Detection', 'ANPR', 'Incident Response']
    },
    {
      title: 'Banking & Financial',
      description: 'RBI-compliant video management for banks and financial institutions with 100% data localization and audit trails.',
      features: ['RBI Compliance', 'Vault Monitoring', 'Branch Analytics', 'Fraud Detection']
    },
    {
      title: 'Railways & Transport',
      description: 'Rail network surveillance for Indian Railways with real-time passenger flow analytics and security monitoring.',
      features: ['Platform Monitoring', 'Passenger Analytics', 'Tunnel Coverage', 'Incident Detection']
    },
    {
      title: 'Healthcare & Hospitals',
      description: 'HIPAA-aligned video management for Indian hospitals with privacy protection and operation theater surveillance.',
      features: ['Patient Privacy', 'OR Coverage', 'Pharmacy Security', 'Emergency Response']
    },
    {
      title: 'Education & Campuses',
      description: 'Campus safety for schools and universities with student security monitoring and incident documentation.',
      features: ['Campus Coverage', 'Access Control', 'Incident Review', 'Parent Notifications']
    },
    {
      title: 'Retail & Commerce',
      description: 'Multi-store surveillance for Indian retailers with inventory protection and customer behavior analytics.',
      features: ['Inventory Tracking', 'POS Monitoring', 'Customer Analytics', 'Loss Prevention']
    },
  ];

  const compliance = [
    {
      title: 'STQC Certification',
      description: 'Government-approved security certification for Indian IT products',
      icon: 'â'
    },
    {
      title: 'BIS ER Compliance',
      description: 'Bureau of Indian Standards Equipment & Rules conformance',
      icon: 'â'
    },
    {
      title: 'Data Localization',
      description: '100% data stored and processed within India',
      icon: 'â'
    },
    {
      title: 'IT Act Compliance',
      description: 'Full compliance with Information Technology Act 2000',
      icon: 'â'
    },
    {
      title: 'CERT-IN Alignment',
      description: 'Aligned with Indian Computer Emergency Response Team guidelines',
      icon: 'â'
    },
    {
      title: 'GeM Listed',
      description: 'Government e-Marketplace approved vendor',
      icon: 'â'
    },
  ];

  const comparison = [
    {
      aspect: 'Data Location',
      vmukti: 'India',
      chinese: 'China/Overseas'
    },
    {
      aspect: 'Government Approval',
      vmukti: 'STQC Certified',
      chinese: 'Not Certified'
    },
    {
      aspect: 'Data Sovereignty',
      vmukti: '100% Guaranteed',
      chinese: 'Questionable'
    },
    {
      aspect: 'Supply Chain Control',
      vmukti: 'Full Indian Control',
      chinese: 'Foreign Control'
    },
    {
      aspect: 'Security Audits',
      vmukti: 'CERT-IN Aligned',
      chinese: 'Not Guaranteed'
    },
    {
      aspect: 'Compliance Support',
      vmukti: '24/7 Indian Team',
      chinese: 'Limited Support'
    },
  ];

  const faqs = [
    {
      question: 'Is VMukti STQC certified for government projects?',
      answer: 'Yes, VMukti is STQC (Security Testing and Certification) certified by the Government of India, making it eligible for all government and smart city projects. This certification ensures our platform meets strict security and quality standards for Indian IT products.'
    },
    {
      question: 'Can VMukti meet RBI compliance requirements for banking?',
      answer: 'Yes, our platform is fully compliant with RBI (Reserve Bank of India) guidelines for banking surveillance. We support 100% data localization, encrypted transmission, audit trails, and regular security assessments as required by banking regulations.'
    },
    {
      question: 'How does VMukti handle data localization?',
      answer: '100% of your data is stored, processed, and backed up within India. We do not store any sensitive data outside India. All AI processing, backups, and disaster recovery infrastructure is located within Indian data centers and managed by Indian teams.'
    },
    {
      question: 'What is VMukti\'s advantage over Chinese alternatives like Hikvision and Dahua?',
      answer: 'VMukti offers complete data sovereignty with STQC certification, 100% data localization, and Indian government approval. Chinese alternatives lack STQC certification, government approval, and data localization guarantees. VMukti is trusted by 50+ Indian smart cities and 700+ districts.'
    },
    {
      question: 'Is VMukti available on India\'s GeM (Government e-Marketplace)?',
      answer: 'Yes, VMukti is registered and listed on GeM, making it easy for government agencies and institutions to procure our platform through the official government marketplace.'
    },
    {
      question: 'Can VMukti manage surveillance for smart city projects?',
      answer: 'Yes, VMukti is powering surveillance for 50+ smart cities across India. Our platform handles AI analytics for traffic, crowd management, incident detection, and public safety with the scale and reliability required for smart city deployments.'
    },
    {
      question: 'What support does VMukti provide for Indian Railways?',
      answer: 'We provide specialized solutions for Indian Railways including platform surveillance, passenger flow analytics, tunnel coverage with mesh connectivity, and real-time incident detection. Our platform has been deployed on major rail networks across India.'
    },
    {
      question: 'How is VMukti different from international VMS platforms?',
      answer: 'VMukti is built by Indians for India. We understand India\'s unique requirements including multi-language support, regional compliance needs, diverse network conditions, and government regulations. We offer localized pricing, government procurement eligibility, and 24/7 support in Indian time zones.'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageContentWrapper noPadding>
        <Box
          bg="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
          color="white"
          py={{ base: 12, md: 20 }}
          textAlign="center"
        >
          <Container maxW="4xl">
            <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
              India's Leading AI Video Intelligence Platform
            </Heading>
            <Text fontSize="xl" mb={8} opacity={0.95}>
              STQC-Certified Cloud VMS & AI Analytics. Trusted by 700+ Districts, 50+ Smart Cities, and 900+ Projects.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#2a5298"
                _hover={{ bg: '#f0f0f0' }}
                fontWeight="bold"
              >
                Book a Demo
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
                Government Pricing
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
                <Heading size="2xl" color="#2a5298" fontWeight="bold">
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

      {/* Use Cases Section */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Industry-Specific Solutions for India
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
                      bg="#f0f4ff"
                      color="#2a5298"
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

      {/* Compliance Section */}
      <PageContentWrapper>
        <Box bg="#f8f9fa" py={{ base: 8, md: 12 }} px={6} borderRadius="lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Government-Approved & Fully Compliant
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
                borderLeftColor="#2a5298"
              >
                <Text fontSize="2xl" fontWeight="bold" color="#2a5298">
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

      {/* VMukti vs Chinese Alternatives */}
      <PageContentWrapper>
        <Box py={{ base: 8, md: 12 }}>
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Why Choose VMukti Over Hikvision & Dahua?
          </Heading>
          <Box overflowX="auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f4ff' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #2a5298' }}>
                    Feature
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #2a5298', color: '#2a5298', fontWeight: 'bold' }}>
                    VMukti
                  </th>
                  <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #2a5298' }}>
                    Chinese Alternatives
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '12px' }}>
                      <strong>{item.aspect}</strong>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#2a5298', fontWeight: 'bold' }}>
                      {item.vmukti}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center', color: '#999' }}>
                      {item.chinese}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </PageContentWrapper>

      {/* FAQs Section */}
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

      {/* Final CTA Section */}
      <PageContentWrapper>
        <Box
          bg="linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
          color="white"
          py={{ base: 12, md: 16 }}
          borderRadius="lg"
          textAlign="center"
        >
          <Container maxW="2xl">
            <Heading as="h2" size="xl" mb={6}>
              Join India's Top Enterprises
            </Heading>
            <Text fontSize="lg" mb={8} opacity={0.95}>
              Trusted by government agencies, smart cities, banks, railways, and hospitals across India.
            </Text>
            <HStack justify="center" gap={4} wrap="wrap">
              <Button
                size="lg"
                bg="white"
                color="#2a5298"
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
                Request Pricing
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
            name: 'VMukti Solutions - India Office',
            image: 'https://www.vmukti.com/assets/logo.webp',
            description: 'STQC-certified Cloud VMS & AI Video Analytics provider for Indian enterprises',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Bangalore, India',
              addressLocality: 'Bangalore',
              addressCountry: 'IN',
            },
            url: 'https://www.vmukti.com/india/ai-video-analytics',
            telephone: '+91-XXXXXX',
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            priceRange: 'Custom Pricing',
            serviceType: 'Cloud Video Management System',
          }),
        }}
      />
    </>
  );
}
