import React from "react";
import { motion } from "framer-motion";
import { Text,Flex } from "@chakra-ui/react"; // Changed from Text to Flex

const MotionText = motion(Text); // Convert Chakra Flex to a motion component
const MotionFlex = motion(Flex);
const SubHeadingAnimation = ({ children, ...props }) => { // Added props spread
  return (
    // <MotionFlex></MotionFlex>
    <MotionText
      initial={{ opacity: 1, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      {...props} // Pass through all props
    >
      {children}
    </MotionText>
  );
};

export default SubHeadingAnimation;