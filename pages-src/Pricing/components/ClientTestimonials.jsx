'use client';
import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

/* ─── Testimonial Data ──────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    review:
      "The VMS from VMukti Solutions has been a valuable addition to our operations. It's user-friendly, easy to set up, and offers fast alerts along with remote access. These features have greatly enhanced our ability to monitor in real-time and respond swiftly, making our daily tasks more efficient and streamlined.",
    name: "Aniket Pandya",
    company: "BSNL",
    avatar: "/images/testimonial_1.jpg",
  },
  {
    id: 2,
    review:
      "VMukti Solutions has elevated our security with their custom visual surveillance systems. The AI-powered alerts are precisely tailored to our unique needs, providing intelligent monitoring and dependable protection around the clock.",
    name: "Rajesh Mehta",
    company: "Reliance Industries",
    avatar: "/images/testimonial_2.jpg",
  },
  {
    id: 3,
    review:
      "VMukti Solutions provided exceptional live webcasting services for our event. The seamless streaming, high-quality visuals, and reliable support ensured a smooth experience. Highly recommend their team for any live broadcasting needs!",
    name: "Sunita Sharma",
    company: "Tata Consultancy Services",
    avatar: "/images/testimonial_3.jpg",
  },
  {
    id: 4,
    review:
      "ArcisAI's edge AI camera deployment transformed our factory floor monitoring. The PPE detection and intrusion alerts work flawlessly in low-light conditions. Zero false alarms in six months of usage.",
    name: "Vikram Nair",
    company: "Larsen & Toubro",
    avatar: "/images/testimonial_4.jpg",
  },
  {
    id: 5,
    review:
      "We deployed ArcisAI across 14 retail branches. The centralized VMS dashboard with AI search saved our security team hours every week. Integration was seamless and the support team was excellent.",
    name: "Pooja Agarwal",
    company: "Shoppers Stop",
    avatar: "/images/testimonial_5.jpg",
  },
];

/* ─── Card ──────────────────────────────────────────────────────────── */
const TestimonialCard = ({ review, name, company, avatar }) => (
  <Box
    w={{ base: "100%", md: "311px" }}
    minW={{ base: "100%", md: "311px" }}
    h={{ base: "auto", md: "480px" }}
    bg="white"
    borderRadius="24px"
    p="32px"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    flexShrink={0}
  >
    {/* Quote mark */}
    <Box>
      <Image
        src="/assets/quote.svg"
        alt="quote"
        w="48px"
        h="auto"
        mb="16px"
      />

      {/* Review text */}
      <Text
        fontSize="14px"
        lineHeight="1.7"
        color="#2D2D2D"
        fontWeight="400"
      >
        {review}
      </Text>
    </Box>

    {/* Author */}
    <Flex align="center" gap="14px" mt="24px">
      <Box
        w="56px"
        h="56px"
        borderRadius="12px"
        overflow="hidden"
        bg="#1a1a2e"
        flexShrink={0}
      >
        <Image
          src={avatar}
          alt={name}
          w="100%"
          h="100%"
          objectFit="cover"
          fallback={
            <Box
              w="56px"
              h="56px"
              bg="#1a1a2e"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="18px" fontWeight="700">
                {name.charAt(0)}
              </Text>
            </Box>
          }
        />
      </Box>
      <Box>
        <Text fontWeight="700" fontSize="14px" color="#1A1A1A">
          {name}
        </Text>
        <Text fontSize="13px" color="#777" mt="2px">
          {company}
        </Text>
      </Box>
    </Flex>
  </Box>
);

/* ─── Section ───────────────────────────────────────────────────────── */
const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = useBreakpointValue({ base: 1, md: 2, lg: 3 }) ?? 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <Box
      as="section"
      bg="transparent"
      w="100%"
      maxW="1456px"
      mx="auto"
      px={{ base: "20px", md: "28px" }}
      py={{ base: "48px", md: "64px" }}
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "28px", md: "24px" }}
        align={{ base: "stretch", lg: "stretch" }}
        position="relative"
      >
        {/* ── Title + Nav column (first in DOM → top on mobile, right on desktop) ── */}
        <Box
          w={{ base: "100%", lg: "311px" }}
          minW={{ base: "auto", lg: "311px" }}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "flex-start", lg: "space-between" }}
          pb="8px"
          flexShrink={0}
          order={{ base: 0, lg: 1 }}
        >
          {/* Orange arrow icon */}
          <Box mb="16px">
            <Box w="48px" h="48px" display="flex" alignItems="center" justifyContent="center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 8L32 32M32 32V14M32 32H14"
                  stroke="#3F77A5"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>

          {/* Heading */}
          <Heading
            fontSize={{ base: "28px", md: "32px", lg: "40px" }}
            fontWeight="700"
            lineHeight="1.2"
            color="#1A1A1A"
          >
            <Box as="span" color="#E8834A">Experiences{" "}</Box>
            from Our Clients
          </Heading>

          {/* Navigation arrows */}
          <Flex gap="12px" mt={{ base: "20px", lg: "auto" }} pt={{ base: "0", lg: "32px" }} align="center">
            <IconButton
              aria-label="Previous testimonial"
              icon={<ArrowBackIcon boxSize={5} />}
              onClick={prev}
              isDisabled={currentIndex === 0}
              variant="outline"
              borderRadius="full"
              w="48px"
              h="48px"
              bg="white"
              borderColor="#CCCCCC"
              color="#555"
              _hover={{ borderColor: "#3F77A5", color: "#3F77A5" }}
              _disabled={{ opacity: 0.35, cursor: "not-allowed" }}
            />
            <IconButton
              aria-label="Next testimonial"
              icon={<ArrowForwardIcon boxSize={5} />}
              onClick={next}
              isDisabled={currentIndex >= maxIndex}
              borderRadius="full"
              w="48px"
              h="48px"
              bg="#3F77A5"
              color="white"
              _hover={{ bg: "#2d5f88" }}
              _disabled={{ opacity: 0.35, cursor: "not-allowed" }}
            />
          </Flex>
        </Box>

        {/* ── Sliding cards track ── */}
        <Box
          flex="1"
          minW="0"
          maxW={{ lg: "981px" }}
          overflow="hidden"
          order={{ base: 1, lg: 0 }}
        >
          <Flex
            gap={{ base: "16px", md: "24px" }}
            transform={`translateX(calc(-${currentIndex} * (311px + 24px)))`}
            transition="transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
            align="stretch"
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientTestimonials;
