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
        bg="#BECEDC" // The light blue background from your image
        borderRadius="2xl" // Softer, more modern border radius
        p={{ base: 5, md: 6 }}
        gap={4}
      >
        {/* The dynamic title text is passed as children */}
        <Heading
          as="h2"
          size={titleFontSize}
          fontWeight="medium"
          color="gray.800"
          textAlign={{ base: 'center', sm: 'left' }}
        >
          {children}
        </Heading>

        {/* The reusable button */}
        <Button
          as="a" // Render as a link
          href={href}
          size={buttonSize}
          bg="white"
          color="#3F77A5" // A crisp blue for the text
          borderRadius="full"
          boxShadow="sm"
          flexShrink={0} // Prevents the button from shrinking on smaller screens
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