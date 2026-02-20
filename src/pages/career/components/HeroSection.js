import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "../../../components/Animation/Text/SubHeadingAnimation";
import ImagePop from "../../../components/Animation/Image/ImagePop";

export default function HeroSection() {
  const svgSize = useBreakpointValue({ base: "13px", md: "25px" });

  return (
    <Box bg="#E7E7E7" display="flex" mb="2%">
      {/* <Container maxW="100%" px={{ base: 4, md: 0 }}> */}
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 8 }}>
        <Box flex="1" textAlign="left" position="relative">
          {/* Eclipse background */}
          <Box
            position="absolute"
            top={{ base: "20%", md: "30%", lg: "40%" }} // Adjust as needed
            left={{ base: "60%", md: "80%", lg: "100%" }} // Adjust as needed
            transform="translate(-50%, -50%)"
            width={{ base: "200px", md: "408px" }}
            height={{ base: "200px", md: "408px" }}
            borderRadius="full"
            opacity="0.12"
            background="#3F77A5"
            filter="blur(30px)"
            zIndex="0"
          />
          <HeadingAnimation>
            <Heading
              as="h1"
              size="xl"
              color="blue.600"
              mb={2}
              mt={{ base: "0%", lg: "0" }}
              fontSize={{ base: "24px", sm: "32px", md: "40px", lg: "48px" }}
              fontWeight="600"
              lineHeight="normal"
            >
              Be Part{" "}
              <Box as="span" color="black">
                of Something
              </Box>
            </Heading>
            <Heading
              as="h2"
              size="lg"
              color="orange.500"
              mb={6}
              fontSize={{ base: "24px", sm: "32px", md: "40px", lg: "48px" }}
              fontWeight="600"
              lineHeight="normal"
            >
              Bigger
            </Heading>
          </HeadingAnimation>
          <SubHeadingAnimation>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>
          </SubHeadingAnimation>
          <SubHeadingAnimation>
            <Text
              mt={{ base: "2", md: "4" }}
              color="gray.700"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="500"
              lineHeight="normal"
              zIndex={1}
            >
              We are a company that values people as much as innovation. With a
              supportive culture, exciting challenges, and endless opportunities
              for growth, we're building something meaningful. Join us and be
              part of something bigger.
            </Text>
          </SubHeadingAnimation>
          <Box
            position="absolute"
            bottom="0"
            left="0"
            width={{ base: "0", sm: "80px", md: "188px" }}
            height={{ base: "0", sm: "80px", md: "188px" }}
            flexShrink="0"
            borderRadius="24px"
            background="#BECEDC"
            display={{ base: "none", lg: "block" }}
          />
          <Box
            position="absolute"
            bottom={{ base: "0", sm: "40px", md: "100px" }}
            left={{ base: "0", sm: "100px", md: "200px" }}
            width={{ base: "0", sm: "80px", md: "188px" }}
            height={{ base: "0", sm: "80px", md: "188px" }}
            flexShrink="0"
            borderRadius="24px"
            background="#FFF"
            display={{ base: "none", lg: "block" }}
          />
        </Box>
        <Box zIndex={1}>
          <ImagePop>
            <Image loading="lazy"
              src={`${process.env.PUBLIC_URL}/assets/career.png`}
              // src={${process.env.PUBLIC_URL} /assets/career.png}
              alt="Team collaboration"
              borderRadius="md"
              aspectRatio={137 / 100}
              // width={{ base: "100%", md: "931px" }}
              // height={{ base: "auto", md: "679px" }}
            />
          </ImagePop>
        </Box>
      </Flex>
      {/* </Container> */}
    </Box>
  );
}
