import React, { useState } from 'react'
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'

const AdvancedSurveillance = () => {
  const [activeCard, setActiveCard] = useState(0)

  // Data for the component
  const title1 = 'Advanced Surveillance for All.'
  const subtitle = 'Enterprise'
  const description =
    'Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.'

  const cards = [
    {
      type: 'open',
      label: 'Enterprise',
      description:
        'Explore innovative, scalable solutions designed to meet the urban security and operational needs of enterprises.',
      image: './assets/rectangle1.svg',
    },
    {
      type: 'squeezed',
      label: 'Government',
      description: 'Placeholder description for Government.',
      image: './assets/rectangle2.svg',
    },
    {
      type: 'squeezed',
      label: 'And Beyond',
      description: 'Placeholder description for And Beyond.',
      image: './assets/rectangle3.svg',
    },
  ]

  // Handle navigation
  const handleNavigation = (direction) => {
    setActiveCard((prev) =>
      direction === 'left'
        ? prev === 0
          ? cards.length - 1
          : prev - 1
        : prev === cards.length - 1
        ? 0
        : prev + 1
    )
  }

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600&display=swap');`}
      </style>

      <Flex
        backgroundColor="#f3f3f3"
        mx="2%"
        height="758px"
        fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight="600"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* White Box */}
        <Box
          width="100%"
          height="758px"
          borderRadius="20px"
          bgColor="white"
          position="relative"
          overflow="hidden"
        >
          {/* Title Section */}
          <Box
            marginRight="70px"
            marginTop="55px"
            position="relative"
            zIndex="2"
            display="flex"
            justifyContent="flex-end" // Right-align the text
          >
            <Text
              fontSize="36px"
              fontWeight="600"
              letterSpacing="-0.54px"
              color="black"
            >
              Advanced{' '}
              <Text as="span" color="#3F77A5">
                Surveillance for All.
              </Text>
            </Text>
          </Box>

          {/* Ellipses */}
          <Box
            position="absolute"
            top="37px"
            left="933px"
            opacity="1"
            zIndex="2"
          >
            <Image
              src="./assets/Ellipse33.svg"
              alt="Ellipse 33"
              width="408px"
              height="408px"
            />
          </Box>
          <Box
            position="absolute"
            top="336px"
            left="70px"
            opacity="1"
            zIndex="2"
          >
            <Image
              // src='./assets/Ellipse36.svg'
              alt="Ellipse 36"
              width="408px"
              height="408px"
            />
          </Box>

          {/* Cards Section */}
          <Flex
            marginTop="70px"
            marginLeft="70px"
            marginRight="70px"
            gap="15px"
            position="relative"
            zIndex="2"
          >
            {cards.map((card, index) => (
              <Box
                key={index}
                width={activeCard === index ? '80%' : '20%'}
                height="439px"
                borderRadius="24px"
                bgColor="#f3f3f3"
                _hover={{ cursor: 'pointer' }}
                transition="width 0.3s ease"
                position="relative"
                onClick={() => setActiveCard(index)}
              >
                {activeCard === index ? (
                  // Expanded Card Content
                  <Flex>
                    {/* Left Frame (Description) */}
                    <Box
                      width="272px"
                      height="439px"
                      padding="20px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start" // Align content to the top
                    >
                      <Text
                        fontSize="16px"
                        fontWeight="700"
                        letterSpacing="-0.24px"
                        color="black"
                      >
                        {card.label}
                        <Box
                          width="15px"
                          height="2px"
                          bgColor="#3f77a5"
                          borderRadius="2px"
                          marginTop="5px"
                        />
                      </Text>
                      <Text
                        color="#696969"
                        fontSize="14px"
                        fontWeight="600"
                        letterSpacing="-0.21px"
                        marginTop="10px"
                      >
                        {card.description}
                      </Text>
                    </Box>
                    {/* Right Frame (Image) */}
                    <Box
                      width="706px"
                      height="439px"
                      overflow="hidden"
                      borderRadius="24px"
                    >
                      <Image
                        src={card.image}
                        alt={card.label}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                    </Box>
                  </Flex>
                ) : (
                  // Squeezed Card - Rotated Text Inside
                  <Box
                    position="absolute"
                    bottom="28%" // Adjust this value to control vertical positioning
                    right="10%" // Adjust this value to control horizontal positioning
                    transform="rotate(-90deg)" // Rotate the text vertically
                    transformOrigin="bottom right" // Rotate around the bottom-right corner
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start" // Align dash with the start of the text
                    whiteSpace="nowrap" // Ensure text stays in one line
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="700"
                      letterSpacing="-0.24px"
                      color="black"
                    >
                      {card.label}
                    </Text>
                    <Box
                      width="15px"
                      height="2px"
                      bgColor="#3f77a5"
                      borderRadius="2px"
                      marginTop="5px"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>

          {/* Navigation Buttons */}
          <Flex
            position="absolute"
            top="653px"
            right="76px"
            gap="2px"
            zIndex="2"
          >
            <Button
              width="31px"
              height="31px"
              minWidth="31px"
              minHeight="31px"
              padding="0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              bgColor="#f3f3f3"
              _hover={{ bgColor: '#e0e0e0' }}
              onClick={() => handleNavigation('left')}
            >
              {/* <Image
                src={'./assets/left.svg'}
                alt="Left Arrow"
                height="15px"
                width="15px"
                margin="0 auto"
              /> */}
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
            <Button
              width="31px"
              height="31px"
              minWidth="31px"
              minHeight="31px"
              padding="0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              bgColor="#f3f3f3"
              _hover={{ bgColor: '#e0e0e0' }}
              onClick={() => handleNavigation('right')}
            >
              {/* <Image
                src="./assets/right.svg"
                alt="Right Arrow"
                height="15px"
                width="15px"
                margin="0 auto"
              /> */}
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
          </Flex>

          {/* "Book Demo" Button */}
          <Button
            position="absolute"
            top="653px"
            left="70px"
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
            Book Demo
            {/* <Image src="./assets/arrowdb.svg" alt="Arrow" width="14px" height="14px" /> */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Box>
      </Flex>
    </>
  )
}

export default AdvancedSurveillance
