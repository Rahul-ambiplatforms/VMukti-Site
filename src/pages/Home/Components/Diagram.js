import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../../components/Animation/Text/SubHeadingAnimation";

// const nodes = [
//   { label: 'Image', position: '15%', side: 'left' },
//   { label: 'Video', position: '30%', side: 'left' },
//   { label: 'Live links', position: '45%', side: 'left' },
//   { label: 'Data', position: '60%', side: 'left' },
//   { label: 'Text', position: '75%', side: 'left' },
//   { label: 'Image', position: '15%', side: 'right' },
//   { label: 'Video', position: '30%', side: 'right' },
//   { label: 'Text', position: '45%', side: 'right' },
//   { label: 'Data', position: '60%', side: 'right' },
//   { label: 'Text', position: '75%', side: 'right' },
// ]

const Diagram = () => {
  // Responsive values
  // const containerWidth = useBreakpointValue({ base: '100%', md: '1446px' })
  const containerHeight = useBreakpointValue({ base: "auto", md: "760px" });
  const leftPanelWidth = useBreakpointValue(["100%", "100%", "100%", "32%"]);
  const rightPanelPadding = useBreakpointValue({ base: "4", md: "8" });
  const svgSize = useBreakpointValue({ base: "25", md: "25" });
  return (
    <Flex
      height={containerHeight}
      borderRadius="24px"
      overflow="hidden"
      bg="white"
      mt={{ base: "0", md: "10%" }}
      // direction={{ base: "column", md: "row" }}
      direction={["column", "column", "column", "row"]}
      // mb="1%"
      position="relative"
      zIndex={1}
    >
      {/* Left Panel */}
      <Box
        bg="#3F77A5"
        width={leftPanelWidth}
        height={["90%", "90%", "90%", "100%"]}
        color="white"
        p={{ base: "6", md: "8" }} // Smaller padding on small screens
        display="flex"
        flexDirection="column"
        textAlign={{ base: "left", md: "left" }} // Center text on small screens
        zIndex={1} // Bring forward
        borderRadius={"24px"}
      >
        <HeadingAnimation>
          <Text
            w={["100%", "100%", "95%", "100%"]}
            fontSize={["24px", "24px", "32px", "48px"]}
            fontWeight="500"
            as="h2"
            lineHeight={{ base: "1.2", md: "1.2" }} // Adjusts vertical spacing
          >
            Our Video Intelligence Platform: VisualBot
          </Text>
        </HeadingAnimation>
        <SubHeadingAnimation>
          <Flex
            align="flex-start"
            mt="5%"
            // ml={{ md: "5%" }}
            gap={5}
            direction={{ base: "column", md: "column" }}
            // pb={{ base: "25%" }}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 33 33"
                fill="none"
                bg="red"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="white"
                />
              </svg>
            </Box>

            <Text
              color="white"
              fontWeight="500"
              w={["100%","100%","80%","100%"]}
              fontSize={{base:"14px", md: "16px" }}
              lineHeight={{base:"18px", md: "20px" }}
              mt="-1%"
              align="justify"
              as="p"
            >
              Seamlessly deploy and scale your enterprise-grade computer vision
              with our AI-first platform. Engineered for performance, our API
              suite plugs directly into your ecosystem delivering real-time
              visual intelligence, automation, and precision decisioning at
              scale.
            </Text>
          </Flex>
        </SubHeadingAnimation>
      </Box>

      {/* Right Panel */}
      <Flex
        flex={1}
        p={rightPanelPadding}
        py={["5%", null, null, "20%"]}
        justifyContent="center"
        alignItems="center"
        bg="white"
        position="relative"
      >
        {/* Desktop Image */}
        <Image
          src={`${process.env.PUBLIC_URL}/assets/ai_implementation.png`}
          display={{ base: "none", md: "block" }}
        />

        {/* Mobile Image */}
        <Image
          src={`${process.env.PUBLIC_URL}/assets/ai_implementation_mobile.png`}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
    </Flex>
  );
};

export default Diagram;
