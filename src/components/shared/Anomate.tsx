"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWriteProps {
  text: string;
  speed?: number; 
}

const AnimatedWrite: React.FC<AnimatedWriteProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index += 1;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: '33px', fontFamily: 'serif' }}
    >
      {displayedText}
    </motion.div>
  );
};

export default AnimatedWrite;
