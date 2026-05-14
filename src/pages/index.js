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
      className={`relative w-full py-24 md:py-32 flex flex-col items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
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
    className="w-full flex md:flex-row flex-col items-center justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8 group overflow-hidden shadow-[0_20px_120px_-90px_rgba(255,255,255,0.2)]"
    whileHover={{ borderColor: 'rgba(249, 115, 22, 0.4)', y: -4 }}
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
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-orange-500 transition-colors">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4 mt-2">
        <Link
          href={`/projects/${slug}`}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-all"
        >
          Learn More
        </Link>

        <Link
          href={link}
          target="_blank"
          className="border border-white/20 px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-all"
        >
          Visit Project
        </Link>
      </div>
    </div>
  </motion.article>
);

/**
 * Hero Metrics
 */
const HERO_METRICS = [
  { value: '12+', label: 'Projects Delivered' },
  { value: '5+', label: 'Tech Articles' },
  { value: '2+', label: 'Years Experience' },
];

/**
 * Article Feed Data
 */
const ARTICLES_DATA = [
  {
    title: 'Simplifying State Management with Redux Toolkit',
    date: 'July 13, 2023',
    link: 'https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1',
  },
  {
    title: 'Implementing JWT Authentication in Rails',
    date: 'May 20, 2023',
    link: 'https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6',
  },
  {
    title: 'Mastering Asynchronous Programming in JavaScript',
    date: 'June 24, 2024',
    link: 'https://medium.com/@bernardbebeni/mastering-asynchronous-programming-in-javascript-a-comprehensive-guide-0384c105d518',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  // SPA Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: 'loading',
      message: 'Sending...',
    });

    // Temporary simulated form submission.
    // Replace this with EmailJS, Formspree, Resend, Nodemailer, or a Next.js API route.
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message sent successfully!',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus({
          type: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-black text-white selection:bg-orange-500/30">
      <Head>
        <title>Bernard | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Nairobi-based full-stack developer specializing in Next.js, React, Node.js, APIs, and modern web applications."
        />
      </Head>

      {/* Modern Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar isSPA={true} />

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <Section id="home">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
          </div>

          <Layout className="!py-0">
            <div className="flex items-center lg:flex-col gap-12 lg:gap-16 relative z-10">
              <div className="w-1/2 lg:w-full max-w-md">
                <Image
                  src={profilePic}
                  alt="Bernard"
                  className="w-full h-auto rounded-[2rem] shadow-2xl border border-white/10"
                  priority
                />
              </div>

              <div className="w-1/2 lg:w-full lg:text-center flex flex-col items-center md:items-start">
                <AnimatedText
                  text="Transforming Ideas into Scalable Web Applications."
                  className="!text-5xl lg:!text-6xl text-left lg:text-center"
                />

                <p className="my-6 text-gray-400 text-lg md:text-base leading-relaxed max-w-xl">
                  I am a full-stack developer and technical writer focused on
                  building responsive, reliable, and user-friendly web
                  applications using modern technologies like React, Next.js,
                  TypeScript, Node.js, and REST APIs.
                </p>

                <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                  <button
                    onClick={() =>
                      document
                        .getElementById('contact')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                    className="px-8 py-4 bg-orange-500 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105"
                  >
                    Contact Me
                  </button>

                  <a
                    href="/Benard_Omboga_CV.pdf"
                    download
                    className="px-8 py-4 bg-white/10 rounded-full font-bold border border-white/10 hover:bg-white/20 transition-all"
                  >
                    Download CV
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-10 w-full max-w-xl">
                  {HERO_METRICS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
                    >
                      <p className="text-3xl font-bold text-white">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm text-gray-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
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
              <p>
                Hi, I&apos;m{' '}
                <span className="text-white font-bold">Bernard</span>, a
                full-stack developer dedicated to building scalable, clean, and
                beautiful digital experiences.
              </p>

              <p>
                With hands-on experience in{' '}
                <span className="text-white">
                  TypeScript, React, Next.js, Node.js, APIs, and modern UI
                  development
                </span>
                , I enjoy turning complex ideas into practical software
                solutions that are fast, usable, and maintainable.
              </p>
            </div>

            <div className="mt-16 space-y-6">
              <div className="rounded-[2rem] bg-gradient-to-br from-orange-500/10 via-white/5 to-black/20 border border-orange-500/15 p-8 backdrop-blur-xl shadow-[0_24px_80px_-60px_rgba(249,115,22,0.8)]">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300 mb-3">
                  Portfolio Spotlight
                </p>

                <h3 className="text-3xl font-semibold text-white mb-4">
                  Modern products, clean interfaces, and practical digital
                  solutions.
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  I build modern web applications that combine clean design,
                  reliable functionality, and real-world usability. My focus is
                  on creating fast, responsive, and scalable products that solve
                  practical problems while giving users a smooth digital
                  experience.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-gray-300">
                <h3 className="text-3xl font-semibold text-white mb-4">
                  What I build
                </h3>

                <p className="leading-relaxed text-gray-300">
                  I focus on building full-stack web applications with strong
                  user interfaces, clean backend logic, and maintainable code.
                  My workflow combines frontend development, API integration,
                  database design, testing, and deployment.
                </p>

                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="rounded-3xl bg-black/30 p-5">
                    <p className="text-xl font-semibold text-white">
                      Responsive Frontend Interfaces
                    </p>

                    <p className="mt-2 text-gray-400">
                      Building fast, accessible, and mobile-friendly interfaces
                      using React, Next.js, TypeScript, and Tailwind CSS.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-black/30 p-5">
                    <p className="text-xl font-semibold text-white">
                      Scalable Backend Systems
                    </p>

                    <p className="mt-2 text-gray-400">
                      Developing APIs, database-driven features, authentication
                      flows, and reliable server-side logic for production-ready
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Sub-components */}
            <div className="mt-20 space-y-10">
              <Skills />
              <Experience />
            </div>
          </Layout>
        </Section>

        {/* --- PROJECTS SECTION --- */}
        <Section id="projects">
          <Layout>
            <AnimatedText text="Featured Projects" className="mb-16" />

            <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
              <ProjectCard
                title="Pixora AI"
                img={pixora}
                link="https://pixora-kappa-five.vercel.app/"
                slug="pixora-ai"
              />

              <ProjectCard
                title="DevOverflow"
                img={devflow}
                link="https://dev-overflow.vercel.app/"
                slug="devoverflow"
              />

              <ProjectCard
                title="WealthTrack"
                img={wealth}
                link="https://wealth-track.vercel.app/"
                slug="wealthtrack"
              />

              <ProjectCard
                title="ClinicSync"
                img={clinic}
                link="https://clinic-sync.vercel.app/"
                slug="clinicsync"
              />

              <ProjectCard
                title="Threads"
                img={threads}
                link="https://threads-application-nine.vercel.app/"
                slug="threads"
              />

              <ProjectCard
                title="Sleepy Tabs Guardian"
                img={sleepy}
                link="https://github.com/Bernard065/sleepy-tabs"
                slug="sleepytab"
              />
            </div>
          </Layout>
        </Section>

        {/* --- ARTICLES SECTION --- */}
        <Section id="articles" className="bg-white/[0.02]">
          <Layout>
            <AnimatedText text="Technical Writing" className="mb-16" />

            <div className="max-w-4xl mx-auto space-y-4">
              {ARTICLES_DATA.map((article) => (
                <article
                  key={article.link}
                  className="p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all bg-black/40 flex justify-between items-center group"
                >
                  <Link href={article.link} target="_blank" className="flex-1">
                    <h4 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {article.date}
                    </p>
                  </Link>

                  <span className="text-orange-500 text-2xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="https://medium.com/@bernardbebeni"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors"
              >
                More articles
              </Link>
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  required
                />

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
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
                  <p
                    className={`text-center font-medium ${
                      status.type === 'success'
                        ? 'text-green-400'
                        : 'text-orange-400'
                    }`}
                  >
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