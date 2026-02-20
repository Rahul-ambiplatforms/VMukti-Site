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
    description: "city-wide command, emergency response, \n Smart City Command Center UK",
    image: "/assets/smart-cities-icon.png",
  },
  {
    title: "Manufacturing & Warehousing",
    description: "safety compliance, intrusion detection, \n worker monitoring",
    image: "/assets/manufacturing-icon.png",
  },
  {
    title: "Retail Chains & Shopping Centres",
    description: "loss prevention & occupancy intelligence",
    image: "/assets/retail-icon.png",
  },
  {
    title: "Transport & Logistics",
    description: "ANPR, fleet & yard surveillance",
    image: "/assets/transportation-icon.png",
  },
  {
    title: "Education & Universities",
    description: "student & campus protection",
    image: "/assets/education-icon.png",
  },
  {
    title: "Banking & Financial Services",
    description: "ATM & branch surveillance with \n audit-ready insights",
    image: "/assets/banking-icon.png",
  },
  {
    title: "Healthcare & Hospitals",
    description: "patient safety & restricted zone monitoring",
    image: "/assets/smart-cities-icon.png",
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
      AI Surveillance Solutions Tailored for <br /> UK Industry Sectors
    </Heading>
  );

  const defaultSubheading = `VMukti supports a broad range of industries with intelligent video \n monitoring and cloud based video surveillance systems including`;

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
              <Image loading="lazy"
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