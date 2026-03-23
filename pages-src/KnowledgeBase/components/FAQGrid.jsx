'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { FaThumbsUp, FaThumbsDown, FaArrowRight } from 'react-icons/fa';

export const kbFaqs = [
  {
    id: 'cloud-vms-vs-nvr',
    category: 'Cloud VMS',
    question: 'What is Cloud VMS and how does it differ from traditional NVR?',
    answer: `Cloud Video Management System (Cloud VMS) is a modern approach to video surveillance that stores, manages, and processes video footage in the cloud rather than on local hardware like Network Video Recorders (NVRs).

Unlike traditional NVR systems that require on-premise servers, dedicated storage arrays, and manual maintenance, Cloud VMS leverages scalable cloud infrastructure to deliver flexible, accessible, and cost-effective video management.

Key differences include remote accessibility from any device, automatic software updates, elastic storage that scales on demand, reduced hardware footprint, and built-in redundancy for disaster recovery. Cloud VMS also enables advanced AI analytics that would be computationally expensive to run on local NVR hardware.

For enterprises managing multiple sites, Cloud VMS eliminates the need to maintain separate NVR systems at each location, centralising management into a single unified platform.`,
    relatedQuestions: [
      { label: 'How does AI video analytics work in enterprise surveillance?', id: 'ai-video-analytics' },
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
      { label: 'How to migrate from on-premise NVR to cloud VMS?', id: 'nvr-to-cloud-migration' },
    ],
  },
  {
    id: 'ai-video-analytics',
    category: 'AI Analytics',
    question: 'How does AI video analytics work in enterprise surveillance?',
    answer: `AI video analytics applies machine learning models directly to live or recorded video streams to automatically detect, classify, and respond to events without requiring manual review.

At its core, the system uses convolutional neural networks (CNNs) and computer vision algorithms trained on millions of annotated video frames. When a camera stream is ingested, frames are analysed in real-time to identify objects (people, vehicles, assets), behaviours (loitering, intrusion, crowd formation), and anomalies (abandoned objects, falls, fights).

In enterprise deployments, AI analytics is typically layered on top of existing camera infrastructure. VMukti's platform processes streams at the edge or in the cloud depending on latency requirements, with edge processing preferred for immediate response events like access control violations.

Key capabilities include people counting and flow analysis, licence plate recognition (LPR), perimeter breach detection, heat mapping, and cross-camera tracking. These insights are delivered via dashboards, real-time alerts, and automated reports — enabling security teams to act on data rather than review hours of footage.`,
    relatedQuestions: [
      { label: 'What is Cloud VMS and how does it differ from traditional NVR?', id: 'cloud-vms-vs-nvr' },
      { label: 'How to choose between edge AI and cloud AI for surveillance?', id: 'edge-vs-cloud-ai' },
      { label: 'What is the ROI of cloud video surveillance for enterprises?', id: 'roi-cloud-surveillance' },
    ],
  },
  {
    id: 'enterprise-command-center',
    category: 'Cloud VMS',
    question: 'What is an Enterprise Command Center for video surveillance?',
    answer: `An Enterprise Command Center (ECC) is a centralised operations hub that aggregates video feeds, security alerts, and analytics data from across an organisation's entire estate into a single, unified interface.

Unlike traditional control rooms that display raw camera feeds on a video wall, a modern ECC is software-driven. It uses AI to prioritise alerts, correlate events across multiple sites, and surface actionable intelligence to operators — dramatically reducing the cognitive load of managing hundreds or thousands of cameras simultaneously.

VMukti's Enterprise Command Center solution enables security teams to monitor all locations from one interface, set automated escalation workflows for specific event types, generate compliance and incident reports automatically, and integrate with access control, HR, and ERP systems for a complete situational picture.

ECC deployments are particularly valuable for organisations with distributed infrastructure: banking networks, retail chains, logistics hubs, smart cities, and critical national infrastructure. The result is faster incident response, lower staffing requirements, and stronger audit trails for regulatory compliance.`,
    relatedQuestions: [
      { label: 'What compliance standards apply to enterprise video surveillance?', id: 'compliance-standards' },
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
      { label: 'What is the ROI of cloud video surveillance for enterprises?', id: 'roi-cloud-surveillance' },
    ],
  },
  {
    id: 'edge-vs-cloud-ai',
    category: 'Edge Computing',
    question: 'How to choose between edge AI and cloud AI for surveillance?',
    answer: `The choice between edge AI and cloud AI for surveillance depends on four key factors: latency requirements, bandwidth constraints, data sovereignty policies, and scale of deployment.

Edge AI processes video locally on the camera or an on-site compute device. This delivers sub-second response times for time-critical use cases like access control, intrusion detection, and automated gate opening — where waiting for a cloud round-trip is not acceptable. Edge processing also reduces bandwidth costs significantly, since only metadata and clips (not full streams) are sent to the cloud.

Cloud AI is preferred when you need advanced analytics that require significant compute power, cross-site correlation (e.g., tracking a suspect across multiple locations), long-term pattern analysis, or rapid deployment without on-site hardware installation. Cloud AI models are also easier to update and retrain as requirements evolve.

In practice, most enterprise surveillance architectures use a hybrid approach: edge AI handles real-time detection and filtering, while cloud AI performs deeper analysis, archival, and business intelligence. VMukti's platform supports both modes and allows organisations to define per-camera processing policies based on their specific requirements.`,
    relatedQuestions: [
      { label: 'How does AI video analytics work in enterprise surveillance?', id: 'ai-video-analytics' },
      { label: 'What camera brands are compatible with VMukti Cloud VMS?', id: 'compatible-cameras' },
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
    ],
  },
  {
    id: 'compliance-standards',
    category: 'Compliance',
    question: 'What compliance standards apply to enterprise video surveillance?',
    answer: `Enterprise video surveillance is subject to a growing body of privacy, data protection, and sector-specific regulations that vary by geography and industry.

In the European Union, GDPR mandates that video surveillance of individuals constitutes processing of personal data. Organisations must establish a lawful basis for processing, post clear signage, limit retention periods, and respond to subject access requests.

In the UK, the ICO's CCTV Code of Practice and the Surveillance Camera Commissioner's guidelines apply. India's PDPB (Personal Data Protection Bill) and equivalent legislation across APAC markets are increasingly shaping enterprise surveillance programmes.

Industry-specific standards include PCI DSS (retail and financial services), HIPAA (healthcare facilities), and NERC CIP (energy and utilities). These frameworks set requirements for access controls, audit logs, retention policies, and encryption.

VMukti's platform supports compliance through configurable retention and auto-deletion policies, granular access controls with full audit trails, encrypted transmission and storage, and automated reporting that maps to common compliance frameworks.`,
    relatedQuestions: [
      { label: 'What is an Enterprise Command Center for video surveillance?', id: 'enterprise-command-center' },
      { label: 'How does facial recognition work in enterprise security?', id: 'facial-recognition' },
      { label: 'How to migrate from on-premise NVR to cloud VMS?', id: 'nvr-to-cloud-migration' },
    ],
  },
  {
    id: 'multi-site-deployments',
    category: 'Cloud VMS',
    question: 'How does VMukti Cloud VMS handle multi-site deployments?',
    answer: `VMukti Cloud VMS is architected from the ground up for multi-site enterprise deployments. Rather than managing separate systems at each location, all sites are unified under a single cloud management plane with centralised configuration, monitoring, and reporting.

Camera registration is handled remotely — new sites can be onboarded without on-site IT visits. Cameras connect to the VMukti cloud agent via secure tunnels, and administrators manage all devices from a single dashboard regardless of physical location.

Role-based access control allows regional security managers to view only their sites, while central security teams retain a global view. Alerts can be routed based on geography, severity, and event type to ensure the right teams are notified.

Bandwidth management features include configurable stream quality per camera, local buffering to handle intermittent connectivity, and scheduled synchronisation windows for high-volume archive transfers. VMukti currently supports deployments across 900+ enterprise locations spanning banking, retail, logistics, and smart city projects.`,
    relatedQuestions: [
      { label: 'What is Cloud VMS and how does it differ from traditional NVR?', id: 'cloud-vms-vs-nvr' },
      { label: 'What camera brands are compatible with VMukti Cloud VMS?', id: 'compatible-cameras' },
      { label: 'How to migrate from on-premise NVR to cloud VMS?', id: 'nvr-to-cloud-migration' },
    ],
  },
  {
    id: 'roi-cloud-surveillance',
    category: 'Cloud VMS',
    question: 'What is the ROI of cloud video surveillance for enterprises?',
    answer: `The ROI of cloud video surveillance comes from three categories: direct cost savings, productivity improvements, and loss prevention.

On the cost side, cloud VMS eliminates capital expenditure on NVR hardware and associated infrastructure. Maintenance costs fall dramatically — there is no on-site server to service, no storage arrays to replace, and no local software to patch. Typical enterprises report 30–50% reduction in total surveillance infrastructure costs over a 3-year period compared to traditional NVR.

Productivity gains come from AI analytics reducing the hours security staff spend reviewing footage. Rather than manually watching feeds, operators are alerted to specific incidents. Investigation time for incidents falls from hours to minutes when AI-powered search is available.

Loss prevention ROI depends on the vertical: retailers report 20–40% reduction in shrinkage after deploying AI-powered behaviour analytics; logistics operators see measurable reductions in cargo theft; financial services firms reduce fraud and compliance incidents through automated anomaly detection.

Also factor in insurance premium reductions, reduced incident liability through better documentation, and faster regulatory compliance evidence generation.`,
    relatedQuestions: [
      { label: 'How does AI video analytics work in enterprise surveillance?', id: 'ai-video-analytics' },
      { label: 'What is an Enterprise Command Center for video surveillance?', id: 'enterprise-command-center' },
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
    ],
  },
  {
    id: 'facial-recognition',
    category: 'AI Analytics',
    question: 'How does facial recognition work in enterprise security?',
    answer: `Facial recognition in enterprise security works by extracting a mathematical representation (embedding) of a detected face from a video frame and comparing it against a reference database to establish identity.

The process involves four stages: face detection (locating faces in the frame), face alignment (normalising orientation and scale), feature extraction (converting the face to a compact numerical vector using a deep learning model), and matching (comparing the vector against enrolled identities using similarity metrics).

In enterprise access control, enrolled employees' face embeddings are stored in a secure database. When an individual approaches a camera, their embedding is computed in real-time and matched against the database — granting or denying access based on the result. Modern systems achieve identification in under 500 milliseconds with accuracy exceeding 99.5% under controlled lighting.

Compliance considerations are significant: facial recognition is classified as biometric data processing under GDPR and equivalent legislation, requiring explicit legal basis, robust security controls, and in some jurisdictions, regulatory approval before deployment. VMukti's implementation includes privacy-by-design features such as on-device processing options, configurable data retention, and consent management tools.`,
    relatedQuestions: [
      { label: 'What compliance standards apply to enterprise video surveillance?', id: 'compliance-standards' },
      { label: 'How does AI video analytics work in enterprise surveillance?', id: 'ai-video-analytics' },
      { label: 'How to choose between edge AI and cloud AI for surveillance?', id: 'edge-vs-cloud-ai' },
    ],
  },
  {
    id: 'compatible-cameras',
    category: 'Cloud VMS',
    question: 'What camera brands are compatible with VMukti Cloud VMS?',
    answer: `VMukti Cloud VMS is designed to be camera-agnostic, supporting the vast majority of IP cameras available in the market. Compatibility is delivered through three integration pathways.

ONVIF compliance is the primary integration standard. VMukti supports ONVIF Profile S (live streaming), Profile G (recording), Profile T (advanced media), and Profile M (metadata). Any camera that adheres to these standards — including devices from Hikvision, Dahua, Axis, Bosch, Hanwha, Sony, Pelco, and hundreds of other manufacturers — connects to the platform without additional configuration.

RTSP stream support provides a secondary integration path for cameras that publish standard RTSP streams, even without full ONVIF compliance. This covers a wide range of legacy and budget cameras.

For cameras from major enterprise vendors, VMukti maintains native SDK integrations that unlock advanced features such as PTZ control, digital input/output, edge analytics data, and manufacturer-specific metadata streams. Analogue cameras can be connected via IP encoder bridges.`,
    relatedQuestions: [
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
      { label: 'How to migrate from on-premise NVR to cloud VMS?', id: 'nvr-to-cloud-migration' },
      { label: 'What is Cloud VMS and how does it differ from traditional NVR?', id: 'cloud-vms-vs-nvr' },
    ],
  },
  {
    id: 'nvr-to-cloud-migration',
    category: 'Cloud VMS',
    question: 'How to migrate from on-premise NVR to cloud VMS?',
    answer: `Migrating from on-premise NVR to cloud VMS is a structured process that can be completed with minimal disruption to your security operations. The migration typically follows four phases.

Assessment and planning: VMukti's team conducts a site survey to catalogue existing cameras, NVR hardware, network infrastructure, and storage requirements. This results in a migration plan that prioritises sites, defines a timeline, and identifies any cameras that may need firmware updates or replacement.

Pilot deployment: One or two representative sites are migrated first. Existing cameras are redirected to the VMukti cloud agent while the legacy NVR remains active as a fallback. This parallel-run phase validates connectivity, image quality, and analytics performance before broader rollout.

Phased rollout: Sites are migrated in waves, with the legacy NVR decommissioned at each site only after the cloud system is confirmed stable. Historical footage can be migrated to cloud archive or retained locally depending on retention policy and regulatory requirements.

Most single-site migrations are completed within 1–2 days. Enterprise-wide multi-site migrations are typically completed within 4–12 weeks depending on scale and complexity.`,
    relatedQuestions: [
      { label: 'What is Cloud VMS and how does it differ from traditional NVR?', id: 'cloud-vms-vs-nvr' },
      { label: 'What camera brands are compatible with VMukti Cloud VMS?', id: 'compatible-cameras' },
      { label: 'How does VMukti Cloud VMS handle multi-site deployments?', id: 'multi-site-deployments' },
    ],
  },
];

