import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between text-left md:w-[80%]"
    >
      <LiIcon />
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {position}&nbsp;
        <a href={companyLink} target="_blank" className="text-primaryDark capitalize">
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-white/75 xs:text-sm">
        {time} | {address}
      </span>
      <div className="font-medium w-full md:text-sm">{children}</div>
    </motion.li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Trigger scroll position update on page load
  useEffect(() => {
    if (scrollYProgress) {
      scrollYProgress.onChange(() => {});
    }
  }, [scrollYProgress]);

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-white md:text-6xl xs:text-4xl md:mb:16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-8 top-0 w-[4px] h-full bg-white origin md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <motion.ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
          position="Junior Software Developer"
          company="Otigo Research and Technology Hub"
          companyLink="#"
          time="2024 - Present"
          address="Nairobi, Kenya"
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Migrated the entire legacy codebase from Python 2 to Python 3.8.0, improving performance and maintainability</li>
            <li>Scripted unique test plans and processes to eliminate 40% of redundancy, ensuring predictable deployment outcomes</li>
            <li>Developed a desktop application to automate database testing, improving efficiency by 65%</li>
            <li>Automated data visualization workflows (usage graphs), increasing reporting accuracy by 20%</li>
          </ul>
        </Details>
          <Details
            position="Operations Officer"
            company="VFS Global"
            companyLink="https://www.vfsglobal.com/"
            time="2023 - 2024"
            address="Nairobi, Kenya"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Managed data collection and analysis for over 1M visa applications monthly, ensuring compliance with organizational standards</li>
              <li>Analyzed trends from a dataset of 5M customer entries to identify key factors influencing visa processing times</li>
              <li>Enhanced reporting efficiency by 30% by developing systematized dashboards</li>
              <li>Enhanced data accuracy by 25% by implementing advanced data validation techniques</li>
            </ul>
          </Details>
          <Details
            position="Software Developer"
            company="Freelance"
            companyLink="#"
            time="2022 - Present"
            address="Remote"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Improved application performance by 30% through legacy code refactoring and algorithm optimization in key projects</li>
              <li>Delivered 12+ bespoke software solutions for clients in finance and healthcare, ensuring customized functionality and client satisfaction</li>
              <li>Decreased bug incidence by 25% by conducting rigorous code reviews and integrating automated testing frameworks</li>
              <li>Managed database operations, including writing complex SQL queries and optimizing records for application scalability</li>
              <li>Maintained comprehensive documentation of code changes and development processes to facilitate knowledge sharing</li>
            </ul>
          </Details>

          <Details
            position="ICT Support Officer"
            company="Kenya Education Management Institute"
            companyLink="https://www.kemi.ac.ke/"
            time="2019 - 2023"
            address="Nairobi, Kenya"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Increased digital learning adoption by 35% by developing and maintaining robust network infrastructure for schools</li>
              <li>Trained 1000+ teachers and students in the Digital Literacy Programme, boosting digital skill application in classrooms</li>
              <li>Enhanced student access to online resources by improving network connectivity and uptime by 40%</li>
              <li>Maintained ICT systems supporting daily operations for staff and users, ensuring 99.9% system availability</li>
            </ul>
          </Details>
        </motion.ul>
      </div>
    </div>
  );
};

export default Experience;
