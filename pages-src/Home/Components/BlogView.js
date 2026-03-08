'use client';
import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Link,
  Icon,
  useBreakpointValue,
  Spinner,
  SimpleGrid,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { getBlogs } from "../../Blogs/blog";

const IMAGE_BASE_URL =
  "https://res.cloudinary.com/dzs02ecai/image/upload/v1758361869/uploads/";

// --- Featured Blog Card (first/hero card) ---
const FeaturedBlogCard = memo(({ post }) => {
  const title = post.content?.title || "Untitled Blog";
  const imageUrl = `${IMAGE_BASE_URL}${post.content.mainImage}`;
  const brief =
    post.content?.brief?.[0]?.children?.[0]?.text ||
    "No description available.";
  const url = `/blog/${post.metadata?.urlWords || post._id}`;
  const category = post.metadata?.category || "Industry Insights";
  const date = post.metadata?.publishedAt
    ? new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <Link as={RouterLink} to={url} _hover={{ textDecoration: "none" }} w="100%">
      <Box
        borderRadius="16px"
        overflow="hidden"
        bg="white"
        boxShadow="0 2px 12px rgba(0,0,0,0.06)"
        transition="all 0.3s ease"
        _hover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)", transform: "translateY(-2px)" }}
        h="100%"
      >
        <Box position="relative" h={{ base: "200px", md: "220px" }} overflow="hidden">
          <Image
            loading="lazy"
            src={imageUrl}
            alt={title}
            objectFit="cover"
            w="100%"
            h="100%"
            transition="transform 0.4s ease"
            _groupHover={{ transform: "scale(1.05)" }}
          />
          <Badge
            position="absolute"
            top={3}
            left={3}
            bg="#3F77A5"
            color="white"
            fontSize="10px"
            fontWeight="600"
            px={3}
            py={1}
            borderRadius="4px"
            textTransform="uppercase"
            letterSpacing="0.5px"
          >
            {category}
          </Badge>
        </Box>
        <VStack align="start" p={5} spacing={3}>
          {date && (
            <Text fontSize="12px" color="gray.500" fontWeight="500">
              {date}
            </Text>
          )}
          <Heading as="h3" fontSize={{ base: "16px", md: "18px" }} fontWeight="700" color="gray.800" noOfLines={2} lineHeight="1.4">
            {title}
          </Heading>
          <Text fontSize="13px" color="gray.600" noOfLines={2} lineHeight="1.6">
            {brief}
          </Text>
          <HStack spacing={1} color="#3F77A5" fontWeight="600" fontSize="13px" pt={1}>
            <Text>Read more</Text>
            <Icon as={FiArrowRight} boxSize={4} />
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
});

// --- BlogView Component (Main Parent) ---
const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBlogs(1, 3, "", "latest", "published");
      if (response.status === "success" && Array.isArray(response.data)) {
        setBlogs(response.data);
      }
    } catch (error) {
      // Silent fail
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box bg="white" p={{ base: "6%", md: "3%" }} borderRadius="24px">
      {/* Header */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
        justify="space-between"
        mb={{ base: 6, md: 8 }}
      >
        <Box>
          <Text
            fontSize="13px"
            fontWeight="600"
            color="#3F77A5"
            textTransform="uppercase"
            letterSpacing="1.5px"
            mb={2}
          >
            VMukti Insights
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "36px" }}
            fontWeight="700"
            color="gray.800"
            lineHeight="1.2"
          >
            Latest from Our{" "}
            <Box as="span" color="#3F77A5">
              Resource Hub
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "14px", md: "15px" }}
            color="gray.500"
            mt={2}
            maxW="600px"
          >
            Stay ahead with industry insights, product updates, and expert analysis on AI-powered surveillance.
          </Text>
        </Box>
        <Link
          as={RouterLink}
          to="/blog"
          _hover={{ textDecoration: "none" }}
          display={{ base: "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
          flexShrink={0}
        >
          <Button
            bg="#3F77A5"
            color="white"
            _hover={{ bg: "#2D5F8A" }}
            size="md"
            px={6}
            borderRadius="8px"
            fontWeight="600"
            rightIcon={<FiArrowRight />}
          >
            View All Insights
          </Button>
        </Link>
      </Flex>

      {/* Blog Cards Grid */}
      {isLoading ? (
        <Flex justify="center" align="center" minH="300px">
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3F77A5"
            size="lg"
          />
        </Flex>
      ) : (
        <SimpleGrid columns={columns} spacing={{ base: 5, md: 6 }}>
          {blogs.length > 0 ? (
            blogs.slice(0, 3).map((post) => (
              <FeaturedBlogCard key={post._id} post={post} />
            ))
          ) : (
            // Placeholder cards when no blogs
            Array.from({ length: 3 }).map((_, i) => (
              <Box
                key={`placeholder-${i}`}
                borderRadius="16px"
                bg="gray.50"
                h="350px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gray.400" fontSize="14px">
                  Blog post coming soon
                </Text>
              </Box>
            ))
          )}
        </SimpleGrid>
      )}

      {/* Mobile CTA */}
      <Flex justify="center" display={{ base: "flex", md: "none" }} mt={6}>
        <Link as={RouterLink} to="/blog" _hover={{ textDecoration: "none" }}>
          <Button
            bg="#3F77A5"
            color="white"
            _hover={{ bg: "#2D5F8A" }}
            size="md"
            px={8}
            borderRadius="8px"
            fontWeight="600"
            rightIcon={<FiArrowRight />}
          >
            View All Insights
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default BlogView;
