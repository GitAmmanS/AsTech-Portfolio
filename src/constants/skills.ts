export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Technologies",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "SCSS"],
  },
  {
    category: "Backend Technologies",
    items: ["Node.js", "NestJS", "Express.js", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Database & Storage",
    items: ["PostgreSQL", "MongoDB", "IndexedDB", "SQL", "Database Optimization"],
  },
  {
    category: "Advanced Concepts",
    items: [
      "Offline-First Applications",
      "Caching Strategies",
      "Background Sync",
      "State Management",
      "Performance Optimization",
      "Scalable Architecture",
    ],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "CI/CD"],
  },
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  },
];

