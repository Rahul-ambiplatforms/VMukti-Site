import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
// import { motion } from 'framer-motion' //AnimatePresence, color
import CulturalSection from '../../components/CulturalSection'
import HeadingAnimation from '../../components/Animation/Text/HeadingAnimation'
import SubHeadingAnimation from '../../components/Animation/Text/SubHeadingAnimation'
import PageContentWrapper from '../../components/PageContentWrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// const MotionBox = motion(Box)

// Reusable constants for styles
const styles = {
  text: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'black',
    letterSpacing: '-0.24px',
  },
  button: {
    width: { base: '25px', md: '30.769px' },
    height: { base: '25px', md: '30.769px' },
    minWidth: '31px',
    minHeight: '31px',
    padding: '0',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    bgColor: '#E7E7E7',
    _hover: { bgColor: '#e0e0e0' },
  },
}

// Reusable component for Text with dynamic styles
const StyledText = ({ children, ...props }) => (
  <Text {...styles.text} {...props}>
    {children}
  </Text>
)

const DashboardItem = ({ item }) => (
  <Box
    // px={6}
    minHeight="300px"
    borderColor="gray.100"
  >
    <Image
      src={`${process.env.PUBLIC_URL}/${item.image}`}
      alt={item.title}
      borderRadius="24px"
      mb={4}
      height={{ base: '200px', md: '305px' }}
      objectFit="cover"
      width="100%"
    />
    <Box pl={{ base: 0, md: 4 }} textAlign={{ base: 'center', md: 'left' }}>
      <StyledText fontWeight="700" mb={1}>
        {item.title}
      </StyledText>
      <Box
        width="5%"
        height="2px"
        bg="blue.600"
        mx={{ base: 'auto', md: 0 }}
        mb={2}
      />
      <StyledText>{item.description}</StyledText>
    </Box>
  </Box>
)

// Extracted reusable SVG component for navigation arrows
const ArrowIcon = ({ direction }) => (
  <svg
    width="8"
    height="16"
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        direction === 'left'
          ? 'M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z'
          : 'M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z'
      }
      fill="#3F77A5"
    />
  </svg>
)

const NavigationButton = ({ onClick, direction }) => (
  <Button {...styles.button} onClick={onClick}>
    <ArrowIcon direction={direction} />
  </Button>
)

// Memoized dashboard items to avoid unnecessary re-renders
const dashboardItems = [
  {
    image: './assets/EventSpot.png',
    title: 'AI Surveillance',
    description: 'Convergence 2025',
  },
  {
    image: './assets/EventSpot.png',
    title: 'Smart Automation',
    description: 'Convergence 2025',
  },
  {
    image: './assets/EventSpot.png',
    title: 'Security Systems',
    // description: "Next-gen protection",
    description: 'Convergence 2025',
  },
  {
    image: './assets/EventSpot.png',
    title: 'Connected World',
    // description: "Seamless integration",
    description: 'Convergence 2025',
  },
]

