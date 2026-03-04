import csi from "./assets/logo-csi.jpg";
import singularity from "./assets/singularity.png";
import mahanirmaan from "./assets/mahanirmaan.png";
import pathai from "./assets/pathai.png";
import attendance from "./assets/attendance.png";

export const skills = {
  frontend: [
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Leaflet",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "REST API",
    "Axios",
    "IndexedDB",
  ],
  core: [
    "DSA",
    "OOP",
    "DBMS",
    "COA",
    "System Design",
    "Problem Solving",
    "CI/CD",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "Framer",
    "Vercel",
    "Netlify",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Singularity",
    description:
      "A centralized space information platform built for a 300+ submission hackathon (Top 8). Focused on structured user flow, accessibility, and UX memory patterns. Implemented onboarding tutorials, contextual info tabs, and an in-app AI assistant that references on-page content to guide users intelligently.",
    image: singularity,
    stack: ["React", "PWA", "Vercel", "AI Integration"],
    role: "Frontend, UI/UX, User Flow Architecture",
    links: {
      live: "https://space-scope-93kx.vercel.app/",
      code: "https://github.com/Swarspage/Singularity"
    }
  },
  {
    id: 2,
    title: "Mahanirmaan",
    description:
      "A donation-based platform connecting donors to rural schools in Maharashtra through a central validation layer. Designed a three-role system (Donor, School, Validator) with simulated ID-based verification and transparent proof-of-use workflows. Built entirely as a frontend application.",
    image: mahanirmaan,
    stack: ["React", "Tailwind CSS", "Role-Based UI"],
    role: "Full Frontend Development",
    links: {
      live: "https://dom-battle.vercel.app/",
      code: "https://github.com/dipsnc/dom-battle"
    }
  },
  {
    id: 3,
    title: "PathAI",
    description:
      "An AI-powered learning roadmap generator built during a Devpost hackathon. Combines a curriculum orchestration engine with a YouTube scraper and AI validator to curate structured, goal-based learning paths. Handled frontend, Firebase authentication, database structure, and deployment.",
    image: pathai,
    stack: ["React", "Firebase", "Gemini API", "YouTube Data API"],
    role: "Frontend + Firebase (Auth, DB, Hosting)",
    links: {
      live: "https://pathai-051606.firebaseapp.com/",
      code: "https://github.com/kritika-ghosh/Gemini-3-Hackathon"
    }
  },
  {
    id: 4,
    title: "Attendance Tracker (In Progress)",
    description:
      "A student-first PWA built to automate attendance tracking and eliminate manual percentage calculations. Designed to provide dynamic recommendations based on real-time attendance thresholds (e.g., 75% criteria). Currently under development.",
    image: attendance,
    stack: ["React", "Tailwind CSS", "IndexedDB", "PWA"],
    role: "Concept, UI, Logic Design",
    status: "In Progress"
  }
];

export const education = [
  {
    degree: "B.E Computer Engineering",
    university: "Datta Meghe College of Engineering, Airoli",
    marks: "CGPA: 8.4",
  },
  {
    degree: "HSC",
    university: "DAV Public School, Nerul",
    marks: "Overall: 94.8%",
  },
  {
    degree: "SSC",
    university: "Ryan International School, Sanpada",
    marks: "Overall: 96.4%",
  },
];

export const experience = [
  {
    title: "Tech Team Member",
    org: "CSI-CATT DMCE",
    duration: "July 2025 - Present",
    description: "Collaborated with a dynamic team to build and maintain technical projects, organized workshops, and mentored junior members.",
    image: csi, // Use default or specific image
  },
  {
    title: "More to come...",
    org: "Future Endeavors",
    duration: "Soon",
    description: "If you are a potential employer reading this, hi! I'm ready to bring my skills to your team.",
    image: null,
  },
];
