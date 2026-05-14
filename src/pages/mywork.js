import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import clinic from '../../public/images/projects/clinic.png';
import devflow from '../../public/images/projects/devflow.png';
import threads from '../../public/images/projects/threads.png';
import wealth from '../../public/images/projects/wealth-track.png';
import sleepy from '../../public/images/projects/sleepy-tab.jpeg';
import pixora from '../../public/images/projects/pixora.png';

const FramerImage = motion(Image);

const projects = [
  {
    title: 'Pixora AI',
    img: pixora,
    link: 'https://pixora-kappa-five.vercel.app/',
    slug: 'pixora-ai',
    description:
      'An AI-powered image generation platform built with a clean interface, modern user experience, and fast performance.',
    stack: ['Next.js', 'React', 'AI API', 'Tailwind CSS'],
  },
  {
    title: 'DevOverflow',
    img: devflow,
    link: 'https://dev-overflow-git-main-bernard065s-projects.vercel.app/',
    slug: 'devoverflow',
    description:
      'A developer-focused Q&A platform inspired by Stack Overflow, designed for asking, answering, and discovering technical solutions.',
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Sleepy Tabs Guardian',
    img: sleepy,
    link: 'https://github.com/Bernard065/sleepy-tabs',
    slug: 'sleepytab',
    description:
      'A browser productivity tool that helps users manage inactive tabs, reduce browser clutter, and improve focus.',
    stack: ['JavaScript', 'Browser Extension', 'Chrome APIs'],
  },
  {
    title: 'WealthTrack',
    img: wealth,
    link: 'https://wealth-track.vercel.app/',
    slug: 'wealthtrack',
    description:
      'A personal finance tracking application for monitoring income, expenses, and financial progress through a simple dashboard.',
    stack: ['React', 'Next.js', 'Finance Dashboard', 'Tailwind CSS'],
  },
  {
    title: 'ClinicSync',
    img: clinic,
    link: 'https://clinic-sync.vercel.app/',
    slug: 'clinicsync',
    description:
      'A healthcare management system concept for organizing clinic workflows, appointments, records, and patient information.',
    stack: ['React', 'Healthcare System', 'Dashboard UI'],
  },
  {
    title: 'Threads',
    img: threads,
    link: 'https://threads-application-nine.vercel.app/',
    slug: 'threads',
    description:
      'A social discussion application that allows users to create posts, interact with content, and participate in threaded conversations.',
    stack: ['Next.js', 'React', 'Social App', 'MongoDB'],
  },
];

const ProjectDetails = ({ title, img, link, slug, description, stack, index }) => {
  return (
    <motion.article
      className="group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 md:p-8 backdrop-blur-md shadow-[0_24px_100px_-70px_rgba(255,255,255,0.35)] transition-all hover:border-orange-500/40"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl transition-all group-hover:bg-orange-500/20" />
      <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 md:w-2/5">
          <Link href={link} target="_blank" className="block">
            <FramerImage
              src={img}
              alt={title}
              className="h-64 w-full object-cover sm:h-72 md:h-80"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
              priority={index === 0}
            />
          </Link>
        </div>

        <div className="w-full text-center md:w-3/5 md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Featured Project
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href={`/projects/${slug}`}
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:scale-105"
            >
              Learn More
            </Link>

            <Link
              href={link}
              target="_blank"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const MyWork = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Bernard | My Work</title>
          <meta
            name="description"
            content="Explore Bernard's portfolio of full-stack web development projects, AI applications, dashboards, and modern digital products."
          />
        </Head>

        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black text-white">
          <Layout className="pt-16 lg:pt-20">
            <div className="flex h-64 items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-b-orange-500" />
            </div>
          </Layout>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Bernard | My Work</title>
        <meta
          name="description"
          content="Explore Bernard's portfolio of full-stack web development projects, AI applications, dashboards, and modern digital products."
        />
      </Head>

      <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <Layout className="relative z-10 px-4 pt-20 sm:px-6 md:px-10 xl:px-24">
          <section className="mx-auto mb-16 max-w-4xl text-center">
            <AnimatedText
              text="Projects That Turn Ideas Into Products."
              className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
              A collection of web applications, AI tools, dashboards, and
              product experiences built with modern frontend and backend
              technologies.
            </p>
          </section>

          <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 pb-24 sm:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectDetails
                key={project.slug}
                index={index}
                {...project}
              />
            ))}
          </section>
        </Layout>
      </main>
    </>
  );
};

export default MyWork;