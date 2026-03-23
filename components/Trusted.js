'use client';
import React from "react";
import { Box, Heading, Flex, Image, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const logosRow1 = [
  { src: "/assets/Brochure O4-1.svg", alt: "India Government Partner" },
  { src: "/assets/Brochure O4-2.svg", alt: "Rajsthan Government" },
  { src: "/assets/Brochure O4-3.svg", alt: "Uttar Pradesh Government" },
  { src: "/assets/Brochure O4-4.svg", alt: "Vadodara Municipal Corporation" },
  { src: "/assets/Brochure O4-5.svg", alt: "Gujarat Government" },
  { src: "/assets/Brochure O4-6.svg", alt: "Gujarat Tourism" },
  { src: "/assets/Brochure O4-7.svg", alt: "Haryana Government" },
  { src: "/assets/Brochure O4-8.svg", alt: "Himachal Pradesh Government" },
  { src: "/assets/Brochure O4-9.svg", alt: "India State Government Partner" },
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
  { src: "/assets/Brochure r1-1.svg", alt: "Tata Communications – VMukti partner" },
  { src: "/assets/Brochure r1-2.svg", alt: "Reliance Industries – VMukti partner" },
  { src: "/assets/Brochure r1-3.svg", alt: "Adani Group – VMukti partner" },
  { src: "/assets/Brochure r1-4.svg", alt: "L&T – Larsen & Toubro, VMukti partner" },
  { src: "/assets/Brochure r1-5.svg", alt: "Infosys – VMukti enterprise partner" },
  { src: "/assets/Brochure r1-6.svg", alt: "Wipro – VMukti enterprise partner" },
  { src: "/assets/Brochure r1-7.svg", alt: "HCL Technologies – VMukti partner" },
  { src: "/assets/Brochure r1-8.svg", alt: "Tech Mahindra – VMukti partner" },
  { src: "/assets/Brochure r1-9.svg", alt: "Mahindra – VMukti partner" },
  { src: "/assets/Brochure r1-10.svg", alt: "BPCL – Bharat Petroleum, VMukti partner" },
  { src: "/assets/Brochure r1-11.svg", alt: "HPCL – Hindustan Petroleum, VMukti partner" },
  { src: "/assets/Brochure r1-12.svg", alt: "ONGC – Oil & Natural Gas Corporation, VMukti partner" },
  { src: "/assets/Brochure r1-13.svg", alt: "NTPC – National Thermal Power Corporation, VMukti partner" },
  { src: "/assets/Brochure r1-14.svg", alt: "BHEL – Bharat Heavy Electricals, VMukti partner" },
  { src: "/assets/Brochure r1-15.svg", alt: "Indian Railways – VMukti partner" },
  { src: "/assets/Brochure r1-16.svg", alt: "NHAI – National Highways Authority of India, VMukti partner" },
  { src: "/assets/Brochure r1-17.svg", alt: "Airport Authority of India – VMukti partner" },
  { src: "/assets/Brochure r1-18.svg", alt: "ESIC – Employees' State Insurance Corporation, VMukti partner" },
  { src: "/assets/Brochure r1-19.svg", alt: "VMukti enterprise deployment partner" },
  { src: "/assets/Brochure r1-20.svg", alt: "VMukti enterprise deployment partner" },
];

const scrollRTL = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollLTR = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Trusted = ({ title = "Trusted By" }) => {
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
          {title}
        </Heading>
      </Center>

      {/* --- First Scrolling Row (Left to Right) --- */}

      <Box
        role="region"
        aria-label="Government and Public Sector Partners"
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
          {/* First set — visible to screen readers */}
          {logosRow1.map((logo, index) => (
            <Image loading="lazy"
              key={`row1-a-${index}`}
              src={logo.src}
              alt={logo.alt}
              h={{ base: "86px", md: "125px" }}
              objectFit="contain"
            />
          ))}
          {/* Duplicate set for seamless loop — hidden from screen readers */}
          <Box as="span" aria-hidden="true" display="contents">
            {logosRow1.map((logo, index) => (
              <Image loading="lazy"
                key={`row1-b-${index}`}
                src={logo.src}
                alt=""
                h={{ base: "86px", md: "125px" }}
                objectFit="contain"
              />
            ))}
          </Box>
        </Flex>
      </Box>

      {/* --- Second Scrolling Row (Right to Left) --- */}
      <Box
        role="region"
        aria-label="Enterprise and Technology Partners"
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
          {/* First set — visible to screen readers */}
          {logosRow2.map((logo, index) => (
            <Image loading="lazy"
              key={`row2-a-${index}`}
              src={logo.src}
              alt={logo.alt}
              h={{ base: "86px", md: "125px" }}
              objectFit="contain"
            />
          ))}
          {/* Duplicate set for seamless loop — hidden from screen readers */}
          <Box as="span" aria-hidden="true" display="contents">
            {logosRow2.map((logo, index) => (
              <Image loading="lazy"
                key={`row2-b-${index}`}
                src={logo.src}
                alt=""
                h={{ base: "86px", md: "125px" }}
                objectFit="contain"
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Trusted;
