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
import SubscriptionBanner from '../components/SubscriptionBanner'

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
    <Box maxW="1445px" mx="auto" px="33px" py="20px">
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
          <Heading fontSize="18px" fontWeight="bold" mb="20px">
            Who we are
          </Heading>
          <Divider
            borderColor="blue.700"
            borderWidth="1px"
            w="30px"
            mb="15px"
          />
          <Flex mt="65px">
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
            bg="blue.100"
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
            <Heading fontSize="18px" fontWeight="bold" mb="10px">
              Our Solutions
            </Heading>
            <Divider
              borderColor="blue.700"
              borderWidth="1px"
              w="30px"
              mb="15px"
            />
            <List spacing="10px">
              {['Enterprise', 'Government', 'And Beyond'].map((item, index) => (
                <ListItem
                  key={index}
                  _hover={{ color: '#3F77A5', cursor: 'pointer' }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            bg="blue.100"
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
            <Heading fontSize="18px" fontWeight="bold" mb="10px">
              Contact Us
            </Heading>
            <Divider
              borderColor="blue.700"
              borderWidth="1px"
              w="30px"
              mb="15px"
            />
            <Text fontSize="14px" lineHeight="1.6">
              7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath
              Club, Bodakdev, Ahmedabad - 380054
            </Text>
            <Flex alignItems="center" mt="15px">
              <EmailIcon mr="10px" w="20px" h="auto" />
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
              top="30px"
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}

              <Image
                src="/assets/arrowuprb.svg"
                alt="Arrow Up"
                width="14px"
                height="14px"
              />
            </Button>
          </Box>
        </Flex>

        {/* Technologies */}
        <Box
          bg="blue.100"
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
          <Heading fontSize="18px" fontWeight="bold" mb="10px">
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
          bg="blue.100"
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
          <Heading fontSize="18px" fontWeight="bold" mb="10px">
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
          <Image src="/assets/logo.svg" alt="VMukti" h="30px" />

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
  )
}

export default NewsletterSubscription
