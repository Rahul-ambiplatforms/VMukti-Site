import { Box, Flex, Text } from "@chakra-ui/react";

const Timeline = () => {
    const timelineItems = [
        {
            period: "1998 - 2000",
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nunc eget magna dictum egestas. Nam sed tempor lectus, suscipit mollis erat. Aenean dignissim sem nec orci tempus lacinia."
        },
        {
            period: "2000 - 2002",
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nunc eget magna dictum egestas. Nam sed tempor lectus, suscipit mollis erat. Aenean dignissim sem nec orci tempus lacinia."
        },
        {
            period: "2000 - 2002",
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nunc eget magna dictum egestas. Nam sed tempor lectus, suscipit mollis erat. Aenean dignissim sem nec orci tempus lacinia."
        },
        {
            period: "2000 - 2002",
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nunc eget magna dictum egestas. Nam sed tempor lectus, suscipit mollis erat. Aenean dignissim sem nec orci tempus lacinia."
        },
        {
            period: "2000 - 2002",
            title: "Title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non nunc eget magna dictum egestas. Nam sed tempor lectus, suscipit mollis erat. Aenean dignissim sem nec orci tempus lacinia."
        }
    ];

    return (
        <Box w="100%" h="480px" p={5} bf="#ffff" overflowX="auto">
            <Flex h="100%">
                {timelineItems.map((item, index) => (
                    <Box
                        key={index}
                        maxW="300px"
                        h="200px"
                        p={5}
                        flexShrink={0}
                        flexGrow={0}
                        alignSelf={index % 2 === 0 ? "flex-start" : "flex-end"}
                        // bg="white"
                        position="relative"
                        // borderRadius="10px"
                        mr={3}
                        // boxShadow="0px 0px 2px 2px rgba(0, 0, 0, 0.2)"
                        _before={{
                            content: '""',
                            position: "absolute",
                            width: "calc(100% + 14px)",
                            height: "4px",
                            top: index % 2 === 0 ? "calc(100% + 10px)" : "-15px",
                            bg: "white",
                            left: "-7px",
                            // borderRadius: "5px"
                        }}
                        _after={{
                            content: '""',
                            position: "absolute",
                            width: "4px",
                            height: "25px",
                            top: index % 2 === 0 ? "100%" : "-25px",
                            left: "calc(50% - 10px)",
                            bg: "white"
                        }}
                    >
                        <Text fontSize="1.5em" fontWeight="bold">
                            {item.title}
                        </Text>
                        <Text>{item.content}</Text>

                        <Box
                            position="absolute"
                            top={index % 2 === 0 ? "calc(100% + 25px)" : "-60px"}
                            // bg="white"
                            p={3}
                            w="100px"
                            textAlign="center"
                            // borderRadius="10px"
                            left="calc(50% - 60px)"
                            // boxShadow="0px 0px 2px 2px rgba(0, 0, 0, 0.2)"
                            _before={{
                                content: '""',
                                width: "15px",
                                height: "15px",
                                // bg: "white",
                                // borderRadius: "50%",
                                position: "absolute",
                                top: index % 2 === 0 ? "-20px" : "calc(100% + 2px)",
                                left: "calc(50% - 6px)",
                                zIndex: 2
                            }}
                        >
                            {item.period}
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Timeline;