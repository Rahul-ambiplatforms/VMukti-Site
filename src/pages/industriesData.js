import React from 'react'
import {
  Box,
  Grid,
  Text,
  Image,
  Button,
  Flex,
  useBreakpointValue,
  SimpleGrid,
} from '@chakra-ui/react'
const industriesData = [
  {
    name: 'Healthcare Industry',
    img: './assets/health.svg',
    className: 'light-blue',
  },
  {
    name: 'Education Industry',
    img: './assets/education.svg',
    className: 'white',
  },
  { name: 'Defense', img: '/assets/defense.svg', className: 'light-blue' },
  {
    name: 'Election',
    img: '/assets/election.svg',
    className: 'election-box',
    width: { base: '100%', sm: '100%', md: '720px' },
  },
  {
    name: 'Transportation Industry',
    img: '/assets/transport.svg',
    className: 'dark-blue',
  },
  { name: 'City Monitoring', img: './assets/monitor.svg', className: 'white' },
  {
    name: 'Warehousing & Logistic Industry',
    img: './assets/warehouse.svg',
    className: 'light-blue',
  },
  { name: 'New Industry', img: '', className: 'red' }, // Added at the end
]

const Industries = () => {
  // Responsive values
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isMobile = useBreakpointValue({ base: true, sm: false })
  const isTablet = useBreakpointValue({ base: false, sm: true, lg: false })

  const containerHeight = useBreakpointValue({
    base: 'auto',
    sm: 'auto',
    lg: '1338px',
  })

  const titleFontSize = useBreakpointValue({
    base: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
  })

  const gridGap = useBreakpointValue({
    base: '10px',
    sm: '12px',
    md: '15px',
    lg: '15px',
  })

  const cardHeight = useBreakpointValue({
    base: '150px',
    sm: '180px',
    md: '250px',
    lg: '320px',
  })

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600&display=swap');
          
          @media screen and (max-width: 320px) {
            body {
              min-width: 320px;
            }
          }
        `}
      </style>

      {isDesktop ? (
        // DESKTOP VIEW - Exactly as original
        <Box
          textAlign="center"
          backgroundColor="#f3f3f3"
          maxWidth="1512px"
          height="1338px"
          position="relative"
          mt="5%"
          fontFamily="'Wix Madefor Display', sans-serif"
          _before={{
            content: '""',
            position: 'absolute',
            top: '200px',
            left: '24px',
            width: '100%',
            height: '100%',
            backgroundImage: `url('/assets/image7.png')`,
            backgroundPosition: 'left top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1138px',
            opacity: '1',
            zIndex: '1',
          }}
        >
          <Text
            fontSize="48px"
            fontWeight="600"
            marginBottom="20px"
            paddingLeft="40px"
            lineHeight="normal"
            textAlign="center"
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
            templateColumns="repeat(3, 320px)"
            gap="15px"
            justifyContent="start"
            alignItems="center"
            position="relative"
            zIndex="2"
            marginTop="40px"
            marginLeft="33px"
          >
            {industriesData.map((industry, index) => (
              <Box
                key={index}
                width={industry.width || '320px'}
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
                gridColumn={
                  industry.className === 'election-box' ? 'span 3' : ''
                }
                marginLeft={
                  index === 7
                    ? '1126px'
                    : index === 1 ||
                      index === 2 ||
                      index === 4 ||
                      index === 5 ||
                      index === 6
                    ? '456px'
                    : '0'
                }
                marginRight={index === 0 || index === 6 ? '15px' : ''}
                marginTop={index === 7 ? '-1015px' : '0'}
              >
                <Image
                  src={industry.img || '/placeholder.svg'}
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

            {/* <Image
              src={frame || '/placeholder.svg'}
              alt="Frame"
              width="320px"
              height="320px"
              position="absolute"
              top="335px"
              right="33px"
              zIndex="2"
            /> */}
          </Grid>

          <Box
            position="absolute"
            top="1254px"
            right="223px"
            width="466px"
            height="1px"
            backgroundColor="#3f77a5"
            zIndex="2"
          />

          <Button
            position="absolute"
            top="1229px"
            right="33px"
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
            <Image
              src={'./assets/arrowuprb.svg' || '/placeholder.svg'}
              alt="Arrow"
              width="14px"
              height="14px"
            />
          </Button>
        </Box>
      ) : (
        // TABLET AND MOBILE VIEW
        <Box
          textAlign="center"
          backgroundColor="#f3f3f3"
          maxWidth="100%"
          mt="5%"
          minWidth="320px"
          height="auto"
          position="relative"
          fontFamily="'Wix Madefor Display', sans-serif"
          padding={{ base: '20px 15px', sm: '30px 20px' }}
          overflow="hidden"
          margin="0 auto"
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: `url('/assets/image7.svg')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: '0.5',
            zIndex: '1',
          }}
        >
          <Text
            fontSize={titleFontSize}
            fontWeight="600"
            marginBottom={{ base: '20px', sm: '30px' }}
            padding="0"
            lineHeight="normal"
            textAlign="center"
            position="relative"
            zIndex="2"
          >
            Crafting Unique{' '}
            <Text as="span" color="#db7b3a">
              AI
            </Text>{' '}
            Solutions for {!isMobile && <br />}
            <Text as="span" color="#3f77a5">
              Every Industry
            </Text>
            <Text as="span" color="#db7b3a">
              .
            </Text>
          </Text>

          <Box
            position="relative"
            zIndex="2"
            margin="0 auto"
            width={{ base: '95%', sm: '90%' }}
            maxWidth={{ base: '100%', sm: '720px' }}
            minWidth="300px"
            overflow="visible"
          >
            {/* All cards in a grid, including election */}
            <SimpleGrid
              columns={{ base: 2, sm: 2 }}
              spacing={gridGap}
              mx="auto"
              width="100%"
              minChildWidth="130px"
            >
              {industriesData.map((industry, index) => (
                <Box
                  key={index}
                  width="100%"
                  height={cardHeight}
                  minHeight="120px"
                  borderRadius="20px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="flex-start"
                  padding={{ base: '15px', sm: '20px' }}
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
                  // Make election box span 2 columns
                  gridColumn={
                    industry.className === 'election-box'
                      ? { base: 'span 2' }
                      : 'auto'
                  }
                  overflow="hidden"
                >
                  <Image
                    src={industry.img || '/placeholder.svg'}
                    alt={industry.name}
                    width={{ base: '24px', sm: '28px' }}
                    height={{ base: '24px', sm: '28px' }}
                    position="absolute"
                    bottom={{ base: '45px', sm: '55px' }}
                    left={{ base: '15px', sm: '20px' }}
                  />

                  <Text
                    fontSize={{
                      base: index === 6 ? '10px' : '12px',
                      sm: index === 6 ? '12px' : '14px',
                    }}
                    fontWeight="600"
                    position="absolute"
                    bottom={{ base: '15px', sm: '20px' }}
                    left={{ base: '15px', sm: '20px' }}
                    pr="5px"
                    width="calc(100% - 30px)"
                    lineHeight="1.2"
                    noOfLines={2}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    textAlign="left"
                  >
                    {industry.name}
                    <Box
                      width={{ base: '15px', sm: '18px' }}
                      height={{ base: '2px', sm: '3px' }}
                      borderRadius="2px"
                      marginTop={{ base: '3px', sm: '5px' }}
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
            </SimpleGrid>

            {/* Static image for tablet view - positioned to show right side */}
            {isTablet && (
              <Box
                mt={4}
                display="flex"
                justifyContent="flex-end"
                pr={{ base: '0', sm: '33px' }}
                position="relative"
              >
                {/* <Image
                  src={frame || '/placeholder.svg'}
                  alt="Frame"
                  width="250px"
                  height="250px"
                  objectFit="contain"
                /> */}
              </Box>
            )}
          </Box>

          {/* Footer with line and button */}
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            width="95%"
            margin="30px auto 0"
            position="relative"
            zIndex="3"
          >
            {/* Line */}
            <Box
              width="60%"
              height="1px"
              backgroundColor="#3f77a5"
              flex="1"
              marginRight="10px"
            />

            {/* Button */}
            <Button
              height="50px"
              width="146px"
              backgroundColor="white"
              color="#3F77A5"
              fontSize={{ base: '14px', sm: '16px' }}
              fontWeight="600"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="8px"
              _hover={{ backgroundColor: '#f0f0f0' }}
            >
              All Industries
              <Image
                src={'./assets/arrowuprb.svg' || '/placeholder.svg'}
                alt="Arrow"
                width="14px"
                height="14px"
              />
            </Button>
          </Flex>
        </Box>
      )}
    </>
  )
}

export default Industries
