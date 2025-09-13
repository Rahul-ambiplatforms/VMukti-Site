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
  useToast,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { getBlogs } from "../../Blogs/blog"; // Make sure this path is correct

// The base URL for your images.
// const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL || "http://localhost:5000/uploads/";
const IMAGE_BASE_URL = "https:/vmukti.com/backend/uploads/";

// --- BlogPostCard Component (Redesigned & Optimized) ---
// This component is wrapped in React.memo for performance optimization.
// It will not re-render unless its props (post, layoutVariant) change.
const BlogPostCard = memo(({ post, layoutVariant = 'textFirst' }) => {
  // Safely access nested properties with fallbacks
  const title = post.content?.title || "Untitled Blog";
  const imageUrl = `${IMAGE_BASE_URL}${post.content.mainImage}`;
  const brief =
    post.content?.brief?.[0]?.children?.[0]?.text || "No description available.";
  const url = `/blog/${post.metadata?.urlWords || post._id}`;

  // Define the layout structure based on the variant prop
  const textSection = (
    <VStack
      align="start"
      justify="center"
      spacing={4}
      p={{ base: 6, md: 8 }}
      w={{ base: "100%", md: "50%" }}
      bg="#3F77A5"
      color="white"
      h="100%"
    >
      <Heading as="h3" size="md" noOfLines={2}>
        {title}
      </Heading>
      <Box width="20px" height="2px" bg="white" borderRadius="full" />
      <Text fontSize="sm" opacity={0.9} noOfLines={3}>
        {brief}
      </Text>
      <Link href={url} isExternal fontWeight="bold" display="flex" alignItems="center">
        Read more <Icon as={FiArrowRight} ml={2} />
      </Link>
    </VStack>
  );

  const imageSection = (
    <Image
      src={imageUrl}
      alt={title}
      objectFit="cover"
      w={{ base: "100%", md: "50%" }}
      h={{ base: "250px", md: "auto" }}
    />
  );
  
  // Set the order based on screen size and layout variant
  const flexDirection = useBreakpointValue({
    base: 'column',
    md: layoutVariant === 'textFirst' ? 'row' : 'row-reverse'
  });

  return (
    <Flex
      w="100%"
      borderRadius="24px" // More pronounced border radius as in image
      overflow="hidden"
    //   boxShadow="lg"
    direction={flexDirection}
    >
        {textSection}
        {imageSection}
    </Flex>
  );
});

// --- Placeholder Component ---
// This component is displayed when a blog post is not available for a slot.
const BlogPlaceholderCard = ({ layoutVariant = 'textFirst' }) => {
  
    const textSection = (
      <Center
        p={{ base: 6, md: 8 }}
        w={{ base: "100%", md: "50%" }}
        bg="#3F77A5"
        color="whiteAlpha.700"
        h="100%"
        minH={{ base: "200px", md: "250px"}}
      >
        <Text>No blog post available.</Text>
      </Center>
    );

    const imageSection = (
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "250px", md: "auto" }}
          bg="gray.200"
        />
    );
  
    const flexDirection = useBreakpointValue({
      base: 'column',
      md: layoutVariant === 'textFirst' ? 'row' : 'row-reverse'
    });
  
    return (
      <Flex
        w="100%"
        borderRadius="24px"
        overflow="hidden"
        // boxShadow="lg"
        direction={flexDirection}
      >
        {textSection}
        {imageSection}
      </Flex>
    );
};


// --- BlogView Component (Main Parent) ---
const BlogView = () => {
  const toast = useToast();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerPadding = useBreakpointValue({ base: 6, md: 10, lg: 16 });

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch up to 2 latest blogs
      const response = await getBlogs(1, 2, "", "desc", "published");
      if (response.status === "success" && Array.isArray(response.data)) {
        setBlogs(response.data);
      }
    } catch (error) {
      toast({
        title: "Error fetching blogs",
        description: error.message || "An unknown error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <Box bg="white" p="2%" borderRadius="24px">
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        gap={10}
      >
        {/* Left Section */}
        <VStack
          align={{ base: "center", lg: "start" }}
          spacing={5}
          w={{ base: "100%", lg: "30%" }}
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: 10, lg: 0 }}
        >
          <Heading as="h2" size="2xl" fontWeight="bold">
            Our Latest <Box as="span" color="orange.400">Blogs</Box>
          </Heading>
          <Icon as={FiArrowDown} w={8} h={8} color="#3F77A5" />
          <Text color="gray.600">
            Welcome to our blog section, where knowledge meets inspiration,
            explore insightful articles, expect tips, and the latest trends in
            our field.
          </Text>
          <Button
            bg="gray.200"
            color="gray.800"
            rightIcon={<Icon as={FiArrowRight} />}
            _hover={{ bg: "gray.300" }}
            size="lg"
            px={8}
            borderRadius="24px"
          >
            View all
          </Button>
        </VStack>

        {/* Right Section */}
        <Stack
          spacing={8}
          w={{ base: "100%", lg: "70%" }}
          align="center"
          justify="center"
          minH="300px" // Provides space for the spinner
        >
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#3F77A5"
              size="xl"
            />
          ) : (
            // This logic ensures we always have two slots.
            Array.from({ length: 2 }).map((_, index) => {
              const post = blogs[index];
              const layoutVariant = index === 0 ? 'textFirst' : 'imageFirst';

              return post ? (
                <BlogPostCard
                  key={post._id}
                  post={post}
                  layoutVariant={layoutVariant}
                />
              ) : (
                <BlogPlaceholderCard key={`placeholder-${index}`} layoutVariant={layoutVariant} />
              );
            })
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default BlogView;