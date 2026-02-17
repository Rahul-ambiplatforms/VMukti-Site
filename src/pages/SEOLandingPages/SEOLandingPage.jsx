import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Icon,
  Flex,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';
import seoPageData from '../../data/seoPageData';
import seoPageDataExpansion from '../../data/seoPageDataExpansion';


// Stat Card Component
const StatCard = ({ value, label }) => (
  <Box
    bg="white"
    p={6}
    borderRadius="xl"
    textAlign="center"
    boxShadow="md"
    border="1px solid"
    borderColor="gray.100"
    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
    transition="all 0.2s"
  >
    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" color="blue.600" mb={1}>
      {value}
    </Text>
    <Text fontSize="sm" color="gray.600" fontWeight="500">
      {label}
    </Text>
  </Box>
);


// Feature List Component
const FeatureList = ({ features }) => (
  <List spacing={3} mt={4}>
    {features.map((feature, idx) => (
      <ListItem key={idx} display="flex" alignItems="flex-start" fontSize="md" color="gray.700">
        <ListIcon as={CheckCircleIcon} color="green.500" mt={1} />
        <Text>{feature}</Text>
      </ListItem>
    ))}
  </List>
);


// Section Component
const ContentSection = ({ section, index }) => (
  <Box py={{ base: 10, md: 16 }} bg={index % 2 === 0 ? 'white' : 'gray.50'}>
    <Container maxW="7xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h2" size="xl" color="gray.800" mb={4}>
            {section.title}
          </Heading>
          <Text fontSize="lg" color="gray.600" lineHeight="tall" maxW="4xl">
            {section.content}
          </Text>
        </Box>
        {section.stats && (
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} mt={4}>
            {section.stats.map((stat, idx) => (
              <StatCard key={idx} value={stat.value} label={stat.label} />
            ))}
          </SimpleGrid>
        )}
        {section.features && (
          <Box bg={index % 2 === 0 ? 'gray.50' : 'white'} p={8} borderRadius="xl" border="1px solid" borderColor="gray.200">
            <FeatureList features={section.features} />
          </Box>
        )}
      </VStack>
    </Container>
  </Box>
);


// FAQ Section Component
const FAQSection = ({ faqs }) => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="4xl">
      <Heading as="h2" size="xl" textAlign="center" mb={10} color="gray.800">
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} border="1px solid" borderColor="gray.200" borderRadius="lg" mb={4} overflow="hidden">
            <h3>
              <AccordionButton py={5} px={6} _hover={{ bg: 'gray.50' }}>
                <Box flex="1" textAlign="left" fontWeight="600" fontSize="lg" color="gray.800">
                  {faq.q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={5} px={6} fontSize="md" color="gray.600" lineHeight="tall">
              {faq.a}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </Box>
);


// CTA Section Component
const CTASection = ({ cta }) => (
  <Box
    py={{ base: 12, md: 20 }}
    bg="linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)"
    color="white"
    textAlign="center"
  >
    <Container maxW="3xl">
      <Heading as="h2" size="xl" mb={4}>
        Ready to Transform Your Surveillance?
      </Heading>
      <Text fontSize="lg" mb={8} opacity={0.9}>
        Join enterprises worldwide using VMukti cloud-native VMS with AI analytics.
      </Text>
      <Button
        as={RouterLink}
        to={cta.link}
        size="lg"
        colorScheme="orange"
        px={10}
        py={7}
        fontSize="lg"
        fontWeight="700"
        borderRadius="full"
        _hover={{ transform: 'scale(1.05)' }}
        transition="all 0.2s"
      >
        {cta.text}
      </Button>
    </Container>
  </Box>
);


// Breadcrumb Component
const PageBreadcrumb = ({ category, pageTitle }) => {
  const categoryLabels = {
    technology: 'Technology',
    solutions: 'Solutions',
    geo: 'Regions',
    compare: 'Resources'
  };


  return (
    <Flex py={3} fontSize="sm" color="gray.400" align="center" flexWrap="wrap">
      <RouterLink to="/">
        <Text _hover={{ color: 'blue.300' }} cursor="pointer">Home</Text>
      </RouterLink>
      <Icon as={ChevronRightIcon} mx={2} />
      <Text>{categoryLabels[category] || category}</Text>
      <Icon as={ChevronRightIcon} mx={2} />
      <Text color="white" fontWeight="500">{pageTitle}</Text>
    </Flex>
  );
};


