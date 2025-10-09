import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const CareerDashboard = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Flex direction={{ base: "column", lg: "column" }} w="100%" mx="auto" mt="3%">
        <Box
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: 8, lg: 10 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            fontWeight="600"
            mb={6}
            lineHeight={{base:"40px",md:"60px",lg:"81px"}}
            w="70%"
          >
            Meet the team work behind our success
          </Heading>
          <Flex
            align="start"
            justify={{ base: "flex-start", lg: "flex-start" }}
            gap="4"
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM5 5L2.87868 7.12132L27.8787 32.1213L30 30L32.1213 27.8787L7.12132 2.87868L5 5Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="#444"
              maxW="50%"
            >
              We are a company that values people as much as innovation. With a
              supportive culture, exciting challenges, and endless opportunities
              to grow, we make work rewarding and meaningful. Join us and be
              part of something bigger.
            </Text>
          </Flex>
        </Box>

        <Box flex="1" w="100%">
          <Image
            src={`${process.env.PUBLIC_URL}/assets/CareerDash.png`}
            alt="Meet the team work behind our successes"
            borderRadius="24px"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </Flex>
    </>
  );
};

export default CareerDashboard;
