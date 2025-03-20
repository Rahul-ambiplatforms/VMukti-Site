import { Box, Grid, Text, Image, Button } from '@chakra-ui/react';

const industriesData = [
    { name: 'Healthcare Industry', img: "./assets/health.png", className: 'light-blue' },
    { name: 'Education Industry', img: '/assets/education.png', className: 'white' },
    { name: 'Defense', img: '/assets/defense.png', className: 'light-blue' },
    {
        name: 'Election',
        img: '/assets/election.png',
        className: 'election-box',
        width: { base: '100%', lg: '720px' }, // Responsive width
    },
    { name: 'Transportation Industry', img: '/assets/transport.png', className: 'dark-blue' },
    { name: 'City Monitoring', img: './assets/monitor.png', className: 'white' },
    {
        name: 'Warehousing & Logistic Industry',
        img: './assets/warehouse.png',
        className: 'light-blue',
    },
];

const Industries = () => {
    return (
        <>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600&display=swap');
        `}
            </style>

            <Box
                textAlign="center"
                backgroundColor="#f3f3f3"
                maxWidth="1512px"
                height={{ base: 'auto', lg: '1338px' }} // Responsive height
                position="relative"
                fontFamily="'Wix Madefor Display', sans-serif"
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: { base: '100px', lg: '200px' }, // Responsive top position
                    left: { base: '10px', lg: '24px' }, // Responsive left position
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('/assets/image7.png')`,
                    backgroundPosition: 'left top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: { base: '80%', lg: '1138px' }, // Responsive background size
                    opacity: '1',
                    zIndex: '1',
                }}
            >
                <Text
                    fontSize={{ base: '32px', md: '48px' }} // Responsive font size
                    fontWeight="600"
                    marginBottom="20px"
                    paddingLeft={{ base: '20px', md: '40px' }} // Responsive padding
                    lineHeight="normal"
                >
                    Crafting Unique{' '}
                    <Text as="span" color="#db7b3a">
                        AI
                    </Text>{' '}
                    Solutions for <br />
                    <Text as="span" color="#3f77a5">
                        Every Industry
                    </Text>
                    <Text as="span" color="#db7b3a">
                        .
                    </Text>
                </Text>

                <Grid
                    templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 320px)' }} // 2 columns on small screens, 3 on large
                    gap="30px"
                    justifyContent="center" // Center grid on smaller screens
                    alignItems="center"
                    position="relative"
                    zIndex="2"
                    marginTop="40px"
                    marginLeft={{ base: '10px', lg: '33px' }} // Responsive margin
                    marginRight={{ base: '10px', lg: '0' }} // Responsive margin
                >
                    {industriesData.map((industry, index) => (
                        <Box
                            key={index}
                            width={industry.width || { base: '100%', lg: '320px' }} // Responsive width
                            height="320px"
                            borderRadius="20px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                            padding="20px"
                            position="relative"
                            backgroundColor={
                                industry.className === 'light-blue'
                                    ? '#becedc'
                                    : industry.className === 'white'
                                        ? 'white'
                                        : industry.className === 'dark-blue'
                                            ? '#3f77a5'
                                            : 'white'
                            }
                            color={
                                industry.className === 'dark-blue' ||
                                    (industry.className === 'light-blue' && index === 6)
                                    ? 'white'
                                    : 'black'
                            }
                            gridColumn={{
                                base: index === 2 || index === 5 ? 'span 2' : 'span 1', // 2-1-2-1-2 pattern
                                lg: industry.className === 'election-box' ? 'span 3' : 'span 1', // Original layout on large screens
                            }}
                        >
                            <Image
                                src={industry.img}
                                alt={industry.name}
                                width="33px"
                                height="33px"
                                position="absolute"
                                bottom="55px"
                                left="20px"
                            />

                            <Text
                                fontSize="16px"
                                fontWeight="600"
                                position="absolute"
                                bottom="20px"
                                left="20px"
                            >
                                {industry.name}
                                <Box
                                    width="18px"
                                    height="3px"
                                    borderRadius="2px"
                                    marginTop="5px"
                                    backgroundColor={
                                        industry.className === 'white' ||
                                            industry.className === 'election-box' ||
                                            (industry.className === 'light-blue' && index !== 6)
                                            ? '#3f77a5'
                                            : 'white'
                                    }
                                />
                            </Text>
                        </Box>
                    ))}

                    <Image
                        src="/assets/frame.png"
                        alt="Frame"
                        width={{ base: '100%', lg: '320px' }} // Responsive width
                        height="320px"
                        position="absolute"
                        top={{ base: 'auto', lg: '335px' }} // Responsive top position
                        right={{ base: '10px', lg: '33px' }} // Responsive right position
                        zIndex="2"
                        display={{ base: 'none', lg: 'block' }} // Hide on smaller screens
                    />
                </Grid>

                <Box
                    position="absolute"
                    top={{ base: 'auto', lg: '1254px' }} // Responsive top position
                    right={{ base: '10px', lg: '223px' }} // Responsive right position
                    width={{ base: '90%', lg: '466px' }} // Responsive width
                    height="1px"
                    backgroundColor="#3f77a5"
                    zIndex="2"
                />

                <Button
                    position="absolute"
                    top={{ base: 'auto', lg: '1229px' }} // Responsive top position
                    right={{ base: '10px', lg: '33px' }} // Responsive right position
                    height="50px"
                    width="146px"
                    backgroundColor="white"
                    color="#3F77A5"
                    fontSize="16px"
                    fontWeight="600"
                    borderRadius="12px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="8px"
                    zIndex="2"
                    _hover={{ backgroundColor: '#f0f0f0' }}
                >
                    All Industries
                    <Image src='./assets/arrowuprb.svg' alt="Arrow" width="14px" height="14px" />
                </Button>
            </Box>
        </>
    );
};

export default Industries;