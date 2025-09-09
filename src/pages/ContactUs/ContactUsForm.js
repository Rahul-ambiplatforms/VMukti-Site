import React, { useRef, useState } from "react";
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
  countries: [
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+1", name: "Canada", flag: "🇨🇦" },
  ],
  cities: ["New York", "Mumbai", "London", "Toronto"],
  businessProfiles: ["Government", "Enterprise", "System Integrator"],
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

  const handleSelect = (newValue) => {
    onChange(name, newValue);
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
        >
          <RadioGroup onChange={handleSelect} value={value}>
            <VStack align="flex-start" w="100%" spacing={3}>
              {options.map((option, index) => (
                <React.Fragment key={option}>
                  <Radio value={option} colorScheme="blue">
                    {option}
                  </Radio>
                  {index < options.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </VStack>
          </RadioGroup>
        </VStack>
      )}
    </Box>
  );
};

const PhoneInput = ({ value, onChange, isRequired }) => {
  const currentCountry =
    formOptions.countries.find((c) => c.code === value.code) ||
    formOptions.countries[0];

  const handleCodeChange = (newCode) => {
    onChange({ ...value, code: newCode });
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
        px={3}
        spacing={2}
        w="100%"
      >
        <Menu>
          <MenuButton
            as={Button}
            variant="unstyled"
            h="100%"
            _active={{ bg: "transparent" }}
          >
            <HStack>
              <Text fontSize="xl">{currentCountry.flag}</Text>
              <Text>{currentCountry.code}</Text>
              <Icon viewBox="0 0 14 8" w="14px" h="8px">
                <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
              </Icon>
            </HStack>
          </MenuButton>
          <MenuList zIndex="dropdown">
            {formOptions.countries.map((country) => (
              <MenuItem
                key={`${country.name}-${country.code}`}
                onClick={() => handleCodeChange(country.code)}
              >
                <HStack>
                  <Text fontSize="xl">{country.flag}</Text>
                  <Text>
                    {country.name} ({country.code})
                  </Text>
                </HStack>
                {/* <Divider
                  orientation="vertical"
                  h="60%"
                  borderColor="gray.400"
                /> */}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          // variant="unstyled"  
          value={value.number}
          onChange={handleNumberChange}
          type="tel"
          // pl={2}
        />
        {/* <Divider orientation="vertical" h="60%" borderColor="gray.400" /> */}
      </HStack>
      {!value.number && (
        <HStack
          position="absolute"
          top="50%"
          left="90px"
          transform="translateY(-50%)"
          pointerEvents="none"
          zIndex="1"
        >
          <Text color="gray.500">000 000 0000</Text>
          {isRequired && (
            <Text color="red.500">
              *
            </Text>
          )}
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
    companyName: "",
    inquiryType: "",
    message: "",
  });

  const handleDropdownChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phoneValue) => {
    setFormData((prev) => ({ ...prev, phone: phoneValue }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone.number ||
      !formData.companyName
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all fields marked with *",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
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
            formType: 'Contact' 
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

        navigate("/thank-you");

        setFormData({
          fullName: "",
          country: "",
          email: "",
          city: "",
          phone: { code: "+91", number: "" },
          businessProfile: "",
          companyName: "",
          inquiryType: "",
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
            <Text fontSize="16px" lineHeight="20px" fontWeight="500">
              {leftPanelData.description}
            </Text>
            <VStack spacing={4} align="flex-start" w="100%" pt={4}>
              {leftPanelData.checklist.map((item, index) => (
                <React.Fragment key={index}>
                  <HStack spacing={4} align="center">
                    <Icon as={CheckCircleIcon} color="#48BB78" w={6} h={6} />
                    <Text>{item}</Text>
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
              <RequiredPlaceholder
                text="Full name"
                hasValue={!!formData.fullName}
                isRequired={true}
              >
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  bg="#F0F0F0"
                  border="none"
                  borderRadius="10px"
                  h="48px"
                />
              </RequiredPlaceholder>

              <CustomRadioDropdown
                placeholder="Country"
                name="country"
                options={formOptions.countries.map((c) => c.name)}
                value={formData.country}
                onChange={handleDropdownChange}
                isRequired={false}
              />

              <RequiredPlaceholder
                text="Email Address"
                hasValue={!!formData.email}
                isRequired={true}
              >
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  bg="#F0F0F0"
                  border="none"
                  borderRadius="10px"
                  h="48px"
                />
              </RequiredPlaceholder>

              <CustomRadioDropdown
                placeholder="City"
                name="city"
                options={formOptions.cities}
                value={formData.city}
                onChange={handleDropdownChange}
                isRequired={false}
              />

              <PhoneInput
                value={formData.phone}
                onChange={handlePhoneChange}
                isRequired={true}
              />

              <CustomRadioDropdown
                placeholder="Business Profile"
                name="businessProfile"
                options={formOptions.businessProfiles}
                value={formData.businessProfile}
                onChange={handleDropdownChange}
                isRequired={false}
              />

              <RequiredPlaceholder
                text="Company Name"
                hasValue={!!formData.companyName}
                isRequired={true}
              >
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  bg="#F0F0F0"
                  border="none"
                  borderRadius="10px"
                  h="48px"
                />
              </RequiredPlaceholder>

              <CustomRadioDropdown
                placeholder="Inquiry Type"
                name="inquiryType"
                options={formOptions.inquiryTypes}
                value={formData.inquiryType}
                onChange={handleDropdownChange}
                isRequired={false}
              />
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
              h="192px"
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
