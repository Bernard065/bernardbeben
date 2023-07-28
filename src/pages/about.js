import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import aboutProfile from '../../public/images/profile/A black program 0.png';
import { motion } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const About = () => {
  return (
    <>
      <Head>
        <title>Bernard | About Page</title>
        <meta name='about' content='about' />
      </Head>
      <main className='w-full flex flex-col items-center justify-center text-white bg-gray-900 min-h-screen'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Innovation!' />

          <section className='grid grid-cols-2 lg:grid-cols-1 gap-12 items-center mt-8'>
            <motion.div
              className='text-center md:text-left'
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className='text-3xl font-bold mb-4 text-center'>About Me</h2>
              <p className='text-lg text-left mb-3'>
                Hi, I&apos;m Bernard, a full-stack developer. As a skilled software developer, I
                bring a diverse set of technical skills and creative problem-solving abilities
                to create efficient, scalable, and user-friendly solutions.
              </p>
              <p className='text-lg text-left mb-3'>
                With expertise in
                TypeScript, JavaScript, and frameworks like ReactJs, Node.js, Next.js, Ruby, Python
                and Three.js, I have a strong foundation in web development and a proven track
                record of delivering high-quality software products. I thrive on collaboration
                and excel at working closely with clients to understand their needs and goals.
              </p>
              <p className='text-lg text-left'>
                By leveraging my technical knowledge and adaptability, I ensure that the
                solutions I develop address real-world problems and exceed client expectations.
              </p>
            </motion.div>
            <div>
              <Image src={aboutProfile} alt='bernard' />
            </div>
          </section>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
