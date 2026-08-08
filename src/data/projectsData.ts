export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "mindquest-3d",
    title: "MindQuest 3D",
    subtitle: "Lightweight 3D Educational Mental Health Game",
    category: "Interactive 3D / Three.js",
    year: "2025",
    description: "An interactive 3D web game raising mental health awareness using spatial navigation, mission-based quiz stations, and event-driven interactions.",
    longDescription: "MindQuest 3D combines 3D graphics rendering with gamified mental health awareness. Built using HTML5, CSS3, JavaScript, and Three.js, the project features custom keyboard camera navigation, interactive station triggers, and real-time score tracking.",
    tech: ["Three.js", "JavaScript (ES6+)", "HTML5 Canvas", "CSS3", "WebGL"],
    metrics: [],
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    liveUrl: "https://praneethkumarmindquest.netlify.app/",
    githubUrl: "https://github.com/praneethkumar69",
    featured: true
  },
  {
    id: "mls-legal-platform",
    title: "MLS – Legal Consultation Platform",
    subtitle: "UI/UX Designer & Frontend Contributor",
    category: "MERN Stack / UI/UX",
    year: "2025",
    description: "Designed the UI/UX and responsive frontend experience for a MERN-based legal consultation platform serving 10+ legal service categories.",
    longDescription: "Designed the UI/UX and responsive frontend experience for a MERN-based legal consultation platform serving 10+ legal service categories. Created intuitive user flows, layouts, navigation, and interactive components for service discovery and online appointment booking. Developed frontend components using React.js and collaborated on REST API integration for appointments, services, and firm information. Contributed to Node.js/Express.js backend and MongoDB implementation, supporting appointment and firm data management. Focused on usability, responsive design, and smooth user interactions to deliver a seamless client experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "UI/UX Design"],
    metrics: [],
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    githubUrl: "https://github.com/praneethkumar69",
    featured: true
  }
];
