'use client';
import { useState } from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

const REGIONS = ["North America", "South America", "Europe", "Middle East", "Asia Pacific", "Africa", "India"];
const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];
const COUNTRY_CODES = [
  { flag: "🇮🇳", code: "+91", iso: "IN" },
  { flag: "🇺🇸", code: "+1",  iso: "US" },
  { flag: "🇬🇧", code: "+44", iso: "GB" },
  { flag: "🇦🇪", code: "+971", iso: "AE" },
];

/* ── Text input ── */
const TextInput = ({ label, required, value, onChange, type = "text" }) => (
  <Box position="relative" w="100%">
    <Box
      as="input"
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      w="100%"
      h="52px"
      bg="#EBEBEB"
      border="none"
      borderRadius="12px"
      px="16px"
      fontFamily="'Wix Madefor Display', sans-serif"
      fontSize="14px"
      color="#1A1A2E"
      outline="none"
      _focus={{ boxShadow: "0 0 0 2px #3F77A5", bg: "#E3EBF2" }}
      placeholder=""
    />
    {!value && (
      <Box
        position="absolute"
        left="16px"
        top="50%"
        transform="translateY(-50%)"
        pointerEvents="none"
        display="flex"
        alignItems="center"
      >
        <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="14px" color="#999">
          {label}
        </Text>
        {required && <Text as="span" color="#E53E3E" ml="2px" fontSize="14px">*</Text>}
      </Box>
    )}
  </Box>
);

/* ── Select dropdown ── */
const SelectField = ({ label, required, options, value, onChange }) => (
  <Box position="relative" w="100%">
    <Box
      as="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      w="100%"
      h="52px"
      bg="#EBEBEB"
      border="none"
      borderRadius="12px"
      px="16px"
      pr="44px"
      fontFamily="'Wix Madefor Display', sans-serif"
      fontSize="14px"
      color={value ? "#1A1A2E" : "#999"}
      outline="none"
      appearance="none"
      cursor="pointer"
      _focus={{ boxShadow: "0 0 0 2px #3F77A5", bg: "#E3EBF2" }}
    >
      <option value="" disabled hidden></option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </Box>
    {/* Placeholder label with asterisk */}
    {!value && (
      <Box
        position="absolute"
        left="16px"
        top="50%"
        transform="translateY(-50%)"
        pointerEvents="none"
        display="flex"
        alignItems="center"
      >
        <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="14px" color="#999">{label}</Text>
        {required && <Text as="span" color="#E53E3E" ml="2px" fontSize="14px">*</Text>}
      </Box>
    )}
    {/* Chevron */}
    <Box position="absolute" right="14px" top="50%" transform="translateY(-50%)" pointerEvents="none">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 5l4 4 4-4" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Box>
  </Box>
);

