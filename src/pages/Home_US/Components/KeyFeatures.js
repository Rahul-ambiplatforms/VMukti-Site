import React from "react";
import {
    Box,
    Text,
    VStack,
    SimpleGrid,
    Image,
} from "@chakra-ui/react";

const keyFeaturesData = [
    {
        title: "99.99% uptime Cloud VMS",
        description: "99.99% uptime Cloud VMS",
        image: "./assets/cloud-vms-icon.png",
    },
    {
        title: "AI-powered alerts & automated incident reporting",
        description: "AI-powered alerts & automated \n incident reporting",
        image: "./assets/ai-alerts-icon.png",
    },
    {
        title: "Integrates with existing cameras, ONVIF devices & hardware",
        description: "Integrates with existing cameras, \n ONVIF devices & hardware",
        image: "./assets/Onvif.png",
    },
    {
        title: "Proven deployments in Government, Smart Cities & Enterprises",
        description: "Proven deployments in Government, \n Smart Cities & Enterprises",
        image: "./assets/government-deployment-icon.png",
    },
    {
        title: "API-based integration with Access control, GPS, custom applications",
        description: "API-based integration with Access control, \n GPS, custom applications",
        image: "./assets/api-integration-icon.png",
    },
    {
        title: "24x7 Global Cloud Support, US-focused service model",
        description: "24x7 Global Cloud Support, US- \n focused service model",
        image: "./assets/cloud-support-icon.png",
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