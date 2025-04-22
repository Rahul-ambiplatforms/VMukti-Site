import React, { useState } from "react";
import {
  Box,
  Container,
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
  const { url_name } = useParams();
  const [selectedPost] = useState(
    blogPosts.find((post) => post.url_name === url_name)
  );

  // For responsive design
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    //   {/* Featured post with main image */}\

    <Box>
      <Box>
        <Box flex="1" p={{ base: 6, md: 10 }} color="black">
          <Heading size={headingSize} lineHeight="1.3">
            <Text as="span">
              {selectedPost.heading}
            </Text>
          </Heading>
        </Box>
        <Flex direction={flexDirection}>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            px="2%"
          >
            <Image
              // src={selectedPost.mainImage}
              src={`${process.env.PUBLIC_URL}/${selectedPost.mainImage}`}
              alt={selectedPost.heading}
              //   maxH="400px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="white" mx="2%" mt="2%" borderRadius="24px" pt="2%" px="3%">
        <Box p={4} mt={4}>
          <Heading as="h2" fontSize={{base:"24px",md:"36px"}} fontWeight="600" w="60%">
            {selectedPost.contents.title}
          </Heading>
          <Text color="#696969" fontSize={{base:"14px",md:"16px"}} mt={3} lineHeight="100%" w="86%">
            {selectedPost.contents.description}
          </Text>
        </Box>

        {/* Comparison section - dynamically generated from contents.heading array */}
        <VStack spacing={6} align="stretch" mt={2} px={4}>
          {selectedPost.contents.heading.map((item, index) => (
            <Box key={index}>
              <Heading as="h2" size="lg" color="gray.800">{`${index + 1}. ${
                item.title
              }`}</Heading>
              <Text mt={2} color="gray.700" w="86%">
                {item.description}
              </Text>
            </Box>
          ))}
        </VStack>

        {/* Additional image - using the miniImage from contents */}
        <Box mt={8} borderRadius="24px">
          <Image
            // src={selectedPost.contents.miniImage}
            src={`${process.env.PUBLIC_URL}/${selectedPost.contents.miniImage}`}
            alt="VMukti Metaverse"
            w="60%"
            h="100%"
            // maxH="400px"
            objectFit="contain"
          />
        </Box>

        {/* Conclusion - dynamically fetched from contents object */}
        <Box mt={8} px={4}>
          <Heading as="h2" size="lg" color="#4098e5">
            Conclusion
          </Heading>
          <Text mt={4} pb="5%" color="gray.700" w="86%">
            {selectedPost.contents.conclude}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogsOverviewDash;
