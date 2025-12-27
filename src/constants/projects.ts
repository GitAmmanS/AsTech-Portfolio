export interface Project {
  name: string;
  description: string;
  link: string;
  role?: string;
  technologies?: string[];
  impact?: string;
}

export const PRODUCTION_PROJECTS: Project[] = [
  {
    name: "HCMD Communication",
    description: "Enterprise communication platform with real-time messaging and secure authentication.",
    link: "https://hcmdcommunication.com/user/login",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "ProjecX",
    description: "Project management platform for team collaboration and resource management.",
    link: "https://www.projecx.net/",
    technologies: ["React.js", "TypeScript", "NestJS", "PostgreSQL"],
  },
  {
    name: "HouseCall MD",
    description: "Healthcare platform connecting patients with medical professionals.",
    link: "https://www.housecallmd.com/",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "CabN Track",
    description: "Real-time fleet management system with GPS integration and route optimization.",
    link: "https://www.cabntrack.com/",
    technologies: ["React.js", "TypeScript", "Node.js", "IndexedDB"],
  },
  {
    name: "Red Strength CA",
    description: "Fitness platform with workout tracking and progress analytics.",
    link: "https://redstrengthca.com/",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "Builder Builder",
    description: "Construction management platform for project tracking and resource management.",
    link: "https://builderbuilder.net/",
    technologies: ["React.js", "TypeScript", "NestJS", "PostgreSQL"],
  },
];

