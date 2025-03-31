import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";
import ImagePop from "../../components/Animation/Image/ImagePop";
import { transform } from "framer-motion";


export default function ContactUs() {
  return (
    <Box>
      {/* Hero Banner */}
      <Box
        bgImage="url('./assets/Contactus.png')"
        bgSize="cover"
        bgPosition="center"
        h={{ base: "250px", md: "410px" }} // Responsive height
        position="relative"
        borderRadius="24px"
        m={4}
        overflow="hidden"
        zIndex="1"
      >
        <Box
          position="absolute"
          top="50%"
          left={{ base: "20px", md: "50px" }} // Adjust left position for smaller screens
          transform="translateY(-50%)"
          color="white" 
        >
          <ImagePop>
            <HeadingAnimation>
              <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
                {" "}
                {/* Responsive font size */}
                Contact Us
              </Heading>
            </HeadingAnimation>
          </ImagePop>
        </Box>
      </Box>

      {/* Contact Form and Info Section */}
      <Flex
        direction={{ base: "column", lg: "row" }} // Stack on smaller screens
        mx={4}
        mb={8}
        gap={6}
        // position="relative"
      >
        <Flex
          direction="column"
          m="1%"
          p={8}
          bg="white"
          width={{ base: "100%", lg: "60%" }} // Full width on smaller screens
          // minH={"649px"}
          borderRadius="24px"
          boxShadow="sm"
          gap={6}
        //   bg="red"   
        >
          {/* Contact Form */}
          <Box>
            <Heading fontSize="36px" fontWeight="600" mb="7%">
              Send Us a{" "}
              <Text as="span" color="#DB7B3A">
                Message
              </Text>
            </Heading>

            <VStack spacing={4} align="stretch">
              <HStack spacing={4} width="100%">
                <Input
                  placeholder="First name"
                  bg="#E7E7E7"
                  border="none"
                  flex="1"
                  borderRadius="10px"
                />
                <Input
                  placeholder="Last name"
                  bg="#E7E7E7"
                  border="none"
                  flex="1"
                  borderRadius="10px"
                />
              </HStack>

              <HStack spacing={4} width="100%">
                <Input
                  placeholder="Email Address"
                  bg="#E7E7E7"
                  border="none"
                  flex="1"
                  borderRadius="10px"
                />
                <Input
                  placeholder="Phone Number"
                  bg="#E7E7E7"
                  border="none"
                  flex="1"
                  borderRadius="10px"   
                />
              </HStack>

              <Textarea
                placeholder="Write your message"
                bg="#E7E7E7"
                border="none"
                h="150px"
                resize="none"
                borderRadius="10px"
              />

              <Button bg="#3F77A5" color="white" width="146px" height="50px" mt="1%" borderRadius="20px" fontSize="16px" fontWeight="700">
                Submit
              </Button>
            </VStack>
          </Box>
        </Flex>

        {/* Contact Image */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          position="relative"
          maxW={{ base: "100%", lg: "80%" }} // Adjust width for smaller screens
        //   bg="red"
        overflow="hidden"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage="url('./assets/VMukti Brochure O2 4.png')"
            bgSize="contain"
            bgRepeat="no-repeat"
            w="150%"
            h="150%"
            zIndex={0}
            transform="rotate(170deg) translateX(20px) translateY(500px)"
          />
          <Image
            src="./assets/robowho2.png"
            alt="Robot hand"
            mt="10%"
            maxH="75%"
            maxW="100%"
            zIndex={1}
            // transform="rotate(180deg)"
          />
        </Box>
      </Flex>

      {/* Connection Cards */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }} // Adjust columns for smaller screens
        spacing={4}
        mx={4}
        mb={8}
      >
        {[
          {
            title: "Connect For Sales",
            phone: "(+91) 951 022 1902",
            email: "sales@vmukti.com",
            bg: "white",
            color: "black",
          },
          {
            title: "Connect For Partnership",
            phone: "(+91) 951 022 1902",
            email: "contact@vmukti.com",
            bg: "#3F77A5",
            color: "white",
          },
          {
            title: "Connect For Support",
            phone: "(+91) 951 022 2033",
            email: "support@vmukti.com",
            bg: "white",
            color: "black",
          },
          {
            title: "Connect For HR",
            phone: "(+91) 951 022 2755",
            email: "hr@vmukti.com",
            bg: "#BECEDC",
            color: "black",
          },
        ].map((card, index) => (
          <Box
            key={index}
            bg={card.bg}
            color={card.color}
            p={6}
            borderRadius="24px"
            minH="336px"
            position="relative"
          >
            <Heading size="md" mb={4}>
              {card.title}
            </Heading>
            <Box position="absolute" bottom="16px">
              <Text fontWeight="bold">{card.phone}</Text>
              <Text>{card.email}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
