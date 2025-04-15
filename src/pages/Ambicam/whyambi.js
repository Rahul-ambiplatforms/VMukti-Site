import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Container,
    Grid,
    List,
    ListItem,
    useBreakpointValue,
} from "@chakra-ui/react";

export default function WhyAmbicamPage() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    // Feature card data
    const featureCards = [
        {
            id: 1,
            title: "Cloud-First Design",
            bgColor: "#3F77A5",
            textColor: "white",
            items: ["Easy setup", "Fully managed via cloud in minutes"],
        },
        {
            id: 2,
            title: "Secure & Scalable",
            bgColor: "#BECEDC",
            textColor: "gray.800",
            items: ["End-to-end encryption", "Flexible cloud storage plans"],
        },
        {
            id: 3,
            title: (
                <>
                    4G/5G <br /> Ready
                </>
            ),
            bgColor: "white",
            textColor: "gray.800",
            items: ["Connect anywhere", "Ideal for remote or mobile sites"],
        },
        {
            id: 4,
            title: (
                <>
                    Made in <br /> India
                </>
            ),
            bgColor: "#3F77A5",
            textColor: "white",
            items: ["High-quality", "Compliant", "Trusted globally"],
        },
        {
            id: 5,
            bgColor: "transparent",
            items: [],
        },
        {
            id: 6,
            title: "AI-Powered Analytics",
            bgColor: "white",
            textColor: "gray.800",
            items: [
                "Motion detection",
                "Human detection",
                "Line-cross alerts and more",
            ],
        },
    ];

    // Filter out empty cards in mobile view
    const filteredCards = isMobile
        ? featureCards.filter(card => card.items.length > 0)
        : featureCards;

    return (
        <Box
            position="relative"
            backgroundImage="url('/assets/camerapower.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            py={10}
        >
            {/* Decorative image in corner - hidden on mobile */}
            {!isMobile && (
                <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    width="1050px"
                    height="525px"
                    backgroundImage="url('/assets/VMukti Brochure O2 1.svg')"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="bottom right"
                    zIndex="0"
                    opacity="0.8"
                />
            )}

            <Box position="relative" zIndex={1}>
                <Heading as="h2" size="2xl" mb={12} ml={8} textAlign={{ base: "center",md:"left" }}>
                    <Text as="span">Why </Text>
                    <Text as="span" color="blue.500">
                        Ambicam
                    </Text>
                    <Text as="span">?</Text>
                </Heading>

                <Flex direction={{ base: "column", lg: "row" }} gap={8}>
                    {/* Left spacer - maintains layout balance */}
                    <Box flex={{ lg: "1" }} />

                    {/* Cards section using standard Grid */}
                    <Box flex={{ lg: "1" }} position="relative" zIndex={1}>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, 336px)" }}
                            autoRows={{ base: "auto", md: "336px" }}
                            gap={4}
                        >
                            {filteredCards.map((card) => (
                                <Box
                                    key={card.id}
                                    bg={card.bgColor}
                                    color={card.textColor}
                                    p={6}
                                    h={{ base: "auto", md: "336px" }}
                                    minH={{ base: "200px", md: "336px" }}
                                    w={{ base: "100%", md: "336px" }}
                                    maxW="336px"
                                    borderRadius="24px"
                                    mx="auto"
                                    gridColumn={
                                        !isMobile && card.id === 6 ? "2 / 3" : undefined
                                    }
                                    gridRow={
                                        !isMobile && card.id === 5 ? "3 / 4" :
                                            !isMobile && card.id === 6 ? "3 / 4" : undefined
                                    }
                                >
                                    {card.title && (
                                        <Heading
                                            as="h3"
                                            fontSize={{ base: "28px", md: "36px" }}
                                            fontWeight="700"
                                            mb={4}
                                        >
                                            {card.title}
                                        </Heading>
                                    )}
                                    <List spacing={3}>
                                        {card.items.map((item, i) => (
                                            <ListItem
                                                key={i}
                                                display="flex"
                                                alignItems="center"
                                                gap={2}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29ZM19.7326 12.5535C19.9678 12.3184 19.9678 11.937 19.7326 11.7019C19.4974 11.4667 19.1161 11.4667 18.8809 11.7019L13.5632 17.0196L11.1172 14.5737C10.8821 14.3385 10.5007 14.3385 10.2656 14.5737C10.0304 14.8088 10.0304 15.1901 10.2656 15.4253L13.1374 18.2971C13.2503 18.4101 13.4035 18.4735 13.5632 18.4735C13.7229 18.4735 13.8761 18.4101 13.989 18.2971L19.7326 12.5535Z"
                                                        fill="#7AC100"
                                                    />
                                                </svg>
                                                {item}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}