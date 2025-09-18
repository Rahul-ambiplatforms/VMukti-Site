import {
  Accordion,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../components/Animation/Text/SubHeadingAnimation";
import ImagePop from "../../components/Animation/Image/ImagePop";
import PageContentWrapper from "../../components/PageContentWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactUsForm from "./ContactUsForm";
import Trusted from "../../components/Trusted";
import { Helmet } from "react-helmet-async";

const MotionBox = motion(Box);

const popAnimation = (index) => ({
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 },
  },
});

const scrollAnimation = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      title: "Connect For Sales",
      phone: "(+91) 968 777 0000",
      email: "sales@vmukti.com",
      bg: "white",
      color: "black",
    },
    {
      title: "Connect For Partnership",
      phone: "(+91) 968 777 0000",
      email: "contact@vmukti.com",
      bg: "#3F77A5",
      color: "white",
    },
    {
      title: "Connect For Support",
      phone: "(+91) 968 777 0000",
      email: "support@vmukti.com",
      bg: "white",
      color: "black",
    },
    {
      title: "Connect For HR",
      phone: "(+91) 951 022 2755",
      email: "hr@vmukti.com",
      bg: "#BECEDC",
      color: "black",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.number) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://vmukti.com/backend/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Helmet>
        {/* SEO Tags */}
        <title>Contact Us - VMukti Solutions</title>
        <meta
          name="description"
          content="Contact VMukti Solutions to discuss your AI vision needs. We help you to build, deploy and scale visual intelligence and surveillance solutions."
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content="Contact Us - VMukti Solutions" />
        <meta
          property="og:description"
          content="Contact VMukti Solutions to discuss your AI vision needs. We help you to build, deploy and scale visual intelligence and surveillance solutions."
        />
        <meta
          property="og:image"
          content="https://www.vmukti.com/assets/Contactus.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vmukti.com/contact-us/" />
        <meta property="og:site_name" content="Vmukti Solutions" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content="Contact Us - VMukti Solutions" />
        <meta
          name="twitter:description"
          content="Contact VMukti Solutions to discuss your AI vision needs. We help you to build, deploy and scale visual intelligence and surveillance solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.vmukti.com/assets/Contactus.png"
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.vmukti.com/contact-us/" />
        {/* 
        {contactPageSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))} */}
      </Helmet>
      <Box overflow="hidden" mb="14%" mt="3%">
        <PageContentWrapper>
          {/* Hero Banner */}
          <Box
            h={{ base: "300px", md: "410px" }}
            position="relative"
            borderRadius="24px"
            overflow="hidden"
            zIndex="1"
          >
            <Image
              src={`${process.env.PUBLIC_URL}/assets/Contactus.png`}
              alt="Contact Us - VMukti Solutions"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              zIndex="-1"
            />
            <Box
              position="absolute"
              top="50%"
              left={{ base: "20px", md: "50px" }}
              transform="translateY(-50%)"
              color="white"
            >
              <ImagePop>
                <HeadingAnimation>
                  <Heading
                    as="h1"
                    fontSize={{ base: "24px", sm: "36px", md: "48px" }}
                  >
                    Contact Us
                  </Heading>
                </HeadingAnimation>
              </ImagePop>
            </Box>
          </Box>

          <Flex
            direction={{ base: "column", lg: "row" }}
            mt="1%"
            mb="2%"
            gap={6}
            position="relative"
          >
            {/* ------contact us form------ */}
            <ContactUsForm />

            {/* Contact Image */}
            {/* <Box
            flex="1"
            display="flex"
            justifyContent="center"
            position="relative"
            maxW={{ base: '100%', lg: '80%' }}
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              // bgImage="url('./assets/BannerBrochure6.png')"
              bgImage={`url(${process.env.PUBLIC_URL}/assets/BannerBrochure6.png)`}
              bgSize="contain"
              bgRepeat="no-repeat"
              w="150%"
              h="150%"
              zIndex={0}
              transform={{
                base: 'rotate(0deg) translateX(0) translateY(0)', // Mobile view transformation
                lg: 'rotate(-160deg) translateX(100px) translateY(550px)', // Desktop view transformation
              }}
            />
            <Image
              // src="./assets/robowho2.png"
              src={`${process.env.PUBLIC_URL}/assets/robowho2.png`}
              alt="Robot hand"
              mt={{ base: '0', md: '30%' }}
              maxH="55%"
              maxW="100%"
              zIndex={1}
            />
          </Box> */}
          </Flex>
        </PageContentWrapper>
        <Trusted />
        <PageContentWrapper>
          {/* Connection Cards - Mobile View */}
          <Box display={{ base: "block", lg: "none" }} mt={6} mb="16">
            <Box position="relative" w="100%">
              <MotionBox
                key={currentCardIndex} // Ensure animation triggers on card change
                bg={cards[currentCardIndex].bg}
                color={cards[currentCardIndex].color}
                p={6}
                borderRadius="24px"
                minH="336px"
                w="100%"
                position="relative"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={scrollAnimation}
                overflow="hidden"
              >
                <HeadingAnimation>
                  <Heading
                    fontSize="36px"
                    width={{ base: "203px", md: "256px" }}
                    fontWeight="700"
                    lineHeight="normal"
                    fontStyle="normal"
                    letterSpacing="-0.54%"
                    mb={4}
                  >
                    {cards[currentCardIndex].title}
                  </Heading>
                </HeadingAnimation>
                <Box position="absolute" bottom="16px">
                  <SubHeadingAnimation>
                    <Flex direction="column">
                      <Text fontWeight="700" fontSize="16px">
                        {cards[currentCardIndex].phone}
                      </Text>
                      <Box
                        w="10%"
                        h="1px"
                        bgColor={
                          cards[currentCardIndex].bg === "#3F77A5"
                            ? "white"
                            : "#3F77A5"
                        }
                        my={2} // Add some vertical spacing
                      />
                      <Text
                        fontWeight="500"
                        color={
                          cards[currentCardIndex].bg === "#3F77A5"
                            ? "white"
                            : "#696969"
                        }
                        fontSize="16px"
                      >
                        {cards[currentCardIndex].email}
                      </Text>
                    </Flex>
                  </SubHeadingAnimation>
                </Box>
              </MotionBox>
              <Flex
                position="absolute"
                // top="350px"
                bottom="-50px"
                right="10px"
                gap="2px"
                zIndex="2"
              >
                <Button
                  width="31px"
                  height="31px"
                  minWidth="31px"
                  minHeight="31px"
                  padding="0"
                  borderRadius="5px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  bgColor="white"
                  _hover={{ bgColor: "#e0e0e0" }}
                  onClick={handlePrevCard}
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Button>
                <Button
                  width="31px"
                  height="31px"
                  minWidth="31px"
                  minHeight="31px"
                  padding="0"
                  borderRadius="5px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  bgColor="white"
                  _hover={{ bgColor: "#e0e0e0" }}
                  onClick={handleNextCard}
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Button>
              </Flex>
            </Box>
          </Box>
          {/* Connection Cards for Desktop View */}
          <Box display={{ base: "none", lg: "block" }} mt={6}>
            <SimpleGrid
              columns={{ base: 2, md: 2, lg: 4 }}
              spacing={{ base: 4, md: 6, lg: 8 }}
            >
              {cards.map((card, index) => (
                <MotionBox
                  key={index}
                  bg={card.bg}
                  color={card.color}
                  p={{ base: 4, md: 6, lg: 6 }}
                  borderRadius="24px"
                  minH={{ base: "180px", md: "336px" }}
                  position="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  overflow="hidden"
                  variants={popAnimation(index)}
                >
                  <HeadingAnimation>
                    <Heading
                      fontSize={{ base: "20px", md: "36px" }}
                      fontWeight="700"
                      letterSpacing="-1.5%"
                      mb={4}
                    >
                      {card.title}
                    </Heading>
                  </HeadingAnimation>
                  <Box position="absolute" bottom="16px">
                    <SubHeadingAnimation>
                      <Flex direction="column">
                        <Text
                          fontWeight="700"
                          fontSize={{ base: "12px", md: "16px" }}
                        >
                          {card.phone}
                        </Text>
                        <Box
                          w="10%"
                          h="2px"
                          bgColor={card.bg === "#3F77A5" ? "white" : "#3F77A5"}
                          my={2} // Add some vertical spacing
                        />
                        <Text
                          fontWeight="500"
                          fontSize={{ base: "12px", md: "16px" }}
                        >
                          {card.email}
                        </Text>
                      </Flex>
                    </SubHeadingAnimation>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </PageContentWrapper>
      </Box>
    </>
  );
}
