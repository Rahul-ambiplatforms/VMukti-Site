import { Box, Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";
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
    <Box py={{ base: 6, md: 8 }} position="relative" overflow="hidden">
      <Container
        maxW={{ base: "100%", lg: "100%" }} // Preserve original large screen width
        px={{ base: 4, md: 0 }} // Original padding values
        position="relative"
      >
        {/* Background dots pattern - mobile optimized without affecting desktop */}
        <Box
          position="absolute"
          top={{ base: "30%", lg: "20%" }} // Only adjust mobile positioning
          left={{ base: "50%", lg: "0" }} // Center on mobile, original on desktop
          right={{ lg: "0" }} // Original large screen
          bottom={{ lg: "0" }} // Original large screen
          transform={{ base: "translateX(-50%)", lg: "none" }} // Center only on mobile
          opacity="0.8"
          width={{ base: "300px", lg: "1050px" }} // Smaller on mobile
          height={{ base: "300px", lg: "525px" }} // Smaller on mobile
          zIndex="0"
          backgroundRepeat="no-repeat"
          backgroundImage="url('/assets/VMukti Brochure O2 4.svg')"
          backgroundPosition="center"
        />

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }} // Original column structure
          spacing={{ base: "24px", lg: "34px" }} // Original spacing preserved for lg+
          position="relative"
          zIndex="1"
          justifyItems={{ base: "center", lg: "normal" }} // Only center cards on mobile
        >
          {gridItems.map((item, index) => {
            const isEmpty = !item.title && !item.description;
            const isTimelineItem = item.subtitle !== undefined;
            const isCenteredGrid = item.alignItems === "Center";

            return (
              <MotionBox
                key={index}
                bg={item.bgColor || "white"}
                p={{ base: 4, lg: 6 }}
                borderRadius="24px"
                width={{ base: "280px", sm: "300px", lg: "336px" }}
                height={{ lg: "336px" }}
                minHeight={{ base: "280px", lg: "auto" }}
                flexShrink="0"
                initial="hidden"
                animate="visible"
                variants={floatingAnimation}
                custom={index}
                display={{
                  base: isEmpty ? "none" : isCenteredGrid ? "flex" : "block",
                  lg: isCenteredGrid ? "flex" : "block"
                }}
                flexDirection={isCenteredGrid ? "column" : undefined}
                justifyContent={isCenteredGrid ? "center" : undefined}
                alignItems={isCenteredGrid ? "center" : undefined}
                textAlign={
                  isCenteredGrid ? "center" :
                    isTimelineItem ? "left" : "left"
                }
                position={isTimelineItem ? "relative" : "static"}
              >
                {item.title && (
                  <>
                    {isTimelineItem ? (
                      /* Timeline Layout */
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
                            <Text fontSize={{ base: "xs", lg: "sm" }} color={item.textColor} fontWeight="bold">
                              {item.subtitle}
                            </Text>
                          )}
                          <Text color={item.textColor} fontSize={{ base: "xs", lg: "md" }}>
                            {item.description}
                          </Text>
                        </Box>
                      </>
                    ) : (
                      /* Default/Centered Layout */
                      <>
                        <Heading
                          as="h3"
                          size={{ base: "sm", lg: "lg" }}
                          color={item.textColor}
                          mb={{ base: 3, lg: 4 }}
                        >
                          {item.title}
                        </Heading>
                        <Text fontSize={{ base: "xs", lg: "md" }}>
                          {item.description}
                        </Text>
                      </>
                    )}
                  </>
                )}
              </MotionBox>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}