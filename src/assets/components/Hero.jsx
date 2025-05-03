import React from "react";
import profilePic from "../Profile.jpg"; // Add the correct path to your image

function Hero() {
  return (
    <div className="bg-slate-950 text-white text-center py-20 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-8">
        {/* Profile Picture */}
        <div className="mb-6 lg:mb-0">
          <img
            src={profilePic}
            alt="Amman Sajjad"
            className="w-32 rounded-full border-4 border-teal-500 object-cover hover:border-teal-900 hover:transition-all hover:duration-200 cursor-pointer hover:scale-x-105"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Amman Sajjad</h1>
          <p className="text-xl mb-6">A MERN Stack Developer</p>
          <a
            href="#contact"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
