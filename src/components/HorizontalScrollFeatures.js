import { useRef } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// No changes needed here, this is a perfect presentational component.
const FeatureCard = ({ feature, bgColor }) => (
  <Flex
    direction="column"
    w={{ base: "80vw", md: "85vw", lg: "92vw" }}
    h="600px"
    flexShrink={0}
    mr={{ base: "1vw", md: "2vw" }}
    align="center"
    justify="center"
  >
    <Box
      position="relative"
      w="100%"
      h={{ base: "300px", md: "450px", lg: "100%" }}
      borderRadius="20px"
      overflow="hidden"
    >
      <Image
        src={`/assets/${feature.image}`} // Make sure PUBLIC_URL is configured or use a direct path
        alt={feature.title}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Box
        position="absolute"
        bottom={{ base: 4, md: 8 }}
        left={{ base: 4, md: bgColor === "blue" ? "62%" : 8 }}
        p={{ base: 4, md: 5 }}
        w={{ base: "85%", sm: "60%", md: "30%" }}
        h="90%"
        bg="rgba(255, 255, 255, 0.95)"
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h3" fontSize={{ base: "20px", md: "24px" }} fontWeight="700" color="#000" lineHeight="30px" textAlign="center" w="70%">
          {feature.title}
        </Heading>
        <Box
          width="25px"
          height="3px"
          borderRadius="full"
          bg="#3F77A5"
          my={2}
        />
        <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }} fontWeight="500" color="#444444" lineHeight="18px" textAlign="center">
          {feature.description}
        </Text>
      </Box>
    </Box>
  </Flex>
);

/**
 * A component that creates a pinned, horizontal scrolling section for a set of feature cards.
 * @param {{ scrollData: Array<object> }} props - The props object.
 * @param {Array<object>} props.scrollData - An array of section data objects.
 */
export const HorizontalScrollFeatures = ({ scrollData = [] }) => {
  const mainContainerRef = useRef(null);

  useGSAP(
    () => {
      // Don't run GSAP if there's no data
      if (scrollData.length === 0) return;
      
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      horizontalSections.forEach((section) => {
        const track = section.querySelector(".horizontal-track");
        // Ensure track exists before trying to access its properties
        if (!track) return;
        
        const scrollAmount = track.scrollWidth - section.offsetWidth;

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top", // Pin starts when the top of the section hits the top of the viewport
            pin: true,
            scrub: 1.5,
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true, // Recalculates on window resize
          },
        });
      });
    },
    { scope: mainContainerRef, dependencies: [scrollData] } // Reruns if scrollData changes
  );

  if (!scrollData || scrollData.length === 0) {
    return null; // Don't render anything if there's no data
  }

  return (
    <Box ref={mainContainerRef} width="100%" overflow="hidden">
      {/* The component maps over the `scrollData` array. Each object in the array creates a new section. */}
      {scrollData.map((sectionData) => (
        <Flex
          key={sectionData.id}
          className="horizontal-section"
          direction="column"
          justify="center"
          h="100vh" // Using 100vh often works well with pinned sections
          w="100%"
          position="relative"
          bg={sectionData.bgColor === "blue" ? "#3F77A5" : "white"}
        >
          {/* The main heading is dynamically set from the data */}
          <Heading
            as="h2"
            fontSize="36px"
            fontWeight="500"
            lineHeight="45px"
            w="60%"
            position="absolute"
            top={{ base: "12%", md: "10%" }} // Adjusted top for better positioning
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
            zIndex={2}
            color={sectionData.bgColor === "blue" ? "white" : "black"}
          >
            {sectionData.mainHeading}
          </Heading>
          
          {/* This inner Flex is the scrolling track */}
          <Flex
            className="horizontal-track"
            w="max-content"
            h="100%"
            align="center"
            // Pushing the track ensures it starts at the edge
            pl={{ base: "5vw", md: "2vw" }}
          >
            {/* Here, it maps over the `features` array for the current section */}
            {sectionData.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                bgColor={sectionData.bgColor}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};