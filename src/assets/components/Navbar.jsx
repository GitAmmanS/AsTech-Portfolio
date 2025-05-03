import React from "react";
function Navbar() {
  return (
    <nav className="bg-slate-950 text-slate-200 px-8 py-4 border-b border-slate-900 sticky z-10  top-0">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="#" className="text-xl font-bold">
          <h1 className="cursor-pointer">Amman Sajjad</h1>
        </a>
        <ul className="flex space-x-6">
          <li>
          <a href="#about" className="relative group text-white">
  About
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all duration-300 group-hover:w-full"></span>
</a>

          </li>
          <li>
            <a href="#skills" className="relative group text-white">Skills
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all duration-300 group-hover:w-full"></span>
              
            </a>

          </li>
          <li>
            <a href="#projects" className="relative group text-white">Projects
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all duration-300 group-hover:w-full"></span>

            </a>
          </li>
          <li>
            <a href="#contact" className="relative group text-white">Contact
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-800 transition-all duration-300 group-hover:w-full"></span>

            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
