import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SubHeadingAnimation from "./Animation/Text/SubHeadingAnimation";
import HeadingAnimation from "./Animation/Text/HeadingAnimation";
import { motion } from "framer-motion";

const popAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const ServingsDescriptionCard = ({ description, keybenefits, image }) => {
  return (
    <>
      <Box>
        <Flex
          bg="white"
          borderRadius="20px"
          overflow="hidden"
          p="1%"
          position="relative"
          h={{ base: "auto", md: "753px" }} // Adjust height as needed
        >
          {/* Card Image (Background) */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage={`${process.env.PUBLIC_URL}/${image}`}
            bgSize="cover"
            bgPosition="center"
            zIndex={1} // Behind the text
          />

          {/* Card Content */}
          <Flex
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={popAnimation}
            direction="column"
            justify="space-between"
            p={5}
            bg="rgba(255, 255, 255, 0.8)" // Semi-transparent background
            w={{base:"100%",sm:"50%",md:"30%"}}
            gap={5}
            borderRadius="20px"
            zIndex={2} // Above the image
            backdropFilter="blur(2px)" // Blur effect
          >
            <Flex gap={1} direction="column">
              <SubHeadingAnimation>
                <motion.div variants={popAnimation}>
                  <Text fontSize="24px" color="blue.600" mb={5}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C0 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Text>
                  <Heading
                    fontSize="16px"
                    fontWeight="500"
                    mb={5}
                    color="black"
                  >
                    {description}
                  </Heading>
                </motion.div>
              </SubHeadingAnimation>
            </Flex>

            <Flex direction="column" justifyContent="space-between" gap={5}>
              <HeadingAnimation>
                <motion.div variants={popAnimation}>
                  <Text fontSize="16px" color="black" fontWeight="700">
                    Key Benefits
                  </Text>
                </motion.div>
              </HeadingAnimation>

              <Flex direction="column" gap={3}>
                {keybenefits.map((benefit, index) => (
                  <Flex direction="column" key={index} gap={2}>
                    <SubHeadingAnimation>
                      <motion.div variants={popAnimation}>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="flex-start"
                        >
                          <Image src={benefit.svg} />
                        </Box>
                      </motion.div>
                    </SubHeadingAnimation>

                    <HeadingAnimation>
                      <motion.div variants={popAnimation}>
                        <Text>{benefit.title}</Text>
                      </motion.div>
                    </HeadingAnimation>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ServingsDescriptionCard;
