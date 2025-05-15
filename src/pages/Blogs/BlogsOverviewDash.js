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
  Button,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs, getBlogById } from "./blog";

// Helper function to render Slate content
const renderSlateContent = (content) => {
  if (!content) return null;
  return content.map((node, i) => {
    if (!node) return null;
    if (typeof node === "object" && node.text !== undefined) {
      let textElement = node.text;
      if (node.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (node.italic) textElement = <em key={i}>{textElement}</em>;
      if (node.underline) textElement = <u key={i}>{textElement}</u>;
      return (
        <span key={i} style={{ color: node.color || "inherit" }}>
          {textElement}
        </span>
      );
    } else if (node.type) {
      const children = node.children ? renderSlateContent(node.children) : null;
      switch (node.type) {
        case "paragraph":
          return (
            <Box key={i} mb={2}>
              <Text textAlign={node.align || "left"}>{children}</Text>
            </Box>
          );
        case "bulleted-list":
          return <UnorderedList key={i}>{children}</UnorderedList>;
        case "numbered-list":
          return <OrderedList key={i}>{children}</OrderedList>;
        case "list-item":
          return <ListItem key={i}>{children}</ListItem>;
        case "link":
          return (
            <Box
              as="a"
              key={i}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              color="blue.600"
              textDecoration="underline"
              _hover={{ color: "blue.700" }}
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

const BlogsOverviewDash = () => {
  const { urlWords } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Fetch all blogs (first page, large limit for safety)
        const blogsResponse = await getBlogs(1, 6);
        if (blogsResponse.status === "success") {
          const found = blogsResponse.data.find(
            (b) => b.metadata?.urlWords === urlWords
          );
          if (found) {
            const response = await getBlogById(found._id);
            if (response.status === "success") {
              setBlog(response.data);
            } else {
              setError("Blog not found");
            }
          } else {
            setError("Blog not found");
          }
        } else {
          setError("Error fetching blogs list");
        }
      } catch (err) {
        setError("Error fetching blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [urlWords]);

  if (loading)
    return (
      <Box p={10} alignContent="center">
        <Spinner size="xl" />
      </Box>
    );
  if (error)
    return (
      <Box p={10} color="red.500">
        {error}
      </Box>
    );
  if (!blog) return null;

  const content = blog.content || {};
  const components = content.headingsAndImages || [];
  const faqComponents = content.faqs?.items || [];
  const mainImageUrl =
    content.mainImage && typeof content.mainImage === "string"
      ? `${IMAGE_BASE_URL}/${content.mainImage}`
      : `${IMAGE_BASE_URL}/${content.mainImage}`;

  return (
    <Box px="2%">
      {/* Blog Header */}
      <Box mb={8}>
        <Heading as="h1" fontSize="48px" mt="8" mb="8">
          {content.title || "Blog Title"}
        </Heading>
        {mainImageUrl && (
          <Box mb={6}>
            <Image
              src={mainImageUrl}
              alt={content.imageText || "Blog image"}
              borderRadius="lg"
              w="100%"
              maxH="500px"
              objectFit="cover"
            />
          </Box>
        )}
        {/* {content.brief && (
          <Box mt={4} fontSize="16px">
            {renderSlateContent(content.brief)}
          </Box>
        )} */}
      </Box>
      {/* Blog Content */}
      <VStack
        spacing={8}
        bg="white"
        borderRadius="24px"
        px="5%"
        py="4%"
        align="stretch"
      >
        {content.brief && (
          <Box mt={4} fontSize="16px">
            {renderSlateContent(content.brief)}
          </Box>
        )}
        {components
          .reduce((groups, component, index) => {
            if (component.type === "faq") return groups;
            if (
              component.type === "h2" ||
              component.type === "h3" ||
              component.type === "h4"
            ) {
              groups.push({
                id: component.id,
                heading: component,
                content: [],
              });
            } else if (component.type === "p" && groups.length > 0) {
              groups[groups.length - 1].content.push(component);
            } else {
              groups.push({
                id: component.id,
                content: [component],
              });
            }
            return groups;
          }, [])
          .map((group) => (
            <VStack key={group.id} spacing={0} align="stretch">
              {group.heading && (
                <Box>
                  {group.heading.type === "h2" && (
                    <Heading as="h2" fontSize="36px">
                      {renderSlateContent(group.heading.content.text)}
                    </Heading>
                  )}
                  {group.heading.type === "h3" && (
                    <Heading as="h3" fontSize="20px">
                      {renderSlateContent(group.heading.content.text)}
                    </Heading>
                  )}
                  {group.heading.type === "h4" && (
                    <Heading as="h4" fontSize="16px">
                      {renderSlateContent(group.heading.content.text)}
                    </Heading>
                  )}
                </Box>
              )}
              {group.content.map((component) => {
                switch (component.type) {
                  case "p":
                    return (
                      <Box as="p" key={component.id} fontSize="16px">
                        {renderSlateContent(component.content.text)}
                      </Box>
                    );
                  case "imageVideo":
                    return (
                      <Box key={component.id} my={4}>
                        {component.content.file ||
                        component.content.url ||
                        component.content.imagePath ? (
                          <Image
                            src={
                              component.content.file ||
                              component.content.url ||
                              `${IMAGE_BASE_URL}/${component.content.imagePath}`
                            }
                            alt={component.content.description || "Image"}
                            borderRadius="md"
                            maxH="250px"
                          />
                        ) : (
                          <Box
                            bg="gray.200"
                            borderRadius="md"
                            height="200px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text color="gray.500">Image Placeholder</Text>
                          </Box>
                        )}
                      </Box>
                    );
                  case "cta":
                    return (
                      <Box
                        key={component.id}
                        bg="blue.50"
                        p={6}
                        borderRadius="lg"
                        textAlign="center"
                        my={6}
                        border="1px"
                        borderColor="blue.100"
                      >
                        <Text fontSize="xl" mb={4} fontWeight="medium">
                          {component.content.ctaText || "Call to Action Text"}
                        </Text>
                        <Button
                          as="a"
                          href={
                            component.content.buttonLink?.startsWith("http")
                              ? component.content.buttonLink
                              : `https://${component.content.buttonLink}`
                          }
                          colorScheme="blue"
                          size="lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {component.content.buttonText || "Click Here"}
                        </Button>
                      </Box>
                    );
                  case "schema":
                    return (
                      <Box
                        key={component.id}
                        p={4}
                        bg="gray.50"
                        borderRadius="md"
                      >
                        <Text fontFamily="monospace" fontSize="sm">
                          {component.content.schemaData || "Schema Content"}
                        </Text>
                      </Box>
                    );
                  default:
                    return null;
                }
              })}
            </VStack>
          ))}
        {/* FAQ Section with title */}
        {faqComponents.length > 0 && (
          <Box mt={8}>
            <Heading as="h2" fontSize="36px" mb={4}>
              <Text fontSize="16px" mt={2} color="gray.500">
                {content.faqs?.title || "Frequently Asked Questions"}
              </Text>
            </Heading>
            <Accordion allowMultiple>
              {faqComponents.map((faq, idx) => (
                <AccordionItem key={faq.id || idx}>
                  <h3>
                    <AccordionButton py={3}>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight="600"
                        fontSize="16px"
                      >
                        {faq.question || "Question"}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} fontSize="14px" fontWeight="400">
                    {renderSlateContent(faq.answer)}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        )}
      </VStack>
      {/* Metadata Preview (for reference) */}
      {/* <Box mt={12} p={4} bg="gray.50" borderRadius="md">
        <Heading as="h3" size="sm" mb={2}>
          Metadata Preview
        </Heading>
        <Text fontSize="sm">
          <strong>URL:</strong> {content.urlWords || "example-blog-post"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Title:</strong> {content.metaTitle || "Blog Post Title"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Description:</strong> {content.metaDescription || "Blog post description for SEO purposes."}
        </Text>
      </Box> */}
    </Box>
  );
};

export default BlogsOverviewDash;

// URL
// pagination
