import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Divider,
    useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from "framer-motion"; // Add Framer Motion for animations

const MotionBox = motion(Box); // Motion-enabled Box

const VideoAnalytics = () => {
    const [featureIndex, setFeatureIndex] = useState(0);

    // Example features (can be expanded)
    const features = [
        {
            title: "Conversational AI for Video",
            description: "Enables natural language interaction with surveillance data."
        },
        {
            title: "Custom AI Queries",
            description: "Generate customized video insights using AI-powered queries."
        },
        {
            title: "Instant Reporting",
            description: "Quickly analyze video data and extract key information."
        },
        {
            title: "Instant Reporting",
            description: "Quickly analyze video data and extract key information."
        }
    ];

    // Handlers for navigation buttons
    const handleNext = () => {
        setFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    const handlePrevious = () => {
        setFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    };

    // Responsive values
    const containerWidth = useBreakpointValue({ base: "100%", md: "1446px" });
    const containerHeight = useBreakpointValue({ base: "auto", md: "856px" });
    const padding = useBreakpointValue({ base: "20px", md: "40px" });
    const featureCardWidth = useBreakpointValue({ base: "100%", md: "469px" });
    const featureCardHeight = useBreakpointValue({ base: "auto", md: "511px" });
    const deviceImageWidth = useBreakpointValue({ base: "100%", md: "542.343px" });
    const deviceImageHeight = useBreakpointValue({ base: "auto", md: "511px" });

    return (
        <Box

            width={containerWidth}
            height={containerHeight}
            borderRadius="20px"
            bgColor="#3F77A5"
            marginLeft={{ base: "0", md: "33px" }}
            marginRight={{ base: "0", md: "33px" }}
            overflow="hidden"
        >
            <Flex
                height="100%"
                padding={padding}
                position="relative"
                direction={{ base: "column", md: "row" }} // Stack vertically on small screens
            >
                {/* Left Section with Title and Menu */}
                <Box
                    flex={{ base: "1", md: "0 0 40%" }}
                    color="white"
                    paddingTop={{ base: "10px", md: "20px" }}
                    textAlign={{ base: "center", md: "left" }} // Center text on small screens
                >
                    <Text
                        color="#FFF"
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize={{ base: "24px", md: "36px" }} // Smaller font size on small screens
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                        letterSpacing="-0.54px"
                    >
                        GPT-Powered
                        <br />
                        Video Analytics & Insights
                    </Text>

                    <Divider width="90%" borderBottomWidth="0.5px" borderColor="white" mt={{ base: "20px", md: "38px" }} />

                    {/* Navigation Buttons */}
                    <Flex
                        width="100px"
                        gap="2.46px"
                        mt="25px"
                        ml="410px"
                        justifyContent={{ base: "center", md: "flex-start" }} // Center buttons on small screens
                    >
                        <Button
                            width="40px"
                            height="40px"
                            bgColor="white"
                            borderRadius="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="#4682B4"
                            _hover={{ bgColor: "#E0E0E0" }}
                            onClick={handlePrevious}
                        >
                            &#9664;
                        </Button>
                        <Button
                            width="40px"
                            height="40px"
                            bgColor="white"
                            borderRadius="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="#4682B4"
                            _hover={{ bgColor: "#E0E0E0" }}
                            onClick={handleNext}
                        >
                            &#9654;
                        </Button>
                    </Flex>

                    {/* Feature List */}
                    <Box marginTop="20px">
                        {features.map((feature, index) => (
                            <Text
                                key={index}
                                padding="10px 0"
                                fontSize={{ base: "14px", md: "15px" }} // Smaller font size on small screens
                                color={index === featureIndex ? "white" : "rgba(255, 255, 255, 0.6)"}
                                fontWeight={index === featureIndex ? "bold" : "normal"}
                                position="relative"
                                cursor="pointer"
                                _hover={{ textDecoration: "underline" }}
                                onClick={() => setFeatureIndex(index)}
                            >
                                {index === featureIndex && (
                                    <Box as="span" position="absolute" left="-20px" fontSize="12px">
                                        ▶
                                    </Box>
                                )}
                                {feature.title}
                            </Text>
                        ))}
                    </Box>
                </Box>

                {/* Right Section with Feature Card and Devices */}
                <Box
                    flex={{ base: "1", md: "0 0 60%" }}
                    position="relative"
                    marginTop={{ base: "20px", md: "171px" }}
                    ml={{ base: "0", md: "23px" }}
                >
                    {/* Animated Feature Card */}
                    <MotionBox
                        width={featureCardWidth}
                        height={featureCardHeight}
                        flexShrink={0}
                        borderRadius={{ base: "24px 24px 0px 0px", md: "24px 0px 0px 24px" }}
                        bgColor="white"
                        padding="25px"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Text color="black" fontSize={{ base: "14px", md: "16px" }} fontWeight="700" letterSpacing="-0.24px">
                            {features[featureIndex].title}
                        </Text>
                        <Text width={{ base: "100%", md: "219px" }} color="#696969" fontSize={{ base: "12px", md: "14px" }} fontWeight="500" letterSpacing="-0.21px" marginTop="10px">
                            {features[featureIndex].description}
                        </Text>
                    </MotionBox>

                    {/* Device Image */}
                    <Box
                        width={deviceImageWidth}
                        height={deviceImageHeight}
                        flexShrink={0}
                        position={{ base: "relative", md: "absolute" }}
                        right="0"
                        bottom={{ base: "0", md: "94px" }}
                        borderRadius="24px"
                        bgColor="#F3F3F3"
                        mt={{ base: "20px", md: "0" }}
                    >
                        <Image src="/assets/ipad.png" alt="iPad" marginTop={{ base: "0", md: "-80px" }} width="100%" height="auto" />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default VideoAnalytics;