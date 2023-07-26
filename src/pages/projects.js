import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
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
                            title='CryptApplication Screener '
                            type='Financial Project'
                            summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency'
                            img={project1}
                            link='https://project3-link.com'
                            github='https://github.com/project3-repo'
                        />
                    </div>
                    <div className='col-span-12'>
                        <ProjectDetails
                            title='CryptApplication Screener '
                            type='Financial Project'
                            summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency'
                            img={project1}
                            link='https://project3-link.com'
                            github='https://github.com/project3-repo'
                        />
                    </div>
                    <div className='col-span-12'>
                        <ProjectDetails
                            title='CryptApplication Screener '
                            type='Financial Project'
                            summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency'
                            img={project1}
                            link='https://project3-link.com'
                            github='https://github.com/project3-repo'
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects