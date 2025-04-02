import { Box, Flex, Image, Text } from "@chakra-ui/react"

const SurveillanceSoftware = () => {
    return (
        <Flex position="relative" justifyContent="center" alignItems="center" padding={{ base: "20px", md: "40px" }} gap={4} direction={{ base: "column", lg: "row" }} width="100%" bgColor="transparent" borderRadius="24px" overflow="hidden">
            <Flex>
                <Text>Deep Learning </Text>
                <Text>Algorithms & Adaptive AI </Text>
                <Text>Surveillance Software.</Text>
            </Flex>
            <Flex direction="column" alignItems="center" justifyContent="center" width="100%">
                <Flex direction="column" alignItems="center" justifyContent="center" width="100%">
                    <Flex direction="column" alignItems="center" justifyContent="center" width="100%">
                        <Text>Security That Gets Smarter</Text>
                        <Box width="20px" height="1px" bg="#3F77A5" />
                    </Flex>
                    <Text>Want a system that learns your world? Our AI video surveillance keeps up, adapts, and stays ahead of trouble—all on its own.</Text>
                </Flex>
                <Flex direction="column" alignItems="center" justifyContent="center" width="100%">
                    <Flex direction="column" alignItems="center" justifyContent="center" width="100%">
                        <Text>How It Helps You Out</Text>
                        <Box width="20px" height="1px" bg="#3F77A5" />
                    </Flex>

                    <Flex direction="colum">
                        <Text>Self-Improving AI</Text>
                        <Text>Pattern Discovery </Text>
                        <Text>Smart Adaptation </Text>
                        <Text>Predictive Intelligence</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box position="absolute"> <Image src="" /></Box>
        </Flex>
    )
}

export default SurveillanceSoftware