import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <h1 className={`${className} inline-block w-full text-white font-bold capitalize text-6xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl`}>
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className='inline-block'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
