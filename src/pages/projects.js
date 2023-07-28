import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import beachresort from '../../public/images/projects/beachresort.png';
import evolgym from '../../public/images/projects/evolgym.png'
import paypal from '../../public/images/projects/paypal.png'
import gericht from '../../public/images/projects/gericht.png'
import piza from '../../public/images/projects/piza.jpg'
import { motion } from 'framer-motion'



const FramerImage = motion(Image);

const ProjectDetails = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-white shadow-2xl text-white p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link 
                href={link} 
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className='w-full  h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link 
                    href={link} 
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-white sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={github} target='_blank'>
                        <GitHubIcon />
                    </Link>
                    <Link 
                        href={link} 
                        target='_blank'
                        className='ml-4 rounded-lg bg-white text-black p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Bernard | Projects Page</title>
            <meta name='description' content='description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center text-white'>
            <Layout className='pt-16'>
                <AnimatedText text=' Imagination Drives Innovation!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <ProjectDetails
                            title='BeachResort Reservation Application '
                            type='Reservation Project'
                            summary='BeachResort is an innovative application that connects travelers with unique accommodation options. Built using React.js and Rails, with Styled Material UI and React Router, the platform allows users to sign up and easily browse available rooms, search for specific options, and book reservations with confirmation. Users can manage their reservations, while administrators can create and manage listings. With its user-friendly interface and comprehensive features, "BeachResort" offers a seamless and personalized experience for travelers and hosts alike.'
                            img={beachresort}
                            link='https://reservation-app-mu.vercel.app/'
                            github='https://github.com/Bernard065/reservation-App'
                        />
                        <ProjectDetails
                            title='Piza Tracker '
                            type='Rails API'
                            summary='The Piza Tracker is a Rails API that enables users to track restaurants and their associated pizzas. The API offers various endpoints, including fetching a list of all restaurants and pizzas, accessing details of a specific restaurant along with its pizzas, and creating RestaurantPizza records to associate existing pizzas with restaurants. Users can use the endpoints to manage restaurant-pizza relationships seamlessly. The API employs the Restaurant, Pizza, and RestaurantPizza models to efficiently organize and retrieve relevant data, providing a comprehensive pizza tracking solution.'
                            img={piza}
                            link='https://github.com/Bernard065/pizaa-tracker-API'
                            github='https://github.com/Bernard065/pizaa-tracker-API'
                        />
                    </div>
                    <div className='col-span-12'>
                        <ProjectDetails
                            title='EvolutionaryGym Application'
                            type='Fitness Project'
                            summary='"EvolutionaryGym" is a cutting-edge React frontend application built with TypeScript, Vite, Tailwind CSS, Hero Icons, Framer Motion, and Form Submit functionality. It aims to deliver a smooth and visually appealing user experience while incorporating React Anchor Link Smooth Scroll for seamless navigation.'
                            img={evolgym}
                            link='https://evolutionary-fitness-centre.vercel.app/'
                            github='https://github.com/Bernard065/Evolutionary-Fitness-Centre'
                        />
                    </div>
                    <div className='col-span-12'>
                        <ProjectDetails
                            title='PayPal Clone '
                            type='E-Commerce Project'
                            summary="The PayPal Homepage Clone is a React application replicating the PayPal homepage's appearance and functionality. It utilizes popular packages like Material-UI, Emotion, and React Router for styling, icons, and smooth navigation. With Tailwind CSS, it ensures streamlines styling. This efficient combination delivers a visually appealing and fully functional frontend clone of the original PayPal homepage"
                            img={paypal}
                            link='https://paypal-clone-tau.vercel.app/'
                            github='https://github.com/Bernard065/paypal-clone'
                        />

<ProjectDetails
                            title='Gericht Restaurant'
                            type='Restaurant Project'
                            summary="The Gericht Restaurant is a web application created from a Figma design for a hotel landing page. Developed using React, the project includes React Icons for stylish iconography. The application translates the Figma design into a visually captivating and fully functional hotel landing page."
                            img={gericht}
                            link='https://the-gourmet-garden-restaurant-application.vercel.app/'
                            github='https://github.com/Bernard065/The-Gericht-Garden-restaurant-application'
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects