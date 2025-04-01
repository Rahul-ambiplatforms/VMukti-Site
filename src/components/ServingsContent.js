import { Box, Flex, Text } from "@chakra-ui/react";
import PageContentWrapper from "./PageContentWrapper";
import servingsData from "../data/servingsConstData";
import ServingsDescriptionCard from "./ServingsDescriptionCard";
import ServingsModelGrid from "./ServingsModelGrid";
import ServingsAdvantages from "./ServingsAdvantages";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";

const ServingsContent = ({ page: name }) => {
    if (!name || typeof name !== 'string') {
        return <Box mt="5%">Not found</Box>;
    }

    const data = servingsData[name.toLowerCase()];
    if (!data || typeof data !== 'object') {
        return <Box mt="5%">Not found</Box>;
    }

    return (
        <>
            <PageContentWrapper>
                <Flex direction="column" gap={5}>
                    {/* Textual portion */}
                    <Box
                        // mt={{ base: '20px', md: '40px' }}
                        as="section"

                        backgroundColor="#E7E7E7"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        position="relative"
                    >
                        {/* Title Container with relative positioning */}
                        <Box position="relative" mb="20px">
                            {/* Title Text (above the white rectangle) */}
                            <HeadingAnimation>
                            <Text
                                fontSize={{ base: '24px', md: '48px' }}
                                fontWeight="600"
                                lineHeight="normal"
                                textAlign="left"
                                position="relative"
                                zIndex="1" // Ensures text stays above the rectangle
                            >
                                {data.title.map((part, index) => (
                                    <Text as="span" color={part.color} display="inline" key={index}>
                                        {index !== 0 && ' '}
                                        {part.text}
                                    </Text>
                                ))}
                                <Text as="span" color="#3F77A5" display="inline">
                                    .
                                </Text>{' '}
                                {/* Static blue dot without space */}
                            </Text>
                            </HeadingAnimation>
                        </Box>
                    </Box>

                    {/* Description section backimage with left content */}
                    <ServingsDescriptionCard description={data.description} keybenefits={data.keybenefits} image={data.image}/>

                    {/* Deployment Model grid  */}
                    <ServingsModelGrid title={data.modelTitle} description={data.modelDescription} cards={data.cards} />

                    {/* Ai Powered Surveillance Advantages */}
                    <ServingsAdvantages title={data.advantagesTitle} advantages={data.advantages} />
                </Flex>

            </PageContentWrapper>
        </>
    )
}

export default ServingsContent;