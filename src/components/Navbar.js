import React from "react";
import {
    Flex,
    Image,
    Link,
    Button,
    HStack,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    Hide,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const dropdownItems = {
    organization: ["About Us", "Team", "Careers"],
    solutions: ["Enterprise", "Government", "AI Solutions"],
    about: ["Mission", "Vision", "Contact"],
};

const Navbar = () => {
    return (
        <Flex>
            <Flex justify="space-between" align="center" bg="white" borderRadius="20px">
                {/* Logo on the leftmost side */}
                <Flex align="center" ml="12px">
                    <Image src="/assets/logo.svg" alt="VMukti Logo" h="40px" />
                </Flex>

                {/* Navigation Links (Center) */}
                <Show above="md" >
                    <HStack spacing="24px" fontWeight="700" fontSize="16px" pl="334px" alignContent="center" alignItems="center" mr="15px">
                        <Link href="#" color="#4a5568" borderBottom="2px solid #3182ce">
                            Home
                        </Link>
                        <Divider orientation="vertical" h="20px" borderColor="#cbd5e0" />
                        <Link href="#" color="#4a5568">
                            Technology
                        </Link>
                        <Divider orientation="vertical" h="20px" borderColor="#cbd5e0" />
                        <Link href="#" color="#4a5568">
                            Offerings
                        </Link>
                        <Divider orientation="vertical" h="20px" borderColor="#cbd5e0" />
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" color="#4a5568">
                                Organization
                            </MenuButton>
                            <MenuList>
                                {dropdownItems.organization.map((item, index) => (
                                    <MenuItem key={index}>{item}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Divider orientation="vertical" h="20px" borderColor="#cbd5e0" />
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" color="#4a5568">
                                Solutions
                            </MenuButton>
                            <MenuList>
                                {dropdownItems.solutions.map((item, index) => (
                                    <MenuItem key={index}>{item}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Divider orientation="vertical" h="20px" borderColor="#cbd5e0" />
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" color="#4a5568">
                                About Us
                            </MenuButton>
                            <MenuList>
                                {dropdownItems.about.map((item, index) => (
                                    <MenuItem key={index}>{item}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </HStack>
                </Show>

                {/* Hamburger Menu for Mobile */}
                <Hide above="md">
                    <Menu>
                        <MenuButton as={Button} variant="ghost">
                            <HamburgerIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>Technology</MenuItem>
                            <MenuItem>Offerings</MenuItem>
                            <MenuItem>Organization</MenuItem>
                            <MenuItem>Solutions</MenuItem>
                            <MenuItem>About Us</MenuItem>
                        </MenuList>
                    </Menu>
                </Hide>
            </Flex>
            <Flex borderRadius="20px" ml="15px">
                <Button

                    width="146px"
                    height="50px"
                    justify-content="center"
                    align-items="center"
                    gap="10px"
                    borderRadius={'20px'}
                    // border-radius="20px"
                    background="#3F77A5"
                    color="White"
                // flex-shrink: 0;
                >
                    Contact Us
                </Button>
            </Flex>
        </Flex>

    );
};

export default Navbar;
