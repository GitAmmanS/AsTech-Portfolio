import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-slate-200 px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Amman Sajjad</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-400">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-400">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
