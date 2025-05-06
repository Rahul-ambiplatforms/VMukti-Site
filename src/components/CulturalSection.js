import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const floatingAnimation = {
  hidden: { y: 0, opacity: 1 },
  visible: (index) => ({
    opacity: 1,
    y: ['0%', '15%', '0%'],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      // times: [0.2, 0.5, 1],
      delay: index * 0.3,
    },
  }),
}

export default function CulturalSection({ gridItems }) {
  return (
    <Box py={{ base: 6, md: 0 }} position="relative" overflow="hidden">
      <Container
        maxW={{ base: '100%', lg: '100%' }}
        px={{ base: 4, md: 0 }}
        position="relative"
      >
        {/* Background elements remain unchanged */}
        <Box
          position="absolute"
          top={{ base: '-8px', md: '5%' }}
          right={{ base: '-8px', md: '10%' }}
          width={{ base: '200px', sm: '300px', md: '408px' }}
          height={{ base: '200px', sm: '300px', md: '408px' }}
          flexShrink="0"
          borderRadius="full"
          opacity="0.12"
          background="#3F77A5"
          filter="blur(56.6px)"
          zIndex="0"
          transform={{ base: 'scale(0.8)', md: 'scale(1)' }}
          // bg="red"
        />
        <Box
          position="absolute"
          top={{ base: '30%', lg: '20%' }}
          left={{ base: '50%', lg: '0' }}
          right={{ lg: '0' }}
          bottom={{ lg: '0' }}
          transform={{ base: 'translateX(-50%)', lg: 'none' }}
          opacity="0.8"
          width={{ base: '300px', lg: '1050px' }}
          height={{ base: '300px', lg: '525px' }}
          zIndex="0"
          backgroundRepeat="no-repeat"
          backgroundImage={`url(${process.env.PUBLIC_URL}/assets/BannerBrochre4.svg)`}
          backgroundPosition="center"
        />

        <Box
          display="grid"
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          // gap={{ base: "24px",md: "34px", lg: "34px" }}
          gap={{ base: '20px', md: '24px', lg: '32px' }}
          position="relative"
          zIndex="1"
          justifyItems={{ base: 'center', lg: 'start' }}
        >
          {gridItems.map((item, index) => {
            const isEmpty = !item.title && !item.description
            const isTimelineItem = item.subtitle !== undefined
            const isCenteredGrid = item.alignItems === 'Center'
            const isWide = item.isWide

            // Check if title is an array of text parts
            const isComplexTitle = Array.isArray(item.title)

            return (
              <MotionBox
                key={index}
                bg={item.bgColor || 'white'}
                p={{ base: 2, lg: 6 }}
                borderRadius={{ base: '20px', md: '24px' }}
                width={{
                  base: '280px',
                  sm: '300px',
                  lg: isWide ? 'calc(672px + 34px)' : '336px',
                }}
                height={{ lg: '336px' }}
                minHeight={{ base: '280px', lg: 'auto' }}
                aspectRatio="1/1"
                flexShrink="0"
                initial="hidden"
                animate="visible"
                variants={floatingAnimation}
                custom={index}
                display={{
                  base: isEmpty ? 'none' : isCenteredGrid ? 'flex' : 'block',
                  lg: isCenteredGrid ? 'flex' : 'block',
                }}
                flexDirection={isCenteredGrid ? 'column' : undefined}
                justifyContent={isCenteredGrid ? 'center' : undefined}
                alignItems={isCenteredGrid ? 'center' : undefined}
                textAlign={
                  isCenteredGrid || !item.title
                    ? 'center'
                    : isTimelineItem
                    ? 'left'
                    : 'left'
                }
                position={isTimelineItem ? 'relative' : 'static'}
                gridColumn={{
                  lg: isWide ? 'span 2' : undefined,
                }}
                // bg="red" //------------------------------------------
              >
                {item.title ? (
                  <>
                    {isTimelineItem ? (
                      /* Timeline Layout (unchanged) */
                      <>
                        <Heading
                          as="h3"
                          letterSpacing="-15"
                          fontSize={{ base: '24px', md: '36px', lg: '36px' }}
                          fontWeight="700"
                          color={item.textColor}
                          position="absolute"
                          // p="6"
                          top={{ base: '4', md: '6' }}
                          right={{ base: '4', md: '6' }}
                          textAlign="right"
                          // bg="blue"
                        >
                          {item.title}
                        </Heading>
                        <Box
                          position="absolute"
                          bottom="4"
                          left="4"
                          right="4"
                          mb="2%"
                        >
                          {item.subtitle && (
                            <Text
                              fontSize={{ base: '14px', lg: '16px' }}
                              color={item.textColor}
                              fontWeight="700"
                            >
                              {item.subtitle}
                            </Text>
                          )}
                          <Box
                            height="2.5px"
                            width="20px"
                            bg={
                              item.textColor === 'white' ? 'white' : '#3F77A5'
                            }
                            mb="2%"
                            mt="1%"
                          />
                          <Text
                            color={item.textColor}
                            fontSize={{ base: '14px', lg: '16px' }}
                            fontWeight={'500'}
                          >
                            {item.description}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      /* Enhanced Default/Centered Layout */
                      <>
                        <Heading
                          as="h3"
                          size={{ base: 'lg', lg: 'lg' }}
                          mb={{ base: 3, lg: 4 }}
                          textAlign={isCenteredGrid ? 'center' : 'left'}
                        >
                          {isComplexTitle ? (
                            // Render each part of the title with custom styling
                            item.title.map((titlePart, i) => (
                              <Text
                                as="span"
                                key={i}
                                color={
                                  titlePart.textColor ||
                                  item.textColor ||
                                  'inherit'
                                }
                                fontSize={{
                                  base: '36px', // Smaller size for mobile view
                                  md: titlePart.fontSize || 'inherit', // Default size for larger screens
                                }}
                                fontWeight={titlePart.fontWeight || 'inherit'}
                                fontStyle={titlePart.fontStyle || 'inherit'}
                                display="inline"
                                whiteSpace="pre"
                                order={{ base: 1, md: 'unset' }} // Change order for mobile view
                              >
                                {titlePart.text}  
                              </Text>
                            ))
                          ) : (
                            // Regular title rendering
                            <Text
                              as="span"
                              color={item.textColor}
                              fontSize="36px"
                            >
                              {item.title}
                            </Text>
                          )}
                        </Heading>
                        {item.description && (
                          <Text fontSize={{ base: '14px', lg: '16px' }}>
                            {item.description}
                          </Text>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  /* Render only description, centered */
                  <Text
                    fontSize={{ base: '24px', lg: '24px' }}
                    color={item.textColor}
                  >
                    {item.description}
                  </Text>
                )}
              </MotionBox>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
