import React, { useEffect, useRef, useState } from "react";
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
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import countryData from "../../data/Country_Code.json";

// --- DATA ---

const leftPanelData = {
  heading: "Let's Build the Future of Visual Intelligence Together",
  description:
    "We help the most complex organizations to build, deploy and operate AI vision at scale. With over 900+ projects completed, we accelerate the entire lifecycle of AI visual intelligence across 15+ industries.",
  checklist: [
    "Unify video infrastructure across geographies and devices",
    "Build custom AI vision applications for your specific operations",
    "Deploy real-time AI vision effortlessly on the Cloud",
    "Ensure compliance, uptime, and secure data governance",
    "Seamlessly integrate with your existing VMS or enterprise tools",
    "Work with experts who understand your industry",
  ],
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
  const currentCountry = countryData.find((c) => c.dial_code === value.code) ||
    countryData[0] || { dial_code: "", name: "" };
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
      } catch {}
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
              {/* <Text fontSize="xl">{currentCountry.flag}</Text> */}
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
            } catch {}
          }}
        />
        {/* <Divider orientation="vertical" h="60%" borderColor="gray.400" /> */}
      </HStack>
      {!value.number && (
        <HStack
          position="absolute"
          top="50%"
          left="100px"
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

const SubmitArrowIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- MAIN FORM COMPONENT ---
const ContactUsForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    city: "",
    phone: { code: "+91", number: "" },
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
    companyName: false,
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);

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
      { key: "companyName", empty: !formData.companyName, ref: companyRef },
    ];
    const firstInvalid = checks.find((c) => c.empty);

    if (firstInvalid) {
      setErrors({
        fullName: false,
        email: false,
        phone: false,
        companyName: false,
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
            formType: "Contact",
            leadType: "VMukti",
          }),
        }
      );

      if (response.ok) {
        // toast({
        //   title: "Message Sent!",
        //   description: "We'll get back to you soon.",
        //   status: "success",
        //   duration: 5000,
        //   isClosable: true,
        // });

        navigate("/thank-you");

        setFormData({
          fullName: "",
          country: "",
          email: "",
          city: "",
          phone: { code: "+91", number: "" },
          businessProfile: "",
          camerasFor: "",
          companyName: "",
          inquiryType: "",
          customerQuantity: "",
          message: "",
        });
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

  return (
    <Box bg="#E9E9E9" borderRadius="24px">
      <Flex
        position="relative"
        justify="center"
        align="center"
        borderRadius="24px"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          borderRadius="24px"
          w="100%"
          //   maxW="1400px"
          //   boxShadow="xl"
        >
          <VStack
            flex={{ base: 1, lg: "0 0 50%" }}
            bg="#3F77A5"
            color="white"
            p={{ base: 6, md: 10 }}
            spacing={6}
            align="flex-start"
            textAlign="left"
            borderTopLeftRadius="24px"
            borderBottomLeftRadius={{ base: "0", lg: "24px" }}
            borderTopRightRadius={{ base: "24px", lg: "0" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "48px" }}
              lineHeight={{ base: "1.2", md: "60px" }}
              fontWeight="600"
            >
              {leftPanelData.heading}
            </Heading>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                fill="#fff"
              />
            </svg>
            <Text as="p" fontSize="16px" lineHeight="20px" fontWeight="500">
              {leftPanelData.description}
            </Text>
            <VStack spacing={4} align="flex-start" w="100%" pt={4}>
              {leftPanelData.checklist.map((item, index) => (
                <React.Fragment key={index}>
                  <HStack spacing={4} align="center">
                    {/* <Icon as={CheckCircleIcon} color="#48BB78" w={6} h={6} /> */}
                    <Box>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z"
                          fill="#7AC000"
                          stroke="white"
                        />
                        <path
                          d="M16.7224 7.06296C16.5762 7.06855 16.4327 7.10376 16.3004 7.16636C16.1682 7.22897 16.05 7.31774 15.953 7.42728C14.1841 9.33881 12.5648 11.2122 10.8707 13.0743L8.87298 11.3489C8.76068 11.2504 8.62896 11.1767 8.48626 11.1325C8.34357 11.0882 8.19309 11.0744 8.04474 11.0921C7.8964 11.1099 7.75346 11.1586 7.62519 11.2352C7.49693 11.3118 7.38621 11.4146 7.30026 11.5368C7.11434 11.7905 7.02924 12.1044 7.06132 12.4174C7.09339 12.7304 7.24043 13.02 7.47397 13.2308L10.2692 15.6407C10.4798 15.8253 10.7548 15.919 11.0341 15.9013C11.3135 15.8836 11.5745 15.7559 11.76 15.5463C13.7704 13.375 15.5718 11.2418 17.537 9.11995C17.7501 8.88815 17.8694 8.58551 17.872 8.27068C17.8746 7.95585 17.7603 7.65121 17.5511 7.4159C17.4467 7.30068 17.3185 7.20937 17.1755 7.14844C17.0324 7.08751 16.8778 7.0584 16.7224 7.06296Z"
                          fill="white"
                        />
                      </svg>
                    </Box>
                    <Text as="p">{item}</Text>
                  </HStack>
                  {index < leftPanelData.checklist.length - 1 && (
                    <Divider opacity={0.2} />
                  )}
                </React.Fragment>
              ))}
            </VStack>
          </VStack>

          <Box
            flex="1"
            bg="white"
            p={{ base: 6, md: 10 }}
            as="form"
            onSubmit={handleSubmit}
            borderTopRightRadius={{ base: "0", lg: "24px" }}
            borderBottomRightRadius="24px"
            borderBottomLeftRadius={{ base: "24px", lg: "0" }}
          >
            <Heading fontSize="36px" fontWeight="600" mb={8} textAlign="left">
              Send Us a{" "}
              <Text as="span" color="#DB7B3A">
                Message
              </Text>
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
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
                    h="48px"
                  />
                </RequiredPlaceholder>
              </Box>

              {/* 2. Email Address */}
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

              {/* 3. Phone */}
              <Box sx={{ order: { base: 3, md: "initial" } }}>
                <PhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  isRequired={true}
                  inputRef={phoneRef}
                  hasError={errors.phone}
                />
              </Box>

              {/* 4. Company Name */}
              <Box sx={{ order: { base: 4, md: "initial" } }}>
                <RequiredPlaceholder
                  text="Company Name"
                  hasValue={!!formData.companyName}
                  isRequired={true}
                >
                  <Input
                    ref={companyRef}
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    bg="#F0F0F0"
                    border={errors.companyName ? "1px solid #E53E3E" : "none"}
                    borderRadius="10px"
                    h="48px"
                  />
                </RequiredPlaceholder>
              </Box>

              {/* 5. Country */}
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

              {/* 6. City */}
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

              {/* 7. I want cameras for */}
              <Box sx={{ order: { base: 7, md: "initial" } }}>
                <CustomRadioDropdown
                  placeholder="I want cameras for"
                  name="camerasFor"
                  options={formOptions.camerasFor}
                  value={formData.camerasFor}
                  onChange={handleDropdownChange}
                  isRequired={false}
                />
              </Box>

              {/* 8. I am a */}
              <Box sx={{ order: { base: 8, md: "initial" } }}>
                <CustomRadioDropdown
                  placeholder="I am a"
                  name="businessProfile"
                  options={formOptions.businessProfiles}
                  value={formData.businessProfile}
                  onChange={handleDropdownChange}
                  isRequired={false}
                />
              </Box>

              {/* 9. Inquiry Type */}
              <Box sx={{ order: { base: 9, md: "initial" } }}>
                <CustomRadioDropdown
                  placeholder="Inquiry Type"
                  name="inquiryType"
                  options={formOptions.inquiryTypes}
                  value={formData.inquiryType}
                  onChange={handleDropdownChange}
                  isRequired={false}
                />
              </Box>

              {/* 10. No. of Cameras Needed */}
              <Box sx={{ order: { base: 10, md: "initial" } }}>
                <RequiredPlaceholder
                  text="No. of Cameras Needed"
                  hasValue={formData.customerQuantity !== ""}
                  isRequired={false}
                >
                  <Input
                    name="customerQuantity"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="1"
                    value={formData.customerQuantity}
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
  );
};

export default ContactUsForm;
