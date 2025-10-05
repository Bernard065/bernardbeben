import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

// -----------------------------
// 📘 Project Data
// -----------------------------
const projectsData = {
  devoverflow: {
    title: "DevOverflow",
    description:
      "Dev Overflow is a developer Q&A platform for knowledge sharing and collaboration.",
    fullDescription: `DevOverflow is a community-driven platform that enables developers to ask and answer coding-related questions with real-time updates and reputation tracking.

Key features include:
• Real-time Q&A with voting and tagging
• User reputation and badges
• Responsive UI and dark/light modes
• Built using Next.js 14, MongoDB, and Clerk Auth.`,
    images: ["/images/projects/devflow.png"],
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Tailwind CSS",
      "Clerk Auth",
    ],
    link: "https://dev-overflow-git-main-bernard065s-projects.vercel.app/",
    github: "https://github.com/Bernard065/dev-overflow",
    featured: true,
  },
  wealthtrack: {
    title: "WealthTrack",
    description:
      "A finance dashboard app with banking API integration and smart budgeting.",
    fullDescription: `WealthTrack helps users manage their finances with real-time bank data and intuitive analytics dashboards.

Features:
• Secure banking data sync
• Multi-account tracking
• Advanced analytics & budgeting
• Built with Next.js 14 and Plaid API.`,
    images: ["/images/projects/wealth-track.png"],
    technologies: ["Next.js", "Appwrite", "Plaid API", "Dwolla", "Sentry"],
    link: "https://wealth-track.vercel.app/",
    github: "https://github.com/Bernard065/wealth-track",
    featured: true,
  },
  clinicsync: {
    title: "ClinicSync",
    description:
      "Healthcare management system for scheduling and patient coordination.",
    fullDescription: `ClinicSync digitalizes healthcare scheduling with SMS notifications, dashboards, and secure record management.`,
    images: ["/images/projects/clinic.png"],
    technologies: ["Next.js", "Appwrite", "Twilio", "Node.js"],
    link: "https://clinic-sync.vercel.app/",
    github: "https://github.com/Bernard065/clinic-sync",
  },
  threads: {
    title: "Threads",
    description:
      "Social media app for meaningful conversations built with Next.js 14.",
    fullDescription: `Threads provides an elegant UI for community-based threaded discussions with authentication and real-time updates.`,
    images: ["/images/projects/threads.png"],
    technologies: ["Next.js", "MongoDB", "TailwindCSS", "Clerk"],
    link: "https://threads-application-nine.vercel.app/",
    github: "https://github.com/Bernard065/threads-application",
  },
  "pizza-tracker": {
    title: "Pizza Tracker",
    description: "Rails API for managing restaurants and pizzas.",
    fullDescription: `A REST API built with Ruby on Rails offering CRUD functionality and JSON API compliance for pizza tracking.`,
    images: ["/images/projects/piza.jpg"],
    technologies: ["Ruby on Rails", "PostgreSQL", "REST API"],
    link: "https://github.com/Bernard065/pizaa-tracker-API",
    github: "https://github.com/Bernard065/pizaa-tracker-API",
  },
  evolutionarygym: {
    title: "EvolGym",
    description:
      "A modern React fitness app with animations and scheduling features.",
    fullDescription: `EvolGym showcases an interactive gym management frontend built with React, Vite, and Framer Motion.`,
    images: ["/images/projects/evolgym.png"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://evolutionary-fitness-centre.vercel.app/",
    github: "https://github.com/Bernard065/Evolutionary-Fitness-Centre",
  },
  "gericht-restaurant": {
    title: "Gericht Restaurant",
    description: "Restaurant website built from a Figma design.",
    fullDescription: `A visually immersive restaurant website with online reservations and chef profiles.`,
    images: ["/images/projects/gericht.png"],
    technologies: ["React", "CSS3", "Responsive Design"],
    link: "https://the-gourmet-garden-restaurant-application.vercel.app/",
    github:
      "https://github.com/Bernard065/The-Gericht-Garden-restaurant-application",
  },
};

// -----------------------------
// 🧠 Component
// -----------------------------
const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (slug && projectsData[slug]) setProject(projectsData[slug]);
    else if (slug) router.push("/mywork").catch(console.error);
  }, [slug, router]);

  if (!project) {
    return (
      <main className="flex justify-center items-center h-screen bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Bernard</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.images[0]} />
      </Head>

      <main className="min-h-screen w-full flex flex-col items-center text-white bg-black overflow-x-hidden">
        <Layout className="pt-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 w-full max-w-[1400px] mx-auto">
          {/* 🏁 Back Button */}
          <motion.button
            onClick={() => router.back()}
            className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>

          {/* ✨ Title */}
          <AnimatedText
            text={project.title}
            className="mb-8 text-3xl sm:text-4xl md:text-6xl text-center leading-tight"
          />

          {/* 🌟 Featured Badge */}
          {project.featured && (
            <div className="flex justify-center mb-10">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-4 py-2 rounded-full text-sm sm:text-base">
                Featured Project
              </span>
            </div>
          )}

          {/* 🖼️ Image Carousel */}
          <div className="relative w-full mb-12 rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-[3/2] lg:h-[480px]">
              <Image
                src={project.images[currentImageIndex]}
                alt={project.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* 📑 Responsive Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 w-full">
            {/* Project Overview */}
            <div className="order-2 xl:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-400">
                Project Overview
              </h2>
              <div className="text-gray-300 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                {project.fullDescription.split("\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Project Details Sidebar */}
            <aside
              className="
                order-1 xl:order-2
                bg-gray-900/50 
                rounded-2xl 
                p-5 sm:p-6 md:p-8 
                border border-gray-800 
                backdrop-blur-sm 
                w-full
                shadow-lg
                transition-all 
                duration-300
              "
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">
                Project Details
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base"
                  >
                    Visit Live Project
                  </Link>

                  {/* <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all text-sm sm:text-base"
                  >
                    <GitHubIcon className="text-lg" />
                    <span>View Source Code</span>
                  </Link> */}
                </div>
              </div>
            </aside>
          </div>

          {/* 📩 Footer */}
          <footer className="w-full text-center border-t border-gray-800 mt-16 pt-6 text-sm text-gray-400">
            <p>© 2025 All Rights Reserved.</p>
            <p className="font-medium text-white mt-1">Bernard</p>
            <p className="text-gray-400">bernardbebeni@gmail.com</p>
          </footer>
        </Layout>
      </main>
    </>
  );
};

export default ProjectDetail;
