import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import PageContentWrapper from "../../components/PageContentWrapper";
import { useRef } from "react"; // Add useRef import

const TrustedBy = () => {
  const swiperRef = useRef(null); // Use useRef for swiper instance
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
  // Duplicate to avoid any gap at the loop point
  const looped = [...cards, ...cards];

  return (
    <PageContentWrapper noPadding="force">
      <Flex direction="column" py={8} position="relative">
        <Box
          position="absolute"
          top={0}
          height="500px"
          width="100%"
          bgColor="#F7F7F7"
        />

        {/* Heading */}
        <Flex
          zIndex={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
          mb={8}
        >
          <Text fontSize={{ base: "36px", md: "48px" }} fontWeight="600">
            Trusted Across Sectors
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
            From one camera to thousands, our solutions are cost-effective and
            future-ready.
          </Text>
        </Flex>

        {/* Smooth continuous slider */}
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
          px={{ base: 4, md: 0 }}
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()} // Use useRef's current
          onMouseLeave={() => swiperRef.current?.autoplay?.start()} // Use useRef's current
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto" // ← critical for continuous flow
            spaceBetween={20}
            loop={true}
            freeMode={true}
            // freeModeMomentum={true}
            speed={1000} // 1s per slide shift, but since auto, it's smooth
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            onSwiper={(swiper) => 
                (swiperRef.current = swiper)} // Assign to useRef's current
            
              // inline linear timing for smoothness
              style= {{ transitionTimingFunction: "linear" }}
            
          >
            {looped.map((card, idx) => (
              <SwiperSlide key={idx} style={{ width: "auto" }}>
                <Flex
                  direction="column"
                  align="center"
                  bg="white"
                  borderRadius="24px"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width="336px"
                    height="auto"
                  />
                  <Text fontSize="16px" fontWeight="700" p={4}>
                    {card.title}
                  </Text>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
    </PageContentWrapper>
  );
};

export default TrustedBy;
