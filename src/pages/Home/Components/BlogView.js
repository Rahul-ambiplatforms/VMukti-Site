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
import { Link as RouterLink } from "react-router-dom";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { getBlogs } from "../../Blogs/blog"; // Make sure this path is correct

// The base URL for your images.
// const IMAGE_BASE_URL =
//   process.env.REACT_APP_IMAGE_BASE_URL || "http://localhost:5000/uploads/";
// const IMAGE_BASE_URL = "https://vmukti.com/backend/uploads/";
const IMAGE_BASE_URL =
  "https://res.cloudinary.com/dzs02ecai/image/upload/v1758361869/uploads/";

const BlogPostCard = memo(({ post, layoutVariant = "textFirst" }) => {
  // Safely access nested properties with fallbacks
  const title = post.content?.title || "Untitled Blog";
  const imageUrl = `${IMAGE_BASE_URL}${post.content.mainImage}`;
  const brief =
    post.content?.brief?.[0]?.children?.[0]?.text ||
    "No description available.";
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
      <Link
        href={url}
        isExternal
        fontWeight="bold"
        display="flex"
        alignItems="center"
      >
        Read more
        <Box ml="2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <path
              d="M20.8596 12.1622C21.4454 11.5764 21.4454 10.6267 20.8596 10.0409L11.3137 0.494961C10.7279 -0.0908254 9.77817 -0.0908255 9.19239 0.494961C8.6066 1.08075 8.6066 2.03049 9.19239 2.61628L17.6777 11.1016L9.19239 19.5868C8.6066 20.1726 8.6066 21.1224 9.19239 21.7082C9.77817 22.294 10.7279 22.294 11.3137 21.7082L20.8596 12.1622ZM0 11.1016V12.6016L19.799 12.6016V11.1016V9.60156L0 9.60156V11.1016Z"
              fill="white"
            />
          </svg>
        </Box>
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
    base: "column",
    md: layoutVariant === "textFirst" ? "row" : "row-reverse",
  });

  return (
    <Flex
      w="100%"
      borderRadius="24px"
      overflow="hidden"
      //   boxShadow="lg"
      direction={flexDirection}
      // h="760px"
    >
      {textSection}
      {imageSection}
    </Flex>
  );
});

// --- Placeholder Component ---
// This component is displayed when a blog post is not available for a slot.
const BlogPlaceholderCard = ({ layoutVariant = "textFirst" }) => {
  const textSection = (
    <Center
      p={{ base: 6, md: 8 }}
      w={{ base: "100%", md: "50%" }}
      bg="#3F77A5"
      color="whiteAlpha.700"
      h="100%"
      minH={{ base: "200px", md: "250px" }}
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
    base: "column",
    md: layoutVariant === "textFirst" ? "row" : "row-reverse",
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
  const svgSize = useBreakpointValue({base:"25",md:"34"})
  const containerPadding = useBreakpointValue({ base: 6, md: 10, lg: 16 });

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch up to 2 latest blogs
      const response = await getBlogs(1, 2, "", "latest", "published");
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
        maxW="100%"
        mx="auto"
        gap={10}
      >
        {/* Left Section */}
        <VStack
          align={{ base: "left", lg: "start" }}
          spacing={5}
          w={{ base: "100%", lg: "30%" }}
          textAlign={{ base: "left", lg: "left" }}
          mb={{ base: 10, lg: 0 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight="bold"
          >
            Our Latest{" "}
            <Box as="span" color="orange.400">
              Blogs
            </Box>
          </Heading>
          {/* <Icon as={FiArrowDown} w={8} h={8} color="#3F77A5" /> */}
          <Flex direction="column" gap="4" w="90%">
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113787 30.0138 7.16405e-06C28.357 0.0011522 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334405 28.3639 0.0345855 30.0207C0.0357305 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>
            <Text
              color="black"
              fontSize={{base:"14px",md:"16px"}}
              lineHeight={{base:"18px",md:"20px"}}
              fontWeight="500"
              as="p"
              textAlign="justify"
            >
              Welcome to our blog section, where knowledge meets inspiration,
              explore insightful articles, expect tips, and the latest trends in
              our field.
            </Text>
          </Flex>
          <Link
            as={RouterLink}
            to="/blog" // <-- Set the destination path to your blogs page
            _hover={{ textDecoration: "none" }} // Prevents the link underline on hover
          >
            <Button
              bg="#E7E7E7"
              color="#3F77A5"
              _hover={{ bg: "gray.300" }}
              size="lg"
              px={8}
              borderRadius="24px"
            >
              View all
              <Box ml="2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM2 16L3.06066 17.0607L17.0607 3.06066L16 2L14.9393 0.939339L0.93934 14.9393L2 16Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Box>
            </Button>
          </Link>
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
              const layoutVariant = index === 0 ? "textFirst" : "imageFirst";

              return post ? (
                <BlogPostCard
                  key={post._id}
                  post={post}
                  layoutVariant={layoutVariant}
                />
              ) : (
                <BlogPlaceholderCard
                  key={`placeholder-${index}`}
                  layoutVariant={layoutVariant}
                />
              );
            })
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default BlogView;
