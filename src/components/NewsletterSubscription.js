import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import SubscriptionBanner from "./SubscriptionBanner";
import { useLocation, useNavigate } from "react-router-dom";

const PhoneIcon = ({ mr = "10px", w = "21px", h = "21px" }) => (
  <Box
    as="svg"
    width={w}
    height={h}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    mr={mr}
  >
    <path
      d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z"
      fill="#3F77A5"
    />
  </Box>
);

const whoWeAreLinks = [
  { text: "About Us", path: "/whoweare" },
  { text: "Event Spotlight", path: "/whoweare/eventspotlight" },
  { text: "Social Impact", path: "/whoweare/socialimpact" },
  { text: "Achievements", path: "/whoweare/achievements" },
  { text: "Blogs", path: "/whoweare/blogs" },
  { text: "Careers", path: "/whoweare/careers" },
  { text: "Help Desk", path: "/whoweare/helpdesk" },
];

const policyLinks = [
  { text: "Terms & Condition", path: "/whoweare/terms-and-condition" },
  { text: "Trademark Policy", path: "/whoweare/trademark-policy" },
  { text: "Warranty Service", path: "/whoweare/warranty-service" },
  { text: "Warranty Policy", path: "/whoweare/warranty-policy" },
  { text: "Privacy Policy", path: "/whoweare/privacy-policy" },
];

const ourServingsLinks = [
  { text: "Enterprise", path: "/serving/enterprise" },
  { text: "Government", path: "/serving/government" },
  { text: "General Consumers", path: "/serving/generalconsumers" },
];

const ourSolutionsLinks = [
  { text: "VMS", path: "/solutions?slider=vms" },
  { text: "EMS", path: "/solutions?slider=ems" },
  { text: "ICCC", path: "/solutions?slider=icc" },
  { text: "AI Optimized Cloud Services", path: "/solutions?slider=opt" },
  {
    text: "Generative AI in Video Surveillance",
    path: "/solutions?slider=gav",
  },
  {
    text: "AI-Powered Surveillance Cameras",
    path: "/solutions?slider=asc",
  },
  {
    text: "Flying Squad Vehicle (FSV)",
    path: "/solutions?slider=fsv",
  },
  { text: "Live Webcasting & Streaming", path: "/solutions?slider=lws" },
];

const industriesWeServeLinks = [
  { text: "Healthcare Industry", path: "/industries/healthcareindustry" },
  { text: "Education Industry", path: "/industries/educationindustry" },
  {
    text: "Border Security Industry",
    path: "/industries/defenseindustry",
  },
  { text: "Election Industry", path: "/industries/election" },
  { text: "Banking Industry", path: "/industries/financeindustry" },
  {
    text: "Transportation Industry",
    path: "/industries/transportationindustry",
  },
  {
    text: "City Monitoring Industry",
    path: "/industries/citymonitoring",
  },
  { text: "Retailer Industry", path: "/industries/retailindustry" },
  { text: "Manufacturing Industry", path: "/industries/manufacturingindustry" },
  { text: "Agriculture Industry", path: "/industries/agricultureindustry" },
  {
    text: "Warehousing & Logistic Industry",
    path: "/industries/warehousinglogisticindustry",
  },
  {
    text: "Sports & Entertainment Industry",
    path: "/industries/entertainmentindustry",
  },
  { text: "Hospitality Industry", path: "/industries/hospitalityindustry" },
];

