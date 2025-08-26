import React from 'react';
import { Box, Button, Flex, Heading, Icon, useBreakpointValue } from '@chakra-ui/react';
import { LuArrowUpRight } from 'react-icons/lu'; // A clean icon that matches your image

const CtaBanner = ({ children, buttonText = "Let's talk", href = "#" }) => {
  
  // Use responsive font size for the heading
  const titleFontSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md'});

  return (
    <Box mt="2%" w="full">
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align="center"
        justifyContent="space-between"
        bg="#BECEDC" 
        borderRadius="2xl"
        p={{ base: 5, md: 6 }}
        gap={4}
      >
        {/* The dynamic title text is passed as children */}
        <Heading
          as="h2"
          // size={titleFontSize}
          fontSize="36px"
          fontWeight="500"
          color="black"
          textAlign={{ base: 'center', sm: 'left' }}
        >
          {children}
        </Heading>

        <Button
          as="a"
          href={href}
          size={buttonSize}
          bg="white"
          color="#3F77A5"
          borderRadius="24px"
          flexShrink={0}
          rightIcon={<Icon as={LuArrowUpRight} />}
          _hover={{
            boxShadow: 'md',
            transform: 'translateY(-2px)'
          }}
        >
          {buttonText}
        </Button>
      </Flex>
    </Box>
  );
};

export default CtaBanner;