'use client';
import { Box, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MarketingIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="7" stroke={color} strokeWidth="1.8" />
    <text x="20" y="24" textAnchor="middle" fontSize="10" fill={color} fontWeight="600">$</text>
    <line x1="20" y1="2" x2="20" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="20" y1="32" x2="20" y2="38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="2" y1="20" x2="8" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="5.86" y1="5.86" x2="10.1" y2="10.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="29.9" y1="29.9" x2="34.14" y2="34.14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="34.14" y1="5.86" x2="29.9" y2="10.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="10.1" y1="29.9" x2="5.86" y2="34.14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TrainingIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="8" width="28" height="20" rx="3" stroke={color} strokeWidth="1.8" />
    <line x1="6" y1="14" x2="34" y2="14" stroke={color} strokeWidth="1.5" />
    <circle cx="20" cy="32" r="3" stroke={color} strokeWidth="1.8" />
    <line x1="14" y1="35" x2="26" y2="35" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="26" cy="5" r="3.5" fill={color} />
    <path d="M24 5l1.5 1.5L28 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 10v10c0 9 6.3 17.4 14 20 7.7-2.6 14-11 14-20V10L20 4z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M14 20l4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeadsetIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="14" r="5" stroke={color} strokeWidth="1.8" />
    <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="20" cy="14" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="11" y1="14" x2="8" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="29" y1="14" x2="32" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BoxIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 12v16l14 8 14-8V12L20 4z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M20 4v24M6 12l14 8 14-8" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const PeopleIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="12" r="4" stroke={color} strokeWidth="1.8" />
    <path d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="10" cy="14" r="3" stroke={color} strokeWidth="1.5" />
    <path d="M4 28c0-3.3 2.7-6 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="14" r="3" stroke={color} strokeWidth="1.5" />
    <path d="M36 28c0-3.3-2.7-6-6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="4" x2="20" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="17" y1="5" x2="20" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="23" y1="5" x2="20" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const HandshakeIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M4 16l8 8 4-2 6 6 4-2 8-8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16l5-5h6l5 5-5 2-5-2H4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M36 16l-5-5h-6l-5 5 5 2 5-2h6z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="26" r="2" fill={color} />
  </svg>
);

const ManagerIcon = ({ color }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="14" r="5" stroke={color} strokeWidth="1.8" />
    <path d="M12 30c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="20" cy="14" r="12" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="8" cy="14" r="2" fill={color} />
    <circle cx="32" cy="14" r="2" fill={color} />
    <circle cx="20" cy="2" r="2" fill={color} />
    <line x1="10" y1="14" x2="14" y2="14" stroke={color} strokeWidth="1.2" />
    <line x1="26" y1="14" x2="30" y2="14" stroke={color} strokeWidth="1.2" />
    <line x1="20" y1="4" x2="20" y2="8" stroke={color} strokeWidth="1.2" />
  </svg>
);

const benefits = [
  {
    id: "marketing",
    title: "Marketing Development Funds",
    desc: "Co-marketing budgets for qualified partners",
    icon: MarketingIcon,
    variant: "light",
  },
  {
    id: "training",
    title: "Training & Certification",
    desc: "Comprehensive online and in-person training programs",
    icon: TrainingIcon,
    variant: "white",
  },
  {
    id: "deal",
    title: "Deal Registration & Protection",
    desc: "Protect your opportunities with our deal registration system",
    icon: ShieldIcon,
    variant: "dark",
  },
  {
    id: "technical",
    title: "Technical Pre-Sales Support",
    desc: "Expert technical assistance for pre-sales activities",
    icon: HeadsetIcon,
    variant: "white",
  },
  {
    id: "demo",
    title: "Demo Equipment Program",
    desc: "Access demo equipment for customer presentations",
    icon: BoxIcon,
    variant: "white",
  },
  {
    id: "lead",
    title: "Lead Sharing",
    desc: "Qualified leads from our enterprise sales team",
    icon: PeopleIcon,
    variant: "dark",
  },
  {
    id: "cobranded",
    title: "Co-Branded Materials",
    desc: "Marketing materials customized with your brand",
    icon: HandshakeIcon,
    variant: "white",
  },
  {
    id: "manager",
    title: "Dedicated Channel Manager",
    desc: "Personal support from our partner success team",
    icon: ManagerIcon,
    variant: "light",
  },
];

const variantStyles = {
  dark: {
    bg: "#3F77A5",
    titleColor: "white",
    descColor: "rgba(255,255,255,0.85)",
    dividerColor: "rgba(255,255,255,0.3)",
    iconColor: "white",
  },
  light: {
    bg: "#BECEDC",
    titleColor: "#1A1A2E",
    descColor: "#4A5568",
    dividerColor: "rgba(63,119,165,0.3)",
    iconColor: "#3F77A5",
  },
  white: {
    bg: "white",
    titleColor: "#1A1A2E",
    descColor: "#4A5568",
    dividerColor: "#E2E8F0",
    iconColor: "#3F77A5",
  },
};

const PartnerBenefits = () => {
  return (
    <Box
      px={{ base: "16px", md: "24px", lg: "34px" }}
      py={{ base: "48px", md: "64px" }}
    >
      <Box maxW="1445px" mx="auto">
        {/* Heading */}
        <Text
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={{ base: "32px", md: "40px", lg: "48px" }}
          fontWeight="600"
          color="#000000"
          textAlign="center"
          lineHeight="1"
          mb="12px"
        >
          Partner Benefits
        </Text>

        {/* Subtitle */}
        <Text
          fontFamily="'Wix Madefor Display', sans-serif"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="400"
          color="#4A5568"
          textAlign="center"
          mb={{ base: "36px", md: "48px" }}
        >
          Comprehensive support to help you succeed with VMukti
        </Text>

        {/* Grid */}
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: "16px", md: "20px" }}
        >
          {benefits.map((benefit, i) => {
            const styles = variantStyles[benefit.variant];
            const Icon = benefit.icon;
            return (
              <MotionBox
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
                bg={styles.bg}
                borderRadius="16px"
                p={{ base: "20px", md: "24px" }}
                minH={{ base: "auto", md: "199px" }}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                border={benefit.variant === "white" ? "1px solid #E2E8F0" : "none"}
              >
                {/* Icon */}
                <Box mb="14px">
                  <Icon color={styles.iconColor} />
                </Box>

                {/* Title */}
                <Text
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize={{ base: "15px", md: "16px" }}
                  fontWeight="700"
                  color={styles.titleColor}
                  lineHeight="1.3"
                  mb="10px"
                >
                  {benefit.title}
                </Text>

                {/* Divider */}
                <Box h="1.5px" bg={styles.dividerColor} mb="10px" />

                {/* Description */}
                <Text
                  fontFamily="'Wix Madefor Display', sans-serif"
                  fontSize={{ base: "13px", md: "14px" }}
                  fontWeight="400"
                  color={styles.descColor}
                  lineHeight="1.5"
                >
                  {benefit.desc}
                </Text>
              </MotionBox>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default PartnerBenefits;
