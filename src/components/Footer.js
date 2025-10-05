import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const iconMotionVariants = {
  initial: { y: 0 },
  hover: { y: -3, scale: 1.1 },
}

const linkVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
}

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-white/20 font-medium text-white backdrop-blur-sm'>
      <Layout className='py-12 lg:py-8'>
        {/* Main Footer Content */}
        <div className='flex items-start justify-between lg:flex-col lg:items-center lg:gap-8 mb-8'>
          {/* Brand Section */}
          <div className='flex flex-col gap-3 lg:items-center lg:text-center'>
            <Link href='/'>
              <motion.h2 
                className='text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer'
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                Bernard
              </motion.h2>
            </Link>
            <p className='text-sm text-gray-300 max-w-xs'>
              Building digital experiences with passion and precision
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-3 lg:items-center'>
            <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
            <nav className='flex flex-col gap-2 text-sm lg:items-center'>
              <Link href='/about' className='text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group'>
                About
                <span className='absolute left-0 -bottom-0.5 h-[1px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
              <Link href='/mywork' className='text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group'>
                My Work
                <span className='absolute left-0 -bottom-0.5 h-[1px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
              <Link href='/articles' className='text-gray-300 hover:text-orange-500 transition-colors duration-300 relative group'>
                Articles
                <span className='absolute left-0 -bottom-0.5 h-[1px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300'></span>
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className='flex flex-col gap-3 lg:items-center'>
            <h3 className='text-lg font-semibold mb-2'>Connect</h3>
            <div className='flex gap-3'>
              <Link href='https://twitter.com/bernard_bebeni' target='_blank'>
                <motion.div
                  className='p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition-colors duration-300'
                  variants={iconMotionVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <TwitterIcon className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
              <Link href='https://www.linkedin.com/in/benard-bebeni/' target='_blank'>
                <motion.div
                  className='p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition-colors duration-300'
                  variants={iconMotionVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <LinkedInIcon className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
              <Link href='https://github.com/Bernard065' target='_blank'>
                <motion.div
                  className='p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition-colors duration-300'
                  variants={iconMotionVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <GitHubIcon className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
              <Link href='mailto:bernardbebeni@gmail.com' target='_blank'>
                <motion.div
                  className='p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition-colors duration-300'
                  variants={iconMotionVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <EmailIcon className='w-5 h-5 text-white' />
                </motion.div>
              </Link>
            </div>
            <Link 
              href='mailto:bernardbebeni@gmail.com' 
              target='_blank'
              className='text-sm text-gray-300 hover:text-orange-500 transition-colors duration-300 mt-2'
            >
              bernardbebeni@gmail.com
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-white/10 flex items-center justify-between lg:flex-col lg:gap-3 text-sm text-gray-400'>
          <span>
            {new Date().getFullYear()} &copy; Bernard Bebeni. All Rights Reserved.
          </span>
          <div className='flex gap-6 lg:gap-4'>
            <Link href='/privacy' className='hover:text-orange-500 transition-colors duration-300'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-orange-500 transition-colors duration-300'>
              Terms of Service
            </Link>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer