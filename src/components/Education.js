import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        {type}
      </h3>
      <span className="capitalize font-medium text-white/75">
        {time} | {place}
      </span>
      <p className="font-medium w-full">{info}</p>
    </motion.li>
  );
};

const Education = () => {
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
        Education
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
            type="Software Engineering BootCamp"
            time="2022"
            place="Moringa School"
            info=" An immersive program based on the Flatiron School curriculum. I developed proficiency in JavaScript, Python, React, Django, and Ruby on Rails. The bootcamp emphasized hands-on learning through real-world projects and collaborative teamwork. As a result, I enhanced my problem-solving and communication skills. I am now ready to make impactful contributions in the field of software engineering."
            />
            <Details
            type="Software Engineering BootCamp"
            time="2022"
            place="Moringa School"
            info=" An immersive program based on the Flatiron School curriculum. I developed proficiency in JavaScript, Python, React, Django, and Ruby on Rails. The bootcamp emphasized hands-on learning through real-world projects and collaborative teamwork. As a result, I enhanced my problem-solving and communication skills. I am now ready to make impactful contributions in the field of software engineering."
            />
            
           
          
        </motion.ul>
      </div>
    </div>
  );
};

export default Education;
