import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

// Core UI Components
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import AnimatedText from '@/components/AnimatedText';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

// Project Assets
import pixora from '../../public/images/projects/pixora.png';
import devflow from '../../public/images/projects/devflow.png';
import sleepy from '../../public/images/projects/sleepy-tab.jpeg';
import wealth from '../../public/images/projects/wealth-track.png';
import clinic from '../../public/images/projects/clinic.png';
import threads from '../../public/images/projects/threads.png';
import profilePic from '../../public/images/profile/boimelo3.png';

const FramerImage = motion(Image);

/**
 * Modern Section Wrapper with standardized SPA spacing
 */
const Section = ({ id, children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.section
      id={id}
      ref={ref}
      // Balanced vertical padding for a modern, fluid rhythm
      className={`w-full py-24 md:py-32 flex flex-col items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

/**
 * Project Card Component
 */
const ProjectCard = ({ title, img, link, slug }) => (
  <motion.article 
    className="w-full flex md:flex-row flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8 group overflow-hidden"
    whileHover={{ borderColor: 'rgba(249, 115, 22, 0.4)' }}
  >
    <div className="w-full md:w-2/5 overflow-hidden rounded-xl">
      <Link href={link} target="_blank">
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto object-cover" 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        />
      </Link>
    </div>
    <div className="w-full md:w-3/5 md:pl-10 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-orange-500 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        <Link href={`/projects/${slug}`} className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-all">
          Learn More
        </Link>
        <Link href={link} target="_blank" className="border border-white/20 px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all">
          Visit Project
        </Link>
      </div>
    </div>
  </motion.article>
);

/**
 * Article Feed Data
 */
const ARTICLES_DATA = [
  { title: 'Simplifying State Management with Redux Toolkit', date: 'July 13, 2023', link: 'https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1' },
  { title: 'Implementing JWT Authentication in Rails', date: 'May 20, 2023', link: 'https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6' },
  { title: 'Mastering Asynchronous Programming in JavaScript', date: 'June 24, 2024', link: 'https://medium.com/@bernardbebeni/mastering-asynchronous-programming-in-javascript-a-comprehensive-guide-0384c105d518' }
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  
  // SPA Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
    setTimeout(() => {
      setStatus({ type: 'success', message: "Message sent successfully!" });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  return (
    <div className="bg-black text-white selection:bg-orange-500/30">
      <Head>
        <title>Bernard | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Nairobi-based full-stack developer specializing in Next.js, React, and Node.js." />
      </Head>

      {/* Modern Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[100] origin-left" style={{ scaleX }} />

      <Navbar isSPA={true} />
      
      <main className="pt-20">
        
        {/* --- HERO SECTION --- */}
        <Section id="home">
          <Layout className="!py-0">
            <div className="flex items-center lg:flex-col gap-12 lg:gap-16">
              <div className="w-1/2 lg:w-full max-w-md">
                <Image src={profilePic} alt="Bernard" className="w-full h-auto rounded-3xl shadow-2xl border border-white/5" priority />
              </div>
              <div className="w-1/2 lg:w-full lg:text-center flex flex-col items-center md:items-start">
                <AnimatedText text="Transforming Imagination into Reality with Code." className="!text-5xl lg:!text-6xl text-left lg:text-center" />
                <p className="my-6 text-gray-400 text-lg md:text-base leading-relaxed max-w-xl">
                  As a skilled developer and technical writer, I turn complex ideas into innovative web applications. Explore my latest work and technical guides below.
                </p>
                <div className="flex gap-4 mt-2">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                    className="px-8 py-4 bg-orange-500 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105"
                  >
                    Contact Me
                  </button>
                  <a href="/Benard_Omboga_CV.pdf" download className="px-8 py-4 bg-white/10 rounded-full font-bold border border-white/10 hover:bg-white/20 transition-all">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </Layout>
        </Section>

        {/* --- ABOUT SECTION --- */}
        <Section id="about" className="bg-white/[0.02]">
          <Layout>
            <AnimatedText text="Passion Fuels Innovation!" className="mb-12" />
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-base text-gray-300 text-center leading-relaxed">
              <p>Hi, I&apos;m <span className="text-white font-bold">Bernard</span>, a full-stack developer dedicated to building scalable and beautiful digital experiences.</p>
              <p>With expertise in <span className="text-white">TypeScript, React, Next.js, and Node.js</span>, I specialize in solving complex problems through efficient, clean code.</p>
            </div>
            
            {/* Integrated Sub-components */}
            <div className="mt-20">
              <Skills />
              <Experience />
              <Education />
            </div>
          </Layout>
        </Section>

        {/* --- PROJECTS SECTION --- */}
        <Section id="projects">
          <Layout>
            <AnimatedText text="Featured Projects" className="mb-16" />
            <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
              <ProjectCard title="Pixora AI" img={pixora} link="https://pixora-kappa-five.vercel.app/" slug="pixora-ai" />
              <ProjectCard title="DevOverflow" img={devflow} link="https://dev-overflow.vercel.app/" slug="devoverflow" />
              <ProjectCard title="WealthTrack" img={wealth} link="https://wealth-track.vercel.app/" slug="wealthtrack" />
              <ProjectCard title="Sleepy Tabs Guardian" img={sleepy} link="https://github.com/Bernard065/sleepy-tabs" slug="sleepytab" />
            </div>
          </Layout>
        </Section>

        {/* --- ARTICLES SECTION --- */}
        <Section id="articles" className="bg-white/[0.02]">
          <Layout>
            <AnimatedText text="Technical Writing" className="mb-16" />
            <div className="max-w-4xl mx-auto space-y-4">
              {ARTICLES_DATA.map((article) => (
                <article key={article.link} className="p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all bg-black/40 flex justify-between items-center group">
                  <Link href={article.link} target="_blank" className="flex-1">
                    <h4 className="text-xl font-bold group-hover:text-orange-500 transition-colors">{article.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                  </Link>
                  <span className="text-orange-500 text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </article>
              ))}
            </div>
          </Layout>
        </Section>

        {/* --- CONTACT SECTION --- */}
        <Section id="contact">
          <Layout>
            <AnimatedText text="Let's Build Something!" className="mb-12" />
            <div className="max-w-3xl mx-auto w-full bg-white/5 p-8 md:p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required 
                />
                <textarea 
                  rows={6} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors resize-none" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required 
                />
                <button 
                  type="submit" 
                  disabled={status.type === 'loading'}
                  className="w-full py-4 bg-orange-500 rounded-xl font-bold text-xl hover:bg-orange-600 transition-all disabled:opacity-50"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status.message && (
                  <p className={`text-center font-medium ${status.type === 'success' ? 'text-green-400' : 'text-orange-400'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Layout>
        </Section>

      </main>
    </div>
  );
}