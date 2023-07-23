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
       

      >
        
        Bernard
       
      </MotionLink>
    </div>
  );
};

export default Logo;
