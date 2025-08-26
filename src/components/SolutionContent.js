import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  useBreakpointValue,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
// Note: 'keyframes' import has been removed as it's no longer needed.
import { useParams } from "react-router-dom";
import { LuArrowDown, LuArrowUpRight } from "react-icons/lu";
import Trusted from "./Trusted";
import PageContentWrapper from "./PageContentWrapper";
import Results from "../pages/Home/Components/Results";
import industriesData from "../pages/Home/Components/industriesData";
import IndustryGrid from "../pages/Home/Components/industriesData";
import CtaBanner from "./CtaBanner";
import Achieved from "../pages/Home/Components/Achieved";
import FaqsSection from "./faqsSection";
import faqsData from "../data/faqsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ feature, bgColor }) => (
  <Flex
    direction="column"
    w={{ base: "80vw", md: "65vw", lg: "85vw" }}
    h="600px"
    flexShrink={0}
    mr={{ base: "20vw", md: "2vw" }}
    align="center"
    justify="center"
  >
    <Box
      position="relative"
      w="100%"
      h={{ base: "300px", md: "450px", lg: "100%" }} // Responsive height
      borderRadius="24px"
      overflow="hidden"
      // boxShadow="2xl"
    >
      <Image
        src={`${process.env.PUBLIC_URL}/assets/${feature.image}`}
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
        w={{ base: "85%", sm: "60%", md: "35%" }}
        h="90%"
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(2px) saturate(120%)"
        borderRadius="24px"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        justifyContent="center" // Centers vertically on the main axis
        alignItems="center"
      >
        <Heading as="h3" size={{ base: "sm", md: "md" }} color="gray.800">
          {feature.title}
        </Heading>
        <Box
          width="30px"
          height="3px"
          borderRadius="full"
          bg="#3F77A5"
          my={3}
        />
        <Text fontSize={{ base: "13px", md: "15px" }} color="gray.700">
          {feature.description}
        </Text>
      </Box>
    </Box>
  </Flex>
);

