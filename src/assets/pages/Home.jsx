import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DownloadCv from "../components/DownloadCv";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DownloadCv/>
      <Contact />

    </div>
  );
}

export default Home;
