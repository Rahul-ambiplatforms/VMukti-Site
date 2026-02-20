import React from "react";
import { Box, Heading, Flex, Image, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const logosRow1 = [
  "/assets/row_1_1.png",
  "/assets/row_1_2.png",
  "/assets/row_1_3.png",
  "/assets/row_1_4.png",
  "/assets/row_1_1.png",
  "/assets/row_1_2.png",
];

const logosRow2 = [
  "/assets/row_2_1.png",
  "/assets/row_2_2.png",
  "/assets/row_2_3.png",
  "/assets/row_2_4.png",
  "/assets/row_2_1.png",
  "/assets/row_2_2.png",
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
          animation={`${scrollRTL} 65s linear infinite`} // Slower animation is often smoother
        >
          {/* We duplicate the logos array once to create the seamless effect */}
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <Image loading="lazy"
              key={`row1-${index}`}
              // src={`${process.env.PUBLIC_URL}${logo}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
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
          animation={`${scrollLTR} 65s linear infinite`} // Varied speed for interest
        >
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <Image loading="lazy"
              key={`row2-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
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
