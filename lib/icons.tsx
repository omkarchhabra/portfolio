import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiOpenjdk,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGo,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { FaCuttlefish } from "react-icons/fa6";
import { Brain, Database, Bot, Mail, Phone, Github, Linkedin } from "lucide-react";

export const skillIconMap = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  CSS: { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: SiOpenjdk, color: "#F89820" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Linux: { icon: SiLinux, color: "#FCC624" },

  LangChain: { icon: Bot, color: "#10B981" },
  Pinecone: { icon: Database, color: "#14B8A6" },
  Embeddings: { icon: Brain, color: "#8B5CF6" },
  RAG: { icon: Bot, color: "#F97316" },
  "Prompt Engineering": { icon: Brain, color: "#EC4899" },
  "LLM APIs": { icon: Bot, color: "#A855F7" },

  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  SQL: { icon: Database, color: "#94A3B8" },
  "Vector DBs": { icon: Database, color: "#22C55E" },

  C: { icon: FaCuttlefish, color: "#00599C" },
  "C++": { icon: FaCuttlefish, color: "#659AD2" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  JWT: { icon: SiJsonwebtokens, color: "#EC4899" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
} as const;

export const contactIconMap = {
  email: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};