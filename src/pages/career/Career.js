import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import PageContentWrapper from '../../components/PageContentWrapper'
import CulturalSection from '../../components/CulturalSection' // Import the new reusable component

export default function VMuktiCareers() {
  const gridItems = [
    {
      title: 'Life at VMukti',
      description:
        'A dynamic workplace where innovation thrives, collaboration is encouraged, and every contribution matters.',
      bgColor: 'transparent',
      textColor: '#3F77A5',
      alignItems: 'Center',
    },
    { bgColor: '#BECEDC' },
    {},
    {
      title: 'Growth',
      description:
        'Unlock your potential with continuous learning, mentorship, and career advancement opportunities.',
      bgColor: 'transparent',
      textColor: '#DB7B3A',
      alignItems: 'Center',
    },
    {},
    {
      title: 'Culture',
      description:
        'We foster a supportive, inclusive, and fast-paced environment that empowers creativity and teamwork.',
      bgColor: 'transparent',
      textColor: '#DB7B3A',
      alignItems: 'Center',
    },
    { bgColor: '#BECEDC' },
    {},
    { bgColor: 'transparent' },
    {},
    {
      title: 'Work-Life Balance',
      description:
        'We value flexibility and well-being, ensuring you excel at work while enjoying life.',
      bgColor: 'transparent',
      textColor: '#3F77A5',
      alignItems: 'Center',
    },
    {},
  ]

  return (
    <PageContentWrapper>
      <Box bg="#E7E7E7">
        {/* Hero Section */}
        <HeroSection />

        {/* Culture Sections Grid */}
        <CulturalSection gridItems={gridItems} />

        {/* this condition is only for commenting the career opening section as there are no current openings */}
        {/* just remove the { fasle && ... } 
            everything in ... is for displaying the career opening section
        */}


        {/* Current Openings */}

        {false && <Box py={{ base: 6, md: 8 }}>
          <Box bg="white" p={{ base: 4, md: 6, lg: 8 }} borderRadius="24px">
            <Flex
              justify="space-between"
              align="center"
              mb={6}
              flexDirection={{ base: 'column', md: 'row' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Heading as="h2" fontSize={{ base: '26px', md: '36px' }}>
                Current{' '}
                <Box as="span" color="#3F77A5">
                  Opening
                </Box>
              </Heading>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              mb={4}
              flexDirection={{ base: 'column', md: 'row' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Text as="div" fontSize={{ base: '14px', md: '16px' }}>
                10 Jobs found{' '}
                <Box as="span" mx={2} color="#3F77A5">
                  |
                </Box>
                <Box as="span" color="#696969">
                  Showing 1-5
                </Box>
              </Text>
              <HStack mt={{ base: 4, md: 0 }}>
                <Flex justifyContent="space-between" gap={1}>
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
                    bgColor={'e0e0e0'}
                    _hover={{
                      background: { base: 'white', md: '#e0e0e0' }, // White for mobile, gray for desktop
                    }}
                  // onClick={handlePrev} // Use handlePrev for left navigation
                  >
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                      <path
                        d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant={'solid'}
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
                    bgColor={'e0e0e0'}
                    _hover={{
                      background: { base: 'white', md: '#e0e0e0' }, // White for mobile, gray for desktop
                    }}
                  // onClick={handleNext} // Use handleNext for right navigation
                  >
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                      <path
                        d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Button>
                </Flex>
              </HStack>
            </Flex>
            <Box borderBottom="1px" borderColor="#3F77A5" />
            <VStack
              spacing={{ base: 3, md: 4 }}
              align="stretch"
              divider={<Box borderBottom="1px" borderColor="#3F77A5" />}
            >
              {[1, 2, 3, 4, 5].map((job) => (
                <Flex
                  key={job}
                  justify="space-between"
                  align="center"
                  py={{ base: 2, md: 3 }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  <HStack
                    spacing={{ base: 3, md: 4 }}
                    align="start"
                    flexDirection={{ base: 'column', md: 'row' }}
                  >
                    <Box bg="white" color="white" p={2} borderRadius="md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="35"
                        viewBox="0 0 30 35"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 28.0959C0 30.4975 0.147258 32.1041 2.06616 33.686C2.44831 34.001 2.96593 34.3163 3.43685 34.5029C4.10194 34.7663 4.91057 35.0002 5.81055 35.0002H23.379C24.2392 35.0002 25.1024 34.7904 25.706 34.5245C26.3465 34.2423 26.9501 33.922 27.4649 33.4122C29.2553 31.6391 29.1896 30.0952 29.1896 27.8224C29.1896 26.4325 28.9389 24.9415 28.67 23.7619C28.1064 21.2892 26.8769 18.7071 24.4974 17.5437C23.6063 17.1079 22.5462 16.8848 21.465 16.8848C19.9592 16.8848 16.6484 21.582 10.7314 18.5264C9.75665 18.0229 8.6286 16.8848 7.51957 16.8848C3.47777 16.8848 1.19481 20.3292 0.506878 23.8858C0.377601 24.5539 0.238506 25.1962 0.156145 25.8592C0.0646902 26.5941 0 27.3116 0 28.0957L0 28.0959Z"
                          fill="#3F77A5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.94747 7.99803C5.94747 9.07286 5.93052 9.54481 6.20602 10.6105C6.28518 10.9168 6.35121 11.0954 6.45063 11.3914L6.91772 12.4281C8.98181 16.2164 13.5564 17.9482 17.8137 16.1729C18.366 15.9425 19.3073 15.3571 19.739 14.9536C20.7055 14.0498 21.4631 13.2963 22.0581 12.009C23.7771 8.29058 22.5881 4.05089 19.3762 1.61054C18.5717 0.999288 17.582 0.527959 16.6125 0.272608C16.0281 0.118633 15.4037 0.0272815 14.7699 0H13.9592C12.8221 0.048776 11.696 0.30392 10.7545 0.773699C8.08514 2.10574 5.94747 4.94229 5.94747 7.99813V7.99803Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: '14px', md: '16px' }}
                        color="#3F77A5"
                      >
                        Marketing Head
                      </Text>
                      <Box
                        borderBottom="2px"
                        borderColor="#3F77A5"
                        my={1}
                        width={'10%'}
                      />{' '}
                      {/* Horizontal divider */}
                      <Text
                        fontSize={{ base: '14px', md: '16px' }}
                        color="gray.500"
                      >
                        Full Time
                      </Text>
                    </Box>
                  </HStack>
                  <Box mt={{ base: 4, md: 0 }}>
                    <Text
                      fontSize={{ base: '14px', md: '16px' }}
                      fontWeight="bold"
                    >
                      Location
                    </Text>
                    <Box
                      borderBottom="2px"
                      borderColor="#3F77A5"
                      my={1}
                      width={'10%'}
                    />
                    <Text fontSize={{ base: '14px', md: '16px' }}>
                      Ahmedabad, GJ
                    </Text>
                  </Box>
                  <Box mt={{ base: 4, md: 0 }}>
                    <Text
                      fontSize={{ base: '14px', md: '16px' }}
                      fontWeight="bold"
                    >
                      Year of Experience
                    </Text>
                    <Box
                      borderBottom="2px"
                      borderColor="#3F77A5"
                      my={1}
                      width={'10%'}
                    />
                    <Text fontSize={{ base: '14px', md: '16px' }}>
                      5 to 6 years
                    </Text>
                  </Box>
                  <Button
                    size="sm"
                    bg="#E7E7E7"
                    _hover={{ bg: 'gray.300' }}
                    display="flex"
                    width={{ base: '100%', md: '146px' }}
                    height="50px"
                    padding="12px 24px"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                    flexShrink="0"
                    borderRadius="20px"
                    mt={{ base: 4, md: 0 }}
                    fontSize="16px"
                    fontWeight={'700'}
                  >
                    Apply
                  </Button>
                </Flex>
              ))}
            </VStack>
          </Box>
        </Box>}
        <Box py={{ base: 6, md: "4%" }} overflow="hidden" position="relative" borderRadius="24px" mt={10} bg="white"><Flex p={{ base: 4, md: 6, lg: 8 }} direction="column" justify="center" align="center" gap={5}>
          <Box
            position="absolute"
            opacity="0.8"
            left={{ base: -150, md: -300 }}
            width={{ base: '100%', lg: '1050px' }}
            height={{ base: '100%', lg: '525px' }}
            zIndex="0"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${process.env.PUBLIC_URL}/assets/BannerBrochre4.svg)`}
            backgroundPosition="center"
          />
          <Heading as="h2" fontSize={{ base: '26px', md: '36px' }}>
            Current{' '}
            <Box as="span" color="#3F77A5" >
              Opening
            </Box>
          </Heading>
          <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={600}>No current opening yet </Text>
          <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.675 32.9755H78.4162C78.195 29.1073 76.9246 25.5625 72.5064 25.5625L48.4925 25.5682C44.0742 25.5682 42.7981 29.113 42.5826 32.9811H44.3125C44.5337 30.2019 45.7247 27.7121 49.0937 27.7121H71.8996C75.2629 27.7121 76.4538 30.1963 76.675 32.9755ZM97.0881 27.8936C97.6099 27.3718 98.4549 27.4059 98.9541 28.0354C102.72 32.4877 105.721 37.6035 107.768 43.1793C114.568 61.7309 109.832 82.3486 96.0898 96.0899C82.3474 109.832 61.7308 114.569 43.1792 107.768C37.604 105.726 32.488 102.72 28.0353 98.9542C27.4058 98.4551 27.3717 97.6043 27.8935 97.0882L97.0881 27.8936ZM97.8708 30.599C113.077 49.5819 111.625 77.0616 94.3373 94.3427C77.0561 111.624 49.5765 113.082 30.5936 97.8762L39.1919 89.2779H90.3051C93.9861 89.2779 96.8162 86.0393 96.8162 82.3358V44.6416C96.8162 41.1081 94.2356 37.9716 90.7531 37.7165L97.8708 30.599ZM88.3027 40.1671L67.9811 60.4887V61.9123C75.4961 61.9179 79.2224 61.952 82.1603 60.7552C84.7352 59.706 87.0154 57.6074 91.3484 53.6145C92.2673 52.7694 93.2711 51.8449 94.3544 50.8581V44.6362C94.3544 42.2711 92.6415 40.1613 90.3162 40.1613L88.3027 40.1671ZM65.5085 62.9613L57.7042 70.7656H63.3362C64.601 70.7656 65.5085 69.6029 65.5085 68.3098V62.9613ZM55.237 73.2328L53.7851 74.6847H94.3541L94.3485 54.2049C83.3169 64.3346 83.8501 64.3912 67.9752 64.3799V68.316C67.9752 70.942 65.9504 73.239 63.3301 73.239L55.237 73.2328ZM51.3123 77.1575L48.4991 79.9707H94.3489V77.1575H51.3123ZM46.0319 82.4379L41.6648 86.805H90.311C92.6023 86.805 94.3039 84.7575 94.3492 82.4379H46.0319ZM23.9129 93.1064C23.3911 93.6282 22.546 93.5941 22.0468 92.9646C18.2808 88.5123 15.2804 83.3965 13.233 77.8207C6.43268 59.2691 11.1685 38.6514 24.9111 24.9101C38.6536 11.1676 59.2701 6.43106 77.8217 13.232C83.397 15.2796 88.5129 18.2799 92.9656 22.0458C93.5952 22.5449 93.6235 23.39 93.1074 23.9119L23.9129 93.1064ZM23.1302 90.4009C7.92389 71.4181 9.37628 43.9384 26.6637 26.6573C43.9448 9.37033 71.4245 7.91838 90.4073 23.1238L80.8732 32.6579C80.5329 27.5704 78.338 23.0955 72.5075 23.0955H48.4937C42.476 23.0955 40.3434 27.8596 40.1053 33.106C38.9482 33.4803 38.1656 34.6032 38.1656 35.8454V37.7H30.6904C27.0094 37.7 24.1792 40.9386 24.1792 44.6421V82.3362C24.1792 84.2249 24.9052 86.0285 26.1927 87.3443L23.1302 90.4009ZM27.9341 85.597L31.0933 82.4379H26.6523C26.675 83.6346 27.1287 84.769 27.9341 85.597ZM33.5605 79.9707L36.3736 77.1575H26.6523V79.9707H33.5605ZM38.8408 74.6847L49.3504 64.1807C37.576 64.1524 36.9577 63.5852 28.6035 55.8206C28.0023 55.2591 27.3557 54.6579 26.6467 54.0114V74.6901L38.8408 74.6847ZM51.812 61.7192L52.9349 60.5962V56.212C52.9349 53.5804 54.9597 51.289 57.58 51.289H62.2421L73.37 40.1611L30.6899 40.1668C28.3644 40.1668 26.6517 42.2766 26.6517 44.6417V50.6707C27.9959 51.8958 29.2039 53.0188 30.2872 54.0226C38.4771 61.6284 38.5916 61.7362 51.812 61.7192ZM55.4022 58.129L59.7694 53.7618H57.5745C56.3097 53.7618 55.4022 54.9245 55.4022 56.2176V58.129ZM75.8312 37.7L78.0829 35.4483H74.5324C74.3622 35.4483 74.2602 35.6752 74.2602 35.8453V37.6999L75.8312 37.7ZM60.5 0C93.9124 0 121 27.0876 121 60.5C121 93.9124 93.9124 121 60.5 121C27.0876 121 0 93.9124 0 60.5C0 27.0876 27.0876 0 60.5 0ZM101.535 19.4649C124.199 42.1284 124.199 78.8701 101.535 101.534C78.8716 124.197 42.1299 124.197 19.4663 101.534C-3.1972 78.8701 -3.1972 42.1284 19.4663 19.4649C42.1299 -3.19865 78.8716 -3.19865 101.535 19.4649ZM49.6786 37.7V35.8454C49.6786 35.074 49.3837 34.3708 48.9072 33.8603C48.3514 33.2364 47.6311 32.9812 46.7917 32.9812C46.9335 31.5122 47.3419 30.185 49.0944 30.185H71.9002C73.6641 30.185 74.0612 31.5235 74.2029 33.0038C72.8133 33.1796 71.7924 34.4331 71.7924 35.8453V37.6999L49.6786 37.7ZM46.9335 35.4483H40.9046C40.7344 35.4483 40.6323 35.6752 40.6323 35.8453V37.6999H47.2058V35.8453C47.2058 35.7149 47.1604 35.6014 47.0923 35.5277C47.0526 35.4766 46.9959 35.4483 46.9335 35.4483Z" fill="#3F77A5" />
          </svg>
          <Text color="#3F77A5" fontWeight={700} fontSize={{ base: "14px", md: "16px" }}>Kindly visit our LinkedIn page to learn more.</Text>
        </Flex></Box>

      </Box>
    </PageContentWrapper>
  )
}
