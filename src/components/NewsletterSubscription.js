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
  Icon,
} from "@chakra-ui/react";
import SubscriptionBanner from "./SubscriptionBanner";
import { useLocation, useNavigate } from "react-router-dom";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

// const PhoneIcon = ({ mr = "10px", w = "21px", h = "21px" }) => (
//   <Box
//     as="svg"
//     width={w}
//     height={h}
//     viewBox="0 0 21 21"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     mr={mr}
//   >
//     <path
//       d="M6.99871 5.91493C7.71048 5.27592 7.81933 4.18968 7.2522 3.41706L5.38615 0.866916C4.6973 -0.0770528 3.38405 -0.281788 2.446 0.40945L1.62825 1.00778C0.161744 2.08533 -0.399632 4.04152 0.2978 5.74045C2.11659 10.1828 6.60779 18.2543 15.8607 20.5969C17.4518 20.9977 19.1231 20.3515 20.0512 18.9762L20.3448 18.5405C20.9978 17.5704 20.763 16.2503 19.8163 15.5736L17.1726 13.6886C16.3993 13.1381 15.3395 13.2718 14.7237 14.0008L13.979 14.8823C13.4477 15.514 12.5454 15.6738 11.838 15.2584C10.9758 14.753 9.75566 13.8933 8.37653 12.4992C6.99024 11.0934 6.13952 9.84447 5.64117 8.97166C5.2373 8.2615 5.38482 7.36549 5.98918 6.82236L6.99871 5.91493Z"
//       fill="#3F77A5"
//     />
//   </Box>
// );

const whoWeAreLinks = [
  { text: "About Us", path: "/about-us" },
  { text: "Terms & Condition", path: "/terms-and-conditions" },
  { text: "Privacy Policy ", path: "/privacy-policy" },
  { text: "Careers", path: "/careers" },
  // { text: "Trademark Policy" },
  // { text: "Event Spotlight", path: "/whoweare/eventspotlight" },
  // { text: "Social Impact", path: "/whoweare/socialimpact" },
  // { text: "Achievements", path: "/whoweare/achievements" },
  // { text: "Blogs", path: "/whoweare/blogs" },
  // { text: "Help Desk", path: "/whoweare/helpdesk" },
];

// const policyLinks = [
//   // { text: "Terms & Condition", path: "/whoweare/terms-and-condition" },
//   // { text: "Trademark Policy", path: "/whoweare/trademark-policy" },
//   // { text: "Warranty Service", path: "/whoweare/warranty-service" },
//   // { text: "Warranty Policy", path: "/whoweare/warranty-policy" },
//   // { text: "Privacy Policy", path: "/whoweare/privacy-policy" },
// ];
const resources = [
  // Column 1
  { text: "Blogs", path: "/blog" },
  // { text: "Company News" },

  // Column 2
  // { text: "Case Studies" },
];

const ourSolutionsLinks = [
  {
    text: "VMS",
    path: "/solution/video-management-system",
  },
  {
    text: "EVMS",
    path: "/solution/enterprise-management-system",
  },
  {
    text: "ICCC",
    path: "/solution/integrated-command-control-center",
  },
  {
    text: "CloudAI",
    path: "/solution/cloudai",
  },
  {
    text: "GenAI",
    path: "/solution/genai",
  },
  {
    text: "Live Streaming",
    path: "/solution/live-streaming-solution",
  },
  {
    text: "Flying Squad Vehicle",
    path: "/solution/flying-squad-vehicle",
  },
  {
    text: "VisualBot",
    path: "/solution/visualbot",
  },
];

const industriesWeServeLinks = [
  // Column 1
  { text: "Manufacturing", path: "/industry/manufacturing" },
  { text: "Warehouse", path: "/industry/warehouse" },
  { text: "Healthcare", path: "/industry/healthcare" },
  { text: "Oil & Gas", path: "/industry/oil-and-gas" },
  { text: "Election", path: "/industry/election" },
  { text: "Education", path: "/industry/education" },
  { text: "Transportation", path: "/industry/transportation" },
  { text: "Smart City", path: "/industry/smart-city" },
  { text: "Pharma", path: "/industry/pharma" },
  { text: "Logistics", path: "/industry/logistics" },
  { text: "Banking", path: "/industry/banking" },
  { text: "Sports & Entertainment", path: "/industry/sports-entertainment" },
  { text: "Defense", path: "/industry/defense" },

  // Column 2
  { text: "Hospitality", path: "/industry/hospitality" },
  { text: "Construction", path: "/industry/construction" },
  { text: "Enterprise", path: "/industry/enterprise" },
  { text: "Government", path: "/industry/government" },
];

