import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants/contact";
import { fadeInUp } from "../utils/animations";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-slate-400 dark:text-slate-500">
              © {currentYear} Amman Sajjad. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-600 mt-1">Full Stack Developer</p>
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              href={SOCIAL_LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="text-2xl" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-slate-300 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

