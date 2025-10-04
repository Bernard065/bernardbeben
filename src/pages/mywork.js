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

const ProjectDetails = ({ title, summary, img, link, slug }) => {
  const router = useRouter();


  const shortSummary =
    summary.length > 100 ? summary.slice(0, 100) + "..." : summary;

  return (
    <motion.article
      className="w-full flex flex-col lg:flex-row items-center justify-between rounded-2xl border border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl text-gray-900 dark:text-white p-6 lg:p-8 relative group transition-all duration-300 ease-in-out hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-full lg:w-2/5 cursor-pointer overflow-hidden rounded-xl mb-4 lg:mb-0">
        <Link href={link} target="_blank" className="block w-full h-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-48 lg:h-64 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>

      <div className="w-full lg:w-3/5 flex flex-col items-start justify-between pl-0 lg:pl-8">
        <div className="mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
            {title}
          </h2>
        </div>


        <div className="flex items-center justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={link}
            target="_blank"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105"
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
          <meta name="description" content="Explore my portfolio of innovative projects and creative solutions" />
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
        <title>Bernard | My Work Page</title>
        <meta name="description" content="Explore my portfolio of innovative projects and creative solutions" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center text-white min-h-screen">
        <Layout className="pt-16 lg:pt-20">
          <AnimatedText
            text="Imagination Drives Innovation!"
            className="mb-12 lg:mb-16 text-5xl lg:text-7xl xl:text-8xl sm:mb-8 sm:text-4xl xs:text-3xl"
          />
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="col-span-12">
              <div className="col-span-12">
                <ProjectDetails
                  title="DevOverflow"
                  summary="Dev Overflow is a popular online platform where developers and programmers can ask and answer questions related to coding, software development, and various technical topics. It operates as a community-driven Q&A site where users can post questions, provide answers, and vote on the quality of contributions. This application was built using Next.js, Reactjs, Tailwind CSS, and MongoDB, and clerk user authentication, real-time updates using webhooks."
                  img={devflow}
                  link="https://dev-overflow-git-main-bernard065s-projects.vercel.app/"
                  slug="devoverflow"
                />
              </div>
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="WealthTrack"
                summary="WealthTack is a scalable and SEO-optimized banking app with a finance management dashboard, built using Next.js 14. It integrates banking APIs like Plaid and Dwolla to connect users' bank accounts, display real-time transaction data, and enable secure user-to-user payment transfers. Authentication is managed through Appwrite, ensuring secure login and account management. The app includes a user-friendly dashboard for viewing transaction history and managing multiple bank accounts. Real-time transaction updates are displayed without page reloads. Error tracking and security are handled via Sentry."
                img={wealth}
                link="https://wealth-track.vercel.app/"
                slug="wealthtrack"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="ClinicSync"
                summary="ClinicSync is a comprehensive healthcare management system that streamlines the appointment process for patients and administrators. Patients can easily schedule appointments, which administrators can then confirm, triggering an SMS notification to inform the patient. Administrators also have the ability to cancel appointments, ensuring flexibility and clear communication. Built with Next.js, React.js, Appwrite, and Twilio, ClinicSync leverages these technologies to provide a robust and efficient platform for managing healthcare appointments, enhancing the overall experience for both patients and healthcare providers."
                img={clinic}
                link="https://clinic-sync.vercel.app/"
                slug="clinicsync"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Threads"
                summary="Threads Application, built with Next.js 14 and Reactjs, utilizes server-side rendering for optimal performance and MongoDB for complex data handling. TailwindCSS ensures responsive, beautiful layouts, while Clerk manages authentication. UploadThing supports file uploads, and Shadcn components enhance UI. The app features real-time event handling via webhooks, and employs Zod for data validation. React Hook Form simplifies form management, and modern Next.js layout route groups are utilized. Users can create and interact with threads, and admins can invite members to communities with notifications. The application is designed with a solid architecture and reusable components for scalability and maintainability."
                img={threads}
                link="https://threads-application-nine.vercel.app/"
                slug="threads"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Pizza Tracker"
                summary="The Pizza Tracker is a Rails API that enables users to track restaurants and their associated pizzas. The API offers various endpoints, including fetching a list of all restaurants and pizzas, accessing details of a specific restaurant along with its pizzas, and creating RestaurantPizza records to associate existing pizzas with restaurants. Users can use the endpoints to manage restaurant-pizza relationships seamlessly. The API employs the Restaurant, Pizza, and RestaurantPizza models to efficiently organize and retrieve relevant data, providing a comprehensive pizza tracking solution."
                img={piza}
                link="https://github.com/Bernard065/pizaa-tracker-API"
                slug="pizza-tracker"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="EvolutionaryGym"
                summary='"EvolutionaryGym" is a cutting-edge React frontend application built with TypeScript, Vite, Tailwind CSS, Hero Icons, Framer Motion, and Form Submit functionality. It aims to deliver a smooth and visually appealing user experience while incorporating React Anchor Link Smooth Scroll for seamless navigation.'
                img={evolgym}
                link="https://evolutionary-fitness-centre.vercel.app/"
                slug="evolutionarygym"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Gericht Restaurant"
                summary="The Gericht Restaurant is a web application created from a Figma design for a hotel landing page. Developed using React, the project includes React Icons for stylish iconography. The application translates the Figma design into a visually captivating and fully functional hotel landing page."
                img={gericht}
                link="https://the-gourmet-garden-restaurant-application.vercel.app/"
                slug="gericht-restaurant"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default MyWork;
