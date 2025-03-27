import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';
import SolutionEMS from './SolutionEMS';

const Hero = () => {
    return (
        <Box>
            <Box bg="#E7E7E7" py={10} px={8} >
                <Container maxW="100%">
                    {/* Heading Section (above everything) */}
                    <VStack align="start" spacing={4}>
                        <Heading as="h1" size="xl">
                            <Text as="span" color="#000" fontSize="48px" fontWeight="600" lineHeight="normal">
                                AI-Powered{' '}
                            </Text>
                            <Text as="span" color="#3F77A5" fontSize="48px" fontWeight="600" lineHeight="normal">
                                Surveillance
                            </Text>
                        </Heading>
                        <Heading as="h2" size="lg" color="#DB7B3A" fontSize="48px" fontWeight="600" lineHeight="normal">
                            Solutions
                        </Heading>
                    </VStack>

                    {/* Content Section */}
                    <Flex align="flex-start" mt={4} position="relative"> {/* Added position relative */}
                        {/* Left Column (SVG + Text) */}
                        <VStack align="start" spacing={6} maxW="40%" mt={16}> {/* Added top margin to push SVG+text down */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 33 33" fill="none">
                                <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
                            </svg>
                            <Text color="#000" fontSize="16px"
                                fontStyle="normal"
                                fontWeight="500"
                                lineHeight="normal">
                                Unlock smarter security with AI-driven surveillance solutions for real-time monitoring,
                                proactive threat detection, and seamless video management. Enhance safety and efficiency
                                with scalable, future-ready technology.
                            </Text>
                            {/* New Box Below Text */}
                            {/* <Box
                            position="absolute"
                            w="188px"
                            h="188px"
                            flexShrink={0}
                            borderRadius="24px"
                            bg="#BECEDC"
                            top="73%"
                        // mt="52%"
                        >
                        </Box> */}
                        </VStack>

                        {/* Background Box Behind Images */}


                        {/* Right Column (Images) */}


                        <Flex gap="38px" ml="auto" mt={0} position="relative" zIndex={1}> {/* Ensuring images stay above */}
                            {/* Card 1 */}
                            <Box borderRadius="lg" overflow="hidden" w="306px" h="594px">
                                <Image
                                    src="./assets/sol1st.png"
                                    alt="Surveillance Image 1"
                                    w="305px"
                                    h="552px"
                                    objectFit="cover"
                                />
                            </Box>

                            {/* Card 2 */}
                            <Box borderRadius="lg" overflow="hidden" w="306px" h="594px">
                                <Image
                                    src="./assets/sol2nd.png"
                                    alt="Surveillance Image 2"
                                    w="305px"
                                    h="552px"
                                    objectFit="cover"
                                />
                            </Box>

                            {/* Card 3 */}
                            <Box borderRadius="lg" overflow="hidden" w="306px" h="594px">
                                <Image
                                    src="./assets/sol3rd.png"
                                    alt="Surveillance Image 3"
                                    w="305px"
                                    h="552px"
                                    objectFit="cover"
                                />
                            </Box>
                        </Flex>

                        {/* Background Box Behind Images */}


                        <Flex
                            position="absolute"
                            top="65%"
                            gap={2}
                            alignItems="flex-end"
                            right={0}
                        >
                            <Box
                                w="188px"
                                h="188px"
                                flexShrink={0}
                                borderRadius="24px"
                                bg="#BECEDC"
                            // mt="52%"
                            >
                            </Box>
                            <Box
                                w="1244px"
                                h="239px"
                                flexShrink={0}
                                borderRadius="24px"
                                bg="#FFF"
                                // transform="translateX(-50%)"
                                zIndex={0}
                            ></Box>

                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <SolutionEMS />
        </Box>

    );
};

export default Hero;