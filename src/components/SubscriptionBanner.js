import { useState } from 'react'
import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const SubscriptionBanner = ({ bgColor = 'white' }) => {
  const [email, setEmail] = useState('')
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // Responsive values
  const headingSize = useBreakpointValue({
    base: '20px',
    md: '32px',
    lg: '48px',
  })
  const inputWidth = useBreakpointValue({
    base: '100%',
    md: '600px',
    lg: '800px',
  })
  const buttonWidth = useBreakpointValue({
    base: '120px',
    md: '130px',
    lg: '146px',
  })
  const buttonHeight = useBreakpointValue({
    base: '40px',
    md: '45px',
    lg: '50px',
  })
  const imageSize = useBreakpointValue({
    base: '150px',
    md: '250px',
    lg: '368px',
  })

  // const handleSubscribe = () => {
  //     if (email.trim() !== "") {
  //         setIsSubscribed(true);
  //     }
  // };

  return (
    <Flex
      position="relative"
      bg={bgColor}
      borderRadius="24px"
      overflow="visible"
      mb={{ base: '10px', md: '15px', lg: '20px' }}
      //   boxShadow="lg"
      alignItems="center"
      // _hover={{ boxShadow: "xl", transform: "scale(1.01)", transition: "all 0.3s ease" }}
      p={{ base: '15px', md: '20px', lg: '30px' }}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: '15px', md: '20px', lg: '30px' }}
    >
      {/* Image Section */}
      <Box
        position={{ base: 'relative', md: 'absolute' }}
        left={{ base: '0', md: '0' }}
        bottom={{ base: '0', md: '0' }}
        width={imageSize}
        height={{ base: 'auto', md: imageSize }}
        flexShrink="0"
        mb={{ base: '10px', md: '0' }}
        zIndex={4}
      >
        <Image
          src="./assets/robot.png"
          alt="AI Robot"
          ml="15%"
          width="100%"
          height="auto"
          objectFit="contain"
        />
      </Box>

      {/* Content Section */}
      <Flex
        flexGrow={1}
        ml={{ base: '0', md: '2%' }}
        pl={{ base: '0', md: '300px', lg: '350px' }}
        pr={{ base: '0', md: '15px', lg: '20px' }}
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
        gap={{ base: '15px', md: '20px', lg: '30px' }}
      >
        <Text
          color="black"
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={headingSize}
          fontWeight="400"
          letterSpacing="-0.72px"
          width="500px"
          mb={{ base: '10px', md: '0' }}
          ml="5%"
        >
          Subscribe to{' '}
          <Text as="span" color="#3F77A5">
            Our Newsletter
          </Text>
        </Text>

        {/* Email Input Section */}

        <Flex direction="column" width="90%" mr="-2%">
          <Box
            position="absolute"
            top="-50%"
            right="-0.1%"
            width={{ base: '200px', md: '300px', lg: '400px' }}
            height={{ base: '200px', md: '300px', lg: '400px' }}
            opacity={0.8}
            transform="rotate(2deg)"
            zIndex={0}
          >
            <Image
              src="/assets/VMukti Brochure O2 2.png"
              alt="VMukti Brochure"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Box>
          <Flex
            mt={{ base: '10px', md: '15px', lg: '20px' }}
            width="100%"
            height={{ base: '45px', md: '50px', lg: '56px' }}
            // border="1px solid"
            // borderColor="gray.200"
            borderRadius="20px"
            background="#F3F3F3"
            alignItems="center"
            _hover={{ borderColor: '#3F77A5' }}
            pr="3px"
            zIndex={1}
          >
            <Flex
              padding={{ base: '8px 15px', md: '10px 25px', lg: '12px 30px' }}
              width="100%"
              flexGrow={1}
              zIndex={0}
            >
              {/* Wrap SVG in a Box to ensure proper centering */}
              <Box display="flex" alignItems="center" justifyContent="center">
                {/* Second SVG (Email Icon) */}
                <Box mr="32%">
                  <svg
                    width="33"
                    height="22"
                    viewBox="0 0 33 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.824 18.9319L0.420019 20.3233C0.156019 19.8595 0 19.3125 0 18.7297V3.27007C0 2.68738 0.156 2.1403 0.420019 1.67653L9.82801 10.9999L1.824 18.9319ZM32.6039 1.71223L31.9199 2.37818L23.1958 11.0238L32.58 20.3236C32.844 19.8598 33 19.3128 33 18.73V3.27037C33 2.69955 32.8558 2.17604 32.6039 1.71223ZM3.0958 1.80736L15.4679 14.0682C16.0439 14.639 17.0039 14.6509 17.5919 14.0682L21.2518 10.4411C21.2518 10.4411 21.2758 10.4054 21.2878 10.3935L31.3317 0.439986C30.8517 0.154577 30.2877 0 29.6997 0H3.29977C2.71179 0 2.15975 0.154597 1.69177 0.416241L3.0958 1.80736ZM29.9036 20.1923L21.9237 12.2842L18.8637 15.3285C18.2157 15.9588 17.3757 16.2799 16.5237 16.2799C15.6716 16.2799 14.8317 15.9588 14.1957 15.3285L11.0997 12.2604L1.69167 21.5838C2.15969 21.8454 2.71165 22 3.29967 22H29.6996C30.2876 22 30.8397 21.8454 31.3076 21.5838L29.9036 20.1923Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>

                {/* First SVG (Vertical Line) */}
                <Box>
                  <svg
                    width="2"
                    height="18"
                    viewBox="0 0 2 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 16.5L0.999999 1.5"
                      stroke="#3F77A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Box>
              </Box>
              <Input
                type="email"
                placeholder="Your Email"
                border="none"
                outline="none"
                bg="transparent"
                width="100%"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _placeholder={{
                  color: '#3F77A5',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              />
            </Flex>
            <Button
              width={buttonWidth}
              height={buttonHeight}
              justifyContent="space-between"
              alignItems="center"
              bg="#3F77A5"
              color="white"
              borderRadius="20px"
              _hover={{ bg: '#2c5a7a' }}
              // onClick={handleSubscribe}
              px={{ base: '12px', md: '15px', lg: '20px' }}
              flexShrink={0}
              ml={{ base: '5px', md: '10px', lg: '15px' }}
            >
              Subscribe
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
