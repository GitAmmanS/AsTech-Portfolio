import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/skills";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100"
          >
            Skills & Technologies
          </motion.h2>
          <div className="space-y-12">
            {SKILLS.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

