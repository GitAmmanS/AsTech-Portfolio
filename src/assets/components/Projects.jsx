import React from "react";

function Projects() {
  const projects = [
    {
      name: "E-Commerce Website",
      description: "Full-Stack E-commerce Application (MERN Stack) featuring user authentication, product management, cart system, and secure order processing with real-time updates."
      , link: "https://as-fit.vercel.app/", // Add project link here
    },
    {
      name: "UIIT Labs Expert System",
      description: "Real-time Lab Management System (MERN Stack) that automates equipment tracking, complaint management, and inventory handling.",
      link: "https://github.com/GitAmmanS/FYP", // Add project link here
    },
    {
      name: "Netflix Clone",
      description: "A React-based streaming app with dynamic data fetching, user authentication, and routing. Recreated Netflix's UI and features.",
      link: "https://github.com/GitAmmanS/NetflixClone", // Add project link here
    },
    {
      name: "Book App",
      description: "Full-stack MERN application for managing books with CRUD operations. Features user authentication and integrates with MongoDB.",
      link: "https://github.com/GitAmmanS/Book-app", // Add project link here
    },
    {
      name: "Food App",
      description: "Full-stack food ordering app that supports menu browsing, user authentication, and real-time order tracking, built with MERN stack.",
      link: "https://github.com/GitAmmanS/Food-App", // Add project link here
    },
    {
      name: "Shopping App Backend",
      description: "Developed the backend for a shopping app with Node.js, handling product management, user authentication, and order processing.",
      link: "#", // Add project link here
    },
    {
      name: "Car Spare Parts App",
      description: "Web app for managing car spare parts, built using HTML, JS, and CSS, for browsing and ordering car components.",
      link: "#", // Add project link here
    },
    {
      name: "POS System",
      description: "A point-of-sale system developed in C#, allowing for transaction management and inventory tracking.",
      link: "#", // Add project link here
    },
    {
      name: "AI Game: Tic Tac Toe",
      description: "A Python-based AI game that utilizes simple algorithms to play Tic Tac Toe.",
      link: "#", // Add project link here
    },
    {
      name: "Car Parking System",
      description: "A car parking management system built in Assembly Language and C++, featuring a graphical user interface.",
      link: "#", // Add project link here
    },
  ];

  return (
    <section id="projects" className="bg-slate-100 text-slate-700 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-slate-800">{project.name}</h3>
              <p className="text-sm text-slate-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
