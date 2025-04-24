import {
  Box,
  Grid,
  Text,
  // Image,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
import HeadingAnimation from '../../../components/Animation/Text/HeadingAnimation'
import ImagePop from '../../../components/Animation/Image/ImagePop'
import { useEffect, useState, useRef } from 'react'

// Custom hook for count-up animation with viewport detection
const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    // return () => {
    //   if (ref.current) observer.unobserve(ref.current);//I have to solve the yarn build error here...
    // };
  }, []);

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16) // Approx. 60fps
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.ceil(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isVisible, target, duration])

  return { count, ref }
}

// Component for animated count-up value
const AnimatedValue = ({ value, suffix }) => {
  const numericValue = parseInt(value.replace(/\D/g, '')) // Extract numeric value
  const { count, ref } = useCountUp(numericValue, 500)

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

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
  // const cardSize = useBreakpointValue({
  //   base: 'minmax(130px, 180px)',
  //   sm: 'minmax(150px, 180px)',
  //   md: 'minmax(200px, 283px)',
  //   lg: '283px',
  // })

  const containerWidth = useBreakpointValue({
    base: '100%',
    md: '100%',
    lg: '1512px',
  })
  const containerHeight = useBreakpointValue({
    base: 'auto',
    md: 'auto',
    lg: 'auto',
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
    base: 'clamp(32px, 8vw, 48px)', // Min 32px, scales up to 48px for small screens
    md: 'clamp(48px, 6vw, 64px)', // Min 48px, scales up to 64px for medium+ screens
  })

  const labelFontSize = useBreakpointValue({
    base: 'clamp(12px, 2vw, 12px)', // Fixed at 12px for small screens
    md: 'clamp(12px, 1.5vw, 16px)', // Starts at 12px, scales up to 16px for medium+ screens
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
      <Flex
        position="relative"
        textAlign="center"
        justifyContent="center"
        direction={'column'}
        alignItems="center"
        padding={{ base: '20px', md: '40px 20px' }}
        backgroundColor="#E7E7E7"
        width="100%"
        overflow="hidden"
        maxWidth={containerWidth}
        minHeight={containerHeight}
        margin="0 auto"
      >
        {/* In this we can try some new animation such that half part is come from left and another comes from right. */}
        <HeadingAnimation>
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
        </HeadingAnimation>
        <Box
          position="absolute"
          top={{ base: '50%', md: '60%', lg: '70%' }} // Align center vertically
          left={{ base: '60%', md: '70%', lg: '80%' }} // Responsive positioning like Image
          transform="translate(-50%, -50%)" // Centering correction
          width="408px"
          height="408px"
          flexShrink={0}
          borderRadius="50%" // Ensure a circular shape
          opacity="0.12"
          background="#3F77A5"
          filter="blur(56.6px)"
          zIndex={0} // Behind content but above the Image
        />

        {/* //background use properties: width: 255px;height: 255px;flex-shrink: 0; fill: #3F77A5;opacity: 0.12;filter: blur(56.599998474121094px); */}
        <Box
          position="absolute"
          left={{ base: '50%', md: '30%', lg: '45px' }}
          top={{ base: '0', md: '0', lg: '48px' }}
          transform={{
            base: 'translateX(-50%)',
            md: 'translateX(-50%)',
            lg: 'none',
          }}
          width={ellipseSize}
          height={ellipseSize}
          flexShrink={0}
          bg="#3F77A5"
          // bg="red"
          opacity="0.12"
          filter="blur(56.6px)"
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
            <ImagePop key={index} delay={index * 0.05}>
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
                  as="div"
                  fontSize={valueFontSize}
                  fontWeight="600"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <AnimatedValue
                    value={item.value}
                    suffix={item.value.replace(/\d+/g, '')}
                  />
                </Text>
                <Text
                  as="div"
                  fontSize={labelFontSize}
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
            </ImagePop>
          ))}
        </Grid>
      </Flex>
    </>
  )
}

export default Achieved
