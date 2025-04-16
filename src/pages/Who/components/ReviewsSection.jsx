import React, { useRef } from "react";
import {
    Box,
    Text,
    Heading,
    Flex,
    Button,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import { useBreakpointValue } from "@chakra-ui/react";

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

    const visibleCards = useBreakpointValue({ sm: 1, md: 2, lg: 3 });
    const swiperRef = useRef(null);
    const extendedReviews = [...reviews, ...reviews.slice(0, visibleCards)];

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const handlePrevious = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    return (
        <Box>
            <Box p="5%" bg="#3F77A5" borderRadius="24px">
                <HeadingAnimation>
                    <Flex alignContent="center" justifyContent="space-between" mt="2%" mb="4%">
                        <Heading
                            color="white"
                            textAlign="left"
                            fontSize={{ base: "24px", md: "36px" }}
                            fontWeight="600"
                        >
                            What Our Clients Say
                        </Heading>
                        <Flex display={{ base: "flex", md: "none" }} justifyContent="space-between" gap={1}>
                            <Button
                                width="31px"
                                height="31px"
                                minWidth="31px"
                                minHeight="31px"
                                padding="0"
                                borderRadius="5px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                bgColor="#E7E7E7"
                                _hover={{ bgColor: '#e0e0e0' }}
                                onClick={handlePrevious}
                            >
                                <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                    <path
                                        d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                                        fill="#3F77A5"
                                    />
                                </svg>
                            </Button>
                            <Button
                                width="31px"
                                height="31px"
                                minWidth="31px"
                                minHeight="31px"
                                padding="0"
                                borderRadius="5px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                bgColor="#E7E7E7"
                                _hover={{ bgColor: '#e0e0e0' }}
                                onClick={handleNext}
                            >
                                <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                    <path
                                        d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                                        fill="#3F77A5"
                                    />
                                </svg>
                            </Button>
                        </Flex>
                    </Flex>
                </HeadingAnimation>

                <Flex position="relative" alignItems="center" justifyContent="space-between" mb="5%" py="1%">
                    <Flex width={{ base: "100%", sm: "100%", md: "80%" }}>
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={1}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {extendedReviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        key={`${review.id}-${index}`}
                                        bg="white"
                                        borderRadius="24px"
                                        p="6%"
                                        display="flex"
                                        flexDirection="column"
                                        mx={2}
                                        maxWidth={{ base: "100%", md: "320px" }}
                                        height="320px"
                                    >
                                        <Flex
                                            alignItems="flex-start"
                                            mb="25%"
                                            direction="column"
                                        >
                                            <Box>
                                                <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 28.0959C0 30.4975 0.147258 32.1041 2.06616 33.686C2.44831 34.001 2.96593 34.3163 3.43685 34.5029C4.10194 34.7663 4.91057 35.0002 5.81055 35.0002H23.379C24.2392 35.0002 25.1024 34.7904 25.706 34.5245C26.3465 34.2423 26.9501 33.922 27.4649 33.4122C29.2553 31.6391 29.1896 30.0952 29.1896 27.8224C29.1896 26.4325 28.9389 24.9415 28.67 23.7619C28.1064 21.2892 26.8769 18.7071 24.4974 17.5437C23.6063 17.1079 22.5462 16.8848 21.465 16.8848C19.9592 16.8848 16.6484 21.582 10.7314 18.5264C9.75665 18.0229 8.6286 16.8848 7.51957 16.8848C3.47777 16.8848 1.19481 20.3292 0.506878 23.8858C0.377601 24.5539 0.238506 25.1962 0.156145 25.8592C0.0646902 26.5941 0 27.3116 0 28.0957L0 28.0959Z" fill="#3F77A5" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.94747 7.99803C5.94747 9.07286 5.93052 9.54481 6.20602 10.6105C6.28518 10.9168 6.35121 11.0954 6.45063 11.3914L6.91772 12.4281C8.98181 16.2164 13.5564 17.9482 17.8137 16.1729C18.366 15.9425 19.3073 15.3571 19.739 14.9536C20.7055 14.0498 21.4631 13.2963 22.0581 12.009C23.7771 8.29058 22.5881 4.05089 19.3762 1.61054C18.5717 0.999288 17.582 0.527959 16.6125 0.272608C16.0281 0.118633 15.4037 0.0272815 14.7699 0H13.9592C12.8221 0.048776 11.696 0.30392 10.7545 0.773699C8.08514 2.10574 5.94747 4.94229 5.94747 7.99813V7.99803Z" fill="#3F77A5" />
                                                </svg>
                                            </Box>

                                            <Text fontSize="16px" fontWeight="700">
                                                Customer Reviews
                                            </Text>
                                            <Box width="20px" height="2px" bg="#3F77A5" />
                                        </Flex>
                                        <Text fontSize="16px" fontWeight="500" color="gray.700">
                                            {review.text}
                                        </Text>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Flex>

                    <Flex display={{ base: "none", md: "flex" }} justifyContent="space-between" gap={1}>
                        <Button
                            width="31px"
                            height="31px"
                            minWidth="31px"
                            minHeight="31px"
                            padding="0"
                            borderRadius="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                            bgColor="#E7E7E7"
                            _hover={{ bgColor: '#e0e0e0' }}
                            onClick={handlePrevious}
                        >
                            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                <path
                                    d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                                    fill="#3F77A5"
                                />
                            </svg>
                        </Button>
                        <Button
                            width="31px"
                            height="31px"
                            minWidth="31px"
                            minHeight="31px"
                            padding="0"
                            borderRadius="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                            bgColor="#E7E7E7"
                            _hover={{ bgColor: '#e0e0e0' }}
                            onClick={handleNext}
                        >
                            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                                <path
                                    d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                                    fill="#3F77A5"
                                />
                            </svg>
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default ReviewsSection;