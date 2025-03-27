import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  Tag,
  TagLabel,
  Image,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
const EventSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % (dashboardItems.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 2 + dashboardItems.length - 1) % (dashboardItems.length - 1)
    );
  };

  const dashboardItems = [
    {
      image: "./assets/EventSpot.png", // Replace with your image URL
      title: "AI Surveillance",
      description: "Advanced monitoring solutions",
    },
    {
      image: "./assets/EventSpot.png", // Replace with your image URL
      title: "Smart Automation",
      description: "Efficiency-driven systems",
    },
    {
      image: "./assets/EventSpot.png", // Replace with your image URL
      title: "Security Systems",
      description: "Next-gen protection",
    },
    {
      image: "./assets/EventSpot.png", // Replace with your image URL
      title: "Connected World",
      description: "Seamless integration",
    },
  ];

  return (
    <Flex direction={"column"}>
      {/*Text Title Starts */}
      <Flex w="full">
        <Box
          pl={4} // Left padding
          textAlign="left" // Left alignment
          py={16} // Vertical padding
          px={8}
          mb={8}
          // width="100%"
        >
          <Text
            fontSize={{ base: "24px", md: "32px", lg: "48px" }}
            fontWeight="600"
            lineHeight="1.2"
            whiteSpace="pre-line" // Preserves line breaks
          >
            <Text as="span" color="blue.600">
              Event Spotlight:{" "}
            </Text>
            <Text as="span" color="black">
              Where{" "}
            </Text>
            <Text as="span" color="orange.500">
              Innovation{" "}
            </Text>
            <Text as="span" color="black">
              Meets <br />
              Engagement
            </Text>
            <Text as="span" color="blue.600">
              .
            </Text>
          </Text>
        </Box>
      </Flex>
      {/*Text Title Ends */}

      {/* Dynamic Dashboard  */}
      <Flex
        // bg="blue"
        // direction="column" // Stack children vertically
        width="100%" // Takes 30% of parent width
        ml="2%" // Pushes to the left
        mb="8%"
      >
        {/* Dynamic Dashboard  Left Part*/}
        <Flex direction="column" width="25%">
          {/* Description Box */}
          <Box
            width="331px"
            height="100px"
            // width=""
            // height=""
          >
            <Text
              fontSize={{ base: "12px", md: "16px" }}
              color="#000000"
              // lineHeight="100%"
              fontWeight="500"
            >
              VMukti is driving innovation with advanced AI technologies,
              transforming surveillance, automation, and security for a smarter,
              more connected world.
            </Text>
          </Box>
          {/* Description Box Ends*/}
          {/* Incoming Events */}
          <Box
            borderRadius="24px"
            width="336px"
            height="336px"
            bg="#BECEDC" // Or use exact color like bg="#3182CE"
            p={4} // Padding inside the box
            // textAlign="center" // Center align text
            my={4} // Vertical margin
            display="grid"
            placeItems="center"
          >
            <Text
              fontSize={{ base: "24px", md: "36px" }}
              fontWeight="600"
              color="black" // Black text color
            >
              Incoming Events
            </Text>
          </Box>
          {/* Incoming Events Ends*/}
        </Flex>

        {/* Dynamic Dashboard  Right Part*/}
        <Flex
          width="70%"
          bg="#FFFFFF" // Changed from red to white
          ml="2%"
          height="100%"
          borderRadius="24px" // Outer container radius
          // boxShadow="md" // Optional: adds subtle shadow
          // overflow="hidden" // Ensures rounded corners work properly
        >
          {dashboardItems
            .slice(currentIndex, currentIndex + 2)
            .map((item, index) => (
              <Box
                key={index}
                p={6}
                width="50%"
                minHeight="300px"
                position="relative"
                borderRight={index === 0 ? "1px solid" : "none"} // Divider between items
                borderColor="gray.100"
              >
                {/* Image with consistent styling */}
                <Image
                  src={item.image}
                  alt={item.title}
                  borderRadius="24px"
                  mb={4}
                  height="305px"
                  objectFit="cover"
                  width="100%" // Changed from fixed to percentage
                />

                {/* Content - now properly aligned without overflow */}
                <Box pl={4} textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600" mb={1}>
                    {item.title}
                  </Text>
                  <Text
                    fontSize="md"
                    fontWeight="semibold"
                    mb={2}
                    color="gray.700"
                  >
                    {item.subtitle}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
        </Flex>
      </Flex>
      {/* Dynamic Dashboard Ends */}
    </Flex>
  );
};

export default EventSpotlight;
