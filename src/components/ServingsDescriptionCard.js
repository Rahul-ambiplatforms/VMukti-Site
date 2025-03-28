import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const ServingsDescriptionCard = ({ description, keybenefits, image }) => {
    return <>
        <Box>
            <Flex
                bg="white"
                borderRadius="20px"
                overflow="hidden"
                p="1%"
                position="relative"
                h={{ base: 'auto', md: '753px' }} // Adjust height as needed
            >
                {/* Card Image (Background) */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bgImage={`${process.env.PUBLIC_URL}/${image}`}
                    bgSize="cover"
                    bgPosition="center"
                    zIndex={1} // Behind the text
                />

                {/* Card Content */}
                <Flex
                    direction="column"
                    justify="space-between"
                    p={5}
                    bg="rgba(255, 255, 255, 0.8)" // Semi-transparent background
                    w="30%"
                    gap={5}
                    borderRadius={'20px'}
                    zIndex={2} // Above the image
                    backdropFilter="blur(2px)" // Blur effect
                >
                    <Flex gap={1} direction="column">
                        <Text fontSize="24px" color="blue.600" mb={5}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                            >
                                <path
                                    d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                                    fill="#3F77A5"
                                />
                            </svg>
                        </Text>
                        <Heading
                            fontSize="16px"
                            fontWeight="500"
                            mb={5}
                            color="black"
                        >
                            {/* {slide.title} */}
                            {description}
                        </Heading>
                    </Flex>
                    <Flex direction="column" justifyContent="space-between" gap={5}>
                        <Text fontSize="16px" color="black" fontWeight="700">Key Benefits</Text>
                        <Flex direction="column" gap={3} >
                            {
                                keybenefits.map((benefit, index) => {
                                    return (
                                        <Flex direction="column" key={index} gap={2}>
                                            <Box
                                                // width="40px"
                                                // height="40px"
                                                // backgroundColor="white"
                                                // borderRadius="50%"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="flex-start" // Aligns icon to the left
                                            // paddingLeft="8px" // Adds slight spacing from the edge
                                            ><Image src={benefit.svg} /></Box>
                                            <Text>{benefit.title}</Text>
                                        </Flex>
                                    )
                                })
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box >
    </>
}

export default ServingsDescriptionCard;