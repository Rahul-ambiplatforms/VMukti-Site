import React from "react";
import { Box, Heading, Flex, Image, Center, } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// --- Data Arrays for Logos (Unchanged) ---
const logosRow1 = [
  "./assets/row_1_1.png",
  "./assets/row_1_2.png",
  "./assets/row_1_3.png",
  "./assets/row_1_4.png",
  "./assets/row_1_1.png", // Adding more for a longer, smoother loop
  "./assets/row_1_2.png",
];

const logosRow2 = [
  "./assets/row_2_1.png",
  "./assets/row_2_2.png",
  "./assets/row_2_3.png",
  "./assets/row_2_4.png",
  "./assets/row_2_1.png", // Adding more for a longer, smoother loop
  "./assets/row_2_2.png",
];

// --- ✅ FIX 1: Corrected Keyframes for a SEAMLESS Loop ---
// When the content is duplicated once, the animation must move by exactly
// half of the total width of the scrolling container to be seamless.
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
    <Box my="3%" w="100vw" ml="-2vw">
      <Center>
        <Heading as="h2" fontSize="36px" mb={12} color="black" fontWeight="600">
          Trusted By
        </Heading>
      </Center>

      {/* --- First Scrolling Row (Right to Left) --- */}
      <Box
        w="full"
        overflow="hidden"
        position="relative"
        // ✅ OPTIMIZATION 1: Faded edges for a professional look
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          // background: 'linear-gradient(to right, #F7FAFC, transparent)',
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          // background: 'linear-gradient(to left, #F7FAFC, transparent)',
          zIndex: 2,
        }}
        // ✅ OPTIMIZATION 2: Pause animation on hover
        _hover={{
            '& > div': { // Target the inner Flex
                animationPlayState: 'paused'
            }
        }}
      >
        <Flex
          w="max-content"
          animation={`${scrollRTL} 65s linear infinite`} // Slower animation is often smoother
        >
          {/* We duplicate the logos array once to create the seamless effect */}
          {[...logosRow1, ...logosRow1].map((logo, index) => (
            <Image
              key={`row1-${index}`} // A more unique key is better practice
              src={logo}
              alt={`Partner logo ${index + 1}`}
              // h={{ base: "40px", md: "60px" }}
              h="125px"
              objectFit="contain" 
              // px={{ base: 6, md: 10 }}
            />
          ))}
        </Flex>
      </Box>

      {/* --- Second Scrolling Row (Left to Right) --- */}
      <Box
        w="full"
        overflow="hidden"
        position="relative"
        mt={8}
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          // background: "linear-gradient(to right, #F7FAFC, transparent)",
          zIndex: 2,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { base: "50px", md: "100px" },
          // background: "linear-gradient(to left, #F7FAFC, transparent)",
          zIndex: 2,
        }}
         _hover={{
            '& > div': {
                animationPlayState: 'paused'
            }
        }}
      >
        <Flex
          w="max-content"
          animation={`${scrollLTR} 65s linear infinite`} // Varied speed for interest
        >
          {[...logosRow2, ...logosRow2].map((logo, index) => (
            <Image
              key={`row2-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              // h={{ base: "40px", md: "50px" }}
              h="125px"
              objectFit="contain"
              // px={{ base: 6, md: 10 }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Trusted;