import { motion } from 'framer-motion'
import React from 'react'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div 
            className='flex items-center justify-center rounded-full font-semibold bg-white text-black py-3 px-6 shadow-slate-300 cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-light xs:font-bold'
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
        <h2 className='font-bold text-6xl xl:text-7xl lg:text-5xl mt-44 w-full text-center text-white mb-10 md:text-4xl md:mt-32 sm:text-3xl sm:mt-24 xs:text-2xl xs:mt-16'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularDarkLg md:bg-circularDarkMd sm:bg-circularDarkSm'>
            <motion.div
                className='flex items-center justify-center rounded-full font-semibold bg-white text-black p-8 shadow-slate-300 cursor-pointer lg:p-6 md:p-4 md:text-sm sm:p-3 sm:text-xs xs:p-2 xs:text-xs'
                whileHover={{scale:1.05}}
            >Web</motion.div>
            <Skill name='CSS' x='-5vw' y='-10vw' />
            <Skill name='HTML' x='-20vw' y='2vw' />
            <Skill name='JavaScript' x='20vw' y='6vw' />
            <Skill name='TypeScript' x='0vw' y='12vw' />
            <Skill name='ReactJS' x='-20vw' y='-15vw' />
            <Skill name='NextJS' x='15vw' y='-12vw' />
            <Skill name='NodeJS' x='32vw' y='-5vw' />
            <Skill name='Python' x='0vw' y='-20vw' />
            <Skill name='FastAPI' x='-25vw' y='18vw' />
            <Skill name='Django' x='-37vw' y='0vw' />
            <Skill name='Ruby' x='15vw' y='22vw' />
            <Skill name='Rails' x='-25vw' y='-8vw' />
            <Skill name='SQL' x='25vw' y='15vw' />
            <Skill name='PostgreSQL' x='-26vw' y='10vw' />
            <Skill name='MongoDB' x='-5vw' y='18vw' />
            <Skill name='Figma' x='-16vw' y='-10vw' />
            <Skill name='Java' x='10vw' y='-18vw' />
            <Skill name='C++' x='-10vw' y='20vw' />
            <Skill name='Perl' x='30vw' y='10vw' />
            <Skill name='MySQL' x='-30vw' y='-5vw' />
            <Skill name='ASP.NET' x='5vw' y='18vw' />
            <Skill name='Adobe CC' x='-15vw' y='-18vw' />
            <Skill name='Canva' x='20vw' y='-15vw' />
            <Skill name='PHP' x='-35vw' y='5vw' />
            <Skill name='Communication' x='35vw' y='0vw' />
            <Skill name='Creativity' x='-20vw' y='15vw' />
            <Skill name='Integrity' x='25vw' y='20vw' />
            <Skill name='Agile' x='-30vw' y='-10vw' />
            <Skill name='Apache' x='0vw' y='-25vw' />
            <Skill name='Apache Kafka' x='15vw' y='-20vw' />
            <Skill name='Data Structures' x='-10vw' y='-22vw' />
            <Skill name='Git' x='28vw' y='-12vw' />
            <Skill name='Java Spring' x='-22vw' y='12vw' />
            <Skill name='JIRA' x='18vw' y='18vw' />
            <Skill name='Kafka' x='-28vw' y='8vw' />
            <Skill name='RabbitMQ' x='8vw' y='22vw' />
            <Skill name='SpringBoot' x='-18vw' y='-15vw' />
            <Skill name='GitFlow' x='22vw' y='-8vw' />
            <Skill name='Test-Driven Development' x='-8vw' y='25vw' />
            <Skill name='Microservices' x='12vw' y='25vw' />
            <Skill name='Angular' x='-12vw' y='-25vw' />
            <Skill name='Problem-Solving' x='30vw' y='5vw' />
            <Skill name='Teamwork' x='-35vw' y='-2vw' />
            <Skill name='CRM' x='35vw' y='-3vw' />
            <Skill name='ERP' x='-25vw' y='20vw' />
            <Skill name='HubSpot' x='25vw' y='25vw' />
            <Skill name='Salesforce' x='-15vw' y='22vw' />
            <Skill name='SAP' x='10vw' y='-22vw' />
            <Skill name='CRM Systems' x='-5vw' y='25vw' />
            <Skill name='Unix' x='5vw' y='-25vw' />
            <Skill name='Solaris' x='-20vw' y='-20vw' />
            <Skill name='Linux' x='20vw' y='22vw' />
            <Skill name='Windows' x='-30vw' y='15vw' />
        </div>
    </>
  )
}

export default Skills