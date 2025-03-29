// import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MotionText = motion(Text);

// const TripleImageSection = ({
//     heading = [
//         { text: "AI-Powered", color: "#000" },
//         { text: "Surveillance", color: "#3F77A5" },
//         { text: "\nSolutions", color: "#DB7B3A" },
//     ],
//     description = "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management. Enhance safety and efficiency with scalable, future-ready technology.",
//     images = ["./assets/sol1st.png", "./assets/sol2nd.png", "./assets/sol3rd.png"] }) => {
//     return (<Box bg="#E7E7E7" py={10} px={8} >
//         <Container maxW="100%">
//             {heading.map((item, index) => (
//                 <Text
//                     key={index}
//                     as="span"
//                     color={item.color}
//                     fontSize="48px"
//                     fontWeight="600"
//                     lineHeight="normal"
//                     whiteSpace="pre-wrap"
//                     // bg="red"
//                 >
//                     {item.text}{' '}
//                 </Text>
//             ))}

//             {/* Content Section */}
//             <Flex align="flex-start" mt={4} position="relative"> {/* Added position relative */}
//                 {/* Left Column (SVG + Text) */}
//                 <VStack align="start" spacing={6} maxW="40%" mt={16}> {/* Added top margin to push SVG+text down */}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 33 33" fill="none">
//                         <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
//                     </svg>
//                     <Text color="#000" fontSize="16px"
//                         fontStyle="normal"
//                         fontWeight="500"
//                         lineHeight="normal">
//                         {description}
//                     </Text>
//                     {/* New Box Below Text */}
//                     {/* <Box
//                 position="absolute"
//                 w="188px"
//                 h="188px"
//                 flexShrink={0}
//                 borderRadius="24px"
//                 bg="#BECEDC"
//                 top="73%"
//             // mt="52%"
//             >
//             </Box> */}
//                 </VStack>

//                 {/* Background Box Behind Images */}


//                 {/* Right Column (Images) */}


//                 <Flex gap="38px" ml="auto" mt={0} position="relative" zIndex={1}> {/* Ensuring images stay above */}
//                     {
//                         images.map((image, index) => (
//                             <>
//                                 <Box borderRadius="lg" overflow="hidden" w="306px" h="594px">
//                                     <Image
//                                         src={image}
//                                         alt="Surveillance Image 3"
//                                         w="305px"
//                                         h="552px"
//                                         objectFit="cover"
//                                     />
//                                 </Box>
//                             </>
//                         ))
//                     }
//                     {/* Card 3 */}

//                 </Flex>

//                 {/* Background Box Behind Images */}


//                 <Flex
//                     position="absolute"
//                     top="65%"
//                     gap={2}
//                     alignItems="flex-end"
//                     right={0}
//                 >
//                     <Box
//                         w="188px"
//                         h="188px"
//                         flexShrink={0}
//                         borderRadius="24px"
//                         bg="#BECEDC"
//                     // mt="52%"
//                     >
//                     </Box>
//                     <Box
//                         w="1244px"
//                         h="239px"
//                         flexShrink={0}
//                         borderRadius="24px"
//                         bg="#FFF"
//                         // transform="translateX(-50%)"
//                         zIndex={0}
//                     ></Box>

//                 </Flex>
//             </Flex>
//         </Container>
//     </Box>)
// }


// export default TripleImageSection;




import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);
const MotionText = motion(Text);

const TripleImageSection = ({
  heading = [
    { text: "AI-Powered", color: "#000" },
    { text: "Surveillance", color: "#3F77A5" },
    { text: "\nSolutions", color: "#DB7B3A" },
  ],
  description = "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management.",
  images = ["./assets/sol1st.png", "./assets/sol2nd.png", "./assets/sol3rd.png"],
}) => {

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1 }); // Triggers when 10% visible  

  return (
    <Box bg="#E7E7E7" py={10} px={8}>
      <Container maxW="100%">
        {/* Heading Animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }} // Start invisible and shifted left
          animate={ inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Only animates when visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          {heading.map((item, index) => (
            <MotionText
              key={index}
              as="span"
              color={item.color}
              fontSize="48px"
              fontWeight="600"
              lineHeight="normal"
              whiteSpace="pre-wrap"
            //   z-index="20"
            >
              {item.text}{" "}
            </MotionText>
          ))}
        </motion.div>

        {/* Content Section */}
        <Flex align="flex-start" mt={4} position="relative">
          {/* Left Column (SVG + Text) */}
          <VStack align="start" spacing={6} maxW="40%" mt={16}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 33 33" fill="none">
              <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5"/>
            </svg>
            <Text color="#000" fontSize="16px" fontWeight="500" lineHeight="normal">
              {description}
            </Text>
          </VStack>

          {/* Right Column (Images) */}
          <Flex gap="38px" ml="auto" mt={0} position="relative" zIndex={1}>
      {images.map((image, index) => (
        <Box key={index} borderRadius="lg" overflow="hidden" w="306px" h="594px">
          <MotionImage
            src={image}
            alt="Surveillance Image"
            w="305px"
            h="552px"
            objectFit="cover"
            initial={{ scale: 0.8, opacity: 1 }} // Starts slightly smaller but fully visible
            whileInView={{ scale: 1 }} // Pops to normal size
            viewport={{ once: false, amount: 0.2 }} // Triggers when 20% is visible
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.2 }} // Adds delay for each image
          />
        </Box>
      ))}
    </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TripleImageSection;
