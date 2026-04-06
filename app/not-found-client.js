'use client';

import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFoundClient() {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Container maxW="3xl" textAlign="center">
        <VStack spacing={8}>
          <Box>
            <Heading as="h1" size="4xl" color="gray.800" mb={4}>
              404
            </Heading>
            <Heading as="h2" size="2xl" color="gray.700" mb={4}>
              Page Not Found
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              The page you are looking for doesn&apos;t exist or has been moved.
            </Text>
          </Box>
          <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap">
            <Button as={Link} href="/" colorScheme="blue" size="lg">
              Go Home
            </Button>
            <Button as={Link} href="/solution" variant="outline" colorScheme="blue" size="lg">
              View Solutions
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
