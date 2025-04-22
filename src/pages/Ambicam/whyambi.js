import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  // Container,
  Grid,
  List,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WhyAmbicamPage() {
  const svgSize = useBreakpointValue({base:"18", md:"28"});
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Feature card data
  const featureCards = [
    {
      id: 1,
      title: "Cloud-First Design",
      bgColor: "#3F77A5",
      textColor: "white",
      items: ["Easy setup", "Fully managed via cloud in minutes"],
    },
    {
      id: 2,
      title: "Secure & Scalable",
      bgColor: "#BECEDC",
      textColor: "gray.800",
      items: ["End-to-end encryption", "Flexible cloud storage plans"],
    },
    {
      id: 3,
      title: (
        <>
          4G/5G <br /> Ready
        </>
      ),
      bgColor: "white",
      textColor: "gray.800",
      items: ["Connect anywhere", "Ideal for remote or mobile sites"],
    },
    {
      id: 4,
      title: (
        <>
          Made in <br /> India
        </>
      ),
      bgColor: "#3F77A5",
      textColor: "white",
      items: ["High-quality", "Compliant", "Trusted globally"],
    },
    {
      id: 5,
      bgColor: "transparent",
      items: [],
    },
    {
      id: 6,
      title: "AI-Powered Analytics",
      bgColor: "white",
      textColor: "gray.800",
      items: [
        "Motion detection",
        "Human detection",
        "Line-cross alerts and more",
      ],
    },
  ];

  // Filter out empty cards in mobile view
  const filteredCards = isMobile
    ? featureCards.filter((card) => card.items.length > 0)
    : featureCards;

  return (
    <Box
      position="relative"
      backgroundImage="url('/assets/camerapower.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      py={10}
    >
      {/* Decorative image in corner - hidden on mobile */}
      {!isMobile && (
        <Box
          position="absolute"
          left="40%"
          bottom="2%"
          right="0"
          width="1050px"
          height="525px"
          // backgroundImage="url('/assets/VMukti Brochure O2 1.svg')"
          backgroundImage="url('/assets/VMukti Brochure O2 1.png')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom right"
          // overflow="hidden"
          zIndex="0"
          opacity="0.8"
        />
      )}

      <Box position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize="48px"
          fontWeight="600"
          mb={12}
          ml={8}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text as="span">Why </Text>
          <Text as="span" color="#3F77A5">
            Ambicam
          </Text>
          <Text as="span">?</Text>
        </Heading>

        <Flex direction={{ base: "column", lg: "row" }} gap={8}>
          {/* Left spacer - maintains layout balance */}
          <Box flex={{ lg: "1" }} />

          {/* Cards section using standard Grid */}
          <Box flex={{ lg: "1" }} position="relative" zIndex={1}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 336px)" }}
              autoRows={{ base: "auto", md: "336px" }}
              gap={4}
            >
              {filteredCards.map((card) => (
                <Box
                  key={card.id}
                  bg={card.bgColor}
                  color={card.textColor}
                  p={6}
                  h={{ base: "auto", md: "336px" }}
                  minH={{ base: "200px", md: "336px" }}
                  w={{ base: "100%", md: "336px" }}
                  maxW="336px"
                  borderRadius="24px"
                  mx="auto"
                  gridColumn={!isMobile && card.id === 6 ? "2 / 3" : undefined}
                  gridRow={
                    !isMobile && card.id === 5
                      ? "3 / 4"
                      : !isMobile && card.id === 6
                      ? "3 / 4"
                      : undefined
                  }
                >
                  {card.title && (
                    <Heading
                      as="h3"
                      fontSize={{ base: "28px", md: "36px" }}
                      fontWeight="700"
                      mb={4}
                    >
                      {card.title}
                    </Heading>
                  )}
                  <List spacing={3} mt={{base:"0", md:"5"}}>
                    {card.items.map((item, i) => (
                      <ListItem
                        key={i}
                        display="flex"
                        alignItems="center"
                        gap={2}
                      >
                        {/* ======================= */}
                        <svg
                          width={svgSize}
                          height={svgSize}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 0.5C21.4558 0.5 27.5 6.54416 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.5 21.4558 0.5 14C0.5 6.54416 6.54416 0.5 14 0.5Z"
                            fill="#7AC000"
                            stroke="white"
                          />
                          <path
                            d="M19.5127 8.23882C19.3421 8.24533 19.1747 8.28642 19.0204 8.35946C18.8661 8.43249 18.7282 8.53606 18.6151 8.66386C16.5513 10.894 14.6622 13.0796 12.6857 15.2521L10.355 13.2391C10.224 13.1242 10.0704 13.0382 9.90388 12.9866C9.7374 12.935 9.56184 12.9189 9.38877 12.9395C9.2157 12.9602 9.04894 13.0171 8.8993 13.1064C8.74965 13.1958 8.62047 13.3157 8.5202 13.4583C8.3033 13.7543 8.20401 14.1206 8.24144 14.4857C8.27886 14.8508 8.45041 15.1887 8.72287 15.4347L11.984 18.2462C12.2296 18.4615 12.5505 18.5709 12.8764 18.5502C13.2023 18.5296 13.5068 18.3806 13.7233 18.1361C16.0687 15.6029 18.1704 13.1142 20.4631 10.6386C20.7116 10.3682 20.8509 10.0151 20.8539 9.64783C20.857 9.28053 20.7236 8.92511 20.4796 8.65059C20.3578 8.51615 20.2082 8.40963 20.0413 8.33855C19.8744 8.26746 19.694 8.2335 19.5127 8.23882Z"
                            fill="white"
                          />
                        </svg>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
