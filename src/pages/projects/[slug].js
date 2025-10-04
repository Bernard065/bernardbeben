import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";

// Project data with detailed information
const projectsData = {
  "devoverflow": {
    title: "DevOverflow",
    description: "Dev Overflow is a popular online platform where developers and programmers can ask and answer questions related to coding, software development, and various technical topics. It operates as a community-driven Q&A site where users can post questions, provide answers, and vote on the quality of contributions.",
    fullDescription: `DevOverflow is a comprehensive Q&A platform built specifically for developers, designed to foster knowledge sharing and community collaboration. The platform features a modern, intuitive interface that makes it easy for developers of all skill levels to find solutions to their coding challenges.

Key features include:
• Real-time question and answer system with voting mechanism
• Advanced search and filtering capabilities
• User reputation and badge system
• Tag-based categorization for easy content discovery
• Responsive design that works seamlessly across all devices
• Dark/light theme support for user preference

The application leverages modern web technologies to ensure fast performance and excellent user experience. Built with Next.js 14 for optimal SEO and performance, MongoDB for flexible data storage, and integrated with Clerk for secure authentication.`,
    images: [
      "/images/projects/devflow.png",
      "/images/projects/devflow.png",
      "/images/projects/devflow.png"
    ],
    technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Clerk Auth", "Webhooks"],
    link: "https://dev-overflow-git-main-bernard065s-projects.vercel.app/",
    github: "https://github.com/Bernard065/dev-overflow",
    featured: true
  },
  "wealthtrack": {
    title: "WealthTrack",
    description: "WealthTrack is a scalable and SEO-optimized banking app with a finance management dashboard, built using Next.js 14.",
    fullDescription: `WealthTrack represents a modern approach to personal finance management, combining cutting-edge technology with intuitive design to help users take control of their financial lives. The application provides a comprehensive suite of tools for managing multiple bank accounts, tracking expenses, and monitoring investment performance.

Built with scalability in mind, WealthTrack integrates with major banking APIs to provide real-time data synchronization. The platform features advanced security measures and complies with financial industry standards for data protection.

Key Features:
• Real-time transaction monitoring and categorization
• Multi-bank account aggregation and management
• Advanced reporting and analytics dashboard
• Secure user-to-user payment transfers
• Automated expense tracking and budgeting tools
• Investment portfolio tracking and performance analysis
• Mobile-responsive design for on-the-go finance management`,
    images: [
      "/images/projects/wealth-track.png",
      "/images/projects/wealth-track.png",
      "/images/projects/wealth-track.png"
    ],
    technologies: ["Next.js 14", "React", "Appwrite", "Plaid API", "Dwolla", "Sentry"],
    link: "https://wealth-track.vercel.app/",
    github: "https://github.com/Bernard065/wealth-track",
    featured: true
  },
  "clinicsync": {
    title: "ClinicSync",
    description: "ClinicSync is a comprehensive healthcare management system that streamlines the appointment process for patients and administrators.",
    fullDescription: `ClinicSync revolutionizes healthcare management by providing a seamless digital platform that connects patients with healthcare providers. The system eliminates traditional barriers in appointment scheduling and management, creating a more efficient and patient-centric healthcare experience.

The platform serves both patients and healthcare administrators, offering tools that streamline communication, reduce no-show rates, and improve overall healthcare delivery efficiency.

Key Features:
• Intelligent appointment scheduling and management system
• Real-time SMS notifications for appointment confirmations
• Administrative dashboard for healthcare providers
• Patient portal with appointment history and reminders
• Automated appointment cancellation and rescheduling
• Secure patient data management with HIPAA compliance
• Multi-provider support for clinics and medical centers`,
    images: [
      "/images/projects/clinic.png",
      "/images/projects/clinic.png",
      "/images/projects/clinic.png"
    ],
    technologies: ["Next.js", "React", "Appwrite", "Twilio SMS", "Node.js"],
    link: "https://clinic-sync.vercel.app/",
    github: "https://github.com/Bernard065/clinic-sync",
    featured: false
  },
  "threads": {
    title: "Threads",
    description: "Threads Application, built with Next.js 14 and Reactjs, utilizes server-side rendering for optimal performance and MongoDB for complex data handling.",
    fullDescription: `Threads represents a modern social media platform designed for meaningful conversations and community building. Built with performance and scalability in mind, the application provides users with a clean, intuitive interface for creating and engaging with threaded conversations.

The platform emphasizes community governance and user engagement, with features that promote quality content and meaningful interactions.

Key Features:
• Thread-based conversation system with nested replies
• Community creation and management tools
• Real-time notifications and activity feeds
• Advanced content moderation and admin tools
• File upload and media sharing capabilities
• User authentication and profile management
• Responsive design optimized for all devices`,
    images: [
      "/images/projects/threads.png",
      "/images/projects/threads.png",
      "/images/projects/threads.png"
    ],
    technologies: ["Next.js 14", "React", "MongoDB", "TailwindCSS", "Clerk", "UploadThing"],
    link: "https://threads-application-nine.vercel.app/",
    github: "https://github.com/Bernard065/threads-application",
    featured: false
  },
  "pizza-tracker": {
    title: "Pizza Tracker",
    description: "The Pizza Tracker is a Rails API that enables users to track restaurants and their associated pizzas.",
    fullDescription: `Pizza Tracker is a robust REST API built with Ruby on Rails that provides a comprehensive solution for managing restaurant and pizza data. The API follows RESTful conventions and provides a clean, well-documented interface for client applications.

Designed with scalability and maintainability in mind, the API includes comprehensive error handling, data validation, and supports complex relationships between restaurants and their pizza offerings.

Key Features:
• Complete CRUD operations for restaurants and pizzas
• Many-to-many relationship management between restaurants and pizzas
• Advanced querying and filtering capabilities
• Comprehensive API documentation
• Data validation and error handling
• JSON API specification compliance
• Database relationship optimization`,
    images: [
      "/images/projects/piza.jpg",
      "/images/projects/piza.jpg",
      "/images/projects/piza.jpg"
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "REST API", "JSON API"],
    link: "https://github.com/Bernard065/pizaa-tracker-API",
    github: "https://github.com/Bernard065/pizaa-tracker-API",
    featured: false
  },
  "evolutionarygym": {
    title: "EvolutionaryGym",
    description: "EvolutionaryGym is a cutting-edge React frontend application built with TypeScript, Vite, Tailwind CSS, Hero Icons, Framer Motion, and Form Submit functionality.",
    fullDescription: `EvolutionaryGym represents a modern approach to fitness center management, providing a comprehensive digital platform that enhances the gym experience for both members and staff. The application combines beautiful design with powerful functionality to create an engaging fitness community.

Built with performance and user experience as top priorities, the platform provides seamless navigation and intuitive interactions across all devices.

Key Features:
• Interactive gym equipment showcase with detailed specifications
• Class scheduling and booking system
• Membership management and progress tracking
• Trainer profiles and appointment scheduling
• Nutrition and workout plan integration
• Community features and social engagement
• Mobile-optimized responsive design`,
    images: [
      "/images/projects/evolgym.png",
      "/images/projects/evolgym.png",
      "/images/projects/evolgym.png"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://evolutionary-fitness-centre.vercel.app/",
    github: "https://github.com/Bernard065/Evolutionary-Fitness-Centre",
    featured: false
  },
  "gericht-restaurant": {
    title: "Gericht Restaurant",
    description: "The Gericht Restaurant is a web application created from a Figma design for a hotel landing page.",
    fullDescription: `Gericht Restaurant showcases a premium dining experience through a beautifully crafted web application that captures the essence of fine dining and culinary excellence. The platform serves as both a marketing tool and a reservation system for a high-end restaurant.

Designed with attention to detail and user experience, the application reflects the sophistication and elegance of the dining establishment it represents.

Key Features:
• Visually stunning hero section with immersive imagery
• Interactive menu showcase with detailed descriptions
• Online reservation system with real-time availability
• Chef profiles and restaurant history
• Photo gallery showcasing ambiance and dishes
• Contact information and location details
• Responsive design maintaining elegance across devices`,
    images: [
      "/images/projects/gericht.png",
      "/images/projects/gericht.png",
      "/images/projects/gericht.png"
    ],
    technologies: ["React", "React Icons", "CSS3", "Responsive Design"],
    link: "https://the-gourmet-garden-restaurant-application.vercel.app/",
    github: "https://github.com/Bernard065/The-Gericht-Garden-restaurant-application",
    featured: false
  }
};

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      console.log('Looking for project with slug:', slug);
      console.log('Available projects:', Object.keys(projectsData));

      if (projectsData[slug]) {
        console.log('Found project:', projectsData[slug].title);
        setProject(projectsData[slug]);
        setLoading(false);
      } else {
        console.log('Project not found for slug:', slug);
        console.log('Available slugs:', Object.keys(projectsData));
        // Use Next.js router for client-side navigation instead of window.location
        router.push('/mywork').catch(console.error);
        return;
      }
    }
  }, [slug, router]);

  if (loading || !project) {
    return (
      <>
        <Head>
          <title>Loading Project | Bernard</title>
          <meta name="description" content="Loading project details..." />
        </Head>
        <main className="w-full mb-16 flex flex-col items-center justify-center text-white min-h-screen">
          <Layout className="pt-16 lg:pt-20">
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
        <title>{project.title} | Bernard</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center text-white">
        <Layout className="pt-16">
          {/* Hero Section */}
          <div className="mb-16">
            <motion.button
              onClick={() => router.back()}
              className="mb-8 text-blue-400 hover:text-blue-300 flex items-center space-x-2"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>← Back to Projects</span>
            </motion.button>

            <AnimatedText
              text={project.title}
              className="mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
            />

            {project.featured && (
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                  Featured Project
                </span>
              </div>
            )}
          </div>

          {/* Project Images Gallery */}
          <div className="mb-16">
            <div className="relative h-96 lg:h-[500px] w-full mb-4 overflow-hidden rounded-2xl">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex space-x-2 justify-center">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Visit Live Project
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center space-x-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    >
                      <GitHubIcon className="text-lg" />
                      <span>View Source Code</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectDetail;