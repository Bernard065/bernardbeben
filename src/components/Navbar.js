import Link from "next/link"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";



const iconMotionVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
};




const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
};


const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }
  
return (
  <button href={href} className={`${className} relative group my-2`} onClick={handleClick}>
    {title}
    <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
  </button>
);
};


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-mediun text-white text-lg flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
        <button 
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
              <CustomLink href='/' title='Home' className='mr-4' />
              <CustomLink href='/about' title='About' className='mx-4' />
              <CustomLink href='/mywork' title='My Work' className="mx-4" />
              <CustomLink href='/articles' title='Articles' className='ml-4' />
    
          </nav>
          <nav className="space-x-4">
            <Link href='https://twitter.com/bernard_bebeni' target="_blank">
                <motion.div
                    className="inline-block p-2 transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                    <TwitterIcon className="w-6 h-6 text-white" />
                </motion.div>
            </Link>
            <Link href='https://www.linkedin.com/in/benard-bebeni/' target="_blank">
                <motion.div
                    className="inline-block p-2 transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                        <LinkedInIcon className="w-6 h-6 text-white" />
                </motion.div>
            </Link>
            <Link href='https://github.com/Bernard065' target="_blank">
                <motion.div
                    className="inline-block p-2  transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                    <GitHubIcon className="w-6 h-6 text-white" />
                </motion.div>
            </Link>
      </nav>
        </div>
        
        {
          isOpen ?

          <motion.div 
            initial={{scale:0, opacity:0, x: '-50%', y: '-50%'}}
            animate={{scale:1, opacity:1}}
            className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/75 rounded-lg backdrop-blur-md py-32 text-black">
          <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
              <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />
              <CustomMobileLink href='/mywork' title='My Work' className="" toggle={handleClick} />
              <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick} />
    
          </nav>
          <nav className="space-x-4">
            <Link href='https://twitter.com/bernard_bebeni' target="_blank">
                <motion.div
                    className="inline-block p-2 transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                    <TwitterIcon className="w-6 h-6 text-black" />
                </motion.div>
            </Link>
            <Link href='https://www.linkedin.com/in/benard-bebeni/' target="_blank">
                <motion.div
                    className="inline-block p-2 transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                        <LinkedInIcon className="w-6 h-6 text-black" />
                </motion.div>
            </Link>
            <Link href='https://github.com/Bernard065' target="_blank">
                <motion.div
                    className="inline-block p-2  transition-colors ease-in-out duration-300"
                    variants={iconMotionVariants}
                    whileHover="hover"
            >
                    <GitHubIcon className="w-6 h-6 text-black" />
                </motion.div>
            </Link>
      </nav>
        </motion.div>
          : null
        }

        

        
        
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default Navbar