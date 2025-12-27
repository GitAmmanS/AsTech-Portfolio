import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { fadeInUp } from "../utils/animations";

const DownloadCv: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-20">
      <div className="container mx-auto px-8 flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            Download my resume for more details.
          </p>
          <motion.a
            href="/a.pdf"
            download="Amman_Sajjad_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-lg" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCv;

