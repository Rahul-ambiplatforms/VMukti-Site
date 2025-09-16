import {
  Box,
  Grid,
  Text,
  // Image,
  useBreakpointValue,
  Flex,
  // keyframes,
} from "@chakra-ui/react";
import HeadingAnimation from "../../../components/Animation/Text/HeadingAnimation";
import ImagePop from "../../../components/Animation/Image/ImagePop";
import { useEffect, useState, useRef } from "react";
import { keyframes } from "@emotion/react"; // ✅ Correct import

// Custom hook for count-up animation with viewport detection
const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = ref.current; // Capture ref value

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use captured value in cleanup
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16); // Approx. 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return { count, ref };
};

// Component for animated count-up value
const AnimatedValue = ({ value, suffix }) => {
  const numericValue = parseInt(value.replace(/\D/g, "")); // Extract numeric value
  const { count, ref } = useCountUp(numericValue, 500);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const achievementsData = [
  {
    value: "18+",
    label: "No. of Years of Innovation",
    bgColor: "#FFFFFF",
    valueColor: "#3F77A5",
    labelColor: "#000000",
    dashColor: "#3F77A5",
  },
  {
    value: "1B+",
    label: "Number of cameras feeds",
    bgColor: "#3F77A5",
    valueColor: "#FFFFFF",
    labelColor: "#FFFFFF",
    dashColor: "#FFFFFF",
  },
  {
    value: "200M+",
    label: "Number of minutes streamed",
    bgColor: "#BECEDC",
    valueColor: "#3F77A5",
    labelColor: "#000000",
    dashColor: "#3F77A5",
  },
  {
    value: "3M+",
    label: "No. of users served",
    bgColor: "#FFFFFF",
    valueColor: "#3F77A5",
    labelColor: "#000000",
    dashColor: "#3F77A5",
  },
  {
    value: "1M+",
    label: "No. of cameras supplied",
    bgColor: "#3F77A5",
    valueColor: "#FFFFFF",
    labelColor: "#FFFFFF",
    dashColor: "#FFFFFF",
  },
  {
    value: "900+",
    label: "No. of projects completed",
    bgColor: "#BECEDC",
    valueColor: "#3F77A5",
    labelColor: "#000000",
    dashColor: "#3F77A5",
  },
];

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

const Achieved = ({ heading, description, data = achievementsData }) => {
  // --- All your responsive breakpoint values remain the same ---
  const titleFontSize = useBreakpointValue({
    base: "26px",
    md: "36px",
    lg: "48px",
  });
  const descFontSize = useBreakpointValue({
    base: "14px",
    md: "16px",
    lg: "16px",
  });
  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });
  const cardPadding = useBreakpointValue({
    base: "10px",
    md: "15px",
    lg: "20px",
  });
  const valueFontSize = useBreakpointValue({
    base: "clamp(32px, 8vw, 48px)",
    md: "clamp(48px, 6vw, 64px)",
  });
  const labelFontSize = useBreakpointValue({
    base: "clamp(12px, 2vw, 12px)",
    md: "clamp(12px, 1.5vw, 16px)",
  });
  const labelBottomMargin = useBreakpointValue({
    base: "10px",
    md: "15px",
    lg: "20px",
  });
  const titleMarginBottom = useBreakpointValue({
    base: "20px",
    md: "40px",
    lg: "70px",
  });

  return (
    <>
      {/* <Box padding={{ base: "20px", md: "20px 20px" }} position="relative" overflow="hidden"> */}
      <Flex
        position="relative"
        textAlign="center"
        justifyContent="center"
        direction={"column"}
        alignItems="center"
        py={{ base: "20px", md: "20px" }}
        backgroundColor="#E7E7E7"
        width="100%"
        overflow="hidden"
        mt="1%"
        // mr="100vw"
      >
        <HeadingAnimation>
          {heading && (
            <Text
              color="#000"
              fontSize={titleFontSize}
              fontWeight="600"
              mb={description ? "1%" : "5%"}
            >
              {heading}
            </Text>
          )}

          {description && (
            <Text
              fontSize={descFontSize}
              fontWeight="500"
              color="#000"
              mb="3%"
              w={{ base: "90%", md: "80%", lg: "90%" }}
              mx="auto"
              textAlign="center"
              lineHeight="20px"
            >
              {description}
            </Text>
          )}
        </HeadingAnimation>

        {/* Decorative elements remain the same */}
        {/* <Box
            position="absolute"
            top={{ base: "50%", md: "60%", lg: "70%" }}
            left={{ base: "60%", md: "70%", lg: "80%" }}
            transform="translate(-50%, -50%)"
            width="408px"
            height="408px"
            borderRadius="50%"
            opacity="0.12"
            background="#3F77A5"
            filter="blur(56.6px)"
            zIndex={0}
          />
          <Box
            position="absolute"
            left={{ base: "50%", md: "30%", lg: "45px" }}
            top={{ base: "0", md: "0", lg: "48px" }}
            transform={{
              base: "translateX(-50%)",
              md: "translateX(-50%)",
              lg: "none",
            }}
            width={ellipseSize}
            height={ellipseSize}
            bg="#3F77A5"
            opacity="0.12"
            filter="blur(56.6px)"
            pointerEvents="none"
            zIndex="0"
          /> */}

        <Box
          w="100%"
          mx="auto"
          overflow="hidden"
          _hover={{
            "& > div": {
              animationPlayState: "paused",
            },
          }}
        >
          <Flex
            w="max-content"
            flexWrap="nowrap"
            // w="fit-content"
            // minW="100%"
            animation={`${marqueeScroll} 15s linear infinite`}
          >
            {[...achievementsData, ...achievementsData].map((item, index) => (
              <Box
                key={index} // Added unique key for mapping
                // width={{
                //   base: "166px",
                //   md: "280px",
                // }}
                w={["166px","166px","220px","280px"]}
                mx={{ base: 1, md: 4 }}
                flexShrink={0}
                backgroundColor={item.bgColor}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={cardPadding}
                borderRadius="24px"
                position="relative"
                aspectRatio="1/1"
              >
                <Text
                  as="div"
                  fontSize={valueFontSize}
                  fontWeight="600"
                  position="absolute"
                  top="50%"
                  left="50%"
                  textAlign="center"
                  transform="translate(-50%, -50%)"
                  color={item.valueColor}
                >
                  <AnimatedValue
                    value={item.value}
                    suffix={item.value.replace(/\d+/g, "")}
                  />
                </Text>

                <Text
                  as="div"
                  fontSize={labelFontSize}
                  fontWeight="700"
                  position="absolute"
                  bottom={labelBottomMargin}
                  // ===============================================
                  // UPDATED: Applying the specific label color
                  // ===============================================
                  color={item.labelColor}
                  textAlign="center"
                  width="calc(100% - 40px)"
                  left="50%"
                  transform="translateX(-50%)"
                  wordBreak={
                    item.label === "Number of minutes streamed"
                      ? "break-word"
                      : "normal"
                  }
                  lineHeight="1.2"
                >
                  {item.label}
                  <Box
                    width="20px"
                    height="3px"
                    borderRadius="24px"
                    marginTop="5px"
                    // ===============================================
                    // UPDATED: Applying the specific dash color
                    // ===============================================
                    backgroundColor={item.dashColor}
                    mx="auto"
                  />
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      {/* </Box> */}
    </>
  );
};

export default Achieved;
