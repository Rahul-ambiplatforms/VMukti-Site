import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"

const ServingsAdvantages = ({ title, advantages }) => {
    return (
        <>
            <Flex direction="column" bg="white" color={"#3F77A5"} h={{ base: 'auto', md: 'fit-content' }} p="2%" gap={10} borderRadius="24px" padding="5%">
                <Flex direction={{base:"column",md:"row"}}>
                    {title.map((part, index) => (
                        <Text as="span" color={part.color} display="inline" key={index} fontSize={{ base: "28px", md: "36px" }} fontWeight="600">
                            {index !== 0 && ' '}
                            {part.text}
                            {' '}
                        </Text>
                    ))}
                    {/* <Text>{title}</Text> */}
                </Flex>
                <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} gap="5%" rowGap={{base:"40px",md:"80px"}}>
                    {
                        advantages.map((advantage, index) => (
                            <Flex direction="column" key={index} gap="1%">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start" // Aligns icon to the left
                                >
                                    <Image src={advantage.svg} />
                                </Box>
                                <Flex direction="column">
                                    <Text color="black" fontSize={{ base: "14px", md: "16px" }} fontWeight="700">{advantage.title}</Text>
                                    <Box width="20px" height="1px" bg="#3F77A5" />
                                </Flex>
                                <Text color="black" fontSize={{ base: "12px", md: "14px" }} fontWeight="500">{advantage.description}</Text>
                            </Flex>
                        ))
                    }
                </Grid>
            </Flex>
        </>
    )
}

export default ServingsAdvantages