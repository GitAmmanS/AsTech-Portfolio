import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DownloadCv from "../components/DownloadCv";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <DownloadCv /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

