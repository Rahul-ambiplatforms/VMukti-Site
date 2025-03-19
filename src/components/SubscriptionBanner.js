import { useState } from "react";
import { Flex, Box, Text, Input, Button, Image } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const SubscriptionBanner = ({ bgColor = "white" }) => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

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
            mb="20px"
            boxShadow="lg"
            alignItems="center"
            _hover={{ boxShadow: "xl", transform: "scale(1.01)", transition: "all 0.3s ease" }}
            p={{ base: "20px", md: "30px" }} // Responsive padding
            direction={{ base: "column", md: "row" }} // Stack vertically on small screens
        >
            {/* Image Positioned Outside the Box */}
            <Box
                position={{ base: "relative", md: "absolute" }} // Relative on small screens, absolute on larger screens
                left={{ base: "0", md: "0px" }}
                bottom={{ base: "0", md: "0px" }}
                width={{ base: "200px", md: "368px" }} // Smaller image on small screens
                height={{ base: "auto", md: "368px" }}
                flexShrink="0"
                zIndex="1"
                mb={{ base: "20px", md: "0" }} // Add margin at the bottom on small screens
            >
                <Image src="/assets/robot.png" alt="AI Robot" width="100%" height="auto" />
            </Box>

            {/* Content Section */}
            <Flex
                flexGrow={1}
                ml={{ base: "0", md: "auto" }} // No margin on small screens
                pl={{ base: "0", md: "350px" }} // No padding on small screens
                pr={{ base: "0", md: "20px" }} // No padding on small screens
                alignItems="center"
                justifyContent="space-between"
                direction={{ base: "column", md: "row" }} // Stack vertically on small screens
                textAlign={{ base: "center", md: "left" }} // Center text on small screens
            >
                <Text
                    color="black"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize={{ base: "24px", md: "48px" }} // Smaller font size on small screens
                    fontWeight="400"
                    letterSpacing="-0.72px"
                    mb={{ base: "20px", md: "0" }} // Add margin at the bottom on small screens
                >
                    Subscribe to{" "}
                    <Text as="span" color="#3F77A5">
                        Our Newsletter
                    </Text>
                </Text>

                {/* Email Input Section */}
                <Flex direction="column" width={{ base: "100%", md: "auto" }}>
                    <Flex
                        mt="20px"
                        width={{ base: "100%", md: "611px" }} // Full width on small screens
                        height="56px"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="20px"
                        bg="gray.50"
                        alignItems="center"

                        _hover={{ borderColor: "#3F77A5" }}
                    >
                        <Flex
                            padding="12px 20px"
                            width={{ base: "100%", md: "611px" }}
                        >
                            <EmailIcon mr="10px" w="20px" h="auto" />
                            <Input
                                type="email"
                                placeholder="Your Email"
                                border="none"
                                outline="none"
                                bg="transparent"
                                width="100%"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Flex>
                        <Button
                            width={{ base: "154.639px", md: "146px" }} // Smaller button on small screens
                            height={{ base: "33px", md: "50px" }}
                            // display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            bg="#3F77A5"
                            color="white"
                            borderRadius="20px"
                            _hover={{ bg: "#2c5a7a" }}
                            onClick={handleSubscribe}


                        >
                            {isSubscribed ? "Subscribed!" : "Subscribe"}
                            <Image src="/assets/arrowupr.svg" alt="Arrow Up" width="14px" height="14px" />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SubscriptionBanner;