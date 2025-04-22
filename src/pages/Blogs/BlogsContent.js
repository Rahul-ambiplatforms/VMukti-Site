import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  Button,
  HStack,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import blogPosts from './BlogsPosts';
import { Link } from "react-router-dom";
// import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

export default function BlogsContent() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useBreakpointValue({ base: 2, md: 5 }); // 2 for mobile, 5 for desktop
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const renderPageNumbers = () => {
    const pages = []
    if (totalPages <= 5) {
      // Show all pages if total pages are 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Button
            key={i}
            size="sm"
            onClick={() => handlePageChange(i)}
            bg={currentPage === i ? 'blue.500' : 'gray.200'}
            color={currentPage === i ? 'white' : 'black'}
          >
            {i}
          </Button>
        )
      }
    } else {
      // Show first two pages, ellipsis, and last two pages
      pages.push(
        <Button
          key={1}
          size="sm"
          onClick={() => handlePageChange(1)}
          bg={currentPage === 1 ? 'blue.500' : 'gray.200'}
          color={currentPage === 1 ? 'white' : 'black'}
        >
          1
        </Button>
      )
      pages.push(
        <Button
          key={2}
          size="sm"
          onClick={() => handlePageChange(2)}
          bg={currentPage === 2 ? 'blue.500' : 'gray.200'}
          color={currentPage === 2 ? 'white' : 'black'}
        >
          2
        </Button>
      )
      pages.push(
        <Text key="ellipsis" fontSize="sm">
          ...
        </Text>
      )
      pages.push(
        <Button
          key={totalPages - 1}
          size="sm"
          onClick={() => handlePageChange(totalPages - 1)}
          bg={currentPage === totalPages - 1 ? 'blue.500' : 'gray.200'}
          color={currentPage === totalPages - 1 ? 'white' : 'black'}
        >
          {totalPages - 1}
        </Button>
      )
      pages.push(
        <Button
          key={totalPages}
          size="sm"
          onClick={() => handlePageChange(totalPages)}
          bg={currentPage === totalPages ? 'blue.500' : 'gray.200'}
          color={currentPage === totalPages ? 'white' : 'black'}
        >
          {totalPages}
        </Button>
      )
    }
    return pages
  }

  return (
    <Box m="1%">
      {/* Header */}
      <Flex justify="center" align="center" mt={{ base: '5%', md: '0' }} mb={6}>
        <Heading
          fontSize={{ base: '24px', md: '36px' }}
          fontWeight="600"
          color="#000000"
        >
          Recent blog{' '}
          <Box as="span" color="#DB7B3A" display="inline">
            posts
          </Box>
        </Heading>
      </Flex>

      {/* Blog Grid */}
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={6}
      >
        {paginatedPosts.map((post) => (
          <GridItem
            key={post.id}
            bg="white"
            borderRadius="24px"
            overflow="hidden"
            borderColor={borderColor}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/${post.thumbnail}`}
              alt={post.heading}
              borderRadius="24px"
              w="full"
              h="400px" // if needs to change the static height please contact me
              objectFit="cover"
            />
            <Box mx="3%" mt="5%" mb="2%">
              <Heading
                as="h3"
                fontSize="16px"
                fontWeight="700"
                w={{base:"100%",md:"60%"}}
                // -----------------------------------------
                mb={2}
                noOfLines={2}
              >
                {post.heading}
              </Heading>
              <Text
                fontSize="14px"
                color="#696969"
                fontWeight="500"
                mb={3}
                noOfLines={3}
                w="80%"
              >
                {post.description}
              </Text>
              <Flex align="center" justifyContent="space-between">
                <Flex gap="2">
                  <Box>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3786_465)">
                        <path
                          d="M8.50196 3.33259e-07C6.82085 3.40576e-07 5.17749 0.498497 3.77969 1.43245C2.38189 2.36641 1.29242 3.69388 0.649057 5.24701C0.00568854 6.80013 -0.162686 8.50916 0.165224 10.158C0.493134 11.8068 1.3026 13.3213 2.49127 14.5101C3.67994 15.6989 5.19442 16.5085 6.8432 16.8366C8.49199 17.1646 10.201 16.9964 11.7542 16.3532C13.3074 15.71 14.635 14.6206 15.5691 13.2229C16.5032 11.8252 17.0018 10.1819 17.002 8.50079C17.0024 7.3844 16.7828 6.27887 16.3558 5.24737C15.9288 4.21587 15.3027 3.27862 14.5133 2.48918C13.724 1.69973 12.7868 1.07357 11.7553 0.646463C10.7239 0.21936 9.61835 -0.000312313 8.50196 3.33259e-07ZM8.50196 15.3005C7.15695 15.3005 5.84215 14.9016 4.72381 14.1544C3.60548 13.4071 2.73385 12.3451 2.21914 11.1024C1.70442 9.85981 1.56975 8.49246 1.83215 7.17329C2.09455 5.85413 2.74223 4.6424 3.69329 3.69134C4.64436 2.74027 5.85609 2.09259 7.17525 1.83019C8.49441 1.5678 9.86176 1.70247 11.1044 2.21718C12.347 2.73189 13.4091 3.60353 14.1563 4.72186C14.9036 5.84019 15.3024 7.15499 15.3024 8.5C15.2972 10.302 14.579 12.0287 13.3048 13.3029C12.0306 14.5771 10.3039 15.2952 8.50196 15.3005Z"
                          fill="#3F77A5"
                        />
                        <path
                          d="M8.92722 4.25098H7.65039V9.35114L12.1129 12.0285L12.7474 10.9658L8.92246 8.71352L8.92722 4.25098Z"
                          fill="#3F77A5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3786_465">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                  <Text fontSize="12px" color="#696969">
                    {post.date}
                  </Text>
                  <Text fontSize="12px" color="#3F77A5">
                    by {post.author}
                  </Text>
                </Flex>
                <Link to={`/whoweare/blogs/${post.url_name}`}>
                <Flex gap="4" align="center" justifyContent="flex-end">
                  <Text
                    fontSize={{ base: '14px', md: '14px' }}
                    fontWeight={400}
                  >
                    Know more
                  </Text>
                  <Box>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9602 12.9601C21.546 12.3743 21.546 11.4245 20.9602 10.8388L11.4143 1.29281C10.8285 0.707026 9.87876 0.707026 9.29297 1.29281C8.70719 1.8786 8.70719 2.82835 9.29297 3.41413L17.7783 11.8994L9.29297 20.3847C8.70719 20.9705 8.70719 21.9202 9.29297 22.506C9.87876 23.0918 10.8285 23.0918 11.4143 22.506L20.9602 12.9601ZM0.100586 13.3994L19.8996 13.3994V10.3994L0.100586 10.3994V13.3994Z"
                        fill="black"
                      />
                    </svg>
                  </Box>
                </Flex>
                </Link>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Pagination */}
      <Flex justify="center" align="center" mt={6}>
        <HStack spacing={2}>
          <IconButton
            icon={<Text>{'<'}</Text>}
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
            aria-label="Previous page"
          />
          {renderPageNumbers()}
          <IconButton
            icon={<Text>{'>'}</Text>}
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
            aria-label="Next page"
          />
        </HStack>
      </Flex>
    </Box>
  )
}