const NewsletterSubscription = () => {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServingsOpen, setIsServingsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path, linkName, sliderId = null) => {
    if (location.pathname === path) {
      // Avoid unnecessary refresh by replacing the state
      navigate(path, { replace: true });
    }
    else {
      navigate(path);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsIndustriesOpen(false);
      setIsSolutionsOpen(false);
      setIsServingsOpen(false);
      setIsDropdownOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonWidth = useBreakpointValue({
    base: "146px",
    md: "146px",
    lg: "146px",
  });
  const buttonHeight = useBreakpointValue({
    base: "40px",
    md: "45px",
    lg: "50px",
  });

  return (
    <>
      <Box
        // padding={{base:"4% 4% 1% 4%",md:"4% 2% 1% 2%"}}
        // fontFamily="'Wix Madefor Display', sans-serif"
        fontWeight={600}
        bg={"#E7E7E7"}
      >
        {/* Subscription Banner */}
        <SubscriptionBanner />

        {/* Information Section */}
        <Flex flexWrap="wrap" gap="20px" width={{ base: "100%" }} mt={{ base: "5%", md: "0px" }}>
          {/* Who we are */}
          <Box
            position="relative"
            flex={{ base: "0 0 100%", md: "2" }}
            width={{ base: "100%" }}
          >
            {/* Main "Who we are" box */}
            <Flex
              direction="column"
              bg="white"
              borderRadius={{ base: "20px", md: "24px" }}
              p="20px"
              justifyContent="space-between"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Box>
                <Flex justify="space-between" align="center">
                  <Heading fontSize="16px" fontWeight={700}>
                    Who we are
                  </Heading>
                  <Box
                    display={{ base: "block", md: "none" }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    cursor="pointer"
                  >
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform={isDropdownOpen ? "rotate(180)" : ""}
                    >
                      <path
                        d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                </Flex>
                <Box
                  width="17px"
                  height="2px"
                  borderRadius="2px"
                  mt="1%"
                  bg="#3F77A5"
                />

                {/* Desktop content - two columns with bullet points */}
                <Box display={{ base: "none", md: "block" }} mt="5%">
                  <Flex direction="row">
                    <Box mr="30px">
                      <List spacing="10px">
                        {whoWeAreLinks.map((item, index) => (
                          <ListItem
                            key={index}
                            _hover={{ color: "#3F77A5", cursor: "pointer" }}
                            color="#696969"
                            fontSize="14px"
                            fontWeight="500"
                          >
                            •&nbsp;&nbsp;
                            <Link href={item.path}>{item.text}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box>
                      <List spacing="10px">
                        {policyLinks.map((item, index) => (
                          <ListItem
                            key={index}
                            _hover={{ color: "#3F77A5", cursor: "pointer" }}
                            color="#696969"
                            fontSize="14px"
                            fontWeight="500"
                          >
                            •&nbsp;&nbsp;
                            <Link href={item.path}>{item.text}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Flex>
                </Box>
              </Box>

              {/* ambicam link portion */}
              <Flex gap={4} alignItems="center" display={{ base: "none", md: "flex" }}>
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  background="#4CC9F0"
                  color="#FFFFFF"
                  fontSize={"16px"}
                  fontWeight="600"
                  borderRadius="20px"
                  flexShrink={0}
                  onClick={() => navigateTo("/Ambicam", "Ambicam")}
                  _hover={{
                    background: "#3bb9e0",
                    color: "#FFFFFF",
                  }}
                >
                  Ambicam
                </Button>
                <Link as="a" href="https://www.ambicam.com" isExternal>
                  <Text color="#4CC9F0" fontSize={{ base: "12px", md: "14px" }} lineHeight="30px">
                    www.ambicam.com
                  </Text>
                </Link>
              </Flex>
            </Flex>

            {/* Mobile dropdown content - single column without bullet points */}
            {isDropdownOpen && (
              <Box
                display={{ base: "block", md: "none" }}
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
              // onClick={(e) => e.stopPropagation()} // Prevent container click from bubbling
              >
                {[...whoWeAreLinks, ...policyLinks].map(
                  (item, index, array) => (
                    <Box key={index}>
                      <Link href={item.path}>
                        <Flex
                          align="center"
                          py="10px"
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        >
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="#696969"
                          >
                            {item.text} {/* Removed bullet point for mobile */}
                          </Text>
                        </Flex>
                      </Link>
                      {index !== array.length - 1 && (
                        <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%" />
                      )}
                    </Box>
                  )
                )}
              </Box>
            )}
          </Box>

          {/* Contact Us & Our Servings */}
          <Flex
            flexDirection="column"
            flex={{ base: "0 0 100%", md: "1" }}
            minW="250px"
            gap={4}
          >
            {/* Our Servings Box with Dropdown */}
            <Box position="relative">
              {/* Main "Our Servings" box */}
              <Box
                bg="#BECEDC"
                borderRadius={{ base: "20px", md: "24px" }}
                p="20px"
                width={{ base: "100%" }}
                onClick={() => setIsServingsOpen(!isServingsOpen)}
                cursor={{ base: "pointer", md: "default" }}
              >
                <Flex justify="space-between" align="center">
                  <Heading fontSize="16px" fontWeight={700}>
                    Our Servings
                  </Heading>
                  <Box
                    display={{ base: "block", md: "none" }}
                    onClick={() => setIsServingsOpen(!isServingsOpen)}
                    cursor="pointer"
                  >
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform={isServingsOpen ? "rotate(180)" : ""}
                    >
                      <path
                        d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                </Flex>
                <Box
                  width="17px"
                  height="2px"
                  borderRadius="2px"
                  mt="1%"
                  bg="#3F77A5"
                />

                {/* Desktop content - always visible */}
                <Box display={{ base: "none", md: "block" }} mt="5%">
                  <List spacing="10px">
                    {ourServingsLinks.map((item, index) => (
                      <ListItem
                        key={index}
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        fontSize="14px"
                        fontWeight="500"
                      >
                        •&nbsp;&nbsp;
                        <Link href={item.path}>{item.text}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>

              {/* Mobile dropdown content - appears outside main box */}
              {isServingsOpen && (
                <Box
                  display={{ base: "block", md: "none" }}
                  position={{ base: "relative" }}
                  width="100%"
                  bg="white"
                  borderRadius="10px"
                  mt="10px" // Adjust to overlap slightly with main box
                  p="15px"
                  boxShadow="sm"
                  zIndex="1"
                >
                  {ourServingsLinks.map((item, index) => (
                    <Box key={index}>
                      <Link href={item.path}>
                        <Flex
                          align="center"
                          py="10px"
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                        >
                          <Text fontSize="14px" fontWeight="500">
                            {item.text} {/* Removed bullet point */}
                          </Text>
                        </Flex>
                      </Link>
                      {index !== ourServingsLinks.length - 1 && (
                        <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%" />
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            {/* Contact Us Box with Dropdown */}
            <Box
              bg="#BECEDC"
              borderRadius="15px"
              p="20px"
              flex="1"
              minW="250px"
              order="4"
              display={{ base: "none", md: "block" }}
            >
              <Heading
                fontSize="16px"
                fontWeight={700}
              // fontFamily="'Wix Madefor Display', sans-serif"
              // mb="10px"
              >
                Contact Us
              </Heading>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              <Text fontSize="14px" fontWeight="500" lineHeight="1.6" mt="5%">
                7, Arista@Eight corporate House, Near Satyam House, Behind
                Rajpath Club, Bodakdev, Ahmedabad - 380054
              </Text>
              <Flex alignItems="center" mt="15px">
                <PhoneIcon mr="10px" w="20px" h="auto" />
                <Text fontSize="14px" fontWeight="500">
                  (91+) 968 777 0000
                </Text>
              </Flex>
              <Button
                width={buttonWidth}
                height={buttonHeight}
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                color="#3F77A5"
                borderRadius="20px"
                flexShrink={0}
                // ml={{ base: '5px', md: '10px', lg: '15px' }}
                mt="20%"
                onClick={() => navigateTo("/contactus", "contactus")}

                fontWeight={700}
                gap="2"
                _hover={{
                  bg: "#E0F2FE", // Light blue background on hover
                  color: "#2C5E84",
                }}
              >
                Book Demo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Button>
            </Box>
          </Flex>

          {/* Technologies */}
          <Box position="relative" flex="1" minW="250px">
            {/* Main "Our Solutions" box */}
            <Box
              bg="#BECEDC"
              borderRadius={{ base: "20px", md: "24px" }}
              p="20px"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Flex justify="space-between" align="center">
                <Heading fontSize="16px" fontWeight={700}>
                  Our Solutions
                </Heading>
                <Box
                  display={{ base: "block", md: "none" }}
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  cursor="pointer"
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={isSolutionsOpen ? "rotate(180)" : ""}
                  >
                    <path
                      d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Flex>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              {/* Desktop content - always visible */}
              <Box display={{ base: "none", md: "block" }} mt="5%">
                <List spacing="10px">
                  {ourSolutionsLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      fontSize="14px"
                      fontWeight="500"
                    >
                      •&nbsp;&nbsp;
                      <Link href={item.path}>{item.text}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Mobile dropdown content - appears outside main box */}
            {isSolutionsOpen && (
              <Box
                display={{ base: "block", md: "none" }}
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
              >
                {ourSolutionsLinks.map((item, index) => (
                  <Box key={index}>
                    <Link href={item.path}>
                      <Flex
                        align="center"
                        py="10px"
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      >
                        <Text fontSize="14px" fontWeight="500">
                          {item.text}
                        </Text>
                      </Flex>
                    </Link>
                    {index !== ourSolutionsLinks.length - 1 && (
                      <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%" />
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Industries we serve */}
          <Box position="relative" flex="1" minW="250px">
            {/* Main "Industries we serve" box */}
            <Box
              bg="#BECEDC"
              borderRadius={{ base: "20px", md: "24px" }}
              p="20px"
              height={{ md: "100%" }}
              width={{ base: "100%" }}
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              cursor={{ base: "pointer", md: "default" }}
            >
              <Flex justify="space-between" align="center">
                <Heading fontSize="16px" fontWeight={700}>
                  Industries we serve
                </Heading>
                <Box
                  display={{ base: "block", md: "none" }}
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  cursor="pointer"
                >
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={isIndustriesOpen ? "rotate(180)" : ""}
                  >
                    <path
                      d="M7.38461 8.077L14.7692 0.692383L-2.86102e-06 0.692382L7.38461 8.077Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Flex>
              <Box
                width="17px"
                height="2px"
                borderRadius="2px"
                mt="1%"
                bg="#3F77A5"
              />

              {/* Desktop content - always visible */}
              <Box display={{ base: "none", md: "block" }} mt="5%">
                <List spacing="10px">
                  {industriesWeServeLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      fontSize="14px"
                      fontWeight="500"
                    >
                      •&nbsp;&nbsp;
                      <Link href={item.path}>{item.text}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            {/* Mobile dropdown content - appears outside main box */}
            {isIndustriesOpen && (
              <Box
                display={{ base: "block", md: "none" }}
                position={{ base: "relative", md: "absolute" }}
                width="100%"
                bg="white"
                borderRadius="10px"
                mt="10px"
                p="15px"
                boxShadow="sm"
                zIndex="1"
              >
                {industriesWeServeLinks.map((item, index) => (
                  <Box key={index}>
                    <Link href={item.path}>
                      <Flex
                        align="center"
                        py="10px"
                        _hover={{ color: "#3F77A5", cursor: "pointer" }}
                      >
                        <Text fontSize="14px" fontWeight="500">
                          {item.text}
                        </Text>
                      </Flex>
                    </Link>
                    {index !== industriesWeServeLinks.length - 1 && (
                      <Box height="1px" bg="#3F77A5" opacity="0.2" my="5px" w="60%" />
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* hide in desktop view */}
          <Box
            bg="#BECEDC"
            display={{ base: "block", md: "none" }}
            borderRadius={{ base: "20px", md: "24px" }}
            p="20px"
            flex="1"
            minW="250px"
            order="4"
          >
            <Heading
              fontSize="16px"
              fontWeight={700}
            // fontFamily="'Wix Madefor Display', sans-serif"
            // mb="10px"
            >
              Contact Us
            </Heading>
            <Box
              width="17px"
              height="2px"
              borderRadius="2px"
              mt="1%"
              bg="#3F77A5"
            />

            <Text fontSize="14px" fontWeight="500" lineHeight="1.6" mt="5%">
              7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath
              Club, Bodakdev, Ahmedabad - 380054
            </Text>
            <Flex alignItems="center" mt="15px">
              <PhoneIcon mr="10px" w="20px" h="auto" />
              <Text fontSize="14px" fontWeight="500">
                (91+) 968 777 0000
              </Text>
            </Flex>
            <Flex gap={2} justifyContent="center" mt="20%">
              <Link href={"/contactus"}>
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  justifyContent="space-between"
                  alignItems="center"
                  bg="white"
                  color="#3F77A5"
                  borderRadius="20px"
                  flexShrink={0}
                  fontWeight={700}
                  gap="2"
                  _hover={{
                    bg: "#E0F2FE",
                    color: "#2C5E84",
                  }}
                >
                  Book Demo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href={"/Ambicam"}>
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  background="#4CC9F0"
                  color="#FFFFFF"
                  fontSize={"16px"}
                  fontWeight="600"
                  borderRadius="20px"
                  flexShrink={0}
                  _hover={{
                    background: "#3bb9e0",
                    color: "#FFFFFF",
                  }}
                >
                  Ambicam
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>

        {/* Footer */}
        <Box>
          {/* Logo and Social Media Icons */}
          <Grid
            templateColumns="1fr 1fr 1fr"
            alignItems="center" // Vertically center content
            padding="20px 0 20px 0"
            gap={2}
          >
            <Box justifySelf="start">
              {/* Logo */}
              {/* <Image src="/assets/logo.svg" alt="VMukti" h="30px" /> */}

              <svg width="98" height="26" viewBox="0 0 98 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.06965 3.58479L12.479 21.6141L14.5487 25.3978L24.3879 8.35597L22.7459 5.31229L21.7486 3.58479L19.6789 0H15.5395L17.6093 3.58479L20.2486 8.15701L14.5487 18.0292L6.20904 3.58479H9.75994L16.3242 14.9539L18.3938 11.3697L13.8996 3.58479L11.8297 0H7.69029H4.13939H0L2.06965 3.58479Z" fill="#3F77A5" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8675 0H22.8937L23.8807 1.70961L25.1225 3.86052L26.1095 5.57039L27.0966 3.86052L29.3255 0H24.8675Z" fill="#DB7B3A" />
                <path d="M42.9423 7.55076L39.3612 15.8401L35.83 7.55076H32.9287L37.9355 19.1559H40.5881L45.6115 7.55076H42.9423ZM59.6509 19.1559L59.6177 7.55076H57.41L53.1354 14.7626L48.7946 7.55076H46.573V19.1559H49.093V12.342L52.4889 17.9291H53.6992L57.1116 12.1929L57.1282 19.1559H59.6509ZM68.6228 10.2365V14.6465C68.6228 16.2878 67.7607 17.0504 66.567 17.0504C65.4231 17.0504 64.7599 16.3873 64.7599 14.8952V10.2365H62.1737V15.2765C62.1737 18.0286 63.7486 19.2886 65.9867 19.2886C67.081 19.2886 68.0757 18.8741 68.7555 18.0949V19.1559H71.2091V10.2365H68.6228ZM80.2611 19.1559H83.3945L79.3493 14.0165L83.063 10.2365H79.9793L76.1993 13.8176V6.85449H73.6131V19.1559H76.1993V16.8847L77.4427 15.6578L80.2611 19.1559ZM89.6115 16.9012C89.3297 17.1167 88.9484 17.2327 88.5671 17.2327C87.8708 17.2327 87.4563 16.8183 87.4563 16.0557V12.425H89.6779V10.4355H87.4563V8.26364H84.87V10.4355H83.494V12.425H84.87V16.0888C84.87 18.2109 86.0969 19.2886 88.2024 19.2886C88.9981 19.2886 89.7774 19.1062 90.3079 18.7249L89.6115 16.9012ZM93.06 8.99312C94.0215 8.99312 94.6681 8.36312 94.6681 7.50102C94.6681 6.70528 94.0215 6.1084 93.06 6.1084C92.0984 6.1084 91.4518 6.7384 91.4518 7.55076C91.4518 8.36311 92.0984 8.99312 93.06 8.99312ZM91.7668 19.1559H94.353V10.2365H91.7668V19.1559Z" fill="#3F77A5" />
                <path d="M95.3696 6.53786H95.7073V5.35386H96.1742V5.07861H94.9027V5.35386H95.3696V6.53786ZM98 6.53786L97.9958 5.07861H97.7182L97.1808 5.98548L96.635 5.07861H96.3557V6.53786H96.6725V5.68113L97.0994 6.38363H97.2517L97.6807 5.6623L97.6828 6.53786H98Z" fill="black" />
              </svg>
            </Box>

            {/* Copyright Text */}

            <Box
              justifySelf="center"
              textAlign="center"
            >
              <Text fontSize={{ base: "8px", md: "12px" }} color="gray.600">
                Copyright © 2025, VMukti Solutions
              </Text>
            </Box>
            {/* Social Media Icons */}

            {/* desktop */}
            <Flex
              gap={5}
              justify="center"
              justifySelf="end"
              align="center" // Ensures vertical alignment
              display={{ base: "none", md: "flex" }}
            >
              {[
                {
                  svg: (
                    <svg
                      width="11"
                      height="19"
                      viewBox="0 0 11 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.31436 18.395V10.1844H10.2091L10.6424 6.98452H7.31428V4.94155C7.31428 4.01512 7.58446 3.38381 8.97991 3.38381L10.7596 3.38301V0.521091C10.4518 0.482165 9.39527 0.39502 8.16629 0.39502C5.60026 0.39502 3.84352 1.88619 3.84352 4.62474V6.98452H0.941406V10.1844H3.84352V18.3949H7.31436V18.395Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8767 0.0965034V0.0932617H13.7207L14.029 0.154854C14.2346 0.19484 14.4213 0.247242 14.589 0.312075C14.7567 0.376909 14.9191 0.452554 15.0759 0.538993C15.2328 0.625432 15.3751 0.713509 15.5028 0.80319C15.6294 0.891801 15.743 0.98581 15.8437 1.08522C15.9432 1.18571 16.0985 1.21164 16.3095 1.16302C16.5205 1.11439 16.7477 1.04685 16.9912 0.960412C17.2346 0.873972 17.4754 0.776722 17.7135 0.66866C17.9515 0.560599 18.0965 0.491989 18.1485 0.462813C18.1993 0.432569 18.2264 0.41636 18.2296 0.414188L18.2328 0.409326L18.2491 0.401221L18.2653 0.393117L18.2815 0.385013L18.2978 0.376909L18.301 0.372046L18.3059 0.368805L18.3108 0.365563L18.314 0.3607L18.3302 0.355838L18.3465 0.352596L18.3432 0.376909L18.3383 0.401221L18.3302 0.425534L18.3221 0.449847L18.314 0.466055L18.3059 0.482264L18.2978 0.506576C18.2924 0.522785 18.287 0.54439 18.2815 0.57141C18.2761 0.598429 18.2247 0.706474 18.1273 0.895578C18.03 1.08468 17.9082 1.27648 17.7621 1.47098C17.6161 1.66548 17.4851 1.81242 17.3694 1.91185C17.2525 2.01234 17.1751 2.08257 17.1373 2.12255C17.0994 2.16361 17.0534 2.20142 16.9993 2.23601L16.9181 2.2895L16.9019 2.29761L16.8857 2.30571L16.8824 2.31057L16.8776 2.31381L16.8727 2.31706L16.8694 2.32192L16.8532 2.33002L16.837 2.33813L16.8338 2.34299L16.8289 2.34623L16.824 2.34947L16.8208 2.35433L16.8175 2.3592L16.8126 2.36244L16.8078 2.36568L16.8045 2.37054H16.8857L17.3401 2.27329C17.6431 2.20846 17.9326 2.13012 18.2085 2.03827L18.6467 1.8924L18.6954 1.87619L18.7198 1.86808L18.736 1.85998L18.7522 1.85187L18.7685 1.84377L18.7847 1.83567L18.8171 1.8308L18.8496 1.82756V1.85998L18.8415 1.86322L18.8334 1.86808L18.8301 1.87294L18.8253 1.87619L18.8204 1.87943L18.8171 1.88429L18.8139 1.88915L18.809 1.8924L18.8042 1.89564L18.8009 1.9005L18.7977 1.90536L18.7928 1.9086L18.7847 1.92481L18.7766 1.94102L18.7717 1.94426C18.7695 1.9475 18.7008 2.03934 18.5656 2.2198C18.4303 2.40134 18.3573 2.49318 18.3465 2.49535C18.3356 2.49859 18.3205 2.5148 18.301 2.54397C18.2826 2.57422 18.1679 2.69471 17.9569 2.90542C17.7459 3.11613 17.5393 3.3036 17.3369 3.46785C17.1335 3.63318 17.0307 3.83632 17.0285 4.07729C17.0253 4.31717 17.0128 4.5884 16.9912 4.89095C16.9695 5.19351 16.929 5.52037 16.8694 5.87156C16.8099 6.22275 16.718 6.61985 16.5935 7.06288C16.4691 7.5059 16.3176 7.93813 16.1391 8.35955C15.9605 8.78097 15.7739 9.15916 15.5791 9.49414C15.3843 9.82912 15.2058 10.1128 15.0435 10.3451C14.8812 10.5774 14.7162 10.7962 14.5484 11.0015C14.3807 11.2068 14.1687 11.4381 13.9122 11.6952C13.6547 11.9513 13.514 12.0918 13.4902 12.1167C13.4653 12.1404 13.3593 12.229 13.1721 12.3825C12.986 12.537 12.7858 12.6915 12.5715 12.846C12.3584 12.9995 12.1625 13.1275 11.984 13.2302C11.8054 13.3328 11.5901 13.4501 11.338 13.5819C11.087 13.7148 10.8153 13.838 10.5232 13.9515C10.231 14.0649 9.92265 14.1703 9.59803 14.2675C9.27341 14.3648 8.95962 14.4404 8.65664 14.4944C8.35368 14.5485 8.01012 14.5944 7.62598 14.6322L7.04979 14.6889V14.697H5.99479V14.6889L5.85682 14.6808C5.76486 14.6754 5.68911 14.67 5.62959 14.6646C5.57009 14.6592 5.34555 14.6295 4.95601 14.5755C4.56647 14.5215 4.2608 14.4674 4.03897 14.4134C3.81716 14.3594 3.48712 14.2567 3.04889 14.1054C2.61066 13.9542 2.23572 13.8012 1.92409 13.6467C1.61355 13.4933 1.41878 13.396 1.33978 13.355C1.26187 13.315 1.17423 13.2653 1.07684 13.2059L0.930764 13.1167L0.927534 13.1119L0.922648 13.1086L0.917779 13.1054L0.914533 13.1005L0.898302 13.0924L0.882071 13.0843L0.878841 13.0794L0.873956 13.0762L0.869086 13.073L0.86584 13.0681L0.86261 13.0632L0.857725 13.06H0.849609V13.0276L0.86584 13.0308L0.882071 13.0357L0.95511 13.0438C1.0038 13.0492 1.13636 13.0573 1.35277 13.0681C1.56919 13.0789 1.79911 13.0789 2.04258 13.0681C2.28604 13.0573 2.53492 13.033 2.78919 12.9952C3.04348 12.9573 3.34375 12.8925 3.69001 12.8007C4.03627 12.7088 4.3544 12.5997 4.6444 12.4732C4.9333 12.3457 5.13888 12.2507 5.26117 12.188C5.38235 12.1264 5.56738 12.0118 5.81625 11.8444L6.18956 11.5931L6.1928 11.5883L6.19767 11.585L6.20256 11.5818L6.20579 11.5769L6.20903 11.5721L6.2139 11.5688L6.21879 11.5656L6.22202 11.5607L6.23825 11.5558L6.25448 11.5526L6.25772 11.5364L6.26259 11.5202L6.26748 11.5169L6.27071 11.5121L6.14086 11.504C6.0543 11.4986 5.97044 11.4932 5.88928 11.4878C5.80813 11.4824 5.68099 11.4581 5.50786 11.4148C5.33474 11.3716 5.14809 11.3068 4.9479 11.2203C4.74772 11.1339 4.55295 11.0312 4.36359 10.9124C4.17424 10.7935 4.03735 10.6946 3.95295 10.6158C3.86963 10.5379 3.76142 10.4277 3.62833 10.2851C3.49632 10.1414 3.38162 9.99389 3.28424 9.84262C3.18685 9.69135 3.0938 9.51681 3.00508 9.31909L2.87035 9.02409L2.86223 8.99978L2.85412 8.97547L2.84925 8.95926L2.846 8.94305L2.87035 8.94629L2.8947 8.95116L3.07323 8.97547C3.19227 8.99168 3.37893 8.99708 3.6332 8.99168C3.88749 8.98628 4.06332 8.97547 4.1607 8.95926C4.25809 8.94305 4.3176 8.93224 4.33924 8.92684L4.3717 8.91874L4.41228 8.91064L4.45286 8.90253L4.4561 8.89767L4.46097 8.89443L4.46586 8.89119L4.46909 8.88632L4.43662 8.87822L4.40416 8.87012L4.3717 8.86201L4.33924 8.85391L4.30678 8.8458C4.28514 8.8404 4.24728 8.82959 4.19316 8.81339C4.13906 8.79718 3.99299 8.73774 3.75493 8.63509C3.51689 8.53244 3.32752 8.43249 3.18685 8.33524C3.04583 8.23771 2.91137 8.13104 2.78433 8.01593C2.65772 7.89923 2.51869 7.74903 2.36719 7.56534C2.21571 7.38165 2.08046 7.16823 1.96142 6.92511C1.8424 6.68198 1.75313 6.44966 1.69361 6.22814C1.63433 6.00793 1.59522 5.78278 1.57677 5.5555L1.54754 5.21512L1.56377 5.21836L1.58 5.22322L1.59623 5.23133L1.61246 5.23943L1.62869 5.24754L1.64492 5.25564L1.8965 5.3691C2.06423 5.44474 2.27252 5.50958 2.52139 5.5636C2.77027 5.61762 2.91904 5.64735 2.96773 5.65275L3.04077 5.66085H3.18685L3.18362 5.65599L3.17873 5.65275L3.17387 5.6495L3.17062 5.64464L3.16739 5.63978L3.1625 5.63654L3.15763 5.6333L3.15439 5.62843L3.13816 5.62033L3.12193 5.61222L3.1187 5.60736L3.11381 5.60412L3.10894 5.60088L3.1057 5.59602L3.08947 5.58791L3.07323 5.57981L3.07 5.57495C3.06676 5.57277 3.02022 5.5382 2.9304 5.47121C2.84167 5.40314 2.74862 5.31508 2.65123 5.20701C2.55385 5.09895 2.45646 4.98549 2.35908 4.86664C2.26151 4.74751 2.17461 4.62005 2.09938 4.48574C2.02365 4.35068 1.94357 4.17885 1.85917 3.97031C1.77585 3.76285 1.71255 3.55376 1.66927 3.34305C1.626 3.13234 1.60165 2.92434 1.59623 2.71902C1.59082 2.51371 1.59623 2.33813 1.61246 2.19225C1.62869 2.04637 1.66115 1.88158 1.70984 1.69789C1.75854 1.5142 1.82888 1.3197 1.92084 1.11439L2.05881 0.806432L2.06692 0.782119L2.07504 0.757806L2.07992 0.754565L2.08315 0.749702L2.0864 0.74484L2.09127 0.741598L2.09615 0.74484L2.09938 0.749702L2.10263 0.754565L2.1075 0.757806L2.11238 0.761048L2.11561 0.765911L2.11886 0.770773L2.12373 0.774015L2.13185 0.790223L2.13996 0.806432L2.14485 0.809673L2.14808 0.814536L2.36719 1.05766C2.51327 1.21975 2.6864 1.40075 2.88658 1.60064C3.08677 1.80054 3.19768 1.90428 3.21931 1.91185C3.24096 1.92048 3.268 1.94533 3.30047 1.9864C3.33293 2.02639 3.44114 2.12202 3.62508 2.27329C3.80904 2.42457 4.0498 2.60017 4.34736 2.80007C4.64493 2.99996 4.97495 3.19717 5.33744 3.39167C5.69994 3.58617 6.08948 3.76176 6.50606 3.91845C6.92265 4.07513 7.21481 4.17778 7.38252 4.22641C7.55025 4.27503 7.83699 4.33716 8.24276 4.4128C8.64853 4.48845 8.95422 4.53707 9.1598 4.55868C9.36539 4.58028 9.50607 4.59272 9.5818 4.59596L9.69542 4.5992L9.69219 4.57489L9.6873 4.55057L9.65484 4.34797C9.6332 4.2129 9.62238 4.0238 9.62238 3.78067C9.62238 3.53755 9.64132 3.31334 9.67919 3.10803C9.71707 2.90271 9.77388 2.69471 9.84961 2.484C9.92536 2.27329 9.99949 2.10417 10.072 1.97668C10.1456 1.85025 10.2419 1.706 10.3609 1.54391C10.4799 1.38183 10.6341 1.21435 10.8235 1.04145C11.0128 0.868559 11.2292 0.714579 11.4727 0.579514C11.7162 0.444449 11.9407 0.341785 12.1463 0.271554C12.3519 0.201323 12.525 0.155389 12.6657 0.133783C12.8063 0.112177 12.8767 0.0997451 12.8767 0.0965034Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.849609 9.39502C0.849609 5.79988 0.849609 4.00231 1.7063 2.70757C2.08886 2.12941 2.584 1.63427 3.16216 1.25171C4.4569 0.39502 6.25447 0.39502 9.84961 0.39502C13.4447 0.39502 15.2423 0.39502 16.5371 1.25171C17.1152 1.63427 17.6104 2.12941 17.9929 2.70757C18.8496 4.00231 18.8496 5.79988 18.8496 9.39502C18.8496 12.9902 18.8496 14.7877 17.9929 16.0825C17.6104 16.6606 17.1152 17.1558 16.5371 17.5383C15.2423 18.395 13.4447 18.395 9.84961 18.395C6.25447 18.395 4.4569 18.395 3.16216 17.5383C2.584 17.1558 2.08886 16.6606 1.7063 16.0825C0.849609 14.7877 0.849609 12.9902 0.849609 9.39502ZM14.5082 9.39506C14.5082 11.9684 12.4222 14.0545 9.84883 14.0545C7.27551 14.0545 5.18943 11.9684 5.18943 9.39506C5.18943 6.82174 7.27551 4.73565 9.84883 4.73565C12.4222 4.73565 14.5082 6.82174 14.5082 9.39506ZM9.84883 12.4781C11.5515 12.4781 12.9318 11.0978 12.9318 9.39506C12.9318 7.69237 11.5515 6.31206 9.84883 6.31206C8.14614 6.31206 6.76583 7.69237 6.76583 9.39506C6.76583 11.0978 8.14614 12.4781 9.84883 12.4781ZM14.6923 5.59639C15.2969 5.59639 15.7871 5.10622 15.7871 4.50156C15.7871 3.89691 15.2969 3.40674 14.6923 3.40674C14.0876 3.40674 13.5974 3.89691 13.5974 4.50156C13.5974 5.10622 14.0876 5.59639 14.6923 5.59639Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.849609 3.31507C0.849609 2.73786 1.05232 2.26167 1.45772 1.8865C1.86312 1.51131 2.39016 1.32373 3.0388 1.32373C3.67587 1.32373 4.1913 1.50842 4.58513 1.87784C4.99053 2.2588 5.19324 2.75518 5.19324 3.36702C5.19324 3.92113 4.99633 4.38288 4.6025 4.7523C4.19711 5.13325 3.66428 5.32373 3.00405 5.32373H2.98668C2.3496 5.32373 1.83417 5.13325 1.44034 4.7523C1.04651 4.37135 0.849609 3.89227 0.849609 3.31507ZM1.07548 18.4666V6.89949H4.93262V18.4666H1.07548ZM7.06969 18.4666H10.9268V12.0077C10.9268 11.6037 10.9732 11.292 11.0658 11.0726C11.228 10.6801 11.4741 10.3482 11.8042 10.077C12.1344 9.80568 12.5484 9.67005 13.0465 9.67005C14.3438 9.67005 14.9925 10.5416 14.9925 12.2848V18.4666H18.8496V11.8345C18.8496 10.126 18.4442 8.83022 17.6334 7.9471C16.8226 7.06399 15.7512 6.62243 14.4191 6.62243C12.9249 6.62243 11.7608 7.26312 10.9268 8.54451V8.57914H10.9095L10.9268 8.54451V6.89949H7.06969C7.09285 7.26889 7.10444 8.41751 7.10444 10.3454C7.10444 12.2732 7.09285 14.9803 7.06969 18.4666Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2879 14.3747L7.22568 14.2988C5.91044 14.2723 4.59191 14.3251 3.30246 14.051C1.34089 13.6415 1.20193 11.6336 1.05652 9.94939C0.856153 7.58155 0.933719 5.17074 1.31183 2.82266C1.52528 1.50514 2.36532 0.718973 3.6644 0.633423C8.04975 0.322948 12.4643 0.359743 16.8399 0.50459C17.302 0.517869 17.7673 0.590445 18.223 0.673056C20.4723 1.07597 20.5271 3.35137 20.673 5.26683C20.8184 7.20205 20.757 9.14721 20.479 11.0693C20.2561 12.6607 19.8295 13.9952 18.0291 14.124C15.7733 14.2925 13.5693 14.4281 11.3072 14.3849C11.3073 14.3747 11.2943 14.3747 11.2879 14.3747ZM8.8997 10.3457C10.5996 9.34831 12.2671 8.36752 13.9573 7.3768C12.2542 6.37939 10.5899 5.3986 8.8997 4.40788V10.3457Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  ),
                  link: "#",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  color="blue.500"
                  _hover={{
                    color: "blue.700",
                    transform: "scale(1.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.svg}
                </Link>
              ))}
            </Flex>

            {/* mobile */}
            <Flex
              // gap={4} // 22px spacing
              justifyContent="space-between"
              width="100%"
              justifySelf="end"
              alignItems="center" // Ensures vertical alignment
              display={{ base: "flex", md: "none" }}
            >
              {[
                {
                  svg: (
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.65459 11.6179V6.43227H6.49667L6.77246 4.4113H4.65454V3.12101C4.65454 2.53589 4.82647 2.13717 5.71448 2.13717L6.84701 2.13666V0.329136C6.65113 0.304551 5.97881 0.249512 5.19673 0.249512C3.5638 0.249512 2.44588 1.19131 2.44588 2.92092V4.4113H0.599075V6.43227H2.44588V11.6179H4.65459V11.6179Z" fill="#3F77A5" />
                    </svg>

                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.81033 0.0641728V0.0620117H9.38781L9.59881 0.103073C9.73948 0.12973 9.86719 0.164665 9.98194 0.207887C10.0967 0.25111 10.2078 0.30154 10.3151 0.359166C10.4225 0.416792 10.5198 0.47551 10.6072 0.535297C10.6938 0.594371 10.7715 0.657044 10.8404 0.723315C10.9085 0.790309 11.0147 0.807598 11.1591 0.775182C11.3035 0.742765 11.459 0.697738 11.6255 0.640112C11.7921 0.582485 11.9568 0.517652 12.1197 0.445611C12.2826 0.37357 12.3818 0.32783 12.4173 0.30838C12.4521 0.288216 12.4707 0.277411 12.4729 0.275963L12.4751 0.272721L12.4862 0.267318L12.4973 0.261915L12.5084 0.256513L12.5195 0.25111L12.5217 0.247868L12.5251 0.245707L12.5284 0.243546L12.5306 0.240304L12.5417 0.237063L12.5528 0.234901L12.5506 0.25111L12.5473 0.267318L12.5417 0.283527L12.5362 0.299735L12.5306 0.310541L12.5251 0.321346L12.5195 0.337555C12.5158 0.34836 12.5121 0.362764 12.5084 0.380777C12.5047 0.39879 12.4695 0.47082 12.4029 0.596889C12.3363 0.722958 12.253 0.850821 12.153 0.980488C12.0531 1.11016 11.9635 1.20812 11.8843 1.2744C11.8043 1.3414 11.7514 1.38822 11.7255 1.41487C11.6996 1.44224 11.6681 1.46745 11.6311 1.49051L11.5756 1.52617L11.5645 1.53157L11.5533 1.53698L11.5511 1.54022L11.5478 1.54238L11.5445 1.54454L11.5422 1.54778L11.5311 1.55319L11.52 1.55859L11.5178 1.56183L11.5145 1.56399L11.5111 1.56615L11.5089 1.56939L11.5067 1.57264L11.5034 1.5748L11.5 1.57696L11.4978 1.5802H11.5533L11.8643 1.51537C12.0716 1.47214 12.2696 1.41992 12.4584 1.35868L12.7583 1.26143L12.7916 1.25063L12.8082 1.24523L12.8194 1.23982L12.8305 1.23442L12.8416 1.22902L12.8527 1.22361L12.8749 1.22037L12.8971 1.21821V1.23982L12.8915 1.24198L12.886 1.24523L12.8838 1.24847L12.8804 1.25063L12.8771 1.25279L12.8749 1.25603L12.8727 1.25927L12.8693 1.26143L12.866 1.26359L12.8638 1.26684L12.8616 1.27008L12.8582 1.27224L12.8527 1.28305L12.8471 1.29385L12.8438 1.29601C12.8423 1.29817 12.7953 1.3594 12.7027 1.47971C12.6102 1.60073 12.5602 1.66195 12.5528 1.6634C12.5454 1.66556 12.5351 1.67637 12.5217 1.69582C12.5091 1.71598 12.4307 1.79631 12.2863 1.93678C12.1419 2.07726 12.0005 2.20223 11.8621 2.31174C11.7229 2.42196 11.6526 2.55738 11.6511 2.71803C11.6489 2.87795 11.6403 3.05877 11.6255 3.26047C11.6107 3.46218 11.583 3.68008 11.5422 3.91421C11.5015 4.14833 11.4386 4.41307 11.3534 4.70842C11.2683 5.00377 11.1647 5.29192 11.0425 5.57287C10.9203 5.85382 10.7926 6.10594 10.6594 6.32926C10.5261 6.55258 10.4039 6.74168 10.2929 6.89656C10.1818 7.05143 10.0689 7.19731 9.95418 7.33418C9.83943 7.47106 9.69433 7.62522 9.51886 7.79666C9.34266 7.96739 9.24642 8.06104 9.23013 8.07761C9.2131 8.09346 9.14055 8.15254 9.01245 8.25482C8.88512 8.35783 8.74814 8.46084 8.60155 8.56386C8.45571 8.66616 8.3217 8.75152 8.19954 8.81995C8.07738 8.88839 7.93006 8.96654 7.75755 9.05444C7.5858 9.14304 7.39996 9.22516 7.20006 9.3008C7.00017 9.37644 6.78917 9.44668 6.56706 9.51151C6.34495 9.57635 6.13026 9.62678 5.92295 9.66279C5.71566 9.69881 5.4806 9.72943 5.21777 9.75464L4.82353 9.79246V9.79786H4.10168V9.79246L4.00729 9.78706C3.94436 9.78346 3.89254 9.77985 3.85181 9.77625C3.8111 9.77265 3.65747 9.75284 3.39094 9.71682C3.12441 9.6808 2.91527 9.64478 2.76349 9.60876C2.61173 9.57275 2.38591 9.50431 2.08607 9.40346C1.78622 9.30261 1.52969 9.20067 1.31647 9.09766C1.10399 8.99536 0.970729 8.93053 0.916679 8.90316C0.863374 8.8765 0.803405 8.84337 0.736773 8.80375L0.636825 8.74432L0.634615 8.74107L0.631273 8.73891L0.627941 8.73675L0.62572 8.73351L0.614615 8.72811L0.603509 8.7227L0.601299 8.71946L0.597957 8.7173L0.594625 8.71514L0.592404 8.7119L0.590194 8.70866L0.586851 8.7065H0.581299V8.68488L0.592404 8.68705L0.603509 8.69029L0.653483 8.69569C0.686799 8.69929 0.777496 8.70469 0.925563 8.7119C1.07364 8.71911 1.23096 8.71911 1.39754 8.7119C1.56412 8.70469 1.73441 8.68848 1.90838 8.66327C2.08237 8.63806 2.28782 8.59484 2.52473 8.53361C2.76165 8.47237 2.97931 8.39962 3.17773 8.31533C3.37541 8.23034 3.51607 8.16694 3.59973 8.12515C3.68265 8.08409 3.80925 8.00773 3.97952 7.89608L4.23495 7.72859L4.23717 7.72535L4.2405 7.72319L4.24384 7.72102L4.24605 7.71778L4.24827 7.71454L4.2516 7.71238L4.25495 7.71022L4.25716 7.70698L4.26826 7.70374L4.27937 7.70157L4.28159 7.69077L4.28492 7.67996L4.28826 7.6778L4.29047 7.67456L4.20163 7.66916C4.14241 7.66556 4.08502 7.66195 4.0295 7.65835C3.97397 7.65475 3.88698 7.63855 3.76852 7.60973C3.65007 7.58091 3.52236 7.53769 3.38539 7.48006C3.24843 7.42243 3.11516 7.35399 2.9856 7.27475C2.85604 7.19552 2.76238 7.12959 2.70463 7.07701C2.64763 7.02513 2.57359 6.95167 2.48253 6.85658C2.39221 6.76077 2.31373 6.66243 2.2471 6.56158C2.18046 6.46073 2.1168 6.34438 2.0561 6.21256L1.96391 6.0159L1.95836 5.99969L1.9528 5.98348L1.94947 5.97268L1.94725 5.96187L1.96391 5.96403L1.98057 5.96727L2.10273 5.98348C2.18417 5.99429 2.31188 5.99789 2.48586 5.99429C2.65985 5.99069 2.78015 5.98348 2.84678 5.97268C2.91341 5.96187 2.95414 5.95466 2.96894 5.95107L2.99115 5.94566L3.01891 5.94026L3.04668 5.93486L3.0489 5.93162L3.05223 5.92946L3.05557 5.92729L3.05778 5.92405L3.03557 5.91865L3.01336 5.91325L2.99115 5.90784L2.96894 5.90244L2.94673 5.89704C2.93193 5.89344 2.90602 5.88623 2.86899 5.87543C2.83198 5.86462 2.73203 5.825 2.56915 5.75657C2.40628 5.68813 2.27671 5.6215 2.18046 5.55666C2.08398 5.49164 1.99197 5.42053 1.90505 5.34379C1.81843 5.26599 1.7233 5.16586 1.61965 5.0434C1.516 4.92094 1.42346 4.77866 1.34201 4.61657C1.26058 4.45449 1.1995 4.29961 1.15877 4.15193C1.11822 4.00512 1.09146 3.85503 1.07883 3.7035L1.05883 3.47658L1.06993 3.47874L1.08104 3.48199L1.09214 3.48739L1.10325 3.49279L1.11435 3.49819L1.12546 3.5036L1.29759 3.57924C1.41235 3.62967 1.55487 3.67289 1.72515 3.7089C1.89543 3.74492 1.99723 3.76474 2.03054 3.76833L2.08052 3.77374H2.18046L2.17825 3.7705L2.17491 3.76833L2.17158 3.76617L2.16936 3.76293L2.16715 3.75969L2.16381 3.75753L2.16047 3.75537L2.15825 3.75213L2.14715 3.74672L2.13604 3.74132L2.13383 3.73808L2.13049 3.73592L2.12716 3.73376L2.12494 3.73051L2.11383 3.72511L2.10273 3.71971L2.10052 3.71647C2.0983 3.71502 2.06646 3.69197 2.005 3.64731C1.94429 3.60193 1.88062 3.54322 1.81399 3.47118C1.74736 3.39914 1.68072 3.3235 1.61409 3.24426C1.54734 3.16484 1.48788 3.07987 1.43641 2.99033C1.38459 2.90029 1.3298 2.78574 1.27205 2.64671C1.21505 2.5084 1.17173 2.36901 1.14212 2.22854C1.11251 2.08806 1.09585 1.94939 1.09214 1.81252C1.08845 1.67565 1.09214 1.55859 1.10325 1.46134C1.11435 1.36409 1.13656 1.25423 1.16988 1.13177C1.2032 1.00931 1.25133 0.879639 1.31425 0.742765L1.40864 0.537458L1.4142 0.52125L1.41975 0.505042L1.42309 0.50288L1.4253 0.499639L1.42752 0.496397L1.43086 0.494236L1.4342 0.496397L1.43641 0.499639L1.43863 0.50288L1.44196 0.505042L1.4453 0.507203L1.44751 0.510444L1.44973 0.513686L1.45307 0.515847L1.45862 0.526653L1.46417 0.537458L1.46751 0.539619L1.46972 0.542861L1.61965 0.704945C1.71959 0.813001 1.83805 0.933667 1.97502 1.06693C2.11199 1.2002 2.18787 1.26935 2.20267 1.2744C2.21749 1.28016 2.23599 1.29673 2.2582 1.32411C2.28041 1.35076 2.35445 1.41452 2.48031 1.51537C2.60617 1.61621 2.7709 1.73328 2.97449 1.86655C3.1781 1.99981 3.4039 2.13129 3.65192 2.26095C3.89994 2.39062 4.16647 2.50768 4.4515 2.61213C4.73654 2.71659 4.93644 2.78502 5.05119 2.81744C5.16595 2.84986 5.36213 2.89128 5.63977 2.94171C5.9174 2.99214 6.12656 3.02455 6.26722 3.03896C6.40789 3.05336 6.50414 3.06165 6.55596 3.06381L6.63369 3.06597L6.63148 3.04976L6.62814 3.03355L6.60593 2.89848C6.59113 2.80844 6.58372 2.68237 6.58372 2.52029C6.58372 2.3582 6.59668 2.20873 6.62259 2.07185C6.64851 1.93498 6.68738 1.79631 6.73919 1.65584C6.79102 1.51537 6.84174 1.40262 6.89134 1.31762C6.94169 1.23334 7.00758 1.13717 7.08901 1.02911C7.17046 0.921057 7.27596 0.809403 7.40551 0.69414C7.53508 0.578876 7.68314 0.476223 7.84972 0.38618C8.0163 0.296137 8.16993 0.227694 8.31059 0.180873C8.45127 0.134053 8.56973 0.10343 8.66597 0.0890257C8.76221 0.0746219 8.81033 0.066334 8.81033 0.0641728Z" fill="#3F77A5" />
                    </svg>

                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.581314 5.93372C0.581314 3.66311 0.581314 2.5278 1.16747 1.71007C1.42922 1.34492 1.768 1.03219 2.16359 0.79058C3.04946 0.249512 4.27938 0.249512 6.73921 0.249512C9.19904 0.249512 10.429 0.249512 11.3148 0.79058C11.7104 1.03219 12.0492 1.34492 12.3109 1.71007C12.8971 2.5278 12.8971 3.66311 12.8971 5.93372C12.8971 8.20434 12.8971 9.33964 12.3109 10.1574C12.0492 10.5225 11.7104 10.8353 11.3148 11.0769C10.429 11.6179 9.19904 11.6179 6.73921 11.6179C4.27938 11.6179 3.04946 11.6179 2.16359 11.0769C1.768 10.8353 1.42922 10.5225 1.16747 10.1574C0.581314 9.33964 0.581314 8.20434 0.581314 5.93372ZM9.9267 5.93375C9.9267 7.559 8.49937 8.87653 6.73868 8.87653C4.97799 8.87653 3.55066 7.559 3.55066 5.93375C3.55066 4.3085 4.97799 2.99097 6.73868 2.99097C8.49937 2.99097 9.9267 4.3085 9.9267 5.93375ZM6.73868 7.88091C7.90368 7.88091 8.8481 7.00914 8.8481 5.93375C8.8481 4.85836 7.90368 3.98659 6.73868 3.98659C5.57368 3.98659 4.62926 4.85836 4.62926 5.93375C4.62926 7.00914 5.57368 7.88091 6.73868 7.88091ZM10.0526 3.53458C10.4663 3.53458 10.8017 3.225 10.8017 2.84312C10.8017 2.46123 10.4663 2.15165 10.0526 2.15165C9.6389 2.15165 9.30352 2.46123 9.30352 2.84312C9.30352 3.225 9.6389 3.53458 10.0526 3.53458Z" fill="#3F77A5" />
                    </svg>

                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.581329 1.87639C0.581329 1.49158 0.720025 1.17412 0.997403 0.924008C1.27478 0.673884 1.63539 0.548828 2.0792 0.548828C2.51509 0.548828 2.86775 0.671957 3.13721 0.918236C3.41459 1.1722 3.55329 1.50313 3.55329 1.91102C3.55329 2.28043 3.41856 2.58826 3.1491 2.83454C2.87172 3.08851 2.50716 3.21549 2.05542 3.21549H2.04353C1.60764 3.21549 1.25498 3.08851 0.985516 2.83454C0.716054 2.58057 0.581329 2.26119 0.581329 1.87639ZM0.735871 11.9774V4.266H3.37497V11.9774H0.735871ZM4.83717 11.9774H7.47627V7.67148C7.47627 7.40211 7.50797 7.19432 7.57137 7.0481C7.68232 6.78644 7.85074 6.56517 8.0766 6.38432C8.30247 6.20346 8.5858 6.11304 8.92658 6.11304C9.81421 6.11304 10.258 6.69408 10.258 7.85618V11.9774H12.8971V7.55604C12.8971 6.41703 12.6197 5.55315 12.065 4.96441C11.5102 4.37567 10.7771 4.08129 9.86572 4.08129C8.84337 4.08129 8.04689 4.50842 7.47627 5.36268V5.38577H7.46438L7.47627 5.36268V4.266H4.83717C4.85302 4.51227 4.86095 5.27802 4.86095 6.56326C4.86095 7.84848 4.85302 9.65319 4.83717 11.9774Z" fill="#3F77A5" />
                    </svg>

                  ),
                  link: "#",
                },
                {
                  svg: (
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.52525 9.58297L4.81712 9.53236C3.94029 9.51472 3.06128 9.54993 2.20164 9.3672C0.893927 9.0942 0.801284 7.7556 0.704343 6.63277C0.570769 5.05421 0.622479 3.44699 0.874552 1.88161C1.01686 1.00327 1.57688 0.479153 2.44293 0.422119C5.3665 0.215136 8.30951 0.239666 11.2266 0.336231C11.5347 0.345083 11.8449 0.393467 12.1487 0.448541C13.6482 0.717153 13.6848 2.23408 13.782 3.51106C13.8789 4.8012 13.838 6.09798 13.6527 7.37934C13.504 8.44027 13.2196 9.32997 12.0194 9.41586C10.5155 9.52817 9.04622 9.61858 7.53815 9.5898C7.53821 9.58297 7.52955 9.58297 7.52525 9.58297ZM5.93313 6.89699C7.0664 6.23205 8.17805 5.57819 9.30484 4.9177C8.16945 4.25276 7.05992 3.5989 5.93313 2.93842V6.89699Z" fill="#3F77A5" />
                    </svg>

                  ),
                  link: "#",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  color="blue.500"
                  _hover={{
                    color: "blue.700",
                    transform: "scale(1.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.svg}
                </Link>
              ))}
            </Flex>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default NewsletterSubscription;
