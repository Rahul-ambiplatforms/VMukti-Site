import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      display="flex"
      borderRadius="24px"
      bgSize={{ base: "cover", md: "contain" }}
      bgPosition="center"
      bgRepeat="no-repeat"
      backgroundImage="url('../assets/WhoDash.png')"
      width="100%"
      aspectRatio={{ base: "57 / 50", md: "16 / 9" }}
      mt="2.2%"
    >
      <Box
        position="absolute"
        left={0}
        w="100%"
        h="100%"
        // bg="rgba(0, 0, 0, 0.05)"
        borderRadius="24px"
        zIndex={1} // Ensure overlay appears above the background
      />
      <Box
        mt={{ base: "2%", md: "4%" }}
        ml="2%"
        zIndex={2}
        p={{ base: 4, md: 8 }}
      >
        <Flex direction="column">
          {/* Heading */}
          <Box
            flex={2}
            maxWidth={{ base: "100%", md: "55%", lg: "60%", xl: "60%" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
            >
              <Heading
                fontSize={{
                  base: "24px",
                  sm: "32px",
                  md: "40px",
                  lg: "48px",
                }}
                color="#FFFFFF"
                fontWeight="600"
                mb={8}
                w="100%"
              >
                Pioneering AI-Driven Visual Intelligence Since 2007
              </Heading>
            </motion.div>
          </Box>
          {/* Desktop View */}
          <Box
            display={{ base: "none", md: "block" }}
            maxWidth={{ md: "55%", lg: "45%", xl: "40%" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.2 }} // Triggers animation when 10% of it is visible
            >
              <Flex gap="6" direction="column" spacing={6} color="#FFFFFF">
                <Box width="25px" height="25px" alignSelf="flex-start">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Text
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  fontWeight="500"
                  lineHeight="20px"
                  // mb="1%"
                >
                  Welcome to{" "}
                  <Text as="span" fontWeight="700">
                    VMukti Solutions
                  </Text>
                  , where{" "}
                  <Text as="span" fontWeight="700">
                    innovation meets intelligence
                  </Text>{" "}
                  to create a smarter, safer world. Headquartered in{" "}
                  <Text as="span" fontWeight="700">
                    Gujarat, India
                  </Text>
                  , VMukti is a leading{" "}
                  <Text as="span" fontWeight="700">
                    Original Equipment Manufacturer (OEM)
                  </Text>{" "}
                  and{" "}
                  <Text as="span" fontWeight="700">
                    System Integrator (SI)
                  </Text>{" "}
                  specializing in{" "}
                  <Text as="span" fontWeight="700">
                    smart surveillance
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    visual intelligence
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    video analytics
                  </Text>
                  , and{" "}
                  <Text as="span" fontWeight="700">
                    cloud-based security solutions
                  </Text>
                  .
                </Text>

                <Text
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  fontWeight="500"
                  lineHeight="20px"
                  maxW="100%"
                >
                  Since our inception in{" "}
                  <Text as="span" fontWeight="700">
                    2007
                  </Text>
                  , we’ve been at the forefront of AI-powered
                  transformation—delivering scalable, robust, and cost-effective
                  technologies that empower a wide range of sectors including{" "}
                  <Text as="span" fontWeight="700">
                    banking
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    education
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    healthcare
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    smart cities
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    infrastructure
                  </Text>
                  ,{" "}
                  <Text as="span" fontWeight="700">
                    retail
                  </Text>
                  , and{" "}
                  <Text as="span" fontWeight="700">
                    telecom
                  </Text>
                  .
                </Text>
              </Flex>
            </motion.div>
          </Box>
          {/* Mobile View */}
          <Box display={{ base: "block", md: "none" }}>
            <Box width="13px" height="13px" alignSelf="flex-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5C16.5 0.671573 15.8284 -2.38419e-07 15 -2.38419e-07C14.1716 -2.38419e-07 13.5 0.671573 13.5 1.5V13.5H1.5C0.671573 13.5 -2.38419e-07 14.1716 -4.76837e-07 15C-4.76837e-07 15.8284 0.671573 16.5 1.5 16.5H15ZM0.93934 3.06066L13.9393 16.0607L16.0607 13.9393L3.06066 0.93934L0.93934 3.06066Z"
                  fill="white"
                />
              </svg>
            </Box>
            <Text
              mt="3%"
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              color="#FFFFFF"
              fontWeight="500"
              width={{ base: "80%", md: "45%" }}
              textAlign="justify"
            >
              Got visuals piling up? Our AI turns them into answers—fast. It’s
              like giving your cameras a brain to spot what matters and fix your
              headaches on the spot.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
