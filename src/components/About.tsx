import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const About: React.FC = () => {
  const highlights = [
    "Full Stack Development",
    "Scalable Web Applications",
    "Offline-First Architecture",
    "Performance Optimization",
    "Database Design",
    "Modern Tech Stack",
  ];

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left text-slate-900 dark:text-slate-100"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
          >
            <p>
              Full Stack Developer with <strong className="text-blue-600 dark:text-blue-400">1+ year</strong> of experience building production-ready applications. 
              Specializing in React, TypeScript, and Node.js.
            </p>
            <p>
              Passionate about creating scalable solutions with offline-first capabilities, 
              optimized state management, and clean architecture.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm border-l-4 border-blue-600 dark:border-blue-400"
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

