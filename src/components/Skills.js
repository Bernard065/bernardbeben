import { motion } from 'framer-motion'
import React from 'react'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-white text-black py-3 px-6 shadow-slate-300 cursor-pointer absolute'
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{ x:x, y:y }}
            transition={{ duration: 1.5 }}
            viewport={{once: true}}
        >{name}</motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center text-white mb-10'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark'>
            <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-white text-black p-8 shadow-slate-300 cursor-pointer'
                whileHover={{scale:1.05}}
            >Web</motion.div>
            <Skill name='CSS' x='-5vw' y='-10vw' />
            <Skill name='HTML' x='-20vw' y='2vw' />
            <Skill name='JavaScript' x='20vw' y='6vw' />
            <Skill name='TypeScript' x='0vw' y='12vw' />
            <Skill name='ReactJS' x='-20vw' y='-15vw' />
            <Skill name='NextJS' x='15vw' y='-12vw' />
            <Skill name='NodeJS' x='32vw' y='-5vw' />
            <Skill name='ExpressJS' x='-5vw' y='-10vw' />
            <Skill name='Python' x='0vw' y='-20vw' />
            <Skill name='FastAPI' x='-25vw' y='18vw' />
            <Skill name='Django' x='-37vw' y='0vw' />
            <Skill name='Ruby' x='15vw' y='22vw' /> 
            <Skill name='Rails' x='-25vw' y='-8vw' /> 
            <Skill name='SQL' x='25vw' y='15vw' /> 
            <Skill name='PostgreSQL' x='-26vw' y='10vw' /> 
            <Skill name='MongoDB' x='-5vw' y='18vw' /> 
            <Skill name='Figma' x='-16vw' y='-10vw' />
        </div>
    </>
  )
}

export default Skills