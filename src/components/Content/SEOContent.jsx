import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Heading, Text, SimpleGrid, VStack, Link, Icon, HStack, Badge
} from '@chakra-ui/react';

/* ---- HOME PAGE CONTENT ---- */
const HomeContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Enterprise Video Intelligence & AI Surveillance Platform
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="900px" mx="auto">
            VMukti delivers a complete enterprise surveillance ecosystem — cloud-native Video
            Management Software (VMS), Enterprise Management Systems (EMS), Integrated Command &
            Control Centers (ICCC), 26+ AI-Powered Video Analytics, and next-generation Generative
            AI capabilities for global organizations.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="blue" mb={3}>Core Platform</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Video Management Software (VMS)</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Cloud-native VMS for live monitoring, intelligent recording, and centralized camera
              management. Supports 10,000+ concurrent camera streams with multi-site architecture,
              role-based access control, and seamless third-party integrations via ONVIF and RTSP.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="green" mb={3}>Enterprise</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Enterprise Management System (EMS)</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Unified enterprise platform for multi-location surveillance management. Centralized
              dashboard for fleet-wide camera health monitoring, automated maintenance alerts,
              bandwidth optimization, and hierarchical access across regions and branches.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="purple" mb={3}>Smart City</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Integrated Command & Control Center (ICCC)</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Unified command center for smart city operations integrating video surveillance, IoT
              sensors, emergency response, and traffic management into a single real-time operations
              platform. Multi-agency coordination with GIS mapping and SOP-driven workflows.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="orange" mb={3}>Intelligence</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">AI-Powered Video Analytics</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              26+ deep-learning AI analytics including face recognition, ANPR/LPR, people counting,
              crowd detection, intrusion detection, fire and smoke detection, PPE compliance, abandoned
              object detection, vehicle classification, and behavioral analytics — all processing at
              the edge and cloud.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="red" mb={3}>Next-Gen</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Generative AI & NLP Intelligence</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Industry-first Generative AI capabilities for video surveillance — natural language
              video search, automated incident report generation, conversational querying of camera
              feeds, intelligent video summarization, and predictive threat analysis powered by
              large language models.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} pt={4}>
          {[
            { number: '26+', label: 'AI Analytics' },
            { number: '8+', label: 'Industry Verticals' },
            { number: '50+', label: 'Countries Served' },
            { number: '10K+', label: 'Camera Streams' },
            { number: 'Gen AI', label: 'NLP-Powered Search' }
          ].map((stat, i) => (
            <Box key={i} textAlign="center" p={4} bg="gray.50" borderRadius="md">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">{stat.number}</Text>
              <Text fontSize="sm" color="gray.500">{stat.label}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box bg="gray.50" p={8} borderRadius="lg" textAlign="center">
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Global Enterprise Deployments</Heading>
          <Text color="gray.600" mb={4}>
            Trusted by enterprises across the Middle East, Africa, Southeast Asia, Latin America,
            Europe, the United States, and the United Kingdom for mission-critical surveillance.
          </Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Link as={RouterLink} to="/usa/video-surveillance-solutions" color="blue.500" fontSize="sm">USA Solutions</Link>
            <Link as={RouterLink} to="/uk/video-surveillance-solutions" color="blue.500" fontSize="sm">UK Solutions</Link>
            <Link as={RouterLink} to="/industry" color="blue.500" fontSize="sm">Industry Solutions</Link>
            <Link as={RouterLink} to="/solution" color="blue.500" fontSize="sm">All Solutions</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ---- SOLUTIONS PAGE CONTENT ---- */
const SolutionsContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            VMukti Enterprise Surveillance Solutions
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px" mx="auto">
            Five integrated pillars powering intelligent video surveillance for enterprises worldwide.
          </Text>
        </Box>
        <Box p={6} bg="blue.50" borderRadius="lg">
          <Badge colorScheme="blue" mb={2}>Core Platform</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Video Management Software (VMS)</Heading>
          <Text color="gray.600" mb={3}>
            VMukti VMS is a cloud-native, scalable video management platform designed for enterprise-grade
            deployments. Features include live monitoring with ultra-low latency, intelligent recording with
            event-triggered policies, centralized camera management supporting ONVIF, RTSP, and proprietary
            protocols, multi-site architecture with hierarchical views, and role-based access control.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            {['Live Monitoring & Playback', 'Multi-Site Management', 'ONVIF & RTSP Support',
              'Role-Based Access Control', 'Event-Triggered Recording', 'Cloud & On-Premise Deployment'].map((f, i) => (
              <HStack key={i} spacing={2}><Text color="blue.500" fontWeight="bold">\u2713</Text><Text fontSize="sm" color="gray.600">{f}</Text></HStack>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={6} bg="orange.50" borderRadius="lg">
          <Badge colorScheme="orange" mb={2}>Intelligence</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>AI-Powered Video Analytics Suite</Heading>
          <Text color="gray.600" mb={3}>
            VMukti AI analytics engine delivers 26+ deep-learning models for real-time video intelligence.
            Each analytic runs independently at edge or cloud, integrates across VMS, EMS, and ICCC platforms,
            and triggers automated alerts, SOP workflows, and incident reports.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {['Face Recognition', 'ANPR / LPR', 'People Counting', 'Crowd Detection',
              'Intrusion Detection', 'Fire & Smoke Detection', 'PPE Compliance', 'Abandoned Object',
              'Vehicle Classification', 'Loitering Detection', 'Queue Management', 'Behavioral Analytics',
              'Traffic Violation', 'Speed Detection', 'Helmet Detection', 'Weapon Detection'].map((a, i) => (
              <Badge key={i} p={2} textAlign="center" colorScheme="orange" variant="subtle" fontSize="xs">{a}</Badge>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={6} bg="red.50" borderRadius="lg">
          <Badge colorScheme="red" mb={2}>Next-Gen</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Generative AI & NLP Intelligence</Heading>
          <Text color="gray.600" mb={3}>
            VMukti Generative AI layer transforms how operators interact with surveillance systems. Using
            large language models and natural language processing, operators can search video feeds using
            plain English queries, generate automated incident reports, receive predictive threat intelligence,
            and get AI-powered summaries of hours of footage in seconds.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {[
              { title: 'Natural Language Video Search', desc: 'Search footage using plain English — show me person in red jacket near gate 3 yesterday 2pm' },
              { title: 'Automated Incident Reports', desc: 'AI generates detailed incident reports with timeline, evidence frames, and severity assessment' },
              { title: 'Conversational Querying', desc: 'Ask questions about your camera feeds in natural language and get instant intelligent answers' },
              { title: 'Predictive Threat Analysis', desc: 'LLM-powered analysis of patterns and anomalies to predict potential security threats before they occur' }
            ].map((item, i) => (
              <Box key={i} p={3} bg="white" borderRadius="md">
                <Text fontWeight="bold" fontSize="sm" color="gray.700" mb={1}>{item.title}</Text>
                <Text fontSize="xs" color="gray.500">{item.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={6} bg="green.50" borderRadius="lg">
          <Badge colorScheme="green" mb={2}>Enterprise</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Enterprise Management System (EMS)</Heading>
          <Text color="gray.600">
            Centralized enterprise management for multi-location surveillance operations. VMukti EMS provides
            fleet-wide camera health monitoring, automated maintenance scheduling, bandwidth optimization,
            hierarchical access management, SLA compliance tracking, and integration with enterprise IT
            systems including Active Directory, SIEM platforms, and access control systems.
          </Text>
        </Box>
        <Box p={6} bg="purple.50" borderRadius="lg">
          <Badge colorScheme="purple" mb={2}>Smart City</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Integrated Command & Control Center (ICCC)</Heading>
          <Text color="gray.600">
            Purpose-built for smart city and large-scale operations, VMukti ICCC unifies video surveillance,
            IoT sensors, emergency response systems, and traffic management into a single real-time command
            platform. Features include multi-agency coordination, GIS-based mapping, SOP-driven automated
            workflows, video wall management, and citizen grievance integration.
          </Text>
        </Box>
        <Box textAlign="center">
          <Link as={RouterLink} to="/industry" color="blue.500" fontWeight="bold">Explore Industry-Specific Solutions</Link>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ---- INDUSTRIES PAGE CONTENT ---- */
const IndustriesContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Industry-Specific AI Surveillance Solutions
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px" mx="auto">
            VMukti five-pillar platform — VMS, EMS, ICCC, AI Analytics, and Generative AI —
            customized for the unique requirements of each industry vertical.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {[
            { title: 'Railways & Transportation', desc: 'Platform surveillance with AI-based crowd management, track intrusion detection, automated announcements, and ICCC integration for centralized railway operations across thousands of stations.', analytics: 'Crowd Detection, Track Intrusion, Face Recognition, ANPR' },
            { title: 'Smart Cities & Urban Infrastructure', desc: 'Comprehensive ICCC deployments integrating traffic management, public safety surveillance, emergency response, solid waste monitoring, and citizen services into unified command centers.', analytics: 'Traffic Violation, Crowd Analysis, Fire Detection, Gen AI Reports' },
            { title: 'Oil & Gas / Critical Infrastructure', desc: 'Intrinsically safe surveillance for hazardous environments with pipeline monitoring, perimeter security, PPE compliance, fire and gas detection, and SCADA integration.', analytics: 'PPE Compliance, Fire & Smoke, Intrusion, Behavioral Analytics' },
            { title: 'Banking & Financial Services', desc: 'Branch and ATM surveillance with face recognition for VIP and blocklist management, cash counting integration, after-hours intrusion detection, and centralized EMS for multi-branch networks.', analytics: 'Face Recognition, Intrusion, Loitering, ATM Monitoring' },
            { title: 'Manufacturing & Warehousing', desc: 'Shop floor safety monitoring with PPE compliance, forklift tracking, production line quality inspection, and AI-powered inventory management across manufacturing facilities.', analytics: 'PPE Detection, Helmet Detection, Vehicle Classification, Quality Inspection' },
            { title: 'Healthcare & Hospitals', desc: 'Patient safety monitoring, restricted area access control, operating room surveillance, pharmacy monitoring, and visitor management integrated with hospital information systems.', analytics: 'Face Recognition, Crowd Control, Restricted Access, Fall Detection' }
          ].map((industry, i) => (
            <Box key={i} p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
              <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>{industry.title}</Heading>
              <Text color="gray.600" fontSize="sm" mb={3}>{industry.desc}</Text>
              <Text fontSize="xs" color="blue.500" fontWeight="bold">Key Analytics: {industry.analytics}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ---- ABOUT PAGE CONTENT ---- */
const AboutContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            About VMukti — Pioneering AI-First Video Intelligence
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px" mx="auto">
            VMukti is redefining enterprise surveillance with a five-pillar approach that integrates
            traditional video management with cutting-edge AI analytics and Generative AI intelligence.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={6} bg="blue.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>AI-First Innovation</Heading>
            <Text color="gray.600" fontSize="sm">
              26+ AI analytics and industry-first Generative AI capabilities including natural language
              video search and automated incident reporting, purpose-built for enterprise security operations.
            </Text>
          </Box>
          <Box p={6} bg="green.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>Cloud-Native Architecture</Heading>
            <Text color="gray.600" fontSize="sm">
              Built from the ground up for cloud deployment with edge computing support, enabling
              seamless scalability from hundreds to tens of thousands of cameras across global enterprises.
            </Text>
          </Box>
          <Box p={6} bg="purple.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>Global Enterprise Presence</Heading>
            <Text color="gray.600" fontSize="sm">
              Deployments across 50+ countries spanning the Middle East, Africa, Southeast Asia,
              Latin America, Europe, the United States, and the United Kingdom.
            </Text>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" pt={4}>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Link as={RouterLink} to="/solution" color="blue.500" fontSize="sm">Explore Solutions</Link>
            <Link as={RouterLink} to="/industry" color="blue.500" fontSize="sm">Industry Verticals</Link>
            <Link as={RouterLink} to="/usa/video-surveillance-solutions" color="blue.500" fontSize="sm">USA</Link>
            <Link as={RouterLink} to="/uk/video-surveillance-solutions" color="blue.500" fontSize="sm">UK</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ---- ROUTE-AWARE WRAPPER ---- */
const SEOContent = () => {
  const location = useLocation();
  const path = location.pathname;
  if (path === '/' || path === '/usa/video-surveillance-solutions' || path === '/uk/video-surveillance-solutions') return <HomeContent />;
  if (path === '/solution' || path.startsWith('/solution/')) return <SolutionsContent />;
  if (path === '/industry' || path.startsWith('/industry/')) return <IndustriesContent />;
  if (path === '/about-us') return <AboutContent />;
  return null;
};

export default SEOContent;
import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Heading, Text, SimpleGrid, VStack, Link, Icon, HStack, Badge
} from '@chakra-ui/react';

/* ─────────────────────────── HOME PAGE CONTENT ─────────────────────────── */
const HomeContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Enterprise Video Management &amp; AI Surveillance Platform
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="900px" mx="auto">
            VMukti delivers cloud-native video management software (VMS), enterprise management
            systems (EMS), and integrated command &amp; control center (ICCC) solutions powered by
            advanced AI analytics and Generative AI capabilities for global enterprises.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Heading as="h3" fontSize="lg" color="#0057B8" mb={3}>
              Video Management System
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              Cloud-based video management platform supporting 26+ AI-powered analytics including
              facial recognition, ANPR/LPR, intrusion detection, crowd management, fire and smoke
              detection, and predictive analytics. Integrates seamlessly with existing CCTV
              infrastructure across 10,000+ ONVIF-compliant devices.
            </Text>
            <Link as={RouterLink} to="/solution" color="#0057B8" fontWeight="600" fontSize="sm">
              Explore VMS Solutions &rarr;
            </Link>
          </Box>

          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Heading as="h3" fontSize="lg" color="#0057B8" mb={3}>
              Enterprise Management System
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              Comprehensive workforce and operations management platform enabling enterprise-wide
              visibility. Manage attendance tracking, productivity monitoring, access control, safety
              compliance, and operational efficiency from a unified cloud dashboard with real-time
              alerts and reporting.
            </Text>
            <Link as={RouterLink} to="/solution" color="#0057B8" fontWeight="600" fontSize="sm">
              Explore EMS Platform &rarr;
            </Link>
          </Box>

          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Heading as="h3" fontSize="lg" color="#0057B8" mb={3}>
              Command &amp; Control Center
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              Integrated command and control center (ICCC) for smart city operations, centralized
              multi-site surveillance, and real-time incident management. Purpose-built for government
              agencies, transportation networks, and critical infrastructure with video wall
              integration and GIS mapping.
            </Text>
            <Link as={RouterLink} to="/solution" color="#0057B8" fontWeight="600" fontSize="sm">
              Explore ICCC Solutions &rarr;
            </Link>
          </Box>
        </SimpleGrid>

        <Box mt={6} p={8} bg="gray.50" borderRadius="xl">
          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="gray.800" mb={4}>
            AI-Powered Video Analytics for Every Industry
          </Heading>
          <Text color="gray.600" mb={4}>
            VMukti's computer vision platform delivers intelligent video analytics across 8 major
            industries including Railways, Smart Cities, Enterprise Security, Oil &amp; Gas, Banking
            &amp; Finance, Manufacturing, Retail, and Healthcare. Our deep learning AI models process
            video streams in real-time to detect anomalies, automate compliance monitoring, and
            generate actionable insights that transform raw surveillance footage into business
            intelligence.
          </Text>
          <Text color="gray.600">
            With Generative AI capabilities including natural language video search, automated
            incident reporting, predictive threat analytics, and intelligent anomaly detection,
            VMukti goes beyond traditional video management platforms. Deploy on-premise, in the
            cloud, or as a hybrid solution tailored to your enterprise infrastructure requirements.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mt={4}>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#0057B8">26+</Text>
            <Text fontSize="xs" color="gray.600">AI Analytics Models</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#0057B8">8+</Text>
            <Text fontSize="xs" color="gray.600">Industry Verticals</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#0057B8">50+</Text>
            <Text fontSize="xs" color="gray.600">Countries Served</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#0057B8">10K+</Text>
            <Text fontSize="xs" color="gray.600">Cameras Managed</Text>
          </Box>
        </SimpleGrid>

        <Box mt={4}>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={4}>
            Global Enterprise Deployments
          </Heading>
          <Text color="gray.600" mb={3}>
            VMukti serves enterprise customers across the United States, United Kingdom, Middle East,
            Africa, Southeast Asia, Latin America, and Europe. Our cloud-native architecture supports
            multi-region deployment with data sovereignty compliance, localized support teams, and
            24/7 technical assistance. From single-site installations to nationwide rollouts with
            thousands of cameras, VMukti scales effortlessly to meet your security infrastructure
            demands.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            <Link as={RouterLink} to="/usa/video-surveillance-solutions" color="#0057B8" fontSize="sm" fontWeight="600">
              USA Solutions &rarr;
            </Link>
            <Link as={RouterLink} to="/uk/video-surveillance-solutions" color="#0057B8" fontSize="sm" fontWeight="600">
              UK Solutions &rarr;
            </Link>
            <Link as={RouterLink} to="/industry" color="#0057B8" fontSize="sm" fontWeight="600">
              Industry Solutions &rarr;
            </Link>
            <Link as={RouterLink} to="/solution" color="#0057B8" fontSize="sm" fontWeight="600">
              All Solutions &rarr;
            </Link>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── SOLUTIONS PAGE CONTENT ─────────────────────── */
const SolutionsContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            AI Video Surveillance Solutions for Enterprise Security
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="900px" mx="auto">
            VMukti's suite of AI-powered solutions transforms video surveillance from passive
            monitoring into proactive security intelligence. Our platform combines computer vision,
            deep learning, and Generative AI to deliver actionable insights in real time.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box p={6} borderLeft="4px solid" borderColor="#0057B8" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={3}>
              Intelligent Video Management (VMS)
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              Centralized cloud video management with support for IP cameras, analog-to-IP migration,
              and edge computing. Features include live streaming, intelligent recording with motion
              and AI-triggered capture, multi-site management, and role-based access control.
            </Text>
            <Text color="gray.600" fontSize="sm">
              Unlike traditional VMS platforms, VMukti's cloud-native architecture eliminates
              hardware dependency while providing unlimited scalability, automated failover, and
              zero-downtime firmware updates across your entire camera network.
            </Text>
          </Box>

          <Box p={6} borderLeft="4px solid" borderColor="#0057B8" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={3}>
              AI Analytics Suite
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              26+ pre-built AI analytics models ready for deployment: Face Recognition, ANPR/LPR,
              People Counting, Crowd Detection, Intrusion Alert, Fire &amp; Smoke Detection,
              PPE Compliance, Weapon Detection, Abandoned Object Detection, Vehicle Classification,
              Loitering Detection, and more.
            </Text>
            <Text color="gray.600" fontSize="sm">
              Each model is optimized for real-time edge processing and cloud inference, with
              customizable sensitivity thresholds, scheduling, and alert routing to ensure zero
              false-positive fatigue for your security operations center.
            </Text>
          </Box>

          <Box p={6} borderLeft="4px solid" borderColor="#0057B8" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={3}>
              Enterprise Workforce Management (EMS)
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              AI-driven workforce management combining video analytics with operational intelligence.
              Automate attendance tracking through facial recognition, monitor workplace safety
              compliance, optimize space utilization, and generate productivity insights.
            </Text>
            <Text color="gray.600" fontSize="sm">
              Integrate with existing HR, ERP, and access control systems through open APIs.
              Real-time dashboards provide visibility into workforce patterns, shift compliance,
              and safety incidents across all facilities.
            </Text>
          </Box>

          <Box p={6} borderLeft="4px solid" borderColor="#0057B8" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={3}>
              Generative AI &amp; NLP Search
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              Revolutionary natural language video search lets operators find specific incidents by
              describing them in plain English. Ask "show me all red vehicles entering gate 3
              between 8am and 10am yesterday" and get instant results from hours of footage.
            </Text>
            <Text color="gray.600" fontSize="sm">
              Automated incident report generation, predictive threat analytics, and intelligent
              anomaly detection powered by large language models bring the power of Generative AI
              to your security operations.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── INDUSTRY PAGE CONTENT ────────────────────── */
const IndustriesContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Industry-Specific AI Surveillance Solutions
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="900px" mx="auto">
            Purpose-built video analytics and security solutions designed for the unique challenges
            of each industry vertical. VMukti's AI platform adapts to industry-specific compliance
            requirements, operational workflows, and safety standards.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Railways &amp; Transportation</Heading>
            <Text color="gray.600" fontSize="sm">
              Comprehensive railway station surveillance with AI analytics for platform safety
              monitoring, unauthorized track crossing detection, crowd management during peak hours,
              automated cleanliness auditing, vendor zone compliance, and real-time passenger flow
              analysis. Deployed across major railway divisions with integration into existing
              CCTV infrastructure.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Smart Cities &amp; Government</Heading>
            <Text color="gray.600" fontSize="sm">
              Integrated command and control center (ICCC) solutions for smart city operations
              including traffic management, public safety monitoring, emergency response
              coordination, environmental monitoring, and citizen services. Multi-agency
              collaboration with unified dashboards, GIS integration, and video wall support.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Oil &amp; Gas &amp; Energy</Heading>
            <Text color="gray.600" fontSize="sm">
              Critical infrastructure protection for refineries, pipelines, offshore platforms,
              and power plants. AI-powered perimeter security, fire and gas detection, PPE
              compliance monitoring, hazardous zone intrusion alerts, and environmental spill
              detection with ruggedized edge computing for remote locations.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Banking &amp; Financial Services</Heading>
            <Text color="gray.600" fontSize="sm">
              Branch security and ATM surveillance with facial recognition, suspicious behavior
              detection, vault access monitoring, and cash handling compliance. Centralized
              multi-branch monitoring with encrypted video transmission and PCI-DSS compliant
              storage for regulatory requirements.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Manufacturing &amp; Warehousing</Heading>
            <Text color="gray.600" fontSize="sm">
              Production floor monitoring with AI-driven quality inspection, worker safety compliance,
              forklift and vehicle tracking, inventory management through computer vision, and
              assembly line optimization. Reduce workplace incidents and improve operational
              efficiency with real-time analytics.
            </Text>
          </Box>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Healthcare &amp; Hospitals</Heading>
            <Text color="gray.600" fontSize="sm">
              Patient safety monitoring, restricted area access control, staff compliance tracking,
              and asset protection. HIPAA-compliant video management with privacy masking, secure
              access controls, and integration with hospital management systems for comprehensive
              facility security.
            </Text>
          </Box>
        </SimpleGrid>

        <Box textAlign="center" mt={4}>
          <Link as={RouterLink} to="/contact-us" color="#0057B8" fontWeight="600" fontSize="lg">
            Discuss Your Industry Requirements &rarr;
          </Link>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── ABOUT PAGE CONTENT ─────────────────────────── */
const AboutContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" textAlign="center">
          About VMukti Solutions
        </Heading>
        <Text color="gray.600" fontSize="lg" textAlign="center" maxW="900px" mx="auto">
          VMukti is a global leader in AI-powered video surveillance and enterprise security
          platforms, delivering cloud-native VMS, EMS, and ICCC solutions to organizations across
          50+ countries. Our mission is to transform passive video monitoring into proactive
          security intelligence through computer vision and Generative AI.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Innovation-Driven</Heading>
            <Text color="gray.600" fontSize="sm">
              Pioneering Generative AI integration in video surveillance with natural language search,
              automated reporting, and predictive analytics that set new industry standards.
            </Text>
          </Box>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Cloud-Native Architecture</Heading>
            <Text color="gray.600" fontSize="sm">
              Built from the ground up for cloud deployment with microservices, containerized
              workloads, and auto-scaling infrastructure that eliminates hardware dependency.
            </Text>
          </Box>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#0057B8" mb={2}>Global Presence</Heading>
            <Text color="gray.600" fontSize="sm">
              Serving enterprise customers across USA, UK, Middle East, Africa, Southeast Asia,
              Latin America, and Europe with localized support and data sovereignty compliance.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── MAIN SEO CONTENT ROUTER ────────────────────── */
const SEOContent = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/' || path === '/usa/video-surveillance-solutions' || path === '/uk/video-surveillance-solutions') {
    return <HomeContent />;
  }
  if (path === '/solution' || path.startsWith('/solution/')) {
    return <SolutionsContent />;
  }
  if (path === '/industry' || path.startsWith('/industry/')) {
    return <IndustriesContent />;
  }
  if (path === '/about-us') {
    return <AboutContent />;
  }
  return null;
};

export default SEOContent;
