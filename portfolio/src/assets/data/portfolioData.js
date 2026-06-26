// ===== PERSONAL INFO =====
export const personalInfo = {
  name: "Nithya Reddy",
  title: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  intro:
    "I craft scalable web applications with clean code and thoughtful design. Passionate about React, Node.js, and creating seamless user experiences.",
  email: "Nithya Reddy@example.com",
  location: "Hanamkonda,Mylaram,Telangana",
  availableForWork: true,
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Nithya Reddy",
    linkedin: "https://linkedin.com/in/Nithya Reddy",
  },
};

// ===== ABOUT =====
export const aboutData = {
  summary:
    "I'm a full-stack developer with 2 years of experience building robust web applications. I specialize in the JavaScript ecosystem—React on the frontend, Node.js on the backend—and I love bridging the gap between design and engineering.",
  objective:
    "Seeking challenging roles where I can architect scalable solutions, mentor junior developers, and contribute to products that reach millions of users.",
  education: [
    {
      Btech: "Computer Science Engineering",
      institution: "SR UNIVERSITY",
      year: "2024-2028",
      gpa: "9.0/10",
    },
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Stripe",
      period: "2026–Present",
      description:
        "Led redesign of the merchant dashboard. Improved performance by 40% through code splitting and lazy loading.",
    },
    {
      role: "Full Stack Developer",
      company: "Vercel",
      period: "2025–2026",
      description:
        "Built deployment pipeline visualizations. Contributed to open-source Next.js tooling.",
    },
    {
      role: "Junior Developer",
      company: "Startup Hub",
      period: "2024–2026",
      description:
        "Developed MVPs for 3 early-stage startups using React and Firebase.",
    },
  ],
};

// ===== SKILLS =====
export const skillsData = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 82 },
    { name: "Next.js", level: 78 },
    { name: "Tailwind CSS", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 83 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "Python / FastAPI", level: 68 },
  ],
  database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL / PostgreSQL", level: 75 },
    { name: "Redis", level: 65 },
    { name: "Firebase", level: 78 },
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 72 },
    { name: "AWS / Vercel", level: 70 },
    { name: "Figma", level: 65 },
    { name: "Jest / Testing", level: 75 },
  ],
};

// ===== PROJECTS =====
export const projectsData = [
  {
    id: 1,
    title: "DevFlow — Project Manager",
    description:
      "A real-time project management tool with Kanban boards, sprint planning, and team collaboration features. Built for remote engineering teams.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    github: "https://github.com/Nithya Reddy/devflow",
    demo: "https://devflow.vercel.app",
    color: "#00d4ff",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "Lumina — E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with Stripe payments, inventory management, admin dashboard, and AI-powered product recommendations.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "TypeScript"],
    github: "https://github.com/Nithya Reddy/lumina",
    demo: "https://lumina-shop.vercel.app",
    color: "#7c3aed",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "CodePulse — Developer Analytics",
    description:
      "GitHub-integrated coding analytics dashboard. Tracks commits, PR cycles, language trends, and team velocity with beautiful visualizations.",
    tags: ["React", "D3.js", "GitHub API", "Express", "Redis"],
    github: "https://github.com/Nithya Reddy/codepulse",
    demo: "https://codepulse.vercel.app",
    color: "#10b981",
    featured: true,
    year: "2025",
  },
  {
    id: 4,
    title: "Scribe — AI Writing Assistant",
    description:
      "Browser-based writing tool powered by OpenAI. Includes grammar fixing, tone adjustment, content generation, and document export.",
    tags: ["React", "OpenAI API", "Node.js", "Tailwind", "Firebase"],
    github: "https://github.com/Nithya Reddy/scribe",
    demo: "https://scribe-ai.vercel.app",
    color: "#f59e0b",
    year: "2025",
  },
  {
    id: 5,
    title: "TrackFit — Fitness App",
    description:
      "Workout tracker with custom plan builder, progress charts, PR tracking, and nutrition logging. Includes social sharing features.",
    tags: ["React Native", "Expo", "MongoDB", "Express", "Chart.js"],
    github: "https://github.com/Nithya Reddy/trackfit",
    demo: "https://trackfit.app",
    color: "#ef4444",
    year: "2025",
  },
  {
    id: 6,
    title: "Hive — Community Forum",
    description:
      "Reddit-inspired community platform with nested comments, upvoting, moderation tools, and real-time notifications.",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io", "AWS S3"],
    github: "https://github.com/Nithya Reddy/hive",
    demo: "https://hive-forum.vercel.app",
    color: "#f97316",
    year: "2024",
  },
];

// ===== CERTIFICATIONS =====
export const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    badge: "aws",
    color: "#f59e0b",
    url: "#",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    date: "Aug 2023",
    badge: "meta",
    color: "#0082fb",
    url: "#",
  },
  {
    id: 3,
    title: "MongoDB Developer Path",
    issuer: "MongoDB University",
    date: "Mar 2024",
    badge: "mongodb",
    color: "#10b981",
    url: "#",
  },
  {
    id: 4,
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "Nov 2025",
    badge: "google",
    color: "#ea4335",
    url: "#",
  },
];

export const achievementsData = [
  {
    year: "2024",
    title: "Open Source Contributor",
    description: "Merged 15+ PRs into major React ecosystem libraries",
    icon: "⭐",
  },
  {
    year: "2025",
    title: "Hackathon Winner",
    description: "1st place at SF Tech Hackathon — built AI-powered accessibility tool",
    icon: "🏆",
  },
  {
    year: "2025",
    title: "Speaker — ReactConf",
    description: 'Delivered talk: "State Management in 2022 and Beyond"',
    icon: "🎤",
  },
  {
    year: "2024",
    title: "Dean's List",
    description: "UC Berkeley — Top 5% of Computer Science cohort",
    icon: "🎓",
  },
];
