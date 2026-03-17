'use client';
import { useEffect, useRef, useState } from "react";
import {
  Box, Flex, Text, Heading, Input, Button, VStack, HStack,
  SimpleGrid, useDisclosure, useToast,
  Menu, MenuButton, MenuList, MenuItem, Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import countryData from "../../../data/Country_Code.json";

const MotionBox = motion(Box);

// ── Shared field bg ──────────────────────────────────────────────
const FIELD_BG = "#F0F0F0";
const FIELD_RADIUS = "10px";
const FIELD_H = "48px";

// ── RequiredPlaceholder ──────────────────────────────────────────
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
        spacing="1"
      >
        <Text color="gray.500" fontSize="0.9375rem" fontFamily="'Wix Madefor Display', sans-serif">{text}</Text>
        {isRequired && <Text color="red.500">*</Text>}
      </HStack>
    )}
  </Box>
);

// ── CustomRadioDropdown ──────────────────────────────────────────
const DropdownIcon = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
  </svg>
);

const CustomDropdown = ({ placeholder, options, value, onChange, name, isRequired }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const ref = useRef(null);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchRef.current) setTimeout(() => searchRef.current?.focus(), 0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <Box position="relative" w="100%" ref={ref}>
      <Button
        w="100%" h={FIELD_H} bg={FIELD_BG} border="none" borderRadius={FIELD_RADIUS}
        fontWeight="normal" textAlign="left" justifyContent="space-between"
        onClick={onToggle} rightIcon={<DropdownIcon />} px={4}
        fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9375rem"
        _hover={{ bg: "#E8E8E8" }}
      >
        <Text color={value ? "black" : "transparent"}>{value || placeholder}</Text>
      </Button>
      {!value && (
        <HStack position="absolute" top="50%" left="16px" transform="translateY(-50%)" pointerEvents="none" zIndex="1" spacing="1">
          <Text color="gray.500" fontSize="0.9375rem" fontFamily="'Wix Madefor Display', sans-serif">{placeholder}</Text>
          {isRequired && <Text color="red.500">*</Text>}
        </HStack>
      )}
      {isOpen && (
        <VStack
          position="absolute" top="100%" left="0" mt={2} bg="white"
          borderRadius="10px" p={4} spacing={3} align="flex-start"
          zIndex="dropdown" width="100%" border="1px solid #ccc"
          maxH="240px" overflowY="auto" boxShadow="md"
        >
          <Input
            placeholder={`Search ${placeholder?.toLowerCase?.() || ""}`}
            value={search} onChange={(e) => setSearch(e.target.value)}
            size="sm" ref={searchRef}
          />
          {options
            .filter((o) => o.toLowerCase().includes(search.toLowerCase()))
            .map((o) => (
              <Text
                key={o} w="100%" px={2} py={1} borderRadius="6px" cursor="pointer"
                fontSize="0.9rem" fontFamily="'Wix Madefor Display', sans-serif"
                _hover={{ bg: "#F0F0F0" }}
                onClick={() => { onChange(name, o); setSearch(""); onClose(); }}
              >
                {o}
              </Text>
            ))}
        </VStack>
      )}
    </Box>
  );
};

