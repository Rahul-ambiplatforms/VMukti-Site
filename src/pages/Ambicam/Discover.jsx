import React from 'react'
import PageContentWrapper from '../../components/PageContentWrapper'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Discover = () => {
  return (
    <>
      <Flex bg="white" direction={{ base: "column", md: "row" }} borderRadius="24px" p={10} justifyContent="space-between" alignItems="center" gap={10} position="relative">
        <Flex direction="column" order={{base:"2",md:"1"}} flexGrow={10}>
          {/* main heading */}
          <Flex direction={{base:"column",lg:"row"}} textAlign={{base:"center",lg:"left"}} fontSize={{ base: "36px", md: "48px" }} fontWeight="600" gap={2} mb={4}>
            <Text>Discover </Text>
            <Text color="#DB7B3A">Smarter Security</Text>
          </Flex>
          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="400">Elevate your safety with Ambicam&apos;s innovative cameras and cloud platform.</Text>

          {/* links section */}
          <Flex fontSize={{ base: "14px", md: "16px" }} direction={{base:"column",md:"row"}} alignItems="center">
            <Flex direction={{ base: "column",md:"row" }}>
              <Text>Contact us:</Text>
              <Link><Text color="#4CC9F0">contact@ambicam.in</Text></Link></Flex>
            <Box height="15px" width="2px" mx={4} bg="#8F8F8F" borderRadius="2px" />
            <Link><Text color="#4CC9F0">www.ambicam.in</Text></Link>
            <Box height="15px" width="2px" mx={4} bg="#8F8F8F" borderRadius="2px" />
            <Flex direction={{ base: "column",md:"row" }}>
              <Box>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z" fill="#4CC9F0" />
                </svg>
              </Box>
              <Text fontSize={{ base: "14px", md: "14px" }} whiteSpace="nowrap" fontWeight="500">(+91) 968 777 9999</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexGrow={1} order={1}>
          <Image src="../assets/ambicam_logo.png" height="45px" width="auto" objectFit="contain" />
        </Flex>
      </Flex>
    </>
  )
}

export default Discover
