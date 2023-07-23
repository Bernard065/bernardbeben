import Link from "next/link"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const iconMotionVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
};




const CustomLink = ({ href, title, className }) => {
    const router = useRouter();
    //console.log(router)
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
};


const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-mediun text-white text-lg flex items-center justify-between">
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className="mx-4" />
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

        
        
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}

export default Navbar