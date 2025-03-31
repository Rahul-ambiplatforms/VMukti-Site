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
            >
                <Box
                    position="absolute"
                    top="50%"
                    left={{ base: "20px", md: "50px" }} // Adjust left position for smaller screens
                    transform="translateY(-50%)"
                    color="white"
                >
                    <Heading as="h1" size={{ base: "xl", md: "2xl" }}> {/* Responsive font size */}
                        Contact Us
                    </Heading>
                </Box>
            </Box>

            {/* Contact Form and Info Section */}
            <Flex
                direction={{ base: "column", lg: "row" }} // Stack on smaller screens
                mx={4}
                mb={8}
                gap={6}
            >
                <Flex
                    direction="column"
                    p={8}
                    bg="white"
                    width={{ base: "100%", lg: "50%" }} // Full width on smaller screens
                    // minH={"649px"}
                    borderRadius="24px"
                    // boxShadow="sm"
                    gap={6}
                >
                    {/* Contact Form */}
                    <Box>
                        <Heading size="lg" mb={6}>
                            Send Us a{" "}
                            <Text as="span" color="orange.500">
                                Message
                            </Text>
                        </Heading>

                        <VStack spacing={4} align="stretch">
                            <HStack spacing={4} width="100%">
                                <Input placeholder="First name" bg="gray.100" border="none" flex="1" />
                                <Input placeholder="Last name" bg="gray.100" border="none" flex="1" />
                            </HStack>

                            <HStack spacing={4} width="100%">
                                <Input placeholder="Email Address" bg="gray.100" border="none" flex="1" />
                                <Input placeholder="Phone Number" bg="gray.100" border="none" flex="1" />
                            </HStack>

                            <Textarea
                                placeholder="Write your message"
                                bg="gray.100"
                                border="none"
                                h="150px"
                                resize="none"
                            />

                            <Button colorScheme="blue" width="120px" borderRadius="md">
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
                    maxW={{ base: "100%", lg: "50%" }} // Adjust width for smaller screens
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bgImage="url('./assets/VMukti Brochure O2 1.png')"
                        bgSize="contain"
                        bgRepeat="no-repeat"
                        zIndex={0}
                    />
                    <Image src="./assets/robowho.png" alt="Robot hand" maxH="100%" maxW="100%" zIndex={1} />
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
