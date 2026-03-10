'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  OrderedList,
  ListItem,
  Flex,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dzs02ecai/image/upload/v1758361869/uploads';

// Slate content renderer (from original BlogsContents.js)
const renderSlateContent = (content) => {
  if (!content) return null;
  return content.map((node, i) => {
    if (!node) return null;
    if (typeof node === 'object' && node.text !== undefined) {
      let textElement = node.text;
      if (node.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (node.italic) textElement = <em key={i}>{textElement}</em>;
      if (node.underline) textElement = <u key={i}>{textElement}</u>;
      return (
        <span key={i} style={{ color: node.color || 'inherit' }}>
          {textElement}
        </span>
      );
    } else if (node.type) {
      const children = node.children ? renderSlateContent(node.children) : null;
      switch (node.type) {
        case 'paragraph':
          return (
            <Box key={i}>
              <Text as="div" textAlign={node.align || 'left'} mb={3} lineHeight="1.8">
                {children}
              </Text>
            </Box>
          );
        case 'bulleted-list':
          return (
            <UnorderedList key={i} spacing={2} my="2" pl={4}>
              {children}
            </UnorderedList>
          );
        case 'numbered-list':
          return (
            <OrderedList key={i} spacing={2} mb="2" pl={4}>
              {children}
            </OrderedList>
          );
        case 'list-item':
          return <ListItem key={i}>{children}</ListItem>;
        case 'link':
          let relAttrs = 'noopener noreferrer';
          if (node.noFollow) relAttrs += ' nofollow';
          return (
            <Box
              as="a"
              key={i}
              href={node.url}
              target="_blank"
              rel={relAttrs}
              color="blue.600"
              textDecoration="underline"
              _hover={{ color: 'blue.700' }}
              display="inline"
            >
              {children}
            </Box>
          );
        default:
          return <div key={i}>{children}</div>;
      }
    }
    return null;
  });
};

// Table of Contents component
const TableOfContents = ({ components }) => {
  const mainHeadings = components?.filter((comp) => comp.type === 'h2') || [];

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - 100, behavior: 'smooth' });
    }
  };

  if (mainHeadings.length === 0) return null;

  return (
    <Box mb={{ base: '4', md: '0' }}>
      <Text
        textAlign="left"
        fontSize={{ base: '24px', md: '32px' }}
        fontWeight="600"
        color="#3F77A5"
        mb={4}
      >
        Table of Contents
      </Text>
      <Box maxHeight={{ base: 'none', md: mainHeadings.length > 3 ? '130px' : 'none' }}
        overflowY={mainHeadings.length > 3 ? { base: 'hidden', md: 'auto' } : 'hidden'}>
        {mainHeadings.map((heading, index) => (
          <Flex
            key={heading.id || index}
            as="a"
            href={`#${heading.id}`}
            onClick={(e) => handleLinkClick(e, heading.id)}
            gap="2"
            mb="3"
            alignItems="flex-start"
            _hover={{ textDecoration: 'none', color: '#315b7e' }}
            fontWeight={600}
            fontSize="16px"
          >
            <Box display="flex" pt="4px">
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z" fill="#3F77A5" />
              </svg>
            </Box>
            <Text as="div" noOfLines={2}>
              {renderSlateContent(heading.content?.text)}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default function BlogContentClient({ blogData, urlWords }) {
  if (!blogData) {
    return (
      <Center h="60vh">
        <Text fontSize="xl">Blog not found</Text>
      </Center>
    );
  }

  const content = blogData.content || {};
  const metadata = blogData.metadata || {};
  const mainImageUrl = content.mainImage ? `${CLOUDINARY_BASE}/${content.mainImage}` : null;

  return (
    <Container maxW="7xl" py={8}>
      {/* Blog Header */}
      <VStack spacing={6} align="stretch" mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="700"
          color="#1a1a2e"
          textAlign="center"
        >
          {content.title}
        </Heading>

        {content.blogAuthor && (
          <Text textAlign="center" color="gray.600" fontSize="sm">
            By {content.blogAuthor} | {new Date(blogData.createdAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </Text>
        )}

        {/* Main Image */}
        {mainImageUrl && (
          <Box borderRadius="xl" overflow="hidden" maxH="500px">
            <Image
              src={mainImageUrl}
              alt={content.imageText || content.title}
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>
        )}
      </VStack>

      <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
        {/* Sidebar — Table of Contents */}
        <Box w={{ base: '100%', lg: '30%' }} position={{ lg: 'sticky' }} top="120px" h="fit-content">
          <TableOfContents components={content.headingsAndImages || []} />
        </Box>

        {/* Blog Content */}
        <Box w={{ base: '100%', lg: '70%' }}>
          {/* Brief */}
          {content.brief && (
            <Box mb={6}>
              {renderSlateContent(content.brief)}
            </Box>
          )}

          {/* Headings and Images */}
          {content.headingsAndImages &&
            content.headingsAndImages.map((item, index) => {
              if (item.type === 'h2') {
                return (
                  <Heading
                    key={item.id || index}
                    id={item.id}
                    as="h2"
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight="700"
                    color="#3F77A5"
                    mt={8}
                    mb={4}
                    scrollMarginTop="120px"
                  >
                    {renderSlateContent(item.content?.text)}
                  </Heading>
                );
              }
              if (item.type === 'p') {
                return (
                  <Box key={item.id || index} mb={4} color="gray.700" lineHeight="1.8">
                    {renderSlateContent(item.content?.text)}
                  </Box>
                );
              }
              if (item.type === 'image' && item.content?.imageUrl) {
                return (
                  <Box key={item.id || index} my={6} borderRadius="lg" overflow="hidden">
                    <Image
                      src={`${CLOUDINARY_BASE}/${item.content.imageUrl}`}
                      alt={item.content?.altText || ''}
                      w="100%"
                    />
                  </Box>
                );
              }
              return null;
            })}

          {/* FAQs */}
          {content.faqs?.items?.length > 0 && (
            <Box mt={10}>
              <Heading as="h2" fontSize="2xl" fontWeight="700" color="#3F77A5" mb={4}>
                {content.faqs.title || 'Frequently Asked Questions'}
              </Heading>
              <Accordion allowMultiple>
                {content.faqs.items.map((faq, index) => (
                  <AccordionItem key={index} border="1px solid" borderColor="gray.200" mb={2} borderRadius="md">
                    <AccordionButton p={4}>
                      <Box flex="1" textAlign="left" fontWeight="600">
                        {faq.question || faq.q}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} color="gray.700">
                      {faq.answer || faq.a}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          )}
        </Box>
      </Flex>

      {/* Back to Blog */}
      <Box textAlign="center" mt={12}>
        <Link href="/blog" style={{ color: '#3F77A5', fontWeight: '600', textDecoration: 'underline' }}>
          ← Back to All Blogs
        </Link>
      </Box>
    </Container>
  );
}
