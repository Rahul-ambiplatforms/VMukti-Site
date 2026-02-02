import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const CoreSecurity = () => {
  const challenges = [
    "Increasing security threats & liability risks",
    "Limited visibility across multiple locations and remote sites",
    "Slow incident response due to manual video monitoring",
    "Escalating storage, compliance, and data retention requirements",
    "Need for NDAA-compliant surveillance hardware, NDAA compliant cloud VMS, and cloud video monitoring",
    "Difficulty managing hybrid infrastructure (on-prem + cloud)",
    "Limited analytics in traditional video surveillance systems",
    "High operational cost from outdated CCTV video monitoring setups",
    "Need for enterprise video surveillance system that scales",
    "Lack of centralized control for enterprise-scale deployments",
    "Demand for video monitoring solutions with automation"
  ];

  return (
    <Box py={{ base: 8, md: 12 }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        borderRadius="24px"
        overflow="hidden"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        minH={{ lg: "600px" }}
      >
        {/* Left Section - Blue Background */}
        <Box
          flex={{ base: "1", lg: "0 0 45%" }}
          bg="linear-gradient(135deg, #4A90B8 0%, #3F77A5 100%)"
          color="white"
          p={{ base: 6, md: 8, lg: 10 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <VStack align="flex-start" spacing={6}>
            <Heading
              as="h2"
              fontSize={{ base: "28px", md: "36px", lg: "42px" }}
              lineHeight={{ base: "34px", md: "44px", lg: "52px" }}
              fontWeight="600"
              textAlign="left"
            >
              Core Security Challenges:{" "}
              <Text as="span" display="block" mt={2}>
                Why Traditional Video Surveillance Systems Fail
              </Text>
            </Heading>

            {/* Arrow Icon */}
            <Box>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.0367 39C36.6935 38.9989 38.0357 37.6548 38.0346 35.9979L38.0159 8.99793C38.0148 7.34108 36.6707 5.99886 35.0138 6.00001C33.357 6.00115 32.0148 7.34523 32.0159 9.00208L32.0325 33.0021L8.03251 33.0187C6.37566 33.0198 5.03344 34.3639 5.03459 36.0207C5.03573 37.6776 6.3798 39.0198 8.03666 39.0187L35.0367 39ZM10 10L7.88015 12.1228L32.9147 37.1228L35.0346 35L37.1544 32.8772L12.1199 7.87721L10 10Z"
                  fill="white"
                />
              </svg>
            </Box>

            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "20px", md: "24px" }}
              fontWeight="400"
              opacity={0.9}
            >
              Modern enterprises across the USA are rapidly adopting AI video surveillance, 
              AI video surveillance solutions, and cloud-based video surveillance to keep up 
              with rising security and compliance pressures. Key challenges include:
            </Text>
          </VStack>

          <Button
            as="a"
            href="/contact-us"
            bg="white"
            color="#3F77A5"
            size="lg"
            borderRadius="full"
            px={8}
            py={3}
            fontSize="16px"
            fontWeight="600"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
            }}
            transition="all 0.3s ease"
            alignSelf="flex-start"
            mt={6}
          >
            Let's talk
            <Box ml={2}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1C15 0.447715 14.5523 0 14 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H13V14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14V1ZM1.70711 14.7071L2.41421 15.4142L14.4142 3.41421L13.7071 2.70711L12.2929 1.29289L0.292893 13.2929L1.70711 14.7071Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>
          </Button>
        </Box>

        {/* Right Section - White Background with Challenges List */}
        <Box
          flex="1"
          bg="white"
          p={{ base: 6, md: 8, lg: 10 }}
          display="flex"
          alignItems="center"
        >
          <VStack spacing={4} align="stretch" w="100%">
            {challenges.map((challenge, index) => (
              <HStack
                key={index}
                spacing={4}
                align="flex-start"
                p={3}
                borderRadius="8px"
                transition="all 0.2s ease"
              >
                <Image
                  src="/assets/tickmark.svg"
                  alt="Check mark"
                  w="24px"
                  h="24px"
                  flexShrink={0}
                  mt={1}
                />
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight={{ base: "20px", md: "24px" }}
                  color="#2D3748"
                  fontWeight="400"
                >
                  {challenge}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CoreSecurity;