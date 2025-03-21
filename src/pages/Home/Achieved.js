import {
  Box,
  Grid,
  Text,
  Image,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
// import ellipse38 from '../assets/Ellipse38.png' //assets/Ellipse38.png'
// import ellipse38 from '../public/assets/Ellipse38.png'
// import ellipse39 from '../assets/Ellipse39.png'

const achievementsData = [
  { value: '18+', label: 'No. of Years of Innovation', isBlack: false },
  { value: '1B+', label: 'Number of cameras feeds', isBlack: true },
  { value: '200M+', label: 'Number of minutes streamed', isBlack: false },
  { value: '3M+', label: 'No. of users served', isBlack: false },
  { value: '1M+', label: 'No. of cameras supplied', isBlack: false },
  { value: '900+', label: 'No. of projects completed', isBlack: true },
]

const Achieved = () => {
  // Responsive values with additional breakpoints for smoother transitions
  const gridColumns = useBreakpointValue({
    base: 'repeat(2, minmax(130px, 1fr))',
    sm: 'repeat(2, minmax(150px, 1fr))',
    md: 'repeat(3, minmax(200px, 283px))',
    lg: 'repeat(3, 283px)',
  })

  // Dynamic card size that scales with viewport width
  const cardSize = useBreakpointValue({
    base: 'minmax(130px, 180px)',
    sm: 'minmax(150px, 180px)',
    md: 'minmax(200px, 283px)',
    lg: '283px',
  })

  const containerWidth = useBreakpointValue({
    base: '100%',
    md: '100%',
    lg: '1512px',
  })
  const containerHeight = useBreakpointValue({
    base: 'auto',
    md: 'auto',
    lg: '1038px',
  })
  const titleFontSize = useBreakpointValue({
    base: '26px',
    md: '36px',
    lg: '48px',
  })

  // Responsive gap that scales with viewport width
  const gap = useBreakpointValue({
    base: '8px',
    sm: 'clamp(8px, 2vw, 20px)',
    md: 'clamp(20px, 4vw, 50px)',
    lg: '76px',
  })

  const ellipseSize = useBreakpointValue({
    base: '200px',
    md: '300px',
    lg: '408px',
  })
  const cardPadding = useBreakpointValue({
    base: '10px',
    md: '15px',
    lg: '20px',
  })

  // Responsive font sizes
  const valueFontSize = useBreakpointValue({
    base: 'clamp(10%, 8vw, 45px)',
    md: 'clamp(20%, 6vw, 64px)',
    lg: '64px',
  })

  const labelFontSize = useBreakpointValue({
    base: 'clamp(12px, 2vw, 12px)',
    md: 'clamp(14px, 1.5vw, 16px)',
    lg: '16px',
  })

  const labelBottomMargin = useBreakpointValue({
    base: '10px',
    md: '15px',
    lg: '20px',
  })
  const labelLeftMargin = useBreakpointValue({
    base: '10px',
    md: '15px',
    lg: '20px',
  })
  const titleMarginBottom = useBreakpointValue({
    base: '20px',
    md: '40px',
    lg: '70px',
  })

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600;700&display=swap');
        `}
      </style>

      <Flex
        position="relative"
        textAlign="center"
        justifyContent="center"
        direction={'column'}
        alignItems="center"
        padding={{ base: '20px', md: '40px 20px' }}
        backgroundColor="#f3f3f3"
        width="100%"
        maxWidth={containerWidth}
        minHeight={containerHeight}
        margin="0 auto"
        overflow="hidden"
        fontFamily="'Wix Madefor Display', sans-serif"
      >
        <Text
          fontSize={titleFontSize}
          fontWeight="600"
          marginBottom={titleMarginBottom}
        >
          What we have{' '}
          <Text as="span" color="#3f77a5">
            achieved
          </Text>
        </Text>

        <Image
          src={'/assets/Ellipse38.png' || '/placeholder.svg'}
          alt="ellipse38"
          position="absolute"
          left={{ base: '50%', md: '70%', lg: '1081px' }}
          top={{ base: 'auto', md: 'auto', lg: '630px' }}
          bottom={{ base: '0', md: '0', lg: 'auto' }}
          transform={{
            base: 'translateX(-50%)',
            md: 'translateX(-50%)',
            lg: 'none',
          }}
          width={ellipseSize}
          opacity="1"
          pointerEvents="none"
          zIndex="0"
        />
        <Image
          src={'/assets/Ellipse39.png' || '/placeholder.svg'}
          alt="ellipse39"
          position="absolute"
          left={{ base: '50%', md: '30%', lg: '45px' }}
          top={{ base: '0', md: '0', lg: '48px' }}
          transform={{
            base: 'translateX(-50%)',
            md: 'translateX(-50%)',
            lg: 'none',
          }}
          width={ellipseSize}
          opacity="1"
          pointerEvents="none"
          zIndex="0"
        />

        <Grid
          templateColumns={gridColumns}
          templateRows={{
            base: 'repeat(3, auto)',
            md: 'repeat(2, auto)',
            lg: 'repeat(2, 283px)',
          }}
          columnGap={gap}
          rowGap={{
            base: '8px',
            sm: 'clamp(8px, 2vw, 20px)',
            md: 'clamp(20px, 5vw, 70px)',
            lg: '105px',
          }}
          justifyContent="center"
          alignItems="center"
          width="100%"
          maxWidth={{ base: '100%', lg: '1200px' }}
          px={{ base: '2px', sm: '10px', md: '20px' }}
        >
          {achievementsData.map((item, index) => (
            <Box
              key={index}
              width={{
                base: 'minmax(130px, 180px)',
                sm: 'minmax(150px, 180px)',
                md: 'minmax(200px, 250px)',
                lg: '283px',
              }}
              height={{
                base: 'minmax(130px, 180px)',
                sm: 'minmax(150px, 180px)',
                md: 'minmax(200px, 250px)',
                lg: '283px',
              }}
              backgroundColor={item.isBlack ? 'white' : '#3f77a5'}
              color={item.isBlack ? '#3f77a5' : 'white'}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={cardPadding}
              borderRadius="24px"
              position="relative"
              aspectRatio="1/1"
            >
              <Text
                fontSize={valueFontSize}
                fontWeight="600"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              >
                {item.value}
              </Text>
              <Text
                fontSize={{ base: '14px', md: '18px', lg: '18px' }}
                fontWeight="700"
                position="absolute"
                bottom={labelBottomMargin}
                left={labelLeftMargin}
                color={item.isBlack ? 'black' : 'white'}
                textAlign="left"
                width="calc(100% - 20px)"
                wordBreak={
                  item.label === 'Number of minutes streamed'
                    ? 'break-word'
                    : 'normal'
                }
                lineHeight="1.2"
              >
                {item.label}
                <Box
                  width="15px"
                  height="2px"
                  borderRadius="2px"
                  marginTop="3px"
                  backgroundColor={item.isBlack ? '#3f77a5' : 'white'}
                />
              </Text>
            </Box>
          ))}
        </Grid>
      </Flex>
    </>
  )
}

export default Achieved
