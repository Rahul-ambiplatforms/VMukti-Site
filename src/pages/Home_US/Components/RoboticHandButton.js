// src/components/HeroSection/RoboticHandButton.js
import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";

const MotionButton = motion(Button);

const RoboticHandButton = () => {
  return (
    <Flex
      position="relative"
      mt={{ base: "0", md: "-10%" }}
      ml={{ base: "4%", md: "-40px" }}
      width="fit-content"
    >
      <Image loading="lazy"
        src="/assets/robohand.png"
        alt="Robotic Hand"
        display={{ base: "none", md: "block" }}
      />
      <MotionButton
        position="absolute"
        padding="24px"
        top={{ base: "20%", sm: "20%", md: "37%" }}
        right={{ base: "", sm: "", md: "8%" }}
        bg="white"
        height={{ base: "34px", sm: "50px" }}
        borderRadius="20px"
        color="#3F77A5"
        as={Link}
        to="/contactus"
        gap="2"
        display="flex"
        _hover={{
          bg: "#E0F2FE",
          color: "#2C5E84",
        }}
        fontSize={{ base: "14px", sm: "16px" }}
        animate={{
          x: [0, 5, -5, 5, -5, 0],
          y: [0, -5, 5, -5, 5, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Book Demo
        <svg
          width="14"
          height="14"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 2C17 1.17157 16.3284 0.499999 15.5 0.499999L2 0.5C1.17157 0.5 0.499999 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5L14 3.5L14 15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5L17 2ZM2.56066 17.0607L16.5607 3.06066L14.4393 0.939339L0.43934 14.9393L2.56066 17.0607Z"
            fill="#3F77A5"
          />
        </svg>
      </MotionButton>
    </Flex>
  );
};

export default RoboticHandButton;