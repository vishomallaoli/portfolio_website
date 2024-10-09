import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri"; // Ensure correct import of icons

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

// Map of Remix Icons to corresponding components
const iconMap = {
  RiTwitterXFill: RiTwitterXFill,
  RiGithubFill: RiGithubFill,
  RiLinkedinFill: RiLinkedinFill,
};

const Contacts = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10" id="contact">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Contact</h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      {/* Headline and Description */}
      <motion.h3
        className="text-6xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      {/* Email Link */}
      <motion.a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-2xl md:text-3xl font-medium mt-8 hover:text-stone-500"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT_CONTENT.email}
      </motion.a>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          console.log(link.icon); // Check icon string
          const IconComponent = iconMap[link.icon]; // Map icon string to actual icon component
          return (
            IconComponent && (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                initial="hidden"
                whileInView="visible"
                custom={1.0 + index * 0.2}
                variants={iconVariants}
              >
                <IconComponent size={36} />
              </motion.a>
            )
          );
        })}
      </div>

      {/* Footer Text */}
      <motion.p
        className="text-sm text-stone-400 mt-36"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contacts;
