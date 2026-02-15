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
