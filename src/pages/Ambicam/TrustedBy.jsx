import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            <Flex direction="column" align="center" justify="center"  py={8} position="relative">
                <Box top={0} position="absolute" height="500px" width="100%" bgColor="#F7F7F7" />
                {/* heading */}
                <Flex zIndex={1} direction="column" align="center" justify="center" gap={4} mb={8}>
                    <Flex>
                        <Text fontSize="48px" fontWeight="600">Trusted Across Sectors</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="16px" fontWeight="700">From one camera to thousands, our solutions are cost-effective and future-ready.</Text>
                    </Flex>
                </Flex>
                {/* slider cards */}
                <Flex width="100%">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={4}
                    >
                        {
                            cards.map((card, index) => (

                                <SwiperSlide key={index}>
                                    <Flex direction="column" alignItems="center" bg="white" borderRadius="24px">
                                        <Image src={card.image} alt={card.alt} width="336px" height="auto" aspectRatio="14/26" />
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
