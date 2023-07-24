import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between text-left"
    >
      <LiIcon />
      <h3 className="capitalize font-bold text-2xl">
        {position}&nbsp;
        <a href={companyLink} target="_blank" className="text-primary capitalize">
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-white/75">
        {time} | {address}
      </span>
      <p className="font-medium w-full">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-white">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-8 top-0 w-[4px] h-full bg-white"
        />
        <motion.ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full-stack Developer"
            company="Freelancer"
            companyLink="https://www.upwork.com/"
            time="2023-present"
            address="Remote"
            work="Integrated third-party APIs and services to enhance functionality and streamline processes, reducing development time and improving overall application capabilities. Implemented robust security measures and conducted thorough testing to ensure the integrity and reliability of web applications, protecting user data and preventing security breaches."
          />
          <Details
            position="Full-stack Developer"
            company="Freelancer"
            companyLink="https://www.upwork.com/"
            time="2023-present"
            address="Remote"
            work="Integrated third-party APIs and services to enhance functionality and streamline processes, reducing development time and improving overall application capabilities. Implemented robust security measures and conducted thorough testing to ensure the integrity and reliability of web applications, protecting user data and preventing security breaches."
          />
          <Details
            position="Full-stack Developer"
            company="Freelancer"
            companyLink="https://www.upwork.com/"
            time="2023-present"
            address="Remote"
            work="Integrated third-party APIs and services to enhance functionality and streamline processes, reducing development time and improving overall application capabilities. Implemented robust security measures and conducted thorough testing to ensure the integrity and reliability of web applications, protecting user data and preventing security breaches."
          />
          <Details
            position="Full-stack Developer"
            company="Freelancer"
            companyLink="https://www.upwork.com/"
            time="2023-present"
            address="Remote"
            work="Integrated third-party APIs and services to enhance functionality and streamline processes, reducing development time and improving overall application capabilities. Implemented robust security measures and conducted thorough testing to ensure the integrity and reliability of web applications, protecting user data and preventing security breaches."
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default Experience;