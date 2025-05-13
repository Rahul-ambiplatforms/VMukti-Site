import React, { useEffect, useState } from "react";
import {
  Box,
  // Container,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getBlogById } from "./blog";

const BlogsOverviewDash = () => {
  const { _id } = useParams();
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const headingSize = useBreakpointValue({ base: "24px", md: "48px" });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await getBlogById(_id);
        if (response.status === "success") {
          setSelectedPost(response.data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Error fetching blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [_id]);

  if (loading) return <Box p={10}>Loading...</Box>;
  if (error)
    return (
      <Box p={10} color="red.500">
        {error}
      </Box>
    );
  if (!selectedPost) return null;

  // Use the API structure: selectedPost.content
  const content = selectedPost.content || {};

  // Helper for images from /uploads
  const getImageUrl = (img) => {
    if (!img) return "/assets/blogs_content_thumbnail.png";
    if (typeof img === "string" && img.startsWith("/uploads")) {
      return `http://localhost:5000${img}`;
    }
    return img;
  };

  return (
    <Box mx={{ base: "2%", md: "0" }}>
      <Flex direction="column" mb={{ base: "5%", md: "2%" }}>
        <Box
          flex="1"
          p={{ base: 2, md: 10 }}
          mb="2%"
          color="black"
          w={{ base: "100%", md: "65%" }}
        >
          <Heading fontSize={headingSize} lineHeight="1.3">
            <Text as="span">{content.title}</Text>
          </Heading>
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          left="180px"
          opacity="1"
          zIndex="2"
        >
          <Box
            width="408px"
            height="408px"
            flexShrink={0}
            borderRadius="408px"
            border="1px solid #000"
            opacity="0.12"
            background="#3F77A5"
            filter="blur(56.6px)"
          />
        </Box>
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          px={{ base: "2%", md: "2%" }}
        >
          <Image
            src={getImageUrl(content.mainImage)}
            alt={content.imageText || content.title}
            objectFit={{ base: "contain", md: "cover" }}
            borderRadius={{ base: "20px", md: "24px" }}
          />
        </Box>
      </Flex>

      {/* Blog Content Section */}
      <Box bg="white" mx="2%" mt="2%" borderRadius="24px" pt="2%" px="3%">
        {/* Title and Brief */}
        <Box p={4} mt={4}>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "36px" }}
            fontWeight="600"
            w={{ base: "100%", md: "60%" }}
          >
            {content.title}
          </Heading>
          {content.brief && Array.isArray(content.brief) && (
            <Text
              color="#696969"
              fontSize={{ base: "14px", md: "16px" }}
              mt={3}
              lineHeight="100%"
              w={{ base: "90%", md: "86%" }}
              align="justify"
            >
              {content.brief[0]?.children?.[0]?.text}
            </Text>
          )}
        </Box>

        {/* Dynamic Headings and Images */}
        {content.headingsAndImages && content.headingsAndImages.length > 0 && (
          <VStack spacing={6} align="stretch" mt={2} px={4}>
            {content.headingsAndImages.map((item, index) => {
              if (
                item.type === "h2" ||
                item.type === "h3" ||
                item.type === "h4"
              ) {
                return (
                  <Heading
                    key={item.id}
                    as={item.type}
                    fontWeight="600"
                    fontSize={{
                      base:
                        item.type === "h2"
                          ? "24px"
                          : item.type === "h3"
                          ? "20px"
                          : "16px",
                      md:
                        item.type === "h2"
                          ? "36px"
                          : item.type === "h3"
                          ? "24px"
                          : "18px",
                    }}
                    color="black"
                  >
                    {item.content &&
                      item.content.text &&
                      item.content.text[0]?.children?.[0]?.text}
                  </Heading>
                );
              }
              if (item.type === "p") {
                return (
                  <Text
                    key={item.id}
                    mt={{ base: "2", md: "4" }}
                    fontSize={{ base: "14px", md: "16px" }}
                    color="black"
                    fontWeight="400"
                    w={{ base: "100%", md: "86%" }}
                    align="justify"
                  >
                    {item.content &&
                      item.content.text &&
                      item.content.text[0]?.children?.[0]?.text}
                  </Text>
                );
              }
              if (item.type === "imageVideo") {
                const img =
                  item.content?.file ||
                  item.content?.url?.path ||
                  item.content?.url ||
                  item.content?.imagePath;
                return (
                  <Image
                    key={item.id}
                    src={getImageUrl(img)}
                    alt={item.content?.description || "Blog image"}
                    borderRadius="md"
                    maxH="250px"
                  />
                );
              }
              if (item.type === "cta") {
                return (
                  <Box
                    key={item.id}
                    bg="blue.50"
                    p={6}
                    borderRadius="lg"
                    textAlign="center"
                    my={6}
                    border="1px"
                    borderColor="blue.100"
                  >
                    <Text fontSize="xl" mb={4} fontWeight="medium">
                      {item.content?.ctaText || "Call to Action Text"}
                    </Text>
                    <Button
                      as="a"
                      href={item.content?.buttonLink || "#"}
                      colorScheme="blue"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.content?.buttonText || "Click Here"}
                    </Button>
                  </Box>
                );
              }
              return null;
            })}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default BlogsOverviewDash;
