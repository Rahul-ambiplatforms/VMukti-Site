import React from "react";
import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Link,
    List,
    ListItem,
    Text,
    Button,
    HStack,
    Icon,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

// Logo component
const Logo = () => (
    <Box>
        {/* <svg width="60" height="20" viewBox="0 0 90 25" fill="#4c6e8a">
            <path d="M12.1 1.3l-9.8 17 9.8-5.7 9.8 5.7zM29.8 7.6h2.4v4.5h4.5v-4.5h2.4v11.5h-2.4v-5h-4.5v5h-2.4zM46.5 7.6h2.3l4.5 11.5h-2.6l-.9-2.5h-4.3l-.9 2.5h-2.6l4.5-11.5zm2.3 7l-1.2-3.3-1.2 3.3h2.4zM54.7 7.6h2.4v9.5h4.7v2h-7.1zM62.8 7.6h2.4v11.5h-2.4zM67.5 7.6h2.4v9.5h4.7v2h-7.1zM75.6 7.6h7.1v2h-4.7v2.8h4.5v2h-4.5v2.8h4.7v2h-7.1z" />
        </svg> */}
        <img src={"assets/BsRobot.png"} alt="Robo" width="40" height="40" />
    </Box>
);

const Footer = () => {
    return (
        <Box bg="#f6f6f6" minH="100vh">
            {/* Newsletter Subscription */}
            <Container maxW="container.lg" py={4}>
                <Box bg="white" borderRadius="md" boxShadow="sm" p={6} mb={6}>
                    <Flex align="center" justify="space-between">
                        <Image src="/api/placeholder/200/150" alt="Robot" h="80px" />
                        <Flex direction="column" align="flex-start" flex="1" mx={6}>
                            <Text fontSize="xl" fontWeight="bold">
                                Subscribe to
                            </Text>
                            <Text fontSize="xl" color="blue.500">
                                Our Newsletter
                            </Text>
                        </Flex>
                        <Flex align="center">
                            <InputGroup size="md" mr={2}>
                                <InputLeftElement>
                                    <EmailIcon color="gray.500" />
                                </InputLeftElement>
                                <Input placeholder="Your Email" w="200px" />
                            </InputGroup>
                            <Button colorScheme="blue" rightIcon={<ChevronRightIcon />}>
                                Subscribe
                            </Button>
                        </Flex>
                    </Flex>
                </Box>

                {/* Footer Grid */}
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {/* Who we are */}
                    <GridItem colSpan={1}>
                        <Box bg="#c2d6e3" p={4} borderRadius="md">
                            <Heading as="h3" size="sm" mb={4}>
                                Who we are
                            </Heading>
                            <Flex>
                                <Box flex="1">
                                    <List spacing={2}>
                                        <ListItem fontSize="sm">• About Us</ListItem>
                                        <ListItem fontSize="sm">• Event Spotlight</ListItem>
                                        <ListItem fontSize="sm">• Social Impact</ListItem>
                                        <ListItem fontSize="sm">• Achievements</ListItem>
                                        <ListItem fontSize="sm">• Blogs</ListItem>
                                        <ListItem fontSize="sm">• Careers</ListItem>
                                        <ListItem fontSize="sm">• Help Desk</ListItem>
                                    </List>
                                </Box>
                                <Box flex="1">
                                    <List spacing={2}>
                                        <ListItem fontSize="sm">• Terms & Condition</ListItem>
                                        <ListItem fontSize="sm">• Trademark Policy</ListItem>
                                        <ListItem fontSize="sm">• Warranty Service</ListItem>
                                        <ListItem fontSize="sm">• Warranty Policy</ListItem>
                                        <ListItem fontSize="sm">• Privacy Policy</ListItem>
                                    </List>
                                </Box>
                            </Flex>
                        </Box>
                    </GridItem>

                    {/* Our Servings */}
                    <GridItem colSpan={1}>
                        <Box bg="white" p={4} borderRadius="md">
                            <Heading as="h3" size="sm" mb={2}>
                                Our Servings
                            </Heading>
                            <Box w="40px" h="2px" bg="#4c6e8a" mb={4}></Box>
                            <List spacing={2} mb={6}>
                                <ListItem fontSize="sm">• Enterprise</ListItem>
                                <ListItem fontSize="sm">• Government</ListItem>
                                <ListItem fontSize="sm">• And Beyond</ListItem>
                            </List>

                            <Heading as="h3" size="sm" mt={6} mb={2}>
                                Contact Us
                            </Heading>
                            <Box w="40px" h="2px" bg="#4c6e8a" mb={4}></Box>
                            <Text fontSize="sm" mb={2}>
                                7, Arista@Flight corporate House,
                                <br />
                                Near Satyam House,Behind Rajpath
                                <br />
                                Club, Bodakdev, Ahmedabad -
                                <br />
                                380054
                            </Text>
                            <Flex align="center" mb={4}>
                                <PhoneIcon mr={2} />
                                <Text fontSize="sm">(+91) 000 000 0000</Text>
                            </Flex>
                            <Link
                                href="#"
                                color="#4c6e8a"
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                            >
                                Book Demo
                                <ChevronRightIcon ml={1} />
                            </Link>
                        </Box>
                    </GridItem>

                    {/* Our Solutions */}
                    <GridItem colSpan={1}>
                        <Box bg="white" p={4} borderRadius="md">
                            <Heading as="h3" size="sm" mb={2}>
                                Our Solutions
                            </Heading>
                            <Box w="40px" h="2px" bg="#4c6e8a" mb={4}></Box>
                            <List spacing={2}>
                                <ListItem fontSize="sm">• VMS</ListItem>
                                <ListItem fontSize="sm">• EMS</ListItem>
                                <ListItem fontSize="sm">• ICCC</ListItem>
                                <ListItem fontSize="sm">• AI-Optimized Cloud Services</ListItem>
                                <ListItem fontSize="sm">
                                    • Generative AI in Video Surveillance
                                </ListItem>
                                <ListItem fontSize="sm">• AI-Powered Surveillance Cameras</ListItem>
                                <ListItem fontSize="sm">• Flying Squad Vehicle (FSV)</ListItem>
                                <ListItem fontSize="sm">• Live Webcasting & Streaming</ListItem>
                            </List>
                        </Box>
                    </GridItem>

                    {/* Industries we serve */}
                    <GridItem colSpan={1}>
                        <Box bg="white" p={4} borderRadius="md">
                            <Heading as="h3" size="sm" mb={2}>
                                Industries we serve
                            </Heading>
                            <Box w="40px" h="2px" bg="#4c6e8a" mb={4}></Box>
                            <List spacing={2}>
                                <ListItem fontSize="sm">• Healthcare Industry</ListItem>
                                <ListItem fontSize="sm">• Education Industry</ListItem>
                                <ListItem fontSize="sm">• Border Security Industry</ListItem>
                                <ListItem fontSize="sm">• Election Industry</ListItem>
                                <ListItem fontSize="sm">• Banking Industry</ListItem>
                                <ListItem fontSize="sm">• Transportation Industry</ListItem>
                                <ListItem fontSize="sm">• City Monitoring Industry</ListItem>
                                <ListItem fontSize="sm">• Retailer Industry</ListItem>
                                <ListItem fontSize="sm">• Manufacturing Industry</ListItem>
                                <ListItem fontSize="sm">• Agriculture Industry</ListItem>
                                <ListItem fontSize="sm">
                                    • Warehousing & Logistic Industry
                                </ListItem>
                                <ListItem fontSize="sm">
                                    • Sports & Entertainment Industry
                                </ListItem>
                                <ListItem fontSize="sm">• Hospitality Industry</ListItem>
                            </List>
                        </Box>
                    </GridItem>
                </Grid>

                {/* Bottom Footer */}
                <Flex justify="space-between" align="center" mt={6} pb={4}>
                    <Logo />
                    <Text fontSize="xs" color="gray.600">
                        Copyright © 2023. VMukti Solutions
                    </Text>
                    <HStack spacing={4}>
                        <Link href="#">
                            <Icon as={FaFacebook} color="#4c6e8a" />
                        </Link>
                        <Link href="#">
                            <Icon as={FaTwitter} color="#4c6e8a" />
                        </Link>
                        <Link href="#">
                            <Icon as={FaInstagram} color="#4c6e8a" />
                        </Link>
                        <Link href="#">
                            <Icon as={FaLinkedin} color="#4c6e8a" />
                        </Link>
                        <Link href="#">
                            <Icon as={FaYoutube} color="#4c6e8a" />
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;