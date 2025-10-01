import React, { useRef } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  useBreakpointValue,
  Heading,
  VStack,
  Spacer,
} from "@chakra-ui/react"; // Chakra UI components
import PageContentWrapper from "./PageContentWrapper";
import { motion } from "framer-motion";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "./Animation/Text/SubHeadingAnimation";
import { Link } from "react-router-dom";
import CtaBanner from "./CtaBanner";
import Trusted from "./Trusted";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Achieved from "../pages/Home/Components/Achieved";
import Results from "../pages/Home/Components/Results";
import FaqsSection from "./faqsSection";
import faqsData from "../data/faqsData";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HorizontalScrollFeatures from "./HorizontalScrollFeatures";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const popAnimation1 = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (index) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.1, // Delay increases for each card
    },
  }),
};

// gsap.registerPlugin(ScrollTrigger);

// const FeatureCard = ({ feature, bgColor }) => (
//   <Flex
//     direction="column"
//     w={{ base: "80vw", md: "85vw", lg: "92vw" }}
//     h="600px"
//     flexShrink={0}
//     mr={{ base: "1vw", md: "2vw" }}
//     align="center"
//     justify="center"
//     mt="1%"
//   >
//     <Box
//       position="relative"
//       w="100%"
//       h={{ base: "300px", md: "450px", lg: "100%" }}
//       borderRadius="20px"
//       overflow="hidden"
//     >
//       <Image
//         src={`${process.env.PUBLIC_URL}/assets/${feature.image}`}
//         alt={feature.title}
//         objectFit="cover"
//         w="100%"
//         h="100%"
//       />
//       <Box
//         position="absolute"
//         bottom={{ base: 4, md: 8 }}
//         left={{ base: 4, md: bgColor === "blue" ? "62%" : 8 }}
//         p={{ base: 4, md: 5 }}
//         w={{ base: "85%", sm: "60%", md: "30%" }}
//         h="90%"
//         bg="rgba(255, 255, 255, 0.95)"
//         borderRadius="20px"
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Heading
//           as="h3"
//           fontSize={{ base: "20px", md: "24px" }}
//           fontWeight="700"
//           color="#000"
//           lineHeight="30px"
//           textAlign="center"
//           w="70%"
//         >
//           {feature.title}
//         </Heading>
//         <Box
//           width="25px"
//           height="3px"
//           borderRadius="full"
//           bg="#3F77A5"
//           my={2}
//         />
//         <Text
//           fontSize={{ base: "14px", md: "14px", lg: "14px" }}
//           fontWeight="500"
//           color="#444444"
//           lineHeight="18px"
//           textAlign="center"
//         >
//           {feature.description}
//         </Text>
//       </Box>
//     </Box>
//   </Flex>
// );

// const HorizontalScrollFeatures = ({ scrollData = [] }) => {
//   const mainContainerRef = useRef(null);

//   useGSAP(
//     () => {
//       const horizontalSections = gsap.utils.toArray(".horizontal-section");

//       horizontalSections.forEach((section) => {
//         const track = section.querySelector(".horizontal-track");
//         const scrollAmount = track.scrollWidth - section.offsetWidth;

//         gsap.to(track, {
//           x: -scrollAmount,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 16% top",
//             pin: true,
//             scrub: 1.5,
//             end: () => `+=${scrollAmount}`,
//             invalidateOnRefresh: true,
//           },
//         });
//       });
//     },
//     { scope: mainContainerRef, dependencies: [scrollData] }
//   );

//   if (!scrollData || scrollData.length === 0) {
//     return null;
//   }

//   return (
//     <Box ref={mainContainerRef} width="100%">
//       {scrollData.map((sectionData) => (
//         <Flex
//           key={sectionData.id}
//           className="horizontal-section"
//           direction="column"
//           justify="center"
//           h="85vh"
//           w="100%"
//           position="relative"
//           overflow="hidden"
//           // p={{ base: 2, md: 4 }}
//           bg={sectionData.bgColor === "blue" ? "#3F77A5" : "white"}
//           borderRadius="24px"
//           mt="2%"
//           mb="-4%"
//           // Need to change here mb -6% wont work instead mt -x%
//         >
//           <Heading
//             as="h2"
//             fontSize="36px"
//             fontWeight="500"
//             lineHeight="45px"
//             w="60%"
//             position="absolute"
//             top={{ base: "10%", md: "2%" }}
//             left="50%"
//             transform="translateX(-50%)"
//             textAlign="center"
//             zIndex={2}
//             color={sectionData.bgColor === "blue" ? "white" : "black"}
//           >
//             {sectionData.mainHeading}
//           </Heading>

