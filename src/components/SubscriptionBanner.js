import { useState } from 'react'
import { Flex, Box, Text, Input, Button, Image } from '@chakra-ui/react'
// import { EmailIcon } from '@chakra-ui/icons'

const SubscriptionBanner = ({ bgColor = 'white' }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim() !== '') {
      setIsSubscribed(true)
    }
  }

  const EmailIcon = ({ mr = '10px', w = '20px', h = 'auto' }) => (
    <Box
      as="svg"
      width={w}
      height={h}
      viewBox="0 0 33 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      mr={mr}
    >
      <path
        d="M1.824 18.9319L0.420019 20.3233C0.156019 19.8595 0 19.3125 0 18.7297V3.27007C0 2.68738 0.156 2.1403 0.420019 1.67653L9.82801 10.9999L1.824 18.9319ZM32.6039 1.71223L31.9199 2.37818L23.1958 11.0238L32.58 20.3236C32.844 19.8598 33 19.3128 33 18.73V3.27037C33 2.69955 32.8558 2.17604 32.6039 1.71223ZM3.0958 1.80736L15.4679 14.0682C16.0439 14.639 17.0039 14.6509 17.5919 14.0682L21.2518 10.4411C21.2518 10.4411 21.2758 10.4054 21.2878 10.3935L31.3317 0.439986C30.8517 0.154577 30.2877 0 29.6997 0H3.29977C2.71179 0 2.15975 0.154597 1.69177 0.416241L3.0958 1.80736ZM29.9036 20.1923L21.9237 12.2842L18.8637 15.3285C18.2157 15.9588 17.3757 16.2799 16.5237 16.2799C15.6716 16.2799 14.8317 15.9588 14.1957 15.3285L11.0997 12.2604L1.69167 21.5838C2.15969 21.8454 2.71165 22 3.29967 22H29.6996C30.2876 22 30.8397 21.8454 31.3076 21.5838L29.9036 20.1923Z"
        fill="#3F77A5"
      />
    </Box>
  )

  return (
    <Flex
      position="relative"
      bg={bgColor}
      borderRadius="15px"
      overflow="visible"
      mb="20px"
      boxShadow="lg"
      alignItems="center"
      _hover={{
        boxShadow: 'xl',
        transform: 'scale(1.01)',
        transition: 'all 0.3s ease',
      }}
      p={{ base: '20px', md: '30px' }} // Responsive padding
      direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens
    >
      {/* Image Positioned Outside the Box */}
      <Box
        position={{ base: 'relative', md: 'absolute' }} // Relative on small screens, absolute on larger screens
        left={{ base: '0', md: '0px' }}
        bottom={{ base: '0', md: '0px' }}
        width={{ base: '200px', md: '368px' }} // Smaller image on small screens
        height={{ base: 'auto', md: '368px' }}
        flexShrink="0"
        zIndex="1"
        mb={{ base: '20px', md: '0' }} // Add margin at the bottom on small screens
      >
        <Image
          src="/assets/robot.png"
          alt="AI Robot"
          width="100%"
          height="auto"
        />
      </Box>

      {/* Content Section */}
      <Flex
        flexGrow={1}
        ml={{ base: '0', md: 'auto' }} // No margin on small screens
        pl={{ base: '0', md: '350px' }} // No padding on small screens
        pr={{ base: '0', md: '20px' }} // No padding on small screens
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens
        textAlign={{ base: 'center', md: 'left' }} // Center text on small screens
      >
        <Text
          color="black"
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={{ base: '24px', md: '48px' }} // Smaller font size on small screens
          fontWeight="400"
          letterSpacing="-0.72px"
          mb={{ base: '20px', md: '0' }} // Add margin at the bottom on small screens
        >
          Subscribe to{' '}
          <Text as="span" color="#3F77A5">
            Our Newsletter
          </Text>
        </Text>

        {/* Email Input Section */}
        <Flex direction="column" width={{ base: '100%', md: 'auto' }}>
          <Flex
            mt="20px"
            width={{ base: '100%', md: '611px' }} // Full width on small screens
            height="56px"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="20px"
            bg="gray.50"
            alignItems="center"
            _hover={{ borderColor: '#3F77A5' }}
          >
            <Flex padding="12px 20px" width={{ base: '100%', md: '611px' }}>
              <EmailIcon mr="10px" w="20px" h="auto" />

              <Input
                type="email"
                placeholder="Your Email"
                border="none"
                outline="none"
                bg="transparent"
                width="100%"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex>
            <Button
              width={{ base: '154.639px', md: '146px' }} // Smaller button on small screens
              height={{ base: '33px', md: '50px' }}
              // display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg="#3F77A5"
              color="white"
              borderRadius="20px"
              _hover={{ bg: '#2c5a7a' }}
              onClick={handleSubscribe}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              {/* <Image
                src="/assets/arrowupr.svg"
                alt="Arrow Up"
                width="14px"
                height="14px"
              /> */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                  fill="white"
                />
              </svg>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SubscriptionBanner
