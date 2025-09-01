import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
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
        mt="45px"
        h="692px"
        w="1446px"
        position="relative"
      >
        {/* Left side: Illustration */}
        <Box 
          position="absolute"
          left="0"
          top="124px"
          zIndex="1"
          w="852px"
          h="568px"
        >
          <Image
            src="/assets/thankyou.png"
            alt="Illustration of a robot catching a flying letter with a net"
            w="852px"
            h="568px"
            objectFit="contain"
          />
        </Box>

        {/* Right side: Content */}
        <Heading 
          as="h1" 
          fontSize="64px" 
          position="absolute"
          right="232px"
          left="881px"
          top="163px"
          textAlign="center"
          fontWeight="600"
          w="333px"
          h="81px"
        >
          <Text as="span" color="#3F77A5">
            Thank{" "}
          </Text>
          <Text as="span" color="#DB7B3A">
            You!
          </Text>
        </Heading>

        <Text
          fontSize="24px"
          fontWeight="500"
          color="#000"
          position="absolute"
          right="185px"
          w="427px"
          left="834px"
          lineHeight="30px"
          h="60px"
          top="276px"
          textAlign="center"
        >
          We've received your request - our team will be in touch soon.
        </Text>

        <Text 
          fontSize="16px" 
          color="#000" 
          position="absolute"
          height="80px"
          width="544px"
          left="775px"
          bottom="244px"
          right="127px"
          lineHeight="20px"
          top="368px"
          textAlign="center"
        >
          Your request is currently being reviewed by our team. One of our
          experts will get back to you within 1-2 business days to explore
          how we can support your goals with AI-driven visual intelligence.
        </Text>

        <Button
          bg="#3F77A5"
          color="white"
          size="lg"
          py="12px"
          px="32px"
          borderRadius="24px"
          _hover={{ bg: "#2c5a7d" }}
          onClick={handleReturn}
          position="absolute"
          right="287px"
          top="480px"
          width="223px"
          bottom="164px"
          left="936px"
          height="48px"
        >
          Return to homepage
        </Button>
      </Box>
    </PageContentWrapper>
  );
};

export default Thankyou;