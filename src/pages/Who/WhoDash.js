import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  IconButton,
  Icon,
  VStack,
  useBreakpointValue,
  SimpleGrid,
  Divider,
  Link,
  Grid,
} from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import CertificationsSection from "./components/CertificationsSection";
import ReviewsSection from "./components/ReviewsSection";
import VerticalTimeline from "../../components/VerticalTimeline";
import certifications from "../../data/certificationsConstData";

const WhoWeare = () => {
  const reviews = [
    {
      id: 1,
      text: "VMukti created custom detection features specifically for us, ensuring a perfect fit. Their team's responsiveness made all the difference.",
    },
    {
      id: 2,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
    {
      id: 3,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
    {
      id: 4,
      text: "The AI-powered system instantly notifies us of potential threats via WhatsApp. It's quick, dependable, and has transformed our security approach.",
    },
    {
      id: 5,
      text: "Another great review from a satisfied customer about the excellent service provided.",
    },
    {
      id: 6,
      text: "Final review showing how amazing this product is for all our security needs.",
    },
  ];
  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = reviews.length;

  // Choose either APPROACH 1 or APPROACH 2:

  // APPROACH 1: Simple wrapping
  // const handleNext = () => {
  //   setCurrentIndex((prev) => {
  //     const nextIndex = prev + 1;
  //     return nextIndex > totalCards - visibleCards ? 0 : nextIndex;
  //   });
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prev) => {
  //     const prevIndex = prev - 1;
  //     return prevIndex < 0 ? totalCards - visibleCards : prevIndex;
  //   });
  // };

  // APPROACH 2: Continuous looping

  const extendedReviews = [...reviews, ...reviews.slice(0, visibleCards)];
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

  return (
    <Box>
      <PageContentWrapper>
        <HeroSection />
        <VisionMissionSection />
        <VerticalTimeline />

        {/* // Certifications */}

        <Box
          py={12}
          // px={{ base: 0, md: 8 }}
          bg="#E7E7E7"
          position="relative" // To position the background image
          // bg="red"
        >
          <Heading
            // as="h2"
            textAlign="center"
            mb={10}
            fontSize={{ base: "2xl", md: "36px" }}
            fontWeight="600"
            lineHeight="normal"
            color="#000"
            zIndex={1}
          >
            Our Certifications
          </Heading>
          {/* Background Image in the Top Right Corner */}
          <Box
            position="absolute"
            top={{ base: "20%", md: "0%" }}
            left={{ base: "5%", md: "30%" }}
            // right="-0.1%"
            width="60%"
            // width={{ base: '200px', md: '300px', lg: '400px' }}
            // height={{ base: '200px', md: '300px', lg: '400px' }}
            opacity={0.8}
            // transform="rotate(2deg)"
            // bg="red"
            // objectFit="contain"
            zIndex={0}
          >
            <Image
              // ml="2%"
              src="/assets/VMukti Brochure O2 2.png"
              alt="VMukti Brochure"
              width="100%"
              height="100%"
              objectFit="contain"
              // bg="blue"
            />
          </Box>
          <Image
            src={"/assets/Ellipse38.png" || "/placeholder.svg"}
            alt="ellipse38"
            position="absolute"
            left="12%" // Align to the left edge of the screen
            top="9%" // Align to the top edge of the screen
            transform="none" // Remove unwanted translations
            width={ellipseSize}
            opacity="1"
            pointerEvents="none"
            zIndex="0"
            // bg="red"
          />
          <Box justifyContent="center" alignItems="center">
            <Flex
              zIndex="3"
              gap={{ sm: "-10px", base: "5px", md: "50px" }}
              flexWrap="wrap"
              justifyContent="center"
              maxW="1200px"
              mx="auto"
              // bg="blue"
            >
              {certifications.map((cert, index) => (
                <Flex
                  key={index}
                  direction="column"
                  align="center"
                  justify="center"
                  p={{ base: "2", md: "4" }}
                  bg="#fff"
                  borderRadius="24px"
                  maxH="170px"
                  maxW="170px"
                  textAlign="center"
                  flexBasis={{
                    base: "calc(50% - 10px)",
                    md: index < 5 ? "18%" : "20%",
                  }} // Mobile: Exactly 2 per row
                  m={{ base: "3px", md: "5px" }} // Reduced margin to prevent wrapping issues
                  zIndex="3"
                >
                  <Box mb={3} color={cert.color}>
                    {cert.icon}
                  </Box>
                  <Text
                    fontSize={{ base: "12px", md: "16px" }}
                    fontWeight="bold"
                    color="gray.700"
                    mb={1}
                  >
                    {cert.name}
                  </Text>
                  {cert.description && (
                    <Text
                      fontSize={{ base: "sm", md: "16px" }}
                      color="gray.600"
                    >
                      {cert.description}
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>

        {/* Reviews */}
        {/* 
        <Box pb="9%" maxW="100%">
          <Box
            maxW="container.xl"
            mx="auto"
            px={12}
            py={8}
            bg="#3F77A5"
            borderRadius="24px"
            // bg="green"
          >
            <Heading
              color="white"
              mt="2%"
              mb="4%"
              textAlign="left"
              fontSize={{ base: "24px", md: "36px" }}
              fontWeight="600"
            >
              What Our Clients Say
            </Heading>

            <Box position="relative" mb="5%" py="1%">
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  mt={4}
                  overflow="hidden"
                  position="relative"
                  width="70%"
                  // height="100%"
                  // bg="red"
                >
                  <Flex transition="transform 0.5s ease-in-out">
                    {reviews.map((review) => (
                      <Box
                        key={review.id}
                        // flex={`0 0 3 3.33%`}
                        bg="white"
                        borderRadius="24px"
                        p={6}
                        minWidth="0"
                        mx={2}
                      >
                        
                        <Flex alignItems="flex-start" mb={4}>
                          <Icon
                            viewBox="0 0 24 24"
                            boxSize={8}
                            color="gray.500"
                            mr={4}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </Icon>
                          <Text fontSize="lg" fontWeight="600" color="gray.600">
                            Customer Reviews
                          </Text>
                        </Flex>
                        <Text fontSize="md" color="gray.700">
                          {review.text}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>

                <Box align="left" zIndex="1">
   
                  <IconButton
                    onClick={handlePrevious}
                    aria-label="Previous review"
                    icon={<ChevronLeftIcon />}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    size="lg"
                    mr="5px"
                  />

                  <IconButton
                    onClick={handleNext}
                    aria-label="Next review"
                    icon={<ChevronRightIcon />}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    size="lg"
                    ml="5px"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box> */}

        <Box pb="9%" maxW="100%">
          <Box
            maxW="container.xl"
            mx="auto"
            px={12}
            py={8}
            bg="#3F77A5"
            borderRadius="24px"
          >
            <Heading
              color="white"
              mt="2%"
              mb="4%"
              textAlign="left"
              fontSize={{ base: "24px", md: "36px" }}
              fontWeight="600"
            >
              What Our Clients Say
            </Heading>

            <Box position="relative" mb="5%" py="1%">
              <Flex alignItems="center" justifyContent="space-between">
                <Box mt={4} overflow="hidden" position="relative" width="70%">
                  <Flex
                    transform={`translateX(-${
                      currentIndex * (100 / visibleCards)
                    }%)`}
                    transition="transform 0.5s ease-in-out"
                    // width={`${(totalCards / visibleCards) * 100}`} // For APPROACH 1
                    width={`${(extendedReviews.length / visibleCards) * 45}%`} // For APPROACH 2
                  >
                    {/* {reviews.map((review) => ( // For APPROACH 1 */}
                    {extendedReviews.map(
                      (
                        review,
                        index // For APPROACH 2
                      ) => (
                        <Box
                          // key={review.id} // For APPROACH 1
                          key={`${review.id}-${index}`} // For APPROACH 2
                          flex={`0 0 ${100 / visibleCards}%`}
                          bg="white"
                          borderRadius="24px"
                          p={6}
                          minWidth="0"
                          mx={2}
                          w="320px"
                          h="320px"
                          // bg="red"
                        >
                          {/* ----------------Your card content ----------*/}
                          <Flex
                            alignItems="flex-start"
                            mb={4}
                            direction="column"
                          >
                            <Icon
                              viewBox="0 0 24 24"
                              boxSize={8}
                              color="gray.500"
                              mr={4}
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                              />
                            </Icon>
                            <Text
                              fontSize="lg"
                              fontWeight="600"
                              color="gray.600"
                            >
                              Customer Reviews
                            </Text>
                          </Flex>
                          <Text fontSize="md" color="gray.700">
                            {review.text}
                          </Text>
                        </Box>
                      )
                    )}
                  </Flex>
                </Box>

                <Box align="left" zIndex="1">
                  <IconButton onClick={handlePrevious} /* ... */ />
                  <IconButton onClick={handleNext} /* ... */ />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </PageContentWrapper>
    </Box>
  );
};

export default WhoWeare;
