import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";

const handleReturn = () => {
  window.location.href = "/";
};

const Thankyou = () => {
  return (
    <PageContentWrapper>
      <Box
        bg="white"
        borderRadius="24px"
        mt="4%"
        h="692px"
        mx="auto"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          gap={{ base: 6, lg: 12 }}
        >
          {/* Left side: Illustration */}
          <Box w={{ base: "100%", md: "60%" }} mt="8%">
            <Image
              src="/assets/thankyou.png"
              alt="Illustration of a robot catching a flying letter with a net"
            />
          </Box>

          {/* Right side: Content */}
          <VStack
            ml={{ lg: "-20%" }} // The VStack is now shifted to the left on large screens
            spacing={4}
            align={{ base: "center", lg: "center" }}
            textAlign={{ base: "center", lg: "center" }}
          >
            <Heading as="h1" fontSize={{ base: "48px", md: "64px" }}>
              <Text as="span" color="#3F77A5">
                Thank{" "}
              </Text>
              <Text as="span" color="#DB7B3A">
                You!
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "24px", md: "24px" }}
              fontWeight="medium"
              color="#000"
              w="70%"
            >
              We've received your request - our team will be in touch soon.
            </Text>

            <Text fontSize="16px" color="#000" maxW="420px">
              Your request is currently being reviewed by our team. One of our
              experts will get back to you within 1-2 business days to explore
              how we can support your goals with AI-driven visual intelligence.
            </Text>

            <Button
              bg="#3F77A5"
              color="white"
              size="lg"
              px={8}
              mt={4}
              borderRadius="24px"
              _hover={{ bg: "#2c5a7d" }}
              onClick={handleReturn}
            >
              Return to homepage
            </Button>
          </VStack>
        </Flex>
      </Box>
    </PageContentWrapper>
  );
};

export default Thankyou;