// This component contains the main GSAP animation logic and is now properly constrained.
const HorizontalScrollFeatures = ({ scrollData = [] }) => {
  const mainContainerRef = useRef(null);

  useGSAP(
    () => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      horizontalSections.forEach((section) => {
        const track = section.querySelector(".horizontal-track");
        const scrollAmount = track.scrollWidth - section.offsetWidth;

        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 8% top", // Pin when the section's top hits the viewport's top
            pin: true,
            scrub: 1.5,
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: mainContainerRef, dependencies: [scrollData] }
  );

  if (!scrollData || scrollData.length === 0) {
    return null;
  }

  return (
    // The ref scopes our GSAP selectors to this component only.
    <Box ref={mainContainerRef} width="100%">
      {scrollData.map((sectionData) => (
        <Flex
          key={sectionData.id}
          className="horizontal-section"
          direction="column"
          justify="center"
          h="100vh"
          w="100%"
          position="relative"
          overflow="hidden"
          // p={{ base: 2, md: 4 }}
          bg={sectionData.bgColor === "blue" ? "#3F77A5" : "white"}
          borderRadius="24px"
          mt="2%"
          mb="-6%"
          // Need to change here mb -6% wont work instead mt -x%
        >
          <Heading
            as="h2"
            // size={{ base: "lg", md: "lg" }}
            fontSize="36px"
            position="absolute"
            top={{ base: "10%", md: "2%" }}
            left="50%"
            transform="translateX(-50%)"
            w="90%"
            textAlign="center"
            zIndex={2}
            color={sectionData.bgColor === "blue" ? "white" : "black"}
          >
            {sectionData.mainHeading}
          </Heading>

          <Flex
            className="horizontal-track"
            w="max-content"
            h="100%"
            align="center"
            pl={{ base: "5vw", md: "7vw" }}
          >
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

// This component renders the main "dashboard" or hero section for a solution page.
const SolutionContent = ({ content }) => {
  const { name } = useParams();
  const u_name = name.replace(/-/g, "");
  const solutionFaqs = faqsData[u_name];

  // Responsive values for padding and font sizes.
  const heroPadding = useBreakpointValue({ base: 6, md: 10, lg: 16 });
  const headingSize = useBreakpointValue({
    base: "24px",
    md: "48px",
    lg: "48px",
  });
  const textSize = useBreakpointValue({
    base: "14px",
    md: "16px",
    lg: "16px",
  });

  // A guard clause to prevent errors if content hasn't loaded yet.
  if (!content || !content.hero) {
    return (
      <Box pt="100px" textAlign="center">
        Loading Solution...
      </Box>
    );
  }

  const { hero } = content;
  const { introduction } = content;
  const { features } = content;
  const { keyBenefits } = content;
  const { workflow } = content;

  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        bg="#3F77A5" // The main blue background color from the image.
        // p={heroPadding}
        gap={10}
        mt="-7%"
        h="95vh"
      >
        {/* --- Left Column: Text and Call-to-Action --- */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={6}
          flex="1" // This allows the column to be flexible in size.
          //   w="40%"
          maxW={{ base: "100%", lg: "40%" }}
          pl="4%"
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            // fontSize="48px"
            color="white"
            fontWeight="600"
          >
            {hero.heading}
          </Heading>

          {/* <Icon as={LuArrowDown} boxSize="40px" color="white" />
           */}
          <svg
            width="25"
            height="25"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
              fill="#fff"
            />
          </svg>

          <Text
            fontSize={{ base: "14px", lg: "16px" }}
            color="white"
            // lineHeight="tall"
          >
            {hero.description}
          </Text>

          <Button
            as="a"
            href="/contact-us" // This can be made dynamic later if needed.
            bg="white"
            color="#3F77A5"
            size="lg"
            borderRadius="full"
            px={8}
            rightIcon={<Icon as={LuArrowUpRight} />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Book Demo
          </Button>
        </VStack>

        {/* --- Right Column: Display Image --- */}
        <Flex
          flex="1.2" // Give slightly more space to the image for better visual balance.
          justify="center"
          align="center"
          w="100%"
          mt="10%"
          //   maxW={{ base: "100%", lg: "700px" }}
        >
          <Image
            src={hero.image}
            alt={hero.heading}
            objectFit="cover"
            w="100%"
            borderRadius="xl"
          />
        </Flex>
      </Flex>
      <Trusted />

      <PageContentWrapper>
        {/* --------------IntroductionSection-------------- */}
        <Box
          //   bg="white"
          w="100%"
          textAlign="center"
          //   p={{ base: 6, md: 12 }}
          //   h="494px"
          borderRadius={{ base: "24px", md: "24px" }}
          position="relative"
        >
          {/* A VStack inside the white box to space out the heading and description. */}
          <VStack spacing={{ base: 4, md: 6 }}>
            <Box
              w="full"
              bg="white"
              h="494px"
              p={{ base: 6, md: 8 }}
              borderRadius={{ base: "24px", md: "24px" }}
            >
              <Heading as="h2" fontSize="48px" fontWeight="500" color="#000">
                {introduction.heading}
              </Heading>

              <Text
                fontSize="16px"
                color="#444444"
                w="80%"
                //   maxW="4xl" // Constrains the width of the text for better readability.
                mx="auto"
                mt="1%"
                lineHeight="tall"
              >
                {introduction.description}
              </Text>
            </Box>
            <Box mt="-23%">
              <Image
                src={introduction.image}
                alt={introduction.heading}
                w={{ base: "100%", md: "100%" }}
                //   h="100%"
                borderRadius="24px"
                objectFit="cover"
                zIndex={1}
              />
            </Box>
          </VStack>
        </Box>
        {/* --------------Features--------------  */}
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            borderRadius={{ base: "none", lg: "24px" }}
            overflow="hidden" // Hides anything that spills out of the rounded corners
            minH={{ lg: "737px" }}
            important
          >
            {/* --- LEFT CONTAINER --- */}
            <VStack
              flex={{ base: "1", lg: "0 0 50%" }} // Takes up 40% width on large screens
              bg="#3F77A5"
              color="white"
              p="8"
              spacing={4}
              align={{ base: "center", lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading as="h2" fontSize="48px" fontWeight="600">
                {features.heading}
              </Heading>

              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113821 30.0138 7.15256e-06C28.357 0.00115204 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334406 28.3639 0.0345855 30.0207C0.0357304 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                  fill="#fff"
                />
              </svg>

              <Text fontSize={{ base: "md", lg: "16px" }} fontWeight="500">
                {features.description}
              </Text>

              <Button
                as="a"
                href="/contact-us"
                bg="white"
                color="#3F77A5"
                size="lg"
                borderRadius="full"
                px={8}
                rightIcon={<Icon as={LuArrowUpRight} />}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
              >
                Let's talk
              </Button>
            </VStack>

            {/* --- RIGHT CONTAINER (ACCORDION) --- */}
            <Box
              flex="1"
              bg="white"
              //   p={contentPadding}
              p="8"
            >
              <Accordion allowMultiple={false} defaultIndex={[0]}>
                {content.features.accordionItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    borderTopWidth={index === 0 ? 0 : "0.5px"}
                    borderColor="#444444"
                    // Width Need to be decreased
                  >
                    {/* ✅ STEP 1: Get the `isExpanded` state by using a function as the child */}
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton py={4}>
                            <Box
                              flex="1"
                              textAlign="left"
                              fontSize="16px"
                              color="black"
                              fontWeight={isExpanded ? "700" : "400"}
                            >
                              {item.title}
                            </Box>

                            {/* ✅ STEP 3: Wrap the SVG in a Box to apply the conditional transform */}
                            <Box
                              as="span"
                              transform={isExpanded ? "rotate(180deg)" : "none"}
                              transition="transform 0.3s"
                            >
                              <svg
                                width="24"
                                height="12"
                                viewBox="0 0 24 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 12L24 0L0 2.86197e-07L12 12Z"
                                  fill="#3F77A5"
                                />
                              </svg>
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          pb={4}
                          color="#444444"
                          fontSize="14px"
                          w="90%"
                        >
                          {item.content}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Flex>
        </Box>
        {/* --------------Key Application-------------- */}
        <HorizontalScrollFeatures scrollData={content.keyApplications} />
        {/* --------------Results-------------- */}
        {keyBenefits && (
          <Box mt="3%">
            <Results data={keyBenefits} />
          </Box>
        )}
        {/* --------------Industry Grid-------------- */}
        <IndustryGrid />

        {/* --------------CTA-------------- */}
        <CtaBanner href={content.cta.href}>
          {content.cta.textLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < content.cta.textLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </CtaBanner>

        {/* --------------Workflow-------------- */}
        {content.workflow && (
          <VStack
            w="100%"
            spacing={{ base: 6, md: 8 }}
            py={{ base: 10, md: 16 }}
          >
            <Heading
              fontSize={{ base: "24px", md: "48px", lg: "48px" }}
              textAlign="center"
              color="gray.800"
              w="75%"
            >
              {/* Use the specific workflow object from the content prop */}
              {content.workflow.heading}
            </Heading>
            <Image
              src={content.workflow.image} // Also update the image path
              alt={content.workflow.heading}
              w="100%"
              maxW="1200px"
              objectFit="contain"
            />
          </VStack>
        )}

        {/* --------------Achieved-------------- */}
        <Achieved />

        {/* --------------FAQs-------------- */}
        <FaqsSection faqsList={solutionFaqs} />
      </PageContentWrapper>
    </>
  );
};

export default SolutionContent;
