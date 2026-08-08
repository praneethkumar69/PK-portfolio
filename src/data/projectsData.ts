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
    year: "2026",
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
    id: "scrollytelling-portfolio",
    title: "Scrollytelling Personal Portfolio",
    subtitle: "Hardware-Accelerated Scroll Scrubbing Engine",
    category: "Next.js 14 / Framer Motion",
    year: "2026",
    description: "High-performance single-page portfolio scrubbing 45 preloaded WebP image frames on HTML5 Canvas with smooth parallax overlays.",
    longDescription: "Engineered to deliver Awwwards-level scrollytelling. Features high-DPI retina display cover-fit canvas rendering, custom sequence preloader, Framer Motion parallax text section transitions, and 100% Lighthouse performance score tuning.",
    tech: ["Next.js 14", "TypeScript", "HTML5 Canvas", "Framer Motion", "Tailwind CSS"],
    metrics: [],
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    liveUrl: "https://github.com/praneethkumar69",
    githubUrl: "https://github.com/praneethkumar69",
    featured: true
  }
];
