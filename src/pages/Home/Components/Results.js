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
    title: "Remote Monitoring",
    description:
      "Seamless remote access to live and archived feeds because visibility should never be limited.",
    image: "./assets/result_home_1.png",
  },
  {
    title: "Custom-built Solutions",
    description:
      "Tailored Visual AI built for your ecosystem seamless access to critical footage, anytime, anywhere.",
    image: "./assets/result_home_2.png",
  },
  {
    title: "Data Security",
    description:
      "Safeguard critical footage with enterprise-grade encryption and seamless access through secure cloud sync.",
    image: "./assets/result_home_3.png",
  },
  {
    title: "Efficient Video Tech",
    description:
      "Precision imaging tech captures ultra-detailed visuals while optimizing bandwidth for leaner operations.",
    image: "./assets/result_home_4.png",
  },
  {
    title: "Quad-HD Clarity",
    description:
      "Quad HD imaging delivers razor-sharp clarity every frame built for precision and absolute visibility.",
    image: "./assets/result_home_5.png",
  },
  {
    title: "Reduced False Alarms",
    description:
      "Streamlined alerting. Every ping means something and you’re always in control.",
    image: "./assets/result_home_6.png",
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
      Results{" "}
      <Text as="span" color="#3F77A5">
        You Can Trust
      </Text>{" "}
      with Our Computer{" "}
      {/* <br /> */}
      Vision{" "}
      <Text as="span" color="#DB7B3A">
        Solutions
      </Text>
    </Heading>
  );

  const defaultSubheading =
    "Experience next-gen visual intelligence with secure remote access, precision detection, and proprietary tech that filters the noise. Designed for critical environments where accuracy isn’t optional just plug in and take full control of your surveillance command.";

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
