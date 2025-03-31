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
import PageContentWrapper from "../../components/PageContentWrapper";

export default function ContactUs() {
  return (
    <PageContentWrapper>
      <Box mt="5%">
        {/* Hero Banner */}
        <Box
          bgImage="url('./assets/Contactus.png')"
          bgSize="cover"
          bgPosition="center"
          h={{ base: "250px", md: "410px" }} // Responsive height
          position="relative"
          borderRadius="24px"
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
          mt="1%"
          mb="2%"
          gap={6}
          position="relative"
          //   bg="red"
        >
          <Flex
            direction="column"
            mt="1%"
            // p={8}
            bg="white"
            width={{ base: "100%", lg: "60%" }} // Full width on smaller screens
            minH={{ md: "649px" }}
            borderRadius="24px"
            boxShadow="sm"
            //   bg="red"
            justifyContent="center"
          >
            {/* Contact Form */}
            <Box w="100%" maxW="800px" mx="auto" p={{ base: 4, md: 6 }}>
              <Heading
                fontSize={{ base: "24px", md: "36px" }}
                fontWeight="600"
                mb="5%"
              >
                Send Us a{" "}
                <Text as="span" color="#DB7B3A">
                  Message
                </Text>
              </Heading>

              <VStack spacing={4} align="stretch">
                {/* Name Fields */}
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={4}
                  width="100%"
                >
                  <Input
                    placeholder="First name"
                    bg="#E7E7E7"
                    border="none"
                    borderRadius="10px"
                    w="100%"
                    h="44px"
                  />
                  <Input
                    placeholder="Last name"
                    bg="#E7E7E7"
                    border="none"
                    borderRadius="10px"
                    w="100%"
                    h="44px"
                  />
                </SimpleGrid>

                {/* Contact Fields */}
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={4}
                  width="100%"
                >
                  <Input
                    placeholder="Email Address"
                    bg="#E7E7E7"
                    border="none"
                    borderRadius="10px"
                    w="100%"
                    h="44px"
                  />
                  <Input
                    placeholder="Phone Number"
                    bg="#E7E7E7"
                    border="none"
                    borderRadius="10px"
                    w="100%"
                    h="44px"
                  />
                </SimpleGrid>

                {/* Message Field */}
                <Textarea
                  placeholder="Write your message"
                  bg="#E7E7E7"
                  border="none"
                  w="100%"
                  h="210px"
                  resize="none"
                  borderRadius="10px"
                />

                {/* Submit Button - Always Centered */}
                <Flex
                  justify={{ base: "center", md: "center", lg: "left" }}
                  w="100%"
                >
                  <Button
                    bg="#3F77A5"
                    color="white"
                    width={{ base: "100px", md: "146px" }}
                    height={{ base: "40px", md: "50px" }}
                    borderRadius="20px"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight="700"
                  >
                    Submit
                  </Button>
                </Flex>
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
            // bg="red"
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
              transform="rotate(-160deg) translateX(100px) translateY(550px)"
            />
            <Image
              src="./assets/robowho2.png"
              alt="Robot hand"
              mt="30%"
              maxH="55%"
              maxW="100%"
              zIndex={1}
              // transform="rotate(180deg)"
            />
          </Box>
        </Flex>

        {/* Connection Cards */}
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 4 }} // 2 cards per row on mobile/tablet, 4 on laptop/desktop
          spacing={{ base: 4, md: 6, lg: 8 }}
          
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
              p={{ base: 4, md: 6, lg: 6 }} // Responsive padding
              borderRadius="24px"
              minH={{ base: "180px", md: "336px" }} // Adjusted height on mobile
              // Optionally remove minW and allow the grid to determine the card width
              position="relative"
            >
              <Heading
                fontSize={{ base: "20px", md: "36px" }} // Smaller heading size on mobile
                fontWeight="700"
                letterSpacing="-1.5%"
                mb={4}
              >
                {card.title}
              </Heading>
              <Box position="absolute" bottom="16px">
                <Text fontWeight="700" fontSize={{ base: "12px", md: "16px" }}>
                  {card.phone}
                </Text>
                <Text fontWeight="500" fontSize={{ base: "12px", md: "16px" }}>
                  {card.email}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </PageContentWrapper>
  );
}
