import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"

const ServingsModelGrid = ({ title, description, cards }) => {
    return (
        <>
            <Flex direction="column" bg="#3F77A5" color={"white"} h={{ base: 'auto', md: '753px' }} minHeight="fit-content" p="5%" gap={10} borderRadius="24px">
                <Flex direction="column" gap={5}>
                    <Text fontWeight="600" fontSize={{ base: "28px", md: "36px" }}>{title}</Text>
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">{description}</Text>
                </Flex>
                <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3} rowGap="50px">
                    {
                        cards.map((card, index) => (
                            <>
                                <Flex direction="column" gap={5}>
                                    <Image
                                        src={card.image}
                                        alt={card.image_alt}
                                        width="100%"
                                        height={{ base: '200px', md: '368px' }}
                                        backgroundColor="#E7E7E7"
                                        borderRadius="24px"
                                        flexShrink="0"
                                    />
                                    <Flex position="relative" direction="column">
                                        <Text>
                                            {card.title}
                                        </Text>
                                        <Box width="20px" height="1px" bg="white" />
                                    </Flex>
                                    <Text>
                                        {card.description}
                                    </Text>
                                </Flex>
                            </>
                        ))
                    }
                </Grid>
            </Flex>
        </>
    )
}

export default ServingsModelGrid