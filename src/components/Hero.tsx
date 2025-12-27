import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/Profile.png";
import { SOCIAL_LINKS } from "../constants/contact";
import { fadeInUp, slideInLeft, slideInRight } from "../utils/animations";

const Hero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="mb-8 lg:mb-0"
          >
            <div className="relative">
              <motion.img
                src={profilePic}
                alt="Amman Sajjad"
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-blue-600 dark:border-blue-400 object-cover shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100"
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Amman Sajjad
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-2xl lg:text-3xl mb-6 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-slate-600 dark:text-slate-400"
            >
              Building scalable applications with React, TypeScript & Node.js
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href={SOCIAL_LINKS.email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-lg" />
                <span>Email</span>
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              variants={fadeInUp}
              className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

