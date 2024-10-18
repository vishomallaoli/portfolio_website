import { useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants"; // Import your constants
import visho from "../assets/visho.jpg"; // Your existing image import

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/visho/30min' });
    } else {
      console.error("Calendly widget not loaded");
    }
    return false;
  };

  return (
    <section>
      <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-2xl md:text-3xl lg:text-5xl my-14" variants={textVariants}>
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl lg:text-4xl mb-4" variants={textVariants}>
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p className="text-xl md:text-2xl lg:text-4xl" variants={textVariants}>
            {HERO_CONTENT.description}
          </motion.p>

          {/* Flex container for the buttons */}
          <div className="flex items-center space-x-4 mt-8">
            {/* Resume Button */}
            <motion.a
              className="bg-stone-50 text-stone-900 p-3 lg:p-4 rounded-2xl"
              href={HERO_CONTENT.resumeLink}
              download
              rel="noopener noreferrer"
              target="_blank"
              variants={textVariants}
            >
              {HERO_CONTENT.resumeLinkText}
            </motion.a>

            {/* Calendly Popup Button */}
            <motion.a
              className="bg-blue-600 text-white p-3 lg:p-4 rounded-2xl cursor-pointer"
              onClick={openCalendlyPopup}
              variants={textVariants}
            >
              Schedule a Meeting
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={imageVariants}>
          <img src={visho} alt="Visho Malla Oli" width={650} height={650} className="rounded-3xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
