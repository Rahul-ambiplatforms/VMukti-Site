import React, { useState, useEffect } from 'react'
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
    DrawerBody,
    Text,
    useDisclosure,
    useBreakpointValue,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Image,
} from '@chakra-ui/react'

import { useNavigate, useLocation } from 'react-router-dom'

const dropdownItems = {
    organization: [
        { label: "Solution", path: "/organization/solution" },
        { label: "Team", path: "/organization/team" },
        { label: "Careers", path: "/organization/careers" },
    ],
    solutions: [
        { label: "Video Management System (VMS)", path: "/solutions", sliderId: "vms" },
        { label: "Integrated Command & Control Center (ICCC)", path: "/solutions", sliderId: "icc" },
        { label: "AI-Optimized Cloud Services", path: "/solutions", sliderId: "opt" },
        { label: "Generative AI in Video Surveillance", path: "/solutions", sliderId: "gav" },
        { label: "AI-Powered Surveillance Cameras", path: "/solutions", sliderId: "asc" },
        { label: "Flying Squad Vehicle (FSV)", path: "/solutions", sliderId: "fsv" },
        { label: "Live Webcasting & Streaming", path: "/solutions", sliderId: "lws" },
    ],
    industries: [
        { label: "Retailer Industry", path: "/industries/retailindustry" },
        { label: "Manufacturing Industry", path: "/industries/manufacturingindustry" },
        { label: "HealthCare Industry", path: "/industries/healthcareindustry" },
        { label: "Education Industry", path: "/industries/educationindustry" },
        { label: "Finance Industry", path: "/industries/financeindustry" },
        { label: "Transportation Industry", path: "/industries/transportationindustry" },
        { label: "City Monitoring", path: "/industries/citymonitoring" },
        { label: "Agriculture Industry", path: "/industries/agricultureindustry" },
        { label: "Logistic Industry", path: "/industries/warehousinglogisticIndustry" },
        { label: "Sports & Entertainment Industry", path: "/industries/entertainmentindustry" },
        { label: "Defense Industry", path: "/industries/defenseindustry" },
        { label: "Election Industry", path: "/industries/election" },
        { label: "Hospitality Industry", path: "/industries/hospitalityindustry" },
    ],
    ourServing: [
        { label: "Enterprise", path: "/serving/enterprise" },
        { label: "Government", path: "/serving/government" },
        { label: "General Consumers", path: "/serving/generalconsumers" },
    ],
    Whoweare: [
        { label: "About Us", path: "/whoweare" },
        { label: "Event Spotlight", path: "/whoweare/eventspotlight" },
        { label: "Social Impact", path: "/whoweare/social-impact" },
        { label: "Achievements", path: "/whoweare/achievements" },
        { label: "Blogs", path: "/whoweare/blogs" },
        { label: "Careers", path: "/whoweare/careers" },
        { label: "Help Desk", path: "/whoweare/help-desk" },
        { label: "Terms & Condition", path: "/whoweare/terms" },
        { label: "Warranty Policy", path: "/whoweare/warranty" },
        { label: "Privacy Policy", path: "/whoweare/privacy" },
    ],
};

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeLink, setActiveLink] = useState('Home')
    const [hoverTimeouts, setHoverTimeouts] = useState({});
    const [menuOpenStates, setMenuOpenStates] = useState({});
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
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
        '/': 'Home',
        '/technology': 'Technology',
        '/solutions': 'Solutions',
        '/industries': 'Industries',
        '/serving': 'Our Serving',
        '/whoweare': 'Who we are',
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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function isPathActive(path) {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    }

    const logoHeight = useBreakpointValue({ base: '25px', md: '25px' })
    const fontSize = useBreakpointValue({ base: '16px', md: '16px' })
    const contactBtnSize = useBreakpointValue({ base: '120px', md: '146px' })
    const contactBtnHeight = useBreakpointValue({ base: '50px', md: '50px' })

    const handleLinkClick = (link) => {
        setActiveLink(link)
    }

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
        { name: "Home", path: "/" },
        { name: "Technology", path: "/technology" },
        { name: "Solutions", path: "/solutions", hasDropdown: true, items: dropdownItems.solutions },
        { name: "Industries", path: "/industries", hasDropdown: true, items: dropdownItems.industries },
        { name: "Our Serving", path: "/serving", hasDropdown: true, items: dropdownItems.ourServing },
        { name: "Who we are", path: "/whoweare", hasDropdown: true, items: dropdownItems.Whoweare },
    ];

    return (
        <Flex
            gap={4}
            position="fixed"
            top={isNavbarVisible ? "3%" : "-100px"}
            right={{ base: "4.7%", md: "2%" }}
            left={{ base: "4%", md: "2%" }}
            zIndex={1000}
            align="center"
            transition="top 0.3s ease-in-out"
        >
            <Flex
                width="100%"
                bg="white"
                borderRadius="20px"
                height="50px"
                align="center"
                px={4}
                justifyContent="space-between"
            >
                <Box flex="0 0 auto">
                    <div style={{ cursor: "pointer" }} onClick={() => navigateTo("/", "Home")}>
                        <svg height={logoHeight} viewBox="0 0 98 26" fill="none">
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

                <Show above="lg">
                    <HStack
                        justify="center"
                        align="center"
                        fontSize={fontSize}
                        fontWeight="400"
                    >
                        {navigationItems.map((item, index) => (
                            <React.Fragment key={item.name}>
                                <Flex align="center">
                                    {item.hasDropdown ? (
                                        <Menu isOpen={menuOpenStates[item.name]}>
                                            <>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "4px",
                                                        padding: "8px 12px",
                                                        fontWeight: isPathActive(item.path) ? "700" : "400",
                                                        textDecoration: "none",
                                                        color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                        position: "relative",
                                                        whiteSpace: "nowrap",
                                                        cursor: "pointer"
                                                    }}
                                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                                    onMouseLeave={() => handleMouseLeave(item.name)}
                                                    onClick={() => navigateTo(item.path, item.name)}
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
                                                <MenuButton>
                                                    <svg
                                                        width="12"
                                                        height="6"
                                                        viewBox="0 0 12 6"
                                                        fill="none"
                                                        style={{
                                                            transform: menuOpenStates[item.name] ? "rotate(180deg)" : "rotate(0deg)",
                                                            transition: "transform 0.2s ease",
                                                        }}
                                                    >
                                                        <path d="M6 6L12 0L0 0L6 6Z" fill="#3F77A5" />
                                                    </svg>
                                                </MenuButton>
                                                <MenuList
                                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                                    onMouseLeave={() => handleMouseLeave(item.name)}
                                                    py="0"
                                                    style={{
                                                        marginTop: "20px",
                                                    }}
                                                >
                                                    {item.items.map((dropdownItem, idx) => (
                                                        <>
                                                            <MenuItem
                                                                key={idx}
                                                                fontWeight="400"
                                                                onClick={() => navigateTo(
                                                                    `${dropdownItem.path}${dropdownItem.sliderId ? `?slider=${dropdownItem.sliderId}` : ''}`,
                                                                    item.name,
                                                                    dropdownItem.sliderId
                                                                )}
                                                                width="100%"
                                                                direction="column"
                                                                display="flex"
                                                            >
                                                                <Flex direction="column" width="100%">
                                                                    <Text>{dropdownItem.label}</Text>
                                                                </Flex>
                                                            </MenuItem>
                                                            <Box width="100%" height="2px" bg="#BECEDC" />
                                                        </>
                                                    ))}
                                                </MenuList>
                                            </>
                                        </Menu>
                                    ) : (
                                        <Box px="8px">
                                            <div
                                                style={{
                                                    color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                    fontWeight: isPathActive(item.path) ? "700" : "400",
                                                    textDecoration: "none",
                                                    position: "relative",
                                                    cursor: "pointer"
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

                <Hide above="lg">
                    <IconButton
                        onClick={onOpen}
                        icon={<svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.9248 6.63574H0.776812C0.347614 6.63574 0 6.98336 0 7.41255V10.5198C0 10.949 0.347614 11.2966 0.776812 11.2966H15.9248C16.354 11.2966 16.7016 10.949 16.7016 10.5198V7.41255C16.7016 6.98336 16.354 6.63574 15.9248 6.63574Z" fill="#3F77A5" />
                            <path d="M20.9742 0H0.777056C0.347858 0 0.000244141 0.347614 0.000244141 0.776812V3.88406C0.000244141 4.31326 0.347858 4.66087 0.777056 4.66087H20.9742C21.4034 4.66087 21.751 4.31326 21.751 3.88406V0.776812C21.751 0.347614 21.4034 0 20.9742 0Z" fill="#3F77A5" />
                            <path d="M10.8756 13.2717H0.777056C0.347858 13.2717 0.000244141 13.6193 0.000244141 14.0485V17.1558C0.000244141 17.585 0.347858 17.9326 0.777056 17.9326H10.8756C11.3048 17.9326 11.6524 17.585 11.6524 17.1558V14.0485C11.6524 13.6203 11.3048 13.2717 10.8756 13.2717Z" fill="#3F77A5" />
                        </svg>}
                        variant="ghost"
                        aria-label="Open menu"
                    />
                </Hide>
            </Flex>

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
                    onClick={() => navigateTo("/contactus", "Contact Us")}
                    _hover={{
                        background: "#1E4A6A",
                        color: "#FFFFFF",
                    }}
                >
                    Contact Us
                </Button>
            </Show>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent bg="#E7E7E7">
                    <DrawerBody padding="0">
                        <Flex direction="column" height="100%" position="relative">
                            <Box padding="5%" width="100%" zIndex={2}>
                                <Accordion allowToggle>
                                    {navigationItems.map((item, index) => (
                                        <AccordionItem key={item.name}>
                                            {item.hasDropdown ? (
                                                <>
                                                    <h2>
                                                        <Flex align="center" justify="space-between" pl="16px" py="8px">
                                                            <div
                                                                style={{
                                                                    color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                                    fontSize: "16px",
                                                                    fontWeight: isPathActive(item.path) ? "600" : "400",
                                                                    textDecoration: "none",
                                                                    flex: 1,
                                                                    cursor: "pointer"
                                                                }}
                                                                onClick={() => { navigateTo(item.path, item.name); onClose(); }}
                                                            >
                                                                {item.name}
                                                            </div>
                                                            <AccordionButton
                                                                onClick={(e) => { e.stopPropagation(); }}
                                                                color={isPathActive(item.path) ? "#3F77A5" : "black"}
                                                                fontWeight={isPathActive(item.path) ? "600" : "400"}
                                                                _hover={{ bg: "transparent" }}
                                                                bg="transparent"
                                                                pr="0"
                                                                width="fit-content"
                                                            >
                                                                <Box>
                                                                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M6 6L12 0L0 0L6 6Z" fill="#3F77A5" />
                                                                    </svg>
                                                                </Box>
                                                            </AccordionButton>
                                                        </Flex>
                                                    </h2>
                                                    <AccordionPanel borderRadius="24px" bg="white" py="2%">
                                                        {item.items.map((dropdownItem, idx) => (
                                                            <div
                                                                key={idx}
                                                                style={{
                                                                    color: "black",
                                                                    fontSize: "12px",
                                                                    fontWeight: "400",
                                                                    textDecoration: "none",
                                                                    cursor: "pointer"
                                                                }}
                                                                onClick={() => { navigateTo(dropdownItem.path, item.name, dropdownItem.sliderId); onClose(); }}
                                                            >
                                                                <Box mb={2}>
                                                                    {dropdownItem.label}
                                                                    {idx < item.items.length - 1 && (
                                                                        <Box width="60%" height="1px" bg="#BECEDC" mt="4px" />
                                                                    )}
                                                                </Box>
                                                            </div>
                                                        ))}
                                                    </AccordionPanel>
                                                </>
                                            ) : (
                                                <>
                                                    {index === 0 ? (
                                                        <h2 style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                                                            <div
                                                                style={{
                                                                    color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                                    fontSize: "16px",
                                                                    fontWeight: isPathActive(item.path) ? "500" : "400",
                                                                    textDecoration: "none",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "8px",
                                                                    cursor: "pointer"
                                                                }}
                                                                onClick={() => { navigateTo(item.path, item.name); onClose(); }}
                                                            >
                                                                <AccordionButton
                                                                    color={isPathActive(item.path) ? "#3F77A5" : "black"}
                                                                    fontWeight={isPathActive(item.path) ? "700" : "400"}
                                                                    _hover={{ bg: "transparent" }}
                                                                    bg="transparent"
                                                                >
                                                                    <Box flex="1" textAlign="left">{item.name}</Box>
                                                                </AccordionButton>
                                                            </div>
                                                            <Box pl="1%" cursor="pointer" onClick={() => onClose()}>
                                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.82621 6.63574H20.9742C21.4034 6.63574 21.751 6.98336 21.751 7.41255V10.5198C21.751 10.949 21.4034 11.2966 20.9742 11.2966H5.82621C5.39702 11.2966 5.0494 10.949 5.0494 10.5198V7.41255C5.0494 6.98336 5.39702 6.63574 5.82621 6.63574Z" fill="#3F77A5" />
                                                                    <path d="M0.776817 0H20.9739C21.4031 0 21.7507 0.347614 21.7507 0.776812V3.88406C21.7507 4.31326 21.4031 4.66087 20.9739 4.66087H0.776817C0.347618 4.66087 5.72205e-06 4.31326 5.72205e-06 3.88406V0.776812C5.72205e-06 0.347614 0.347618 0 0.776817 0Z" fill="#3F77A5" />
                                                                    <path d="M10.8754 13.2717H20.9739C21.4031 13.2717 21.7507 13.6193 21.7507 14.0485V17.1558C21.7507 17.585 21.4031 17.9326 20.9739 17.9326H10.8754C10.4462 17.9326 10.0986 17.585 10.0986 17.1558V14.0485C10.0986 13.6203 10.4462 13.2717 10.8754 13.2717Z" fill="#3F77A5" />
                                                                </svg>
                                                            </Box>
                                                        </h2>
                                                    ) : (
                                                        <h2>
                                                            <div
                                                                style={{
                                                                    color: isPathActive(item.path) ? "#3F77A5" : "black",
                                                                    fontSize: "16px",
                                                                    fontWeight: isPathActive(item.path) ? "500" : "400",
                                                                    textDecoration: "none",
                                                                    cursor: "pointer"
                                                                }}
                                                                onClick={() => { navigateTo(item.path, item.name); onClose(); }}
                                                            >
                                                                <AccordionButton
                                                                    color={isPathActive(item.path) ? "#3F77A5" : "black"}
                                                                    fontWeight={isPathActive(item.path) ? "700" : "400"}
                                                                    _hover={{ bg: "transparent" }}
                                                                    bg="transparent"
                                                                >
                                                                    <Box flex="1" textAlign="left">
                                                                        {item.name}
                                                                    </Box>
                                                                </AccordionButton>
                                                            </div>
                                                        </h2>
                                                    )}
                                                </>
                                            )}
                                            {index < navigationItems.length - 1 && (
                                                <Box width="full" height="1px" bg="white" my={1} />
                                            )}
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Box>
                            <Box borderRadius="408px"
                                opacity="0.12"
                                position="absolute"
                                background="#3F77A5"
                                filter="blur(56.599998474121094px)"
                                width="408px"
                                top="40%"
                                left="0"
                                height="408px"
                                flexShrink='0'
                            />
                            <Flex
                                position="absolute"
                                bottom="0"
                                left="0"
                                right="0"
                                height="300px"
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
                                <Flex direction="column" alignItems="flex-end" gap={4} position="absolute" bottom="30%" right="5%" zIndex={1}>
                                    <Box flex="0 0 auto">
                                        <div style={{ cursor: "pointer" }} onClick={() => navigateTo("/", "Home")}>
                                            <svg height={logoHeight} viewBox="0 0 98 26" fill="none">
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
                                        onClick={() => navigateTo("/contactus", "Contact Us")}
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
        </Flex>
    );
};

export default Navbar;