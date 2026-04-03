'use client';
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  HStack,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const faqData = [
  // About VMukti
  {
    category: 'About VMukti',
    questions: [
      {
        id: 'what-is-vmukti',
        question: 'What is VMukti?',
        answer: 'VMukti is a cloud-native Video Management System platform that enables enterprises to deploy, manage, and analyse video surveillance across multiple locations. VMukti processes 1 billion+ video feeds monthly across 700+ districts and 50+ smart cities globally.',
      },
      {
        id: 'vmukti-history',
        question: 'When was VMukti founded and what is the company mission?',
        answer: 'VMukti was established to transform enterprise video surveillance through cloud technology and AI analytics. The company powers 900+ projects across government, retail, logistics, and smart city sectors, serving 200+ customers with 30+ AI modules for situational awareness and security automation.',
      },
      {
        id: 'vmukti-scale',
        question: 'What is the scale of VMukti operations?',
        answer: 'VMukti operates at scale: 900+ active projects, 700+ government districts, 50+ smart cities, 200+ enterprise customers, 30+ AI analytics modules, and processes over 1 billion video feeds annually. The platform maintains 99.99% uptime for mission-critical deployments.',
      },
      {
        id: 'vmukti-compliance',
        question: 'What certifications and compliance standards does VMukti maintain?',
        answer: 'VMukti is compliant with GDPR, PDPB (India), PCI DSS, and sector-specific regulations including HIPAA for healthcare and NERC CIP for utilities. The platform supports automated audit trails, encryption in transit and at rest, and retention management for regulatory adherence.',
      },
    ],
  },
  // Cloud VMS
  {
    category: 'Cloud VMS',
    questions: [
      {
        id: 'cloud-vms-definition',
        question: 'What is Cloud VMS and how does it work?',
        answer: 'Cloud VMS (Video Management System) is a scalable, cloud-based platform that ingests video from IP cameras, processes streams for analytics, and stores footage in secure cloud storage. Unlike on-premise NVRs, Cloud VMS eliminates infrastructure maintenance, provides elastic storage, and enables AI-powered analysis at scale.',
      },
      {
        id: 'nvr-vs-cloud-vms',
        question: 'How does Cloud VMS differ from traditional NVR systems?',
        answer: 'Traditional NVR systems require on-premise servers, dedicated storage, and manual maintenance at each site. Cloud VMS uses cloud infrastructure for scalable storage, automatic updates, built-in redundancy, remote accessibility, and enables advanced AI that would be computationally expensive on local NVR hardware. For multi-site enterprises, Cloud VMS centralises management into one platform.',
      },
      {
        id: 'cloud-vms-benefits',
        question: 'What are the main benefits of Cloud VMS?',
        answer: 'Key benefits include: remote access from any device, automatic software updates eliminating patching overhead, elastic storage that scales on demand, built-in disaster recovery, reduced hardware footprint and maintenance costs, integration with AI analytics, and centralised multi-site management. Enterprises report 40-60% reduction in total cost of ownership compared to NVR deployments.',
      },
      {
        id: 'camera-compatibility',
        question: 'What camera brands are compatible with VMukti Cloud VMS?',
        answer: 'VMukti Cloud VMS integrates with all major IP camera manufacturers including Hikvision, Dahua, Uniview, Axis, Sony, Bosch, and Hanwha. The platform supports ONVIF and RTSP protocols, ensuring compatibility with existing camera infrastructure without requiring hardware replacement.',
      },
      {
        id: 'storage-capacity',
        question: 'How much video storage capacity does Cloud VMS provide?',
        answer: 'VMukti Cloud VMS offers elastic storage that scales from terabytes to petabytes based on deployment needs. Storage is provisioned per-site with configurable retention policies (7 days to 10+ years). The platform supports hot storage for recent footage and cold storage for archival, optimising costs while maintaining rapid retrieval.',
      },
    ],
  },
  // AI Analytics
  {
    category: 'AI Analytics',
    questions: [
      {
        id: 'ai-analytics-definition',
        question: 'What is AI video analytics and how does it work?',
        answer: 'AI video analytics applies machine learning models to live or recorded video to automatically detect objects, classify behaviour, and identify anomalies without manual review. VMukti uses convolutional neural networks trained on millions of annotated frames to analyse streams in real-time, enabling detection of intrusions, crowd formations, abandoned objects, and asset movement.',
      },
      {
        id: 'ai-modules',
        question: 'What AI analytics modules does VMukti offer?',
        answer: 'VMukti provides 30+ AI modules including people counting, crowd density heat mapping, licence plate recognition (LPR), facial recognition, perimeter breach detection, loitering and intrusion alerts, abandoned object detection, falls and fights, vehicle classification, and cross-camera tracking. Modules are deployed per-camera based on use case requirements.',
      },
      {
        id: 'edge-vs-cloud-ai',
        question: 'Should I use edge AI or cloud AI for analytics?',
        answer: 'Edge AI processes video locally on-camera or at the site, delivering sub-second response for time-critical use cases like access control and intrusion detection, while reducing bandwidth. Cloud AI provides advanced analytics, cross-site correlation, and pattern analysis but requires connectivity. Most enterprises use hybrid: edge for real-time detection, cloud for deeper analysis and business intelligence.',
      },
      {
        id: 'ai-accuracy',
        question: 'How accurate are VMukti AI analytics models?',
        answer: 'VMukti AI models achieve 95%+ accuracy for people counting and detection in standard conditions. Accuracy varies by use case: facial recognition 98%+ in controlled lighting, licence plate recognition 97%+ in daylight, loitering detection 94%+. Models are continuously trained on new data to improve performance across diverse environments and demographics.',
      },
      {
        id: 'ai-false-positives',
        question: 'How does VMukti handle false positives in AI analytics?',
        answer: 'VMukti reduces false positives through multi-model ensembles, temporal analysis (tracking objects across frames), configurable confidence thresholds per alert type, and contextual filtering. Operators can set rules like "alert only if loitering detected for 5+ minutes" to filter transient events. Continuous learning from operator feedback further refines model accuracy.',
      },
      {
        id: 'ai-real-time',
        question: 'Is AI analytics processing real-time?',
        answer: 'VMukti supports true real-time AI processing at edge (sub-100ms latency) and near-real-time at cloud (500-2000ms depending on model complexity and network conditions). High-priority events like intrusion breaches trigger immediate alerts. The platform prioritises low-latency processing for access control and security events, while batch processing handles lower-priority analytics.',
      },
    ],
  },
  // Deployment
  {
    category: 'Deployment',
    questions: [
      {
        id: 'deployment-time',
        question: 'How long does it take to deploy VMukti Cloud VMS?',
        answer: 'Single-site deployment typically takes 2-4 weeks: site survey (1 week), network planning (3-5 days), camera configuration (3-5 days), system testing (3-5 days), and staff training (2-3 days). Multi-site deployments scale linearly. VMukti provides deployment templates and tools to accelerate time-to-value.',
      },
      {
        id: 'network-requirements',
        question: 'What are the network requirements for Cloud VMS?',
        answer: 'VMukti requires internet connectivity with minimum 2 Mbps upload per site for basic surveillance, 5-10 Mbps for HD analytics, and 20+ Mbps for 4K streams. The platform supports WAN optimisation and video compression to operate over constrained networks. A 10 Mbps link can reliably handle 10-15 HD cameras with analytics.',
      },
      {
        id: 'hybrid-deployment',
        question: 'Can VMukti be deployed in hybrid (cloud + on-premise) mode?',
        answer: 'Yes. VMukti supports hybrid deployments where edge components run on-premise for real-time processing and local storage, while cloud handles analytics, archival, and cross-site correlation. This architecture is ideal for organisations with data sovereignty requirements or locations with unreliable connectivity.',
      },
      {
        id: 'multi-site-deployment',
        question: 'How does VMukti handle multi-site deployments?',
        answer: 'VMukti centralises management of 100s of distributed sites through a single web interface. Each site operates independently for fault tolerance, with cloud backend providing cross-site correlation, unified alerts, and aggregate reporting. Bandwidth-constrained sites can operate with edge-only processing and periodic cloud sync.',
      },
      {
        id: 'migration-path',
        question: 'How do I migrate from on-premise NVR to Cloud VMS?',
        answer: 'VMukti provides a phased migration approach: phase 1 runs parallel NVR and Cloud VMS during transition, phase 2 gradually shifts new footage to cloud, phase 3 archives NVR data for long-term retention. Most enterprises migrate 5-10 sites monthly. Legacy NVR can be decommissioned after 30-90 day confidence period.',
      },
    ],
  },
  // Compliance
  {
    category: 'Compliance',
    questions: [
      {
        id: 'gdpr-compliance',
        question: 'How does VMukti ensure GDPR compliance?',
        answer: 'VMukti provides GDPR-ready features: configurable retention and auto-deletion policies, granular access controls with full audit trails, data encryption in transit and at rest, subject access request (SAR) workflows, and data export in machine-readable formats. The platform maintains detailed logs of all data access and processing activities.',
      },
      {
        id: 'data-retention',
        question: 'How should I configure retention policies?',
        answer: 'VMukti supports customisable retention from 7 days to 10+ years per site or camera group. Best practices: 30-90 days for general surveillance, 1 year for incident investigation storage, 7+ years for compliance-mandated sectors. Automated deletion policies prevent accidental data hoarding while meeting regulatory minimums.',
      },
      {
        id: 'encryption',
        question: 'What encryption standards does VMukti use?',
        answer: 'VMukti uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. Camera connections are authenticated via API keys or certificates. Storage encryption keys are managed through hardware security modules (HSMs) with multi-party control, preventing unauthorised access even by VMukti staff.',
      },
      {
        id: 'audit-trails',
        question: 'What audit logging capabilities does VMukti provide?',
        answer: 'VMukti logs all user activities: login events, video access (timestamps, duration, user ID), alert dismissals, configuration changes, and data exports. Audit logs are immutable, tamper-evident, and can be exported for regulatory review. Logs are retained for 7 years in compliance with enterprise standards.',
      },
      {
        id: 'data-sovereignty',
        question: 'Does VMukti support data sovereignty requirements?',
        answer: 'Yes. VMukti can deploy entirely within specific geographic regions (India, EU, etc.) with data never crossing borders. The platform supports hybrid deployments where footage is processed locally and only metadata/analytics are sent to cloud, meeting strict data residency requirements.',
      },
    ],
  },
  // Support
  {
    category: 'Support',
    questions: [
      {
        id: 'sla-uptime',
        question: 'What SLA uptime does VMukti provide?',
        answer: 'VMukti guarantees 99.99% uptime for production deployments, backed by service level agreements with credits for breaches. This translates to maximum 52 minutes downtime per year. The platform achieves this through multi-region cloud deployment, automatic failover, and redundant networking.',
      },
      {
        id: 'support-tiers',
        question: 'What support options are available?',
        answer: 'VMukti offers three support tiers: Standard (business hours, 24-hour response), Premium (24/5 support, 4-hour response, dedicated technical contact), and Enterprise (24/7 support, 1-hour response, assigned solutions architect). All tiers include technical support, security updates, and quarterly business reviews.',
      },
      {
        id: 'training-onboarding',
        question: 'Does VMukti provide training and onboarding?',
        answer: 'Yes. VMukti includes on-site operator training (2-3 days), administrator certification courses (5 days), and online learning portal with video tutorials and documentation. Premium customers receive custom training tailored to their specific use cases and security team structure.',
      },
      {
        id: 'api-documentation',
        question: 'Is API documentation available for integrations?',
        answer: 'VMukti provides comprehensive REST API documentation with OpenAPI/Swagger specs, webhook support for event notifications, and SDKs in Python, Node.js, and Java. Integration examples for common platforms like Splunk, ELK, and SIEM systems are available in the developer portal.',
      },
      {
        id: 'roadmap-features',
        question: 'What new features are in VMukti roadmap?',
        answer: 'Planned features include advanced biometric analytics, autonomous drone integration, immersive 3D environment mapping, blockchain-based evidence chains, and expanded AI modules for industrial monitoring. Enterprise customers can influence roadmap priorities through the customer advisory board.',
      },
    ],
  },
  // Pricing
  {
    category: 'Pricing',
    questions: [
      {
        id: 'pricing-model',
        question: 'How is VMukti priced?',
        answer: 'VMukti uses consumption-based pricing: per-camera monthly fees (starting at $50-150 per camera depending on analytics modules), plus cloud storage charges ($5-15 per TB/month). Multi-year commitments provide 20-30% discounts. No upfront infrastructure costs or long-term contracts required.',
      },
      {
        id: 'free-trial',
        question: 'Is there a free trial available?',
        answer: 'Yes. VMukti offers a 30-day free trial supporting up to 10 cameras, all analytics modules, and full platform features. No credit card required. Trials include technical onboarding and consultation. Conversion to paid plans is seamless with data continuity.',
      },
      {
        id: 'volume-discounts',
        question: 'Does VMukti offer volume or enterprise discounts?',
        answer: 'Yes. Customers with 50+ cameras receive tiered discounts: 15% at 50+ cameras, 25% at 100+ cameras, 40% at 500+ cameras. Multi-year commitments (3-5 years) provide additional 20-30% discounts. Custom pricing is available for government and critical infrastructure deployments.',
      },
      {
        id: 'hidden-costs',
        question: 'Are there any hidden costs in VMukti pricing?',
        answer: 'No hidden costs. Pricing is transparent: per-camera fees, storage charges, and optional premium support. One-time costs include site survey ($1,000-5,000 depending on scale), integration services, and training. All ongoing costs are documented in the quote upfront.',
      },
      {
        id: 'roi-calculation',
        question: 'How do I calculate ROI for VMukti deployment?',
        answer: 'Enterprise customers typically see ROI within 12-18 months through: reduced staffing (fewer operators needed), faster incident response (property/asset recovery), reduced NVR maintenance costs, and avoided regulatory fines. Organisations report 40-60% reduction in surveillance total cost of ownership compared to on-premise systems.',
      },
    ],
  },
];


