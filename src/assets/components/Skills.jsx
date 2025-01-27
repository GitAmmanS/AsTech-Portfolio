import React from "react";

function Skills() {
  const skills = [
    { category: "Frontend Technologies", items: ["HTML5", "SCSS", "Tailwind CSS", "React"] },
    { category: "Backend Technologies", items: ["Node.js", "Express.js"] },
    { category: "Programming Languages", items: ["Java", "C++", "Python", "Assembly Language"] },
    { category: "Database Management", items: ["SQL", "Oracle"] },
    { category: "Development Tools", items: ["VS Code", "PyCharm", "Postman","Visual Studio","8086 Emulator"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    { category: "Others", items: ["OOP", "DSA", "Competitive Programming"] },
  ];

  return (
    <section id="skills" className="bg-white text-slate-700 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((skill, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-200 rounded-lg text-center font-semibold transition-transform transform hover:scale-105 hover:bg-teal-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