//           <Flex
//             className="horizontal-track"
//             w="max-content"
//             h="100%"
//             align="center"
//             pl={{ base: "5vw", md: "2vw" }}
//           >
//             {sectionData.features.map((feature) => (
//               <FeatureCard
//                 key={feature.id}
//                 feature={feature}
//                 bgColor={sectionData.bgColor}
//               />
//             ))}
//           </Flex>
//         </Flex>
//       ))}
//     </Box>
//   );
// };

const IndustryContent = ({ props, content }) => {
  const { name } = useParams();
  const u_name = name.replace(/-/g, "");
  const solutionFaqs = faqsData[u_name];

  const svgSize = useBreakpointValue({ base: "13px", md: "25px" });

  const buttonWidth = useBreakpointValue({
    base: "130px",
    md: "179px",
    lg: "179px",
  });
  const buttonHeight = useBreakpointValue({
    base: "30px",
    md: "48px",
    lg: "48px",
  });
  if (
    !content ||
    !Array.isArray(content.title) ||
    !Array.isArray(content.keyApplications)
  ) {
    return (
      <Box mt="5%">
        <Text>Not found</Text>
      </Box>
    );
  }

  return (
    <>
    <script>
        {content.schema.map((schema, index) => (
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
        {/* The OG image must be a full URL, specific to this industry page */}
        <meta property="og:image" content={content.ogImage} />
        {/* "article" is a good type for specific sub-pages like this */}
        <meta property="og:type" content="website" />
        {/* The OG URL must be the full, unique URL of this specific industry page */}
        <meta
          property="og:url"
          content={`https://vmukti.com/industry/${content.slug}/`}
        />
        <meta property="og:site_name" content="VMukti Solutions" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content={content.metetitle} />
        <meta name="twitter:description" content={content.metadescription} />
        {/* Use the same specific image for the Twitter card */}
        <meta name="twitter:image" content={content.ogImage} />
        <link
          rel="canonical"
          href={`https://vmukti.com/industry/${content.slug}`}
        />
        {/* Optional: Add page-specific structured data from your content object.
        {content.schemas &&
          content.schemas.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))} */}
      </Helmet>
      <PageContentWrapper>
        <Box
          as="section"
          backgroundColor="#E7E7E7"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          // mt={{base:"6%",md:"3%"}}
          mt={["7%", "6%", "5%", "3%"]}
        >
          {/* Title Container with relative positioning image and description*/}
          <Flex
            direction="column"
            width="100%"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mx="auto"
            gap={4}
          >
            <Box width={{ base: "100%", md: "80%" }}>
              <HeadingAnimation>
                <MotionText
                  fontSize={{ base: "24px", md: "48px", lg: "48px" }}
                  fontWeight="600"
                  lineHeight={{ base: "30px", md: "60px" }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {content.title.map((part, index) => (
                    <Text as="h1" color={part.color} key={index}>
                      {part.text}{" "}
                    </Text>
                  ))}
                </MotionText>
              </HeadingAnimation>
            </Box>

            {/* 2. Main Image Container */}
            <Box
              position="relative"
              width="100%"
              height={{ base: "554px", md: "600px", lg: "700px" }}
              borderRadius="24px"
              overflow="hidden"
            >
              {/* Background Image - This part is the same */}
              {/* For Desktop (md and above) */}
              <MotionImage
                src={`${process.env.PUBLIC_URL}/assets/${content.large_image}`}
                alt={content.large_image_alt}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
                zIndex="0"
                display={{ base: "none", md: "block" }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* For Mobile (base only) */}
              <MotionImage
                src={`${process.env.PUBLIC_URL}/assets/${content.large_image_mobile}`}
                alt={content.large_image_alt}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                objectFit="cover"
                zIndex="0"
                display={{ base: "block", md: "none" }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Flex container for the Info Bar. We push it to the bottom. */}
              <Flex
                direction="column"
                justifyContent="flex-end" // Pushes the child (the bar) to the bottom
                h="100%"
                // p={{ base: 4, sm: 6, md: 8, lg: 10 }}
                position="relative"
                zIndex={1}
                bgGradient="linear(to-t, rgba(0,0,0,0.3), transparent 40%)" // Adjusted gradient
              >
                {/* 3. Bottom "Frosted Glass" Info Bar (Now the only direct child) */}
                <Box
                  py={{ base: 4, md: 8 }}
                  px={{ base: 6, md: 10 }}
                  borderRadius={{ base: "16px", md: "24px", lg: "24px" }}
                  bg="rgba(255, 255, 255, 0.75)"
                  backdropFilter="blur(10px) saturate(90%)"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "left", md: "center" }}
                    justifyContent="space-between"
                    gap={4}
                  >
                    {/* Left Side: Arrow and Description */}
                    <Flex
                      // alignItems={{ base: "left", md: "center" }}
                      alignItems={["left", "left", "center", "center"]}
                      gap={{ base: 2, md: 4 }}
                      width={{ base: "100%", md: "auto" }}
                      direction={{ base: "column", md: "row" }}
                    >
                      <Box
                        display={{ base: "block", md: "block" }}
                        flexShrink={0}
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
                      </Box>
                      <Text
                        color="#444"
                        fontWeight="500"
                        textAlign="left"
                        fontSize={{ base: "14px", md: "16px" }}
                        lineHeight={{ base: "18px", md: "20px" }}
                        w="90%"
                        as="p"
                      >
                        {content.para}
                      </Text>
                    </Flex>

                    {/* Right Side: Button */}
                    <Link to="/contact-us" style={{ textDecoration: "none" }}>
                      <MotionButton
                        width={buttonWidth}
                        height={buttonHeight}
                        p={{ base: "20px 48px", md: "12px 32px" }}
                        bg="#3F77A5"
                        color="white"
                        borderRadius={{ base: "20px", md: "24px" }}
                        _hover={{ bg: "#2c5a7a" }}
                        // px={{ base: "20px", lg: "20px" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        flexShrink={0}
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        Book Demo
                        <Box as="span">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                              fill="white"
                            />
                          </svg>
                        </Box>
                      </MotionButton>
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>

          {/* ------------------------- */}
          <Trusted />

          {/* ------------------------- */}
          <HorizontalScrollFeatures scrollData={content.keyApplications} />

          <Box mb="2%" w="100vw" overflow="hidden">
            <Achieved heading={content.achieved} />
          </Box>

          {/* ------------------------- */}
          <Results data={content.keyBenefits} />

          {/* Workflow */}
          <VStack
            w="100%"
            spacing={{ base: 6, md: 8 }}
            py={{ base: 10, md: 16 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "24px", md: "48px", lg: "48px" }}
              fontWeight="500"
              textAlign="center"
              color="black"
              lineHeight={{ base: "30px", md: "60px" }}
              w="75%"
            >
              {content.workflow.heading}
            </Heading>
            <>
              {/* Mobile */}
              <Image
                src={`${process.env.PUBLIC_URL}/assets/${content.workflow.image_mobile}`}
                alt={content.workflow.heading}
                w="100%"
                objectFit="cover"
                display={{ base: "block", md: "none" }}
              />

              {/* Desktop */}
              <Image
                src={`${process.env.PUBLIC_URL}/assets/${content.workflow.image}`}
                alt={content.workflow.heading}
                w="100%"
                objectFit="contain"
                display={{ base: "none", md: "block" }}
              />
            </>
          </VStack>

          {/* CTA */}
          <CtaBanner href={content.cta.href}>
            {content.cta.textLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.cta.textLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </CtaBanner>

          {/* Bottom elements */}
          {/* <Flex
            justifyContent="flex-end" // Align to the right
            alignItems="center" // Vertically center
            mt="2%" // Margin top
            width="100%"
            position="relative" // Use relative positioning
            zIndex="2" // Ensure it's above other elements
          >
            <Box
              width="30%" // Fixed width for the line
              height="1px"
              backgroundColor="#3f77a5"
              flexShrink={0} // Prevent the line from shrinking
              marginRight="2%" // Space between line and button
            />

            <Button
              height={{ base: "40px", md: "50px" }} // Responsive height
              minWidth="146px" // Minimum width to fit content
              backgroundColor="white"
              color="#3F77A5"
              fontSize="16px"
              fontWeight="700"
              borderRadius="20px"
              as={Link}
              to="/industries"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="8px 16px" // Padding for better spacing
              gap="8px" // Space between text and icon
              zIndex="2"
              _hover={{ backgroundColor: "#f0f0f0" }}
            >
              All Industries
              <svg
                style={{
                  width: "14px",
                  height: "14px",
                  minWidth: "14px",
                  minHeight: "14px",
                  flexShrink: 0, // Prevent the icon from shrinking
                }}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                  fill="#3F77A5"
                />
              </svg>
            </Button>
          </Flex> */}
          <Box mt={{ base: "4%", md: "0" }}>
            <FaqsSection faqsList={solutionFaqs} />
          </Box>
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default IndustryContent;
