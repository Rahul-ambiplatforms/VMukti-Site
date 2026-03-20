'use client';
import { Box, Flex, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description, bg, textColor = "#1A1A2E", accentColor = "#3F77A5", borderTop }) => (
  <Box
    bg={bg}
    borderRadius="24px"
    p={{ base: "20px", md: "24px", lg: "28px" }}
    h="100%"
    display="flex"
    flexDirection="column"
    gap="10px"
    borderTop={borderTop}
  >
    <Image loading="lazy" src={icon} alt={title} w="36px" h="36px" objectFit="contain" flexShrink={0} />
    <Box>
      <Heading
        as="h3"
        fontSize={{ base: "0.9375rem", md: "1rem", lg: "1.0625rem" }}
        fontWeight="700"
        fontFamily="'Wix Madefor Display', sans-serif"
        color={textColor}
        lineHeight="1.3"
        mb="8px"
      >
        {title}
      </Heading>
      <Box w="28px" h="2.5px" bg={accentColor} borderRadius="2px" />
    </Box>
    <Text
      fontSize={{ base: "0.8125rem", md: "0.875rem", lg: "0.9375rem" }}
      fontWeight="400"
      fontFamily="'Wix Madefor Display', sans-serif"
      color={textColor === "white" ? "rgba(255,255,255,0.88)" : "rgba(26,26,46,0.72)"}
      lineHeight="1.6"
    >
      {description}
    </Text>
  </Box>
);

/* All 6 cards in order for the flat responsive grid */
const cards = [
  {
    icon: "/assets/icon-incident-management.svg",
    title: "Incident Management",
    description: "Automated alerts, escalation workflows, SOP enforcement. Full incident lifecycle tracking from detection to resolution.",
    bg: "#BECEDC", textColor: "#1A1A2E", accentColor: "#3F77A5",
  },
  {
    icon: "/assets/icon-multicamera.svg",
    title: "Multi-Camera Video Wall",
    description: "Enhance quality control and operational efficiency with AI-powered video analytics that detect defects, optimize workflows, and ensure workplace safety.",
    bg: "#FFFFFF", textColor: "#1A1A2E", accentColor: "#3F77A5",
  },
  {
    icon: "/assets/icon-realtime-dashboard.svg",
    title: "Real-Time Dashboards",
    description: "KPI dashboards for security metrics. Heat maps, occupancy, incident trends across all sites at a glance.",
    bg: "#3F77A5", textColor: "white", accentColor: "white",
  },
  {
    icon: "/assets/icon-ai-analytics.svg",
    title: "AI-Powered Analytics",
    description: "Built-in object detection, behavior analysis, anomaly detection. No third-party plugins needed — all powered natively.",
    bg: "white", textColor: "#1A1A2E", accentColor: "#3F77A5",
    borderTop: "1.5px solid #E2E8F0",
  },
  {
    icon: "/assets/icon-executive-reporting.svg",
    title: "Executive Reporting",
    description: "Automated daily/weekly reports. Board-ready dashboards. Compliance audit trails for complete accountability.",
    bg: "#3F77A5", textColor: "white", accentColor: "white",
  },
  {
    icon: "/assets/icon-cross-site.svg",
    title: "Cross-Site Coordination",
    description: "Unified view across all locations. Instant camera access from any site. Global search across your entire network.",
    bg: "white", textColor: "#1A1A2E", accentColor: "#3F77A5",
  },
];

const SectionTitle = () => (
  <MotionBox
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    mb={{ base: "32px", md: "40px", lg: "48px" }}
  >
    <Heading
      as="h2"
      fontSize={{ base: "1.875rem", md: "2.25rem", lg: "clamp(32px, 3.17vw, 48px)" }}
      fontWeight="600"
      fontFamily="'Wix Madefor Display', sans-serif"
      color="#3F77A5"
      lineHeight="1"
      letterSpacing="0"
    >
      Everything{" "}
      <Box as="span" color="#000000">You Need in</Box>
      <Box as="span" display="block" color="#DB7B3A" mt="4px">One Platform</Box>
    </Heading>
  </MotionBox>
);

