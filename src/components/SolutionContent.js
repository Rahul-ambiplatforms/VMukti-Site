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
import { keyframes } from "@emotion/react";
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
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

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
  const { hero } = content;
  const { introduction } = content;
  const { features } = content;
  const { keyBenefits } = content;
  const { workflow } = content;
  const { whyChooseUs } = content;
  const { schema } = content; 

  const { name } = useParams();
  const u_name = name.replace(/-/g, "");
  const solutionFaqs = faqsData[u_name];
  const hasMultipleImages = whyChooseUs.images && whyChooseUs.images.length > 1;

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
  const svgSize = useBreakpointValue({ base: "25px", md: "34px" });
  const svgSize1 = useBreakpointValue({ base: "12px", md: "18px" });
  // A guard clause to prevent errors if content hasn't loaded yet.
  if (!content || !content.hero) {
    return (
      <Box pt="100px" textAlign="center">
        Loading Solution...
      </Box>
    );
  }

  return (
    <>
    <script>
        {schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </script>
      <Helmet>
        {/* SEO Tags */}
        <title>{content.metetitle}</title>
        <meta name="description" content={content.metadescription} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content={content.metetitle} />
        <meta property="og:description" content={content.metadescription} />

        {/* The OG image should be a full URL, specific to this solution */}
        <meta property="og:image" content={content.ogImage} />

        <meta property="og:type" content="website" />

        {/* The OG URL must be the full, unique URL of this specific solution page */}
        <meta
          property="og:url"
          content={`https://vmukti.com/solution/${content.slug}/`}
        />

        <meta property="og:site_name" content="Vmukti Solutions" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content={content.metetitle} />
        <meta name="twitter:description" content={content.metadescription} />

        {/* Use the same specific image for the Twitter card */}
        <meta name="twitter:image" content={content.ogImage} />

        {/* Canonical Link - must point to the unique URL of this page */}
        <link
          rel="canonical"
          href={`https://vmukti.com/solution/${content.slug}/`}
        />

        {/* {content.schemas &&
          content.schemas.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))} */}
      </Helmet>
      {/* --------------MainSection-------------- */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        bg="#3F77A5" // The main blue background color from the image.
        // p={heroPadding}
        // gap={10}
        mt={["0", "0", "0", "-7%"]}
        h={{ base: "80vh", md: "95vh" }}
      >
        {/* --- Left Column: Text and Call-to-Action --- */}
        <VStack
          align={{ base: "left", lg: "flex-start" }}
          textAlign={{ base: "left", lg: "left" }}
          spacing={{ base: 2, md: 6 }}
          flex="1"
          maxW={{ base: "100%", lg: "40%" }}
          pl="4%"
          mt={["10%", "10%", "25%", "0"]}
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            color="white"
            fontWeight="600"
            w={{ base: "80%", md: "100%" }}
          >
            {hero.heading}
          </Heading>

          <svg
            width={svgSize}
            height={svgSize}
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
            lineHeight="20px"
            w={{ base: "90%", md: "100%" }}
            as="p"
          >
            {hero.description}
          </Text>

          <Button
            as="a"
            href="/contact-us"
            bg="white"
            color="#3F77A5"
            fontSize="16px"
            borderRadius="24px"
            px={8}
            py="4"
            w={{ base: "135px", md: "179px" }}
            h={{ base: "34px", md: "48px" }}
            // rightIcon={<Icon as={LuArrowUpRight} />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Book Demo
            <Box ml="2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize1}
                height={svgSize1}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM2 16L3.06066 17.0607L17.0607 3.06066L16 2L14.9393 0.939339L0.93934 14.9393L2 16Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>
          </Button>
        </VStack>

        {/* --- Right Column: Display Image --- */}
        <Flex
          flex="1"
          justify="center"
          align="center"
          w="100%"
          mt={["0", "0", "0", "10%"]}
          mr="2%"
        >
          <Image
            src={hero.image}
            alt={hero.heading}
            objectFit="cover"
            w="100%"
          />
        </Flex>
      </Flex>

      <Trusted />

      <PageContentWrapper>
        {/* --------------IntroductionSection Part 1-------------- */}
        <Box
          w="100%"
          textAlign="center"
          borderRadius={{ base: "24px", md: "24px" }}
          position="relative"
          // mb="3%"
          mb={introduction.image ? "0" : "3%"}
        >
          <VStack spacing={{ base: 4, md: 6 }}>
            <Box
              w="full"
              bg={introduction.bgColor || "white"}
              h={
                introduction.image
                  ? ["294px", "294px", "394px", "494px"]
                  : "300px"
              }
              p={{ base: 6, md: 8 }}
              borderRadius={{ base: "16px", md: "24px" }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "20px", md: "48px" }}
                fontWeight={{ base: "500", md: "500" }}
                color="#000"
              >
                {introduction.heading}
              </Heading>
              <Box mt="2%">
                {introduction.description.map((paragraph, index) => (
                  <Text
                    key={index}
                    fontSize={{ base: "14px", md: "16px" }}
                    color="#444444"
                    lineHeight={{ base: "18px", md: "20px" }}
                    mb="1%"
                    as="p"
                  >
                    {paragraph}
                  </Text>
                ))}
              </Box>
            </Box>
            {introduction.image && (
              <Box
                mt={introduction.top || "-25%"}
                mb={{ base: "10%", md: "2%" }}
              >
                <Image
                  src={introduction.image}
                  alt={introduction.heading}
                  w={{ base: "100%", md: "100%" }}
                  borderRadius="24px"
                  objectFit="cover"
                  zIndex={1}
                />
              </Box>
            )}
          </VStack>
        </Box>
        {/* --------------Features--------------  */}
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            borderRadius={{ base: "16px", lg: "24px" }}
            overflow="hidden"
            minH={{ lg: "737px" }}
            important
          >
            {/* --- LEFT CONTAINER --- */}
            <VStack
              flex={{ base: "1", lg: "0 0 50%" }}
              bg="#3F77A5"
              color="white"
              p={{ base: "4", md: "8" }}
              spacing={4}
              align={{ base: "flex-start", lg: "flex-start" }}
              textAlign={{ base: "left", lg: "left" }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "20px", md: "48px" }}
                lineHeight={{ base: "25px", md: "60px" }}
                fontWeight="600"
              >
                {features.heading}
              </Heading>

              <svg
                width={svgSize}
                height={svgSize}
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
                fontSize={{ base: "md", lg: "16px" }}
                lineHeight="20px"
                fontWeight="500"
                as="p"
              >
                {features.description}
              </Text>

              <Button
                as="a"
                href="/contact-us"
                bg="white"
                color="#3F77A5"
                size="lg"
                borderRadius="full"
                px={{ base: "8", md: "12" }}
                mt="2%"
                // rightIcon={<Icon as={LuArrowUpRight} />}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
              >
                Let's talk
                <Box ml="2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z"
                      fill="#3F77A5"
                    />
                  </svg>
                </Box>
              </Button>
            </VStack>

            {/* --- RIGHT CONTAINER (ACCORDION) --- */}
            <Box
              flex="1"
              bg="white"
              p={{ base: "2", md: "8" }}
              pb={{ base: "4", md: "none" }}
            >
              <Accordion allowMultiple={false} defaultIndex={[0]}>
                {content.features.accordionItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    borderTopWidth={index === 0 ? 0 : "0.5px"}
                    borderColor="#444444"
                    // Width Need to be decreased
                  >
                    {({ isExpanded }) => (
                      <>
                        {/* <h2> */}
                        <AccordionButton py={4}>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize="16px"
                            color="black"
                            fontWeight={isExpanded ? "700" : "400"}
                            as="h3"
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
                        {/* </h2> */}
                        <AccordionPanel
                          pb={4}
                          color="#444444"
                          fontSize="14px"
                          lineHeight="18px"
                          w="90%"
                          as="p"
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
        {content.keyApplications && (
          <HorizontalScrollFeatures scrollData={content.keyApplications} />
        )}
        {/* --------------Results-------------- */}
        {keyBenefits && (
          <Box mt="3%">
            <Results data={keyBenefits} />
          </Box>
        )}
        {/* --------------Industry Grid-------------- */}
        {content.industry && (
          <Box mt="3%" mb={{ base: "2%", md: "-7%" }}>
            <IndustryGrid
              heading={content.industry.heading}
              description={content.industry.description}
            />
          </Box>
        )}
        {/* --------------CTA-------------- */}
        <Box position="relative" zIndex="9">
          <CtaBanner href={content.cta.href}>
            {content.cta.textLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.cta.textLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </CtaBanner>
        </Box>

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
              as="h2"
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

        {/* --------------IntroductionSection Part 2-------------- */}
        <Box w="100%" textAlign="center" mt="3%" mb="3%">
          <VStack spacing={0}>
            {" "}
            <Box
              w="full"
              bg="white"
              p={{ base: 6, md: 8 }}
              // pb={{ base: "", md: "25%" }}
              pb={
                whyChooseUs.images
                  ? ["30%", "30%", "30%", "25%"]
                  : ["5%", "5%", "5%", "3%"]
              }
              borderRadius="24px"
            >
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "48px" }}
                fontWeight="600"
                color="#000"
              >
                {whyChooseUs.heading}
              </Heading>

              {/* Map over the description array to render each paragraph */}
              {whyChooseUs.description.map((paragraph, index) => (
                <Text
                  key={index}
                  fontSize={{ base: "14px", md: "16px" }}
                  color="#444444"
                  w={{ base: "95%", md: "80%" }}
                  mx="auto"
                  mt="20px"
                  lineHeight="20px"
                  as="p"
                >
                  {paragraph}
                </Text>
              ))}
            </Box>
            {/* This container handles the negative margin to create the overlap */}
            {whyChooseUs.images && (
              <Box w="100vw" mt={{ base: "-25%", md: "-23%" }} zIndex={1}>
                {hasMultipleImages ? (
                  <Box
                    // w="100vw"
                    // mx="auto"
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
                      animation={`${marqueeScroll} 15s linear infinite`}
                    >
                      {[
                        ...whyChooseUs.images,
                        ...whyChooseUs.images,
                        ...whyChooseUs.images,
                        ...whyChooseUs.images,
                      ].map((imgSrc, index) => (
                        <Image
                          key={index}
                          src={imgSrc}
                          alt={`${whyChooseUs.heading} collage ${index + 1}`}
                          w={{ base: "180px", md: "305px" }}
                          // w="100%"
                          h="auto"
                          mx={{ base: "4px", md: "10px" }}
                          borderRadius={{ base: "16px", md: "24px" }}
                          objectFit="cover"
                          flexShrink={0}
                        />
                      ))}
                    </Flex>
                  </Box>
                ) : (
                  <Box
                    w="90%"
                    justifyContent="center"
                    alignItems="center"
                    mx="auto"
                  >
                    <Image
                      src={whyChooseUs.images[0]}
                      alt={whyChooseUs.heading}
                      w="100%"
                      // h="100%"
                      borderRadius={{ base: "16px", md: "24px" }}
                      objectFit="cover"
                    />
                  </Box>
                )}
              </Box>
            )}
          </VStack>
        </Box>
      </PageContentWrapper>

      {/* --------------Achieved-------------- */}
      <Achieved heading={content.trusted} />
      <PageContentWrapper>
        {/* --------------FAQs-------------- */}
        <FaqsSection faqsList={solutionFaqs} />
      </PageContentWrapper>
    </>
  );
};

export default SolutionContent;
