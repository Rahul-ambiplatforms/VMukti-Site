import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import ImagePop from "../../../components/Animation/Image/ImagePop";
import PageContentWrapper from "../../../components/PageContentWrapper";

const SurveillanceSoftware = () => {
  const [imageHeight, setImageHeight] = useState("100dvh");

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

        overflow={{ base: "hidden", md: "visible" }}
        borderRadius="24px"
        height={{ base: "fit-content", md: { imageHeight } }}
        mb={{ base: "0", md: "40%" }}
      >
        {/* main box */}
        {/* heading text */}
        <Box zIndex={1}>
          <PageContentWrapper>
            <Box
              fontSize={{ base: "24px", md: "48px" }}
              justifyContent="center"
              textAlign="center"
              fontWeight="600"
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
          </PageContentWrapper>
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
                    <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
                      Security That Gets Smarter
                    </Text>
                    <Box width="20px" height="2px" bg="#3F77A5" />
                  </Flex>
                  {/* box content */}
                  <Text
                    width={{ base: "100%", sm: "100%", md: "25%", lg: "20%", xl: "15%" }}
                    fontWeight={500}
                    fontSize={{ base: "12px", md: "14px" }}
                    lineHeight="100%"
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
                  <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
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
            // height="100%"
            // src="../assets/surveillancemock.png"
            src={`${process.env.PUBLIC_URL}/assets/surveillancemock.png`}
            onLoad={handleImageLoad}
            transform={{ base: "scale(1.9)", md: "scale(1)" }}
            clipPath="inset(0)" // Ensures image does not affect layout
          />
        </Box>
      </Flex>
    </PageContentWrapper>
  );
};

export default SurveillanceSoftware;