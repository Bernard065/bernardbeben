import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

/**
 * Individual Experience Item
 */
const Details = ({ position, company, companyLink, time, address, children }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-12 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between text-left md:w-[85%] sm:w-full sm:ml-4"
    >
      <LiIcon />
      <div className="pl-4">
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a 
            href={companyLink} 
            target="_blank" 
            className="text-orange-500 capitalize hover:underline"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-white/60 text-sm sm:text-xs">
          {time} | {address}
        </span>
        <div className="font-medium w-full mt-4 text-gray-300 md:text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  
  // Track scroll for the timeline line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    // Reduced outer margin for a tighter, more modern SPA flow
    <div className="my-32 lg:my-24">
      <h2 className="font-bold text-7xl mb-20 w-full text-center text-white md:text-6xl xs:text-4xl">
        Experience
      </h2>

      <div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Animated vertical timeline line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-white/20 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Software Developer"
            company="Otigo Research and Technology Hub"
            companyLink="#"
            time="2024 - Present"
            address="Nairobi, Kenya"
          >
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li>Migrated legacy codebase from Python 2 to Python 3.8, improving performance.</li>
              <li>Scripted test plans to eliminate 40% of redundancy in deployment outcomes.</li>
              <li>Developed a desktop app to automate database testing, boosting efficiency by 65%.</li>
              <li>Automated usage graph workflows, increasing reporting accuracy by 20%.</li>
            </ul>
          </Details>

          <Details
            position="Operations Officer"
            company="VFS Global"
            companyLink="https://www.vfsglobal.com/"
            time="2023 - 2024"
            address="Nairobi, Kenya"
          >
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li>Managed data collection for over 1M visa applications monthly.</li>
              <li>Analyzed 5M customer entries to optimize processing times and trends.</li>
              <li>Enhanced reporting efficiency by 30% through custom-built dashboards.</li>
              <li>Improved data accuracy by 25% using advanced validation techniques.</li>
            </ul>
          </Details>

          <Details
            position="Software Developer"
            company="Freelance"
            companyLink="#"
            time="2022 - Present"
            address="Remote"
          >
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li>Delivered 12+ bespoke software solutions for finance and healthcare clients.</li>
              <li>Improved application performance by 30% through algorithm optimization.</li>
              <li>Integrated automated testing frameworks to decrease bug incidence by 25%.</li>
            </ul>
          </Details>

          <Details
            position="ICT Support Officer"
            company="Kenya Education Management Institute"
            companyLink="https://www.kemi.ac.ke/"
            time="2019 - 2023"
            address="Nairobi, Kenya"
          >
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li>Trained 1,000+ users in Digital Literacy, boosting classroom tech adoption.</li>
              <li>Improved network uptime and student access to resources by 40%.</li>
              <li>Maintained systems supporting daily operations with 99.9% availability.</li>
            </ul>
          </Details>
        </ul>
      </div>
    </div>
  );
};

export default Experience;