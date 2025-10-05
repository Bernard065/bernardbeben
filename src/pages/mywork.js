import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clinic from "../../public/images/projects/clinic.png";
import devflow from "../../public/images/projects/devflow.png";
import evolgym from "../../public/images/projects/evolgym.png";
import threads from "../../public/images/projects/threads.png";
import gericht from "../../public/images/projects/gericht.png";
import piza from "../../public/images/projects/piza.jpg";
import wealth from "../../public/images/projects/wealth-track.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const ProjectDetails = ({ title, img, link, slug }) => {
  const router = useRouter();

  return (
    <motion.article
      className="w-full flex flex-col md:flex-row items-center justify-between 
      rounded-2xl border border-gray-200 dark:border-gray-800 
      bg-white dark:bg-gray-900 shadow-md hover:shadow-xl 
      text-gray-900 dark:text-white 
      p-4 sm:p-6 md:p-8 relative group transition-all duration-300 ease-in-out 
      hover:-translate-y-1 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
      rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Project Image */}
      <div className="w-full md:w-2/5 cursor-pointer overflow-hidden rounded-xl mb-4 md:mb-0 flex-shrink-0">
        <Link href={link} target="_blank" className="block w-full h-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>

      {/* Text + Buttons */}
      <div className="w-full md:w-3/5 flex flex-col items-center md:items-start justify-center 
      text-center md:text-left md:pl-6 lg:pl-8 break-words">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight 
        break-words hover:text-blue-600 dark:hover:text-blue-400 
        transition-colors duration-200 cursor-pointer">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-center md:justify-start 
        gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
          <Link
            href={`/projects/${slug}`}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
            text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm font-semibold 
            transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
            text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm font-semibold 
            transition-all duration-200 transform hover:scale-105"
          >
            Visit Project
          </Link>
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
          <title>Bernard | My Work Page</title>
          <meta
            name="description"
            content="Explore my portfolio of innovative projects and creative solutions"
          />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center text-white min-h-screen bg-black">
          <Layout className="pt-16 lg:pt-20 px-0 sm:px-6 md:px-10">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          </Layout>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Bernard | My Work Page</title>
        <meta
          name="description"
          content="Explore my portfolio of innovative projects and creative solutions"
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center text-white min-h-screen overflow-x-hidden bg-black">
        <Layout className="pt-16 lg:pt-20 px-4 sm:px-6 md:px-10 xl:px-24">
          <AnimatedText
            text="Imagination Drives Innovation!"
            className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center"
          />

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full max-w-7xl mx-auto">
            <ProjectDetails
              title="DevOverflow"
              img={devflow}
              link="https://dev-overflow-git-main-bernard065s-projects.vercel.app/"
              slug="devoverflow"
            />

            <ProjectDetails
              title="WealthTrack"
              img={wealth}
              link="https://wealth-track.vercel.app/"
              slug="wealthtrack"
            />

            <ProjectDetails
              title="ClinicSync"
              img={clinic}
              link="https://clinic-sync.vercel.app/"
              slug="clinicsync"
            />

            <ProjectDetails
              title="Threads"
              img={threads}
              link="https://threads-application-nine.vercel.app/"
              slug="threads"
            />

            <ProjectDetails
              title="Pizza Tracker"
              img={piza}
              link="https://github.com/Bernard065/pizaa-tracker-API"
              slug="pizza-tracker"
            />

            <ProjectDetails
              title="EvolGym"
              img={evolgym}
              link="https://evolutionary-fitness-centre.vercel.app/"
              slug="evolutionarygym"
            />

            <ProjectDetails
              title="Gericht Restaurant"
              img={gericht}
              link="https://the-gourmet-garden-restaurant-application.vercel.app/"
              slug="gericht-restaurant"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default MyWork;
