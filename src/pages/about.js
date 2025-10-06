import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const About = () => {
  return (
    <>
      <Head>
        <title>Bernard | About Me</title>
        <meta
          name="description"
          content="Learn more about Bernard — a passionate full-stack developer skilled in TypeScript, React, Next.js, Node.js, Ruby, and Python."
        />
      </Head>

      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-x-hidden">
        <Layout className="pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 max-w-[1400px] mx-auto">
          <AnimatedText
            text="Passion Fuels Innovation!"
            className="mb-12 text-center text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          />

          {/* 🧠 About Section */}
          <section className="flex flex-col items-center justify-center mb-20">
            <motion.div
              className="text-left max-w-4xl space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                About Me
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Hi, I&apos;m <span className="text-white font-semibold">Bernard</span>, a
                full-stack developer who loves solving complex problems through
                code. I focus on building scalable, efficient, and beautiful
                digital experiences.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With a strong background in{" "}
                <span className="text-white font-medium">
                  TypeScript, JavaScript, and frameworks like React, Next.js, and
                  Node.js
                </span>
                , I also work with Ruby, Python, and Three.js to deliver rich,
                performant web apps that make an impact.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I’m passionate about collaboration, continuous learning, and
                turning innovative ideas into real-world applications that
                empower users and businesses alike.
              </p>
            </motion.div>
          </section>

          {/* 🧩 Skills, Experience & Education */}
          <section className="space-y-24">
            <Skills />
            <Experience />
            <Education />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default About;
