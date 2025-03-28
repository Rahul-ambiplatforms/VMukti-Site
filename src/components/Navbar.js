import React, { useState } from 'react'
import {
    Flex,
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
    useBreakpointValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom' // Import Link and useLocation from react-router-dom
import PageContentWrapper from './PageContentWrapper';

const dropdownItems = {
    organization: ["Solution", "Team", "Careers"],
    solutions: ["Video Management System (VMS)", "Integrated Command & Control Center (ICCC)", "AI-Optimized Cloud Services", "Generative AI in Video Surveillance", "AI-Powered Surveillance Cameras", "Flying Squad Vehicle (FSV)", "Live Webcasting & Streaming"],
    industries: ["Retailer Industry", "Manufacturing Industry", "HealthCare Industry", "Education Industry", "Finance Industry", "Transportation Industry", "City Monitoring", "Agriculture Industry", "Logistic Industry", "Sports & Entertainment Industry", "Defense Industry", "Election Industry", "Hospitality Industry"],
    ourServing: ["Enterprise", "Government", "General Consumers"],
    Whoweare: ["About Us", "Event Spotlight", "Social Impact", "Achievements", "Blogs", "Carrers", "Help Desk", "Terms & Condition", "Warranty Policy", "Privacy Policy"],
};

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeLink, setActiveLink] = useState('Home') // State to track active link
    const location = useLocation(); // Use location hook
    const pathToLinkName = {
        '/': 'Home',
        '/technology': 'Technology',
        '/solution': 'Solutions',
        '/industries': 'Industries',
        '/serving': 'Our Serving',
        '/whoweare': 'Who we are',
    };

    React.useEffect(() => {
        const currentLink = pathToLinkName[location.pathname];
        if (currentLink) {
            setActiveLink(currentLink);
        }
    }, [location]);

    // Helper function to check if the current path starts with the link’s base path
    function isPathActive(path) {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    }

    // Responsive values
    const logoHeight = useBreakpointValue({ base: '25px', md: '25px' })
    const fontSize = useBreakpointValue({ base: '16px', md: '16px' })
    const contactBtnSize = useBreakpointValue({ base: '120px', md: '146px' })
    const contactBtnHeight = useBreakpointValue({ base: '50px', md: '50px' })

    // Function to handle link clicks
    const handleLinkClick = (link) => {
        setActiveLink(link)
    }

    // Define navigation items array to help with last item check
    const navigationItems = [
        { name: "Home", path: "/" },
        { name: "Technology", path: "/technology" },
        { name: "Solutions", path: "/solution", hasDropdown: true, items: dropdownItems.solutions },
        { name: "Industries", path: "/industries", hasDropdown: true, items: dropdownItems.industries },
        { name: "Our Serving", path: "/serving", hasDropdown: true, items: dropdownItems.ourServing },
        { name: "Who we are", path: "/whoweare", hasDropdown: true, items: dropdownItems.Whoweare },
    ];

    return (
        <Flex
            gap={4}
            position="fixed"
            // width="100%"
            top="3%"
            right="2%"
            left="2%"
            zIndex={1000}
            align="center"
        >
            {/* Main Navigation Container */}
            <Flex
                width="100%" // Ensure inner container spans full width
                bg="white"
                borderRadius="20px"
                height="50px"
                align="center"
                px={4}
                justifyContent="space-between"
            >
                {/* Logo Section */}
                <Box flex="0 0 auto">
                    <svg height={logoHeight} viewBox="0 0 98 26" fill="none">
                        <path
                            d="M2.06965 3.91725L12.479 21.9466L14.5487 25.7302L24.3879 8.68842L22.7459 5.64474L21.7486 3.91725L19.6789 0.332451H15.5395L17.6093 3.91725L20.2486 8.48946L14.5487 18.3617L6.20904 3.91725H9.75994L16.3242 15.2864L18.3938 11.7021L13.8996 3.91725L11.8297 0.332451H7.69029H4.13939H0L2.06965 3.91725Z"
                            fill="#3F77A5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
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
                </Box>

                {/* Navigation Links - Desktop */}
                <Show above="lg">
                    <HStack
                        justify="center"
                        align="center"
                        fontSize={fontSize}
                        fontWeight="400"
                    // gap="1"
                    >
                        {navigationItems.map((item, index) => (
                            <React.Fragment key={item.name}>
                                <Flex
                                    align="center"
                                >
                                    {/* Menu Item */}
                                    {item.hasDropdown ? (
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                                                    <path d="M6 6L12 0L0 0L6 6Z" fill="#3F77A5" />
                                                </svg>}
                                                variant="ghost"
                                                fontWeight={isPathActive(item.path) ? "500" : "400"}
                                                onClick={() => handleLinkClick(item.name)}
                                                position="relative"
                                            >
                                                {item.name}
                                                {isPathActive(item.path) && (
                                                    <Box
                                                        position="absolute"
                                                        bottom="6px"

                                                        width="20px"
                                                        height="1.5px"
                                                        bg="#3F77A5"
                                                    />
                                                )}
                                            </MenuButton>
                                            <MenuList>
                                                {item.items.map((dropdownLabel, idx) => (
                                                    <MenuItem
                                                        key={idx}
                                                        fontWeight="400"
                                                        as={Link}
                                                        to={item.path} // Always use the parent's path
                                                        onClick={() => handleLinkClick(item.name)}
                                                    >
                                                        {dropdownLabel}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                    ) : (
                                        <Box px="8px">
                                            <Link
                                                to={item.path}
                                                style={{
                                                    color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                    fontWeight: isPathActive(item.path) ? "700" : "400",
                                                    textDecoration: "none",
                                                    position: "relative",
                                                }}
                                                onClick={() => handleLinkClick(item.name)}
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
                                            </Link>
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

            {/* Contact Button - Desktop */}
            <Show above="md">
                <Button
                    width={contactBtnSize}
                    height={contactBtnHeight}
                    background="#3F77A5"
                    color="#FFFFFF"
                    fontSize={fontSize}
                    fontWeight="600"
                    borderRadius="20px"
                    flexShrink={0}
                >
                    Contact Us
                </Button>
            </Show>
            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" fontWeight="400">Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    style={{
                                        color: isPathActive(item.path) ? "#3182ce" : "black",
                                        fontSize: "lg",
                                        fontWeight: isPathActive(item.path) ? "500" : "400",
                                        paddingBottom: "4px",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => handleLinkClick(item.name)}
                                >
                                    {item.name}
                                    {/* Only show divider if active and not the last item */}
                                    {isPathActive(item.path) && index < navigationItems.length - 1 && (
                                        <Box mt={1} display="flex" justifyContent="left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="2" viewBox="0 0 17 2" fill="none">
                                                <path d="M16 1L1 0.999999" stroke="#3F77A5" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Box>
                                    )}
                                </Link>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default Navbar;