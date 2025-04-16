import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const floatingAnimation = {
  hidden: { y: 0, opacity: 1 },
  visible: (index) => ({
    opacity: 1,
    y: ["0%", "15%", "0%"],
    transition: {
      duration: 1.8,
      ease: "easeInOut",
      times: [0.2, 0.4, 0.6, 0.8, 1],
      delay: index * 0.1,
    },
  }),
};

export default function CulturalSection({ gridItems }) {
  return (
    <Box py={{ base: 6, md: 0 }} position="relative" overflow="hidden">
      <Container
        maxW={{ base: "100%", lg: "100%" }}
        px={{ base: 4, md: 0 }}
        position="relative"
      >
        {/* Background elements remain unchanged */}
        <Box
          position="absolute"
          top={{ base: "-8px", md: "5%" }}
          right={{ base: "-8px", md: "10%" }}
          width={{ base: "200px", sm: "300px", md: "408px" }}
          height={{ base: "200px", sm: "300px", md: "408px" }}
          flexShrink="0"
          borderRadius="full"
          opacity="0.12"
          background="#3F77A5"
          filter="blur(56.6px)"
          zIndex="0"
          transform={{ base: "scale(0.8)", md: "scale(1)" }}
        />
        <Box
          position="absolute"
          top={{ base: "30%", lg: "20%" }}
          left={{ base: "50%", lg: "0" }}
          right={{ lg: "0" }}
          bottom={{ lg: "0" }}
          transform={{ base: "translateX(-50%)", lg: "none" }}
          opacity="0.8"
          width={{ base: "300px", lg: "1050px" }}
          height={{ base: "300px", lg: "525px" }}
          zIndex="0"
          backgroundRepeat="no-repeat"
          backgroundImage={`url(${process.env.PUBLIC_URL}/assets/BannerBrochre4.svg)`}
          backgroundPosition="center"
        />

        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: "24px", lg: "34px" }}
          position="relative"
          zIndex="1"
          justifyItems={{ base: "center", lg: "start" }}
        >
          {gridItems.map((item, index) => {
            const isEmpty = !item.title && !item.description;
            const isTimelineItem = item.subtitle !== undefined;
            const isCenteredGrid = item.alignItems === "Center";
            const isWide = item.isWide;

            // Check if title is an array of text parts
            const isComplexTitle = Array.isArray(item.title);

            return (
              <MotionBox
                key={index}
                bg={item.bgColor || "white"}
                p={{ base: 4, lg: 6 }}
                borderRadius="24px"
                width={{
                  base: "280px",
                  sm: "300px",
                  lg: isWide ? "calc(672px + 34px)" : "336px"
                }}
                height={{ lg: "336px" }}
                aspectRatio="1/1"
                minHeight={{ base: "280px", lg: "auto" }}
                flexShrink="0"
                initial="hidden"
                animate="visible"
                variants={floatingAnimation}
                custom={index}
                display={{
                  base: isEmpty ? "none" : isCenteredGrid ? "flex" : "block",
                  lg: isCenteredGrid ? "flex" : "block",
                }}
                flexDirection={isCenteredGrid ? "column" : undefined}
                justifyContent={isCenteredGrid ? "center" : undefined}
                alignItems={isCenteredGrid ? "center" : undefined}
                textAlign={
                  isCenteredGrid || !item.title
                    ? "center"
                    : isTimelineItem
                      ? "left"
                      : "left"
                }
                position={isTimelineItem ? "relative" : "static"}
                gridColumn={{
                  lg: isWide ? "span 2" : undefined
                }}
              >
                {item.title ? (
                  <>
                    {isTimelineItem ? (
                      /* Timeline Layout (unchanged) */
                      <>
                        <Heading
                          as="h3"
                          size={{ base: "sm", lg: "lg" }}
                          color={item.textColor}
                          position="absolute"
                          top="4"
                          right="4"
                          textAlign="right"
                        >
                          {item.title}
                        </Heading>
                        <Box position="absolute" bottom="4" left="4" right="4">
                          {item.subtitle && (
                            <Text
                              fontSize={{ base: "xs", lg: "sm" }}
                              color={item.textColor}
                              fontWeight="bold"
                            >
                              {item.subtitle}
                            </Text>
                          )}
                          <Box height="2px" width="20px" bg="#3F77A5" />
                          <Text
                            color={item.textColor}
                            fontSize={{ base: "xs", lg: "md" }}
                          >
                            {item.description}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      /* Enhanced Default/Centered Layout */
                      <>
                        <Heading
                          as="h3"
                          size={{ base: "sm", lg: "lg" }}
                          mb={{ base: 3, lg: 4 }}
                          textAlign={isCenteredGrid ? "center" : "left"}
                        >
                          {isComplexTitle ? (
                            // Render each part of the title with custom styling
                            item.title.map((titlePart, i) => (
                              <Text
                                as="span"
                                key={i}
                                color={titlePart.textColor || item.textColor || "inherit"}
                                fontSize={titlePart.fontSize || "inherit"}
                                fontWeight={titlePart.fontWeight || "inherit"}
                                fontStyle={titlePart.fontStyle || "inherit"}
                                display="inline"
                                whiteSpace="pre"
                              >
                                {titlePart.text}
                              </Text>
                            ))
                          ) : (
                            // Regular title rendering
                            <Text as="span" color={item.textColor}>
                              {item.title}
                            </Text>
                          )}
                        </Heading>
                        {item.description && (
                          <Text fontSize={{ base: "xs", lg: "md" }}>
                            {item.description}
                          </Text>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  /* Render only description, centered */
                  <Text
                    fontSize={{ base: "xs", lg: "md" }}
                    color={item.textColor}
                  >
                    {item.description}
                  </Text>
                )}
              </MotionBox>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}