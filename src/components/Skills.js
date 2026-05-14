import { motion } from 'framer-motion';
import React from 'react';

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, modern, and user-friendly interfaces.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'Figma',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Creating APIs, authentication flows, and server-side logic.',
    skills: [
      'Node.js',
      'Python',
      'Django',
      'FastAPI',
      'Ruby on Rails',
      'Java Spring',
      'Spring Boot',
      'PHP',
      'ASP.NET',
    ],
  },
  {
    title: 'Databases & Data',
    description: 'Working with relational and NoSQL databases.',
    skills: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Data Structures',
    ],
  },
  {
    title: 'Tools, DevOps & Workflow',
    description: 'Using modern tools to ship reliable software faster.',
    skills: [
      'Git',
      'GitHub',
      'GitFlow',
      'Linux',
      'Unix',
      'Docker',
      'JIRA',
      'Agile',
      'Test-Driven Development',
    ],
  },
  {
    title: 'Systems & Integrations',
    description: 'Understanding distributed systems and business platforms.',
    skills: [
      'Microservices',
      'Apache Kafka',
      'RabbitMQ',
      'CRM',
      'ERP',
      'HubSpot',
      'Salesforce',
      'SAP',
    ],
  },
  {
    title: 'Professional Skills',
    description: 'Soft skills that support teamwork and delivery.',
    skills: [
      'Problem-Solving',
      'Communication',
      'Teamwork',
      'Creativity',
      'Integrity',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const SkillBadge = ({ skill }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-gray-300 hover:border-orange-500/60 hover:bg-orange-500/10 hover:text-white transition-all"
    >
      {skill}
    </motion.span>
  );
};

const SkillCard = ({ title, description, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-[0_20px_80px_-60px_rgba(255,255,255,0.4)] hover:border-orange-500/40 transition-all"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition-all" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
          <span className="text-xl font-bold">
            {title.charAt(0)}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-400 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400"
          >
            Technical Toolkit
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white md:text-4xl sm:text-3xl"
          >
            Skills I Use to Build Reliable Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-relaxed text-gray-400 md:text-base"
          >
            A practical mix of frontend, backend, databases, tools, and collaboration skills 
            used to design, develop, test, and deploy modern web applications.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;