const FeaturesSection = () => {
  return (
    <Box position="relative" overflow="hidden" pt={{ base: "48px", lg: "64px" }} pb={{ base: "48px", lg: "80px" }}>

      {/* Background robot image */}
      <Image
        loading="lazy"
        src="/assets/features-bg.svg"
        alt="background graphic"
        position="absolute"
        top={{ base: "60px", lg: "142px" }}
        left={{ base: "0", lg: "61px" }}
        w={{ base: "100%", lg: "880px" }}
        h={{ base: "auto", lg: "887px" }}
        objectFit="cover"
        objectPosition="top left"
        opacity={0.37}
        pointerEvents="none"
        zIndex={0}
      />

      <Box maxW="1512px" mx="auto" px={{ base: "24px", md: "32px", lg: "32px", xl: "56px" }} position="relative" zIndex={1}>

        <SectionTitle />

        {/* ── MOBILE / TABLET (< lg) — flat 2-col grid ── */}
        <Box display={{ base: "block", lg: "none" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "16px", md: "20px" }}
          >
            {cards.map((card, i) => (
              <MotionBox
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              >
                <FeatureCard {...card} />
              </MotionBox>
            ))}
          </Grid>
        </Box>

        {/* ── DESKTOP (≥ lg) — left column + staggered right grid ── */}
        <Flex display={{ base: "none", lg: "flex" }} direction="row" align="flex-start">

          {/* LEFT COLUMN */}
          <Box
            w={{ lg: "42%", xl: "44%" }}
            pr={{ lg: "24px", xl: "40px" }}
            display="flex"
            flexDirection="column"
          >
            {/* Incident Management */}
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              w="100%"
              minH={{ lg: "auto", xl: "212px" }}
            >
              <FeatureCard
                icon="/assets/icon-incident-management.svg"
                title="Incident Management"
                description="Automated alerts, escalation workflows, SOP enforcement. Full incident lifecycle tracking from detection to resolution."
                bg="#BECEDC"
                textColor="#1A1A2E"
                accentColor="#3F77A5"
              />
            </MotionBox>

            {/* Spacer */}
            <Box flex="1" minH={{ lg: "80px", xl: "180px" }} />

            {/* Cross-Site Coordination */}
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              w="100%"
              minH={{ lg: "auto", xl: "193px" }}
            >
              <FeatureCard
                icon="/assets/icon-cross-site.svg"
                title="Cross-Site Coordination"
                description="Unified view across all locations. Instant camera access from any site. Global search across your entire network."
                bg="white"
                textColor="#1A1A2E"
                accentColor="#3F77A5"
              />
            </MotionBox>
          </Box>

          {/* RIGHT SECTION — staggered 2-col grid */}
          <Box flex="1" minW={0}>
            <Grid templateColumns="1fr 1fr" gap={{ lg: "14px", xl: "20px" }}>

              {/* Row 1, Col 1 — Multi-Camera Video Wall */}
              <GridItem gridColumn="1" gridRow="1">
                <MotionBox h="100%" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}>
                  <FeatureCard
                    icon="/assets/icon-multicamera.svg"
                    title="Multi-Camera Video Wall"
                    description="Enhance quality control and operational efficiency with AI-powered video analytics that detect defects, optimize workflows, and ensure workplace safety."
                    bg="#FFFFFF" textColor="#1A1A2E" accentColor="#3F77A5"
                  />
                </MotionBox>
              </GridItem>

              {/* Row 1, Col 2 — Real-Time Dashboards */}
              <GridItem gridColumn="2" gridRow="1">
                <MotionBox h="100%" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
                  <FeatureCard
                    icon="/assets/icon-realtime-dashboard.svg"
                    title="Real-Time Dashboards"
                    description="KPI dashboards for security metrics. Heat maps, occupancy, incident trends across all sites at a glance."
                    bg="#3F77A5" textColor="white" accentColor="white"
                  />
                </MotionBox>
              </GridItem>

              {/* Row 2, Col 1 — empty */}
              <GridItem gridColumn="1" gridRow="2" />

              {/* Row 2, Col 2 — AI-Powered Analytics */}
              <GridItem gridColumn="2" gridRow="2">
                <MotionBox h="100%" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}>
                  <FeatureCard
                    icon="/assets/icon-ai-analytics.svg"
                    title="AI-Powered Analytics"
                    description="Built-in object detection, behavior analysis, anomaly detection. No third-party plugins needed — all powered natively."
                    bg="white" textColor="#1A1A2E" accentColor="#3F77A5"
                    borderTop="1.5px solid #E2E8F0"
                  />
                </MotionBox>
              </GridItem>

              {/* Row 3, Col 1 — Executive Reporting */}
              <GridItem gridColumn="1" gridRow="3">
                <MotionBox h="100%" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}>
                  <FeatureCard
                    icon="/assets/icon-executive-reporting.svg"
                    title="Executive Reporting"
                    description="Automated daily/weekly reports. Board-ready dashboards. Compliance audit trails for complete accountability."
                    bg="#3F77A5" textColor="white" accentColor="white"
                  />
                </MotionBox>
              </GridItem>

              {/* Row 3, Col 2 — empty */}
              <GridItem gridColumn="2" gridRow="3" />

            </Grid>
          </Box>
        </Flex>

      </Box>
    </Box>
  );
};

export default FeaturesSection;
