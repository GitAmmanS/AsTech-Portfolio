import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { PRODUCTION_PROJECTS } from "../constants/projects";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-4 text-center text-slate-900 dark:text-slate-100"
          >
            Production Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Production applications solving real business problems.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTION_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-600 flex flex-col"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex-1">
                    {project.name}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project <FaCode className="text-xs" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

