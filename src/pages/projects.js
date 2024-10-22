import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import clinic from "../../public/images/projects/clinic.png";
import devflow from "../../public/images/projects/devflow.png";
import evolgym from "../../public/images/projects/evolgym.png";
import threads from "../../public/images/projects/threads.png";
import paypal from "../../public/images/projects/paypal.png";
import gericht from "../../public/images/projects/gericht.png";
import piza from "../../public/images/projects/piza.jpg";
import wealth from "../../public/images/projects/wealth-track.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const ProjectDetails = ({ type, title, summary, img, link, github }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shortSummary =
    summary.length > 100 ? summary.slice(0, 100) + "..." : summary;

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-white shadow-2xl text-white p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full  h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-white sm:text-sm">
          {isExpanded ? summary : shortSummary}
          {summary.length > 100 && (
            <button onClick={handleToggle} className="text-blue-500 ml-2">
              {isExpanded ? "Show less" : "More"}
            </button>
          )}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-white text-black p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Bernard | Projects Page</title>
        <meta name="description" content="description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center text-white">
        <Layout className="pt-16">
          <AnimatedText
            text=" Imagination Drives Innovation!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          
            <div className="col-span-12">
              <ProjectDetails
                title="DevOverflow"
                type="Community Project"
                summary="Dev Overflow is a popular online platform where developers and programmers can ask and answer questions related to coding, software development, and various technical topics. It operates as a community-driven Q&A site where users can post questions, provide answers, and vote on the quality of contributions. This application was built using Next.js, Reactjs, Tailwind CSS, and MongoDB, and clerk user authentication, real-time updates using webhooks.
                img={devflow}
                link="
                https:github="https://github.com/Bernard065/dev-overflow" //dev-overflow-git-main-bernard065s-projects.vercel.app/"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="WealthTrack"
                type="Financial Project"
                summary="WealthTack is a scalable and SEO-optimized banking app with a finance management dashboard, built using Next.js 14. It integrates banking APIs like Plaid and Dwolla to connect users' bank accounts, display real-time transaction data, and enable secure user-to-user payment transfers. Authentication is managed through Appwrite, ensuring secure login and account management. The app includes a user-friendly dashboard for viewing transaction history and managing multiple bank accounts. Real-time transaction updates are displayed without page reloads. Error tracking and security are handled via Sentry."
                img={wealth}
                link="https://wealth-track.vercel.app/"
                github="https://github.com/Bernard065/wealth-track"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="ClinicSync"
                type="Healthcare Project"
                summary="ClinicSync is a comprehensive healthcare management system that streamlines the appointment process for patients and administrators. Patients can easily schedule appointments, which administrators can then confirm, triggering an SMS notification to inform the patient. Administrators also have the ability to cancel appointments, ensuring flexibility and clear communication. Built with Next.js, React.js, Appwrite, and Twilio, ClinicSync leverages these technologies to provide a robust and efficient platform for managing healthcare appointments, enhancing the overall experience for both patients and healthcare providers."
                img={clinic}
                link="https://clinic-sync.vercel.app/"
                github="https://github.com/Bernard065/clinic-sync"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Threads"
                type="Social Media Project"
                summary="Threads Application, built with Next.js 14 and Reactjs, utilizes server-side rendering for optimal performance and MongoDB for complex data handling. TailwindCSS ensures responsive, beautiful layouts, while Clerk manages authentication. UploadThing supports file uploads, and Shadcn components enhance UI. The app features real-time event handling via webhooks, and employs Zod for data validation. React Hook Form simplifies form management, and modern Next.js layout route groups are utilized. Users can create and interact with threads, and admins can invite members to communities with notifications. The application is designed with a solid architecture and reusable components for scalability and maintainability."
                img={threads}
                link="https://threads-application-nine.vercel.app/"
                github="https://github.com/Bernard065/threads-application"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Pizza Tracker "
                type="Rails API"
                summary="The Pizza Tracker is a Rails API that enables users to track restaurants and their associated pizzas. The API offers various endpoints, including fetching a list of all restaurants and pizzas, accessing details of a specific restaurant along with its pizzas, and creating RestaurantPizza records to associate existing pizzas with restaurants. Users can use the endpoints to manage restaurant-pizza relationships seamlessly. The API employs the Restaurant, Pizza, and RestaurantPizza models to efficiently organize and retrieve relevant data, providing a comprehensive pizza tracking solution."
                img={piza}
                link="https://github.com/Bernard065/pizaa-tracker-API"
                github="https://github.com/Bernard065/pizaa-tracker-API"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="EvolutionaryGym"
                type="Fitness Project"
                summary='"EvolutionaryGym" is a cutting-edge React frontend application built with TypeScript, Vite, Tailwind CSS, Hero Icons, Framer Motion, and Form Submit functionality. It aims to deliver a smooth and visually appealing user experience while incorporating React Anchor Link Smooth Scroll for seamless navigation.'
                img={evolgym}
                link="https://evolutionary-fitness-centre.vercel.app/"
                github="https://github.com/Bernard065/Evolutionary-Fitness-Centre"
              />
            </div>

            <div className="col-span-12">
              <ProjectDetails
                title="Gericht Restaurant"
                type="Restaurant Project"
                summary="The Gericht Restaurant is a web application created from a Figma design for a hotel landing page. Developed using React, the project includes React Icons for stylish iconography. The application translates the Figma design into a visually captivating and fully functional hotel landing page."
                img={gericht}
                link="https://the-gourmet-garden-restaurant-application.vercel.app/"
                github="https://github.com/Bernard065/The-Gericht-Garden-restaurant-application"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