// ── PhoneInput (same logic as ContactUsForm) ─────────────────────
const PhoneInput = ({ value, onChange, isRequired, inputRef, hasError }) => {
  const currentCountry = countryData.find((c) => c.dial_code === value.code) || countryData[0];
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen && searchRef.current) setTimeout(() => searchRef.current?.focus(), 0);
  }, [isOpen]);

  const handleCodeChange = (newCode) => {
    onChange({ ...value, code: newCode });
    onClose();
    if (inputRef?.current) {
      inputRef.current.focus();
      try { inputRef.current.setSelectionRange(0, 0); } catch {}
    }
  };

  return (
    <Flex position="relative" w="100%">
      <HStack
        bg={FIELD_BG} h={FIELD_H} borderRadius={FIELD_RADIUS}
        border={hasError ? "1px solid #E53E3E" : "none"}
        px={3} spacing={2} w="100%"
      >
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton
            as={Button} variant="unstyled" h="100%" w="40%"
            _active={{ bg: "transparent" }}
            onClick={() => (isOpen ? onClose() : onOpen())}
          >
            <Flex align="center" justify="center" w="100%" gap="1">
              <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9rem">{currentCountry?.code}</Text>
              <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9rem">{currentCountry?.dial_code}</Text>
              <Icon viewBox="0 0 14 8" w="14px" h="8px">
                <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
              </Icon>
            </Flex>
          </MenuButton>
          <MenuList zIndex="dropdown" maxH="280px" overflowY="auto">
            <Box p={2} position="sticky" top={0} bg="white" zIndex={1}>
              <Input
                size="sm" placeholder="Search country or code"
                value={search} onChange={(e) => setSearch(e.target.value)}
                ref={searchRef}
              />
            </Box>
            {countryData
              .filter((c) => {
                const q = search.trim();
                if (!q) return true;
                const isNum = /^\+?\d+$/.test(q);
                return isNum
                  ? c.dial_code.replace("+", "").includes(q.replace("+", ""))
                  : c.name.toLowerCase().includes(q.toLowerCase()) || c.dial_code.includes(q);
              })
              .map((c) => (
                <MenuItem key={`${c.name}-${c.dial_code}`} onClick={() => handleCodeChange(c.dial_code)}>
                  <Text fontSize="0.875rem" fontFamily="'Wix Madefor Display', sans-serif">
                    {c.name} ({c.code} {c.dial_code})
                  </Text>
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
        <Input
          ref={inputRef} value={value.number}
          onChange={(e) => onChange({ ...value, number: e.target.value })}
          type="tel" variant="unstyled"
          fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9375rem"
          onFocus={(e) => { try { e.target.setSelectionRange(0, 0); } catch {} }}
        />
      </HStack>
      {!value.number && (
        <HStack position="absolute" top="50%" left="100px" transform="translateY(-50%)" pointerEvents="none" zIndex="1" spacing="1">
          <Text color="gray.500" fontSize="0.9375rem" fontFamily="'Wix Madefor Display', sans-serif">000 000 0000</Text>
          {isRequired && <Text color="red.500">*</Text>}
        </HStack>
      )}
    </Flex>
  );
};

// ── FieldLabel ───────────────────────────────────────────────────
const FieldLabel = ({ label, required }) => (
  <Text fontSize="13px" fontWeight="500" color="gray.600" mb={1} fontFamily="'Wix Madefor Display', sans-serif">
    {label}{required && <Text as="span" color="red.500"> *</Text>}
  </Text>
);

// ── Main Component ───────────────────────────────────────────────
const BookDemoSection = () => {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "", country: "", email: "", city: "",
    phone: { code: "+91", number: "" },
    businessProfile: "", companyName: "", numberOfSites: "",
  });
  const [errors, setErrors] = useState({ fullName: false, email: false, phone: false, companyName: false });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: false }));
  };

  const handleDropdown = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handlePhone = (phoneValue) => {
    setForm((f) => ({ ...f, phone: phoneValue }));
    if (phoneValue.number) setErrors((er) => ({ ...er, phone: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checks = [
      { key: "fullName", empty: !form.fullName, ref: fullNameRef },
      { key: "email", empty: !form.email, ref: emailRef },
      { key: "phone", empty: !form.phone.number, ref: phoneRef },
      { key: "companyName", empty: !form.companyName, ref: companyRef },
    ];
    const firstInvalid = checks.find((c) => c.empty);
    if (firstInvalid) {
      setErrors({ fullName: false, email: false, phone: false, companyName: false, [firstInvalid.key]: true });
      firstInvalid.ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => firstInvalid.ref?.current?.focus(), 250);
      toast({ title: "Missing required fields", description: "Please fill in all fields marked with *", status: "warning", duration: 3000, isClosable: true });
      setTimeout(() => setErrors((er) => ({ ...er, [firstInvalid.key]: false })), 5000);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("https://vmukti.com/backend/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phoneFull: `${form.phone.code}${form.phone.number}`,
          formType: "Enterprise Demo",
          leadType: "VMukti",
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }
    } catch (err) {
      toast({ title: "Failed to send", description: err.message || "Please try again.", status: "error", duration: 5000, isClosable: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box py={{ base: "40px", md: "56px", lg: "72px" }} px={{ base: "16px", md: "24px", lg: "33px" }}>
      <Flex
        maxW="1446px" mx="auto"
        direction={{ base: "column", lg: "row" }}
        align="stretch"
        borderRadius="24px"
        overflow="hidden"
      >

        {/* ── LEFT PANEL ── */}
        <MotionBox
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          bg="#3F77A5"
          w={{ base: "100%", lg: "45%" }}
          flexShrink={0}
          pl={{ base: "28px", md: "48px", lg: "65px" }}
          pr={{ base: "28px", md: "48px" }}
          pt={{ base: "40px", md: "56px", lg: "65px" }}
          pb={{ base: "40px", md: "48px", lg: "56px" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "2rem", md: "2.5rem", lg: "clamp(32px, 3.17vw, 48px)" }}
              fontWeight="600"
              fontFamily="'Wix Madefor Display', sans-serif"
              color="white"
              lineHeight="1"
              letterSpacing="0"
              mb={{ base: "20px", lg: "28px" }}
            >
              See Your Enterprise<br />Command Center
            </Heading>

            {/* Arrow icon */}
            <Box mb={{ base: "20px", lg: "28px" }}>
              <svg width="34" height="34" viewBox="0 0 33 33" fill="none">
                <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="white" />
              </svg>
            </Box>

            <Text
              fontSize={{ base: "0.9375rem", lg: "1rem" }}
              fontWeight="500"
              fontFamily="'Wix Madefor Display', sans-serif"
              color="rgba(255,255,255,0.85)"
              lineHeight="1.6"
            >
              Get a live demo tailored to your multi-site setup. Our team will walk you through the platform with your specific requirements.
            </Text>
          </Box>

          {/* Bottom — shield icon + trust text */}
          <Box mt={{ base: "40px", lg: "56px" }}>
            <Box mb="12px">
              <img src="/assets/shield.svg" alt="Trusted" width="52" height="60" />
            </Box>
            <Text
              fontSize="1rem"
              fontWeight="600"
              fontFamily="'Wix Madefor Display', sans-serif"
              color="white"
              lineHeight="1"
            >
              Trusted by 900+ enterprises worldwide
            </Text>
          </Box>
        </MotionBox>

        {/* ── RIGHT PANEL ── */}
        <MotionBox
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          flex="1"
          bg="white"
          pl={{ base: "24px", md: "40px", lg: "56px" }}
          pr={{ base: "24px", md: "40px", lg: "56px" }}
          pt={{ base: "32px", md: "48px", lg: "56px" }}
          pb={{ base: "32px", md: "48px", lg: "56px" }}
          as="form"
          onSubmit={handleSubmit}
        >
          {/* Form title — centered */}
          <Heading
            as="h3"
            fontSize={{ base: "1.75rem", md: "2rem", lg: "clamp(24px, 2.37vw, 36px)" }}
            fontWeight="600"
            fontFamily="'Wix Madefor Display', sans-serif"
            lineHeight="1"
            letterSpacing="0"
            mb={{ base: "28px", md: "36px", lg: "40px" }}
            textAlign="center"
          >
            <Box as="span" color="#1A1A2E">Request a </Box>
            <Box as="span" color="#DB7B3A">Live Demo</Box>
          </Heading>

          {/* Form grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>

            {/* Full Name */}
            <Box>
              <FieldLabel label="Full Name" required />
              <RequiredPlaceholder text="Full name" hasValue={!!form.fullName} isRequired>
                <Input
                  ref={fullNameRef} name="fullName" value={form.fullName} onChange={handleChange}
                  bg={FIELD_BG} border={errors.fullName ? "1px solid #E53E3E" : "none"}
                  borderRadius={FIELD_RADIUS} h={FIELD_H}
                  fontFamily="'Wix Madefor Display', sans-serif"
                />
              </RequiredPlaceholder>
            </Box>

            {/* Country */}
            <Box>
              <FieldLabel label="Country" />
              <CustomDropdown
                placeholder="Country" name="country"
                options={countryData.map((c) => c.name)}
                value={form.country} onChange={handleDropdown}
              />
            </Box>

            {/* Email */}
            <Box>
              <FieldLabel label="Email Address" required />
              <RequiredPlaceholder text="Email Address" hasValue={!!form.email} isRequired>
                <Input
                  ref={emailRef} name="email" type="email" value={form.email} onChange={handleChange}
                  bg={FIELD_BG} border={errors.email ? "1px solid #E53E3E" : "none"}
                  borderRadius={FIELD_RADIUS} h={FIELD_H}
                  fontFamily="'Wix Madefor Display', sans-serif"
                />
              </RequiredPlaceholder>
            </Box>

            {/* City */}
            <Box>
              <FieldLabel label="City" required />
              <RequiredPlaceholder text="City" hasValue={!!form.city} isRequired>
                <Input
                  name="city" value={form.city} onChange={handleChange}
                  bg={FIELD_BG} border="none" borderRadius={FIELD_RADIUS} h={FIELD_H}
                  fontFamily="'Wix Madefor Display', sans-serif"
                />
              </RequiredPlaceholder>
            </Box>

            {/* Phone */}
            <Box>
              <FieldLabel label="Phone Number" required />
              <PhoneInput
                value={form.phone} onChange={handlePhone}
                isRequired inputRef={phoneRef} hasError={errors.phone}
              />
            </Box>

            {/* Business Profile */}
            <Box>
              <FieldLabel label="Business Profile" />
              <CustomDropdown
                placeholder="Business Profile" name="businessProfile"
                options={["Enterprise", "SMB", "Government", "Education", "Healthcare", "Retail", "Banking & Finance"]}
                value={form.businessProfile} onChange={handleDropdown}
              />
            </Box>

            {/* Company Name */}
            <Box>
              <FieldLabel label="Company Name" required />
              <RequiredPlaceholder text="Company Name" hasValue={!!form.companyName} isRequired>
                <Input
                  ref={companyRef} name="companyName" value={form.companyName} onChange={handleChange}
                  bg={FIELD_BG} border={errors.companyName ? "1px solid #E53E3E" : "none"}
                  borderRadius={FIELD_RADIUS} h={FIELD_H}
                  fontFamily="'Wix Madefor Display', sans-serif"
                />
              </RequiredPlaceholder>
            </Box>

            {/* Number of Sites */}
            <Box>
              <FieldLabel label="Number of Sites" />
              <CustomDropdown
                placeholder="Number of Sites" name="numberOfSites"
                options={["1–5", "6–20", "21–50", "51–100", "100+"]}
                value={form.numberOfSites} onChange={handleDropdown}
              />
            </Box>

          </SimpleGrid>

          {/* Book Demo button */}
          <Box mt={{ base: "20px", md: "28px" }}>
            <Button
              type="submit"
              bg="#3F77A5" color="white" borderRadius="999px"
              px="32px" h="52px"
              fontSize="1rem" fontWeight="700"
              fontFamily="'Wix Madefor Display', sans-serif"
              gap="10px" isLoading={isLoading}
              _hover={{ bg: "#2d5f88", transform: "translateY(-2px)" }}
              transition="all 0.2s ease"
            >
              Book Demo
              <svg width="16" height="16" viewBox="0 0 17 18" fill="none">
                <path d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z" fill="white" />
              </svg>
            </Button>
          </Box>
        </MotionBox>

      </Flex>
    </Box>
  );
};

export default BookDemoSection;
