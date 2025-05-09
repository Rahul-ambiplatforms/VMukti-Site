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
  } from "@chakra-ui/react"
  import { isValidSlateValue } from "./SlateEditor"
  import { useEffect, useState } from "react";
  
  // Helper function to render Slate content
  const renderSlateContent = (content) => {
    if (!isValidSlateValue(content)) {
      return null
    }
  
    return content.map((node, i) => {
      if (!node) return null
  
      if (typeof node === 'object' && node.text !== undefined) {
        // Handle leaf nodes (text)
        let textElement = node.text
  
        if (node.bold) textElement = <strong key={i}>{textElement}</strong>
        if (node.italic) textElement = <em key={i}>{textElement}</em>
        if (node.underline) textElement = <u key={i}>{textElement}</u>
  
        return (
          <span key={i} style={{ color: node.color || "inherit" }}>
            {textElement}
          </span>
        )
      } else if (node.type) {
        // Handle element nodes
        const children = node.children ? renderSlateContent(node.children) : null
  
        switch (node.type) {
          case "paragraph":
            return (
              <Box key={i} mb={2}>
                <Text textAlign={node.align || "left"}>
                  {children}
                </Text>
              </Box>
            )
          case "bulleted-list":
            return <UnorderedList key={i}>{children}</UnorderedList>
          case "numbered-list":
            return <OrderedList key={i}>{children}</OrderedList>
          case "list-item":
            return <ListItem key={i}>{children}</ListItem>
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
            )
          default:
            return <div key={i}>{children}</div>
        }
      }
  
      return null
    })
  }
  
  const BlogPreview = ({ formData, components, faqTitle }) => {
    // Group FAQ components together
    const faqComponents = components.filter((component) => component.type === "faq")
    const [mainImageUrl, setMainImageUrl] = useState(null);
  
    useEffect(() => {
      // Generate the image URL on the client side
      if (formData.mainImage) {
        if (formData.mainImage instanceof File) {
          setMainImageUrl(URL.createObjectURL(formData.mainImage));
        } else if (typeof formData.mainImage === 'string') {
          // If it's a string path, use it directly
          setMainImageUrl(formData.mainImage);
        } else if (formData.mainImage.path) {
          // If it's an object with a path property, use that
          setMainImageUrl(formData.mainImage.path);
        }
      }
    }, [formData.mainImage]);
  
    // Helper function to get image URL
    const getImageUrl = (image) => {
      if (!image) return null;
      if (typeof image === 'string') return image;
      if (image instanceof File) return URL.createObjectURL(image);
      if (image.path) return image.path;
      return null;
    };
  
    return (
      <Container maxW="container.xl" p={0}>
        {/* Blog Header */}
        <Box mb={8}>
          {/* Blog title: h1 tag with font size 48px */}
          <Heading as="h1" fontSize="48px" mb={4}>
            {formData.blogTitle || "Blog Title"}
          </Heading>
  
          {/* Main Image - use imageText as alt but don't display it visibly */}
          {mainImageUrl && (
            <Box mb={6}>
              <Image
                src={getImageUrl(mainImageUrl) || "/placeholder.svg"}
                alt={formData.imageText || "Blog image"}
                borderRadius="lg"
                w="100%"
                maxH="500px"
                objectFit="cover"
              />
            </Box>
          )}
  
          {/* Brief with 16px font size */}
          {formData.brief && (
            <Box mt={4} fontSize="16px">
              {renderSlateContent(formData.brief)}
            </Box>
          )}
        </Box>
  
        {/* Blog Content */}
        <VStack spacing={8} align="stretch">
          {components.map((component, index) => {
            // Skip FAQ components as they're handled separately
            if (component.type === "faq") return null
  
            switch (component.type) {
              case "h2":
                return (
                  <Box key={component.id}>
                    <Heading as="h2" fontSize="36px">
                      {renderSlateContent(component.content.text)}
                    </Heading>
                  </Box>
                )
              case "h3":
                return (
                  <Box key={component.id}>
                    <Heading as="h3" fontSize="16px">
                      {renderSlateContent(component.content.text)}
                    </Heading>
                  </Box>
                )
              case "p":
                return (
                  <Box as="p" key={component.id} fontSize="16px">
                    {renderSlateContent(component.content.text)}
                  </Box>
                )
              case "imageVideo":
                return (
                  <Box key={component.id} my={4}>
                    {(component.content.file || component.content.imagePath) ? (
                      <Image
                        src={getImageUrl(component.content.file || component.content.imagePath)}
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
                )
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
                      href={component.content.buttonLink || "#"}
                      colorScheme="blue"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {component.content.buttonText || "Click Here"}
                    </Button>
                  </Box>
                )
              case "schema":
                return (
                  <Box key={component.id} p={4} bg="gray.50" borderRadius="md">
                    <Text fontFamily="monospace" fontSize="sm">
                      {component.content.schemaData || "Schema Content"}
                    </Text>
                  </Box>
                )
              default:
                return null
            }
          })}
  
          {/* FAQ Section with title */}
          {faqComponents.length > 0 && (
            <Box mt={8}>
              {/* Display FAQ section title */}
              <Heading as="h2" fontSize="36px" mb={4}>
                <Text fontSize="16px" mt={2} color="gray.500">
                  Frequently Asked Questions{faqTitle ? ` about ${faqTitle}` : ''}
                </Text>
              </Heading>
              <Accordion allowMultiple>
                {faqComponents.map((faq) => (
                  <AccordionItem key={faq.id}>
                    <h3>
                      <AccordionButton py={3}>
                        <Box flex="1" textAlign="left" fontWeight="600" fontSize="16px">
                          {faq.content.question || "Question"}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4} fontSize="14px" fontWeight="400">
                      {renderSlateContent(faq.content.answer)}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          )}
        </VStack>
  
        {/* Metadata Preview (for reference) */}
        <Box mt={12} p={4} bg="gray.50" borderRadius="md">
          <Heading as="h3" size="sm" mb={2}>
            Metadata Preview
          </Heading>
          <Text fontSize="sm">
            <strong>URL:</strong> {formData.urlWords || "example-blog-post"}
          </Text>
          <Text fontSize="sm">
            <strong>Meta Title:</strong> {formData.metaTitle || "Blog Post Title"}
          </Text>
          <Text fontSize="sm">
            <strong>Meta Description:</strong> {formData.metaDescription || "Blog post description for SEO purposes."}
          </Text>
        </Box>
      </Container>
    )
  }
  
  export default BlogPreview