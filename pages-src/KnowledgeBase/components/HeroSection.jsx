'use client';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const CATEGORIES = ['All', 'Cloud VMS', 'AI Analytics', 'Edge Computing', 'Enterprise Security', 'Compliance'];

const HeroSection = ({ activeCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  return (
    <Box
      pt={{ base: '48px', md: '72px' }}
      pb={{ base: '40px', md: '56px' }}
      px={{ base: '16px', md: '32px' }}
      textAlign="center"
    >
      {/* Title — 64px SemiBold, line-height 100% */}
      <Heading
        as="h1"
        fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight="600"
        fontSize={{ base: '32px', md: '48px', lg: '64px' }}
        lineHeight="1"
        letterSpacing="0"
        mb={{ base: '16px', md: '20px' }}
        maxW="1098px"
        mx="auto"
      >
        <Text as="span" color="#3F77A5">Video Surveillance </Text>
        <Text as="span" color="#DB7B3A">Knowledge Base</Text>
      </Heading>

      {/* Subtitle — 24px Medium, line-height 100% */}
      <Text
        fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight="500"
        fontSize={{ base: '15px', md: '18px', lg: '24px' }}
        lineHeight="1"
        letterSpacing="0"
        color="#555"
        mb={{ base: '28px', md: '40px' }}
        maxW="1086px"
        mx="auto"
      >
        Find answers to common questions about cloud VMS, AI analytics, enterprise security, and more.
      </Text>

      {/* Search Bar — height 50, border-radius 50px, pl 23px, pr 12px */}
      <InputGroup
        maxW="809px"
        mx="auto"
        mb={{ base: '24px', md: '32px' }}
        h="50px"
      >
        <InputLeftElement pointerEvents="none" h="50px" w="50px">
          <SearchIcon color="#999" boxSize="17px" />
        </InputLeftElement>
        <Input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for answers..."
          bg="#FFFFFF"
          border="1px solid #D0D0D0"
          borderRadius="50px"
          h="50px"
          pl="46px"
          pr="12px"
          fontSize="15px"
          fontFamily="'Wix Madefor Display', sans-serif"
          _placeholder={{ color: '#999' }}
          _focus={{ borderColor: '#3F77A5', boxShadow: '0 0 0 1px #3F77A5' }}
        />
      </InputGroup>

      {/* Category Pills — gap 24px, active #3F77A5, inactive #BECEDC */}
      <Flex
        justify="center"
        gap="24px"
        flexWrap="wrap"
        maxW="1140px"
        mx="auto"
        h={{ base: 'auto', md: '48px' }}
        align="center"
      >
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            w="170px"
            h="48px"
            px="0"
            borderRadius="24px"
            fontFamily="'Wix Madefor Display', sans-serif"
            fontWeight="600"
            fontSize={{ base: '13px', md: '15px' }}
            bg={activeCategory === cat ? '#3F77A5' : '#BECEDC'}
            color={activeCategory === cat ? '#FFFFFF' : '#1A2A3A'}
            border="none"
            _hover={{
              bg: activeCategory === cat ? '#2d5f87' : '#A8BDD0',
            }}
            transition="all 0.2s"
          >
            {cat}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default HeroSection;