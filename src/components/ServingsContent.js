import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import PageContentWrapper from './PageContentWrapper'
import servingsData from '../data/servingsConstData'
import ServingsDescriptionCard from './ServingsDescriptionCard'
import ServingsModelGrid from './ServingsModelGrid'
import ServingsAdvantages from './ServingsAdvantages'
// import SubHeadingAnimation from './Animation/Text/SubHeadingAnimation'
// import HeadingAnimation from './Animation/Text/HeadingAnimation'
import { motion } from 'framer-motion'

const popAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}
const ServingsContent = ({ page: name }) => {
  if (!name || typeof name !== 'string') {
    return <Box mt="5%">Not found</Box>
  }

  const data = servingsData[name.toLowerCase()]
  if (!data || typeof data !== 'object') {
    return <Box mt="5%">Not found</Box>
  }

  return (
    <>
      <PageContentWrapper>
        <Flex direction="column" gap={5}>
          {/* Textual portion */}
          <Box
            // mt={{ base: '20px', md: '40px' }}
            as="section"
            backgroundColor="#E7E7E7"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            position="relative"
          >
            {/* Title Container with relative positioning */}
            <Flex
              direction="column"
              position="relative"
              mb={{ base: '0px', md: '20px' }}
              gap="2"
            >
              {/* Title Text (above the white rectangle) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Animate on mount
                transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
              >
                <Text
                  fontSize={{ base: '24px', md: '48px' }}
                  fontWeight="600"
                  lineHeight="normal"
                  textAlign="left"
                  position="relative"
                  zIndex="1" // Ensures text stays above the rectangle
                >
                  {data.title.map((part, index) => (
                    <Text
                      as="span"
                      color={part.color}
                      display="inline"
                      key={index}
                    >
                      {index !== 0 && ' '}
                      {part.text}{' '}
                    </Text>
                  ))}
                  <Text as="span" color="#3F77A5" display="inline">
                    .
                  </Text>{' '}
                  {/* Static blue dot without space */}
                </Text>
              </motion.div>
              <Flex
                gap={1}
                direction="column"
                display={{ base: 'flex', md: 'none' }}
              >
                {/* <SubHeadingAnimation> */}
                <motion.div variants={popAnimation}>
                  <Box mb={2} display={{ base: 'none', md: 'block' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                  <Box mb={2} display={{ base: 'block', md: 'none' }}>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5C16.5 0.671573 15.8284 -2.38419e-07 15 -2.38419e-07C14.1716 -2.38419e-07 13.5 0.671573 13.5 1.5V13.5H1.5C0.671573 13.5 -2.38419e-07 14.1716 -4.76837e-07 15C-4.76837e-07 15.8284 0.671573 16.5 1.5 16.5H15ZM0.93934 3.06066L13.9393 16.0607L16.0607 13.9393L3.06066 0.93934L0.93934 3.06066Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                  <Heading
                    fontSize={{ base: '14px', md: '16px' }}
                    fontWeight="500"
                    color="black"
                  >
                    {data.description}
                  </Heading>
                </motion.div>
                {/* </SubHeadingAnimation> */}
              </Flex>
            </Flex>
          </Box>

          {/* Description section backimage with left content */}
          {/* <ServingsDescriptionCard description={data.description} keybenefits={data.keybenefits} image={data.image} /> */}
          <ServingsDescriptionCard
            description={data.description}
            keybenefits={data.keybenefits}
            image={`${process.env.PUBLIC_URL}${data.image}`}
          />

          {/* Deployment Model grid  */}
          <ServingsModelGrid
            title={data.modelTitle}
            description={data.modelDescription}
            cards={data.cards}
          />

          {/* Ai Powered Surveillance Advantages */}
          <ServingsAdvantages
            title={data.advantagesTitle}
            advantages={data.advantages}
          />
        </Flex>
      </PageContentWrapper>
    </>
  )
}

export default ServingsContent
