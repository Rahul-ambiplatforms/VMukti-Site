import {
    Box,
    Text,
    VStack,
    SimpleGrid,
    Image,
} from "@chakra-ui/react";

const keyFeaturesData = [
    {
        title: "99.99% reliable Cloud VMS",
        description: "99.99% reliable Cloud VMS",
        image: "/assets/cloud-vms-icon.png",
    },
    {
        title: "AI-powered alerts & automated reporting",
        description: "AI-powered alerts & automated reporting",
        image: "/assets/ai-alerts-icon.png",
    },
    {
        title: "Flexible API for access control, GPS & third-party systems",
        description: "Flexible API for access control, \n GPS & third-party systems",
        image: "/assets/api-integration-icon.png",
    },
    {
        title: "Proven in UK public sector, smart cities & enterprise deployments",
        description: "Proven in UK public sector, \n smart cities & enterprise deployments",
        image: "/assets/government-deployment-icon.png",
    },
    {
        title: "24×7 UK-focused cloud support",
        description: "24×7 UK-focused cloud support",
        image: "/assets/cloud-support-icon.png",
    },
    {
        title: "Ideal for video surveillance solutions, cloud video surveillance systems, enterprise video surveillance",
        description: "Ideal for video surveillance solutions, \n cloud video surveillance systems, \n enterprise video surveillance",
        image: "/assets/Onvif.png",
    },
];

const KeyFeatures = ({ data }) => {
    const featuresToRender = data?.features || keyFeaturesData;

    return (
         <Box w="100%" borderRadius="24px" py={{ base: 12, md: 16, lg: 20 }} px="8">
              <VStack
                spacing={5}
                alignItems="center"
                textAlign="center"
                mx="auto"
                w="100%"
                mb={{ base: 6, md: 8 }}
              >
              </VStack>
        
              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacingX={{ base: 8, md: 12 }}
                spacingY={{ base: 10, md: 12, lg: 14 }}
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
        
                    <Text
                      mx="auto"
                      fontSize="14px"
                      fontWeight="600"
                        color="#000"
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

export default KeyFeatures;