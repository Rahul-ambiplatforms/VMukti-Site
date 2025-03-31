import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ImagePopBox = ({ children, className, delay = 0 }) => {
  return (
    <MotionBox
      className={className}
      position="relative"  // Ensures absolute children are relative to this container
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: [0, 0.3, 0.5, 1],
        delay: delay,
      }}
      // You can also set a minWidth/minHeight if needed:
      // minWidth="630px"
      // minHeight="360px"
    >
      {children}
    </MotionBox>
  );
};

export default ImagePopBox;
