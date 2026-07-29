import meowpad1 from "./assets/projects/meowpad1.webp";
import meowpad2 from "./assets/projects/meowpad2.webp";
import meowpad3 from "./assets/projects/meowpad3.webp";
import meowpad4 from "./assets/projects/meowpad4.webp";
import meowpad5 from "./assets/projects/meowpad5.webp";
import assistly2 from "./assets/projects/assistly (1).webp";
import assistly1 from "./assets/projects/assistly (2).webp";

import singularity1 from "./assets/projects/singularity1.png";
import mahanirmaan1 from "./assets/projects/mahanirmaan1.png";
import pathai1 from "./assets/projects/pathai1.png";
import attendance1 from "./assets/projects/attendance1.png";
import csi from "./assets/logo-csi.jpg";

import hackathonImg from "./assets/highlights/top8.webp";
import speakerImg from "./assets/highlights/speaker.webp";
import techinitudeImg from "./assets/highlights/techteam.webp";
import danceImg from "./assets/highlights/dance.jpeg";

export const skills = {
  frontend: [
    "NextJS",
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Leaflet",
    "TypeScript",
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
    "JWT",
    "Axios",
    "IndexedDB",
    "Cloudinary",
    "Multer",
  ],
  core: [
    "DSA",
    "OOP",
    "DBMS",
    "COA",
    "System Design",
    "API Design",
    "Problem Solving",
    "CI/CD",
    "Version Control"
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
    title: "MeowPad",
    description:
      "An AI-powered developer knowledge workspace that bridges the gap between AI-assisted coding and genuine understanding. MeowPad connects personal notes with local codebases to help developers understand, retain, and explain AI-generated code instead of simply accepting it. I designed and developed the complete frontend, building an IDE-like interface focused on usability, interactive learning, and thoughtful developer experience.",
    points: [
      "Bridges AI-assisted coding with genuine developer understanding",
      "Connects personal notes & codebases into an interactive IDE-like workspace",
      "Designed and developed complete frontend UI/UX with Dockview & Framer Motion",
    ],
    images: [meowpad1, meowpad2, meowpad3, meowpad4, meowpad5],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Dockview",
    ],
    role: "Frontend Engineering, UI/UX Design",
    links: {
      live: "https://meow-pad.vercel.app/",
      code: "https://github.com/dipsnc/OmniVault",
      video: "https://www.youtube.com/watch?v=Kqfp1EujaM0",
    },
  },
  {
    id: 2,
    title: "Assistly",
    description:
      "A platform that connects people with disabilities to nearby volunteers through location-aware assistance requests. Built to make everyday support more accessible by streamlining volunteer discovery, request management, and real-time coordination through an intuitive, user-first interface.",
    points: [
      "Connects people with disabilities to nearby volunteers via location-aware requests",
      "Streamlines volunteer discovery, request management, and real-time coordination",
      "Designed & developed full frontend UI, Leaflet map integration, and Firebase backend",
    ],
    images: [assistly1, assistly2],
    stack: [
      "React",
      "Tailwind CSS",
      "Leaflet",
      "Firebase",
      "Geolocation API",
    ],
    role: "Frontend Engineering, Auth + DB Management, System Design",
    links: {
      live: "https://assistly-pwd-volunteer-network.vercel.app/",
      code: "https://github.com/dipsnc/pwd-volunteer-network",
    },
  },
  {
    id: 3,
    title: "PathAI",
    description:
      "Self-taught developers waste hours sifting through unverified online tutorials without clear learning milestones. PathAI generates goal-based learning roadmaps by dynamically pairing AI curriculum validation with scraped video content. I built the web application frontend, Firebase authentication flow, and cloud database layer.",
    points: [
      "Eliminates tutorial fatigue by generating goal-focused developer roadmaps",
      "Dynamically pairs AI curriculum validation with curated video content",
      "Built web application frontend, Firebase authentication flow, and cloud database layer",
    ],
    images: [pathai1],
    stack: ["React", "Firebase", "Tailwind CSS"],
    role: "Frontend Engineering & Firebase Architecture",
    links: {
      live: "https://pathai-051606.firebaseapp.com/",
      code: "https://github.com/kritika-ghosh/Gemini-3-Hackathon",
    },
  },
  {
    id: 4,
    title: "Singularity",
    description:
      "Casual space enthusiasts often struggle to navigate fragmented astronomical datasets and mission updates. Singularity unifies mission tracking into an accessible space-scope interface featuring onboarding flows, contextual UX tabs, and an on-page AI assistant. I designed and developed the frontend application and interactive PWA experience, placing Top 8 out of 300+ hackathon teams.",
    points: [
      "Unifies astronomical datasets & mission tracking into an accessible scope platform",
      "Features interactive onboarding flows, contextual UX tabs, and in-app AI assistant",
      "Designed & built frontend PWA experience, placing Top 8 out of 300+ hackathon teams",
    ],
    images: [singularity1],
    stack: ["React", "PWA", "Tailwind CSS", "Vercel"],
    role: "Frontend Architecture & UI/UX",
    links: {
      live: "https://space-scope-93kx.vercel.app/",
      code: "https://github.com/Swarspage/Singularity",
    },
  },
  {
    id: 5,
    title: "Mahanirmaan",
    description:
      "Rural schools in Maharashtra face funding deficits due to lack of donor transparency and verifiable resource allocation. Mahanirmaan introduces a role-based donation workflow connecting donors, schools, and independent validators with proof-of-use verification. I led the complete frontend design and role-based UI flow.",
    points: [
      "Solves rural school funding deficits through transparent donor validation",
      "Introduces a 3-role workflow (Donor, School, Validator) with proof-of-use tracking",
      "Led complete frontend UI architecture and role-based interface flow",
    ],
    images: [mahanirmaan1],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Full Frontend Development & UI Design",
    links: {
      live: "https://dom-battle.vercel.app/",
      code: "https://github.com/dipsnc/dom-battle",
    },
  },
];

export const education = [
  {
    degree: "B.E Computer Engineering",
    university: "Datta Meghe College of Engineering, Airoli",
    marks: "CGPA: 8.7",
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
];

export const highlights = [
  {
    id: 1,
    title: "Top 8 Finalist",
    subtitle: "Codeathon 2026",
    description:
      "Built Singularity during a 24-hour hackathon, finishing among the Top 8 teams out of 300+ submissions.",
    image: hackathonImg,
    tag: "Hackathon",
    year: "2026",
    rotation: -2,
  },
  {
    id: 2,
    title: "Frontend Workshop Speaker",
    subtitle: "CSI Tech Team",
    description:
      "Conducted a workshop introducing students to Tailwind CSS and modern frontend development practices.",
    image: speakerImg,
    tag: "Speaking",
    year: "2025",
    rotation: 1.5,
  },
  {
    id: 3,
    title: "2nd Place",
    subtitle: "College Dance Competition",
    description:
      "Performed solo in front of a huge crowd, winning second place.",
    image: danceImg,
    tag: "Extracurricular",
    year: "2025",
    rotation: 2,
  },
  {
    id: 4,
    title: "Technical Team Member",
    subtitle: "CSI-CATT",
    description:
      "Collaborated with a dynamic team to build and maintain technical projects, organized workshops, and mentored junior members.",
    image: techinitudeImg,
    tag: "Leadership",
    year: "2025",
    rotation: -1,
  },
  
];
