import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const AchievementCard = ({ value, label, isBlack, width, height }) => {
  return (
    <Box
      width={width}
      height={height}
      backgroundColor={isBlack ? 'white' : '#3f77a5'}
      color={isBlack ? '#3f77a5' : 'white'}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      borderRadius="24px"
      position="relative"
    >
      {/* Achievement Value */}
      <Text
        fontSize={{ base: '48px', md: '64px' }} // Smaller font size on small screens
        fontWeight="600"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        {value}
      </Text>

      {/* Achievement Label */}
      <Text
        as="div"
        fontSize={{ base: '14px', md: '16px' }} // Smaller font size on small screens
        fontWeight="600"
        position="absolute"
        bottom="20px"
        left="20px"
        color={isBlack ? 'black' : 'white'}
      >
        {label}
        {/* Line beneath the label */}
        <Box
          width="20px"
          height="3px"
          borderRadius="2px"
          marginTop="5px"
          backgroundColor={isBlack ? '#3f77a5' : 'white'}
        />
      </Text>
    </Box>
  )
}

export default AchievementCard
