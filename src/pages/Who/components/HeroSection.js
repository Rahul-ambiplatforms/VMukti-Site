import React from "react";
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      borderRadius="24px"
      bgImage="./assets/WhoDash.png"
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
          <Box mt="-3%">
            <VStack spacing={6} align="start" color="#FFFFFF" maxW="33%">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                {/* SVG content */}
              </svg>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ amount: 0.2 }} // Triggers animation when 10% of it is visible
              >
                <Text
                  fontSize={{ base: "12px", md: "16px", lg: "16px" }}
                  fontWeight="500"
                  mb="5%"
                >
                  At VMukti, we drive AI-powered surveillance, enhancing
                  security with advanced technology. Since 2007, we've provided
                  smart, cost-effective solutions.
                </Text>
                <Text
                  fontSize={{ base: "12px", md: "16px", lg: "16px" }}
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
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
