import React, { useState } from 'react';
import { Box, Flex, Text, Image, Button, CloseButton } from '@chakra-ui/react';

const AdvancedComputerVision = ({
  title1 = 'Advanced Computer',
  title2 = 'Vision & Image Intelligence',
  subtitle = 'AI-Powered Visual Processing',
  description = 'Extracts, analyzes, and interprets video data in real-time.',
  cards = [
    {
      type: 'video',
      label: 'Video Placeholder',
      media: 'https://www.w3schools.com/html/mov_bbb.mp4', // Dummy video URL
    },
    {
      type: 'image',
      label: 'Scene Understanding',
      media: '/assets/car.png', // Dummy image URL
    },
    {
      type: 'image',
      label: 'Multi-Modal Recognition',
      media: '/assets/car.png', // Dummy image URL
    },
    {
      type: 'image',
      label: 'Automated Decision Making',
      media: '/assets/car.png', // Dummy image URL
    },
  ],
  backgroundImage = '/assets/VMuktidot.png',
}) => {
  const [activeCard, setActiveCard] = useState(0) // First card is active by default

  const handleNavigation = (direction) => {
    if (direction === 'left') {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1)) // Move to the previous card
    } else if (direction === 'right') {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1)) // Move to the next card
    }
  }

  return (
    <Flex
      height={{ base: 'auto', md: '856px' }}
      flexShrink={0}
      direction={'column'}
      borderRadius="20px"
      bgColor="white"
      mx="2%"
      position="relative"
      overflow="hidden"
      p={{ base: "4", md: "0" }}
      zIndex={1}
      mt="-50px" // Added top margin to push the box lower
    >
      {/* Random dots background */}
      <Box
        position="absolute"
        top="0"
        right="0"
        maxWidth={{ base: '100%', md: '1050px' }}
        height={{ base: '50%', md: '525px' }}
        flexShrink={0}
        aspectRatio="16/9"
        opacity="0.8"
        zIndex="0"
        pointerEvents="none"
      >
        <Image
          src={backgroundImage}
          alt="Background"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>

      {/* Title Section */}
      <Box
        marginLeft={{ base: '4', md: '70px' }}
        marginTop={{ base: '4', md: '42px' }}
        marginBottom={{ base: '4', md: '38px' }}
        position="relative"
        zIndex="1"
      >
        <Text
          color="black"
          fontSize={{ base: '18px', md: '36px' }} // Adjusted font size for small screens
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="-0.54px"
        >
          {title1}
        </Text>
        <Text
          color="#3f77a5"
          fontSize={{ base: '18px', md: '36px' }} // Adjusted font size for small screens
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="-0.54px"
        >
          {title2}
        </Text>
      </Box>

      {/* Content Section */}
      <Flex
        marginBottom={{ base: '4', md: '30px' }}
        position="relative"
        width="100%"
        zIndex="1"
      >
        {/* Cards */}
        <Flex
          width="100%"
          gap={{ base: '2', md: '15px' }}
          px={{ base: '4', md: '70px' }}
          position="relative"
          justifyContent={'space-evenly'}
          zIndex="2"
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              width={activeCard === index ? '80%' : '20%'}
              height={{ base: "295px", md: "439px" }}
              borderRadius="24px"
              bgColor={index % 2 === 0 ? "#BECEDC" : "#EAEAEA"}
              _hover={{ bgColor: '#a8c0d3', cursor: 'pointer' }}
              transition="width 0.3s ease, background-color 0.3s ease"
              onMouseEnter={() => setActiveCard(index)}
              cursor="pointer"
              position="relative"
            // bg="darkred"
            >
              {activeCard === index ? (
                // Expanded Card Content
                <Flex width="100%" height="100%" borderRadius="24px">
                  <Box
                    width="100%"
                    height="100%"
                    flexDirection="column"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    overflow="hidden"
                    borderRadius="24px"
                  >
                    {card.type === 'video' ? (
                      <video
                        src={card.media}
                        autoPlay
                        loop
                        muted
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        src={card.media}
                        alt={card.label}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                      />
                    )}
                  </Box>
                </Flex>
              ) : (
                // Squeezed Card Content
                <Box
                position="absolute"
                bottom="38%" // Ensure the text is inside the card
                right="20px"
                // top={'10p'}
                left="0px"
                transform="rotate(-90deg)"
                text-orientation="upright"
                transformOrigin="bottom right"
                display="flex"
                flexDirection="column"
                alignItems="flex-start" // Aligns dash with the start of the text
                whiteSpace="normal"
                >
                  <Text
                    fontSize="16px"
                    fontWeight="700"
                    letterSpacing="-0.24px"
                    color="black"
                    width="200%"
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

      </Flex>

      {/* Info Section */}
      <Flex
        // position="relative"
        mx={{ base: '4', md: '70px' }}
        zIndex="1"
        marginTop={{ base: '4', md: '20px' }}
        justifyContent={'space-between'}
      >
        <Flex direction={"column"}><Text
          color="black"
          fontSize={{ base: "14px", md: "16px" }} // Adjusted font size for small screens
          fontWeight="700"
          lineHeight="normal"
          letterSpacing={{ base: "-0.21px", md: "-0.24px" }}
          whiteSpace="normal" // Allow text wrapping
          maxWidth={{ base: "90%", md: "100%" }} // Ensure text doesn't overflow
        >
          {cards[activeCard].label}
        </Text>
          <Text
            color="#696969"
            fontSize={{ base: '12px', md: '14px' }} // Adjusted font size for small screens
            fontWeight="500"
            lineHeight="normal"
            letterSpacing={{ base: '-0.18px', md: '-0.21px' }}
            whiteSpace="normal" // Allow text wrapping
            maxWidth={{ base: '50%', md: '100%' }} // Ensure text doesn't overflow
          >
            {description}
          </Text>
        </Flex>

        {/* Navigation buttons */}
        <Flex
          width="64px"
          height="30.769px"
          // position="absolute"
          // top="0px" // Fixed position at the top
          // right="73px" // Fixed position from the right
          justifyContent="space-between"
        >
          <Button
            width={{ base: '25px', md: '30.769px' }}
            height={{ base: '25px', md: '30.769px' }}
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
            width={{ base: '25px', md: '30.769px' }}
            height={{ base: '25px', md: '30.769px' }}
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
      </Flex>
    </Flex>
  )
}

export default AdvancedComputerVision
