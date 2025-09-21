import React from "react";
// import PageContentWrapper from "../../components/PageContentWrapper";
// Divider,
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <>
      <Flex
        bg="white"
        direction={{ base: "column", md: "row" }}
        borderRadius="24px"
        p={{ base: "5", md: "20" }}
        py={{ base: "8" }}
        justifyContent="space-between"
        alignItems="center"
        gap={6} // 10 to 6
        position="relative"
      >
        {/* order={{ base: "2", md: "1" }} */}
        <Flex direction="column" flexGrow={10}>
          {/* main heading */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            textAlign={{ base: "left", lg: "left" }}
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight="600"
            lineHeight="1"
            gap={2}
            mb={{ base: "5", md: "10" }}
            as="h2"
            // bg="red"
          >
            <Text>Discover </Text>
            <Text color="#DB7B3A">Smarter Security</Text>
          </Flex>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="400"
            mb={{ base: "2%", md: "2%" }}
            w={{ base: "90%" }}
          >
            Elevate your safety with Ambicam&apos;s innovative cameras and cloud
            platform.
          </Text>

          {/* links section */}
          <Flex
            fontSize={{ base: "16px", md: "16px" }}
            direction={{ base: "column", md: "row" }}
            fontWeight="400"
            alignItems={{ base: "left", md: "center" }}
            // bg="red"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              mb={{ base: "5%", md: "0" }}
            >
              <Text color="black" fontWeight="600">
                Contact us: &nbsp;
              </Text>
              <Link href="mailto:contact@ambicam.in" isExternal>
                <Text
                  color="#4CC9F0"
                  sx={{
                    textDecoration: "underline"
                  }}
                >
                  contact@ambicam.in
                </Text>
              </Link>
            </Flex>
            <Box
              display={{ base: "none", md: "block" }}
              height="15px"
              width="2px"
              mx={4}
              bg="#8F8F8F"
              borderRadius="2px"
            />
            <Box mb={{ base: "5%", md: "0" }}>
              <Link href="https://www.ambicam.com" isExternal>
                <Text
                  color="#4CC9F0"
                  sx={{
                    textDecoration: "underline"
                  }}
                >
                  www.ambicam.in
                </Text>
              </Link>
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              height="15px"
              width="2px"
              mx={4}
              bg="#8F8F8F"
              borderRadius="2px"
            />
            <Flex direction="row">
              <Box mr="2%">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z"
                    fill="#4CC9F0"
                  />
                </svg>
              </Box>
              <Text
                fontSize={{ base: "14px", md: "14px" }}
                whiteSpace="nowrap"
                fontWeight="500"
              >
                (+91) 968 777 0000
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* order={1} flexGrow={1}*/}
        <Flex>
          <Image
            src="../assets/ambicam_logo.png"
            height={{ base: "30px", md: "45px" }}
            width="auto"
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Discover;
