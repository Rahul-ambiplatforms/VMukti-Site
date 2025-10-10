import React from "react";
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";

const Thankyoucareer = () => {
  return (
    <Flex
      as="main"
      justify="center"
      align="center"
      h="100vh"
      p={5} 
    >
      <Box
        bg="white"
        px={{ base: 8, md: 16 }} 
        borderRadius="24px" 
        textAlign="center"
        maxW="600px"
        maxH="550px"
        w="100%"
        h="100%"
        py="5%"
        justifyContent="center"
        alignContent="center"
      >
        <Heading as="h1" fontSize="64px" fontWeight="600" mb={6}>
          <Text as="span" color="#3F77A5">
            Thank{" "}
          </Text>
          <Text as="span" color="#DB7B3A">
            You!
          </Text>
        </Heading>

        <Text fontSize="24px" lineHeight="30px" fontWeight="500" mb={5}>
          Thank you for taking the time to apply and for your interest in
          joining our team at VMukti.
        </Text>
        <Text fontSize="16px" lineHeight="18px" fontWeight="500" mb={8}>
          We've received your application and our recruitment team will review
          it carefully. If your qualifications match what we're looking for,
          we'll be in touch to discuss the next steps.
        </Text>

        {/* Chakra's Button component, styled to match the image */}
        <Button
          as={Link} // Render the button as a link
          href="/"
          bg="#3F77A5"
          color="white"
          borderRadius="full" // Creates a pill-shaped button
          px={8} // Horizontal padding
          py={6} // Vertical padding
          fontSize="md"
          _hover={{
            // Styles for the hover state
            bg: "#35668e",
            textDecoration: "none",
          }}
          _active={{
            // Styles for the active/click state
            bg: "#2c5576",
          }}
        >
          Return to homepage
        </Button>
      </Box>
    </Flex>
  );
};

export default Thankyoucareer;
