import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const floatingAnimation = {
  hidden: { y: 0, opacity: 1 },
  visible: (index) => ({
    opacity: 1,
    y: ["0%", "15%", "0%"],
    transition: {
      duration: 3,
      ease: "easeInOut",
      delay: index * 0.3,
      // repeat: Infinity,
      repeat: 2,
      repeatType: "loop",
    },
  }),
};

export default function CulturalSection({ gridItems }) {
  return (
    <Box py={{ base: 6, md: 0 }} position="relative" overflow="hidden">
      <Container
        maxW="100%"
        // px={{ base: 4, md: 8 }}
        position="relative"
      >
        {/* Background elements remain unchanged */}
        <Box
          position="absolute"
          top={{ base: "-8px", md: "5%" }}
          right={{ base: "-8px", md: "10%" }}
          width={{ base: "200px", sm: "300px", md: "408px" }}
          height={{ base: "200px", sm: "300px", md: "408px" }}
          borderRadius="full"
          opacity="0.12"
          background="#3F77A5"
          filter="blur(56.6px)"
          zIndex="0"
        />
        <Box
          position="absolute"
          top={{ base: "30%", lg: "20%" }}
          left="50%"
          transform="translateX(-50%)"
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
          gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: "8px", lg: "32px" }}
          position="relative"
          zIndex="1"
          justifyItems={{ base: "center", lg: "start" }}
        >
          {gridItems.map((item, index) => {
            const isEmpty = !item.title && !item.description;
            if (isEmpty) return null; // Skips rendering empty items completely.

            const isTimelineItem = item.subtitle !== undefined;
            const isCenteredGrid = item.alignItems === "Center";
            const isWide = item.isWide;
            const isComplexTitle = Array.isArray(item.title);

            return (
              <MotionBox
                key={index}
                bg={item.bgColor || "white"}
                p={{ base: 3, lg: 6 }} // Responsive padding
                borderRadius={{ base: "20px", md: "24px" }}
                width={{
                  base: "166px",
                  lg: isWide ? "calc(672px + 34px)" : "336px",
                }}
                height={{
                  base: "166px",
                  lg: "336px",
                }}
                flexShrink="0"
                initial="hidden"
                animate="visible"
                variants={floatingAnimation}
                custom={index}
                display={isCenteredGrid ? "flex" : "block"}
                flexDirection={isCenteredGrid ? "column" : undefined}
                justifyContent={isCenteredGrid ? "center" : "center"}
                alignItems={isCenteredGrid ? "center" : undefined}
                textAlign={isCenteredGrid || !item.title ? "center" : "left"}
                position={isTimelineItem ? "relative" : "static"}
                gridColumn={{ lg: isWide ? "span 2" : "auto" }}
              >
                {item.title ? (
                  <>
                    {isTimelineItem ? (
                      <>
                        <Heading
                          as="h3"
                          fontSize={{ base: "24px", lg: "36px" }}
                          fontWeight="700"
                          color={item.textColor}
                          position="absolute"
                          top={{ base: 4, lg: 6 }}
                          right={{ base: 4, lg: 6 }}
                          textAlign="center"
                        >
                          {item.title}
                        </Heading>
                        <Box
                          position="absolute"
                          bottom={{ base: 4, lg: 6 }}
                          left={{ base: 4, lg: 6 }}
                          right={{ base: 4, lg: 6 }}
                        >
                          {item.subtitle && (
                            <Text
                              fontSize={{ base: "xs", lg: "16px" }}
                              color={item.textColor}
                              fontWeight="700"
                            >
                              {item.subtitle}
                            </Text>
                          )}
                          <Box
                            height="2.5px"
                            width="20px"
                            bg={
                              item.textColor === "white" ? "white" : "#3F77A5"
                            }
                            my={1}
                          />
                          <Text
                            color={item.textColor}
                            fontSize={{ base: "xs", lg: "16px" }}
                            fontWeight={"500"}
                          >
                            {item.description}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      /* Default Layout - with responsive fonts */
                      <>
                        <Heading
                          as="h3"
                          mb={{ base: 2, lg: 4 }}
                          textAlign={isCenteredGrid ? "center" : "center"}
                          mr={{base:"0",md:"50%"}}
                          // display="none"
                        >
                          {isComplexTitle ? (
                            item.title.map((titlePart, i) => (
                              <Text
                                as="span"
                                key={i}
                                color={
                                  titlePart.textColor ||
                                  item.textColor ||
                                  "inherit"
                                }
                                fontSize={{
                                  base: "xl",
                                  lg: titlePart.fontSize || "36px",
                                }}
                                fontWeight={titlePart.fontWeight || "inherit"}
                                fontStyle={titlePart.fontStyle || "inherit"}
                                display="inline"
                                whiteSpace="pre"
                              >
                                {titlePart.text}
                              </Text>
                            ))
                          ) : (
                            <Text
                              as="span"
                              color={item.textColor}
                              fontSize={{ base: "xl", lg: "36px" }}
                            >
                              {item.title}
                            </Text>
                          )}
                        </Heading>
                        {item.description && (
                          <Text fontSize={{ base: "xs", lg: "16px" }}>
                            {item.description}
                          </Text>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  /* Description-only Layout */
                  <Text
                    fontSize={{ base: "lg", lg: "24px" }}
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
