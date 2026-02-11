import React, { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { PopupFormContext } from "./PopupForm";

const CTABanner = ({ children, buttonText = "Request a Demo" }) => {
  const { openPopup } = useContext(PopupFormContext) || {};

  return (
    <Box mt={{base:"4%",md:"2%"}} w="full">
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={{base:"left",md:"center"}}
        justifyContent="space-between"
        bg="#BECEDC"
        borderRadius="24px"
        p={{ base: 5, md: 6 }}
        gap={4}
      >
        {/* The dynamic title text is passed as children */}
        <Heading
          as="h2"
          fontSize={{base:"16px",md:"36px"}}
          fontWeight={{base:"600",md:"500"}}
          color="black"
          textAlign={{ base: "left", sm: "left" }}
          w={{base:"90%",md:"70%"}}
        >
          {children}
        </Heading>

        <Button
          onClick={openPopup}
          w={{base:"135px",md:"179px"}}
          h={{base:"34px",md:"48px"}}
          p="12px 32px"
          bg="white"
          borderRadius="24px"
          color="#3F77A5"
          fontSize="16px"
          flexShrink={0}
          cursor="pointer"
          _hover={{
            boxShadow: "md",
            transform: "translateY(-2px)",
          }}
        >
          {buttonText}
          <Box ml="2">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM1.5 16L2.56066 17.0607L16.5607 3.06066L15.5 2L14.4393 0.939339L0.43934 14.9393L1.5 16Z"
              fill="#3F77A5"
            />
          </svg>
        </Box>
        </Button>
      </Flex>
    </Box>
  );
};

export default CTABanner;