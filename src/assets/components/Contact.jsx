import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">Contact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📧</span>
            <p className="text-lg">
              <a href="mailto:ammansajjad42@gmail.com" className="text-teal-500 hover:underline">
                ammansajjad42@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl">🔗</span>
            <p className="text-lg">
              <a
                href="https://linkedin.com/in/ammansajjad908350245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                linkedin.com/in/ammansajjad
              </a>
            </p>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📸</span>
            <p className="text-lg">
              <a
                href="https://www.instagram.com/amman_678/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
               amman_678
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📱</span>
            <p className="text-lg">
              <a href="tel:+1234567890" className="text-teal-500 hover:underline">
                +92 (325) 9055292
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
