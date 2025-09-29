import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// --- Data for the Events ---
const events = [
  {
    message: "We're thrilled to showcase our cutting-edge Visual Intelligence technology at GITEX GLOBAL 2025!",
    details: "Visit Us at Booth CC1 - 54 | Date: 13th - 17th October, 2025 | Dubai World Trade",
  },
  {
    message: "Join us next at the AI Summit 2026 in New York!",
    details: "Booth A12 | Date: 5th - 8th January, 2026 | Javits Center",
  },
];

// --- CSS Animation for the Marquee Effect ---
// CHANGE 2: The animation now moves the container by -50% of its total width.
// This is because the container now holds two copies of the content.
const marqueeAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

// --- The Announcement Bar Component ---
const Announcement = () => {
  return (
    <Flex
      bg="#D9D9D9"
      height="50px"
      width="100%"
      align="center"
      overflow="hidden"
      position="fixed"
      top={{base:"56px",md:"88px"}}
      zIndex="999"
    >
      <Box
        display="flex"
        whiteSpace="nowrap"
        // I recommend a longer duration for readability
        animation={`${marqueeAnimation} 40s linear infinite`}
      >
        {/*
          CHANGE 1: We render the list of events TWICE.
          This is the key to creating a seamless loop.
        */}
        
        {/* ---- FIRST COPY ---- */}
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <Text
              fontSize="16px"
              color="black"
              fontWeight="400"
              mx="2rem" 
            >
              <span style={{ margin: '0 0.5rem' }}>➡️</span>
              <span role="img" aria-label="sparkles">✨</span>
              {event.message}
              <span style={{ margin: '0 0.5rem' }}>⬅️</span>
              <span role="img" aria-label="arrow">➡️</span>
              {event.details}
              <span style={{ margin: '0 0.5rem' }}>⬅️</span>
            </Text>
          </React.Fragment>
        ))}

        {/* ---- SECOND COPY (The Duplicate for the loop) ---- */}
        {events.map((event, index) => (
          // Add a prefix to the key to avoid React duplicate key warnings
          <React.Fragment key={`duplicate-${index}`}>
            <Text
              fontSize="16px"
              color="black"
              fontWeight="400"
              mx="2rem"
            >
              <span style={{ margin: '0 0.5rem' }}>➡️</span>
              <span role="img" aria-label="sparkles">✨</span>
              {event.message}
              <span style={{ margin: '0 0.5rem' }}>⬅️</span>
              <span role="img" aria-label="arrow">➡️</span>
              {event.details}
              <span style={{ margin: '0 0.5rem' }}>⬅️</span>
            </Text>
          </React.Fragment>
        ))}
      </Box>
    </Flex>
  );
};

export default Announcement;