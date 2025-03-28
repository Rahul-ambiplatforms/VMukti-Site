import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import HeroSection from "./components/HeroSection";
import PageContentWrapper from "../../../components/PageContentWrapper";
import CulturalSection from "../../../components/CulturalSection"; // Import the new reusable component

export default function VMuktiCareers() {
    const gridItems = [
        { title: "Life at VMukti", description: "A dynamic workplace where innovation thrives, collaboration is encouraged, and every contribution matters.", bgColor: "transparent", textColor: "blue.600" },
        { bgColor: "#BECEDC" },
        {},
        { title: "Growth", description: "Unlock your potential with continuous learning, mentorship, and career advancement opportunities.", bgColor: "transparent", textColor: "orange.500" },
        {},
        { title: "Culture", description: "We foster a supportive, inclusive, and fast-paced environment that empowers creativity and teamwork.", bgColor: "transparent", textColor: "orange.500" },
        { bgColor: "#BECEDC" },
        {},
        { bgColor: "transparent" },
        {},
        { title: "Work-Life Balance", description: "We value flexibility and well-being, ensuring you excel at work while enjoying life.", bgColor: "transparent", textColor: "blue.600" },
        {},
    ];

    return (
        <PageContentWrapper>
            <Box bg="#E7E7E7">
                {/* Hero Section */}
                <HeroSection />

                {/* Culture Sections Grid */}
                <CulturalSection gridItems={gridItems} />

                {/* Current Openings */}
                <Box py={{ base: 6, md: 8 }}>
                    <Container maxW={{ base: "100%", lg: "100%" }} px={{ base: 4, md: 0 }}>
                        <Box bg="white" p={{ base: 4, md: 6, lg: 8 }} borderRadius="24px">
                            <Flex
                                justify="space-between"
                                align="center"
                                mb={6}
                                flexDirection={{ base: "column", md: "row" }}
                                textAlign={{ base: "center", md: "left" }}
                            >
                                <Heading as="h2" size={{ base: "sm", md: "md", lg: "lg" }}>
                                    Current{" "}
                                    <Box as="span" color="blue.500">
                                        Opening
                                    </Box>
                                </Heading>
                            </Flex>
                            <Flex
                                justify="space-between"
                                align="center"
                                mb={4}
                                flexDirection={{ base: "column", md: "row" }}
                                textAlign={{ base: "center", md: "left" }}
                            >
                                <Text fontSize={{ base: "xs", md: "sm" }}>
                                    10 Jobs found <Box as="span" mx={2} color="#3F77A5">|</Box>
                                    <Box as="span" color="#696969">Showing 1-5</Box>
                                </Text>
                                <HStack mt={{ base: 4, md: 0 }}>
                                    <Button size="sm" variant="ghost" p={1}>
                                        <ChevronLeftIcon />
                                    </Button>
                                    <Button size="sm" variant="ghost" p={1}>
                                        <ChevronRightIcon />
                                    </Button>
                                </HStack>
                            </Flex>
                            <Box borderBottom="1px" borderColor="#3F77A5" />
                            <VStack
                                spacing={{ base: 3, md: 4 }}
                                align="stretch"
                                divider={<Box borderBottom="1px" borderColor="#3F77A5" />}
                            >
                                {[1, 2, 3, 4, 5].map((job) => (
                                    <Flex
                                        key={job}
                                        justify="space-between"
                                        align="center"
                                        py={{ base: 2, md: 3 }}
                                        flexDirection={{ base: "column", md: "row" }}
                                        textAlign={{ base: "center", md: "left" }}
                                    >
                                        <HStack
                                            spacing={{ base: 3, md: 4 }}
                                            align="start"
                                            flexDirection={{ base: "column", md: "row" }}
                                        >
                                            <Box bg="white" color="white" p={2} borderRadius="md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 28.0959C0 30.4975 0.147258 32.1041 2.06616 33.686C2.44831 34.001 2.96593 34.3163 3.43685 34.5029C4.10194 34.7663 4.91057 35.0002 5.81055 35.0002H23.379C24.2392 35.0002 25.1024 34.7904 25.706 34.5245C26.3465 34.2423 26.9501 33.922 27.4649 33.4122C29.2553 31.6391 29.1896 30.0952 29.1896 27.8224C29.1896 26.4325 28.9389 24.9415 28.67 23.7619C28.1064 21.2892 26.8769 18.7071 24.4974 17.5437C23.6063 17.1079 22.5462 16.8848 21.465 16.8848C19.9592 16.8848 16.6484 21.582 10.7314 18.5264C9.75665 18.0229 8.6286 16.8848 7.51957 16.8848C3.47777 16.8848 1.19481 20.3292 0.506878 23.8858C0.377601 24.5539 0.238506 25.1962 0.156145 25.8592C0.0646902 26.5941 0 27.3116 0 28.0957L0 28.0959Z" fill="#3F77A5" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94747 7.99803C5.94747 9.07286 5.93052 9.54481 6.20602 10.6105C6.28518 10.9168 6.35121 11.0954 6.45063 11.3914L6.91772 12.4281C8.98181 16.2164 13.5564 17.9482 17.8137 16.1729C18.366 15.9425 19.3073 15.3571 19.739 14.9536C20.7055 14.0498 21.4631 13.2963 22.0581 12.009C23.7771 8.29058 22.5881 4.05089 19.3762 1.61054C18.5717 0.999288 17.582 0.527959 16.6125 0.272608C16.0281 0.118633 15.4037 0.0272815 14.7699 0H13.9592C12.8221 0.048776 11.696 0.30392 10.7545 0.773699C8.08514 2.10574 5.94747 4.94229 5.94747 7.99813V7.99803Z" fill="#3F77A5" />
                                                </svg>
                                            </Box>
                                            <Box>
                                                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                                                    Marketing Head
                                                </Text>
                                                <Box borderBottom="2px" borderColor="#3F77A5" my={1} width={"10%"} /> {/* Horizontal divider */}
                                                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                                                    Full Time
                                                </Text>
                                            </Box>
                                        </HStack>
                                        <Box mt={{ base: 4, md: 0 }}>
                                            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">
                                                Location
                                            </Text>
                                            <Text fontSize={{ base: "xs", md: "sm" }}>Ahmedabad, GJ</Text>
                                        </Box>
                                        <Box mt={{ base: 4, md: 0 }}>
                                            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">
                                                Year of Experience
                                            </Text>
                                            <Text fontSize={{ base: "xs", md: "sm" }}>5 to 6 years</Text>
                                        </Box>
                                        <Button
                                            size="sm"
                                            bg="#E7E7E7"
                                            _hover={{ bg: "gray.300" }}
                                            display="flex"
                                            width={{ base: "100%", md: "146px" }}
                                            height="50px"
                                            padding="12px 24px"
                                            justifyContent="center"
                                            alignItems="center"
                                            gap="10px"
                                            flexShrink="0"
                                            borderRadius="20px"
                                            mt={{ base: 4, md: 0 }}
                                        >
                                            Apply
                                        </Button>
                                    </Flex>
                                ))}
                            </VStack>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </PageContentWrapper>
    );
}

