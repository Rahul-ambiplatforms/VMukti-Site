import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  HStack,
  Menu,
  // MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Text,
  useDisclosure,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Divider,
} from "@chakra-ui/react";

import { useNavigate, useLocation } from "react-router-dom";
import PageContentWrapper from "./PageContentWrapper";
import Announcement from "./Announcement";
const dropdownItems = {
  organization: [
    { label: "Solution", path: "/organization/solution" },
    { label: "Team", path: "/organization/team" },
    { label: "Careers", path: "/organization/careers" },
  ],
  solutions: [
    {
      label: "Video Management System",
      path: "/solution/video-management-system",
    },
    {
      label: "Enterprise Management System",
      path: "/solution/enterprise-management-system",
    },
    {
      label: "Integrated Command & Control Center",
      path: "/solution/integrated-command-control-center",
    },
    {
      label: "Live Webcasting & Streaming",
      path: "/solution/live-streaming-solution",
    },
    {
      label: "Flying Squad Vehicle",
      path: "/solution/flying-squad-vehicle",
    },
    {
      label: "CloudAI",
      path: "/solution/cloudai",
    },
    {
      label: "Generative AI",
      path: "/solution/genai",
    },
    {
      label: "Visual Bot",
      path: "/solution/visualbot",
    },
  ],
  industries: [
    {
      label: "Manufacturing",
      path: "/industry/manufacturing",
    },
    {
      label: "Warehouse",
      path: "/industry/warehouse",
    },
    {
      label: "HealthCare",
      path: "/industry/healthcare",
    },
    {
      label: "Oil & Gas",
      path: "/industry/oil-and-gas",
    },
    {
      label: "Election",
      path: "/industry/election",
    },
    {
      label: "Education",
      path: "/industry/education",
    },
    {
      label: "Transportation",
      path: "/industry/transportation",
    },
    {
      label: "Smart City Monitoring",
      path: "/industry/smart-city",
    },
    {
      label: "Pharma",
      path: "/industry/pharma",
    },
    {
      label: "Logistics",
      path: "/industry/logistics",
    },
    {
      label: "Banking",
      path: "/industry/banking",
    },
    {
      label: "Sports & Entertainment",
      path: "/industry/sports-entertainment",
    },
    {
      label: "Defense",
      path: "/industry/defense",
    },
    {
      label: "Hospitality",
      path: "/industry/hospitality",
    },
    {
      label: "Construction",
      path: "/industry/construction",
    },
    {
      label: "Enterprise",
      path: "/industry/enterprise",
    },
    {
      label: "Government",
      path: "/industry/government",
    },
  ],
  ourServing: [
    { label: "Blogs", path: "/blog" },
    // { label: "Enterprise", path: "/serving/enterprise" },
    // { label: "Government", path: "/serving/government" },
    // { label: "General Consumers", path: "/serving/generalconsumers" },
  ],
  Whoweare: [
    { label: "About Us", path: "/about-us" },
    // { label: "Event Spotlight", path: "/whoweare/eventspotlight" },
    // { label: 'Social Impact', path: '/whoweare/social-impact' },
    // { label: 'Achievements', path: '/whoweare/achievements' },
    // { label: 'Blogs', path: '/blog' },
    // { label: "Careers", path: "/about-us/careers" },
    // { label: 'Help Desk', path: '/whoweare/help-desk' },
    // { label: 'Terms & Condition', path: '/whoweare/terms' },
    // { label: 'Warranty Policy', path: '/whoweare/warranty' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ],
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home"); //I have to solve yarn build error here...
  const [hoverTimeouts, setHoverTimeouts] = useState({});
  const [menuOpenStates, setMenuOpenStates] = useState({});
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null); // Track the currently opened accordion
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path, linkName, sliderId = null) => {
    setActiveLink(linkName);
    const state = sliderId ? { scrollTo: sliderId } : undefined;

    if (location.pathname === path) {
      // Avoid unnecessary refresh by replacing the state
      navigate(path, { state, replace: true });
    } else {
      navigate(path, { state });
    }
  };

  const pathToLinkName = {
    "/": "Home",
    "/technology": "Technology",
    "/solution": "Solution",
    "/industries": "Industries",
    // "/serving": "Our Serving",
    "/whoweare": "Who we are",
  };

  useEffect(() => {
    const currentLink = pathToLinkName[location.pathname];
    if (currentLink) {
      setActiveLink(currentLink);
    }
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isPathActive(path) {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  }

  const logoHeight = useBreakpointValue({ base: "25px", md: "25px" });
  const fontSize = useBreakpointValue({ base: "16px", md: "16px" });
  const contactBtnSize = useBreakpointValue({ base: "135px", md: "146px" });
  const contactBtnHeight = useBreakpointValue({ base: "50px", md: "50px" });

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleMouseEnter = (menuName) => {
    clearTimeout(hoverTimeouts[menuName]);
    setMenuOpenStates((prev) => ({ ...prev, [menuName]: true }));
  };

  const handleMouseLeave = (menuName) => {
    const timeout = setTimeout(() => {
      setMenuOpenStates((prev) => ({ ...prev, [menuName]: false }));
    }, 300);
    setHoverTimeouts((prev) => ({ ...prev, [menuName]: timeout }));
  };

  const navigationItems = [
    // Removed Home button
    // { name: 'Technology', path: '/technology' },
    {
      name: "Solutions",
      path: "/solution",
      hasDropdown: true,
      items: dropdownItems.solutions,
    },
    {
      name: "Industries",
      path: "/industry",
      hasDropdown: true,
      items: dropdownItems.industries,
    },
    {
      name: "Resources",
      // path: "/serving", //resources
      hasDropdown: true,
      items: dropdownItems.ourServing,
    },
    {
      name: "Who we are",
      // path: "/about-us",
      hasDropdown: true,
      items: dropdownItems.Whoweare,
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        // top={isNavbarVisible ? '0' : '-100px'}
        // transition="top 0.3s ease-in-out"
        left="0"
        right="0"
        zIndex={1000}
        width="100%"
        gap="2%"
      >
        {/* <PageContentWrapper> */}
        <Flex
          gap={8}
          justifyContent="space-between"
          align="center"
          // bg="white"
          height={{ base: "60px", md: "80px", lg: "80px" }}
          bg="rgba(255, 255, 255, 0.9)"
          backdropFilter="blur(1.7px)"
          boxShadow="0px 4px 28.1px rgba(0, 0, 0, 0.25)"
        >
          {" "}
          {/*mt="2%"*/}
          <Flex
            width="100%"
            // bg="white"
            // borderRadius="20px"
            align="center"
            // pl={4}
            // pr={{ base: 0, md: 4 }}
            px="1%"
            mx="1%"
            justifyContent="space-between"
          >
            <Image
              src="../assets/VMukti_logo.png"
              alt="Logo"
              height={logoHeight}
              style={{ cursor: "pointer" }}
              onClick={() => navigateTo("/", "Home")}
            />

            <Show above="xl">
              <HStack
                justify="center"
                align="center"
                fontSize={fontSize}
                fontWeight="400"
              >
                {navigationItems.map((item, index) => (
                  <React.Fragment key={item.name}>
                    <Flex align="center" position="relative">
                      {item.hasDropdown ? (
                        <Menu isOpen={menuOpenStates[item.name]}>
                          <>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                padding: "8px 12px",
                                fontWeight: isPathActive(item.path)
                                  ? "700"
                                  : "400",
                                textDecoration: "none",
                                color: isPathActive(item.path)
                                  ? "#3F77A5"
                                  : "black",
                                position: "relative",
                                whiteSpace: "nowrap",
                                cursor: "pointer",
                              }}
                              onClick={() => navigateTo(item.path, item.name)}
                              onMouseEnter={() => handleMouseEnter(item.name)}
                              onMouseLeave={() => handleMouseLeave(item.name)}
                            >
                              {item.name}
                              {isPathActive(item.path) && (
                                <Box
                                  position="absolute"
                                  bottom="8px"
                                  width="20px"
                                  height="2px"
                                  bg="#3F77A5"
                                />
                              )}
                            </div>
                            <Box
                              as="button"
                              onMouseEnter={() => handleMouseEnter(item.name)}
                              onMouseLeave={() => handleMouseLeave(item.name)}
                              padding="5px"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              background="transparent"
                              border="none"
                              cursor="pointer"
                            >
                              <svg
                                width="12"
                                height="6"
                                viewBox="0 0 12 6"
                                fill="none"
                                style={{
                                  transform: menuOpenStates[item.name]
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.2s ease",
                                }}
                              >
                                <path d="M6 6L12 0L0 0L6 6Z" fill="#3F77A5" />
                              </svg>
                            </Box>
                            <MenuList
                              // position="relative"
                              onMouseEnter={() => handleMouseEnter(item.name)}
                              onMouseLeave={() => handleMouseLeave(item.name)}
                              px="4"
                              py="2"
                              borderRadius="20px"
                              style={{
                                marginTop: "50px",
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: "popover",
                                whiteSpace: "nowrap",
                              }}
                              // zIndex={10000}
                            >
                              {item.items.map((dropdownItem, idx) => (
                                <React.Fragment key={dropdownItem.label || idx}>
                                  <MenuItem
                                    key={idx}
                                    // fontWeight={location.pathname === dropdownItem.path ? "700" : "400"} // Set active color

                                    fontWeight={
                                      dropdownItem.path === "/solutions"
                                        ? location.pathname === "/solutions" &&
                                          location.search.includes(
                                            dropdownItem.sliderId
                                          )
                                          ? "700"
                                          : "400"
                                        : location.pathname ===
                                          dropdownItem.path
                                        ? "700"
                                        : "400"
                                    }
                                    fontSize="14px"
                                    color={
                                      dropdownItem.path === "/solutions"
                                        ? location.pathname === "/solutions" &&
                                          location.search.includes(
                                            dropdownItem.sliderId
                                          )
                                          ? "#3F77A5"
                                          : "#696969"
                                        : location.pathname ===
                                          dropdownItem.path
                                        ? "#3F77A5"
                                        : "#696969"
                                    }
                                    onClick={() =>
                                      navigateTo(
                                        `${dropdownItem.path}${
                                          dropdownItem.sliderId
                                            ? `?slider=${dropdownItem.sliderId}`
                                            : ""
                                        }`,
                                        item.name,
                                        dropdownItem.sliderId
                                      )
                                    }
                                    width="100%"
                                    direction="column"
                                    display="flex"
                                    pl="0"
                                    style={{
                                      whiteSpace: "nowrap", 
                                    }}
                                  >
                                    <Flex direction="column" width="100%">
                                      <Text>{dropdownItem.label}</Text>
                                    </Flex>
                                  </MenuItem>
                                  {idx < item.items.length - 1 && (
                                    <Divider
                                      width="60%"
                                      height="1px"
                                      bg="#BECEDC"
                                    />
                                  )}

                                  {/* <Box width="100%" height="2px" bg="#BECEDC" /> */}
                                </React.Fragment>
                              ))}
                            </MenuList>
                          </>
                        </Menu>
                      ) : (
                        <Box px="8px">
                          <div
                            style={{
                              color: isPathActive(item.path)
                                ? "#3F77A5"
                                : "black",
                              fontWeight: isPathActive(item.path)
                                ? "700"
                                : "400",
                              textDecoration: "none",
                              position: "relative",
                              cursor: "pointer",
                            }}
                            onClick={() => navigateTo(item.path, item.name)}
                          >
                            {item.name}
                            {isPathActive(item.path) && (
                              <Box
                                position="absolute"
                                bottom="-4px"
                                width="20px"
                                height="2px"
                                bg="#3F77A5"
                              />
                            )}
                          </div>
                        </Box>
                      )}
                    </Flex>
                    {index < navigationItems.length - 1 && (
                      <Text mx={2}>|</Text>
                    )}
                  </React.Fragment>
                ))}
              </HStack>
            </Show>
            {/* -------------------------------Ambicam------------------------------- */}
            {/* <Show below="md">
              <Button
                width={contactBtnSize}
                height={contactBtnHeight}
                background="#4CC9F0"
                color="#FFFFFF"
                fontSize={fontSize}
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
            </Show> */}
            {/* inside hamburger */}
            <Hide above="xl">
              {/* below="md" */}
              <Hide below="md">
                <IconButton
                  onClick={onOpen}
                  icon={
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9248 6.63574H0.776812C0.347614 6.63574 0 6.98336 0 7.41255V10.5198C0 10.949 0.347614 11.2966 0.776812 11.2966H15.9248C16.354 11.2966 16.7016 10.949 16.7016 10.5198V7.41255C16.7016 6.98336 16.354 6.63574 15.9248 6.63574Z"
                        fill="#3F77A5"
                      />
                      <path
                        d="M20.9742 0H0.777056C0.347858 0 0.000244141 0.347614 0.000244141 0.776812V3.88406C0.000244141 4.31326 0.347858 4.66087 0.777056 4.66087H20.9742C21.4034 4.66087 21.751 4.31326 21.751 3.88406V0.776812C21.751 0.347614 21.4034 0 20.9742 0Z"
                        fill="#3F77A5"
                      />
                      <path
                        d="M10.8756 13.2717H0.777056C0.347858 13.2717 0.000244141 13.6193 0.000244141 14.0485V17.1558C0.000244141 17.585 0.347858 17.9326 0.777056 17.9326H10.8756C11.3048 17.9326 11.6524 17.585 11.6524 17.1558V14.0485C11.6524 13.6203 11.3048 13.2717 10.8756 13.2717Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  }
                  variant="ghost"
                  aria-label="Open menu"
                />
              </Hide>
            </Hide>
          </Flex>
          {/* outside hamburger */}
          <Flex gap="2%" px="1%" mx="1%">
            <Show below="md">
              <IconButton
                onClick={onOpen}
                icon={
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9248 6.63574H0.776812C0.347614 6.63574 0 6.98336 0 7.41255V10.5198C0 10.949 0.347614 11.2966 0.776812 11.2966H15.9248C16.354 11.2966 16.7016 10.949 16.7016 10.5198V7.41255C16.7016 6.98336 16.354 6.63574 15.9248 6.63574Z"
                      fill="#3F77A5"
                    />
                    <path
                      d="M20.9742 0H0.777056C0.347858 0 0.000244141 0.347614 0.000244141 0.776812V3.88406C0.000244141 4.31326 0.347858 4.66087 0.777056 4.66087H20.9742C21.4034 4.66087 21.751 4.31326 21.751 3.88406V0.776812C21.751 0.347614 21.4034 0 20.9742 0Z"
                      fill="#3F77A5"
                    />
                    <path
                      d="M10.8756 13.2717H0.777056C0.347858 13.2717 0.000244141 13.6193 0.000244141 14.0485V17.1558C0.000244141 17.585 0.347858 17.9326 0.777056 17.9326H10.8756C11.3048 17.9326 11.6524 17.585 11.6524 17.1558V14.0485C11.6524 13.6203 11.3048 13.2717 10.8756 13.2717Z"
                      fill="#3F77A5"
                    />
                  </svg>
                }
                variant="ghost"
                aria-label="Open menu"
              />
            </Show>
            {/* -------------------Ambicam------------------- */}
            <Show above="md">
              <Button
                width={contactBtnSize}
                height={contactBtnHeight}
                background="#4CC9F0"
                color="#FFFFFF"
                fontSize={fontSize}
                fontWeight="600"
                borderRadius="24px"
                flexShrink={0}
                onClick={() => navigateTo("/Ambicam", "Ambicam")}
                _hover={{
                  background: "#3bb9e0",
                  color: "#FFFFFF",
                }}
                //  bg={{ base: "black", sm: "darkred", md: "darkorange", lg: "yellow", xl: "blue" }}
              >
                Ambicam
              </Button>
            </Show>
            {/* -------------------Contact Us------------------- */}
            <Show above="md">
              <Button
                width={contactBtnSize}
                height={contactBtnHeight}
                background="#3F77A5"
                color="#FFFFFF"
                fontSize={fontSize}
                fontWeight="600"
                borderRadius="24px"
                flexShrink={0}
                onClick={() => navigateTo("/contact-us", "Contact Us")}
                _hover={{
                  background: "#35668E",
                  color: "#FFFFFF",
                }}
              >
                Contact Us
              </Button>
            </Show>
          </Flex>
        </Flex>
        {/* </PageContentWrapper> */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
          <DrawerOverlay />
          <DrawerContent bg="#E7E7E7">
            <DrawerBody padding="0">
              <Flex
                direction="column"
                height="100dvh"
                position="relative"
                overflowX="hidden"
              >
                <Box padding="5%" width="100%" zIndex={2}>
                  <Accordion allowToggle>
                    {navigationItems.map((item, index) => (
                      <AccordionItem key={item.name} borderColor="transparent">
                        {item.hasDropdown ? (
                          <>
                            <h2>
                              <Flex
                                align="center"
                                justify="space-between"
                                py="8px"
                              >
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#3F77A5"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "600"
                                      : "400",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  {item.name}
                                  <Box
                                    display={
                                      isPathActive(item.path)
                                        ? "absolute"
                                        : "none"
                                    }
                                    width="20px"
                                    height="2px"
                                    borderRadius="2px"
                                    bg="#3F77A5"
                                  />
                                </div>
                                <AccordionButton
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenAccordion(
                                      openAccordion === item.name
                                        ? null
                                        : item.name
                                    ); // Toggle accordion state
                                  }}
                                  color={
                                    isPathActive(item.path)
                                      ? "#3F77A5"
                                      : "black"
                                  }
                                  fontWeight={
                                    isPathActive(item.path) ? "600" : "400"
                                  }
                                  _hover={{ bg: "transparent" }}
                                  bg="transparent"
                                  pr="0"
                                  width="fit-content"
                                >
                                  <Box
                                    style={{
                                      transform:
                                        openAccordion === item.name
                                          ? "rotate(180deg)"
                                          : "rotate(0deg)", // Rotate only the active accordion's icon
                                      transition: "transform 0.3s ease", // Smooth transition
                                    }}
                                  >
                                    <svg
                                      width="12"
                                      height="6"
                                      viewBox="0 0 12 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 6L12 0L0 0L6 6Z"
                                        fill="#3F77A5"
                                      />
                                    </svg>
                                  </Box>
                                </AccordionButton>
                              </Flex>
                            </h2>
                            <AccordionPanel
                              borderRadius="24px"
                              bg="white"
                              px="5%"
                              py="2%"
                            >
                              {item.items.map((dropdownItem, idx) => (
                                <React.Fragment key={dropdownItem.label || idx}>
                                  <Box
                                    //key={idx} // removed key and enclosed in <React.Fragment> instead of <>
                                    style={{
                                      color: "black",
                                      fontSize: "12px",
                                      fontWeight: "400",
                                      textDecoration: "none",
                                      cursor: "pointer",
                                    }}
                                    py={2}
                                    onClick={() => {
                                      navigateTo(
                                        `${dropdownItem.path}${
                                          dropdownItem.sliderId
                                            ? `?slider=${dropdownItem.sliderId}`
                                            : ""
                                        }`,
                                        item.name,
                                        dropdownItem.sliderId
                                      );
                                      onClose();
                                    }}
                                  >
                                    <Box>{dropdownItem.label}</Box>
                                  </Box>
                                  {idx < item.items.length - 1 && (
                                    // <Box width="60%" height="1px" bg="#BECEDC" />
                                    <Divider
                                      width="60%"
                                      height="1px"
                                      bg="#BECEDC"
                                    />
                                  )}
                                </React.Fragment>
                              ))}
                            </AccordionPanel>
                          </>
                        ) : (
                          <>
                            {index === 0 ? (
                              <h2
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: "8px",
                                }}
                              >
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#3F77A5"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "500"
                                      : "400",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  <AccordionButton
                                    color={
                                      isPathActive(item.path)
                                        ? "#3F77A5"
                                        : "black"
                                    }
                                    fontWeight={
                                      isPathActive(item.path) ? "700" : "400"
                                    }
                                    _hover={{ bg: "transparent" }}
                                    bg="transparent"
                                    padding="8px 0"
                                  >
                                    <Box flex="1" textAlign="left">
                                      {item.name}
                                      <Box
                                        display={
                                          isPathActive(item.path)
                                            ? "absolute"
                                            : "none"
                                        }
                                        width="20px"
                                        height="2px"
                                        borderRadius="2px"
                                        bg="#3F77A5"
                                      />
                                    </Box>
                                  </AccordionButton>
                                </div>
                                <Box
                                  pl="1%"
                                  cursor="pointer"
                                  onClick={() => onClose()}
                                >
                                  <svg
                                    width="22"
                                    height="18"
                                    viewBox="0 0 22 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.82621 6.63574H20.9742C21.4034 6.63574 21.751 6.98336 21.751 7.41255V10.5198C21.751 10.949 21.4034 11.2966 20.9742 11.2966H5.82621C5.39702 11.2966 5.0494 10.949 5.0494 10.5198V7.41255C5.0494 6.98336 5.39702 6.63574 5.82621 6.63574Z"
                                      fill="#3F77A5"
                                    />
                                    <path
                                      d="M0.776817 0H20.9739C21.4031 0 21.7507 0.347614 21.7507 0.776812V3.88406C21.7507 4.31326 21.4031 4.66087 20.9739 4.66087H0.776817C0.347618 4.66087 5.72205e-06 4.31326 5.72205e-06 3.88406V0.776812C5.72205e-06 0.347614 0.347618 0 0.776817 0Z"
                                      fill="#3F77A5"
                                    />
                                    <path
                                      d="M10.8754 13.2717H20.9739C21.4031 13.2717 21.7507 13.6193 21.7507 14.0485V17.1558C21.7507 17.585 21.4031 17.9326 20.9739 17.9326H10.8754C10.4462 17.9326 10.0986 17.585 10.0986 17.1558V14.0485C10.0986 13.6203 10.4462 13.2717 10.8754 13.2717Z"
                                      fill="#3F77A5"
                                    />
                                  </svg>
                                </Box>
                              </h2>
                            ) : (
                              <h2>
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#3F77A5"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "500"
                                      : "400",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  <AccordionButton
                                    color={
                                      isPathActive(item.path)
                                        ? "#3F77A5"
                                        : "black"
                                    }
                                    fontWeight={
                                      isPathActive(item.path) ? "700" : "400"
                                    }
                                    _hover={{ bg: "transparent" }}
                                    bg="transparent"
                                    padding="8px 0"
                                  >
                                    <Box flex="1" textAlign="left">
                                      {item.name}
                                      <Box
                                        display={
                                          isPathActive(item.path)
                                            ? "absolute"
                                            : "none"
                                        }
                                        width="20px"
                                        height="2px"
                                        borderRadius="2px"
                                        bg="#3F77A5"
                                      />
                                    </Box>
                                  </AccordionButton>
                                </div>
                              </h2>
                            )}
                          </>
                        )}
                        {index < navigationItems.length - 1 && (
                          <Box width="full" height="1px" bg="white" />
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
                <Box
                  borderRadius="408px"
                  opacity="0.12"
                  position="absolute"
                  background="#3F77A5"
                  filter="blur(56.599998474121094px)"
                  width="408px"
                  top="40%"
                  left="0"
                  height="408px"
                  flexShrink="0"
                />
                <Flex
                  position="relative"
                  bottom="0dvh"
                  height="full"
                  minHeight="408px"
                  overflow="hidden"
                >
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/robot.png`}
                    alt="AI Robot"
                    width="100%"
                    height="auto"
                    maxHeight="100%"
                    ml="-20%"
                    objectFit="contain"
                    position="absolute"
                    bottom="0"
                    left="0"
                  />
                  <Flex
                    direction="column"
                    alignItems="flex-end"
                    gap={4}
                    position="absolute"
                    bottom="30%"
                    right="5%"
                    zIndex={1}
                  >
                    <Box flex="0 0 auto">
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => navigateTo("/", "Home")}
                      >
                        <svg
                          height={logoHeight}
                          viewBox="0 0 98 26"
                          fill="none"
                        >
                          <path
                            d="M2.06965 3.91725L12.479 21.9466L14.5487 25.7302L24.3879 8.68842L22.7459 5.64474L21.7486 3.91725L19.6789 0.332451H15.5395L17.6093 3.91725L20.2486 8.48946L14.5487 18.3617L6.20904 3.91725H9.75994L16.3242 15.2864L18.3938 11.7021L13.8996 3.91725L11.8297 0.332451H7.69029H4.13939H0L2.06965 3.91725Z"
                            fill="#3F77A5"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.8675 0.332451H22.8937L23.8807 2.04206L25.1225 4.19297L26.1095 5.90284L27.0966 4.19297L29.3255 0.332451H24.8675Z"
                            fill="#DB7B3A"
                          />
                          <path
                            d="M42.9423 7.88308L39.3612 16.1725L35.83 7.88308H32.9287L37.9355 19.4882H40.5881L45.6115 7.88308H42.9423ZM59.6509 19.4882L59.6177 7.88308H57.41L53.1354 15.0949L48.7946 7.88308H46.573V19.4882H49.093V12.6743L52.4889 18.2614H53.6992L57.1116 12.5252L57.1282 19.4882H59.6509ZM68.6228 10.5689V14.9788C68.6228 16.6201 67.7607 17.3827 66.567 17.3827C65.4231 17.3827 64.7599 16.7196 64.7599 15.2275V10.5689H62.1737V15.6088C62.1737 18.3609 63.7486 19.6209 65.9867 19.6209C67.081 19.6209 68.0757 19.2064 68.7555 18.4273V19.4882H71.2091V10.5689H68.6228ZM80.2611 19.4882H83.3945L79.3493 14.3488L83.063 10.5689H79.9793L76.1993 14.1499V7.18682H73.6131V19.4882H76.1993V17.217L77.4427 15.9901L80.2611 19.4882ZM89.6115 17.2335C89.3297 17.4491 88.9484 17.5651 88.5671 17.5651C87.8708 17.5651 87.4563 17.1506 87.4563 16.388V12.7573H89.6779V10.7678H87.4563V8.59597H84.87V10.7678H83.494V12.7573H84.87V16.4212C84.87 18.5433 86.0969 19.6209 88.2024 19.6209C88.9981 19.6209 89.7774 19.4385 90.3079 19.0572L89.6115 17.2335ZM93.06 9.32545C94.0215 9.32545 94.6681 8.69545 94.6681 7.83335C94.6681 7.03761 94.0215 6.44073 93.06 6.44073C92.0984 6.44073 91.4518 7.07073 91.4518 7.88308C91.4518 8.69544 92.0984 9.32545 93.06 9.32545ZM91.7668 19.4882H94.353V10.5689H91.7668V19.4882Z"
                            fill="#3F77A5"
                          />
                          <path
                            d="M95.3696 6.87052H95.7073V5.68652H96.1742V5.41127H94.9027V5.68652H95.3696V6.87052ZM98 6.87052L97.9958 5.41127H97.7182L97.1808 6.31814L96.635 5.41127H96.3557V6.87052H96.6725V6.01379L97.0994 6.71629H97.2517L97.6807 5.99496L97.6828 6.87052H98Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </Box>
                    <Button
                      width="146px"
                      height="50px"
                      background="#3F77A5"
                      color="#FFFFFF"
                      fontSize="16px"
                      fontWeight="700"
                      borderRadius="20px"
                      flexShrink={0}
                      onClick={() => {
                        navigateTo("/contact-us", "Contact Us"); // Navigation and tracking
                        onClose();
                      }}
                      _hover={{
                        background: "#1E4A6A",
                        color: "#FFFFFF",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Announcement />
    </>
  );
};

export default Navbar;
