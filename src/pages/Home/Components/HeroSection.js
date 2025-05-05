// src/components/HeroSection/index.js
import React, { useRef } from "react";
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
import { Link } from "react-router-dom";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Motion components
const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const HeroSection = () => {
  
  const imageRef = useRef(null); // Reference for the image
  const sectionRef = useRef(null); // Reference for the section containing the image
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.9, triggerOnce: false });

  // useEffect(() => {
  const imageScaleAnimation = () => {
    console.log("inView");
    gsap.to(imageRef.current, {
      y: 40,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  };

  const hoverOutAnimation = () => {
    gsap.killTweensOf(imageRef.current);
    gsap.to(imageRef.current, {
      y: 0,
    });
  };

  // Cleanup function
  // return () => {
  //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  // };
  // }, []);

  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });

  return (
    <Box bg="#E7E7E7" position="relative">
      {/* Background Ellipse */}
      <Box
        position="absolute"
        top="0"
        left="15%"
        transform="translateX(-50%)"
        width={ellipseSize}
        height={ellipseSize}
        bg="#3F77A5"
        borderRadius="50%"
        zIndex={0}
        opacity={0.12}
        filter="blur(100px)"
        display={{ base: "none", md: "block" }}
        ref={sectionRef}
      />

      {/* above="md" */}
      <Show above="md">
        {/* Decorative Boxes */}
        <Flex
          position="absolute"
          top={{ md: "20%" }}
          bottom={{ base: "59%" }}
          left={{ base: "80%", md: "40%" }}
          transform="translateX(-50%)"
          gap={4}
          zIndex={0}
          width="100%"
          justifyContent="center"
          pt={{ base: "10vh", md: "8vh", lg: "20%" }}
        >
          <Box
            display={{ base: "none", md: "block", lg: "block" }}
            height={{ base: "180px", md: "120px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#BECEDC"
            borderRadius="24px"
            mt={{ base: "80px", md: "120px", lg: "15%" }}
          />
          <Box
            display={{ base: "none", md: "block", lg: "block" }}
            height={{ base: "80px", md: "120px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#FFFFFF"
            borderRadius="24px"
            mt={{ base: "40px", md: "06px", lg: "9%" }}
          />
          <Box
            display={{ base: "none", md: "block", lg: "block" }}
            height={{ base: "80px", md: "120px", lg: "188px" }}
            minHeight="50px"
            aspectRatio="1/1"
            bg="#3F77A5"
            borderRadius="24px"
          />
        </Flex>
      </Show>

      {/* Main Content */}
      <Flex
        // pl={{ base: "0", md: "2.5%" }}
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="center"
        position="relative"
        zIndex={1}
      >
        {/* Mobile View */}
        <Box
          overflow="hidden"
          width="full"
          display={{ base: "block", md: "none" }}
        >
          <Flex
            mt={{ base: "-30%" }}
            direction="column"
            position="relative"
            width="600px"
          >
            <Box
              position="absolute"
              top="10%"
              right={"0"}
              width="170px"
              height="188px"
              bg="#BECEDC"
              borderRadius="24px 0 0 0"
              zIndex={9}
            />
            {/* This is for Mobile */}
            <MotionImage
              // ml="-20%"
              mt="2%"
              // pb="5%"
              src="/assets/tablet.png"
              alt="Tablet"
              zIndex={1}
              width="500px"
              height="600px"
              objectFit="cover"
              initial={{ scale: 0.6, opacity: 1 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0.7 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.9 }}
            />
            <Flex
              direction="column"
              alignContent="flex-end"
              justifyContent="flex-end"
              ml="16%"
              mt="-15%"
              mb="2%" // jenil
              // bg="red"
            >
              <Box width="13px" height="13px" alignSelf="flex-start" ml="2%">
                <svg
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <path
                    d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Box>
              <Text
                fontWeight="500"
                lineHeight="normal"
                maxW={{ base: "50%", md: "50%" }}
                fontSize={{ base: "12px", md: "16px" }}
                width={{ base: "60%", md: "50%" }}
                textAlign="justify"
                fontStyle="normal"
                ml="10px"
                mt={"1%"}
              >
                Got visuals piling up? Our AI turns them into answers—fast. It's
                like giving your cameras a brain to spot what matters and fix
                your headaches on the spot.
              </Text>
            </Flex>
          </Flex>
        </Box>

        {/* Desktop View */}

        {/* Content Section */}
        <Box
          flex="1"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition={{ base: "center", md: "right" }}
          minH={{ base: "20vh" }}
          zIndex={1}
          ml={{ base: "5%", md: "0" }}
        >
          {/* Animated Heading */}
          <MotionBox
            ref={ref}
            fontSize={{ base: "32px", md: "48px", lg: "100px" }}
            fontWeight="600"
            fontStyle="normal"
            lineHeight="1.2"
            zIndex={1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // bg="red"
          >
            <Text as="span" color="#3F77A5">
              Advanced{" "}
            </Text>
            <Text as="span" color="#000">
              Computer Vision & Image{" "}
            </Text>
            {/* <Text as="span" color="#000">
              Image
            </Text> */}
            &nbsp;
            <Text as="span" color="#DB7B3A">
              Intelligence
            </Text>
            <Text as="span" color="#3F77A5">
              .
            </Text>{" "}
            {/*Remove space*/}
          </MotionBox>

          <Flex>
            <Flex direction="column" zIndex={1}>
              {" "}
              {/* Desktop Subtext */}
              {!useBreakpointValue({ base: true, md: false }) && (
                <Flex mt="16px" direction={{ base: "column", md: "row" }}>
                  <MotionBox
                    mt="2%"
                    display="flex"
                    alignItems="center"
                    gap={8}
                    initial={{ opacity: 0, x: -80 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -50 }
                    }
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: false }}
                  >
                    <Box width="30px" height="33px">
                      <svg
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "block" }}
                      >
                        <path
                          d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    </Box>
                    <Text
                      fontWeight="500"
                      lineHeight="100%"
                      maxW={{ base: "220px", md: "45%" }}
                      fontSize={{ base: "12px", md: "16px" }}
                      width="45%"
                      textAlign="justify"
                    >
                      Got visuals piling up? Our AI turns them into
                      answers—fast. It's like giving your cameras a brain to
                      spot what matters and fix your headaches on the spot.
                    </Text>
                  </MotionBox>
                </Flex>
              )}
              {/* Robotic Hand and Button */}
              <Flex
                position="relative"
                mt={{ base: "1", md: "-10%" }}
                ml={{ base: "0", md: "-40px" }}
                // py={{base:"15%",md:"0"}}
                width="fit-content"
              >
                <Image
                  ref={imageRef}
                  src="/assets/robohand.png"
                  alt="Robotic Hand"
                  display={{ base: "none", md: "block" }}
                />

                <MotionButton
                  onMouseEnter={() => imageScaleAnimation()}
                  onMouseLeave={() => hoverOutAnimation()}
                  position="absolute"
                  padding="24px"
                  top={{ base: "20%", sm: "20%", md: "37%" }}
                  right={{ base: "", sm: "", md: "8%" }}
                  bg="white"
                  height={{ base: "34px", sm: "50px" }}
                  borderRadius="20px"
                  color="#3F77A5"
                  as={Link}
                  to="/contactus"
                  gap="2"
                  display="flex"
                  _hover={{
                    bg: "#E0F2FE",
                    color: "#2C5E84",
                  }}
                  fontSize={{ base: "14px", sm: "16px" }}
                  // animate={{
                  //     x: [0, 5, -5, 5, -5, 0],
                  //     y: [0, -5, 5, -5, 5, 0],
                  // }}
                  // transition={{
                  //     duration: 0.5,
                  //     repeat: Infinity,
                  //     ease: "easeInOut",
                  // }}
                  animate={{
                    x: [0, 5, 0, -5, 0],
                    y: [0, 0, 5, 0, -5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.3,
                    ease: "linear",
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
            </Flex>

            {!useBreakpointValue({ base: true, md: false }) && (
              <MotionImage
                src="/assets/tablet1.webp"
                position="absolute"
                bottom="-8%"
                // bg={{base:"black",sm:"darkred",md:"yellow",lg:"darkorange",xl:"blue"}}
                right={["-10px", "-20px", "-30px", "-30px"]} // Adjust for breakpoints: [sm, md, lg, xl]
                width={["320px", "480px", "660px", "840px"]} // Responsive widths
                // height="auto"
                // zIndex={1}
                initial={{ scale: 0.8, opacity: 1 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              />
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