const NewsletterSubscription = () => {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServingsOpen, setIsServingsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const industriesColumn1End = 13;
  const industriesWeServeLinks1 = industriesWeServeLinks.slice(
    0,
    industriesColumn1End
  );
  const industriesWeServeLinks2 =
    industriesWeServeLinks.slice(industriesColumn1End);

  const resourcesColumn1End = 2;
  const resourcesLinks1 = resources.slice(0, resourcesColumn1End);
  const resourcesLinks2 = resources.slice(resourcesColumn1End);

  const navigateTo = (path, linkName, sliderId = null) => {
    if (location.pathname === path) {
      // Avoid unnecessary refresh by replacing the state
      navigate(path, { replace: true });
    } else {
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

    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonWidth = useBreakpointValue({
    base: "130px",
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
        <Flex
          flexWrap="wrap"
          gap="20px"
          width={{ base: "100%" }}
          mt={{ base: "5%", md: "0px" }}
        >
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
                <Link href="/industry">
                  <Heading as="p" fontSize="16px" fontWeight={700}>
                    Industries we serve
                  </Heading>
                </Link>

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
              <Flex direction="row">
                <Box display={{ base: "none", md: "block" }} mt="5%">
                  <Flex>
                    <List spacing="10px">
                      {industriesWeServeLinks1.map((item, index) => (
                        <ListItem
                          key={index}
                          _hover={{ color: "#3F77A5", cursor: "pointer" }}
                          fontSize="14px"
                          fontWeight="500"
                          whiteSpace="nowrap"
                        >
                          •&nbsp;&nbsp;
                          <Link href={item.path}>{item.text}</Link>
                        </ListItem>
                      ))}
                    </List>
                    <List spacing="10px">
                      {industriesWeServeLinks2.map((item, index) => (
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
                  </Flex>
                </Box>
              </Flex>
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
                      <Box
                        height="1px"
                        bg="#3F77A5"
                        opacity="0.2"
                        my="5px"
                        w="60%"
                      />
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Solutions */}
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
                <Link href="/solution">
                  <Heading as="p" fontSize="16px" fontWeight={700}>
                    Our Solutions
                  </Heading>
                </Link>
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
                      <Box
                        height="1px"
                        bg="#3F77A5"
                        opacity="0.2"
                        my="5px"
                        w="60%"
                      />
                    )}
                  </Box>
                ))}
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
                  <Heading as="p" fontSize="16px" fontWeight={700}>
                    Resources
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
                  <Flex direction="row" gap="4">
                    <List spacing="10px">
                      {resourcesLinks1.map((item, index) => (
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

                    <List spacing="10px">
                      {resourcesLinks2.map((item, index) => (
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
                  </Flex>
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
                  {resources.map((item, index) => (
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
                      {index !== resources.length - 1 && (
                        <Box
                          height="1px"
                          bg="#3F77A5"
                          opacity="0.2"
                          my="5px"
                          w="60%"
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

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
                    <Heading as="p" fontSize="16px" fontWeight={700}>
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
                      {/* <Box>
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
                      </Box> */}
                    </Flex>
                  </Box>
                </Box>

                {/* ambicam link portion */}
                {/* <Flex
                  gap={4}
                  alignItems="center"
                  display={{ base: "none", md: "flex" }}
                >
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
                </Flex> */}
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
                  {[...whoWeAreLinks].map((item, index, array) => (
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
                            {item.text}
                          </Text>
                        </Flex>
                      </Link>
                      {index !== array.length - 1 && (
                        <Box
                          height="1px"
                          bg="#3F77A5"
                          opacity="0.2"
                          my="5px"
                          w="60%"
                        />
                      )}
                    </Box>
                  ))}
                  <Box align="left" mt="20px">
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
                  </Box>
                </Box>
              )}
            </Box>
          </Flex>

          {/* Contact Us Box with Dropdown */}
          <Box
            bg="#BECEDC"
            borderRadius="15px"
            p="20px"
            flex="1"
            minW="250px"
            order="4"
            display={{ base: "none", md: "flex" }}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box h="auto">
              <Link href="/contact-us">
                <Heading fontSize="16px" fontWeight={700} as="p">
                  Contact Us
                </Heading>
              </Link>
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
              <Flex direction="column" gap="2" mt="6">
                {/* Row 1: Phone Number */}
                <Flex alignItems="center">
                  <Icon
                    as={PhoneIcon}
                    color="#3F77A5"
                    mr="10px"
                    w="20px"
                    h="20px"
                  />
                  <Text fontSize="14px" fontWeight="500">
                    (+91) 968 777 0000
                  </Text>
                </Flex>

                {/* Row 2: Email Address */}
                <Flex alignItems="center">
                  <Icon
                    as={EmailIcon}
                    color="#3F77A5"
                    mr="10px"
                    w="20px"
                    h="20px"
                  />
                  <Text fontSize="14px" fontWeight="500">
                    sales@vmukti.com
                  </Text>
                </Flex>
              </Flex>
            </Box>
            {/* Social Media Icons */}
            <Flex direction="column" gap="6" mt="20%">
              <Flex
                gap={5}
                // justify="center"
                // justifySelf="end"
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
                    link: "https://www.facebook.com/VMuktisolutions",
                  },
                  {
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_8092_2932)">
                          <path
                            d="M14.9625 0.890625H17.8766L11.5116 8.18425L19 18.1094H13.1373L8.54525 12.0888L3.29056 18.1094H0.37525L7.18319 10.3075L0 0.890625H6.01231L10.1626 6.39231L14.9625 0.890625ZM13.9412 16.3614H15.5563L5.13356 2.54719H3.40219L13.9412 16.3614Z"
                            fill="#3F77A5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_8092_2932">
                            <rect width="19" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ),
                    link: "https://x.com/VMukti",
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.849609 9.39502C0.849609 5.79988 0.849609 4.00231 1.7063 2.70757C2.08886 2.12941 2.584 1.63427 3.16216 1.25171C4.4569 0.39502 6.25447 0.39502 9.84961 0.39502C13.4447 0.39502 15.2423 0.39502 16.5371 1.25171C17.1152 1.63427 17.6104 2.12941 17.9929 2.70757C18.8496 4.00231 18.8496 5.79988 18.8496 9.39502C18.8496 12.9902 18.8496 14.7877 17.9929 16.0825C17.6104 16.6606 17.1152 17.1558 16.5371 17.5383C15.2423 18.395 13.4447 18.395 9.84961 18.395C6.25447 18.395 4.4569 18.395 3.16216 17.5383C2.584 17.1558 2.08886 16.6606 1.7063 16.0825C0.849609 14.7877 0.849609 12.9902 0.849609 9.39502ZM14.5082 9.39506C14.5082 11.9684 12.4222 14.0545 9.84883 14.0545C7.27551 14.0545 5.18943 11.9684 5.18943 9.39506C5.18943 6.82174 7.27551 4.73565 9.84883 4.73565C12.4222 4.73565 14.5082 6.82174 14.5082 9.39506ZM9.84883 12.4781C11.5515 12.4781 12.9318 11.0978 12.9318 9.39506C12.9318 7.69237 11.5515 6.31206 9.84883 6.31206C8.14614 6.31206 6.76583 7.69237 6.76583 9.39506C6.76583 11.0978 8.14614 12.4781 9.84883 12.4781ZM14.6923 5.59639C15.2969 5.59639 15.7871 5.10622 15.7871 4.50156C15.7871 3.89691 15.2969 3.40674 14.6923 3.40674C14.0876 3.40674 13.5974 3.89691 13.5974 4.50156C13.5974 5.10622 14.0876 5.59639 14.6923 5.59639Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    ),
                    link: "https://www.instagram.com/vmuktisolutions",
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
                    link: "https://in.linkedin.com/company/vmuktisolutions",
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
                    link: "https://www.youtube.com/@VMukti1",
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
              <Button
                width={buttonWidth}
                height={buttonHeight}
                justifyContent="space-between"
                alignItems="center"
                bg="#E7E7E7"
                color="#3F77A5"
                borderRadius="20px"
                flexShrink={0}
                // ml={{ base: '5px', md: '10px', lg: '15px' }}
                // mt="20%"
                onClick={() => navigateTo("/book-a-demo", "Book a Demo")}
                fontWeight={700}
                // fontSize={{base:"12px",md:"16px"}}
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
            </Flex>
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
            <Link href="/contact-us">
              <Heading fontSize="16px" fontWeight={700} as="p">
                Contact Us
              </Heading>
            </Link>
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

            <Flex direction="column" gap="2" mt="6">
              {/* Row 1: Phone Number */}
              <Flex alignItems="center">
                <Icon
                  as={PhoneIcon}
                  color="#3F77A5"
                  mr="10px"
                  w="20px"
                  h="20px"
                />
                <Text fontSize="14px" fontWeight="500">
                  (+91) 968 777 0000
                </Text>
              </Flex>
              {/* Row 2: Email Address */}
              <Flex alignItems="center">
                <Icon
                  as={EmailIcon}
                  color="#3F77A5"
                  mr="10px"
                  w="20px"
                  h="20px"
                />
                <Text fontSize="14px" fontWeight="500">
                  sales@vmukti.com
                </Text>
              </Flex>
            </Flex>

            <Flex gap={2} display="column" justifyContent="left" mt="20%">
              <Flex
                gap={5}
                // justify="center"
                // justifySelf="end"
                align="center" // Ensures vertical alignment
                display={{ base: "flex", md: "none" }}
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
                    link: "https://www.facebook.com/VMuktisolutions",
                  },
                  {
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_8092_2932)">
                          <path
                            d="M14.9625 0.890625H17.8766L11.5116 8.18425L19 18.1094H13.1373L8.54525 12.0888L3.29056 18.1094H0.37525L7.18319 10.3075L0 0.890625H6.01231L10.1626 6.39231L14.9625 0.890625ZM13.9412 16.3614H15.5563L5.13356 2.54719H3.40219L13.9412 16.3614Z"
                            fill="#3F77A5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_8092_2932">
                            <rect width="19" height="19" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ),
                    link: "https://x.com/VMukti",
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.849609 9.39502C0.849609 5.79988 0.849609 4.00231 1.7063 2.70757C2.08886 2.12941 2.584 1.63427 3.16216 1.25171C4.4569 0.39502 6.25447 0.39502 9.84961 0.39502C13.4447 0.39502 15.2423 0.39502 16.5371 1.25171C17.1152 1.63427 17.6104 2.12941 17.9929 2.70757C18.8496 4.00231 18.8496 5.79988 18.8496 9.39502C18.8496 12.9902 18.8496 14.7877 17.9929 16.0825C17.6104 16.6606 17.1152 17.1558 16.5371 17.5383C15.2423 18.395 13.4447 18.395 9.84961 18.395C6.25447 18.395 4.4569 18.395 3.16216 17.5383C2.584 17.1558 2.08886 16.6606 1.7063 16.0825C0.849609 14.7877 0.849609 12.9902 0.849609 9.39502ZM14.5082 9.39506C14.5082 11.9684 12.4222 14.0545 9.84883 14.0545C7.27551 14.0545 5.18943 11.9684 5.18943 9.39506C5.18943 6.82174 7.27551 4.73565 9.84883 4.73565C12.4222 4.73565 14.5082 6.82174 14.5082 9.39506ZM9.84883 12.4781C11.5515 12.4781 12.9318 11.0978 12.9318 9.39506C12.9318 7.69237 11.5515 6.31206 9.84883 6.31206C8.14614 6.31206 6.76583 7.69237 6.76583 9.39506C6.76583 11.0978 8.14614 12.4781 9.84883 12.4781ZM14.6923 5.59639C15.2969 5.59639 15.7871 5.10622 15.7871 4.50156C15.7871 3.89691 15.2969 3.40674 14.6923 3.40674C14.0876 3.40674 13.5974 3.89691 13.5974 4.50156C13.5974 5.10622 14.0876 5.59639 14.6923 5.59639Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    ),
                    link: "https://www.instagram.com/vmuktisolutions",
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
                    link: "https://in.linkedin.com/company/vmuktisolutions",
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
                    link: "https://www.youtube.com/@VMukti1",
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
              <Flex mt="5%">
                <Link href={"/book-a-demo"}>
                  <Button
                    width={buttonWidth}
                    height={buttonHeight}
                    justifyContent="space-between"
                    alignItems="center"
                    bg="#E7E7E7"
                    color="#3F77A5"
                    borderRadius="20px"
                    flexShrink={0}
                    fontSize="14px"
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
              </Flex>
              {/* <Link href={"/Ambicam"}>
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
              </Link> */}
            </Flex>
          </Box>
        </Flex>

        {/* -------------Footer------------- */}
        <Box>
          {/* Logo and Social Media Icons */}
          <Flex
            w="100%"
            alignItems="center"
            padding="20px 0"
            gap={2}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "space-between" }}
          >
            {/* Logo Section */}
            <Flex
              gap="2"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <svg
                width="98"
                height="26"
                viewBox="0 0 98 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.06965 3.58479L12.479 21.6141L14.5487 25.3978L24.3879 8.35597L22.7459 5.31229L21.7486 3.58479L19.6789 0H15.5395L17.6093 3.58479L20.2486 8.15701L14.5487 18.0292L6.20904 3.58479H9.75994L16.3242 14.9539L18.3938 11.3697L13.8996 3.58479L11.8297 0H7.69029H4.13939H0L2.06965 3.58479Z"
                  fill="#3F77A5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.8675 0H22.8937L23.8807 1.70961L25.1225 3.86052L26.1095 5.57039L27.0966 3.86052L29.3255 0H24.8675Z"
                  fill="#DB7B3A"
                />
                <path
                  d="M42.9423 7.55076L39.3612 15.8401L35.83 7.55076H32.9287L37.9355 19.1559H40.5881L45.6115 7.55076H42.9423ZM59.6509 19.1559L59.6177 7.55076H57.41L53.1354 14.7626L48.7946 7.55076H46.573V19.1559H49.093V12.342L52.4889 17.9291H53.6992L57.1116 12.1929L57.1282 19.1559H59.6509ZM68.6228 10.2365V14.6465C68.6228 16.2878 67.7607 17.0504 66.567 17.0504C65.4231 17.0504 64.7599 16.3873 64.7599 14.8952V10.2365H62.1737V15.2765C62.1737 18.0286 63.7486 19.2886 65.9867 19.2886C67.081 19.2886 68.0757 18.8741 68.7555 18.0949V19.1559H71.2091V10.2365H68.6228ZM80.2611 19.1559H83.3945L79.3493 14.0165L83.063 10.2365H79.9793L76.1993 13.8176V6.85449H73.6131V19.1559H76.1993V16.8847L77.4427 15.6578L80.2611 19.1559ZM89.6115 16.9012C89.3297 17.1167 88.9484 17.2327 88.5671 17.2327C87.8708 17.2327 87.4563 16.8183 87.4563 16.0557V12.425H89.6779V10.4355H87.4563V8.26364H84.87V10.4355H83.494V12.425H84.87V16.0888C84.87 18.2109 86.0969 19.2886 88.2024 19.2886C88.9981 19.2886 89.7774 19.1062 90.3079 18.7249L89.6115 16.9012ZM93.06 8.99312C94.0215 8.99312 94.6681 8.36312 94.6681 7.50102C94.6681 6.70528 94.0215 6.1084 93.06 6.1084C92.0984 6.1084 91.4518 6.7384 91.4518 7.55076C91.4518 8.36311 92.0984 8.99312 93.06 8.99312ZM91.7668 19.1559H94.353V10.2365H91.7668V19.1559Z"
                  fill="#3F77A5"
                />
                <path
                  d="M95.3696 6.53786H95.7073V5.35386H96.1742V5.07861H94.9027V5.35386H95.3696V6.53786ZM98 6.53786L97.9958 5.07861H97.7182L97.1808 5.98548L96.635 5.07861H96.3557V6.53786H96.6725V5.68113L97.0994 6.38363H97.2517L97.6807 5.6623L97.6828 6.53786H98Z"
                  fill="black"
                />
              </svg>
            </Flex>

            {/* Copyright Text */}
            <Box textAlign="center">
              <Text
                fontSize={{ base: "8px", md: "10px" }}
                color="#000"
                fontWeight="400"
              >
                Copyright © 2025, VMukti Solutions
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default NewsletterSubscription;
