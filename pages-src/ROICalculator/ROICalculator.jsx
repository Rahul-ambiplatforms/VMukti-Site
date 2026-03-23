'use client';
import { useRef, useState } from "react";
import {
  Box, Flex, Text, Heading, Button, VStack, HStack,
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
  SimpleGrid, Input, useDisclosure, useToast,
  Menu, MenuButton, MenuList, MenuItem, Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import countryData from "../../data/Country_Code.json";

// ─── Constants ────────────────────────────────────────────────────
const FIELD_BG   = "#F0F0F0";
const FIELD_H    = "48px";
const FIELD_R    = "10px";

const STEPS = [
  { step: 1, label: "Current Setup" },
  { step: 2, label: "Pain Points"   },
  { step: 3, label: "Solution"      },
  { step: 4, label: "Results"       },
];

// ─── Helpers ──────────────────────────────────────────────────────
const fmt = (n) => n.toLocaleString("en-US");

// ─── Step form dropdown (scrollable, floating) ───────────────────
const StepDropdown = ({ placeholder, options, value, onChange }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const ref = useRef(null);

  return (
    <Box position="relative" w="100%" ref={ref}>
      <Flex
        align="center" justify="space-between"
        px={4} h={FIELD_H}
        bg={value ? "#BECEDC" : FIELD_BG}
        borderRadius={FIELD_R}
        cursor="pointer" onClick={onToggle} userSelect="none"
        transition="background 0.2s ease"
      >
        <Text
          fontSize="15px"
          fontWeight={value ? "500" : "400"}
          color={value ? "#1A1A2E" : "gray.400"}
          fontFamily="'Wix Madefor Display', sans-serif"
        >
          {value || placeholder}
        </Text>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d={isOpen ? "M1 8L7 2L13 8" : "M1 1L7 7L13 1"} stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Flex>
      {isOpen && (
        <Box
          position="absolute" top="calc(100% + 4px)" left="0" w="100%"
          bg="white" borderRadius="10px" border="1px solid #E2E8F0"
          boxShadow="0 4px 20px rgba(0,0,0,0.1)"
          maxH="220px" overflowY="auto" zIndex="dropdown"
        >
          {options.map((o) => (
            <Flex
              key={o} align="center" px={4} py="11px"
              cursor="pointer"
              bg={o === value ? "#F0F6FC" : "white"}
              _hover={{ bg: o === value ? "#E8F0F8" : "#FAFAFA" }}
              transition="background 0.15s"
              borderBottom="1px solid #F5F5F5"
              _last={{ borderBottom: "none" }}
              onClick={() => { onChange(o); onClose(); }}
            >
              <Text
                fontSize="15px"
                fontWeight={o === value ? "600" : "400"}
                color={o === value ? "#3F77A5" : "#1A1A2E"}
                fontFamily="'Wix Madefor Display', sans-serif"
              >
                {o}
              </Text>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

// ─── Floating dropdown (Book Demo form) ──────────────────────────
const DropdownIcon = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
    <path d="M7 7.5L14 0.5L0 0.5L7 7.5Z" fill="#3F77A5" />
  </svg>
);

const CustomDropdown = ({ placeholder, options, value, onChange }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const ref = useRef(null);

  return (
    <Box position="relative" w="100%" ref={ref}>
      <Button
        w="100%" h={FIELD_H} bg={FIELD_BG} border="none" borderRadius={FIELD_R}
        fontWeight="normal" textAlign="left" justifyContent="space-between"
        onClick={onToggle} rightIcon={<DropdownIcon />} px={4}
        fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9375rem"
        color={value ? "black" : "gray.400"}
        _hover={{ bg: "#E8E8E8" }}
      >
        {value || placeholder}
      </Button>
      {isOpen && (
        <VStack
          position="absolute" top="100%" left="0" mt={2} bg="white"
          borderRadius="10px" p={3} spacing={2} align="flex-start"
          zIndex="dropdown" width="100%" border="1px solid #ccc"
          maxH="220px" overflowY="auto" boxShadow="md"
        >
          {options.map((o) => (
            <Text
              key={o} w="100%" px={2} py={1} borderRadius="6px" cursor="pointer"
              fontSize="0.9rem" fontFamily="'Wix Madefor Display', sans-serif"
              _hover={{ bg: "#F0F0F0" }}
              onClick={() => { onChange(o); onClose(); }}
            >
              {o}
            </Text>
          ))}
        </VStack>
      )}
    </Box>
  );
};

// ─── Labelled Slider ──────────────────────────────────────────────
const LabeledSlider = ({ label, value, onChange, min, max, step = 1, displayValue, maxLabel }) => (
  <Box mb={2}>
    <Flex justify="space-between" align="baseline" mb={2}>
      <Text fontSize={{ base: "15px", md: "16px" }} fontWeight="600" color="#1A1A2E"
        fontFamily="'Wix Madefor Display', sans-serif">
        {label}
      </Text>
      <Text fontSize={{ base: "22px", md: "26px" }} fontWeight="700" color="#3F77A5"
        fontFamily="'Wix Madefor Display', sans-serif">
        {displayValue}
      </Text>
    </Flex>
    <Slider min={min} max={max} step={step} value={value} onChange={onChange} focusThumbOnChange={false}>
      <SliderTrack bg="#BECEDC" h="6px" borderRadius="full">
        <SliderFilledTrack bg="#3F77A5" />
      </SliderTrack>
      <SliderThumb boxSize="20px" bg="white" border="3px solid #3F77A5" boxShadow="0 2px 8px rgba(0,0,0,0.15)" />
    </Slider>
    <Flex justify="flex-end" mt={1}>
      <Text fontSize="12px" color="#888" fontFamily="'Wix Madefor Display', sans-serif">
        {maxLabel}
      </Text>
    </Flex>
  </Box>
);

// ─── PhoneInput (reused from BookDemoSection) ─────────────────────
const PhoneInput = ({ value, onChange, inputRef, hasError }) => {
  const currentCountry = countryData.find((c) => c.dial_code === value.code) || countryData[0];
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex position="relative" w="100%">
      <HStack bg={FIELD_BG} h={FIELD_H} borderRadius={FIELD_R}
        border={hasError ? "1px solid #E53E3E" : "none"} px={3} spacing={2} w="100%">
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton as={Button} variant="unstyled" h="100%" w="40%"
            _active={{ bg: "transparent" }} onClick={() => (isOpen ? onClose() : onOpen())}>
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
              <Input size="sm" placeholder="Search country or code"
                value={search} onChange={(e) => setSearch(e.target.value)} ref={searchRef} />
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
                <MenuItem key={`${c.name}-${c.dial_code}`} onClick={() => { onChange({ ...value, code: c.dial_code }); onClose(); }}>
                  <Text fontSize="0.875rem" fontFamily="'Wix Madefor Display', sans-serif">
                    {c.name} ({c.code} {c.dial_code})
                  </Text>
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
        <Input ref={inputRef} value={value.number}
          onChange={(e) => onChange({ ...value, number: e.target.value })}
          type="tel" variant="unstyled"
          fontFamily="'Wix Madefor Display', sans-serif" fontSize="0.9375rem" />
      </HStack>
      {!value.number && (
        <HStack position="absolute" top="50%" left="100px" transform="translateY(-50%)"
          pointerEvents="none" zIndex="1" spacing="1">
          <Text color="gray.500" fontSize="0.9375rem" fontFamily="'Wix Madefor Display', sans-serif">
            e.g. 98765 43210
          </Text>
          <Text color="red.500">*</Text>
        </HStack>
      )}
    </Flex>
  );
};

const FieldLabel = ({ label, required }) => (
  <Text fontSize="13px" fontWeight="500" color="gray.600" mb={1} fontFamily="'Wix Madefor Display', sans-serif">
    {label}{required && <Text as="span" color="red.500"> *</Text>}
  </Text>
);

const RequiredPlaceholder = ({ text, children, hasValue }) => (
  <Box position="relative" w="100%">
    {children}
    {!hasValue && (
      <HStack position="absolute" top="50%" left="16px" transform="translateY(-50%)"
        pointerEvents="none" zIndex="1" spacing="1">
        <Text color="gray.500" fontSize="0.9375rem" fontFamily="'Wix Madefor Display', sans-serif">{text}</Text>
        <Text color="red.500">*</Text>
      </HStack>
    )}
  </Box>
);

// ─── Main Page ────────────────────────────────────────────────────
const ROICalculator = () => {
  const router = useRouter();
  const toast  = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading]     = useState(false);

  // Step 1 state
  const [cameras,  setCameras]  = useState(5000);
  const [sites,    setSites]    = useState(50);
  const [budget,   setBudget]   = useState(340000);
  const [system,     setSystem]     = useState("");
  const [industry,   setIndustry]   = useState("");
  const [painPoints,    setPainPoints]    = useState([]);

  // Step 3 state
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [addOns,       setAddOns]       = useState(["ai-analytics"]);

  // Book-demo form state
  const [form, setForm] = useState({
    fullName: "", country: "", email: "", city: "",
    phone: { code: "+91", number: "" },
    businessProfile: "", companyName: "", numberOfSites: "",
  });
  const [errors, setErrors] = useState({ fullName: false, email: false, phone: false, companyName: false });

  const fullNameRef = useRef(null);
  const emailRef    = useRef(null);
  const phoneRef    = useRef(null);
  const companyRef  = useRef(null);

  const handleChange   = (e) => { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); };
  const handleDropdown = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checks = [
      { key: "fullName", empty: !form.fullName, ref: fullNameRef },
      { key: "email",    empty: !form.email,    ref: emailRef    },
      { key: "phone",    empty: !form.phone.number, ref: phoneRef },
      { key: "companyName", empty: !form.companyName, ref: companyRef },
    ];
    const firstInvalid = checks.find((c) => c.empty);
    if (firstInvalid) {
      setErrors({ fullName: false, email: false, phone: false, companyName: false, [firstInvalid.key]: true });
      firstInvalid.ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => firstInvalid.ref?.current?.focus(), 250);
      toast({ title: "Missing required fields", description: "Please fill in all required fields.", status: "warning", duration: 3000, isClosable: true });
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
          roiData: { cameras, sites, budget, system, industry },
          formType: "ROI Calculator Demo",
          leadType: "VMukti",
        }),
      });
      if (res.ok) { router.push("/thank-you"); }
      else { const d = await res.json(); throw new Error(d.error || "Failed"); }
    } catch (err) {
      toast({ title: "Failed to send", description: err.message, status: "error", duration: 5000, isClosable: true });
    } finally { setIsLoading(false); }
  };

  return (
    <Box bg="white" pb={{ base: "48px", md: "80px" }}>

      {/* ── Page Header Banner ─────────────────────────────── */}
      <Box
        px={{ base: "16px", md: "33px" }}
        py={{ base: "12px", md: "16px" }}
        maxW="1512px"
        mx="auto"
        mb={{ base: "16px", md: "24px" }}
      >
        <Box
          bgGradient="linear(135deg, #4a7fad 0%, #3F77A5 50%, #365f82 100%)"
          borderRadius="20px"
          px={{ base: "24px", md: "48px" }}
          py={{ base: "28px", md: "36px" }}
          textAlign="center"
        >
          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "36px", lg: "44px" }}
            fontWeight="600"
            color="white"
            fontFamily="'Wix Madefor Display', sans-serif"
            mb="10px"
          >
            Enterprise Video Surveillance ROI Calculator
          </Heading>
          <Text
            fontSize={{ base: "13px", md: "15px" }}
            color="rgba(255,255,255,0.85)"
            fontFamily="'Wix Madefor Display', sans-serif"
          >
            Calculate your ROI for AI video surveillance and compare cloud VMS vs on-premise costs
          </Text>
        </Box>
      </Box>

      {/* ── Step Wizard ────────────────────────────────────── */}
      <Box px={{ base: "16px", md: "33px" }} maxW="1512px" mx="auto">
        <Flex
          direction={{ base: "column", lg: "row" }}
          borderRadius="20px"
          overflow="hidden"
          minH={{ lg: "612px" }}
          border="1px solid #E2E8F0"
        >

          {/* ── Left Sidebar ── */}
          <Box
            bg="#3F77A5"
            w={{ base: "100%", lg: "252px" }}
            flexShrink={0}
            px={{ base: "24px", lg: "32px" }}
            py={{ base: "28px", lg: "48px" }}
          >
            <VStack align="flex-start" spacing={0}>
              {STEPS.map((s, i) => {
                const isActive = currentStep === s.step;
                const isDone   = currentStep > s.step;
                return (
                  <Box key={s.step} w="100%">
                    <Flex align="center" gap="14px">
                      {/* Circle */}
                      <Flex
                        w="36px" h="36px" borderRadius="50%" flexShrink={0}
                        border="2px solid"
                        borderColor={isActive || isDone ? "white" : "rgba(255,255,255,0.4)"}
                        bg={isActive ? "white" : isDone ? "white" : "transparent"}
                        align="center" justify="center"
                      >
                        <Text
                          fontSize="14px" fontWeight="700"
                          color={isActive || isDone ? "#3F77A5" : "#ffffff"}
                          fontFamily="'Wix Madefor Display', sans-serif"
                        >
                          {s.step}
                        </Text>
                      </Flex>

                      {/* Labels */}
                      <Box>
                        <Text
                          fontSize="11px" fontWeight="400"
                          color={isActive ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)"}
                          fontFamily="'Wix Madefor Display', sans-serif"
                          lineHeight="1"
                          mb="2px"
                        >
                          Step {s.step}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight={isActive ? "700" : "400"}
                          color={isActive ? "white" : "rgba(255,255,255,0.5)"}
                          fontFamily="'Wix Madefor Display', sans-serif"
                          lineHeight="1"
                        >
                          {s.label}
                        </Text>
                      </Box>
                    </Flex>

                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <Box
                        ml="17px" w="2px" h="32px"
                        bg={currentStep > s.step ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"}
                        my="4px"
                      />
                    )}
                  </Box>
                );
              })}
            </VStack>
          </Box>

          {/* ── Right Content ── */}
          <Box
            flex="1" bg="white"
            px={{ base: "24px", md: "48px", lg: "56px" }}
            py={{ base: "32px", md: "48px" }}
          >
            {/* Step 1 */}
            {currentStep === 1 && (
              <Flex direction="column" h="100%">
                <Box mb={{ base: "24px", md: "32px" }}>
                  <Heading
                    as="h2"
                    fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                    fontWeight="600"
                    color="#1A1A2E"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    mb="8px"
                  >
                    Tell us about your current setup
                  </Heading>
                  <Text fontSize={{ base: "13px", md: "14px" }} color="#666"
                    fontFamily="'Wix Madefor Display', sans-serif">
                    This information helps us calculate accurate ROI estimates for your specific needs
                  </Text>
                </Box>

                <VStack spacing={6} align="stretch" flex="1">
                  {/* Number of Cameras */}
                  <LabeledSlider
                    label="Number of Cameras"
                    value={cameras}
                    onChange={setCameras}
                    min={10} max={10000} step={10}
                    displayValue={cameras >= 10000 ? "10,000+" : fmt(cameras)}
                    maxLabel="10,000+"
                  />

                  {/* Number of Sites */}
                  <LabeledSlider
                    label="Number of Sites"
                    value={sites}
                    onChange={setSites}
                    min={1} max={100} step={1}
                    displayValue={sites >= 100 ? "100+" : fmt(sites)}
                    maxLabel="100+"
                  />

                  {/* Current System */}
                  <Box>
                    <Text fontSize={{ base: "15px", md: "16px" }} fontWeight="600" color="#1A1A2E"
                      fontFamily="'Wix Madefor Display', sans-serif" mb={2}>
                      Current System
                    </Text>
                    <StepDropdown
                      placeholder="Select Current System"
                      options={["On-premise NVR", "Legacy VMS", "No VMS", "Cloud VMS", "Other"]}
                      value={system}
                      onChange={setSystem}
                      required
                    />
                  </Box>

                  {/* Annual Security Budget */}
                  <LabeledSlider
                    label="Annual Security Budget (USD)"
                    value={budget}
                    onChange={setBudget}
                    min={10000} max={5000000} step={10000}
                    displayValue={budget >= 5000000 ? "$5M+" : `$${fmt(budget)}`}
                    maxLabel="$10,000+"
                  />

                  {/* Industry Vertical */}
                  <Box>
                    <Text fontSize={{ base: "15px", md: "16px" }} fontWeight="600" color="#1A1A2E"
                      fontFamily="'Wix Madefor Display', sans-serif" mb={2}>
                      Industry Vertical
                    </Text>
                    <StepDropdown
                      placeholder="Select Industry Vertical"
                      options={["Banking & BFSI", "Retail", "Manufacturing", "Healthcare", "Corporate Campus", "Government", "Transport", "Education", "Other"]}
                      value={industry}
                      onChange={setIndustry}
                    />
                  </Box>
                </VStack>

                {/* Continue button */}
                <Flex justify="flex-end" mt={{ base: "28px", md: "40px" }}>
                  <Button
                    onClick={() => setCurrentStep(2)}
                    bg="#3F77A5" color="white" borderRadius="999px"
                    px="36px" h="52px"
                    fontSize="1rem" fontWeight="600"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    gap="10px"
                    _hover={{ bg: "#2d5f88", transform: "translateY(-2px)" }}
                    transition="all 0.2s ease"
                  >
                    Continue
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </Flex>
              </Flex>
            )}

            {/* Step 2 — Pain Points */}
            {currentStep === 2 && (
              <Flex direction="column" h="100%">
                <Box mb={{ base: "24px", md: "32px" }}>
                  <Heading
                    as="h2"
                    fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                    fontWeight="600"
                    color="#1A1A2E"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    mb="8px"
                  >
                    What are your current challenges?
                  </Heading>
                  <Text
                    fontSize={{ base: "13px", md: "14px" }}
                    color="#666"
                    fontFamily="'Wix Madefor Display', sans-serif"
                  >
                    Select all that apply. These pain points will help us calculate your potential savings.
                  </Text>
                </Box>

                <VStack spacing="12px" align="stretch" flex="1">
                  {[
                    { id: "maintenance",   title: "High maintenance costs",         desc: "Expensive hardware repairs and IT overhead" },
                    { id: "remote",        title: "Limited remote access",           desc: "Difficulty accessing footage from multiple locations" },
                    { id: "manual",        title: "Manual incident review",          desc: "Time-consuming footage review without AI assistance" },
                    { id: "scalability",   title: "Scalability issues",              desc: "Challenges expanding to new sites or cameras" },
                    { id: "disconnected",  title: "Multiple disconnected systems",   desc: "Separate systems that don't integrate well" },
                    { id: "compliance",    title: "Compliance concerns",             desc: "Difficulty meeting regulatory requirements" },
                  ].map((item) => {
                    const checked = painPoints.includes(item.id);
                    return (
                      <Flex
                        key={item.id}
                        align="center"
                        gap="14px"
                        px={{ base: "16px", md: "20px" }}
                        py={{ base: "14px", md: "16px" }}
                        border={`1.5px solid ${checked ? "#3F77A5" : "#E2E8F0"}`}
                        borderRadius="12px"
                        cursor="pointer"
                        bg="white"
                        onClick={() =>
                          setPainPoints((prev) =>
                            prev.includes(item.id) ? prev.filter((p) => p !== item.id) : [...prev, item.id]
                          )
                        }
                        transition="border-color 0.2s ease"
                        _hover={{ borderColor: "#3F77A5" }}
                      >
                        {/* Checkbox */}
                        <Box
                          w="22px" h="22px" flexShrink={0}
                          borderRadius="5px"
                          border={checked ? "none" : "2px solid #CBD5E0"}
                          bg={checked ? "#3F77A5" : "white"}
                          display="flex" alignItems="center" justifyContent="center"
                          transition="all 0.2s ease"
                        >
                          {checked && (
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                              <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </Box>
                        <Box>
                          <Text
                            fontSize={{ base: "14px", md: "15px" }}
                            fontWeight="600"
                            color="#1A1A2E"
                            fontFamily="'Wix Madefor Display', sans-serif"
                            lineHeight="1.3"
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontSize={{ base: "12px", md: "13px" }}
                            color="#888"
                            fontFamily="'Wix Madefor Display', sans-serif"
                            mt="2px"
                          >
                            {item.desc}
                          </Text>
                        </Box>
                      </Flex>
                    );
                  })}
                </VStack>

                {/* Back + Continue */}
                <Flex justify="space-between" mt={{ base: "28px", md: "40px" }}>
                  <Button
                    onClick={() => setCurrentStep(1)}
                    bg="#F0F0F0" color="#444" borderRadius="999px"
                    px="28px" h="52px"
                    fontSize="1rem" fontWeight="500"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    gap="8px"
                    _hover={{ bg: "#E0E0E0" }}
                    transition="all 0.2s ease"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(3)}
                    bg="#3F77A5" color="white" borderRadius="999px"
                    px="36px" h="52px"
                    fontSize="1rem" fontWeight="600"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    gap="10px"
                    _hover={{ bg: "#2d5f88", transform: "translateY(-2px)" }}
                    transition="all 0.2s ease"
                  >
                    Continue
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </Flex>
              </Flex>
            )}

            {/* Step 3 — Solution */}
            {currentStep === 3 && (() => {
              const PLANS = [
                {
                  id: "starter",
                  label: "STARTER",
                  tagline: "For growing businesses",
                  price: 29,
                  priceLabel: "/cam/mo",
                  capacity: "Up to 50 cameras",
                  features: ["Cloud VMS", "Basic AI analytics", "Email support", "7-day cloud recording", "Standard dashboard"],
                  popular: false,
                },
                {
                  id: "professional",
                  label: "PROFESSIONAL",
                  tagline: "For enterprises",
                  price: 49,
                  priceLabel: "/cam/mo",
                  capacity: "Up to 500 cameras",
                  features: ["Cloud VMS + Edge Management", "Full AI analytics suite", "24/7 support + dedicated CSM", "Enterprise Command Center", "30-day cloud recording", "Advanced alerting rules"],
                  popular: true,
                },
                {
                  id: "enterprise",
                  label: "ENTERPRISE",
                  tagline: "For large organizations",
                  price: null,
                  priceLabel: null,
                  capacity: "Unlimited cameras",
                  features: ["Full platform access", "Custom AI models", "White-label options", "On-premise deployment option", "SLA guarantee", "Unlimited recording"],
                  popular: false,
                },
              ];
              const ADDONS = [
                { id: "ai-analytics",      label: "AI Analytics",      price: 2, desc: "Advanced object detection, face recognition, and behavior analysis" },
                { id: "edge-computing",    label: "Edge Computing",     price: 2, desc: "Process video at the edge for faster response and reduced bandwidth" },
                { id: "extended-storage",  label: "Extended Storage",   price: 2, desc: "Store footage for up to 180 days" },
              ];
              const plan = PLANS.find((p) => p.id === selectedPlan);
              const addonCost = addOns.length * 2;
              const baseCost  = plan?.price ? plan.price * cameras : 0;
              const totalCost = baseCost + addonCost * cameras;

              return (
                <Flex direction="column" h="100%">
                  {/* Header */}
                  <Box mb={{ base: "20px", md: "28px" }}>
                    <Heading
                      as="h2"
                      fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                      fontWeight="600" color="#1A1A2E"
                      fontFamily="'Wix Madefor Display', sans-serif" mb="8px"
                    >
                      Recommended VMukti Solution
                    </Heading>
                    <Text fontSize={{ base: "13px", md: "14px" }} color="#666"
                      fontFamily="'Wix Madefor Display', sans-serif">
                      Based on your needs, we recommend the following package. You can customize it below.
                    </Text>
                  </Box>

                  {/* Pricing cards */}
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: "12px", md: "16px" }} mb={{ base: "20px", md: "28px" }}>
                    {PLANS.map((p) => {
                      const isSelected = selectedPlan === p.id;
                      return (
                        <Box
                          key={p.id}
                          position="relative"
                          border={`1.5px solid ${isSelected ? "#3F77A5" : "#E2E8F0"}`}
                          borderRadius="16px"
                          p={{ base: "20px", md: "24px" }}
                          bg="white"
                          cursor="pointer"
                          onClick={() => setSelectedPlan(p.id)}
                          transition="border-color 0.2s ease, box-shadow 0.2s ease"
                          boxShadow={isSelected ? "0 0 0 1px #3F77A5" : "none"}
                          _hover={{ borderColor: "#3F77A5" }}
                          maxW={{ base: "100%", md: "366px" }}
                          minH={{ md: "469px" }}
                        >
                          {p.popular && (
                            <Box
                              position="absolute" top="-14px" left="50%" transform="translateX(-50%)"
                              bg="#3F77A5" color="white" borderRadius="999px"
                              px="16px" py="4px"
                              fontSize="12px" fontWeight="600"
                              fontFamily="'Wix Madefor Display', sans-serif"
                              whiteSpace="nowrap"
                            >
                              Most Popular
                            </Box>
                          )}

                          {/* Plan label */}
                          <Text
                            fontSize="13px" fontWeight="700" letterSpacing="0.08em"
                            color="#3F77A5" fontFamily="'Wix Madefor Display', sans-serif" mb="4px"
                          >
                            {p.label}
                          </Text>
                          <Text fontSize="13px" color="#888"
                            fontFamily="'Wix Madefor Display', sans-serif" mb="16px">
                            {p.tagline}
                          </Text>

                          {/* Price */}
                          <Flex align="baseline" gap="4px" mb="4px">
                            {p.price ? (
                              <>
                                <Text fontSize={{ base: "36px", md: "42px" }} fontWeight="800" color="#1A1A2E"
                                  fontFamily="'Wix Madefor Display', sans-serif" lineHeight="1">
                                  ${p.price}
                                </Text>
                                <Text fontSize="14px" color="#888"
                                  fontFamily="'Wix Madefor Display', sans-serif">
                                  {p.priceLabel}
                                </Text>
                              </>
                            ) : (
                              <Text fontSize={{ base: "36px", md: "42px" }} fontWeight="800" color="#1A1A2E"
                                fontFamily="'Wix Madefor Display', sans-serif" lineHeight="1">
                                Custom
                              </Text>
                            )}
                          </Flex>
                          <Text fontSize="13px" color="#888"
                            fontFamily="'Wix Madefor Display', sans-serif" mb="16px">
                            {p.capacity}
                          </Text>

                          {/* Divider */}
                          <Box borderTop="1px solid #E2E8F0" mb="16px" />

                          {/* Features */}
                          <VStack align="flex-start" spacing="10px">
                            {p.features.map((f) => (
                              <Flex key={f} align="center" gap="10px">
                                <Box flexShrink={0}>
                                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M1 6L6 11L15 1" stroke="#2ECC71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Box>
                                <Text fontSize="13px" color="#444"
                                  fontFamily="'Wix Madefor Display', sans-serif">
                                  {f}
                                </Text>
                              </Flex>
                            ))}
                          </VStack>
                        </Box>
                      );
                    })}
                  </SimpleGrid>

                  {/* Add-ons */}
                  <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" color="#1A1A2E"
                    fontFamily="'Wix Madefor Display', sans-serif" mb="12px">
                    Optional Add-ons
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: "10px", md: "14px" }} mb={{ base: "20px", md: "28px" }}>
                    {ADDONS.map((a) => {
                      const checked = addOns.includes(a.id);
                      return (
                        <Flex
                          key={a.id}
                          border={`1.5px solid ${checked ? "#3F77A5" : "#E2E8F0"}`}
                          borderRadius="12px" p={{ base: "14px", md: "16px" }}
                          gap="12px" cursor="pointer"
                          bg="white"
                          onClick={() => setAddOns((prev) => prev.includes(a.id) ? prev.filter((x) => x !== a.id) : [...prev, a.id])}
                          transition="border-color 0.2s ease"
                          _hover={{ borderColor: "#3F77A5" }}
                        >
                          <Box
                            w="20px" h="20px" flexShrink={0} mt="2px"
                            borderRadius="4px"
                            border={checked ? "none" : "2px solid #CBD5E0"}
                            bg={checked ? "#3F77A5" : "white"}
                            display="flex" alignItems="center" justifyContent="center"
                            transition="all 0.2s ease"
                          >
                            {checked && (
                              <svg width="11" height="8" viewBox="0 0 12 9" fill="none">
                                <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </Box>
                          <Box flex="1">
                            <Flex justify="space-between" align="center" mb="4px">
                              <Text fontSize="14px" fontWeight="600" color="#1A1A2E"
                                fontFamily="'Wix Madefor Display', sans-serif">
                                {a.label}
                              </Text>
                              <Text fontSize="13px" color="#888"
                                fontFamily="'Wix Madefor Display', sans-serif">
                                +${a.price}/cam
                              </Text>
                            </Flex>
                            <Text fontSize="12px" color="#888" lineHeight="1.5"
                              fontFamily="'Wix Madefor Display', sans-serif">
                              {a.desc}
                            </Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </SimpleGrid>

                  {/* Estimated cost bar */}
                  <Box
                    bg="#F5F7FA" borderRadius="12px"
                    px={{ base: "16px", md: "24px" }} py={{ base: "14px", md: "18px" }}
                    mb={{ base: "24px", md: "32px" }}
                  >
                    <Flex justify="space-between" align="center">
                      <Box>
                        <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="600" color="#1A1A2E"
                          fontFamily="'Wix Madefor Display', sans-serif">
                          Estimated Monthly Cost
                        </Text>
                        <Text fontSize="12px" color="#888"
                          fontFamily="'Wix Madefor Display', sans-serif" mt="2px">
                          Based on {fmt(cameras)} cameras across {fmt(sites)} sites
                        </Text>
                      </Box>
                      <Text
                        fontSize={{ base: "22px", md: "28px", lg: "32px" }}
                        fontWeight="700" color="#3F77A5"
                        fontFamily="'Wix Madefor Display', sans-serif"
                      >
                        {plan?.price ? `$${fmt(totalCost)}` : "Custom"}
                      </Text>
                    </Flex>
                  </Box>

                  {/* Back + Get My Results */}
                  <Flex justify="space-between">
                    <Button
                      onClick={() => setCurrentStep(2)}
                      bg="#F0F0F0" color="#444" borderRadius="999px"
                      px="28px" h="52px" fontSize="1rem" fontWeight="500"
                      fontFamily="'Wix Madefor Display', sans-serif" gap="8px"
                      _hover={{ bg: "#E0E0E0" }} transition="all 0.2s ease"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(4)}
                      bg="#3F77A5" color="white" borderRadius="999px"
                      px="36px" h="52px" fontSize="1rem" fontWeight="600"
                      fontFamily="'Wix Madefor Display', sans-serif" gap="10px"
                      _hover={{ bg: "#2d5f88", transform: "translateY(-2px)" }}
                      transition="all 0.2s ease"
                    >
                      Get My Results
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Button>
                  </Flex>
                </Flex>
              );
            })()}

            {/* Step 4 placeholder */}
            {currentStep === 4 && (
              <Flex direction="column" h="100%" align="center" justify="center">
                <Text fontSize="20px" fontWeight="600" color="#3F77A5"
                  fontFamily="'Wix Madefor Display', sans-serif" mb="8px">
                  Step 4 coming soon
                </Text>
                <Button variant="ghost" color="#3F77A5" onClick={() => setCurrentStep(3)}
                  fontFamily="'Wix Madefor Display', sans-serif">
                  ← Back
                </Button>
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>

      {/* ── Book Demo Form (same as EnterpriseCommandCenter) ─ */}
      <Box
        px={{ base: "16px", md: "33px" }}
        py={{ base: "40px", md: "56px", lg: "72px" }}
        maxW="1512px" mx="auto"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="stretch"
          borderRadius="24px"
          overflow="hidden"
          border="1px solid #E2E8F0"
        >
          {/* Left panel */}
          <Box
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
                color="white" lineHeight="1" mb={{ base: "20px", lg: "28px" }}
              >
                Ready to Transform<br />Your Surveillance?
              </Heading>
              <Box mb={{ base: "20px", lg: "28px" }}>
                <svg width="34" height="34" viewBox="0 0 33 33" fill="none">
                  <path d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z" fill="white" />
                </svg>
              </Box>
              <Text fontSize={{ base: "0.9375rem", lg: "1rem" }} fontWeight="500"
                fontFamily="'Wix Madefor Display', sans-serif"
                color="rgba(255,255,255,0.85)" lineHeight="1.6">
                Join 3M+ cameras managed worldwide. Our team will build a custom solution for your specific requirements.
              </Text>
            </Box>
            <Box mt={{ base: "40px", lg: "56px" }}>
              <Box mb="12px">
                <img src="/assets/shield.svg" alt="Trusted" width="52" height="60" />
              </Box>
              <Text fontSize="1rem" fontWeight="600" fontFamily="'Wix Madefor Display', sans-serif"
                color="white" lineHeight="1">
                Trusted by 900+ enterprises worldwide
              </Text>
            </Box>
          </Box>

          {/* Right form panel */}
          <Box
            flex="1" bg="white"
            pl={{ base: "24px", md: "40px", lg: "56px" }}
            pr={{ base: "24px", md: "40px", lg: "56px" }}
            pt={{ base: "32px", md: "48px", lg: "56px" }}
            pb={{ base: "32px", md: "48px", lg: "56px" }}
            as="form"
            onSubmit={handleSubmit}
          >
            <Heading
              as="h3"
              fontSize={{ base: "1.75rem", md: "2rem", lg: "clamp(24px, 2.37vw, 36px)" }}
              fontWeight="600"
              fontFamily="'Wix Madefor Display', sans-serif"
              lineHeight="1" mb={{ base: "28px", md: "36px", lg: "40px" }}
              textAlign="center"
            >
              <Box as="span" color="#1A1A2E">Request a </Box>
              <Box as="span" color="#DB7B3A">Live Demo</Box>
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <Box>
                <FieldLabel label="Full Name" required />
                <RequiredPlaceholder text="e.g. John Smith" hasValue={!!form.fullName}>
                  <Input ref={fullNameRef} name="fullName" value={form.fullName} onChange={handleChange}
                    bg={FIELD_BG} border={errors.fullName ? "1px solid #E53E3E" : "none"}
                    borderRadius={FIELD_R} h={FIELD_H} fontFamily="'Wix Madefor Display', sans-serif" />
                </RequiredPlaceholder>
              </Box>
              <Box>
                <FieldLabel label="Country" />
                <CustomDropdown placeholder="Select your country" value={form.country}
                  options={countryData.map((c) => c.name)}
                  onChange={(v) => handleDropdown("country", v)} />
              </Box>
              <Box>
                <FieldLabel label="Email Address" required />
                <RequiredPlaceholder text="e.g. john@company.com" hasValue={!!form.email}>
                  <Input ref={emailRef} name="email" type="email" value={form.email} onChange={handleChange}
                    bg={FIELD_BG} border={errors.email ? "1px solid #E53E3E" : "none"}
                    borderRadius={FIELD_R} h={FIELD_H} fontFamily="'Wix Madefor Display', sans-serif" />
                </RequiredPlaceholder>
              </Box>
              <Box>
                <FieldLabel label="City" required />
                <RequiredPlaceholder text="e.g. Mumbai" hasValue={!!form.city}>
                  <Input name="city" value={form.city} onChange={handleChange}
                    bg={FIELD_BG} border="none" borderRadius={FIELD_R} h={FIELD_H}
                    fontFamily="'Wix Madefor Display', sans-serif" />
                </RequiredPlaceholder>
              </Box>
              <Box>
                <FieldLabel label="Phone Number" required />
                <PhoneInput value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  inputRef={phoneRef} hasError={errors.phone} />
              </Box>
              <Box>
                <FieldLabel label="Business Profile" />
                <CustomDropdown placeholder="Select business type" value={form.businessProfile}
                  options={["Enterprise", "SMB", "Government", "Education", "Healthcare", "Retail", "Banking & Finance"]}
                  onChange={(v) => handleDropdown("businessProfile", v)} />
              </Box>
              <Box>
                <FieldLabel label="Company Name" required />
                <RequiredPlaceholder text="e.g. Acme Corporation" hasValue={!!form.companyName}>
                  <Input ref={companyRef} name="companyName" value={form.companyName} onChange={handleChange}
                    bg={FIELD_BG} border={errors.companyName ? "1px solid #E53E3E" : "none"}
                    borderRadius={FIELD_R} h={FIELD_H} fontFamily="'Wix Madefor Display', sans-serif" />
                </RequiredPlaceholder>
              </Box>
              <Box>
                <FieldLabel label="Number of Sites" />
                <CustomDropdown placeholder="Select number of sites" value={form.numberOfSites}
                  options={["1–5", "6–20", "21–50", "51–100", "100+"]}
                  onChange={(v) => handleDropdown("numberOfSites", v)} />
              </Box>
            </SimpleGrid>

            <Box mt={{ base: "20px", md: "28px" }}>
              <Button type="submit" bg="#3F77A5" color="white" borderRadius="999px"
                px="32px" h="52px" fontSize="1rem" fontWeight="700"
                fontFamily="'Wix Madefor Display', sans-serif"
                gap="10px" isLoading={isLoading}
                _hover={{ bg: "#2d5f88", transform: "translateY(-2px)" }}
                transition="all 0.2s ease">
                Book Demo
                <svg width="16" height="16" viewBox="0 0 17 18" fill="none">
                  <path d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z" fill="white" />
                </svg>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ROICalculator;
