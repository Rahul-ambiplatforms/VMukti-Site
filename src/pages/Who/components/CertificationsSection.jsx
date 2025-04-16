import React from "react";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CertificationsData from "../../../data/certificationsConstData";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import { easeOut } from "framer-motion";

const CertificationsSection = () => {
    return (
        <Box
            py={12}
            position="relative" // To position the background image
        >
            <HeadingAnimation>
                <Heading
                    textAlign="center"
                    mb={10}
                    fontSize={{ base: "2xl", md: "36px" }}
                    fontWeight="600"
                    lineHeight="normal"
                    color="#000"
                    zIndex={1}
                >
                    Our Certifications
                </Heading>
            </HeadingAnimation>

            {/* Background Image in the Top Right Corner */}
            <Box
                position="absolute"
                top={{ base: "20%", md: "0%" }}
                left={{ base: "5%", md: "30%" }}
                width="60%"
                opacity={0.8}
                zIndex={0}
            >
                <Image
                    src={`${process.env.PUBLIC_URL}/assets/BannerBroucher.png`}
                    alt="VMukti Brochure"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                />
            </Box>

            <Box
                position="absolute"
                left={{ base: "50%", md: "20%", lg: "12%" }}
                top={{ base: "5%", md: "7%", lg: "9%" }}
                transform={{ base: "translateX(-50%)", md: "none", lg: "none" }}
                width={{
                    base: "200px",
                    md: "300px",
                    lg: "408px",
                }}
                height={{
                    base: "200px",
                    md: "300px",
                    lg: "408px",
                }}
                borderRadius="408px"
                opacity="0.12"
                background="#3F77A5"
                filter="blur(56.6px)"
                flexShrink={0}
                pointerEvents="none"
                zIndex="0"
            />

            <Box justifyContent="center" alignItems="center">
                <Flex
                    zIndex="3"
                    gap={{ sm: "-10px", base: "5px", md: "50px" }}
                    flexWrap="wrap"
                    justifyContent={{ base: "center", md: "center" }}
                    maxW="1200px"
                    mx="auto"
                >
                    {CertificationsData.map((cert, index) => (
                        <Flex
                            as={motion.div}
                            key={index}
                            direction="column"
                            align="center"
                            justify="center"
                            p={{ base: "2", md: "4" }}
                            bg="#fff"
                            borderRadius="24px"
                            maxH="170px"
                            maxW="170px"
                            textAlign="center"
                            flexBasis={{
                                base: "calc(50% - 10px)",
                                md: index < 5 ? "18%" : "20%",
                            }}
                            m={{ base: "3px", md: "5px" }}
                            zIndex="3"
                            // Animation props
                            initial={{ scale: 0.1, opacity: 0.5 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                duration: 1.9,
                                ease: easeOut,
                                delay: 0.1 * index,
                            }}
                        >
                            <Box mb={3} color={cert.color}>
                                {cert.icon}
                            </Box>
                            <Text
                                fontSize={{ base: "12px", md: "16px" }}
                                fontWeight="bold"
                                color="gray.700"
                                mb={1}
                            >
                                {cert.name}
                            </Text>
                            {cert.description && (
                                <Text fontSize={{ base: "sm", md: "16px" }} color="gray.600">
                                    {cert.description}
                                </Text>
                            )}
                        </Flex>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default CertificationsSection;