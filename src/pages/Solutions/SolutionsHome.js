import React from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    Container,
    SimpleGrid,
    Flex,
    List,
    ListItem,
} from '@chakra-ui/react';

const SolutionDash = () => {
    // Reusable styles for blur containers
    const blurContainerStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '24px', // Updated to 24px
        backdropFilter: 'blur(5px)',
    };

    // Key features list
    const keyFeatures = [
        'Tailored Deployment',
        'Advanced Admin Control',
        'Comprehensive Camera & User Management',
        'Flexible Storage & Recording Options',
        'AI-Powered Surveillance',
        'High-Security & Compliance: STQC-certified encryption',
    ];

    // Business benefits list
    const businessBenefits = [
        'Cost-Effective Ownership',
        'Enhanced Security & Compliance',
        'Operational Efficiency',
        'Scalability & Adaptability',
    ];

    return (
        <Box minHeight="100vh" pt="60px">
            {/* Main Container with Equal Spacing & Shadow */}
            <Box
                mx={{ base: 4, md: 8, lg: 16 }}
                boxShadow="2xl"
                borderRadius="24px" // Updated to 24px
                bg="white"
                p={{ base: 2, md: 4, lg: 8 }}
            >
                <Box position="relative" overflow="hidden">
                    <Container maxW="container.xl" position="relative">
                        <Flex direction={{ base: 'column', lg: 'row' }} position="relative">
                            {/* Left Content Section */}
                            <Box flex={1} position="relative" zIndex={2} transform={{ lg: "translateX(-8%)" }}>
                                {/* White Container with Blur - Title and Description */}
                                <Box position="relative" mb={6} mr={{ lg: "-20%" }} zIndex={2}>
                                    {/* Blur Background */}
                                    <Box
                                        {...blurContainerStyles}
                                        bg="white"
                                        opacity={0.85}
                                        boxShadow="xl"
                                    />

                                    {/* Content */}
                                    <Box position="relative" p={{ base: 6, md: 8 }} borderRadius="24px" border="1px solid" borderColor="gray.100"> {/* Updated to 24px */}
                                        <VStack align="stretch" spacing={4}>
                                            <Heading fontSize={{ base: "26px", md: "36px" }} fontWeight="500" lineHeight="normal" color="#000">
                                                Enterprise Management System{' '}
                                                <Text as="span" color="orange.500">
                                                    (EMS)
                                                </Text>
                                            </Heading>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33 33" fill="none">
                                                <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
                                            </svg>

                                            <Text fontSize={{ base: "14px", md: "16px" }} color="#000" lineHeight="normal" textAlign="justify">
                                                EMS is a custom-built Video Management System (VMS) designed
                                                for large-scale enterprises, banks, manufacturing plants, and
                                                government institutions. Unlike generic VMS platforms, VMukti
                                                EMS provides complete ownership and control through a one-time
                                                deployment fee, allowing organizations to independently manage
                                                their security infrastructure.
                                            </Text>
                                        </VStack>
                                    </Box>
                                </Box>

                                {/* Blue Container with Blur - Key Features */}
                                <Box position="relative" zIndex={1} mr={{ lg: "-20%" }} mt={{ lg: "5%" }} mb={{ base: "5%" }}>
                                    {/* Blur Background */}
                                    <Box
                                        {...blurContainerStyles}
                                        bg="#BECEDC"
                                        opacity={0.9}
                                        boxShadow="lg"
                                    />

                                    {/* Content */}
                                    <Box position="relative" p={{ base: 4, md: 6 }} borderRadius="24px"> {/* Updated to 24px */}
                                        <Text fontWeight="600" mb={2} fontSize={{ base: "14px", md: "16px" }} color="#000">
                                            Key Features:
                                        </Text>
                                        <List spacing={2}>
                                            {keyFeatures.map((feature, index) => (
                                                <ListItem key={index} display="flex" alignItems="center" gap={2} color="#000" fontSize={{ base: "12px", md: "14px" }}>
                                                    <Box w="6px" h="6px" borderRadius="24px" bg="#000" /> {/* Updated to 24px */}
                                                    {feature}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Right Section - Camera Grid Image */}
                            <Box flex={2} position="relative" zIndex={1} w={{ base: "100%", lg: "80%" }} ml={{ lg: "-15%" }} transform={{ lg: "translateX(4%)" }}>
                                <Box position="relative" h={{ base: "300px", md: "400px", lg: "588px" }} maxH={{ xl: "700px" }} role="group" overflow="hidden" borderRadius="24px"> {/* Updated to 24px */}
                                    <Image
                                        src="./assets/SolutionDash.png"
                                        alt="Surveillance Grid"
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        transition="transform 0.3s ease"
                                        _groupHover={{ transform: 'scale(1.02)' }}
                                    />
                                </Box>
                            </Box>
                        </Flex>

                        {/* Business Benefits Section */}
                        <Box mt={{ base: 4, lg: "5%" }} position="relative" zIndex={3}>
                            <Text textAlign="center" fontSize={{ base: "20px", md: "24px" }} fontWeight="500" mb={{ base: 6, md: 8 }} color="gray.800">
                                Business Benefits
                            </Text>
                            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }}>
                                {businessBenefits.map((benefit, index) => (
                                    <VStack key={index} spacing={4} bg="white" borderRadius="24px" boxShadow="lg" // Updated to 24px
                                        _hover={{
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'xl',
                                        }}
                                        transition="all 0.2s"
                                        height="100%"
                                        justify="center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="33" viewBox="0 0 39 33" fill="none">
                                            <path d="M29.1375 10.2183L26.1928 5.04522L24.3189 5.94059C22.5172 4.0433 20.2135 2.70739 17.6826 2.08916L17.5276 0H11.61L11.455 2.08916C8.92411 2.70739 6.62032 4.0433 4.81865 5.94059L2.95882 5.04522L0 10.2183L1.70482 11.3837C0.958094 13.9099 0.958094 16.6032 1.70482 19.129L0 20.2944L2.95882 25.4675L4.81865 24.5579C6.61509 26.4641 8.92051 27.8071 11.455 28.4236L11.61 30.5127H17.5276L17.6826 28.4236C18.3272 28.2708 18.9594 28.0665 19.5706 27.8124C18.5861 24.7569 18.9207 21.426 20.49 18.6314C22.061 15.8352 24.7221 13.8348 27.8269 13.1172C27.7336 12.5309 27.6015 11.9518 27.4324 11.3833L29.1375 10.2183ZM14.611 13.8281C16.4568 13.869 18.0207 15.2138 18.3518 17.0471C18.6829 18.8786 17.6914 20.6924 15.9777 21.3888C16.337 23.8013 13.0559 24.0624 13.1598 21.6446H12.103C11.3334 21.634 10.7152 20.9998 10.7152 20.2234C10.7152 19.4471 11.3334 18.8129 12.103 18.8023H14.5688C14.8488 18.7987 15.1183 18.6832 15.3137 18.4807C15.5092 18.2782 15.6184 18.0046 15.6149 17.7222C15.6114 17.4397 15.4951 17.1679 15.2943 16.9707C15.0918 16.7735 14.8206 16.6652 14.5405 16.6705C12.693 16.6403 11.1221 15.3008 10.7857 13.4675C10.451 11.6342 11.4443 9.81685 13.1598 9.124C12.7987 6.69375 16.0834 6.43262 15.9777 8.86818H17.0344C17.8041 8.87884 18.424 9.51306 18.424 10.2894C18.424 11.0657 17.8041 11.6999 17.0344 11.7105H14.5687C14.2887 11.7123 14.0192 11.8278 13.8238 12.0303C13.6283 12.2346 13.5208 12.5082 13.5261 12.7907C13.5332 13.0749 13.6511 13.3431 13.8537 13.5385C14.058 13.7322 14.331 13.837 14.611 13.8281ZM27.968 16.0168C18.6264 18.8875 20.4159 32.8008 30.3914 33C32.887 33.0035 35.2612 31.9146 36.8974 30.012C38.5318 28.1111 39.268 25.5867 38.9122 23.0961C38.5565 20.6037 37.1457 18.3901 35.0446 17.033C32.9435 15.674 30.3612 15.3026 27.968 16.0168ZM33.9843 23.8335L30.9973 26.8322C30.7367 27.104 30.3791 27.2586 30.004 27.2586C29.6289 27.2586 29.2714 27.104 29.0107 26.8322L26.8268 24.6293C26.2932 24.0733 26.3002 23.1886 26.8427 22.6415C27.3851 22.0943 28.2622 22.0872 28.8134 22.6255L29.997 23.8193L31.9836 21.8296C32.5349 21.2878 33.4137 21.2931 33.9596 21.8403C34.5056 22.3856 34.5162 23.2739 33.9843 23.8335Z" fill="#3F77A5" />
                                        </svg>
                                        <Text textAlign="center" fontSize={{ base: "12px", md: "14px" }} fontWeight="500" color="gray.700">
                                            {benefit}
                                        </Text>
                                    </VStack>
                                ))}
                            </SimpleGrid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

export default SolutionDash;