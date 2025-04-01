import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react"; // Import Chakra's Text component

const MotionText = motion(Text); // Convert Chakra Text to a motion component

const SubHeadingAnimation = ({ children, className }) => {
  return (
    <MotionText
      className={className} // Allows external styling
      initial={{ opacity: 0, x: -100 }} // Starts hidden and shifted left
      whileInView={{ opacity: 1, x: 0 }} // Fades in and moves to position
      viewport={{ once: false, amount: 0.2 }} // Triggers at 20% visibility
      transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition
      // display="flex-column"
       display="block"
    >
      {children}
    </MotionText>
  );
};

export default SubHeadingAnimation;

