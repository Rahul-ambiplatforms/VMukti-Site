'use client';

import React, { useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Badge,
  Icon,
  Divider,
  useBreakpointValue,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { FAQSchema, ComparisonSchema, BreadcrumbSchema } from './SchemaMarkup';

/**
 * ComparisonPage - Reusable comparison page component
 * Renders professional product/service comparison with full GEO optimization
 *
 * @param {Object} comparisonData - Configuration object containing:
 *  - title: Page title
 *  - subtitle: Page subtitle
 *  - product1: {name, description, url, image, category, features: [{name, value}, ...], bestFor: [...], pros: [...], cons: [...]}
 *  - product2: {name, description, url, image, category, features: [{name, value}, ...], bestFor: [...], pros: [...], cons: [...]}
 *  - faqs: [{question, answer}, ...] - FAQs for this comparison
 *  - breadcrumbs: [{name, url}, ...] - Breadcrumb items
 */
export default function ComparisonPage({ comparisonData }) {
  if (!comparisonData || !comparisonData.product1 || !comparisonData.product2) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text color="red.500">Invalid comparison data provided.</Text>
      </Container>
    );
  }

  const {
    title = 'Product Comparison',
    subtitle = 'Compare features and capabilities',
    product1,
    product2,
    faqs = [],
    breadcrumbs = [],
  } = comparisonData;

  const isMobile = useBreakpointValue({ base: true, md: false });
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });

  // Prepare comparison schema
  const comparisonSchemaData = useMemo(
    () => ({
      product1: {
        name: product1.name,
        description: product1.description,
        url: product1.url,
        image: product1.image,
        features: product1.features?.map((f) => f.name).join(', ') || '',
      },
      product2: {
        name: product2.name,
        description: product2.description,
        url: product2.url,
        image: product2.image,
        features: product2.features?.map((f) => f.name).join(', ') || '',
      },
    }),
    [product1, product2]
  );

  // Breadcrumb items
  const breadcrumbItems = breadcrumbs?.length > 0 ? breadcrumbs : [
    { name: 'Home', url: 'https://www.vmukti.com' },
    { name: 'Solutions', url: 'https://www.vmukti.com/solutions' },
    { name: title, url: 'https://www.vmukti.com/compare' },
  ];

  // Unique features for comparison table
  const allFeatures = useMemo(() => {
    const featureNames = new Set();
    product1.features?.forEach((f) => featureNames.add(f.name));
    product2.features?.forEach((f) => featureNames.add(f.name));
    return Array.from(featureNames);
  }, [product1, product2]);

  // Helper function to check if product has feature
  const hasFeature = (product, featureName) => {
    return product.features?.some((f) => f.name === featureName);
  };

  // Helper function to get feature value
  const getFeatureValue = (product, featureName) => {
    const feature = product.features?.find((f) => f.name === featureName);
    return feature?.value || null;
  };

  return (
    <>
      {/* Schema Markup for GEO Optimization */}
      <ComparisonSchema
        product1={comparisonSchemaData.product1}
        product2={comparisonSchemaData.product2}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Box bg="gray.50" minH="100vh" py={10}>
        <Container maxW="container.2xl">
          {/* Hero Section */}
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              color="gray.900"
              fontWeight="bold"
              maxW="900px"
            >
              {title}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="700px">
              {subtitle}
            </Text>
          </VStack>

          {/* Overview Section */}
          <Box mb={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
              {/* Product 1 Overview */}
              <Box bg="white" p={8} rounded="lg" boxShadow="sm" border="1px solid" borderColor="gray.200">
                <HStack mb={4} spacing={4}>
                  {product1.image && (
                    <Box
                      w={16}
                      h={16}
                      rounded="lg"
                      overflow="hidden"
                      flexShrink={0}
                    >
                      <img
                        src={product1.image}
                        alt={product1.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  )}
                  <VStack align="start" spacing={1}>
                    <Heading size="md" color="gray.900">
                      {product1.name}
                    </Heading>
                    {product1.category && (
                      <Badge colorScheme="blue" variant="subtle">
                        {product1.category}
                      </Badge>
                    )}
                  </VStack>
                </HStack>
                <Text color="gray.700" mb={6} lineHeight="tall">
                  {product1.description}
                </Text>

                {product1.bestFor && product1.bestFor.length > 0 && (
                  <Box>
                    <Text fontWeight="bold" color="gray.900" mb={3}>
                      Best For:
                    </Text>
                    <VStack align="start" spacing={2}>
                      {product1.bestFor.map((item, idx) => (
                        <HStack key={idx} spacing={2}>
                          <CheckIcon color="green.500" boxSize={4} />
                          <Text color="gray.700">{item}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}
              </Box>

              {/* Product 2 Overview */}
              <Box bg="white" p={8} rounded="lg" boxShadow="sm" border="1px solid" borderColor="gray.200">
                <HStack mb={4} spacing={4}>
                  {product2.image && (
                    <Box
                      w={16}
                      h={16}
                      rounded="lg"
                      overflow="hidden"
                      flexShrink={0}
                    >
                      <img
                        src={product2.image}
                        alt={product2.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  )}
                  <VStack align="start" spacing={1}>
                    <Heading size="md" color="gray.900">
                      {product2.name}
                    </Heading>
                    {product2.category && (
                      <Badge colorScheme="purple" variant="subtle">
                        {product2.category}
                      </Badge>
                    )}
                  </VStack>
                </HStack>
                <Text color="gray.700" mb={6} lineHeight="tall">
                  {product2.description}
                </Text>

                {product2.bestFor && product2.bestFor.length > 0 && (
                  <Box>
                    <Text fontWeight="bold" color="gray.900" mb={3}>
                      Best For:
                    </Text>
                    <VStack align="start" spacing={2}>
                      {product2.bestFor.map((item, idx) => (
                        <HStack key={idx} spacing={2}>
                          <CheckIcon color="green.500" boxSize={4} />
                          <Text color="gray.700">{item}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}
              </Box>
            </SimpleGrid>
          </Box>

          {/* Feature Comparison Table */}
          {allFeatures.length > 0 && (
            <Box mb={12}>
              <Heading size="lg" mb={6} color="gray.900">
                Feature Comparison
              </Heading>
              <Box
                overflowX="auto"
                bg="white"
                rounded="lg"
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Table size={tableSize} variant="striped" colorScheme="gray">
                  <Thead bg="gray.100">
                    <Tr>
                      <Th color="gray.900" fontWeight="bold" w="40%">
                        Feature
                      </Th>
                      <Th
                        color="gray.900"
                        fontWeight="bold"
                        textAlign="center"
                        w="30%"
                      >
                        {product1.name}
                      </Th>
                      <Th
                        color="gray.900"
                        fontWeight="bold"
                        textAlign="center"
                        w="30%"
                      >
                        {product2.name}
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {allFeatures.map((feature) => {
                      const p1Has = hasFeature(product1, feature);
                      const p2Has = hasFeature(product2, feature);
                      const p1Value = getFeatureValue(product1, feature);
                      const p2Value = getFeatureValue(product2, feature);

                      return (
                        <Tr key={feature}>
                          <Td color="gray.900" fontWeight="500">
                            {feature}
                          </Td>
                          <Td textAlign="center">
                            {p1Value ? (
                              <Text color="gray.700">{p1Value}</Text>
                            ) : p1Has ? (
                              <CheckIcon color="green.500" boxSize={5} />
                            ) : (
                              <CloseIcon color="red.400" boxSize={4} />
                            )}
                          </Td>
                          <Td textAlign="center">
                            {p2Value ? (
                              <Text color="gray.700">{p2Value}</Text>
                            ) : p2Has ? (
                              <CheckIcon color="green.500" boxSize={5} />
                            ) : (
                              <CloseIcon color="red.400" boxSize={4} />
                            )}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          )}

          {/* Pros & Cons Section */}
          {(product1.pros || product2.pros) && (
            <Box mb={12}>
              <Heading size="lg" mb={6} color="gray.900">
                Advantages & Limitations
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {/* Product 1 Pros/Cons */}
                {product1.pros && (
                  <Box bg="white" p={8} rounded="lg" boxShadow="sm" border="1px solid" borderColor="gray.200">
                    <Heading size="sm" mb={4} color="gray.900">
                      {product1.name} - Advantages
                    </Heading>
                    <VStack align="start" spacing={3}>
                      {product1.pros.map((pro, idx) => (
                        <HStack key={idx} spacing={3}>
                          <CheckIcon color="green.500" boxSize={5} flexShrink={0} />
                          <Text color="gray.700">{pro}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}

                {/* Product 2 Pros/Cons */}
                {product2.pros && (
                  <Box bg="white" p={8} rounded="lg" boxShadow="sm" border="1px solid" borderColor="gray.200">
                    <Heading size="sm" mb={4} color="gray.900">
                      {product2.name} - Advantages
                    </Heading>
                    <VStack align="start" spacing={3}>
                      {product2.pros.map((pro, idx) => (
                        <HStack key={idx} spacing={3}>
                          <CheckIcon color="green.500" boxSize={5} flexShrink={0} />
                          <Text color="gray.700">{pro}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}
              </SimpleGrid>
            </Box>
          )}

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <Box bg="white" p={10} rounded="lg" boxShadow="sm" border="1px solid" borderColor="gray.200" mb={12}>
              <Heading size="lg" mb={8} color="gray.900">
                Frequently Asked Questions
              </Heading>
              <VStack spacing={4} align="stretch">
                {faqs.map((faq, idx) => (
                  <Box key={idx} pb={4} borderBottom={idx < faqs.length - 1 ? '1px solid' : 'none'} borderColor="gray.200">
                    <Heading size="sm" mb={2} color="gray.900">
                      {faq.question}
                    </Heading>
                    <Text color="gray.700" lineHeight="tall">
                      {faq.answer}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}

          {/* CTA Section */}
          <Box bg="gradient.blue" p={10} rounded="lg" textAlign="center">
            <VStack spacing={4}>
              <Heading size="lg" color="white">
                Ready to Choose the Right Solution?
              </Heading>
              <Text color="whiteAlpha.900" fontSize="lg">
                Contact our sales team to discuss which solution best fits your needs.
              </Text>
              <HStack spacing={4} justify="center" flexWrap="wrap">
                <Button
                  size="lg"
                  bg="white"
                  color="blue.600"
                  _hover={{ bg: 'gray.100' }}
                  fontWeight="bold"
                >
                  Request Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  fontWeight="bold"
                >
                  Contact Sales
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
