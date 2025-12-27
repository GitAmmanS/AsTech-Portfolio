import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants/contact";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: CONTACT_INFO.email,
      link: SOCIAL_LINKS.email,
      color: "bg-blue-700 dark:bg-blue-900",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: SOCIAL_LINKS.linkedin,
      color: "bg-blue-700 dark:bg-blue-900",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: CONTACT_INFO.whatsapp,
      link: SOCIAL_LINKS.whatsapp,
      color: "bg-blue-700 dark:bg-blue-900",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`,
      color: "bg-blue-700 dark:bg-blue-900",
    },
  ];

  return (
    <section id="contact" className="bg-blue-600 dark:bg-blue-800 text-white py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-4 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-blue-100 dark:text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            Open to new opportunities and collaborations. Let's connect!
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  className={`${method.color} rounded-lg p-6 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors shadow-lg flex flex-col items-center text-center group`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-3xl mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-sm text-blue-100 dark:text-blue-200">{method.value}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

