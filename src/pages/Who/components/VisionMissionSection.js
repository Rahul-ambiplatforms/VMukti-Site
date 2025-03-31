import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../../components/Animation/Text/SubHeadingAnimation";

const VisionMissionSection = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            mt="1%"
            direction={{ base: "column", md: "row" }}
            gap={{ base: "4", md: "0" }}
        >
            <Box
                width="392px"
                height="392px"
                borderRadius="24px"
                bg="#FFF"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                boxShadow="md"
                p="4"
                mr={{ base: "0", md: "0.5%" }}
                mb={{ base: "4", md: "0" }}
            >
                <Box top="7%" left="7%">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                        {/* SVG content */}
                    </svg>
                </Box>
                <Flex direction="column" gap="50" mb="10">
                <HeadingAnimation>
                    <Text color="#3F77A5" fontSize="36px" fontWeight="700">
                        Vision
                    </Text>
                    </HeadingAnimation>
                    <SubHeadingAnimation>
                    <Text maxW="90%" color="#000000" fontSize="16px" fontWeight="500">
                        To redefine visual intelligence with AI-driven solutions that ensure safety, optimize
                        operations, and drive innovation globally.
                    </Text>
                    </SubHeadingAnimation>
                </Flex>
            </Box>
            <Box
                width="392px"
                height="392px"
                borderRadius="24px"
                bg="#C8D6E5"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                boxShadow="md"
                p="4"
                mb={{ base: "4", md: "0" }}
            >
                <Box top="8%" left="8%">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG content */}
                    </svg>
                </Box>
                <Flex direction="column" gap="50" mb="1">
                    <HeadingAnimation>
                    <Text color="#3F77A5" fontSize="36px" fontWeight="700">
                        Mission
                    </Text>
                    </HeadingAnimation>
                    <SubHeadingAnimation>
                    <Text maxW="90%" color="#000000" fontSize="16px" fontWeight="500">
                        To deliver cutting-edge surveillance and automation technologies that provide actionable
                        insights, seamless integration, and reliability, enhancing safety and efficiency across
                        industries.
                    </Text>
                    </SubHeadingAnimation>
                </Flex>
            </Box>
            <Box position="relative" width="fit-content">
                <Image
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    src="/assets/VMukti Brochure O2 1.png"
                    alt="VMukti Background"
                    zIndex={0}
                    objectFit="cover"
                    opacity={0.8}
                />
                <Image zIndex={1} position="relative" src="/assets/robowho.png" alt="VMukti" />
            </Box>
        </Flex>
    );
};

export default VisionMissionSection;
