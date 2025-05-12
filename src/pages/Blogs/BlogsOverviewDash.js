import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import blogsData from "./VMukti.blogs[1].json"; // Adjust path if needed

const renderSlateContent = (content) => {
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
              // href={node.url}
              href={
                node.url?.startsWith("http") ? node.url : `https://${node.url}`
              }
              target="_blank"
              rel="noopener noreferrer"
              color="#3F77A5"
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

const getImageUrl = (image) => {
  if (!image) return null;
  if (typeof image === "string") return image;
  if (image instanceof File) return URL.createObjectURL(image);
  if (image.path) return image.path; // Handles relative paths
  if (image.relativePath) return image.relativePath; // Handles relativePath field
  return null;
};

const BlogsOverview = () => {
  const params = useParams();
  const urlWords = params.urlWords || ""; // Fallback to an empty string if undefined
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("Params from useParams:", params); // Debugging log
    if (!urlWords) {
      console.warn(
        "URL Words is undefined or empty. Ensure the route includes a dynamic segment for 'urlWords'."
      );
      return;
    }

    console.log("URL Words from Params:", urlWords); // Debugging log
    const matched = blogsData.find(
      (post) =>
        post.metadata?.urlWords?.toLowerCase() === urlWords?.toLowerCase()
    );
    if (!matched) {
      console.warn("No blog found for the given URL Words:", urlWords); // Debugging log
    }
    setBlog(matched);
  }, [urlWords]);

  if (!blog) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading Blog...</Text>
      </Box>
    );
  }

  // Adjusted destructuring to match the schema
  const { metadata, content } = blog;
  const { headingsAndImages = [], faqs = {}, schemas = [] } = content || {}; // Fallbacks for undefined properties
  const faqComponents = faqs.items || []; // Fallback to an empty array if `items` is undefined

  return (
    <Box w={{ base: "100%", md: "100%" }} p={{ base: "5%", md: "2%" }}>
      <Box mb={8}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize={{ base: "24px", md: "48px" }}
          w={{ base: "100%", md: "70%" }}
          mb={4}
        >
          {content.title || "Blog Title"}
        </Heading>

        {content.mainImage && (
          <Box mb={6} borderRadius="24px">
            <Image
              // src={getImageUrl(content.mainImage) || "/assets/blogs_post_main.png"}
              src="/assets/blogs_post_main.png"
              alt={content.imageText || "Blog image"}
              borderRadius="24px"
              w="100%"
              h="auto"
              // maxH="500px"
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

      <VStack spacing={4} align="stretch" bg="white" borderRadius="24px" p="16">
        {content.brief && (
          <Box fontSize="16px">
            {renderSlateContent(content.brief)}
          </Box>
        )}
        {headingsAndImages.map((component) => {
          switch (component.type) {
            case "h2":
              return (
                <Heading
                  as="h2"
                  key={component.id}
                  fontSize="36px"
                  fontWeight="600"
                >
                  {renderSlateContent(component.content.text || [])}
                </Heading>
              );
            case "h3":
              return (
                <Heading
                  as="h3"
                  key={component.id}
                  fontSize="20px"
                  fontWeight="600"
                >
                  {renderSlateContent(component.content.text || [])}
                </Heading>
              );
            case "h4":
              return (
                <Heading
                  as="h3"
                  key={component.id}
                  fontSize="16px"
                  fontWeight="600"
                >
                  {renderSlateContent(component.content.text || [])}
                </Heading>
              );
            case "p":
              return (
                <Text key={component.id} fontSize="16px">
                  {renderSlateContent(component.content.text || [])}
                </Text>
              );
            case "imageVideo":
              return (
                <Box key={component.id}>
                  <Image
                    // src={
                    // getImageUrl(component.content.url) || "/placeholder.svg"
                    // }
                    src="/assets/blogs_post_main.png"
                    alt={component.content.description || "Image"}
                    borderRadius="md"
                    h="auto"
                    maxH="500px"
                  />
                </Box>
              );
            case "cta":
              return (
                <Box
                  key={component.id}
                  textAlign="center"
                  bg="lightblue"
                  p="4"
                  borderRadius="24px"
                >
                  <Text mb={2}>
                    {component.content.ctaText || "Call to Action"}
                  </Text>
                  <Button
                    as="a"
                    // href={component.content.buttonLink || "#"}
                    href={`https://${component.content.buttonLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="#3F77A5"
                  >
                    {component.content.buttonText || "Click Here"}
                  </Button>
                </Box>
              );
            default:
              return null;
          }
        })}

        {/* FAQ Section */}
        {faqComponents.length > 0 && (
          <Box mt={8}>
            <Heading as="h2" fontSize="36px" mb={4}>
              Frequently Asked Questions
            </Heading>
            <Accordion allowMultiple>
              {faqComponents.map((faq, index) => (
                <AccordionItem key={index}>
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
                    {renderSlateContent(faq.answer || [])}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        )}
      </VStack>

      {/* Metadata Section */}
      {/* <Box mt={12} p={4} bg="gray.50" borderRadius="md">
        <Heading as="h3" size="sm" mb={2}>
          Metadata Preview
        </Heading>
        <Text fontSize="sm">
          <strong>URL:</strong> {metadata.urlWords || "example-blog-post"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Title:</strong> {metadata.metaTitle || "Blog Post Title"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Description:</strong>{" "}
          {metadata.metaDescription ||
            "Blog post description for SEO purposes."}
        </Text>
      </Box> */}
    </Box>
  );
};

export default BlogsOverview;
