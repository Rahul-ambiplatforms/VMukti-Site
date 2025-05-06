import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import PageContentWrapper from "../../components/PageContentWrapper";
import AdvancedSurveillance from "../../components/AdvancedSurveillance";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const MotionImage = motion(Image);

const popAnimation = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const OurServings = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const svgSize = useBreakpointValue({ base: "13px", md: "25px" });

  useEffect(() => {
    // Ensure animations are initialized properly
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay to ensure smooth loading
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const heading = [
    { text: "Customizable", color: "#3F77A5" }, //blue
    { text: "AI solutions tailored\nfor", color: "#000" }, //use \n to make a new line
    { text: "every need", color: "#DB7B3A" }, //orange
  ];
  const description =
    "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management. Enhance safety and efficiency with scalable, future-ready technology.";
  const image = "Responsive_Screen_Mockup.png";
  return (
    <>
      {isLoaded && (
        <PageContentWrapper>
          {/* <TripleImageSection mt heading={heading} description={description} images={images} /> */}
          <Box
            as="section"
            backgroundColor="#E7E7E7"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="2%"
            mb="5%"
            position="relative"
          >
            <Flex direction="column">
              <Box position="relative" mb="20px" w={{md:"55%"}}>
                {/* Title Text (above the white rectangle) */}
                <MotionText
                  fontSize={{ base: "24px", md: "48px" }}
                  fontWeight="600"
                  lineHeight="normal"
                  textAlign="left"
                  position="relative"
                  zIndex="1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  {/* error may occur */}
                  {heading.map((part, index) => (
                    <MotionText
                      as="span"
                      color={part.color}
                      display="inline"
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                    >
                      {index !== 0 && " "}
                      {part.text}
                    </MotionText>
                  ))}

                  {/* Static blue dot with animation */}
                  <MotionText
                    as="span"
                    color="#3F77A5"
                    display="inline"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                      // error may occur
                      delay: heading.length * 0.1,
                    }}
                  >
                    .
                  </MotionText>
                </MotionText>
              </Box>

              {/* Arrow & Description - Flex Container */}
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                alignItems="start"
                justifyContent="left"
                mt="2%"
              >
                {/* Left Section: Arrow, Description, Button */}
                <Box
                  flex="1"
                  maxWidth={{ base: "100%", md: "30%" }}
                  textAlign={{ base: "center", md: "left" }}
                  position="relative"
                  //   mt="2%"
                  //   bg="red"
                >
                  {/* Arrow Animation */}
                  <MotionBox
                    mb="8px"
                    display="flex"
                    justifyContent="flex-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <svg
                      width={svgSize}
                      height={svgSize}
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </MotionBox>

                  {/* Description Animation */}
                  <MotionText
                    color="#000000"
                    fontWeight="500"
                    textAlign="left"
                    fontSize={{ base: "12px", md: "16px" }}
                    lineHeight="1.2"
                    maxW={{ base: "90%", md: "70%" }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    {/* error may occur */}
                    {description}
                  </MotionText>
                </Box>
              </Flex>
            </Flex>

            <Flex
              // justifyContent="space-between"
              alignItems="flex-end" // Changed to align bottoms
              direction={{ base: "column", md: "row" }}
              mt={{ base: "5%", md: "-11%" }} // Dangerous code
              mb={{ base: "25%", md: "0%" }}
              gap="3"
              width="100%"
              position="relative"
              // zIndex="1" // I added this code
              //   bg="red"
            >
              {/* Small image (35% width) - Fixed height */}
              <Box
                // flex="0 0 30%"
                flex="0 0 20%"
                display={{ base: "none", md: "flex" }}
                backgroundColor="white"
                height={{ base: "200px", md: "250px", lg: "336px" }}
                width={{ base: "200px", md: "250px", lg: "336px" }}
                aspectRatio={1}
                borderRadius="24px"
                flexShrink="0"
              />
              {/* large image start*/}
              <Flex
                width="100%"
                position="relative"
                justifyContent="center"
                backgroundColor="white"
                borderRadius="20px"
                overflow="visible"
                paddingTop="56.25%" // Aspect ratio of 16:9 (height = 56.25% of width)
              >
                <MotionImage
                  position="absolute"
                  top={{ base: "0", md: "-5%" }}
                  src={`${process.env.PUBLIC_URL}/assets/${image}`}
                  alt="Responsive screen mockup"
                  width={{ base: "100%", md: "100%" }}
                  // maxWidth="800px" // Optional: Limit the maximum width for better scaling
                  borderRadius="24px"
                  initial="hidden"
                  whileInView="visible"
                  variants={popAnimation}
                  viewport={{ once: false }}
                />
              </Flex>
              {/* large image end*/}
            </Flex>
          </Box>
          <AdvancedSurveillance />
        </PageContentWrapper>
      )}
    </>
  );
};

export default OurServings;
