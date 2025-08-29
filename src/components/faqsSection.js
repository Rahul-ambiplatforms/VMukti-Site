import React from 'react';
import {
  Accordion, AccordionItem, AccordionButton, AccordionPanel,
  Box, Heading, Text, Icon
} from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Make sure react-icons is installed

const FaqsSection = ({ faqsList }) => {
  if (!faqsList || !faqsList.qa || faqsList.qa.length === 0) {
    return null;
  }

  const titleWords = faqsList.title ? faqsList.title.split(' ') : [];
  const lastWord = titleWords.pop() || ''; // Safely handle empty titles
  const firstWords = titleWords.join(' ');

  return (
    <Box 
      w="80%" 
      mx="auto" 
      // py={{ base: 10, md: 16 }} 
      mt="3%"
      // mb="15%"
      px={{ base: 4, md: 0 }}
    >
      <Heading as="h2" fontSize="48px" textAlign="center" mb={8} color="#000">
        {firstWords} <Text as="span" color="#3F77A5">{lastWord}</Text>
      </Heading>

      <Accordion allowMultiple={false} defaultIndex={[0]}>
        {faqsList.qa.map((faq, index) => (
          <AccordionItem 
            key={index}
            borderBottom="1px solid black"
            py={1} 
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton py={{ base: 3, md: 4 }}>
                  <Text flex="1" textAlign="left" fontWeight="700" fontSize={{ base: "14px", md: "16px" }} color="#000">
                    {faq.question}
                  </Text>
                  <Icon 
                    as={isExpanded ? FaMinus : FaPlus} 
                    color="#DB7B3A" 
                    w={{ base: 4, md: 5 }} 
                    h={{ base: 4, md: 5 }}
                    ml={4}
                  />
                </AccordionButton>
                <AccordionPanel pb={{ base: 4, md: 6 }} pt={0}>
                  <Text color="#000" fontWeight="400" fontSize={{ base: "14px", md: "16px" }} lineHeight="20px">
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