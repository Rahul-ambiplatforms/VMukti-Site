// import { Box, Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MotionBox = motion(Box);

// const fadeInTopDown = {
//   hidden: { opacity: 0, y: -50 }, // Start off-screen above
//   visible: (index) => ({
//     opacity: 1,
//     y: 0, // Move to normal position
//     transition: {
//       duration: 0.5, // Slow fade-in
//       ease: "easeOut",
//       delay: index * 0.1, // Staggered delay
//     },
//   }),
// };
// export default function CulturalSection({ gridItems }) {
//   return (
//     <Box py={{ base: 6, md: 8 }} position="relative">
//       <Container
//         maxW={{ base: "100%", lg: "100%" }}
//         px={{ base: 4, md: 0 }}
//         position="relative"
//       >
//         {/* Background dots pattern */}
//         <Box
//           position="absolute"
//           top="20%"
//           left="0"
//           right="0"
//           bottom="0"
//           opacity="0.8"
//           width="1050px"
//           height="525px"
//           zIndex="0"
//           backgroundImage="url('/assets/VMukti Brochure O2 4.svg')"
//           backgroundRepeat="no-repeat"
//         />
//         <SimpleGrid
//           columns={{ base: 1, md: 2, lg: 4 }}
//           spacing="34px"
//           position="relative"
//           zIndex="1"
//         >
//           {gridItems.map((item, index) => (
//             <MotionBox
//               key={index}
//               bg={item.bgColor || "white"}
//               p={{ base: 4, md: 6 }}
//               borderRadius="24px"
//               width="336px"
//               height="336px"
//               flexShrink="0"
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInTopDown}
//               custom={index} // Pass index for delay
//               viewport={{ once: false }} // Replays when visible again
//             >
//               {item.title && (
//                 <>
//                   <Heading
//                     as="h3"
//                     size={{ base: "sm", md: "md", lg: "lg" }}
//                     color={item.textColor}
//                     mb={4}
//                   >
//                     {item.title}
//                   </Heading>
//                   <Text
//                     fontSize={{ base: "xs", md: "sm", lg: "md" }}
//                     color="gray.700"
//                   >
//                     {item.description}
//                   </Text>
//                 </>
//               )}
//             </MotionBox>
//           ))}
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// }

import { Box, Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const floatingAnimation = {
  hidden: { y: 0, opacity: 1 },
  visible: (index) => ({
    opacity: 1,
    y: ["0%", "15%", "0%"], // Moves up and down
    transition: {
      duration: 1.8, // 3 seconds for smooth motion
      ease: "easeInOut",
      times: [0.2, 0.4,0.6,0.8, 1], // Keyframes for up-down motion
      delay: index * 0.1, // Staggered delay for each element
    },
  }),
};

export default function CulturalSection({ gridItems }) {
  return (
    <Box py={{ base: 6, md: 8 }} position="relative">
      <Container
        maxW={{ base: "100%", lg: "100%" }}
        px={{ base: 4, md: 0 }}
        position="relative"
      >
        {/* Background dots pattern */}
        <Box
          position="absolute"
          top="20%"
          left="0"
          right="0"
          bottom="0"
          opacity="0.8"
          width="1050px"
          height="525px"
          zIndex="0"
          backgroundImage="url('/assets/VMukti Brochure O2 4.svg')"
          backgroundRepeat="no-repeat"
        />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing="34px"
          position="relative"
          zIndex="1"
        >
          {gridItems.map((item, index) => (
            <MotionBox
              key={index}
              bg={item.bgColor || "white"}
              p={{ base: 4, md: 6 }}
              borderRadius="24px"
              width="336px"
              height="336px"
              flexShrink="0"
              initial="hidden"
              animate="visible"
              variants={floatingAnimation}
              custom={index} // Pass index for delay
            >
              {item.title && (
                <>
                  <Heading
                    as="h3"
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    color={item.textColor}
                    mb={4}
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    color="gray.700"
                  >
                    {item.description}
                  </Text>
                </>
              )}
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