// JSON-LD Schema Generator
const generateSchemas = (pageData) => {
  const schemas = [];


  // WebPage Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.title,
    description: pageData.metaDescription,
    url: `https://www.vmukti.com${pageData.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'VMukti',
      url: 'https://www.vmukti.com',
      logo: { '@type': 'ImageObject', url: 'https://www.vmukti.com/logo.png' }
    }
  });


  // BreadcrumbList Schema
  const categoryPaths = {
    technology: '/technology',
    solutions: '/solutions',
    geo: '',
    compare: '/resources'
  };
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vmukti.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageData.category === 'technology' ? 'Technology' :
              pageData.category === 'solutions' ? 'Solutions' :
              pageData.category === 'geo' ? 'Regions' : 'Resources',
        item: `https://www.vmukti.com${categoryPaths[pageData.category] || ''}`
      },
      { '@type': 'ListItem', position: 3, name: pageData.heroTitle, item: `https://www.vmukti.com${pageData.slug}` }
    ]
  });


  // FAQPage Schema
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pageData.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a }
      }))
    });
  }


  // Product Schema for solution/technology pages
  if (pageData.category === 'solutions' || pageData.category === 'technology') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `VMukti ${pageData.heroTitle}`,
      description: pageData.metaDescription,
      brand: { '@type': 'Brand', name: 'VMukti' },
      manufacturer: { '@type': 'Organization', name: 'VMukti Solutions Pvt. Ltd.' }
    });
  }


  // Organization Schema for geo pages
  if (pageData.category === 'geo') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'VMukti',
      url: 'https://www.vmukti.com',
      description: pageData.metaDescription,
      areaServed: pageData.heroTitle,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@vmukti.com',
        url: 'https://www.vmukti.com/book-a-demo'
      }
    });
  }


  return schemas;
};


const categoryColors = {
  technology: 'purple',
  solutions: 'blue',
  geo: 'green',
  compare: 'orange'
};


// Main SEO Landing Page Component
const SEOLandingPage = () => {
  const { category, pageSlug, name } = useParams();
  // When rendered from IndustryDetails fallback, route param is 'name' not 'pageSlug'
  const effectiveSlug = pageSlug || name;
  const allSeoData = { ...seoPageData, ...seoPageDataExpansion };
  const lookupKey = (category && effectiveSlug && allSeoData[`${category}-${effectiveSlug}`]) ? `${category}-${effectiveSlug}` : (effectiveSlug && allSeoData[effectiveSlug]) ? effectiveSlug : (category && allSeoData[category]) ? category : null;
  const pageData = allSeoData[lookupKey];


  if (!pageData) {
    return (
      <Container maxW="7xl" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Page Not Found</Heading>
        <Text fontSize="lg" color="gray.600" mb={8}>The page you are looking for does not exist.</Text>
        <Button as={RouterLink} to="/" colorScheme="blue" size="lg">Go to Homepage</Button>
      </Container>
    );
  }


  const schemas = generateSchemas(pageData);


  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content={pageData.keywords} />
        <link rel="canonical" href={`https://www.vmukti.com${pageData.slug}`} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:url" content={`https://www.vmukti.com${pageData.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VMukti" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.title} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        {pageData.geoRegion && <meta name="geo.region" content={pageData.geoRegion} />}
        <link rel="alternate" hreflang="en" href={`https://www.vmukti.com${pageData.slug}`} />
        {schemas.map((schema, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>


      {/* Hero Section */}
      <Box
        bg="linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
        color="white"
        pt={{ base: 12, md: 20 }}
        pb={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0} left={0} right={0} bottom={0}
          opacity={0.05}
          bgImage="radial-gradient(circle at 25px 25px, white 2%, transparent 0%)"
          bgSize="50px 50px"
        />
        <Container maxW="7xl" position="relative">
          <PageBreadcrumb category={pageData.category} pageTitle={pageData.heroTitle} />
          <VStack spacing={6} align="flex-start" mt={6} maxW="4xl">
            <Badge
              colorScheme={categoryColors[pageData.category] || 'blue'}
              fontSize="sm" px={3} py={1} borderRadius="full"
              textTransform="uppercase" letterSpacing="wide"
            >
              {pageData.category === 'technology' ? 'Technology' :
               pageData.category === 'solutions' ? 'Industry Solution' :
               pageData.category === 'geo' ? 'Regional' : 'Resource'}
            </Badge>
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="800" lineHeight="shorter">
              {pageData.heroTitle}
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" color="blue.200">
              {pageData.heroSubtitle}
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300" lineHeight="tall" maxW="3xl">
              {pageData.heroDescription}
            </Text>
            <HStack spacing={4} pt={4} flexWrap="wrap">
              <Button as={RouterLink} to={pageData.cta.link} size="lg" colorScheme="orange" px={8}
                borderRadius="full" fontWeight="700" _hover={{ transform: 'scale(1.05)' }} transition="all 0.2s">
                {pageData.cta.text}
              </Button>
              <Button as={RouterLink} to="/solution" size="lg" variant="outline" color="white"
                borderColor="white" px={8} borderRadius="full" _hover={{ bg: 'whiteAlpha.200' }}>
                View All Solutions
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>


      {/* Content Sections */}
      {pageData.sections.map((section, idx) => (
        <ContentSection key={idx} section={section} index={idx} />
      ))}


      {/* FAQ Section */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <FAQSection faqs={pageData.faqs} />
      )}


      {/* CTA Section */}
      <CTASection cta={pageData.cta} />
    </>
  );
};


export default SEOLandingPage;







