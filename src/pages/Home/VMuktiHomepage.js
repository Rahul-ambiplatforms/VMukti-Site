import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useBreakpointValue,
  Show,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import AdvancedComputerVision from "../../components/AdvancedComputerVision";
import PageContentWrapper from "../../components/PageContentWrapper";
import VideoAnalytics from "./VideoAnalytics";
import Achieved from "./Achieved";
import Diagram from "./Diagram";
import Industries from "./industriesData";
import AdvancedSurveillance from "./AdvancedSurveillance";
import ServingsDescriptionCard from "../../components/ServingsDescriptionCard";
import SurveillanceSoftware from "../../components/SurveillanceSoftware";
import ObjectDescription from "../../components/ObjectDescription";

// Motion components
const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

// StickySection component
const StickySection = ({ children }) => (
  <Box
    position="relative"
    mb="5%"
    height={`${children.length * 100}dvh`}
  >
    {children.map((child, index) => (
      <Box
        key={index}
        position="sticky"
        borderRadius="24px"
        top="0%"
        // height="fit-content"  //check out why this is not working
        zIndex={index + 1}
      >
        {child}
      </Box>
    ))}
  </Box>
);

const VMuktiHomepage = () => {
  const customData = {
    title1: "Neural Networks & Predictive",
    title2: "Intelligence.",
    cards: [
      {
        type: "image",
        label: "Data-Driven Forecasting",
        media: "/assets/ddf.png",
        description:
          "Guesses what’s around the corner—keeps you ready."
      },
      {
        type: "image",
        label: "Anomaly Detection",
        media: "/assets/ad.png",
        description:
          "Catches weird stuff in our AI camera software before it’s a"
      },
      {
        type: "image",
        label: "Workflow Optimization",
        media: "/assets/wo.png",
        description:
          "Cuts the fat from your day-to-day—runs leaner."
      },
      {
        type: "image",
        label: "High-Precision Decisioning",
        media: "/assets/hpd.png",
        description:
          "Makes snap calls you can trust, no delays"
      },
    ],
    backgroundImage: "/assets/VMukti Brochure O2 1.png",
  };
  const customData1 = {
    title1: "How We Make",
    title2: "It Work",
    subtitle: "Real-Time Monitoring",
    cards: [
      {
        type: "image",
        label: "AI-Powered Visual Processing",
        media: "/assets/ai1.png",
        description:
          "Digs into video live—grabs what’s happening, no waiting."
      },
      {
        type: "image",
        label: "Multi-Modal Recognition",
        media: "/assets/mmr.png",
        description:
          "Ties together motion, images, and surroundings for the full picture."
      },
      {
        type: "image",
        label: "Scene Understanding",
        media: "/assets/su.png",
        description:
          "Figures out what’s what—people, actions, where stuff is—so you’re never lost."
      },
      {
        type: "image",
        label: "Automated Decision-Making",
        media: "/assets/su2.png",
        description:
          "Turns video chaos into clear info our AI CCTV software can act on right away."
      },
    ],
    backgroundImage: "/assets/VMukti Brochure O2 1.png",
  };

  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <Box minH="100vh" bg="#E7E7E7" overflow="visible" position="relative">
      {/* Background Ellipse */}
      <Image
        src="/assets/Ellipse38.png"
        alt="ellipse38"
        position="absolute"
        left="0"
        top="0"
        width={ellipseSize}
        opacity="1"
        pointerEvents="none"
        zIndex="0"
      />

      <Show above="md">
        {/* Decorative Boxes */}
        <Flex
          position="absolute"
          top="5.3%"
          left="35%"
          transform="translateX(-50%)"
          gap={4}
          zIndex={0}
          width="100%"
          justifyContent="center"
          pt="10vh"
        >
          <Box
            height={{ base: "80px", md: "140px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#BECEDC"
            borderRadius="24px"
            mt={{ base: "80px", md: "160px", lg: "12%" }}
          />
          <Box
            height={{ base: "80px", md: "140px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#FFFFFF"
            borderRadius="24px"
            mt={{ base: "40px", md: "80px", lg: "6%" }}
          />
          <Box
            height={{ base: "80px", md: "140px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#3F77A5"
            borderRadius="24px"
          />
        </Flex>
      </Show>
      {/* Main Content */}
      <Flex
        pl={{ base: "1%", md: "2.5%" }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        h="100%"
        position="relative"
        zIndex={1}  
      >
        {/* Left Side */}
        <MotionImage
          src="/assets/tablet.png"
          position={{ base: "static", md: "absolute" }}
          right="0"
          zIndex={1}
          initial={{ scale: 0.8, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        />
        <Box
          flex="1"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: "center", md: "right" }}
          minH={{ base: "40vh", md: "80vh" }}
          zIndex={1}
        >
          {/* Animated Heading */}
          <MotionBox
            ref={ref}
            fontSize={{ base: "48px", md: "75px", lg: "100px" }}
            fontWeight="600"
            lineHeight="140%"
            zIndex={1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text as="span" color="#000">Unlocking the </Text>
            <Text as="span" color="#3F77A5">Power of </Text>
            <br />
            <Text as="span" color="#3F77A5">Data</Text>
            <Text as="span" color="#000"> with </Text>
            <Text as="span" color="#DB7B3A">AI.</Text>
          </MotionBox>

          {/* Subtext */}
          <Flex mt="16px" direction={{ base: "column", md: "row" }}>
            <MotionBox
              display="flex"
              alignItems="center"
              gap={3}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              ref={ref}
              viewport={{ once: false }}
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="#3F77A5"
                />
              </svg>
              <Text
                fontWeight="500"
                lineHeight="100%"
                maxW={{ base: "90%", md: "60%" }}
                fontSize={{ base: "14px", md: "16px" }}
                width="50%"
              >
                Got visuals piling up? Our AI turns them into answers—fast. It’s like giving your cameras a brain to spot what matters and fix your headaches on the spot.
              </Text>
            </MotionBox>
          </Flex>

          {/* Robotic Hand and Button */}
          <Flex
            position="relative"
            mt={{ base: "10px", md: "-10%" }}
            ml={{ base: "0", md: "-40px" }}
            // alignItems={{ base: "flex-start", sm: "center" }}
            // direction={{ base: "column", sm: "row" }}
            width="fit-content"
          >

            <Image src="/assets/robohand.png" alt="Robotic Hand" display={{ base: "none", md: "block" }} />
            <Image src="/assets/robohand2.png" alt="Robotic Hand" display={{ base: "block", md: "none" }} height="auto" width="50%" />
            <MotionButton
              // order="1"
              position="absolute"
              top={{ base: "20%", sm: "20%", md: "35%" }}
              right={{ base: "25%", sm: "35%", md: "0%" }}
              bg="white"
              height={{ base: "34px", sm: "50px" }}
              borderRadius="20px"
              color="#3F77A5"
              as={Link}
              to="/contactus"
              gap="2"
              _hover={{
                bg: "#E0F2FE",
                color: "#2C5E84",
              }}
              fontSize={{ base: "12px", sm: "16px" }}
              animate={{
                x: [0, 5, -5, 5, -5, 0],
                y: [0, -5, 5, -5, 5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Book Demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
                  fill="#3F77A5"
                />
              </svg>
            </MotionButton>
          </Flex>
        </Box>
      </Flex>

      {/* Page Content */}
      <PageContentWrapper>
        <AdvancedComputerVision {...customData1} />
        <Flex mt={"5%"} direction="column">
          <ObjectDescription
            description={`Catch Everything,\n Miss Nothing`}
            image="../assets/objectdetection.png"
            list={["Precision Tracking", "Automated Alerts", "AI-Powered Recognition", "Adaptive Learning"]}
          />


        </Flex>
        <Box mt="5%" ><SurveillanceSoftware /></Box>
        <StickySection>

          <AdvancedComputerVision {...customData} />

          <VideoAnalytics />
          <AdvancedComputerVision />

        </StickySection>

      </PageContentWrapper>

      <PageContentWrapper>
        <Diagram />
      </PageContentWrapper>

      <PageContentWrapper>
        <Industries />
      </PageContentWrapper>

      <PageContentWrapper>
        <AdvancedSurveillance />
      </PageContentWrapper>
      <Achieved />
    </Box>
  );
};

export default VMuktiHomepage;
