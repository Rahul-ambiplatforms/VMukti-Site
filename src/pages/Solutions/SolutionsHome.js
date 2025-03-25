import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

const Surveillance = () => {
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.900')}>
            <Container maxW={'7xl'} py={12}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'gray.900'}
                            >
                                AI-Powered
                            </Text>
                            <br />
                            <Text as={'span'} color={'blue.400'}>
                                Surveillance
                            </Text>
                            <br />
                            <Text as={'span'} color={'orange.400'}>
                                Solutions
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={'xl'}>
                            Unlock smarter security with AI-driven surveillance solutions for real-time monitoring,
                            proactive threat detection, and seamless video management. Enhance safety and efficiency
                            with scalable, future-ready technology.
                        </Text>
                    </Stack>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
                    <Box
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image
                                src="/assets/Dashboard.png"
                                alt={'AI Surveillance Image 1'}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}
                        >
                            Person Detection
                        </Text>
                    </Box>

                    <Box
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image
                                src="/assets/SolutionDash.png"
                                alt={'AI Surveillance Image 2'}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}
                        >
                            Behavior Analysis
                        </Text>
                    </Box>

                    <Box
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image
                                src="/assets/ai_implementation.png"
                                alt={'AI Surveillance Image 3'}
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}
                        >
                            Real-time Monitoring
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Surveillance; 