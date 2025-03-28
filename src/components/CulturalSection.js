import { Box, Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";

export default function CulturalSection({ gridItems }) {
    return (
        <Box py={{ base: 6, md: 8 }} position="relative">
            <Container maxW={{ base: "100%", lg: "100%" }} px={{ base: 4, md: 0 }} position="relative">
                {/* Background dots pattern */}
                <Box
                    position="absolute"
                    top="20%"
                    left="0"
                    right="0"
                    bottom="0"
                    opacity="0.8"
                    width="1050px"
                    height="525px"
                    zIndex="0"
                    backgroundImage="url('/assets/VMukti Brochure O2 4.svg')"
                    backgroundRepeat="no-repeat"
                />
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    spacing="34px"
                    position="relative"
                    zIndex="1"
                >
                    {gridItems.map((item, index) => (
                        <Box
                            key={index}
                            bg={item.bgColor || "white"}
                            p={{ base: 4, md: 6 }}
                            borderRadius="24px"
                            width="336px"
                            height="336px"
                            flexShrink="0"
                        >
                            {item.title && (
                                <>
                                    <Heading as="h3" size={{ base: "sm", md: "md", lg: "lg" }} color={item.textColor} mb={4}>
                                        {item.title}
                                    </Heading>
                                    <Text fontSize={{ base: "xs", md: "sm", lg: "md" }} color="gray.700">
                                        {item.description}
                                    </Text>
                                </>
                            )}
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
