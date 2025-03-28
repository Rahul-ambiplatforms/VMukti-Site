import React from "react";
import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import Certifications from "../../../data/certificationsConstData";

const CertificationsSection = () => {
    return (
        <Box py={12} bg="#E7E7E7" position="relative">
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
            <Box position="absolute" top="0%" left="30%" width="60%" opacity={0.8} zIndex={0}>
                <Image src="/assets/VMukti Brochure O2 2.png" alt="VMukti Brochure" width="100%" height="100%" objectFit="contain" />
            </Box>
            <Flex
                zIndex="3"
                gap={{ sm: "-10px", base: "5px", md: "50px" }}
                flexWrap="wrap"
                justifyContent="center"
                maxW="1200px"
                mx="auto"
            >
                {Certifications.map((cert, index) => (
                    <Flex
                        key={index}
                        direction="column"
                        align="center"
                        justify="center"
                        p={4}
                        bg="#fff"
                        borderRadius="24px"
                        maxH="170px"
                        maxW="170px"
                        textAlign="center"
                        flexBasis={{
                            base: "calc(50% - 10px)",
                            md: index < 5 ? "18%" : "20%",
                        }}
                        m="5px"
                        zIndex="3"
                    >
                        <Box mb={3} color={cert.color}>
                            {cert.icon}
                        </Box>
                        <Text fontSize={{ base: "12px", md: "16px" }} fontWeight="bold" color="gray.700" mb={1}>
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
    );
};

export default CertificationsSection;
