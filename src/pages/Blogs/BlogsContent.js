import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  useColorModeValue,
  useToast,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getBlogs } from "./blog"; // Adjust the path as per your project

export default function BlogsContent() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const toast = useToast();
  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await getBlogs(currentPage, blogsPerPage);
      if (response.status === "success") {
        setBlogs(response.data);
        setTotalPages(response.pagination.total);
      }
    } catch (error) {
      toast({
        title: "Error fetching blogs",
        description: error.message || "Unknown error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  return (
    <Box m="1%">
      {/* Header */}
      <Flex justify="center" align="center" mt={{ base: "5%", md: "0" }} mb={6}>
        <Heading
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          color="#000000"
        >
          Recent blog{" "}
          <Box as="span" color="#DB7B3A">
            posts
          </Box>
        </Heading>
      </Flex>

      {/* Loader */}
      {isLoading ? (
        <Flex justify="center" align="center" minH="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          mb="14%"
        >
          {blogs.map((post, index) => {
            return (
              <GridItem
                key={index}
                bg="white"
                borderRadius="24px"
                overflow="hidden"
                borderColor={borderColor}
                borderWidth="1px"
                display="flex"
                flexDirection="column"
              >
                <Image
                  src={
                    post.content.mainImage? `${IMAGE_BASE_URL}/${post.content.mainImage}` : post.content.image
                  }
                  alt={post.content?.imageText || "Blog image"}
                  w="full"
                  h="auto"
                  borderRadius="24px"
                  objectFit="cover"
                />

                <Box mx="3%" mt="5%" mb="2%">
                  <Heading
                    fontSize="16px"
                    fontWeight="700"
                    w="60%"
                    mb={2}
                    noOfLines={2}
                  >
                    {post.content?.title || "Untitled Blog"}
                  </Heading>

                  <Text
                    fontSize="14px"
                    color="#696969"
                    fontWeight="500"
                    w="80%"
                    mb={3}
                    noOfLines={3}
                  >
                    {post.content?.brief?.[0]?.children?.[0]?.text ||
                      "No description available."}
                  </Text>
                </Box>

                <Box flex="1" />

                <Flex justifyContent="space-between" p="5">
                  <Box display="flex" gap="2" alignItems="center">
                    <Text fontSize="12px" fontWeight="500" color="#696969">
                      {new Date(
                        post.createdAt?.$date || post.createdAt
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Text>
                    <Text fontSize="12px" color="#3F77A5">
                      by VMukti
                    </Text>
                  </Box>
                  <Box>
                    <Link to={`/whoweare/blogs/${post.metadata.urlWords}`}>
                      <Flex align="center" gap={4}>
                        <Text fontSize="14px" fontWeight={500} color="#000000">
                          Learn More
                        </Text>
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.9612 12.9601C21.547 12.3743 21.547 11.4245 20.9612 10.8388L11.4153 1.29281C10.8295 0.707026 9.87974 0.707026 9.29395 1.29281C8.70816 1.8786 8.70816 2.82835 9.29395 3.41413L17.7792 11.8994L9.29395 20.3847C8.70816 20.9705 8.70816 21.9202 9.29395 22.506C9.87974 23.0918 10.8295 23.0918 11.4153 22.506L20.9612 12.9601ZM0.101562 13.3994L19.9006 13.3994V10.3994L0.101562 10.3994V13.3994Z"
                            fill="black"
                          />
                        </svg>
                      </Flex>
                    </Link>
                  </Box>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      )}
      {/* Pagination Controls */}
      <Flex justify="center" align="center" mt={8} gap={2}>
        {/* Previous Arrow */}
        <Button
          size="sm"
          variant="outline"
          borderColor="#3F77A5"
          bg="white"
          color="#3F77A5"
          _hover={{ bg: "#e6f0fa" }}
          isDisabled={totalPages === 1}
          onClick={() => {
            setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
          }}
          minW={8}
          px={0}
        >
          <Box as="span" fontSize="20px">
            &#60;
          </Box>
        </Button>

        {/* Page Numbers with Ellipsis */}
        {(() => {
          const pages = [];
          if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
              pages.push(i);
            }
          } else {
            if (currentPage <= 3) {
              pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
              pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
              pages.push(
                1,
                "...",
                currentPage - 1,
                currentPage,
                currentPage + 1,
                "...",
                totalPages
              );
            }
          }
          return pages.map((page, idx) => {
            if (page === "...") {
              return (
                <Button
                  key={`ellipsis-${idx}`}
                  size="sm"
                  variant="outline"
                  borderColor="#3F77A5"
                  bg="white"
                  color="#3F77A5"
                  isDisabled
                  minW={8}
                  px={0}
                >
                  ...
                </Button>
              );
            }
            const isActive = page === currentPage;
            return (
              <Button
                key={page}
                size="sm"
                variant="outline"
                borderColor="#3F77A5"
                bg={isActive ? "#3F77A5" : "white"}
                color={isActive ? "white" : "#3F77A5"}
                fontWeight={isActive ? "bold" : "normal"}
                minW={8}
                px={0}
                _hover={isActive ? {} : { bg: "#e6f0fa" }}
                onClick={() => setCurrentPage(page)}
                isDisabled={totalPages === 1}
              >
                {page}
              </Button>
            );
          });
        })()}

        {/* Next Arrow */}
        <Button
          size="sm"
          variant="outline"
          borderColor="#3F77A5"
          bg="white"
          color="#3F77A5"
          _hover={{ bg: "#e6f0fa" }}
          isDisabled={totalPages === 1}
          onClick={() => {
            setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
          }}
          minW={8}
          px={0}
        >
          <Box as="span" fontSize="20px">
            &#62;
          </Box>
        </Button>
      </Flex>
    </Box>
  );
}
