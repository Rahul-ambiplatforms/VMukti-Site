import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";
import SubHeadingAnimation from "./Animation/Text/SubHeadingAnimation";
import { motion } from "framer-motion";

const popAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  viewport:{once:"false"}
};
const ServingsModelGrid = ({ title, description, cards }) => {
  return (
    <>
      <Flex
        direction="column"
        bg="#3F77A5"
        color={"white"}
        h={{ base: "auto", md: "753px" }}
        minHeight="fit-content"
        p="5%"
        gap={10}
        borderRadius="24px"
      >
        <Flex direction="column" gap={5}>
          <HeadingAnimation>
            <Text fontWeight="600" fontSize={{ base: "28px", md: "36px" }}>
              {title}
            </Text>
          </HeadingAnimation>
          <SubHeadingAnimation>
            <Text fontSize={{ base: "14px", md: "16px" }} fontWeight="500">
              {description}
            </Text>
          </SubHeadingAnimation>
        </Flex>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={3}
          rowGap="50px"
        >
          {cards.map((card, index) => (
            <>
              <Flex direction="column" gap={5}>
                <motion.img
                  src={card.image}
                  alt={card.image_alt}
                  width="100%"
                  height={{ base: "200px", md: "368px" }}
                  style={{
                    backgroundColor: "#E7E7E7",
                    borderRadius: "24px",
                    // flexShrink: "0",
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={popAnimation}
                />
                <HeadingAnimation>
                  <Flex position="relative" direction="column">
                    <Text>{card.title}</Text>
                    <Box width="20px" height="1px" bg="white" />
                  </Flex>
                </HeadingAnimation>
                <SubHeadingAnimation>
                  <Text>{card.description}</Text>
                </SubHeadingAnimation>
              </Flex>
            </>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default ServingsModelGrid;
