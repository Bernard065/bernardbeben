import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const iconMotionVariants = {
    initial: { y: 0 },
    hover: { y: -2, scale: 1.1 },
};

const navItems = [
  { href: '#home', title: 'Home' },
  { href: '#about', title: 'About' },
  { href: '#projects', title: 'Projects' },
  { href: '#articles', title: 'Articles' },
  { href: '#contact', title: 'Contact' }
];

/**
 * Custom link for Desktop navigation with smooth-scroll logic
 */
const CustomLink = ({ href, title, className = "", isSPA, isActive = false }) => {
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
      className={`${className} relative group ${isActive ? 'text-white' : 'text-white/80'} hover:text-orange-500 transition-colors duration-300 font-medium`}
    >
      {title}
      <span className={`h-[1px] inline-block ${isActive ? 'w-full' : 'w-0'} bg-orange-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
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
  const [activeSection, setActiveSection] = useState('home');
  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          setActiveSection(mostVisible.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-4 lg:px-6 md:px-4">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden md:inline text-sm text-white/70 uppercase tracking-[0.2em]">Portfolio</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <CustomLink
              key={item.href}
              href={item.href}
              title={item.title}
              className="px-2"
              isSPA={isSPA}
              isActive={activeSection === item.href.replace('#', '')}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href='https://twitter.com/bernard_bebeni' target="_blank" className="text-white/80 hover:text-orange-500 transition-colors">
            <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
              <TwitterIcon className="!w-6 !h-6" />
            </motion.div>
          </Link>
          <Link href='https://www.linkedin.com/in/benard-bebeni/' target="_blank" className="text-white/80 hover:text-orange-500 transition-colors">
            <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
              <LinkedInIcon className="!w-6 !h-6" />
            </motion.div>
          </Link>
          <Link href='https://github.com/Bernard065' target="_blank" className="text-white/80 hover:text-orange-500 transition-colors">
            <motion.div variants={iconMotionVariants} whileHover="hover" initial="initial">
              <GitHubIcon className="!w-6 !h-6" />
            </motion.div>
          </Link>
        </div>

        <button
          className="flex-col justify-center items-center md:hidden z-50"
          onClick={handleClick}
          aria-label="Toggle Menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-screen z-40 flex flex-col justify-center items-center fixed top-0 left-0 bg-black/95 backdrop-blur-xl md:hidden"
        >
          <nav className="flex items-center flex-col justify-center">
            {navItems.map((item) => (
              <CustomMobileLink
                key={item.href}
                href={item.href}
                title={item.title}
                toggle={handleClick}
                isSPA={isSPA}
              />
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