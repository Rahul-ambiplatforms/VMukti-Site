import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

const featuresData = [
  {
    title: "Smart Cities & Public Safety",
    description: "city-wide monitoring, Smart City Command \n Center USA, ICCC command centers",
    image: "/assets/smart-cities-icon.png",
  },
  {
    title: "Manufacturing & Warehousing",
    description: "worker safety, SOP compliance, \n theft & intrusion detection",
    image: "/assets/manufacturing-icon.png",
  },
  {
    title: "Retail Chains & Shopping Malls",
    description: "customer analytics, loss prevention, \n occupancy tracking",
    image: "/assets/retail-icon.png",
  },
  {
    title: "Transportation & Logistics",
    description: "ANPR, yard surveillance, cargo safety, \n fleet monitoring",
    image: "/assets/transportation-icon.png",
  },
  {
    title: "Education & Campus Security",
    description: "school safety, perimeter \n monitoring, real-time alerts",
    image: "/assets/education-icon.png",
  },
  {
    title: "Banking & Financial Institutions",
    description: "ATM surveillance, branch monitoring, \n audit-ready reports",
    image: "/assets/banking-icon.png",
  },
];

// The component now accepts an optional `data` prop.
const Features = ({ data }) => {
  let headingContent;
  let subheadingContent;
  let featuresToRender;

  // This is the default heading JSX
  const defaultHeading = (
    <Heading
      as="h2"
      fontSize={{ base: "24px", md: "48px" }}
      fontWeight="600"
      color="#000"
      lineHeight={{ base: "30px", md: "60px" }}
    >
      Custom AI Surveillance Solutions for USA <br /> Businesses & Government
    </Heading>
  );

  const defaultSubheading = `VMukti empowers a wide range of sectors with enterprise video surveillance, cloud based video \n surveillance systems, and intelligent video monitoring`;

  if (data && data.heading && data.benefits) {
    headingContent = (
      <Heading
        as="h2"
        fontSize={{base:"24px",md:"48px"}}
        fontWeight="600"
        color="black"
        lineHeight={{base:"30px",md:"60px"}}
      >
        {data.heading}
      </Heading>
    );
    subheadingContent = data.description;
    featuresToRender = data.benefits;
  } else {
    headingContent = defaultHeading;
    subheadingContent = defaultSubheading;
    featuresToRender = featuresData;
  }

  return (
    <Box w="100%" bg="white" borderRadius="24px" py={{ base: 4, md: 8 }} px="8">
      <VStack
        spacing={5}
        alignItems="center"
        textAlign="center"
        mx="auto"
        w="100%"
        mb={{ base: 6, md: 8 }}
      >
        <Box w={["100%","100%","100%","90%"]} >{headingContent}</Box>

        <Box w={{ base: "100%", md: "90%", lg: "90%" }}>
          <Text
            color="black"
            fontWeight="500"
            fontSize={{base:"14px",md:"16px"}}
            lineHeight={{base:"18px",md:"20px"}}
            whiteSpace="pre-line"
            as="p"
          >
            {subheadingContent}
          </Text>
        </Box>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacingX={{ base: 8, md: 12 }}
        spacingY={{ base: 6, md: 8 }}
      >
        {featuresToRender.map((feature, index) => (
          <VStack key={index} spacing={2} textAlign="center">
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.title || feature.heading}
                boxSize="72px"
              />
            )}

            <Heading
              as="h3"
              fontSize={{base:"14px",md:"16px"}}
              fontWeight="700"
              mt="2"
              color="#000000"
            >
              {feature.title || feature.heading}
            </Heading>

            <Text
              color="#444444"
              mx="auto"
              fontSize="14px"
              lineHeight="18px"
              w={{base:"100%",md:"85%"}}
              as="p"
              whiteSpace="pre-line"
            >
              {feature.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;