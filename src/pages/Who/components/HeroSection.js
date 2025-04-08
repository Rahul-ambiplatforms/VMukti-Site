import React from "react";
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      // bg={{ base: "yellow", sm: "red", md: "blue", lg: "green", xl: "purple" }}
      minH={{ base: "40vh", md: "100vh" }}
      display="flex"
      borderRadius="24px"
      // bgImage="./assets/WhoDash.png"
      bgImage={`url(${process.env.PUBLIC_URL}/assets/WhoDash.png)`}
      bgSize="cover"
      bgPosition="center"
    // mt="6%"
    >
      <Box
        position="absolute"
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.05)"
        borderRadius="24px"
      />
      <Box mt="4%" ml="2%">
        <Flex direction="column" p={8} gap={12}>
          <Box flex={2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }} // Triggers animation when 10% of it is visible
            >
              <Heading
                fontSize={{
                  base: "24px",
                  sm: "30px",
                  md: "40px",
                  lg: "48px",
                }}
                color="#FFFFFF"
                fontWeight="600"
                mb={6}
                maxW="700px"
              >
                Building a Better Future Together.
              </Heading>
            </motion.div>
          </Box>
          <Box display={{ base: "none", md: "block" }} mt="-3%">
            <VStack spacing={6} align="start" color="#FFFFFF" maxW="33%">
            <Box
              width="25px"
              height="25px"
              alignSelf="flex-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                <path d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5C16.5 0.671573 15.8284 -2.38419e-07 15 -2.38419e-07C14.1716 -2.38419e-07 13.5 0.671573 13.5 1.5V13.5H1.5C0.671573 13.5 -2.38419e-07 14.1716 -4.76837e-07 15C-4.76837e-07 15.8284 0.671573 16.5 1.5 16.5H15ZM0.93934 3.06066L13.9393 16.0607L16.0607 13.9393L3.06066 0.93934L0.93934 3.06066Z" fill="white" />
              </svg>
            </Box>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }} // Triggers animation when 10% of it is visible
              >
                <Text
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  fontWeight="500"
                  mb="5%"
                >
                  At VMukti, we drive AI-powered surveillance, enhancing
                  security with advanced technology. Since 2007, we've provided
                  smart, cost-effective solutions.
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  fontWeight="500"
                >
                  As a trusted OEM and system integrator, we serve government
                  and private sectors across 25+ states proudly embodying the
                  "Make in India" vision with quality, security, and
                  scalability.
                </Text>
              </motion.div>
            </VStack>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <Box
              width="13px"
              height="13px"
              alignSelf="flex-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5C16.5 0.671573 15.8284 -2.38419e-07 15 -2.38419e-07C14.1716 -2.38419e-07 13.5 0.671573 13.5 1.5V13.5H1.5C0.671573 13.5 -2.38419e-07 14.1716 -4.76837e-07 15C-4.76837e-07 15.8284 0.671573 16.5 1.5 16.5H15ZM0.93934 3.06066L13.9393 16.0607L16.0607 13.9393L3.06066 0.93934L0.93934 3.06066Z" fill="white" />
              </svg>
            </Box>
            <Text mt="5%" fontSize={"12px"} color="#FFFFFF" fontWeight="500">Got visuals piling up? Our AI turns them into answers—fast. It’s like giving your cameras a brain to spot what matters and fix your headaches on the spot.</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
