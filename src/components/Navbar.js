import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

const iconMotionVariants = {
    initial: { y: 0 },
    hover: { y: -2, scale: 1.1 },
};

/**
 * Custom link for Desktop navigation with smooth-scroll logic
 */
const CustomLink = ({ href, title, className = "", isSPA }) => {
    const router = useRouter();

    const scrollToSection = (target) => {
      const element = document.querySelector(target);
      if (element) {
        // Offset added to account for the fixed header height
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    const handleClick = async () => {
      if (isSPA && href.startsWith('#')) {
        if (router.pathname !== '/') {
          await router.push('/');
          setTimeout(() => scrollToSection(href), 150);
        } else {
          scrollToSection(href);
        }
        return;
      }
      router.push(href);
    };

  return (
    <button 
      type="button" 
      onClick={handleClick} 
      className={`${className} relative group text-white/80 hover:text-orange-500 transition-colors duration-300 font-medium`}
    >
      {title}
      <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </button>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, isSPA }) => {
  const router = useRouter();

  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleClick = async () => {
    toggle(); 
    if (isSPA && href.startsWith('#')) {
      if (router.pathname !== '/') {
        await router.push('/');
        setTimeout(() => scrollToSection(href), 150);
      } else {
        scrollToSection(href);
      }
      return;
    }
    router.push(href);
  };
  
  return (
    <button 
      type="button" 
      className={`${className} relative group my-4 text-white hover:text-orange-500 transition-colors text-2xl font-semibold`} 
      onClick={handleClick}
    >
      {title}
      <span className={`h-[1px] inline-block w-0 bg-orange-500 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300`}>
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = ({ isSPA = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '#home', title: 'Home' },
    { href: '#about', title: 'About' },
    { href: '#projects', title: 'Projects' },
    { href: '#articles', title: 'Articles' },
    { href: '#contact', title: 'Contact' }
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        {/* Max-width container replaces the hardcoded px-32 for better modern scaling */}
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between lg:px-6 md:px-4">
          
          {/* Mobile Toggle Button */}
          <button 
            className="flex-col justify-center items-center hidden lg:flex z-50"
            onClick={handleClick}
            aria-label="Toggle Menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="lg:hidden flex items-center">
              {navItems.map((item) => (
                <CustomLink key={item.href} href={item.href} title={item.title} className="mx-4" isSPA={isSPA} />
              ))}
          </nav>
          
          {/* Social Icons Section */}
          <nav className="flex items-center justify-center lg:hidden">
            <Link href='https://twitter.com/bernard_bebeni' target="_blank" className="mx-3">
                <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
                    <TwitterIcon className="!w-6 !h-6 text-white hover:text-orange-500 transition-colors" />
                </motion.div>
            </Link>
            <Link href='https://www.linkedin.com/in/benard-bebeni/' target="_blank" className="mx-3">
                <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
                    <LinkedInIcon className="!w-6 !h-6 text-white hover:text-orange-500 transition-colors" />
                </motion.div>
            </Link>
            <Link href='https://github.com/Bernard065' target="_blank" className="ml-3">
                <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
                    <GitHubIcon className="!w-6 !h-6 text-white hover:text-orange-500 transition-colors" />
                </motion.div>
            </Link>
          </nav>
        </div>
        
        {/* Logo remains centered */}
        <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-4 lg:translate-y-0">
            <Logo />
        </div>

        {/* Improved Mobile Menu with dark theme consistency */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-screen z-40 flex flex-col justify-center items-center fixed top-0 left-0 bg-black/95 backdrop-blur-xl lg:flex"
          >
            <nav className="flex items-center flex-col justify-center">
                {navItems.map((item) => (
                  <CustomMobileLink key={item.href} href={item.href} title={item.title} toggle={handleClick} isSPA={isSPA} />
                ))}
            </nav>
            
            <nav className="flex items-center justify-center mt-8 space-x-6">
              <Link href='https://twitter.com/bernard_bebeni' target="_blank" className="text-white hover:text-orange-500"><TwitterIcon /></Link>
              <Link href='https://www.linkedin.com/in/benard-bebeni/' target="_blank" className="text-white hover:text-orange-500"><LinkedInIcon /></Link>
              <Link href='https://github.com/Bernard065' target="_blank" className="text-white hover:text-orange-500"><GitHubIcon /></Link>
            </nav>
          </motion.div>
        )}
    </header>
  );
};

export default Navbar;