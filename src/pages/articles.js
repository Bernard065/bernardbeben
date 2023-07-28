import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import redux from '../../public/images/articles/redux.png'
import jwt from '../../public/images/articles/jwt.png'
import git from '../../public/images/articles/git.png'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouse = (event) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block';
        }
        x.set(event.pageX);
        y.set(-10);
    }

    const handleMouseLeave = (event) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'none';
        }
        x.set(0);
        y.set(0);
    }

    return (
        <Link 
            href={link} 
            target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline xs:text-lg'>{title}</h2>
            <FramerImage 
                style={{ x:x, y:y }}
                src={img}
                alt={title}
                ref={imgRef}
                className='w-96 h-auto hidden absolute rounded-lg md:!hidden'
            />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.div 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once: true}}
            className='realtive w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between text-white first:mt-0 border border-solid border-white border-r-4 border-b-4 sm:flex-col'
        >
            
            <MovingImg 
                title={title}
                img={img}
                link={link}
            />
            <span className='text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm '>{date}</span>
        </motion.div>
    )
}

const FeatureArticles = ({ img, title, time, summary, link }) => {
    return (
        <div className='relative col-span-1 w-full p-4 border border-solid border-white rounded-2xl'>
            <Link 
                href={link}
                target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage 
                    src={img} 
                    alt={title}  
                    className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </div>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Bernard | Articles Page</title>
            <meta name='description' content='description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center text-white'>
            <Layout className='pt-16'>
                <AnimatedText 
                    text='Words Revolutionize Software!'
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />
                <div className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gapy-y-16'>
                    <FeatureArticles 
                        title='Simplifying State Management with Redux Toolkit'
                        summary='Learn how to simplify state management in your React applications using Redux Toolkit. 
                        Follow this step-by-step guide to discover how to reduce boilerplate code, handle asynchronous actions effortlessly, and organize your state logic efficiently.'
                        time='10 min read'
                        link='https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1'
                        img={redux}
                    />
                    <FeatureArticles 
                        title='Implementing JWT Authentication in Rails'
                        summary="Learn how to implement JWT (JSON Web Token) authentication in your Rails applications. 
                        Follow this step-by-step guide to bolster your application's authentication mechanism and ensure a smooth and reliable user experiencet."
                        time='5 min read'
                        link='https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6'
                        img={jwt}
                    />
                </div>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <Article 
                    title='Simplifying State Management with Redux Toolkit'
                    date='July 13, 2023'
                    link='https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1'
                    img={redux}
                />
                <Article 
                    title='Complete Guide to Git Version Control: Mastering Collaboration'
                    date='July 6, 2023'
                    link='https://towardsdev.com/complete-guide-to-git-version-control-mastering-collaboration-e7f3a76e7a5'
                    img={git}
                />
                <Article 
                    title='Implementing JWT Authentication in Rails'
                    date='May 20, 2023'
                    link='https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6'
                    img={redux}
                />
            </Layout>
        </main>
    </>
  )
}

export default articles
