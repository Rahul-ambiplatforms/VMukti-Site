import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImagePop = ({ children, className, delay = 0 }) => {

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, triggerOnce: false });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      // whileInView={{ scale: 1, opacity: 1 }}
      animate={inView?{ scale: 1, opacity: 1 }:{ scale: 0.6, opacity: 0 }}
      // viewport={{ once: false, amount: 0.1 }}
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
