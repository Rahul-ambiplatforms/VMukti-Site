'use client';
import React from "react";
import { Box, Heading, Flex, Image, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const logosRow1 = [
  { src: "/assets/Brochure O4-1.svg", alt: "Partner logo 1" },
  { src: "/assets/Brochure O4-2.svg", alt: "Rajsthan Government" },
  { src: "/assets/Brochure O4-3.svg", alt: "Uttar Pradesh Government" },
  { src: "/assets/Brochure O4-4.svg", alt: "Vadodara Municipal Corporation" },
  { src: "/assets/Brochure O4-5.svg", alt: "Gujarat Government" },
  { src: "/assets/Brochure O4-6.svg", alt: "Gujarat Tourism" },
  { src: "/assets/Brochure O4-7.svg", alt: "Haryana Government" },
  { src: "/assets/Brochure O4-8.svg", alt: "Himachal Pradesh Government" },
  { src: "/assets/Brochure O4-9.svg", alt: "Partner logo 9" },
  { src: "/assets/Brochure O4-10.svg", alt: "Election Commission of India" },
  { src: "/assets/Brochure O4-11.svg", alt: "Government of Punjab" },
  { src: "/assets/Brochure O4-12.svg", alt: "Jarkhand Government" },
  { src: "/assets/Brochure O4-13.svg", alt: "IIM Ahmedabad" },
  { src: "/assets/Brochure O4-14.svg", alt: "Madhya Pradesh Government" },
  { src: "/assets/Brochure O4-15.svg", alt: "Government of Kerala" },
  { src: "/assets/Brochure O4-16.svg", alt: "Gujarat Board of Secondary Education" },
  { src: "/assets/Brochure O4-17.svg", alt: "Government of Nagaland" },
  { src: "/assets/Brochure O4-18.svg", alt: "Chandigarh Government" },
  { src: "/assets/Brochure O4-19.svg", alt: "Government of West Bengal" },
  { src: "/assets/Brochure O4.svg", alt: "Central Bureau of Investigation" },
  
];

const logosRow2 = [
  { src: "/assets/Brochure r1-1.svg", alt: "Partner logo 1" },
  { src: "/assets/Brochure r1-2.svg", alt: "Partner logo 2" },
  { src: "/assets/Brochure r1-3.svg", alt: "Partner logo 3" },
  { src: "/assets/Brochure r1-4.svg", alt: "Partner logo 4" },
  { src: "/assets/Brochure r1-5.svg", alt: "Partner logo 5" },
  { src: "/assets/Brochure r1-6.svg", alt: "Partner logo 6" },
  { src: "/assets/Brochure r1-7.svg", alt: "Partner logo 7" },
  { src: "/assets/Brochure r1-8.svg", alt: "Partner logo 8" },
  { src: "/assets/Brochure r1-9.svg", alt: "Partner logo 9" },
  { src: "/assets/Brochure r1-10.svg", alt: "Partner logo 10" },
  { src: "/assets/Brochure r1-11.svg", alt: "Partner logo 11" },
  { src: "/assets/Brochure r1-12.svg", alt: "Partner logo 12" },
  { src: "/assets/Brochure r1-13.svg", alt: "Partner logo 13" },
  { src: "/assets/Brochure r1-14.svg", alt: "Partner logo 14" },
  { src: "/assets/Brochure r1-15.svg", alt: "Partner logo 15" },
  { src: "/assets/Brochure r1-16.svg", alt: "Partner logo 16" },
  { src: "/assets/Brochure r1-17.svg", alt: "Partner logo 17" },
  { src: "/assets/Brochure r1-18.svg", alt: "Partner logo 18" },
  { src: "/assets/Brochure r1-19.svg", alt: "Partner logo 19" },
  { src: "/assets/Brochure r1-20.svg", alt: "Partner logo 20" },
];

const scrollRTL = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollLTR = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Trusted = () => {
  return (
    <Box my="2%" w="100vw">
      <Center>
        <Heading
          as="h2"
          fontSize={{ base: "20px", md: "36px" }}
          mb={{ base: "2", md: "6" }}
          color="black"
          fontWeight={{ base: "600", md: "500" }}
        >
          Trusted By
        </Heading>
      </Center>

      {/* --- First Scrolling Row (Left to Right) --- */}

      <Box
        w="full"
        overflow="hidden"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          zIndex: 2,
        }}
        // _hover={{
        //     '& > div': { // Target the inner Flex
        //         animationPlayState: 'paused'
        //     }
        // }}
      >
        <Flex
          w="max-content"
          animation={`${scrollRTL} 30s linear infinite`}
        >
          {/* We duplicate the logos array once to create the seamless effect */}
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <Image loading="lazy"
              key={`row1-${index}`}
              src={logo.src}
              alt={logo.alt}
              h={{ base: "86px", md: "125px" }}
              objectFit="contain"
            />
          ))}
        </Flex>
      </Box>

      {/* --- Second Scrolling Row (Left to Right) --- */}
      <Box
        w="full"
        overflow="hidden"
        position="relative"
        mt={{ base: 0, md: 4 }}
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          zIndex: 2,
        }}
        //  _hover={{
        //     '& > div': {
        //         animationPlayState: 'paused'
        //     }
        // }}
      >
        <Flex
          w="max-content"
          animation={`${scrollLTR} 30s linear infinite`}
        >
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <Image loading="lazy"
              key={`row2-${index}`}
              src={logo.src}
              alt={logo.alt}
              h={{ base: "86px", md: "125px" }}
              objectFit="contain"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Trusted;
