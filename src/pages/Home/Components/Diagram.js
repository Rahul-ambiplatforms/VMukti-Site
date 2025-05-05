import { Box, Flex, Text, Image, useBreakpointValue } from '@chakra-ui/react'
import HeadingAnimation from '../../../components/Animation/Text/HeadingAnimation'
import SubHeadingAnimation from '../../../components/Animation/Text/SubHeadingAnimation'

// const nodes = [
//   { label: 'Image', position: '15%', side: 'left' },
//   { label: 'Video', position: '30%', side: 'left' },
//   { label: 'Live links', position: '45%', side: 'left' },
//   { label: 'Data', position: '60%', side: 'left' },
//   { label: 'Text', position: '75%', side: 'left' },
//   { label: 'Image', position: '15%', side: 'right' },
//   { label: 'Video', position: '30%', side: 'right' },
//   { label: 'Text', position: '45%', side: 'right' },
//   { label: 'Data', position: '60%', side: 'right' },
//   { label: 'Text', position: '75%', side: 'right' },
// ]

const Diagram = () => {
  // Responsive values
  // const containerWidth = useBreakpointValue({ base: '100%', md: '1446px' })
  const containerHeight = useBreakpointValue({ base: 'auto', md: '656px' })
  const leftPanelWidth = useBreakpointValue({ base: '100%', md: '35%' }) // Full width on small screens
  const rightPanelPadding = useBreakpointValue({ base: '4', md: '8' }) // Smaller padding on small screens
  // const fontSize = useBreakpointValue({ base: 'xl', md: '2xl' }) // Smaller font size on small screens
  // const nodeFontSize = useBreakpointValue({ base: 'xs', md: 'sm' }) // Smaller font size for nodes on small screens
  // const nodePosition = useBreakpointValue({ base: '10%', md: '5%' }) // Adjust node position on small screens

  return (
    <Flex
      height={containerHeight}
      borderRadius="24px"
      overflow="hidden" 
      bg="white"
      mt="2%"
      direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens
      mb="4%"
    >
      {/* Left Panel */}
      <Box
        bg="#3F77A5"
        width={leftPanelWidth}
        height={{ md: '100%' }}
        color="white"
        p={{ base: '4', md: '8' }} // Smaller padding on small screens
        display="flex"
        flexDirection="column"
        textAlign={{ base: 'left', md: 'left' }} // Center text on small screens
        zIndex={1} // Bring forward
        borderRadius={'24px'}
      >
        <HeadingAnimation>
          <Text
            w="80%"
            fontSize={{ base: '20px', md: '36px' }}
            // fontWeight="bold"
            fontWeight="600"
            ml={{ md: '5%' }}
            mt="5%"
            lineHeight={{ base: '1.2', md: '1.3' }} // Adjusts vertical spacing
          >
            Accelerate Visual{' '}
            <Text
              as="span"
              color="#DB7B3A"
              fontSize={{ base: '18px', md: '36px' }}
              fontWeight="600"
            >
              AI
            </Text>{' '}
            Implementation
          </Text>
        </HeadingAnimation>
        <SubHeadingAnimation>
          <Flex
            align="flex-start"
            mt="10%"
            ml={{ md: '5%' }}
            gap={5}
            direction={{ base: 'column', md: 'row' }}
            pb={{ base: '25%' }}
          >
            <Box mb="5%">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 33 33"
                fill="none"
                bg="red"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="white"
                />
              </svg>
            </Box>

            <Text
              color="white"
              fontWeight="500"
              maxW={{ base: '90%', md: '400px' }} // Reduced max width
              fontSize={{ md: '16px' }}
              lineHeight="1.1"
              mt="-1%"
            >
              Swiftly Prototype, Deploy, and Scale Computer Vision Tasks on a
              Unified Platform to Enhance Visual Intelligence
            </Text>
          </Flex>
        </SubHeadingAnimation>
      </Box>

      {/* Right Panel */}
      <Flex
        flex={1}
        p={rightPanelPadding}
        py={{ base: '25%', md: '0' }} // Adjust padding for small screens
        // p={{base:"10",md:rightPanelPadding}}
        justifyContent="center"
        alignItems="center"
        bg="white"
        position="relative"
      >
        {/* <Image src="../assets/ai_implementation.png" /> */}
        <Image src={`${process.env.PUBLIC_URL}/assets/ai_implementation.png`} />
      </Flex>
    </Flex>
  )
}

export default Diagram
