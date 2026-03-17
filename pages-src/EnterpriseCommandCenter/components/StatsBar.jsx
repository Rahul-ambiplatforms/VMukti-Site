'use client';
import { Box, Flex, Text } from "@chakra-ui/react";

const stats = [
  { highlight: "Manage 10,000+", label: "Cameras" },
  { highlight: "Across 100+",    label: "Sites" },
  { highlight: "Single",         label: "Dashboard" },
  { highlight: "Real-Time",      label: "Alerts" },
];

const StatsBar = () => {
  return (
    <Box
      bg="white"
      borderTopLeftRadius={{ base: "16px", md: "24px" }}
      borderTopRightRadius={{ base: "16px", md: "24px" }}
      h={{ base: "auto", md: "123px" }}
      boxShadow="0 4px 24px rgba(0,0,0,0.06)"
      w="100%"
      mt={{ base: "-16px", md: "-24px" }}
      position="relative"
      zIndex={2}
    >
      <Flex
        h="100%"
        align="center"
        justify="space-evenly"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        py={{ base: "20px", md: "0" }}
        maxW="1512px"
        mx="auto"
      >
        {stats.map((stat, i) => (
          <Flex
            key={i}
            flex="1"
            direction="column"
            align="center"
            justify="center"
            py={{ base: "16px", md: "0" }}
            px={{ base: "16px", md: "8px" }}
            borderRight={i < stats.length - 1 ? "1.5px solid #D1D5DB" : "none"}
            minW={{ base: "50%", md: "0" }}
            gap="2px"
          >
            <Text
              fontSize={{ base: "1.1rem", md: "1.25rem", lg: "1.375rem" }}
              fontWeight="700"
              color="#3F77A5"
              lineHeight="1.2"
            >
              {stat.highlight}
            </Text>
            <Text
              fontSize={{ base: "0.9rem", md: "1rem", lg: "1.125rem" }}
              fontWeight="400"
              color="#1A1A2E"
              lineHeight="1.4"
            >
              {stat.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default StatsBar;