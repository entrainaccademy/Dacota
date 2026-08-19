import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, width = "w-full", delay = 0, y = 25 }) => {
  return (
    <motion.div
      className={width}
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