const PartnerApply = () => {
  const [form, setForm] = useState({
    name: "", region: "", companyName: "", email: "",
    companySize: "", phone: "", countryCode: "+91",
    partnerType: "", description: "",
  });
  const [countryOpen, setCountryOpen] = useState(false);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));
  const onChange = (key) => (e) => set(key)(e.target.value);

  const selected = COUNTRY_CODES.find((c) => c.code === form.countryCode) || COUNTRY_CODES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner application:", form);
  };

  return (
    <Box px={{ base: "16px", md: "24px", lg: "32px" }} py={{ base: "20px", md: "36px" }}>
      <Box maxW="1448px" mx="auto">

        {/* ── Single joined container ── */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          borderRadius="24px"
          overflow="hidden"
          minH={{ lg: "611px" }}
        >

          {/* ══ LEFT SIDE — blue wrapper with two white cards ══ */}
          <Box
            w={{ base: "100%", lg: "50%" }}
            bg="#3F77A5"
            p={{ base: "20px", md: "24px" }}
            display="flex"
            flexDirection="column"
            gap="16px"
          >
            {/* Top testimonial card */}
            <Box
              bg="#FFFFFF"
              borderRadius="16px"
              p={{ base: "24px", md: "32px" }}
              display="flex"
              flexDirection="column"
              gap="24px"
              flex="1"
            >
              {/* Quote icon */}
              <Box>
                <Image src="/assets/quote.svg" alt="quote" width={40} height={32} />
              </Box>

              {/* Quote text */}
              <Text
                fontFamily="'Wix Madefor Display', sans-serif"
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                fontWeight="400"
                color="#333"
                lineHeight="34px"
                flex="1"
              >
                &quot;Becoming a VMukti partner has been transformative for our business. The training,
                technical support, and lead sharing program have helped us grow our enterprise security
                practice by 200% in just 18 months. The team treats us like true partners.&quot;
              </Text>

              {/* Author */}
              <Flex align="center" gap="12px">
                <Box
                  w="44px" h="44px"
                  borderRadius="full"
                  bg="#3F77A5"
                  display="flex" alignItems="center" justifyContent="center"
                  flexShrink={0}
                >
                  <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="14px" fontWeight="700" color="white">
                    JD
                  </Text>
                </Box>
                <Box>
                  <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="15px" fontWeight="700" color="#1A1A2E">
                    John Davidson
                  </Text>
                  <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="13px" fontWeight="400" color="#777">
                    CEO, SecureView Systems
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* Bottom stats card */}
            <Box bg="#FFFFFF" borderRadius="16px" px={{ base: "24px", md: "32px" }} py="24px">
              <Flex direction={{ base: "column", sm: "row" }} align={{ base: "flex-start", sm: "center" }} gap="8px">

                {/* Label */}
                <Text
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize="28px"
                  fontWeight="600"
                  color="#3F77A5"
                  lineHeight="42px"
                  minW="131px"
                  mr={{ sm: "16px" }}
                >
                  Partner<br />Success<br />Stats
                </Text>

                {/* Divider */}
                <Box display={{ base: "none", sm: "block" }} w="1px" h="80px" bg="#E2E8F0" mx="12px" />

                {/* Stats */}
                <Flex flex="1" justify="space-around" gap="12px" wrap="wrap">
                  {[
                    { value: "100+", label: "Active global\npartners" },
                    { value: "45%",  label: "Average revenue\nincrease year 1" },
                    { value: "98%",  label: "Partner\nsatisfaction rating" },
                  ].map((stat) => (
                    <Box key={stat.value} textAlign="center">
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize={{ base: "28px", md: "34px" }}
                        fontWeight="700"
                        color="#3F77A5"
                        lineHeight="1"
                        mb="6px"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        fontFamily="'Wix Madefor Display', sans-serif"
                        fontSize="12px"
                        fontWeight="400"
                        color="#777"
                        lineHeight="1.5"
                        maxW="90px"
                        textAlign="center"
                        whiteSpace="pre-line"
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>
          </Box>

          {/* ══ RIGHT SIDE — white form ══ */}
          <Box
            w={{ base: "100%", lg: "50%" }}
            bg="#FFFFFF"
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            p={{ base: "24px", md: "32px", lg: "40px" }}
          >
            {/* Heading */}
            <Text
              fontFamily="'Wix Madefor Display', sans-serif"
              fontSize={{ base: "26px", md: "32px", lg: "36px" }}
              fontWeight="700"
              color="#1A1A2E"
              lineHeight="1.15"
              mb="6px"
              textAlign="center"
            >
              Apply for <Box as="span" color="#E8834A">Partnership</Box>
            </Text>
            <Text
              fontFamily="'Wix Madefor Display', sans-serif"
              fontSize="14px"
              fontWeight="400"
              color="#777"
              mb="28px"
              textAlign="center"
            >
              Start your journey as a VMukti partner today
            </Text>

            {/* Row 1: Name + Region */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="12px" mb="12px">
              <GridItem>
                <TextInput label="Name" required value={form.name} onChange={onChange("name")} />
              </GridItem>
              <GridItem>
                <SelectField label="Region" options={REGIONS} value={form.region} onChange={set("region")} />
              </GridItem>
            </Grid>

            {/* Row 2: Company Name + Email */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="12px" mb="12px">
              <GridItem>
                <TextInput label="Company Name" required value={form.companyName} onChange={onChange("companyName")} />
              </GridItem>
              <GridItem>
                <TextInput label="Email" required type="email" value={form.email} onChange={onChange("email")} />
              </GridItem>
            </Grid>

            {/* Row 3: Company Size + Phone */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="12px" mb="12px">
              <GridItem>
                <SelectField label="Company Size" options={COMPANY_SIZES} value={form.companySize} onChange={set("companySize")} />
              </GridItem>
              <GridItem>
                {/* Phone with country code */}
                <Flex h="52px" bg="#EBEBEB" borderRadius="12px" align="center" overflow="visible" position="relative">
                  {/* Country selector trigger */}
                  <Box position="relative" flexShrink={0}>
                    <Flex
                      as="button" type="button"
                      onClick={() => setCountryOpen((o) => !o)}
                      align="center" gap="4px"
                      px="10px" h="52px"
                      cursor="pointer" bg="transparent" border="none"
                      borderRight="1px solid #D0D0D0"
                    >
                      <Text fontSize="15px">{selected.flag}</Text>
                      <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="13px" color="#444">{selected.code}</Text>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5l3 3 3-3" stroke="#666" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Flex>
                    {/* Dropdown */}
                    {countryOpen && (
                      <Box
                        position="absolute" top="54px" left="0"
                        bg="white" borderRadius="10px"
                        boxShadow="0 4px 16px rgba(0,0,0,0.12)"
                        zIndex={50} py="6px" minW="140px"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <Flex
                            key={c.iso}
                            as="button" type="button"
                            align="center" gap="8px"
                            px="12px" py="8px" w="100%"
                            bg="transparent" border="none" cursor="pointer"
                            _hover={{ bg: "#F5F5F5" }}
                            onClick={() => { set("countryCode")(c.code); setCountryOpen(false); }}
                          >
                            <Text fontSize="15px">{c.flag}</Text>
                            <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="13px" color="#444">{c.iso} {c.code}</Text>
                          </Flex>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {/* Phone number input */}
                  <Box
                    as="input" type="tel"
                    value={form.phone}
                    onChange={onChange("phone")}
                    required
                    flex="1" h="100%" bg="transparent" border="none"
                    px="12px"
                    fontFamily="'Wix Madefor Display', sans-serif"
                    fontSize="14px" color="#1A1A2E" outline="none"
                    placeholder=""
                  />
                  {!form.phone && (
                    <Box
                      position="absolute"
                      left="110px"
                      top="50%" transform="translateY(-50%)"
                      pointerEvents="none" display="flex" alignItems="center"
                    >
                      <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="14px" color="#999">000 000 0000</Text>
                      <Text as="span" color="#E53E3E" ml="2px" fontSize="14px">*</Text>
                    </Box>
                  )}
                </Flex>
              </GridItem>
            </Grid>

            {/* Row 4: Partner Type (half width) */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="12px" mb="12px">
              <GridItem>
                <TextInput label="Partner Type" required value={form.partnerType} onChange={onChange("partnerType")} />
              </GridItem>
            </Grid>

            {/* Row 5: Brief Description */}
            <Box mb="24px" flex="1">
              <Box position="relative" w="100%">
                <Box
                  as="textarea"
                  value={form.description}
                  onChange={onChange("description")}
                  rows={4}
                  w="100%" h="100%" minH="100px"
                  bg="#EBEBEB" border="none" borderRadius="12px"
                  px="16px" py="14px"
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize="14px" color="#1A1A2E"
                  resize="none" outline="none"
                  _focus={{ boxShadow: "0 0 0 2px #3F77A5", bg: "#E3EBF2" }}
                  placeholder=""
                />
                {!form.description && (
                  <Box
                    position="absolute" left="16px" top="14px"
                    pointerEvents="none"
                  >
                    <Text fontFamily="'Wix Madefor Display', sans-serif" fontSize="14px" color="#999">
                      Brief Description
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Submit */}
            <Box>
              <Box
                as="button" type="submit"
                bg="#3F77A5" color="white"
                fontFamily="'Wix Madefor Display', sans-serif"
                fontSize="15px" fontWeight="700"
                px="32px" py="14px"
                borderRadius="999px" border="none" cursor="pointer"
                display="inline-flex" alignItems="center" gap="10px"
                transition="all 0.2s ease"
                _hover={{ bg: "#2d5f88", transform: "translateY(-1px)" }}
              >
                Submit
                <Box
                  w="28px" h="28px"
                  bg="rgba(255,255,255,0.2)"
                  borderRadius="full"
                  display="flex" alignItems="center" justifyContent="center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>

        </Flex>
      </Box>
    </Box>
  );
};

export default PartnerApply;
