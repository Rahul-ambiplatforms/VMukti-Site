import React, { useState } from "react";
import { Box, Heading, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        { id: 1, text: "Review 1" },
        { id: 2, text: "Review 2" },
        { id: 3, text: "Review 3" },
        { id: 4, text: "Review 4" },
        { id: 5, text: "Review 5" },
    ];

    const visibleCards = 3;
    const totalCards = reviews.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    const getVisibleReviews = () => {
        const visibleReviews = [];
        for (let i = 0; i < visibleCards; i++) {
            visibleReviews.push(reviews[(currentIndex + i) % totalCards]);
        }
        return visibleReviews;
    };

    return (
        <Box pb="9%">
            <Box mx="auto" px={12} py={8} bg="#3F77A5" borderRadius="24px" boxShadow="lg">
                <Heading
                    color="white"
                    mt="2%"
                    mb="4%"
                    textAlign="left"
                    fontSize={{ base: "24px", md: "36px" }}
                    fontWeight="600"
                >
                    What Our Clients Say
                </Heading>
                <Box position="relative" mb="5%" py="1%" overflow="hidden" width="69%" mx="auto">
                    <Flex
                        transform={`translateX(-${currentIndex * 100}%)`}
                        transition="transform 0.5s ease-in-out"
                        width={`${totalCards * 100}%`}
                    >
                        {getVisibleReviews().map((review, index) => (
                            <Box
                                key={review.id}
                                bg="white"
                                borderRadius="24px"
                                p={6}
                                width="300px" // Fixed width for the cards
                                mx={2}
                                boxShadow="md"
                                border="1px solid #E2E8F0"
                                _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
                                transition="all 0.3s ease-in-out"
                                height="320px"
                                background="#FFF"
                            >
                                <Flex alignItems="flex-start" mb={4}>
                                    <Text fontSize="lg" fontWeight="600" color="gray.600">
                                        Customer Reviews
                                    </Text>
                                </Flex>
                                <Text fontSize="md" color="gray.700">
                                    {review.text}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
                <Flex justifyContent="center" mt={4}>
                    <IconButton
                        onClick={handlePrevious}
                        aria-label="Previous review"
                        icon={<ChevronLeftIcon />}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "rgba(255,255,255,0.1)" }}
                        size="lg"
                        mr="5px"
                    />
                    <IconButton
                        onClick={handleNext}
                        aria-label="Next review"
                        icon={<ChevronRightIcon />}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "rgba(255,255,255,0.1)" }}
                        size="lg"
                        ml="5px"
                    />
                </Flex>
            </Box>
        </Box>
    );
};

export default ReviewsSection;