const EventSpotlight = () => {
  const svgSize = useBreakpointValue({ base: '13px', md: '25px' })
  const swiperRef = useRef(null) // Initialize with null
  // const [currentIndex, setCurrentIndex] = useState(0) //I have to solve the yarn build error here...
  const [currentIndex] = useState(0) 
  // const [direction, setDirection] = useState(0)

  // Derived state for visible items
  // const visibleItems = [
  //   dashboardItems[currentIndex % dashboardItems.length],
  //   dashboardItems[(currentIndex + 1) % dashboardItems.length],
  // ]

  // Handlers for navigation
  const nextSlide = () => {
    // setDirection(1);
    // setCurrentIndex((prev) => (prev + 1) % dashboardItems.length);
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  const prevSlide = () => {
    // setDirection(-1);
    // setCurrentIndex(
    //   (prev) => (prev - 1 + dashboardItems.length) % dashboardItems.length
    // );
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  // const variants = {
  //   enter: (direction) => ({ x: direction > 0 ? '50%' : '-50%', opacity: 1 }),
  //   center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  //   exit: (direction) => ({
  //     x: direction < 0 ? '50%' : '-50%',
  //     opacity: 1,
  //     transition: { duration: 0.5 },
  //   }),
  // }

  const gridItems = [
    { bgColor: 'transparent' },
    {
      title: '2025',
      subtitle: 'SmartTech ', // Add this new field
      description: 'Participated in Gitex Technology Week Dubai 2017',
      bgColor: 'white',
      textColor: 'black', // Add if needed
    },
    { bgColor: 'transparent' },
    {
      title: 'Attended Events',
      bgColor: 'transparent',
      alignItems: 'Center', // Added to center this item in the grid
    },
    {
      title: '2024',
      subtitle: 'IFSEC', // Add this new field
      description: 'Visited Hong Kong for Global Sources Exhibition 2019',
      bgColor: 'white',
    },
    { bgColor: 'transparent' },
    {
      title: '2019',
      subtitle: 'Vibrant Startup & Technology Summit ', // Add this new field
      description: 'Participated in Vibrant Startup & Technology Summit',
      bgColor: '#BECEDC',
    },
    {
      title: '2019',
      subtitle: 'Indian Mobile Congress', // Add this new field
      description:
        'Participated in the 2019 Indian Mobile Congress, New Delhi.',
      bgColor: 'white',
    },
    {
      title: '2019',
      subtitle: 'Global Sources Exhibition', // Add this new field
      textColor: 'white',
      description: 'Participated in Gitex Technology Week Dubai 2017',
      bgColor: '#3F77A5',
    },
    {
      title: '2017',
      subtitle: 'Gitex Technology Week', // Add this new field
      description: 'Participated in Vibrant Startup & Technology Summit',
      bgColor: 'white',
    },
  ]

  return (
    <PageContentWrapper>
      <Flex
        direction="column"
        position="relative"
        overflow="hidden"
        // px={{ base: 4, md: 8 }}
      >
        {/* Title Section */}
        {/* <Box pt={{ base: 8, md: 16 }} mb={{ base: 4, md: 8 }}>*/}
        <Box mb={{ base: '4', md: '' }}>
          <HeadingAnimation>
            <Text
              fontSize={{ base: '30px', md: '32px', lg: '48px' }}
              fontWeight="600"
              lineHeight="normal"
              textAlign={{ base: 'flex-start', md: 'left' }}
            >
              <Text as="span" color="#3F77A5">
                Event Spotlight:{' '}
              </Text>
              <Text as="span" color="black">
                Where{' '}
              </Text>
              <Text as="span" color="#DB7B3A">
                Innovation{' '}
              </Text>
              <Text as="span" color="black">
                Meets <br /> Engagement
              </Text>
              <Text as="span" color="#3F77A5">
                .
              </Text>
            </Text>
          </HeadingAnimation>
        </Box>

        {/* Dynamic Dashboard */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          width="100%"
          mb={{ base: '4%', md: '8%' }}
          mt={{ base: '0', md: '2%' }}
          alignItems={{ base: 'flex-start', md: 'flex-start' }}
          // bg="red"
        >
          {/* Left Section */}
          <Flex
            direction="column"
            width={{ base: '100%', md: '25%' }}
            mb={{ base: 8, md: 0 }}
            // mt="20"
            alignItems="flex-start"
            // bg="red  "
          >
            <Box mb={{ base: '2', md: '4' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>

            <Box
              width={{ base: '80%', md: '331px' }}
              height="auto"
              mb={8}
              textAlign={{ base: 'left', md: 'left' }}
            >
              <SubHeadingAnimation>
                <Text
                  fontSize={{ base: '12px', md: '16px' }}
                  color="#000000"
                  fontWeight="500"
                >
                  VMukti is driving innovation with advanced AI technologies,
                  transforming surveillance, automation, and security for a
                  smarter, more connected world.
                </Text>
              </SubHeadingAnimation>
            </Box>

            <Box
              borderRadius="24px"
              width={{ base: '100%', md: '336px' }}
              height={{ base: 'auto', md: '336px' }}
              bg="#BECEDC"
              p={4}
              my={4}
              display="grid"
              placeItems="center"
              justifySelf="flex-end"
              textAlign="center"
            >
              <Text
                fontSize={{ base: '24px', md: '36px' }}
                fontWeight="600"
                color="black"
              >
                Incoming Events
              </Text>
            </Box>
          </Flex>

          {/* Right Section - Slider */}
          <Box
            mt={{ base: '-5%', md: '-10%' }}
            width={{ base: '100%', md: '75%' }}
            position="relative"
            overflow="hidden"
            alignSelf={'flex-end'}
            borderRadius="24px"
            height={{ md: '521px' }}
            bg="white"
            p={6}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={1}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {dashboardItems.map((item, index) => (
                <SwiperSlide key={index} style={{ padding: '0 1% 0 1%' }}>
                  <DashboardItem key={`${currentIndex}-${index}`} item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <Flex
              position={{ base: 'flex', md: 'absolute' }}
              bottom={10}
              left={10}
              gap="0.5"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              width="100%"
            >
              <NavigationButton onClick={prevSlide} direction="left" />
              <NavigationButton onClick={nextSlide} direction="right" />
            </Flex>
          </Box>
        </Flex>

        <CulturalSection gridItems={gridItems} />
      </Flex>
    </PageContentWrapper>
  )
}

export default EventSpotlight
