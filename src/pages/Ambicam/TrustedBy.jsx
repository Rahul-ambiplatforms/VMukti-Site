import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Register Swiper modules

const TrustedBy = () => {
    const cards = [
        {
            title: "Banking & Finance",
            image: "../assets/Banking_Industry.png",
            alt: "Banking & Finance",
        },
        {
            title: "Education & Healthcare",
            image: "../assets/Education_Industry.png",
            alt: "Education & Healthcare",
        },
        {
            title: "Retail & Hospitality",
            image: "../assets/Retail_Hospitality.png",
            alt: "Retail & Hospitality",
        },
        {
            title: "Smart Cities",
            image: "../assets/Smart_Cities.png",
            alt: "Smart Cities",
        },
        {
            title: "Homes & Communities",
            image: "../assets/Homes_Communities.png",
            alt: "Homes & Communities",
        },
    ];
    return (
        <>
            <Flex direction="column" py={8} position="relative">
                <Box top={0} position="absolute" height="500px" width="100%" bgColor="#F7F7F7" />
                {/* heading */}
                <Flex zIndex={1} direction="column" alignItems="center" justifyContent="center" gap={4} mb={8}>
                    <Flex textAlign="center">
                        <Text fontSize={{ base: "36px", md: "48px" }} fontWeight="600">Trusted Across Sectors</Text>
                    </Flex>
                    <Flex textAlign="center">
                        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">From one camera to thousands, our solutions are cost-effective and future-ready.</Text>
                    </Flex>
                </Flex>
                {/* slider cards */}
                <Flex width="100%" alignItems="center" justifyContent="center" zIndex={1} px={{ base: "16px", md: "0" }}>
                    <Swiper
                        spaceBetween={40}
                        // navigation
                        // pagination
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            cards.map((card, index) => (

                                <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Flex direction="column" alignItems="center" width="fit-content" bg="white" borderRadius="24px">
                                        <Image src={card.image} alt={card.alt} width="336px" height="auto" aspectRatio="14/23" />
                                        <Text fontSize="16px" fontWeight="700" letterSpacing="-1.5%" p={4}>{card.title}</Text>
                                    </Flex>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Flex>
            </Flex>

        </>
    );
};

export default TrustedBy;
