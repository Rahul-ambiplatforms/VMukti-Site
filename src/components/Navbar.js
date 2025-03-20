import React, { useState } from "react";
import {
    Flex,
    Image,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    Hide,
    Box,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    Text,
    useDisclosure,
    Container,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const dropdownItems = {
    organization: ["Our Serving", "Team", "Careers"],
    solutions: ["Enterprise", "Government", "AI Solutions"],
    about: ["Mission", "Vision", "Contact"],
};

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeLink, setActiveLink] = useState("Home"); // State to track active link

    // Responsive values
    const logoHeight = useBreakpointValue({ base: "30px", md: "40px" });
    const fontSize = useBreakpointValue({ base: "14px", md: "16px" });
    const contactBtnSize = useBreakpointValue({ base: "120px", md: "146px" });
    const contactBtnHeight = useBreakpointValue({ base: "40px", md: "50px" });

    // Function to handle link clicks
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <Container maxW="100%">
            <Flex align="center">
                {/* Main Navbar */}
                <Flex
                    justify="space-between"
                    align="center"
                    bg="white"
                    borderRadius="20px"
                    flex="1"
                    px={4}
                    py={2}
                >
                    {/* Logo */}
                    <Flex align="center">
                        <Image src="/assets/logo.svg" alt="VMukti Logo" h={logoHeight} />
                    </Flex>

                    {/* Navigation Links (Desktop) */}
                    <Show above="md">
                        <HStack spacing={{ base: 3, md: 6 }} align="center" fontSize={fontSize} fontWeight="400">
                            <Link
                                to="/" // Use "to" instead of "href"
                                style={{
                                    color: activeLink === "Home" ? "#3182ce" : "#4a5568",
                                    fontWeight: activeLink === "Home" ? "500" : "400",
                                    borderBottom: activeLink === "Home" ? "2px solid #3182ce" : "none",
                                    paddingBottom: "4px",
                                    textDecoration: "none", // Remove default underline
                                }}
                                onClick={() => handleLinkClick("Home")}
                            >
                                Home
                            </Link>
                            <Box w="2px" h="16px" bg="#8F8F8F" />
                            <Link
                                to="/technology" // Use "to" instead of "href"
                                style={{
                                    color: activeLink === "Technology" ? "#3182ce" : "#4a5568",
                                    fontWeight: activeLink === "Technology" ? "500" : "400",
                                    borderBottom: activeLink === "Technology" ? "2px solid #3182ce" : "none",
                                    paddingBottom: "4px",
                                    textDecoration: "none", // Remove default underline
                                }}
                                onClick={() => handleLinkClick("Technology")}
                            >
                                Technology
                            </Link>
                            <Box w="2px" h="16px" bg="#8F8F8F" />

                            {/* Dropdown for Solutions */}
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M6 6L12 0L0 -5.24537e-07L6 6Z" fill="#3F77A5" />
                                    </svg>}
                                    variant="ghost"
                                    color={activeLink === "Solutions" ? "#3182ce" : "#4a5568"}
                                    fontWeight={activeLink === "Solutions" ? "500" : "400"}
                                    borderBottom={activeLink === "Solutions" ? "2px solid #3182ce" : "none"}
                                    pb={1}
                                    onClick={() => handleLinkClick("Solutions")}
                                >
                                    Solutions
                                </MenuButton>
                                <MenuList>
                                    {dropdownItems.organization.map((item, index) => (
                                        <MenuItem key={index} fontWeight="400">{item}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Box w="2px" h="16px" bg="#8F8F8F" />

                            {/* Dropdown for Industries */}
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M6 6L12 0L0 -5.24537e-07L6 6Z" fill="#3F77A5" />
                                    </svg>}
                                    variant="ghost"
                                    color={activeLink === "Industries" ? "#3182ce" : "#4a5568"}
                                    fontWeight={activeLink === "Industries" ? "500" : "400"}
                                    borderBottom={activeLink === "Industries" ? "2px solid #3182ce" : "none"}
                                    pb={1}
                                    onClick={() => handleLinkClick("Industries")}
                                >
                                    Industries
                                </MenuButton>
                                <MenuList>
                                    {dropdownItems.solutions.map((item, index) => (
                                        <MenuItem key={index} fontWeight="400">{item}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Box w="2px" h="16px" bg="#8F8F8F" />

                            {/* Dropdown for Our Serving */}
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M6 6L12 0L0 -5.24537e-07L6 6Z" fill="#3F77A5" />
                                    </svg>}
                                    variant="ghost"
                                    color={activeLink === "Our Serving" ? "#3182ce" : "#4a5568"}
                                    fontWeight={activeLink === "Our Serving" ? "500" : "400"}
                                    borderBottom={activeLink === "Our Serving" ? "2px solid #3182ce" : "none"}
                                    pb={1}
                                    onClick={() => handleLinkClick("Our Serving")}
                                >
                                    Our Serving
                                </MenuButton>
                                <MenuList>
                                    {dropdownItems.about.map((item, index) => (
                                        <MenuItem key={index} fontWeight="400">{item}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Show>

                    {/* Mobile Menu Button */}
                    <Hide above="lg">
                        <IconButton
                            onClick={onOpen}
                            icon={<HamburgerIcon w={6} h={6} />}
                            variant="ghost"
                            aria-label="Open menu"
                        />
                    </Hide>
                </Flex>

                {/* Contact Us Button */}
                <Show above="sm">
                    <Button
                        width={contactBtnSize}
                        height={contactBtnHeight}
                        background="#3F77A5"
                        color="white"
                        fontSize={fontSize}
                        fontWeight="400"
                        borderRadius="20px"
                        ml={4}
                    >
                        Contact Us
                    </Button>
                </Show>
            </Flex>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" fontWeight="400">Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch">
                            <Link
                                to="/" // Use "to" instead of "href"
                                style={{
                                    color: activeLink === "Home" ? "#3182ce" : "#4a5568",
                                    fontSize: "lg",
                                    fontWeight: activeLink === "Home" ? "500" : "400",
                                    borderBottom: activeLink === "Home" ? "2px solid #3182ce" : "none",
                                    paddingBottom: "4px",
                                    textDecoration: "none", // Remove default underline
                                }}
                                onClick={() => handleLinkClick("Home")}
                            >
                                Home
                            </Link>
                            <Link
                                to="/technology" // Use "to" instead of "href"
                                style={{
                                    color: activeLink === "Technology" ? "#3182ce" : "#4a5568",
                                    fontSize: "lg",
                                    fontWeight: activeLink === "Technology" ? "500" : "400",
                                    borderBottom: activeLink === "Technology" ? "2px solid #3182ce" : "none",
                                    paddingBottom: "4px",
                                    textDecoration: "none", // Remove default underline
                                }}
                                onClick={() => handleLinkClick("Technology")}
                            >
                                Technology
                            </Link>
                            {/* Add other links similarly */}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    );
};

export default Navbar;