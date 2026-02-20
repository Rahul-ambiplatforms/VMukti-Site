import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

const BestCloudVideo = ({ introduction }) => {
  // Default data if no introduction prop is provided
  const defaultIntroduction = {
    heading: "What Makes VMukti the Best Cloud-Based Video \n Surveillance Partner in the USA",
    description: [
      "Ideal for enterprise video surveillance systems, video surveillance solutions, and cloud video surveillance systems",
    ],
    bgColor: "white",
    image: "../../assets/VMS_intro.png",
    top: "-25%"
  };

  // Use provided introduction or default
  const intro = introduction || defaultIntroduction;

  return (
    <Box
      w="100%"
      paddingTop={"var(--chakra-space-8);"}
      textAlign="center"
      borderRadius={{ base: "24px", md: "24px" }}
      position="relative"
      mb={intro.image ? "0" : "3%"}
    >
      <VStack spacing={{ base: 4, md: 6 }}>
        <Box
          bg={intro.bgColor || "white"}
          h={intro.image
            ? ["294px", "294px", "394px", "494px"]
            : ["280px", "280px", "260px", "248px"]
          }
          p={{ base: 6, md: 8 }}
          borderRadius={{ base: "16px", md: "24px" }}
        >
          <Heading
            mx="auto"
            w="100%"
            as="h2"
            fontSize={{ base: "20px", md: "48px" }}
            fontWeight={{ base: "500", md: "500" }}
            color="#000"
          >
            {intro.heading}
          </Heading>
          <Box mt="2%">
            {intro.description.map((paragraph, index) => (
              <Text
                key={index}
                fontSize={{ base: "14px", md: "16px" }}
                color="#444444"
                lineHeight={{ base: "18px", md: "20px" }}
                mb="1%"
                as="p"
              >
                {paragraph}
              </Text>
            ))}
          </Box>
        </Box>
        {intro.image && (
          <Box
            mt={intro.top || "-25%"}
            mb={{ base: "10%", md: "2%" }}
          >
            <Image loading="lazy"
              src={intro.image}
              alt={intro.heading}
              w={{ base: "100%", md: "100%" }}
              borderRadius="24px"
              objectFit="cover"
              zIndex={1}
            />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default BestCloudVideo;