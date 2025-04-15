import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Container,
    Icon,
} from "@chakra-ui/react";

export default function AmbicamLandingPage() {
    return (
        <Box
            bgImage="url('./assets/ambidash.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            
        >
            {/* Optional overlay to improve readability */}
            <Box>
                <Container maxW="container.xl" py={10}>
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        align="center"
                        justify="space-between"
                        gap={8}
                    >
                        <Box maxW={{ base: "100%", lg: "50%" }}>
                            <Flex direction="column" gap={6}>
                                <Heading as="h1" size="2xl" lineHeight="1.2">
                                    <Text as="span" color="blue.500">
                                        Ambicam –{" "}
                                    </Text>
                                    <Text as="span">
                                        Redefining Smart Surveillance for the{" "}
                                    </Text>
                                    <Text as="span" color="orange.500">
                                        Modern World.
                                    </Text>
                                </Heading>

                                <Icon boxSize={10} color="blue.500" />

                                <Box>
                                    <Text fontWeight="bold" mb={2}>
                                        Ambicam, <Text as="span" fontWeight="normal">a proudly developed brand by </Text>
                                        VMukti Solutions,
                                        <Text as="span" fontWeight="normal"> stands at the forefront of </Text>
                                        cloud-based video surveillance technology.
                                    </Text>

                                    <Text mb={4}>
                                        Engineered to simplify security while enhancing intelligence,
                                        Ambicam offers a robust lineup of <strong>plug-and-play smart cameras</strong>
                                        tailored for modern surveillance demands across <strong>residential,
                                            commercial, and public infrastructures.</strong>
                                    </Text>

                                    <Text mb={4}>
                                        From <strong>real-time remote monitoring</strong> to <strong>AI-driven analytics</strong>,
                                        Ambicam is built to empower individuals, enterprises, and smart cities with
                                        actionable insights and reliable protection—anytime, anywhere.
                                    </Text>
                                </Box>

                                <Flex align="center" gap={6}>
                                    <Image
                                        src="/api/placeholder/180/50"
                                        alt="Ambicam logo"
                                        maxW="180px"
                                    />

                                    <Button
                                        colorScheme="blue"
                                        variant="outline"
                                        size="md"
                                        px={4}
                                    >
                                        Know more
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}
