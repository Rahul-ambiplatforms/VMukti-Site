import React from 'react';
import { Box, Grid, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import AchievementCard from '../../components/AchievementCard';
const achievementsData = [
  { value: '18+', label: 'No. of Years of Innovation', isBlack: false },
  { value: '1B+', label: 'Number of cameras feeds', isBlack: true },
  { value: '200M+', label: 'Number of minutes streamed', isBlack: false },
  { value: '3M+', label: 'No. of users served', isBlack: false },
  { value: '1M+', label: 'No. of cameras supplied', isBlack: false },
  { value: '900+', label: 'No. of projects completed', isBlack: true },
];

const Achieved = () => {
  // Responsive values
  const gridColumns = useBreakpointValue({ base: 'repeat(2, 1fr)', md: 'repeat(3, 283px)' }); // 2 columns on small screens, 3 on larger screens
  const cardSize = useBreakpointValue({ base: '200px', md: '283px' }); // Smaller cards on small screens
  const containerWidth = useBreakpointValue({ base: '100%', md: '1512px' }); // Full width on small screens
  const containerHeight = useBreakpointValue({ base: 'auto', md: '1038px' }); // Auto height on small screens
  const titleFontSize = useBreakpointValue({ base: '32px', md: '48px' }); // Smaller title on small screens
  const gap = useBreakpointValue({ base: '20px', md: '76px' }); // Smaller gap on small screens

  return (
    <>
      {/* Import the font using a <style> tag */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;600&display=swap');
        `}
      </style>

      {/* Main container */}
      <Box
        position="relative"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        padding={{ base: '20px', md: '40px 20px' }} // Smaller padding on small screens
        backgroundColor="#f3f3f3"
        width={containerWidth}
        height={containerHeight}
        margin="0 auto"
        overflow="hidden"
      >
        {/* Title */}
        <Text
          fontSize={titleFontSize}
          fontWeight="600"
          marginBottom={{ base: '40px', md: '70px' }} // Smaller margin on small screens
        >
          What we have{' '}
          <Text
            as="span"
            color="#3f77a5"
          >
            achieved
          </Text>
        </Text>

        {/* Ellipse Images */}
        <Image
          src="/assets/Ellipse38.png"
          alt="ellipse38"
          position="absolute"
          left={{ base: '50%', md: '1081px' }} // Center on small screens
          top={{ base: 'auto', md: '630px' }}
          bottom={{ base: '0', md: 'auto' }}
          transform={{ base: 'translateX(-50%)', md: 'none' }} // Center on small screens
          width={{ base: '200px', md: '408px' }} // Smaller image on small screens
          opacity="0.5"
          pointerEvents="none"
          zIndex="0"
        />
        <Image
          src="/assets/Ellipse39.png"
          alt="ellipse39"
          position="absolute"
          left={{ base: '50%', md: '45px' }} // Center on small screens
          top={{ base: '0', md: '48px' }}
          transform={{ base: 'translateX(-50%)', md: 'none' }} // Center on small screens
          width={{ base: '200px', md: '408px' }} // Smaller image on small screens
          opacity="0.5"
          pointerEvents="none"
          zIndex="0"
        />

        {/* Achievements Grid */}
        <Grid
          templateColumns={gridColumns}
          templateRows={{ base: 'repeat(3, 1fr)', md: 'repeat(2, 283px)' }} // 3 rows on small screens, 2 on larger screens
          columnGap={gap}
          rowGap={{ base: '20px', md: '105px' }} // Smaller gap on small screens
          justifyContent="center"
          alignItems="center"
        >
          {achievementsData.map((item, index) => (
            <AchievementCard
              key={index}
              value={item.value}
              label={item.label}
              isBlack={item.isBlack}
              width={cardSize}
              height={cardSize}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Achieved;