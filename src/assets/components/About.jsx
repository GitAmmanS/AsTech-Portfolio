import React from "react";

function About() {
  return (
    <section id="about" className="bg-slate-100 text-slate-700 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-6 text-center sm:text-left">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Left Side: Text Description */}
          <div className="text-lg leading-relaxed text-slate-800">
            <p className="mb-4">
              I am an undergraduate web developer with expertise in the MERN
              stack (MongoDB, Express, React, Node.js) and proficiency in
              JavaScript. I have a passion for building scalable web solutions
              and solving complex problems with creative, efficient approaches.
            </p>
            <p>
              Continuously learning and staying up-to-date with the latest
              technologies, I aim to leverage my skills to contribute to the
              success of innovative projects.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default About;
