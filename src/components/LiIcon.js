import React from 'react';
import { motion } from 'framer-motion';

const LiIcon = () => {
  return (
    <motion.figure
      initial={{ scale: 0 }} // Initial scale (hidden)
      animate={{ scale: 1 }} // Animation scale (fully visible)
      exit={{ scale: 0 }} // Scale when component is unmounted (hidden)
      className='absolute left-0'
    >
      <svg width='75' viewBox='0 0 100 100'>
        <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-primary' />
        <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
        <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
      </svg>
    </motion.figure>
  );
};

export default LiIcon;
