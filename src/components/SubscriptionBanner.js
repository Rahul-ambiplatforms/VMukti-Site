import { useState } from "react";
import { Flex, Box, Text, Input, Button, Image, useBreakpointValue } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const SubscriptionBanner = ({ bgColor = "white" }) => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Responsive values
    const headingSize = useBreakpointValue({ base: "20px", md: "32px", lg: "48px" });
    const inputWidth = useBreakpointValue({ base: "100%", md: "600px", lg: "800px" });
    const buttonWidth = useBreakpointValue({ base: "120px", md: "130px", lg: "146px" });
    const buttonHeight = useBreakpointValue({ base: "40px", md: "45px", lg: "50px" });
    const imageSize = useBreakpointValue({ base: "150px", md: "250px", lg: "368px" });

    const handleSubscribe = () => {
        if (email.trim() !== "") {
            setIsSubscribed(true);
        }
    };

    return (
        <Flex
            position="relative"
            bg={bgColor}
            borderRadius="15px"
            overflow="visible"
            mb={{ base: "10px", md: "15px", lg: "20px" }}
            boxShadow="lg"
            alignItems="center"
            _hover={{ boxShadow: "xl", transform: "scale(1.01)", transition: "all 0.3s ease" }}
            p={{ base: "15px", md: "20px", lg: "30px" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "15px", md: "20px", lg: "30px" }}
        >
            {/* Image Section */}
            <Box
                position={{ base: "relative", md: "absolute" }}
                left={{ base: "0", md: "0" }}
                bottom={{ base: "0", md: "0" }}
                width={imageSize}
                height={{ base: "auto", md: imageSize }}
                flexShrink="0"
                zIndex="1"
                mb={{ base: "10px", md: "0" }}
            >
                <Image
                    src="./assets/robot.png"
                    alt="AI Robot"
                    width="100%"
                    height="auto"
                    objectFit="contain"
                />
            </Box>

            {/* Content Section */}
            <Flex
                flexGrow={1}
                ml={{ base: "0", md: "auto" }}
                pl={{ base: "0", md: "300px", lg: "350px" }}
                pr={{ base: "0", md: "15px", lg: "20px" }}
                alignItems="center"
                justifyContent="space-between"
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                gap={{ base: "15px", md: "20px", lg: "30px" }}
            >
                <Text
                    color="black"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize={headingSize}
                    fontWeight="400"
                    letterSpacing="-0.72px"
                    mb={{ base: "10px", md: "0" }}
                >
                    Subscribe to{" "}
                    <Text as="span" color="#3F77A5">
                        Our Newsletter
                    </Text>
                </Text>

                {/* Email Input Section */}
                <Flex
                    direction="column"
                    width={{ base: "100%", md: "auto" }}
                    maxW={{ base: "100%", md: inputWidth }}
                >
                    <Flex
                        mt={{ base: "10px", md: "15px", lg: "20px" }}
                        width="100%"
                        height={{ base: "45px", md: "50px", lg: "56px" }}
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="20px"
                        bg="gray.50"
                        alignItems="center"
                        _hover={{ borderColor: "#3F77A5" }}
                    >
                        <Flex
                            padding={{ base: "8px 15px", md: "10px 25px", lg: "12px 30px" }}
                            width="100%"
                            flexGrow={1}
                        >
                            <EmailIcon
                                mr={{ base: "8px", md: "15px", lg: "20px" }}
                                w={{ base: "16px", md: "20px" }}
                                h="auto"
                            />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                border="none"
                                outline="none"
                                bg="transparent"
                                width="100%"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fontSize={{ base: "14px", md: "15px" }}
                                _placeholder={{ color: "gray.500" }}
                            />
                        </Flex>
                        <Button
                            width={buttonWidth}
                            height={buttonHeight}
                            justifyContent="space-between"
                            alignItems="center"
                            bg="#3F77A5"
                            color="white"
                            borderRadius="20px"
                            _hover={{ bg: "#2c5a7a" }}
                            onClick={handleSubscribe}
                            px={{ base: "12px", md: "15px", lg: "20px" }}
                            flexShrink={0}
                            ml={{ base: "5px", md: "10px", lg: "15px" }}
                        >
                            {isSubscribed ? "Subscribed!" : "Subscribe"}
                            <Image
                                src="/assets/arrowupr.svg"
                                alt="Arrow Up"
                                width={{ base: "12px", md: "13px", lg: "14px" }}
                                height={{ base: "12px", md: "13px", lg: "14px" }}
                            />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SubscriptionBanner;