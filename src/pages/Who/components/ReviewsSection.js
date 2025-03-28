import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            text: "VMukti created custom detection features specifically for us, ensuring a perfect fit. Their team's responsiveness made all the difference.",
        },
        {
            id: 2,
            text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
        },
        {
            id: 3,
            text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
        },
        {
            id: 4,
            text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
        },
        {
            id: 5,
            text: "Another great review from a satisfied customer about the excellent service provided.",
        },
        {
            id: 6,
            text: "Final review showing how amazing this product is for all our security needs.",
        },
    ];

    const displayedReviews = reviews.slice(0, 3);

    return (
        <Box>
            
        </Box>
    );
};

export default ReviewsSection;

