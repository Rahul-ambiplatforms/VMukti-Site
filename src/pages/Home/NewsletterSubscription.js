import React, { useState } from 'react'
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  Icon,
} from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon, Divider } from '@chakra-ui/icons'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import SubscriptionBanner from '../../components/SubscriptionBanner'

const PhoneIcon = ({ mr = '10px', w = '21px', h = '21px' }) => (
  <Box
    as="svg"
    width={w}
    height={h}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    mr={mr}
  >
    <path
      d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z"
      fill="#3F77A5"
    />
  </Box>
)

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      console.log('Subscribed with email:', email)
    } else {
      alert('Please enter a valid email address.')
    }
  }

  return (
    <>
      <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600;700&display=swap');
    `}
      </style>

      <Box
        maxW="1445px"
        mx="auto"
        px="33px"
        py="20px"
        fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight={600}
      >
        {/* Subscription Banner */}
        <SubscriptionBanner />

        {/* Information Section */}
        <Flex flexWrap="wrap" gap="20px" mb="30px">
          {/* Who we are */}
          <Box
            bg="white"
            borderRadius="24px"
            p="20px"
            flex="2"
            minW={{ base: '358px', md: '500px' }}
            boxShadow="lg"
            _hover={{
              boxShadow: 'xl',
              transform: 'scale(1.01)',
              transition: 'all 0.3s ease',
            }}
          >
            <Heading
              fontSize="18px"
              fontWeight={700}
              mb="20px"
              fontFamily="'Wix Madefor Display', sans-serif"
            >
              Who we are
            </Heading>
            <Divider
              borderColor="blue.700"
              borderWidth="1px"
              w="30px"
              mb="15px"
            />
            <Flex mt="10%">
              <Box mr="30px">
                <List spacing="10px">
                  {[
                    'About Us',
                    'Event Spotlight',
                    'Social Impact',
                    'Achievements',
                    'Blogs',
                    'Careers',
                    'Help Desk',
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <List spacing="10px">
                  {[
                    'Terms & Condition',
                    'Trademark Policy',
                    'Warranty Service',
                    'Warranty Policy',
                    'Privacy Policy',
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
          </Box>

          {/* Contact Us & Our Servings */}
          <Flex flexDirection="column" flex="1" minW="250px">
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              mb="20px"
              boxShadow="lg"
              _hover={{
                boxShadow: 'xl',
                transform: 'scale(1.01)',
                transition: 'all 0.3s ease',
              }}
            >
              <Heading
                fontSize="18px"
                mb="10px"
                fontWeight={700}
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                Our Solutions
              </Heading>
              <Divider
                borderColor="blue.700"
                borderWidth="1px"
                w="30px"
                mb="15px"
              />
              <List spacing="10px">
                {['Enterprise', 'Government', 'And Beyond'].map(
                  (item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                    >
                      {item}
                    </ListItem>
                  )
                )}
              </List>
            </Box>
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              flex="1"
              minW="250px"
              boxShadow="lg"
              _hover={{
                boxShadow: 'xl',
                transform: 'scale(1.01)',
                transition: 'all 0.3s ease',
              }}
            >
              <Heading
                fontSize="18px"
                fontWeight={700}
                fontFamily="'Wix Madefor Display', sans-serif"
                mb="10px"
              >
                Contact Us
              </Heading>
              <Divider
                borderColor="blue.700"
                borderWidth="1px"
                w="30px"
                mb="15px"
              />
              <Text fontSize="14px" lineHeight="1.6">
                7, Avista@Eight corporate House, Near Satyam House, Behind
                Rajpath Club, Bodakdev, Ahmedabad - 380054
              </Text>
              <Flex alignItems="center" mt="15px">
                <PhoneIcon mr="10px" w="20px" h="auto" />
                <Text>(+91) 000 000 0000</Text>
              </Flex>
              <Button
                width={{ base: '154.639px', md: '146px' }} // Smaller button on small screens
                height={{ base: '33px', md: '50px' }}
                padding="24px"
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                color="#3F77A5"
                borderRadius="20px"
                _hover={{ bg: '#2c5a7a' }}
                onClick={handleSubscribe}
                marginTop={{ base: '5%', xl: '15%' }} // Adjusts spacing without absolute positioning // Responsive top value
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}

                {/* <Image
                src="/assets/arrowuprb.svg"
                alt="Arrow Up"
                width="14px"
                height="14px"
              /> */}
                <svg
                  width="17"
                  height="18"
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

          {/* Technologies */}
          <Box
            bg="#BECEDC"
            borderRadius="15px"
            p="20px"
            flex="1"
            minW="250px"
            boxShadow="lg"
            _hover={{
              boxShadow: 'xl',
              transform: 'scale(1.01)',
              transition: 'all 0.3s ease',
            }}
          >
            <Heading
              fontSize="18px"
              fontWeight={700}
              fontFamily="'Wix Madefor Display', sans-serif"
              mb="10px"
            >
              Technologies
            </Heading>
            <Divider
              borderColor="blue.700"
              borderWidth="1px"
              w="30px"
              mb="15px"
            />
            <List spacing="10px">
              {['VMS', 'EMS', 'ICCC', 'AI Optimized Cloud Services'].map(
                (item, index) => (
                  <ListItem
                    key={index}
                    _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                  >
                    {item}
                  </ListItem>
                )
              )}
            </List>
          </Box>

          {/* Industries we serve */}
          <Box
            bg="#BECEDC"
            borderRadius="15px"
            p="20px"
            flex="1"
            minW="250px"
            boxShadow="lg"
            _hover={{
              boxShadow: 'xl',
              transform: 'scale(1.01)',
              transition: 'all 0.3s ease',
            }}
          >
            <Heading
              fontSize="18px"
              fontWeight={700}
              fontFamily="'Wix Madefor Display', sans-serif"
              mb="10px"
            >
              Industries we serve
            </Heading>
            <Divider
              borderColor="blue.700"
              borderWidth="1px"
              w="30px"
              mb="15px"
            />
            <List spacing="10px">
              {[
                'Healthcare Industry',
                'Education Industry',
                'Border Security Industry',
                'Election Industry',
                'Banking Industry',
                'Transportation Industry',
                'City Monitoring Industry',
                'Retailer Industry',
                'Manufacturing Industry',
                'Agriculture Industry',
                'Warehousing & Logistic Industry',
                'Sports & Entertainment Industry',
                'Hospitality Industry',
              ].map((industry, index) => (
                <ListItem
                  key={index}
                  _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                >
                  {industry}
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>

        {/* Footer */}
        <Box>
          {/* Logo and Social Media Icons */}
          <Flex
            justify="space-between" // Logo on the left, social media icons on the right
            alignItems="center"
            py="20px"
            borderTop="1px solid"
            borderColor="gray.200"
          >
            {/* Logo */}
            {/* <Image src="/assets/logo.svg" alt="VMukti" h="30px" /> */}
            <svg
              width="98"
              height="30"
              viewBox="0 0 98 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.06965 3.58479L12.479 21.6141L14.5487 25.3978L24.3879 8.35597L22.7459 5.31229L21.7486 3.58479L19.6789 0H15.5395L17.6093 3.58479L20.2486 8.15701L14.5487 18.0292L6.20904 3.58479H9.75994L16.3242 14.9539L18.3938 11.3697L13.8996 3.58479L11.8297 0H7.69029H4.13939H0L2.06965 3.58479Z"
                fill="#3F77A5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.8675 0H22.8937L23.8807 1.70961L25.1225 3.86052L26.1095 5.57039L27.0966 3.86052L29.3255 0H24.8675Z"
                fill="#DB7B3A"
              />
              <path
                d="M42.9423 7.55076L39.3612 15.8401L35.83 7.55076H32.9287L37.9355 19.1559H40.5881L45.6115 7.55076H42.9423ZM59.6509 19.1559L59.6177 7.55076H57.41L53.1354 14.7626L48.7946 7.55076H46.573V19.1559H49.093V12.342L52.4889 17.9291H53.6992L57.1116 12.1929L57.1282 19.1559H59.6509ZM68.6228 10.2365V14.6465C68.6228 16.2878 67.7607 17.0504 66.567 17.0504C65.4231 17.0504 64.7599 16.3873 64.7599 14.8952V10.2365H62.1737V15.2765C62.1737 18.0286 63.7486 19.2886 65.9867 19.2886C67.081 19.2886 68.0757 18.8741 68.7555 18.0949V19.1559H71.2091V10.2365H68.6228ZM80.2611 19.1559H83.3945L79.3493 14.0165L83.063 10.2365H79.9793L76.1993 13.8176V6.85449H73.6131V19.1559H76.1993V16.8847L77.4427 15.6578L80.2611 19.1559ZM89.6115 16.9012C89.3297 17.1167 88.9484 17.2327 88.5671 17.2327C87.8708 17.2327 87.4563 16.8183 87.4563 16.0557V12.425H89.6779V10.4355H87.4563V8.26364H84.87V10.4355H83.494V12.425H84.87V16.0888C84.87 18.2109 86.0969 19.2886 88.2024 19.2886C88.9981 19.2886 89.7774 19.1062 90.3079 18.7249L89.6115 16.9012ZM93.06 8.99312C94.0215 8.99312 94.6681 8.36312 94.6681 7.50102C94.6681 6.70528 94.0215 6.1084 93.06 6.1084C92.0984 6.1084 91.4518 6.7384 91.4518 7.55076C91.4518 8.36311 92.0984 8.99312 93.06 8.99312ZM91.7668 19.1559H94.353V10.2365H91.7668V19.1559Z"
                fill="#3F77A5"
              />
              <path
                d="M95.3696 6.53786H95.7073V5.35386H96.1742V5.07861H94.9027V5.35386H95.3696V6.53786ZM98 6.53786L97.9958 5.07861H97.7182L97.1808 5.98548L96.635 5.07861H96.3557V6.53786H96.6725V5.68113L97.0994 6.38363H97.2517L97.6807 5.6623L97.6828 6.53786H98Z"
                fill="black"
              />
            </svg>

            {/* Social Media Icons */}
            <Flex gap={4} justify="center">
              {[
                { icon: FaFacebookF, link: '#' },
                { icon: FaTwitter, link: '#' },
                { icon: FaInstagram, link: '#' },
                { icon: FaLinkedinIn, link: '#' },
                { icon: FaYoutube, link: '#' },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  color="blue.500"
                  _hover={{
                    color: 'blue.700',
                    transform: 'scale(1.2)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon as={social.icon} boxSize={6} />
                </Link>
              ))}
            </Flex>
          </Flex>

          {/* Copyright Text */}
          <Flex
            justify="center"
            alignItems="center"
            py="10px"
            borderTop={{ base: '1px solid', md: 'none' }} // Add a border on mobile only
            borderColor="gray.200"
          >
            <Text fontSize="12px" color="gray.600">
              Copyright © 2025, VMukti Solutions
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default NewsletterSubscription
