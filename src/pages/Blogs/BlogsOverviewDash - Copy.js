import React, { useState } from "react";
import {
  Box,
  // Container,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import blogPosts from "./BlogsPosts"; // Update with the correct path
import { useParams } from "react-router-dom";

const BlogsOverviewDash = () => {
  // const { id } = useParams();
  // const [selectedPost] = useState(blogPosts[id]);
  const { url_name } = useParams();
  const [selectedPost] = useState(
    blogPosts.find((post) => post.url_name === url_name)
  );

  // For responsive design
  // const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const headingSize = useBreakpointValue({ base: "24px", md: "48px" });

  return (
    //   {/* Featured post with main image */}\

    <Box mx={{ base: "2%", md: "0" }}>
      <Flex direction="column" mb={{ base: "5%", md: "2%" }}>
        <Box flex="1" p={{ base: 2, md: 10 }} mb="2%" color="black" w={{base:"100%",md:"65%"}}>
          <Heading fontSize={headingSize} lineHeight="1.3">
            <Text as="span">{selectedPost.heading}</Text>
          </Heading>
        </Box>
        <Box
          display={{base:"none",md:"block"}}
          position="absolute"
          // top="-100px"
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
        {/* <Flex direction={flexDirection}> */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          px={{ base: "2%", md: "2%" }}
          // borderRadius="24px"
          // bg="red"
        >
          <Image
            // src={selectedPost.mainImage}
            src={`${process.env.PUBLIC_URL}/assets/${selectedPost.mainImage}`}
            // src={selectedPost.mainImage.startsWith("/") ? selectedPost.mainImage : `/${selectedPost.mainImage}`}
            alt={selectedPost.heading}
            objectFit={{ base: "contain", md: "cover" }}
            borderRadius={{ base: "20px", md: "24px" }}
            //   maxH="400px"
          />
        </Box>
        {/* </Flex> */}
      </Flex>

      {/* Blogs Content Starts from here */}
      <Box bg="white" mx="2%" mt="2%" borderRadius="24px" pt="2%" px="3%">
        <Box p={4} mt={4}>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "36px" }}
            fontWeight="600"
            w={{ base: "100%", md: "60%" }}
          >
            {selectedPost.contents.title}
          </Heading>
          <Text
            color="#696969"
            fontSize={{ base: "14px", md: "16px" }}
            mt={3}
            lineHeight="100%"
            w={{ base: "90%", md: "86%" }}
            align="justify"
          >
            {selectedPost.contents.description}
          </Text>
        </Box>

        {/* Comparison section - dynamically generated from contents.heading array */}
        <VStack spacing={6} align="stretch" mt={2} px={4}>
          {selectedPost.contents.heading.map((item, index) => (
            <Box key={index}>
              <Heading
                as="h2"
                fontWeight="600"
                fontSize={{ base: "24px", md: "36px" }}
                color="black"
              >
                {`${index + 1}. ${item.title}`}
              </Heading>
              <Text
                mt={{ base: "2", md: "4" }}
                fontSize={{ base: "14px", md: "16px" }}
                color="black"
                fontWeight="400"
                w={{ base: "100%", md: "86%" }}
                align="justify"
              >
                {item.description}
              </Text>
            </Box>
          ))}
        </VStack>

        {/* Additional image - using the miniImage from contents */}
        <Box mt={8} borderRadius="24px">
          <Image
            // src={selectedPost.contents.miniImage}
            src={`${process.env.PUBLIC_URL}/assets/${selectedPost.contents.miniImage}`}
            alt="VMukti Metaverse"
            w={{ base: "100%", md: "60%" }}
            h="100%"
            objectFit="contain"
          />
        </Box>

        {/* Conclusion - dynamically fetched from contents object */}
        <Box mt={8} px={4}>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "36px" }}
            color="#3F77A5"
          >
            Conclusion
          </Heading>
          <Text
            mt={{ base: "2", md: "4" }}
            pb={{ base: "10%", md: "5%" }}
            fontSize={{ base: "14px", md: "16px" }}
            color="black"
            w={{ base: "100%", md: "86%" }}
            align="justify"
          >
            {selectedPost.contents.conclude}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogsOverviewDash;
