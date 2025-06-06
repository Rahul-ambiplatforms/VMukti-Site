import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
// import ImagePop from "../../../components/Animation/Image/ImagePop";
import PageContentWrapper from "../../../components/PageContentWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SurveillanceSoftware = () => {
  const [imageHeight, setImageHeight] = useState("100dvh");
  const imageRef = useRef(null); // Reference for the image
  const sectionRef = useRef(null); // Reference for the section containing the image
  //I have to solve the yarn build error here...
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const scaleValue = screenWidth < 768 ? 1.5 : 1.1; // Tailwind's md breakpoint is 768px
    // Build Error
    const imageScaleAnimation = gsap.to(imageRef.current, {
      scale: scaleValue,
      scrollTrigger: {
        trigger: sectionRef.current, // Element triggering the animation
        start: "top center", // Start when the top of the trigger hits the center of the viewport
        end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
        scrub: true, // Sync the animation to the scroll position
      },
    });
  }, []);

  const handleImageLoad = (event) => {
    setImageHeight(event.target.naturalHeight);
  };

  return (
    <PageContentWrapper noPadding="force">
      <Flex
        direction="column"
        position="relative"
        alignItems="center"
        gap={4}
        ref={sectionRef}
        overflow={{ base: "hidden", md: "visible" }}
        borderRadius="24px"
        height={{ base: "fit-content", md: { imageHeight } }}
        mb={{ base: "0", md: "40%" }}
      >
        {/* main box */}
        {/* heading text */}
        <Box zIndex={1}>
          {/* <PageContentWrapper> */}
            <Box
              fontSize={{ base: "24px", md: "48px" }}
              justifyContent="center"
              textAlign="center"
              fontWeight="600"
              // w="100%"
              // bg="red"
            >
              <HeadingAnimation>
                <Text as="span" color="#3F77A5">
                  Deep Learning{" "}
                </Text>
                <Text as="span">Algorithms & </Text>
                <br />
                <Text as="span">Adaptive AI </Text>
                <Text as="span" color="#db7b3a">
                  Surveillance Software
                </Text>
                <Text as="span" color="#3F77A5">{/* I added this */}
                  .
                </Text>
              </HeadingAnimation>
            </Box>
          {/* </PageContentWrapper> */}
        </Box>
        {/* main content */}
        <Flex
          order="2"
          width="100%"
          zIndex={1}
          mt={{ base: "20%", md: "0%" }}
        >
          <Box
            mx={{ base: "0%", md: "auto" }}
            px={{ base: "4%", md: "2%" }}
            maxWidth="1565px"
            width="100%"

          >

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              gap={4}
              width="100%"

            >
              {/* first white box */}
              <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                bg="white"
                borderRadius="24px"
                p={{ base: "5%", md: "2%" }}
              >
                <Flex direction="column" gap={4}>
                  {/* box heading */}
                  <Flex direction="column">
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="extrabold">
                      Security That Gets Smarter
                    </Text>
                    <Box width="20px" height="2px" bg="#3F77A5" />
                  </Flex>
                  {/* box content */}
                  <Text
                    width={{ base: "70%", sm: "100%", md: "25%", lg: "20%", xl: "15%" }}
                    fontWeight={500}
                    fontSize={{ base: "12px", md: "14px" }}
                    lineHeight={{ base: "1.2", md: "100%" }}
                  >
                    Want a system that learns your world? Our AI video surveillance
                    keeps up, adapts, and stays ahead of trouble—all on its own.
                  </Text>
                </Flex>
              </Flex>
              {/* second white box */}
              <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                bg="white"
                borderRadius="24px"
                p={{ base: "5%", md: "2%" }}
                gap={4}
              >
                {/* box heading */}
                <Flex direction="column" width="100%">
                  <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="extrabold ">
                    How It Helps You Out
                  </Text>
                  <Box width="20px" height="2px" bg="#3F77A5" />
                </Flex>

                {/* box content */}
                <List
                  spacing={1}
                  fontWeight={500}
                  fontSize={{ base: "12px", md: "14px" }}
                  styleType="disc"
                  ml={{ base: "5%", md: "2%" }}
                >
                  <ListItem>Self-Improving AI</ListItem>
                  <ListItem>Pattern Discovery</ListItem>
                  <ListItem>Smart Adaptation</ListItem>
                  <ListItem>Predictive Intelligence</ListItem>
                </List>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        {/* background image */}


        <Box
          // bg="red"
          order="1"
          position={{ base: "static", md: "absolute" }}
          top={{ sm: "50%", md: "35%", lg: "20%", xl: "0%" }}
          // mx="-5%"
          zIndex={{ base: "1", md: "2" }}
        >
          <Image
            ref={imageRef} // Apply ref to the image
            // height="100%"
            // src="../assets/surveillancemock.png"
            src={`${process.env.PUBLIC_URL}/assets/surveillancemock.png`}
            onLoad={handleImageLoad}
            transform={{ base: "scale(1.2)", md: "scale(0.6)" }}
            clipPath="inset(0)" // Ensures image does not affect layout
          />
        </Box>
      </Flex>
    </PageContentWrapper>
  );
};

export default SurveillanceSoftware;