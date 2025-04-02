import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionTextContainer = motion(VStack);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const TripleImageSection = ({
    heading = [
        { text: "AI-Powered", color: "#000" },
        { text: "Surveillance", color: "#3F77A5" },
        { text: "\nSolutions", color: "#DB7B3A" },
    ],
    description = "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management.",
    images = [
        "./assets/speech_image.png",
        "./assets/soldier_image.png",
        "./assets/patient_image.png",
    ],
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.1 }); // Triggers when 10% visible

    return (
        <Box bg="#E7E7E7" mb={10} >
            {/* Heading Animation */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0.5, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {heading.map((item, index) => (
                    <MotionText
                        key={index}
                        as="span"
                        color={item.color}
                        fontSize={{ base: "24px", md: "36px", lg: "48px" }}
                        fontWeight="600"
                        lineHeight="normal"
                        whiteSpace="pre-wrap"
                    >
                        {item.text}{" "}
                    </MotionText>
                ))}
            </motion.div>

            {/* Content Section */}
            <Flex
                align="flex-start"
                mt={4}
                position="relative"
                flexDirection={{ base: "column", md: "row" }}
                gap={{ base: 6, md: 8 }}
            >
                {/* Left Column (Animated Text & Icon) */}
                <MotionTextContainer
                    align="start"
                    spacing={6}
                    maxW={{ base: "100%", md: "50%", lg: "40%" }}
                    mt={{ base: 8, md: 16 }}
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="25px"
                        viewBox="0 0 33 33"
                        fill="none"
                    >
                        <path
                            d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                            fill="#3F77A5"
                        />
                    </svg>
                    <MotionText
                        color="#000"
                        fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                        fontWeight="500"
                        lineHeight="normal"
                    >
                        {description}
                    </MotionText>
                </MotionTextContainer>

                {/* Right Column (Animated Images) */}
                <Flex
                    gap={{ base: "16px", md: "24px", lg: "38px" }}
                    ml={{ base: 0, md: "auto" }}
                    mt={{ base: 6, md: 0 }}
                    position="relative"
                    zIndex={1}
                    flexWrap={{ base: "wrap", md: "nowrap" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                >
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            borderRadius="20px"
                            overflow="hidden"
                            w={{ base: "150px", sm: "200px", md: "250px", lg: "306px" }}
                            h={{ base: "300px", sm: "400px", md: "500px", lg: "594px" }}
                        >
                            <MotionImage
                                src={image}
                                alt="Surveillance Image"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                initial={{ scale: 0.8, opacity: 1 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                            />
                        </Box>
                    ))}
                </Flex>
                <Box
                    position="absolute"
                    top="40%"
                    // left="40%"
                    right="0"
                    bottom="0"
                    // opacity="0.8"
                    width="1050px"
                    height="525px"
                    //rotate the image
                    // transform="rotate(-20deg)"
                    // bg={"red"} 
                    zIndex="0"
                    backgroundImage="url('/assets/VMukti Brochure O2 1.svg')"
                    backgroundRepeat="no-repeat"
                />

                {/* Absolute Positioned Elements */}
                <Flex
                    position="absolute"
                    top={{ base: "auto", md: "65%" }}
                    bottom={{ base: "10%", md: "auto" }}
                    gap={4}
                    alignItems="flex-end"
                    flexDirection={{ base: "column", md: "row" }}
                    left={{ base: "50%", md: "auto" }}
                    transform={{ base: "translateX(-50%)", md: "none" }}
                >
                    <Box
                        w={{ base: "80px", sm: "100px", md: "150px", lg: "204px" }}
                        h={{ base: "80px", sm: "100px", md: "150px", lg: "204px" }}
                        borderRadius="24px"
                        bg="#BECEDC"
                    ></Box>
                    <Box
                        w={{ base: "90%", md: "80%", lg: "1244px" }}
                        h={{ base: "100px", sm: "120px", md: "180px", lg: "239px" }}
                        flexShrink={0}
                        borderRadius="24px"
                        bg="#FFF"
                        zIndex={0}
                    ></Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TripleImageSection;
