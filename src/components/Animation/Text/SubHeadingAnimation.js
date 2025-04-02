import React from "react";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react"; // Changed from Text to Flex

const MotionFlex = motion(Flex); // Convert Chakra Flex to a motion component

const SubHeadingAnimation = ({ children, ...props }) => { // Added props spread
  return (
    <MotionFlex
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      {...props} // Pass through all props
    >
      {children}
    </MotionFlex>
  );
};

export default SubHeadingAnimation;