const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState([0]);

  // Build FAQPage schema
  const allQuestions = faqData.flatMap((category) =>
    category.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    }))
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'VMukti Cloud VMS FAQ',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-answer-text'],
    },
    url: 'https://vmukti.com/knowledge-base/faq',
  };

  // Filter FAQs based on search
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return faqData;

    return faqData
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [searchQuery]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <Container maxW="1200px" py={12}>
        {/* Header */}
        <VStack spacing={6} mb={10} textAlign="center">
          <Heading as="h1" size="2xl" color="#1a202c">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px">
            Comprehensive answers about VMukti Cloud VMS, AI analytics, deployment, compliance, and support.
          </Text>
        </VStack>

        {/* Search Bar */}
        <Box mb={8}>
          <HStack>
            <SearchIcon color="gray.400" />
            <Input
              placeholder="Search questions..."
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

        {/* FAQ Categories */}
        <VStack spacing={8} align="stretch">
          {filteredData.map((category, categoryIndex) => (
            <Box key={categoryIndex}>
              <HStack mb={4}>
                <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
                  {category.category}
                </Badge>
                <Text fontSize="sm" color="gray.500">
                  {category.questions.length} questions
                </Text>
              </HStack>

              <Divider mb={4} />

              <Accordion allowMultiple>
                {category.questions.map((question, qIndex) => (
                  <AccordionItem
                    key={question.id}
                    borderLeft="4px"
                    borderColor="transparent"
                    _expanded={{
                      borderColor: '#2563eb',
                      bg: 'rgba(37, 99, 235, 0.02)',
                    }}
                    py={2}
                  >
                    <AccordionButton
                      _expanded={{ bg: 'transparent' }}
                      _hover={{ bg: 'rgba(37, 99, 235, 0.05)' }}
                      py={3}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color="#1a202c"
                        >
                          {question.question}
                        </Text>
                      </Box>
                    </AccordionButton>

                    <AccordionPanel pb={4} className="faq-answer-text">
                      <Text
                        color="gray.700"
                        lineHeight="1.8"
                        whiteSpace="pre-wrap"
                      >
                        {question.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}

          {filteredData.length === 0 && (
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color="gray.500">
                No questions found matching "{searchQuery}". Try different keywords.
              </Text>
            </Box>
          )}
        </VStack>

        {/* Stats Summary */}
        <Box mt={12} p={6} bg="blue.50" borderRadius="lg" borderLeft="4px" borderColor="#2563eb">
          <Text fontSize="sm" color="gray.600" mb={2}>
            Questions Total: {allQuestions.length}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Covering all aspects of VMukti Cloud VMS, from technical implementation to compliance and support.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default FAQPage;
