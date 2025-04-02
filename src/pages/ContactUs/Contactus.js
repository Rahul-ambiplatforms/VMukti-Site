import {
  Box,
  Button,
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

const MotionBox = motion(Box);

const popAnimation = (index) => ({
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 },
  },
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  // const id = process.env.REACT_APP_EMAILJS_USER_ID; // Replace with your actual EmailJS User ID
  // const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Replace with your actual EmailJS Service ID
  // const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Replace with your actual EmailJS Template ID
  // console.log("myprocessvalues", id, serviceId, templateId);
  // Initialize EmailJS when component mounts
  // useEffect(() => {
  //   emailjs.init(id); // Replace with your actual EmailJS User ID
  // }, []);

  const cards = [
    {
      title: "Connect For Sales",
      phone: "(+91) 951 022 1902",
      email: "sales@vmukti.com",
      bg: "white",
      color: "black",
    },
    {
      title: "Connect For Partnership",
      phone: "(+91) 951 022 1902",
      email: "contact@vmukti.com",
      bg: "#3F77A5",
      color: "white",
    },
    {
      title: "Connect For Support",
      phone: "(+91) 951 022 2033",
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation remains the same
    if (!formData.firstName || !formData.email || !formData.message) {
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
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
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

  return (
    <PageContentWrapper>
      <Box>
        {/* Hero Banner */}
        <Box
          bgImage="url('./assets/Contactus.png')"
          bgSize="cover"
          bgPosition="center"
          h={{ base: "250px", md: "410px" }}
          position="relative"
          borderRadius="24px"
          overflow="hidden"
          zIndex="1"
        >
          <Box
            position="absolute"
            top="50%"
            left={{ base: "20px", md: "50px" }}
            transform="translateY(-50%)"
            color="white"
          >
            <ImagePop>
              <HeadingAnimation>
                <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
                  Contact Us
                </Heading>
              </HeadingAnimation>
            </ImagePop>
          </Box>
        </Box>

        {/* Contact Form and Info Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          mt="1%"
          mb="2%"
          gap={6}
          position="relative"
        >
          <Flex
            direction="column"
            mt="1%"
            bg="white"
            width={{ base: "100%", lg: "60%" }}
            minH={{ md: "649px" }}
            borderRadius="24px"
            boxShadow="sm"
            justifyContent="center"
          >
            {/* Contact Form */}
            <ImagePop>
              <Box
                as="form"
                onSubmit={handleSubmit}
                w="100%"
                maxW="800px"
                mx="auto"
                p={{ base: 4, md: 6 }}
              >
                <Heading
                  fontSize={{ base: "24px", md: "36px" }}
                  fontWeight="600"
                  mb="5%"
                >
                  Send Us a{" "}
                  <Text as="span" color="#DB7B3A">
                    Message
                  </Text>
                </Heading>

                <VStack spacing={4} align="stretch">
                  {/* Name Fields */}
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={4}
                    width="100%"
                  >
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name *"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      w="100%"
                      h="44px"
                      required
                    />
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      w="100%"
                      h="44px"
                    />
                  </SimpleGrid>

                  {/* Contact Fields */}
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={4}
                    width="100%"
                  >
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      w="100%"
                      h="44px"
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      w="100%"
                      h="44px"
                    />
                  </SimpleGrid>

                  {/* Message Field */}
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message *"
                    bg="#E7E7E7"
                    border="none"
                    w="100%"
                    h="210px"
                    resize="none"
                    borderRadius="10px"
                    required
                  />

                  {/* Submit Button */}
                  <Flex
                    justify={{ base: "center", md: "center", lg: "left" }}
                    w="100%"
                  >
                    <Button
                      type="submit"
                      bg="#3F77A5"
                      color="white"
                      width={{ base: "100px", md: "146px" }}
                      height={{ base: "40px", md: "50px" }}
                      borderRadius="20px"
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight="700"
                      isLoading={isLoading}
                      loadingText="Sending..."
                      _hover={{ bg: "#2c5a7d" }}
                    >
                      Submit
                    </Button>
                  </Flex>
                </VStack>
              </Box>
            </ImagePop>
          </Flex>

          {/* Contact Image */}
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            position="relative"
            maxW={{ base: "100%", lg: "80%" }}
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bgImage="url('./assets/VMukti Brochure O2 4.png')"
              bgSize="contain"
              bgRepeat="no-repeat"
              w="150%"
              h="150%"
              zIndex={0}
              transform="rotate(-160deg) translateX(100px) translateY(550px)"
            />
            <Image
              src="./assets/robowho2.png"
              alt="Robot hand"
              mt="30%"
              maxH="55%"
              maxW="100%"
              zIndex={1}
            />
          </Box>
        </Flex>

        {/* Connection Cards */}
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
                  <Flex direction="column"><Text fontWeight="700" fontSize={{ base: "12px", md: "16px" }}>
                    {card.phone}
                  </Text>
                  <Text fontWeight="500" fontSize={{ base: "12px", md: "16px" }}>
                    {card.email}
                  </Text></Flex>
                </SubHeadingAnimation>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </PageContentWrapper>
  );
}