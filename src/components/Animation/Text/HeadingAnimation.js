import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Text } from "@chakra-ui/react";

const MotionText = motion(Text);

const HeadingAnimation = ({ children, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, triggerOnce: false });

  return (
    <MotionText
      ref={ref} // this was missing, it's required for useInView to work
      className={className}
      initial={{ opacity: 0, x: -50 }}
      // whileInView={{ opacity: 1, x: 0 }} // Fades in and moves to position
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </MotionText>
  );
};

export default HeadingAnimation;
