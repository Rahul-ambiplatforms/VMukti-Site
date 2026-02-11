import React, { useEffect, useRef, useState, createContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Icon,
  Divider,
  InputGroup,
  InputLeftElement,
  RadioGroup,
  Radio,
  useDisclosure,
  useOutsideClick,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import countryData from "../../../data/Country_Code.json";

// --- DATA ---
const leftPanelData = {
  heading: "Start Your Digital Surveillance Transformation",
  description:
    "Let’s help you modernize your security with AI video surveillance systems, cloud video surveillance systems, and intelligent video monitoring that scale effortlessly.",
};

const formOptions = {
  camerasFor: ["Office", "Factory", "Home", "Other"],
  businessProfiles: [
    "Government",
    "Stokist",
    "Distributor",
    "Dealer",
    "Customer",
    "New Customer",
    "End User",
    "System Integrator",
    "Other",
  ],
  inquiryTypes: [
    "AI Cameras",
    "VMS",
    "EMS",
    "ICCC",
    "Government Projects",
    "Custom solutions",
    "Others",
  ],
};

// --- CUSTOM COMPONENTS ---
const RequiredPlaceholder = ({ text, children, hasValue, isRequired }) => (
  <Box position="relative" w="100%">
    {children}
    {!hasValue && (
      <HStack
        position="absolute"
        top="50%"
        left="16px"
        transform="translateY(-50%)"
        pointerEvents="none"
        zIndex="1"
      >
        <Text color="gray.500">{text}</Text>
        {isRequired && (
          <Text color="red.500" ml="1">
            *
          </Text>
        )}
      </HStack>
    )}
  </Box>
);

const CustomRadioDropdown = ({
  placeholder,
  options,
  value,
  onChange,
  name,
  isRequired,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const dropdownRef = useRef(null);
  useOutsideClick({ ref: dropdownRef, handler: () => onClose() });
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      // focus the search box when dropdown opens
      setTimeout(() => searchRef.current && searchRef.current.focus(), 0);
    }
  }, [isOpen]);

  const handleSelect = (newValue) => {
    onChange(name, newValue);
    setSearch("");
    onClose();
  };

  const DropdownIcon = () => (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
    </svg>
  );

  return (
    <Box position="relative" w="100%" ref={dropdownRef}>
      <Button
        w="100%"
        h="48px"
        bg="#F0F0F0"
        border="none"
        borderRadius="10px"
        fontWeight="normal"
        textAlign="left"
        justifyContent="space-between"
        onClick={onToggle}
        rightIcon={<DropdownIcon />}
        px={4}
      >
        <Text color={value ? "black" : "transparent"}>
          {value || placeholder}
        </Text>
      </Button>
      {!value && (
        <HStack
          position="absolute"
          top="50%"
          left="16px"
          transform="translateY(-50%)"
          pointerEvents="none"
          zIndex="1"
        >
          <Text color="gray.500">{placeholder}</Text>
          {isRequired && (
            <Text color="red.500" ml="1">
              *
            </Text>
          )}
        </HStack>
      )}
      {isOpen && (
        <VStack
          position="absolute"
          top="100%"
          left="0"
          mt={2}
          bg="white"
          borderRadius="10px"
          p={4}
          spacing={3}
          align="flex-start"
          zIndex="dropdown"
          width="240px"
          border="1px solid #ccc"
          maxH="300px"
          overflowY="auto"
        >
          <Input
            placeholder={`Search ${placeholder?.toLowerCase?.() || ""}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="sm"
            ref={searchRef}
          />
          <RadioGroup onChange={handleSelect} value={value}>
            <VStack align="flex-start" w="100%" spacing={3}>
              {options
                .filter((option) =>
                  option.toLowerCase().includes(search.toLowerCase())
                )
                .map((option, index, arr) => (
                  <React.Fragment key={option}>
                    <Radio value={option} colorScheme="blue">
                      {option}
                    </Radio>
                    {index < arr.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
            </VStack>
          </RadioGroup>
        </VStack>
      )}
    </Box>
  );
};

const PhoneInput = ({ value, onChange, isRequired, inputRef, hasError }) => {
  const currentCountry = countryData.find((c) => c.dial_code === value.code && c.code === "GB") ||
    countryData.find((c) => c.dial_code === value.code) ||
    countryData.find((c) => c.code === "GB") ||
    countryData[0] || { dial_code: "", name: "", code: "" };
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen && searchRef.current) {
      setTimeout(() => searchRef.current && searchRef.current.focus(), 0);
    }
  }, [isOpen]);

  const handleCodeChange = (newCode) => {
    onChange({ ...value, code: newCode });
    onClose();
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      try {
        inputRef.current.setSelectionRange(0, 0);
      } catch { }
    }
  };

  const handleNumberChange = (e) => {
    onChange({ ...value, number: e.target.value });
  };

  return (
    <Flex position="relative" w="100%">
      <HStack
        bg="#F0F0F0"
        h="48px"
        borderRadius="10px"
        border={hasError ? "1px solid #E53E3E" : "none"}
        px={3}
        spacing={2}
        w="100%"
      >
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton
            as={Button}
            variant="unstyled"
            h="100%"
            w="40%"
            _active={{ bg: "transparent" }}
            onClick={() => (isOpen ? onClose() : onOpen())}
          >
            <Flex align="center" justify="center" w="100%" gap="1">
              <Text>{currentCountry.code}</Text>
              <Text>{currentCountry.dial_code}</Text>
              <Icon viewBox="0 0 14 8" w="14px" h="8px">
                <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
              </Icon>
            </Flex>
          </MenuButton>
          <MenuList zIndex="dropdown" maxH="300px" overflowY="auto">
            <Box p={2} position="sticky" top={0} bg="white" zIndex={1}>
              <Input
                size="sm"
                placeholder="Search country or code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ref={searchRef}
              />
            </Box>
            {countryData
              .filter((country) => {
                const query = search.trim();
                if (!query) return true;
                const isNumericQuery = /^\+?\d+$/.test(query);
                if (isNumericQuery) {
                  return country.dial_code
                    .replace("+", "")
                    .includes(query.replace("+", ""));
                }
                return (
                  country.name.toLowerCase().includes(query.toLowerCase()) ||
                  country.dial_code.includes(query)
                );
              })
              .map((country) => (
                <MenuItem
                  key={`${country.name}-${country.dial_code}`}
                  onClick={() => handleCodeChange(country.dial_code)}
                >
                  <HStack>
                    <Text>
                      {country.name} ({country.code} {country.dial_code})
                    </Text>
                  </HStack>
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
        <Input
          ref={inputRef}
          value={value.number}
          onChange={handleNumberChange}
          type="tel"
          onFocus={(e) => {
            try {
              e.target.setSelectionRange(0, 0);
            } catch { }
          }}
        />
      </HStack>
      {!value.number && (
        <HStack
          position="absolute"
          top="50%"
          left={{ base: "120px", md: "130px", lg: "140px" }}
          transform="translateY(-50%)"
          pointerEvents="none"
          zIndex="1"
        >
          <Text color="gray.500">000 000 0000</Text>
          {isRequired && <Text color="red.500">*</Text>}
        </HStack>
      )}
    </Flex>
  );
};

// --- CREATE CONTEXT ---
export const PopupFormContext = createContext();

// --- MAIN POPUP FORM COMPONENT ---
const PopupForm = ({ isOpen, setIsOpen }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    city: "",
    phone: { code: "+44", number: "" },
    businessProfile: "",
    camerasFor: "",
    companyName: "",
    inquiryType: "",
    customerQuantity: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  const handleDropdownChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phoneValue) => {
    setFormData((prev) => ({ ...prev, phone: phoneValue }));
    if (phoneValue.number) {
      setErrors((prev) => ({ ...prev, phone: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "customerQuantity") {
      if (value === "") {
        setFormData((prev) => ({ ...prev, [name]: "" }));
      } else {
        const numericValue = Number(value);
        if (!Number.isNaN(numericValue) && numericValue >= 0) {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checks = [
      { key: "fullName", empty: !formData.fullName, ref: fullNameRef },
      { key: "email", empty: !formData.email, ref: emailRef },
      { key: "phone", empty: !formData.phone.number, ref: phoneRef },
    ];
    const firstInvalid = checks.find((c) => c.empty);

    if (firstInvalid) {
      setErrors({
        fullName: false,
        email: false,
        phone: false,
        [firstInvalid.key]: true,
      });

      if (firstInvalid.ref && firstInvalid.ref.current) {
        firstInvalid.ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setTimeout(() => {
          firstInvalid.ref.current && firstInvalid.ref.current.focus();
        }, 250);
      }

      toast({
        title: "Missing required fields",
        description: "Please fill in all fields marked with *",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });

      // Clear red border after 5 seconds
      setTimeout(() => {
        setErrors((prev) => ({ ...prev, [firstInvalid.key]: false }));
      }, 5000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        // "http://localhost:5000/api/send-email",
        "https://vmukti.com/backend/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            customerType: formData.businessProfile,
            customerQuantity:
              formData.customerQuantity === ""
                ? ""
                : Math.max(0, Number(formData.customerQuantity)),
            phoneFull: `${formData.phone.code}${formData.phone.number}`,
            formType: "UK Inquiry",
            leadType: "VMukti UK",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          fullName: "",
          country: "",
          email: "",
          city: "",
          phone: { code: "+44", number: "" },
          businessProfile: "",
          camerasFor: "",
          companyName: "",
          inquiryType: "",
          customerQuantity: "",
          message: "",
        });

        setIsOpen(false);
        
        // Navigate to UK thank you page
        navigate("/thank-you-uk");
      } else {
        const data = await response.json();
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size={{ base: "full", md: "6xl" }} isCentered>
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        // maxW={{ base: "100%", md: "90vw" }}
        // maxH={{ base: "90vh", md: "auto", lg: "650px" }}
        // h={{ base: "90vh", md: "auto", lg: "650px" }}
        // w={{ base: "100%", md: "90vw" }}
        // borderRadius={{ base: "0", md: "24px" }}
        // overflow="hidden"
        // overflowX="hidden"
        // bg="transparent"
        // boxShadow="none"
        // m={{ base: 0, md: 4 }}
        maxW={{ base: "100vw", md: "90vw" }}
        w={{ base: "100vw", md: "90vw" }}

        maxH={{ base: "90vh", md: "85vh" }}
        h="auto"

        overflowY="auto"
        borderRadius={{ base: "0", md: "24px" }}
        m={{ base: 0, md: 4 }}

      >
        {/* Close Button */}
        <ModalCloseButton
          position="absolute"
          right={{ base: "12px", md: "16px" }}
          top={{ base: "12px", md: "16px" }}
          bg="white"
          borderRadius="full"
          zIndex="10"
          size={{ base: "sm", md: "md" }}
          w={{ base: "30px", md: "35px" }}
          h={{ base: "30px", md: "35px" }}
          minW={{ base: "30px", md: "35px" }}
          _hover={{ bg: "gray.100" }}
          _focus={{ boxShadow: "none" }}
        >
          <svg
            width={{ base: "16", md: "20" }}
            height={{ base: "16", md: "20" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ModalCloseButton>

        <Box
          bg="#E9E9E9"
          borderRadius={{ base: "0", md: "24px" }}
          h={{ base: "100%", md: "auto", lg: "100%" }}
          overflow={{ base: "auto", md: "auto", lg: "hidden" }}
          overflowX="hidden"
        >
          <Flex
            position="relative"
            justify="center"
            align="center"
            borderRadius={{ base: "0", md: "24px" }}
            h={{ base: "auto", md: "auto", lg: "100%" }}
            minH={{ base: "90vh", md: "auto", lg: "auto" }}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              borderRadius={{ base: "0", md: "24px" }}
              w="100%"
              h={{ base: "auto", md: "auto", lg: "100%" }}
              minH={{ base: "100vh", md: "auto", lg: "auto" }}
              overflowX="hidden"
            >
              <VStack
                flex={{ base: 1, lg: "0 0 50%" }}
                bg="#3F77A5"
                color="white"
                p={{ base: 6, md: 8, lg: 10 }}
                spacing={{ base: 4, md: 5, lg: 6 }}
                align="flex-start"
                textAlign="left"
                borderTopLeftRadius={{ base: "0", md: "24px" }}
                borderBottomLeftRadius={{ base: "0", lg: "24px" }}
                borderTopRightRadius={{ base: "0", md: "24px", lg: "0" }}
                minH={{ base: "auto", md: "auto", lg: "691px" }}
                justify={{ base: "flex-start", lg: "flex-start" }}
                flexShrink={0}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "28px", md: "40px", lg: "48px" }}
                  lineHeight={{ base: "1.3", md: "1.2", lg: "60px" }}
                  fontWeight="600"
                  mb={{ base: 2, md: 0 }}
                >
                  {leftPanelData.heading}
                </Heading>
                <Box
                  w={{ base: "28px", md: "32px", lg: "34px" }}
                  h={{ base: "28px", md: "32px", lg: "34px" }}
                  flexShrink={0}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                      fill="#fff"
                    />
                  </svg>
                </Box>
                <Text
                  as="p"
                  fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                  lineHeight={{ base: "1.4", md: "1.3", lg: "20px" }}
                  fontWeight="500"
                  mt={{ base: -1, md: -2, lg: 0 }}
                >
                  {leftPanelData.description}
                </Text>
              </VStack>

              <Box
                flex="1"
                bg="white"
                p={{ base: 5, md: 8, lg: 10 }}
                as="form"
                onSubmit={handleSubmit}
                borderTopRightRadius={{ base: "0", md: "24px", lg: "24px" }}
                borderBottomRightRadius={{ base: "0", md: "24px" }}
                borderBottomLeftRadius={{ base: "0", md: "24px", lg: "0" }}
                maxH={{ base: "none", md: "70vh", lg: "691px" }}
                overflowY={{ base: "visible", md: "auto", lg: "auto" }}
                minH={{ base: "auto", md: "auto" }}
              >
                <Heading
                  fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                  fontWeight="600"
                  mb={{ base: 6, md: 7, lg: 8 }}
                  textAlign="left"
                >
                  Send Us a{" "}
                  <Text as="span" color="#DB7B3A">
                    Message
                  </Text>
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 5 }}>
                  {/* 1. Full name */}
                  <Box sx={{ order: { base: 1, md: "initial" } }}>
                    <RequiredPlaceholder
                      text="Full name"
                      hasValue={!!formData.fullName}
                      isRequired={true}
                    >
                      <Input
                        ref={fullNameRef}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        bg="#F0F0F0"
                        border={errors.fullName ? "1px solid #E53E3E" : "none"}
                        borderRadius="10px"
                        h={{ base: "44px", md: "48px" }}
                        fontSize={{ base: "14px", md: "16px" }}
                      />
                    </RequiredPlaceholder>
                  </Box>

                  {/* 2. Country */}
                  <Box sx={{ order: { base: 5, md: "initial" } }}>
                    <CustomRadioDropdown
                      placeholder="Country"
                      name="country"
                      options={countryData.map((c) => `${c.name}`)}
                      value={formData.country}
                      onChange={handleDropdownChange}
                      isRequired={false}
                      maxH="200px"
                      overflowY="auto"
                    />
                  </Box>

                  {/* 3. Email Address */}
                  <Box sx={{ order: { base: 2, md: "initial" } }}>
                    <RequiredPlaceholder
                      text="Email Address"
                      hasValue={!!formData.email}
                      isRequired={true}
                    >
                      <Input
                        ref={emailRef}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        bg="#F0F0F0"
                        border={errors.email ? "1px solid #E53E3E" : "none"}
                        borderRadius="10px"
                        h="48px"
                      />
                    </RequiredPlaceholder>
                  </Box>

                  {/* 4. City */}
                  <Box sx={{ order: { base: 6, md: "initial" } }}>
                    <RequiredPlaceholder
                      text="City"
                      hasValue={!!formData.city}
                      isRequired={false}
                    >
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        bg="#F0F0F0"
                        border="none"
                        borderRadius="10px"
                        h="48px"
                      />
                    </RequiredPlaceholder>
                  </Box>

                  {/* 5. Phone */}
                  <Box sx={{ order: { base: 3, md: "initial" } }}>
                    <PhoneInput
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      isRequired={true}
                      inputRef={phoneRef}
                      hasError={errors.phone}
                    />
                  </Box>

                  {/* 6. Business Name */}
                  <Box sx={{ order: { base: 4, md: "initial" } }}>
                    <RequiredPlaceholder
                      text="Business Name"
                      hasValue={!!formData.companyName}
                      isRequired={false}
                    >
                      <Input
                        ref={companyRef}
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        bg="#F0F0F0"
                        border="none"
                        borderRadius="10px"
                        h="48px"
                      />
                    </RequiredPlaceholder>
                  </Box>
                </SimpleGrid>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  bg="#F0F0F0"
                  border="none"
                  borderRadius="10px"
                  mt={5}
                  h={{ base: "124px", md: "192px" }}
                  resize="none"
                />
                <Button
                  type="submit"
                  bg="#3F77A5"
                  color="white"
                  h="50px"
                  borderRadius="24px"
                  fontSize="16px"
                  mt={8}
                  px="10"
                  fontWeight="600"
                  isLoading={isLoading}
                  _hover={{ bg: "#2c5a7d" }}
                >
                  Submit
                  <Box ml="2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM2 16L3.06066 17.0607L17.0607 3.06066L16 2L14.9393 0.939339L0.93934 14.9393L2 16Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default PopupForm;