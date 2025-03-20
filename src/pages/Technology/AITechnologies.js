import React, { useState, useEffect } from 'react';
import {
    Flex,
    Box,
    Text,
    Heading,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const AITechnologies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlideRange, setVisibleSlideRange] = useState({ start: 0, end: 3 }); // Track visible slide names

    // Data for each slide
    const slides = [
        {
            title: "Computer Vision",
            description: [
                "AI-powered computer vision analyzes and interprets visual data with unmatched accuracy, recognizing faces, objects, and patterns. It enhances surveillance, automates processes, and optimizes decision-making across industries like security, retail, healthcare, and manufacturing.",
                "Beyond simple recognition, AI-driven computer vision tracks movement, monitors crowd behavior, and predicts potential threats. Integrated with edge AI and cloud computing, it enables real-time responses, improving security and efficiency.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "Object Detection",
            description: [
                "Object detection algorithms identify and locate multiple objects within images or video streams with remarkable precision. These systems can distinguish between different object classes, track their movements, and analyze their behaviors in real-time.",
                "Modern object detection frameworks like YOLO, SSD, and R-CNN enable applications ranging from autonomous vehicles and robotics to retail analytics and medical imaging. These technologies continue to evolve with improved accuracy and reduced computational requirements.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "Deep Learning Algorithms",
            description: [
                "Deep learning algorithms utilize multi-layered neural networks to process complex data sets and derive meaningful patterns. These sophisticated models can handle unstructured data types including images, text, and audio with unprecedented accuracy.",
                "Through techniques like transfer learning and reinforcement learning, deep learning systems continue to improve their capabilities, enabling breakthroughs in natural language processing, image recognition, and predictive analytics across various domains.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "Neural Networks & Predictive Analytics",
            description: [
                "Neural networks form the backbone of modern AI systems, mimicking the human brain's structure to process and learn from vast amounts of data. These interconnected layers of artificial neurons excel at pattern recognition and feature extraction.",
                "When applied to predictive analytics, neural networks can forecast trends, identify anomalies, and make data-driven recommendations. This powerful combination enables businesses to anticipate market changes, optimize operations, and deliver personalized experiences.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "AI-Driven Automation",
            description: [
                "AI-driven automation streamlines repetitive tasks, reducing human error and increasing efficiency in industries like manufacturing, logistics, and customer service.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "GPT in Video Surveillance",
            description: [
                "GPT models enhance video surveillance by analyzing footage in real-time, detecting anomalies, and providing actionable insights for security teams.",
            ],
            image: "./assets/holdingtab.png",
        },
        {
            title: "Edge AI Computing",
            description: [
                "Edge AI brings computation and data storage closer to the devices, enabling real-time processing and reducing latency for critical applications.",
            ],
            image: "./assets/holdingtab.png",
        },
    ];

    // Update the slider
    const updateSlider = (index) => {
        setCurrentSlide(index);
    };

    // Handle previous and next slide
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Update visible slide names based on the current slide
    useEffect(() => {
        if (currentSlide < visibleSlideRange.start) {
            // Move the visible range left
            setVisibleSlideRange({ start: currentSlide, end: currentSlide + 3 });
        } else if (currentSlide > visibleSlideRange.end) {
            // Move the visible range right
            setVisibleSlideRange({ start: currentSlide - 3, end: currentSlide });
        }
    }, [currentSlide]);

    // Responsive styles
    const cardDirection = useBreakpointValue({ base: "column", md: "row" });
    const cardContentWidth = useBreakpointValue({ base: "95%", md: "35%" });

    return (
        <Box bg="#f9f9f9" minH="100vh" overflowX="hidden" borderRadius="24px">
            {/* Navigation */}
            <Flex justify="center" p={5} gap={{ base: 4, md: 12 }} position="relative">
                {/* Left Dots (Indicate more slides on the left) */}
                {visibleSlideRange.start > 0 && (
                    <Flex gap={1} align="center">
                        {[...Array(visibleSlideRange.start)].map((_, index) => (
                            <Box
                                key={index}
                                w="8px"
                                h="8px"
                                borderRadius="full"
                                bg="#3F77A5;"
                            />
                        ))}
                    </Flex>
                )}

                {/* Visible Slide Names */}
                {slides.slice(visibleSlideRange.start, visibleSlideRange.end + 1).map((slide, index) => (
                    <Box key={index + visibleSlideRange.start}>
                        <Text
                            py={2}
                            cursor="pointer"
                            color={currentSlide === index + visibleSlideRange.start ? "blue.600" : "gray.800"}
                            fontWeight={currentSlide === index + visibleSlideRange.start ? "600" : "500"}
                            onClick={() => updateSlider(index + visibleSlideRange.start)}
                        >
                            {slide.title}
                        </Text>
                        {/* Conditionally render a divider */}
                        {currentSlide === index + visibleSlideRange.start && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="2" viewBox="0 0 17 2" fill="none">
                                <path d="M16 1L1 0.999999" stroke="#3F77A5" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        )}
                    </Box>
                ))}

                {/* Right Dots (Indicate more slides on the right) */}
                {visibleSlideRange.end < slides.length - 1 && (
                    <Flex gap={1} align="center">
                        {[...Array(slides.length - visibleSlideRange.end - 1)].map((_, index) => (
                            <Box
                                key={index}
                                w="8px"
                                h="8px"
                                borderRadius="full"
                                bg="#3F77A5;"
                            />
                        ))}
                    </Flex>
                )}

                {/* Slider Controls */}
                <Flex position="absolute" right={{ base: 4, md: 10 }} top="50%" transform="translateY(-50%)" align="center" gap={2}>
                    <Flex gap={1}>
                        {slides.map((_, index) => (
                            <Box
                                key={index}
                                w="8px"
                                h="8px"
                                borderRadius="full"
                                bg={currentSlide === index ? "blue.600" : "gray.300"}
                                display={index >= visibleSlideRange.start && index <= visibleSlideRange.end ? "none" : "block"} // Hide dots for visible slides
                            />
                        ))}
                    </Flex>
                    <IconButton
                        aria-label="Previous slide"
                        icon={<ChevronLeftIcon />}
                        variant="ghost"
                        onClick={handlePrev}
                    />
                    <IconButton
                        aria-label="Next slide"
                        icon={<ChevronRightIcon />}
                        variant="ghost"
                        onClick={handleNext}
                    />
                </Flex>
            </Flex>

            {/* Slider Container */}
            <Box w="100%" overflow="hidden" p={5}>
                <Flex
                    w={`${slides.length * 100}%`}
                    transform={`translateX(-${currentSlide * (100 / slides.length)}%)`}
                    transition="transform 0.5s ease"
                >
                    {slides.map((slide, index) => (
                        <Box key={index} minW={`${100 / slides.length}%`} p={5}>
                            <Flex
                                bg="white"
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="lg"
                                direction={cardDirection}
                                position="relative"
                                h={{ base: "auto", md: "753px" }} // Adjust height as needed
                            >
                                {/* Card Image (Background) */}
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    w="100%"
                                    h="100%"
                                    bgImage={slide.image}
                                    bgSize="cover"
                                    bgPosition="center"
                                    zIndex={1} // Behind the text
                                />

                                {/* Card Content */}
                                <Box
                                    p={8}
                                    bg="rgba(255, 255, 255, 0.8)" // Semi-transparent background
                                    w={cardContentWidth}
                                    h="90%"
                                    m={"2%"}
                                    borderRadius={"20px"}
                                    zIndex={2} // Above the image
                                    backdropFilter="blur(2px)" // Blur effect
                                >
                                    <Text fontSize="24px" color="blue.600" mb={5}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                            <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="#3F77A5" />
                                        </svg>
                                    </Text>
                                    <Heading fontSize="28px" fontWeight="bold" mb={5} color="black">
                                        {slide.title}
                                    </Heading>
                                    <Box mt="50%">
                                        {slide.description.map((text, i) => (
                                            <Text key={i} fontSize="14px" color="black" lineHeight="1.6" mb={5}>
                                                {text}
                                            </Text>
                                        ))}
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default AITechnologies;