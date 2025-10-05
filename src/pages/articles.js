import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import redux from '../../public/images/articles/redux.png'
import jwt from '../../public/images/articles/jwt.png'
import git from '../../public/images/articles/git.png'
import asynchronous from '../../public/images/articles/AsynchronousJavaScript.png'
import object from '../../public/images/articles/Object-Oriented.png'
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
            className='group'
        >
            <h2 className='capitalize text-xl font-semibold hover:underline hover:text-primary transition-colors duration-300 xs:text-lg'>
                {title}
            </h2>
            <FramerImage 
                style={{ x:x, y:y }}
                src={img}
                alt={title}
                ref={imgRef}
                className='w-96 h-auto hidden absolute rounded-lg md:!hidden z-50 shadow-2xl'
            />
        </Link>
    )
}

const Article = ({ img, title, date, link, index }) => {
    return (
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition:{duration: 0.5, delay: index * 0.1, ease:"easeOut"}}}
            viewport={{once: true}}
            whileHover={{scale: 1.02, transition: {duration: 0.2}}}
            className='relative w-full p-6 my-4 rounded-2xl flex items-center justify-between bg-white/5 backdrop-blur-sm text-white first:mt-0 border border-white/10 hover:border-primary/50 transition-all duration-300 sm:flex-col group overflow-hidden'
        >
            {/* Gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            
            <div className='relative z-10 flex-1'>
                <MovingImg 
                    title={title}
                    img={img}
                    link={link}
                />
            </div>
            <span className='relative z-10 text-primary/80 font-medium pl-4 sm:self-start sm:pl-0 sm:mt-2 xs:text-sm'>
                {date}
            </span>
        </motion.div>
    )
}

const FeatureArticles = ({ img, title, time, summary, link, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition:{duration: 0.6, delay: index * 0.2}}}
            viewport={{once: true}}
            className='relative col-span-1 w-full p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group overflow-hidden'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated gradient background */}
            <motion.div 
                className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                animate={{
                    backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />

            <div className='relative z-10'>
                {/* Image container with overlay */}
                <Link 
                    href={link}
                    target='_blank'
                    className='block relative w-full overflow-hidden rounded-2xl group/image mb-4'
                >
                    <FramerImage 
                        src={img} 
                        alt={title}  
                        className='w-full h-auto' 
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.4, ease: "easeOut"}}
                    />
                    {/* Dark overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300' />
                    
                    {/* Read more indicator */}
                    <motion.div 
                        className='absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover/image:opacity-100'
                        initial={{x: 20}}
                        whileHover={{x: 0}}
                    >
                        Read More →
                    </motion.div>
                </Link>

                <Link href={link} target='_blank' className='group/title'>
                    <h2 className='capitalize text-2xl font-bold my-2 hover:text-primary transition-colors duration-300 lg:text-xl'>
                        {title}
                    </h2>
                </Link>
                
                <p className='text-sm mb-4 text-white/70 line-clamp-3 leading-relaxed'>
                    {summary}
                </p>
                
                <div className='flex items-center justify-between'>
                    <span className='text-primary font-semibold text-sm'>{time}</span>
                    <motion.div
                        className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center'
                        whileHover={{scale: 1.2, backgroundColor: 'rgba(134, 62, 150, 0.3)'}}
                    >
                        <span className='text-primary text-xs'>→</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const Articles = () => {

    return (
        <>
            <Head>
                <title>Bernard | Articles Page</title>
                <meta name='description' content='Explore insightful articles on web development, JavaScript, React, and modern software engineering practices.' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center text-white overflow-hidden'>
                <Layout className='pt-16'>
                    {/* Hero Section */}
                    <div className='relative mb-20'>
                        <AnimatedText 
                            text='Words Revolutionize Software!'
                            className='mb-6 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                        />
                        <motion.p 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                            className='text-center text-white/60 text-lg max-w-2xl mx-auto lg:text-base sm:text-sm'
                        >
                            Exploring the latest in web development, architecture, and software craftsmanship
                        </motion.p>
                    </div>

                    {/* Featured Articles with stagger effect */}
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3}}
                        className='grid grid-cols-2 gap-16 mb-32 lg:gap-8 md:grid-cols-1 md:gap-y-16'
                    >
                        <FeatureArticles 
                            index={0}
                            title='Simplifying State Management with Redux Toolkit'
                            summary='Learn how to simplify state management in your React applications using Redux Toolkit. Follow this step-by-step guide to discover how to reduce boilerplate code, handle asynchronous actions effortlessly, and organize your state logic efficiently.'
                            time='10 min read'
                            link='https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1'
                            img={redux}
                        />
                        <FeatureArticles 
                            index={1}
                            title='Implementing JWT Authentication in Rails'
                            summary="Learn how to implement JWT (JSON Web Token) authentication in your Rails applications. Follow this step-by-step guide to bolster your application's authentication mechanism and ensure a smooth and reliable user experience."
                            time='5 min read'
                            link='https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6'
                            img={jwt}
                        />
                    </motion.div>

                    {/* All Articles Section */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <div className='flex items-center justify-between mb-12'>
                            <h2 className='font-bold text-4xl lg:text-3xl sm:text-2xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent'>
                                All Articles
                            </h2>
                            <span className='text-white/40 text-sm'>5 articles</span>
                        </div>

                        <div className='space-y-0'>
                            <Article 
                                index={0}
                                title='Simplifying State Management with Redux Toolkit'
                                date='July 13, 2023'
                                link='https://towardsdev.com/simplifying-state-management-with-redux-toolkit-beeca9cf07c1'
                                img={redux}
                            />
                            <Article 
                                index={1}
                                title='Complete Guide to Git Version Control: Mastering Collaboration'
                                date='July 6, 2023'
                                link='https://towardsdev.com/complete-guide-to-git-version-control-mastering-collaboration-e7f3a76e7a5'
                                img={git}
                            />
                            <Article 
                                index={2}
                                title='Implementing JWT Authentication in Rails'
                                date='May 20, 2023'
                                link='https://towardsdev.com/implementing-jwt-authentication-in-rails-10e1907e5ab6'
                                img={jwt}
                            />
                            <Article 
                                index={3}
                                title='Mastering Asynchronous Programming in JavaScript: A Comprehensive Guide'
                                date='Jun 24, 2024'
                                link='https://medium.com/@bernardbebeni/mastering-asynchronous-programming-in-javascript-a-comprehensive-guide-0384c105d518'
                                img={asynchronous}
                            />
                            <Article 
                                index={4}
                                title='Mastering Object-Oriented Programming (OOP) in JavaScript'
                                date='Jun 20, 2024'
                                link='https://bernardbebeni.hashnode.dev/mastering-object-oriented-programming-oop-in-javascript'
                                img={object}
                            />
                        </div>
                    </motion.div>
                </Layout>
            </main>
        </>
    )
}

export default Articles