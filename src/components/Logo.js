import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <MotionLink 
        href='/'
        className='flex items-center justify-center text-2xl font-bold'
        whileHover={{
            backgroundColor: ["rgba(0, 0, 0, 0)", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "rgba(0, 0, 0, 0)"],
            transition: { duration: 1, repeat: Infinity }
        }}

      >
        
        Bernard
       
      </MotionLink>
    </div>
  );
};

export default Logo;
