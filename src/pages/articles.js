import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
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
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
                style={{ x:x, y:y }}
                src={img}
                alt={title}
                ref={imgRef}
                className='w-96 h-auto hidden absolute rounded-lg'
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
            className='realtive w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between text-white first:mt-0 border border-solid border-white border-r-4 border-b-4'
        >
            
            <MovingImg 
                title={title}
                img={img}
                link={link}
            />
            <span className='text-primary font-semibold pl-4'>{date}</span>
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
                    className='mb-16'
                />
                <div className='grid grid-cols-2 gap-16'>
                    <FeatureArticles 
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                        time='9 min read'
                        link='https://medium.com/@bernardbebeni'
                        img={article1}
                    />
                    <FeatureArticles 
                        title='Build A Custom Pagination Component In Reactjs From Scratch'
                        summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                        time='9 min read'
                        link='https://medium.com/@bernardbebeni'
                        img={article1}
                    />
                </div>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <Article 
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='July 25, 2023'
                    link='https://medium.com/@bernardbebeni'
                    img={article1}
                />
                <Article 
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='July 25, 2023'
                    link='https://medium.com/@bernardbebeni'
                    img={article1}
                />
                <Article 
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='July 25, 2023'
                    link='https://medium.com/@bernardbebeni'
                    img={article1}
                />
            </Layout>
        </main>
    </>
  )
}

export default articles
