import React from 'react';
import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel,
  Box, Heading, Text, Icon
} from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Make sure react-icons is installed

const FaqsSection = ({ faqsList }) => {
  // ✅ UPDATED GUARD CLAUSE:
  // This now checks for the new data structure (`faqsList.qa`)
  if (!faqsList || !faqsList.qa || faqsList.qa.length === 0) {
    return null;
  }

  // Logic to split the title so we can style the last word differently
  const titleWords = faqsList.title ? faqsList.title.split(' ') : [];
  const lastWord = titleWords.pop() || ''; // Safely handle empty titles
  const firstWords = titleWords.join(' ');

  return (
    <Box 
      w="80%" 
      mx="auto" 
      py={{ base: 10, md: 16 }} 
      px={{ base: 4, md: 0 }}
    >
      <Heading as="h2" size="xl" textAlign="center" mb={8} color="gray.800">
        {/* ✅ DYNAMIC TITLE: Renders the title from the data prop */}
        {firstWords} <Text as="span" color="blue.500">{lastWord}</Text>
      </Heading>

      <Accordion allowMultiple={false} defaultIndex={[0]}> {/* `allowMultiple` lets users open more than one */}
        {/* ✅ UPDATED MAPPING: Now maps over `faqsList.qa` */}
        {faqsList.qa.map((faq, index) => (
          <AccordionItem 
            key={index}
            borderBottom="1px solid black"
            _last={{ borderBottom: "2px solid", borderColor: "black" }}
            py={1} 
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton py={{ base: 3, md: 4 }}>
                  <Text flex="1" textAlign="left" fontWeight="semibold" fontSize={{ base: "md", md: "lg" }} color="gray.700">
                    {faq.question}
                  </Text>
                  <Icon 
                    as={isExpanded ? FaMinus : FaPlus} 
                    color="orange.400" 
                    w={{ base: 4, md: 5 }} 
                    h={{ base: 4, md: 5 }}
                    ml={4}
                  />
                </AccordionButton>
                <AccordionPanel pb={{ base: 4, md: 6 }} pt={0}>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} lineHeight="tall">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FaqsSection;