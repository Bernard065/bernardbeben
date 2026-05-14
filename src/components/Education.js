import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

/**
 * Individual Education Item
 */
const Details = ({ type, time, place, info }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-10 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between text-left md:w-[85%] sm:w-full sm:ml-4"
    >
      <LiIcon />
      <div className="pl-4">
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-orange-500">
          {type}
        </h3>
        <span className="capitalize font-medium text-white/60 text-sm sm:text-xs">
          {time} | {place}
        </span>
        <p className="font-medium w-full mt-4 text-gray-300 md:text-sm leading-relaxed">
          {info}
        </p>
      </div>
    </motion.li>
  );
};

const Education = () => {
  const ref = useRef(null);
  
  // Track scroll for the timeline line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    // Reduced outer margin for a tighter, more modern flow
    <div className="my-32 lg:my-24">
      <h2 className="font-bold text-7xl mb-20 w-full text-center text-white md:text-6xl xs:text-4xl">
        Education
      </h2>

      <div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Animated vertical timeline line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-white/20 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <motion.ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bsc. Computer Science"
            time="2018"
            place="Chuka University"
            info="I completed a comprehensive program focusing on computer systems, software development, and problem-solving. Engaging in hands-on projects, hackathons, and coding competitions, I honed my skills in programming and algorithm design. Workshops and seminars allowed me to stay updated with the latest technologies, sparking a passion for software engineering."
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default Education;