export const portfolioData = {
  personal: {
    name: "Omkar Chhabra",
    logo: "OMKAR CHHABRA",
    role: "Entry-Level Software Engineer",
    tagline:
      "I build backend systems, AI-powered tools, cloud-native applications, and practical full-stack products.",
    intro:
      "Computer Science student with experience in backend API development, cloud systems, AI workflows, and automation. I enjoy building useful products that are scalable, polished, and real-world focused.",
    email: "chhabraomkar@gmail.com",
    phone: "+1 (562) 353-0254",
    location: "Long Beach, CA",
    linkedin: "https://linkedin.com/in/omkar-chhabra",
    github: "https://github.com/omkarchhabra",
    resume: "/Omkar_Chhabra_Resume.pdf",
  },

  education: {
    school: "California State University, Long Beach",
    degree: "Bachelor of Science in Computer Science",
    gpa: "GPA: 3.4",
    graduation: "Graduated Dec 2025",
    image: "/experience/education-logo.png",
  },

  experience: [
    {
      id: "cs-tutor",
      title: "Computer Science Tutor",
      company:
        "College of Engineering Tutoring Center, California State University, Long Beach",
      duration: "Aug 2025 – Dec 2025",
      image: "/experience/csulb.png",
      description:
        "Provided academic support for core computer science subjects including algorithms, operating systems, databases, networks, and machine learning.",
      points: [
        "Tutored 20+ students weekly in data structures, operating systems, databases, networks, and machine learning.",
        "Led 10+ hours/week of one-on-one and group sessions using code walkthroughs and whiteboard explanations.",
        "Helped debug Python and Java assignments involving APIs, performance bottlenecks, memory issues, and optimization.",
      ],
    },
    {
      id: "office-assistant",
      title: "Lead Office Assistant",
      company: "Facility Operations, California State University, Long Beach",
      duration: "Feb 2024 – Dec 2025",
      image: "/experience/asi.png",
      description:
        "Led operational automation and asset tracking improvements across multiple university locations.",
      points: [
        "Automated recurring workflows using Python, SQL, and Excel macros reducing RPP processing time from 15 to 5 minutes.",
        "Managed tracking and auditing of $800K+ in assets across 5 locations and reduced discrepancies by 30%.",
        "Improved reporting consistency and reduced manual work through data cleanup and standardized reporting templates.",
      ],
    },
  ],

  skills: [
    {
      title: "Front-end web development",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "CSS", "Tailwind CSS"],
    },
    {
      title: "Back-end & cloud",
      items: ["Python", "Java", "Node.js", "Docker", "Kubernetes", "AWS", "Linux"],
    },
    {
      title: "AI / RAG",
      items: ["LangChain", "Pinecone", "Embeddings", "RAG", "Prompt Engineering", "LLM APIs"],
    },
    {
      title: "Data & databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Vector DBs"],
    },
    {
      title: "Systems & tools",
      items: ["C", "C++", "Go", "Git", "GitHub", "JWT", "Jenkins", "Grafana", "Prometheus"],
    },
  ],

  projects: [
    {
      id: "beach-bank",
      title: "Beach Bank",
      subtitle: "Full-Stack Banking Application",
      completed: "Completed May 2025",
      description:
        "Built a multi-bank web app with JWT authentication, real-time transactions, balance updates, and transfers using Plaid and Dwolla.",
      tech: [
        "Next.js 14",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Appwrite",
        "Plaid",
        "Dwolla",
        "JWT",
        "PostgreSQL",
        "Netlify",
        "GitHub Actions",
      ],
      live: "https://beachbank.netlify.app/sign-in",
      image: "/projects/beachbank.png",
    },
    {
      id: "devsecops-project",
      title: "DevSecOps Project",
      subtitle: "Netflix Clone Deployment on AWS",
      completed: "Completed Feb 2025",
      description:
        "Designed a Jenkins pipeline with Docker build and scanning, blocked 15+ vulnerabilities, automated deployments with Helm and ArgoCD on Kubernetes, and integrated Prometheus and Grafana.",
      tech: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Helm",
        "ArgoCD",
        "Prometheus",
        "Grafana",
      ],
      live: "",
      image: "/projects/devsecops.png",
    },
    {
      id: "rate-my-professor-ai",
      title: "Rate-My-Professor AI",
      subtitle: "AI-Powered Web Application",
      completed: "Completed Oct 2024",
      description:
        "Developed an AI-powered professor rating web app with real-time assistance. Improved responsiveness and user experience with structured AI-powered interactions.",
      tech: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Gemini API"],
      live: "https://ai-rate-my-prof-one.vercel.app/welcome",
      image: "/projects/rmp-ai.png",
    },
    {
      id: "chat-with-pdf",
      title: "Chat with PDF",
      subtitle: "Generative AI RAG Application",
      completed: "Completed April 2025",
      description:
        "Built a two-app RAG system in Python and LangChain using Claude via Bedrock and Titan embeddings. Enabled fast querying across large PDFs with concurrent users.",
      tech: ["Python", "LangChain", "AWS Bedrock", "Claude", "Docker", "EC2", "S3"],
      live: "",
      image: "/projects/chat-pdf.png",
    },
    {
      id: "mern-stack-app",
      title: "MERN Stack App",
      subtitle: "Full-stack CRUD dashboard",
      completed: "Completed Jan 2025",
      description:
        "Developed a full-stack location-sharing web app using the MERN stack. Built RESTful CRUD APIs, integrated mapping features, and added real-time notifications.",
      tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Tailwind", "JWT"],
      live: "",
      image: "/projects/mern.png",
    },
    {
      id: "pokemon-game",
      title: "The Pokemon Game",
      subtitle: "Turn-based battle with PokéAPI data",
      completed: "Completed Aug 2025",
      description:
        "Built a Pokémon-inspired game with structured gameplay logic, modular design, item systems, turn-based battle mechanics, and player management.",
      tech: ["React", "TypeScript", "Tailwind", "PokéAPI", "Vite"],
      live: "",
      image: "/projects/pokemon.png",
    },
  ],
};