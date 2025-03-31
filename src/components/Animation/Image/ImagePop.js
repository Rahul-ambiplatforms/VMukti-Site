import React from "react";
import { motion } from "framer-motion";

const ImagePop = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: [0, 0.3, 0.5, 1],
        delay: delay, // ✅ Now correctly receiving `delay`
      }}
      // style={{ display: "inline-block",overflow: "visible",}}
    >
      {children}
    </motion.div>
  );
};

export default ImagePop;