const popularQuestions = [
  { label: 'What is Cloud VMS?', id: 'cloud-vms-vs-nvr' },
  { label: 'How does AI analytics works?', id: 'ai-video-analytics' },
  { label: 'ROI of cloud surveillance', id: 'roi-cloud-surveillance' },
  { label: 'Facial Recognition explanation', id: 'facial-recognition' },
  { label: 'NVR to cloud migration', id: 'nvr-to-cloud-migration' },
];

const relatedProducts = [
  { label: 'What is Cloud VMS?', id: 'cloud-vms-vs-nvr' },
  { label: 'How does AI analytics works?', id: 'ai-video-analytics' },
  { label: 'ROI of cloud surveillance', id: 'roi-cloud-surveillance' },
  { label: 'Facial Recognition explanation', id: 'facial-recognition' },
  { label: 'NVR to cloud migration', id: 'nvr-to-cloud-migration' },
];

const FAQItem = ({ faq, isExpanded, onToggle, onScrollTo }) => {
  const [helpfulState, setHelpfulState] = useState(null);

  return (
    <Box borderBottom="1px solid #E0E0E0" py="4px">
      <Box
        as="button"
        w="100%"
        textAlign="left"
        py={{ base: '14px', md: '16px' }}
        px="0"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="12px"
        onClick={onToggle}
        _focus={{ outline: 'none' }}
      >
        {/* Open: Bold 700 | Closed: Regular 400 — both 16px, line-height 100% */}
        <Text
          as="h2"
          fontFamily="'Wix Madefor Display', sans-serif"
          fontWeight={isExpanded ? '700' : '400'}
          fontSize="16px"
          lineHeight="1"
          letterSpacing="0"
          color="#000000"
          flex="1"
        >
          {faq.question}
        </Text>
        <Box
          flexShrink={0}
          mt="3px"
          transition="transform 0.25s ease"
          transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}
          display="flex"
          alignItems="center"
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
          </svg>
        </Box>
      </Box>

      {isExpanded && (
        <Box pb={{ base: '16px', md: '20px' }}>
          {/* Answer — Regular 400, 14px, line-height 100% */}
          <Text
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="400"
            fontSize="14px"
            lineHeight="1"
            letterSpacing="0"
            color="#000000"
            whiteSpace="pre-line"
            mb="16px"
          >
            {faq.answer}
          </Text>

          {/* Related Questions */}
          {faq.relatedQuestions?.length > 0 && (
            <Box mb="16px">
              <Text
                fontSize="13px"
                fontWeight="600"
                color="#000000"
                mb="8px"
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                Related Questions
              </Text>
              {/* Related question pills — h36, border-radius 15px, gap 8px, pt8 pr27 pb8 pl10, border #E7E7E7 */}
              <Flex flexWrap="wrap" gap="8px">
                {faq.relatedQuestions.map((rq) => (
                  <Box
                    key={rq.id}
                    as="button"
                    onClick={() => onScrollTo(rq.id)}
                    h="36px"
                    pt="8px"
                    pb="8px"
                    pl="10px"
                    pr="27px"
                    borderRadius="15px"
                    border="1px solid #E7E7E7"
                    fontSize="14px"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontWeight="400"
                    color="#3F77A5"
                    bg="transparent"
                    _hover={{ bg: '#F5F5F5', borderColor: '#BBBABA' }}
                    textAlign="left"
                    transition="all 0.15s"
                    lineHeight="1"
                    display="flex"
                    alignItems="center"
                  >
                    {rq.label}
                  </Box>
                ))}
              </Flex>
            </Box>
          )}

          {/* Was this helpful? */}
          <HStack spacing="12px" mt="8px">
            <Text fontSize="13px" color="#BECEDC" fontFamily="'Wix Madefor Display', sans-serif">
              Was this helpful?
            </Text>
            {/* Yes/No — w74, h30, border-radius full pill, border 1px */}
            <Button
              w="74px"
              h="30px"
              variant="outline"
              leftIcon={<FaThumbsUp size="11px" />}
              borderRadius="9999px"
              borderWidth="1px"
              borderColor={helpfulState === 'yes' ? '#3F77A5' : '#D0D0D0'}
              color={helpfulState === 'yes' ? '#3F77A5' : '##444444'}
              bg={helpfulState === 'yes' ? '#EAF1FA' : 'transparent'}
              onClick={() => setHelpfulState('yes')}
              fontFamily="'Wix Madefor Display', sans-serif"
              fontSize="13px"
              fontWeight="500"
              _hover={{ borderColor: '#3F77A5', color: '#3F77A5' }}
              px="0"
            >
              Yes
            </Button>
            <Button
              w="74px"
              h="30px"
              variant="outline"
              leftIcon={<FaThumbsDown size="11px" />}
              borderRadius="9999px"
              borderWidth="1px"
              borderColor={helpfulState === 'no' ? '#DB7B3A' : '#D0D0D0'}
              color={helpfulState === 'no' ? '#DB7B3A' : '#444444'}
              bg={helpfulState === 'no' ? '#FFF5EE' : 'transparent'}
              onClick={() => setHelpfulState('no')}
              fontFamily="'Wix Madefor Display', sans-serif"
              fontSize="13px"
              fontWeight="500"
              _hover={{ borderColor: '#DB7B3A', color: '#DB7B3A' }}
              px="0"
            >
              No
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

const FAQGrid = ({ activeCategory, searchQuery }) => {
  const [expandedId, setExpandedId] = useState('cloud-vms-vs-nvr');

  const filteredFaqs = kbFaqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToFaq = (id) => {
    setExpandedId(id);
    setTimeout(() => {
      const el = document.getElementById(`faq-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <Box
      bg="#E7E7E7"
      px={{ base: '16px', md: '24px' }}
      py={{ base: '32px', md: '48px' }}
    >
      <Flex
        maxW="1512px"
        mx="auto"
        gap="30px"
        align="flex-start"
        direction={{ base: 'column', xl: 'row' }}
      >
        {/* ── Main FAQ block — full width on mobile, flex-1 on desktop ── */}
        <Box
          flex="1"
          w="100%"
          minW="0"
          bg="#FFFFFF"
          borderRadius="24px"
          p={{ base: '20px', md: '32px', lg: '40px' }}
          minH={{ xl: '859px' }}
        >
          {/* Title — 48px SemiBold */}
          <Heading
            as="h2"
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="600"
            fontSize={{ base: '26px', md: '36px', lg: '48px' }}
            lineHeight="1"
            letterSpacing="0"
            mb={{ base: '20px', md: '28px' }}
            color="#000"
          >
            Frequently Asked{' '}
            <Text as="span" color="#3F77A5">
              Questions
            </Text>
          </Heading>

          {filteredFaqs.length === 0 ? (
            <Text
              color="#777"
              fontFamily="'Wix Madefor Display', sans-serif"
              py="32px"
              textAlign="center"
            >
              No results found. Try a different search term or category.
            </Text>
          ) : (
            filteredFaqs.map((faq) => (
              <Box key={faq.id} id={`faq-${faq.id}`}>
                <FAQItem
                  faq={faq}
                  isExpanded={expandedId === faq.id}
                  onToggle={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  onScrollTo={scrollToFaq}
                />
              </Box>
            ))
          )}
        </Box>

        {/* ── Sidebar — stacks below FAQ on mobile, sticky column on xl ── */}
        <Box
          w={{ base: '100%', xl: '330px' }}
          flexShrink={0}
          position={{ base: 'static', xl: 'sticky' }}
          top="100px"
        >
          {/* On mobile/tablet: 3 cards in a responsive grid */}
          <Flex
            direction={{ base: 'column', md: 'row', xl: 'column' }}
            gap="17px"
            align="stretch"
          >
          {/* Popular Questions — height 324, bg #FFFFFF, border-radius 24px */}
          <Box
            bg="#FFFFFF"
            borderRadius="24px"
            p="24px"
            minH={{ base: 'auto', xl: '324px' }}
            flex="1"
          >
            <Text
              fontWeight="700"
              fontSize="16px"
              color="#000"
              fontFamily="'Wix Madefor Display', sans-serif"
              mb="16px"
            >
              Popular Questions
            </Text>
            <Divider mb="8px" borderColor="#E0E0E0" />
            <Flex direction="column" justify="space-around" flex="1">
              {popularQuestions.map((q, i) => (
                <HStack
                  key={q.id}
                  as="button"
                  onClick={() => scrollToFaq(q.id)}
                  align="center"
                  spacing="10px"
                  _hover={{ opacity: 0.7 }}
                  textAlign="left"
                  py="4px"
                >
                  <Box
                    w="24px"
                    h="24px"
                    borderRadius="50%"
                    bg="#3F77A5"
                    color="white"
                    fontSize="12px"
                    fontWeight="700"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    fontFamily="'Wix Madefor Display', sans-serif"
                  >
                    {i + 1}
                  </Box>
                  <Text
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="30px"
                    letterSpacing="0"
                    textAlign="justify"
                    color="#000000"
                  >
                    {q.label}
                  </Text>
                </HStack>
              ))}
            </Flex>
          </Box>

          {/* Related Products — height 316, bg #BECEDC, border-radius 24px */}
          <Box
            bg="#BECEDC"
            borderRadius="24px"
            p="24px"
            minH={{ base: 'auto', xl: '316px' }}
            flex="1"
          >
            <Text
              fontWeight="700"
              fontSize="16px"
              color="#1A2A3A"
              fontFamily="'Wix Madefor Display', sans-serif"
              mb="16px"
            >
              Related Products
            </Text>
            <Divider mb="8px" borderColor="rgba(0,0,0,0.15)" />
            <Flex direction="column" justify="space-around" flex="1">
              {relatedProducts.map((p) => (
                <Flex
                  key={p.id}
                  as="button"
                  justify="space-between"
                  align="center"
                  onClick={() => scrollToFaq(p.id)}
                  _hover={{ opacity: 0.7 }}
                  transition="opacity 0.15s"
                  w="100%"
                  py="4px"
                >
                  <Text
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="30px"
                    letterSpacing="0"
                    textAlign="left"
                    color="#000000"
                  >
                    {p.label}
                  </Text>
                  {/* Diagonal arrow — rotated -90deg to point top-right */}
                  <Box
                    flexShrink={0}
                    ml="8px"
                    transform="rotate(-90deg)"
                    display="flex"
                    alignItems="center"
                  >
                    <svg width="10" height="10" viewBox="0 0 33 33" fill="none">
                      <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#000000" />
                    </svg>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Still have questions? */}
          <Box
            bg="#3F77A5"
            borderRadius="24px"
            p={{ base: '20px', md: '24px' }}
            minH={{ base: 'auto', xl: '186px' }}
            color="white"
            display="flex"
            flexDirection={{ base: 'row', md: 'column' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={{ base: 'space-between', md: 'space-between' }}
            gap={{ base: '16px', md: '0' }}
            flex="1"
          >
            <Box flex="1">
              <Text
                fontWeight="700"
                fontSize={{ base: '15px', md: '16px' }}
                fontFamily="'Wix Madefor Display', sans-serif"
                mb={{ base: '4px', md: '8px' }}
              >
                Still have questions?
              </Text>
              <Text
                fontSize={{ base: '12px', md: '13px' }}
                color="rgba(255,255,255,0.8)"
                fontFamily="'Wix Madefor Display', sans-serif"
                lineHeight="1.5"
                display={{ base: 'none', sm: 'block' }}
              >
                Our team is here to help you find the right solution.
              </Text>
            </Box>
            <Link href="/book-a-demo" _hover={{ textDecor: 'none' }} mt={{ base: '0', md: '16px' }} flexShrink={0}>
              <Button
                bg="white"
                color="#2B4F7A"
                fontWeight="700"
                fontSize={{ base: '13px', md: '15px' }}
                borderRadius="999px"
                h={{ base: '40px', md: '44px' }}
                px={{ base: '16px', md: '20px' }}
                fontFamily="'Wix Madefor Display', sans-serif"
                rightIcon={<FaArrowRight size="10px" />}
                _hover={{ bg: '#F0F0F0' }}
                whiteSpace="nowrap"
              >
                Book Demo
              </Button>
            </Link>
          </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default FAQGrid;