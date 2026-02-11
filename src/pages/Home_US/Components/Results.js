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
    title: "ONVIF-compliant\n solutions",
    image: "/assets/Onvif.png", 
  },
  {
    title: "Cloud or On-Prem \n deployment",
    image: "/assets/Cloud.png",
  },
  {
    title: "Works with existing CCTV cameras\nand infrastructure",
    image: "/assets/CCTV.png", 
  },
  {
    title: "Unified multi-location monitoring\nfrom a single Cloud VMS for \n enterprises US",
    image: "/assets/MultiLocation.png",
  },
  {
    title: "Modern AI analytics built for US \n compliance & scalability",
    image: "/assets/MordanAI.png", 
  },
  {
    title: "Supports AI security camera \n system for business US needs",
    image: "/assets/SupportsAI.png",
  },
];

// The component now accepts an optional `data` prop.
const Results = ({ data }) => {
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
      Why{" "}
      <Text as="span" color="#3F77A5">
        VMukti
      </Text>{" "}
      Works for the{" "}
      {/* <br /> */}
      Vision{" "}
      <Text as="span" color="#DB7B3A">
        US Market
      </Text>
    </Heading>
  );

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
    featuresToRender = featuresData;
  }

  return (
    <Box w="100%" bg="white" borderRadius="24px" py={{ base: 8, md: 16 }} px="8"   minH={{ base: "auto", md: "600px" }} >
      <VStack
        spacing={5}
        alignItems="center"
        textAlign="center"
        mx="auto"
        w="100%"
        mb={{ base: 8, md: 12 }}
      >
        <Box w={["100%","100%","100%","90%"]} >{headingContent}</Box>

        <Box w={{ base: "100%", md: "90%", lg: "90%" }}>
          <Text
            color="black"
            fontWeight="500"
            fontSize={{base:"14px",md:"16px"}}
            lineHeight={{base:"18px",md:"20px"}}
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
              whiteSpace="pre-line"
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
            >
              {feature.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Results;