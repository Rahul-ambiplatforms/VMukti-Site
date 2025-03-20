import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const nodes = [
    { label: "Image", position: "15%", side: "left" },
    { label: "Video", position: "30%", side: "left" },
    { label: "Live links", position: "45%", side: "left" },
    { label: "Data", position: "60%", side: "left" },
    { label: "Text", position: "75%", side: "left" },
    { label: "Image", position: "15%", side: "right" },
    { label: "Video", position: "30%", side: "right" },
    { label: "Text", position: "45%", side: "right" },
    { label: "Data", position: "60%", side: "right" },
    { label: "Text", position: "75%", side: "right" },
];

const Diagram = () => {
    // Responsive values
    const containerWidth = useBreakpointValue({ base: "100%", md: "1446px" });
    const containerHeight = useBreakpointValue({ base: "auto", md: "656px" });
    const leftPanelWidth = useBreakpointValue({ base: "100%", md: "35%" }); // Full width on small screens
    const rightPanelPadding = useBreakpointValue({ base: "4", md: "8" }); // Smaller padding on small screens
    const fontSize = useBreakpointValue({ base: "xl", md: "2xl" }); // Smaller font size on small screens
    const nodeFontSize = useBreakpointValue({ base: "xs", md: "sm" }); // Smaller font size for nodes on small screens
    const nodePosition = useBreakpointValue({ base: "10%", md: "5%" }); // Adjust node position on small screens

    return (
        <Flex
            height={containerHeight}
            borderRadius="20px"
            mx="2%"
            overflow="hidden"
            bg="#f5f5f5"
            mt="2%" 
            direction={{ base: "column", md: "row" }} // Stack vertically on small screens
        >
            {/* Left Panel */}
            <Box
                bg="#4679a6"
                width={leftPanelWidth}
                color="white"
                p={{ base: "4", md: "8" }} // Smaller padding on small screens
                display="flex"
                flexDirection="column"
                textAlign={{ base: "center", md: "left" }} // Center text on small screens
            >
                <Text fontSize={fontSize} fontWeight="bold">
                    Accelerate Visual <Text as="span" color="#ff9e44">AI</Text> Implementation
                </Text>
                <Flex align="flex-start" mt="60px" direction={{ base: "column", md: "row" }}>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="white" />
                        </svg>
                    </Box>

                    <Text
                        color="white"
                        maxW={{ base: "90%", md: "400px" }} // Reduced max width
                        ml={{ base: "0", md: "8px" }}
                        fontSize="sm" lineHeight={1.5}
                    >
                        Swiftly Prototype, Deploy, and Scale Computer Vision Tasks on a Unified Platform to Enhance Visual Intelligence
                    </Text>

                </Flex>
            </Box>

            {/* Right Panel */}
            <Flex
                flex={1}
                p={rightPanelPadding}
                justifyContent="center"
                alignItems="center"
                bg="white"
                position="relative"
            >
                <Box width="90%" height="90%" position="relative">
                    {/* Center Icon */}
                    <Box
                        position="absolute"
                        top="50%"
                        left={{ base: "50%", md: "40%" }} // Center on small screens
                        transform="translate(-50%, -50%)"
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Image src="./assets/leftgrp.png" height="100vh" alt="Layers icon" boxSize={12} />
                    </Box>

                    {/* Middle Image */}
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Image src="./assets/layers.png" alt="Layers icon" boxSize={12} />
                    </Box>

                    {/* Right Image */}
                    <Box
                        position="absolute"
                        top="50%"
                        left={{ base: "50%", md: "60%" }} // Center on small screens
                        transform="translate(-50%, -50%)"
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="md"
                    >
                        <Image src="./assets/leftgrp.png" alt="Layers icon" boxSize={12} />
                    </Box>

                    {/* Nodes */}
                    {nodes.map((node, index) => (
                        <Box
                            key={index}
                            position="absolute"
                            bg="#f9f9f9"
                            p={2}
                            borderRadius="md"
                            fontSize={nodeFontSize}
                            fontWeight="bold"
                            style={{
                                top: node.position,
                                [node.side]: nodePosition, // Use the responsive node position
                            }}
                        >
                            {node.label}
                        </Box>
                    ))}
                </Box>
            </Flex>
        </Flex>
    );
};

export default Diagram;