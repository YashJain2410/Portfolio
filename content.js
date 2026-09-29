/**
 * EDIT THIS FILE to update the words, links, roles, and projects across the site.
 * Leave a link as an empty string to hide its button.
 */
export const portfolio = {
  name: "Yash Jain",
  initials: "YJ",
  title: "AI Engineer & Software Developer",
  location: "India",
  availability: "Open to AI/ML, data science & software engineering roles",
  email: "yashjain200524@gmail.com",
  links: {
    github: "https://github.com/YashJain2410",
    linkedin: "https://www.linkedin.com/in/yash-jain-690a57292/",
    codolio: "https://codolio.com/profile/YashJain",
    resume: "./assets/Yash_Jain_Resume.pdf",
  },
  hero: {
    eyebrow: "AI engineer intern · Software developer · Builder",
    lineOne: "I build things",
    lineTwo: "that think.",
    description:
      "I turn ambitious AI ideas into useful, working products—from the models and systems behind them to the experience people actually use.",
  },
  introduction: {
    heading: "Curiosity is the starting point. Shipping is the goal.",
    paragraphs: [
      "I’m an AI engineer intern and computer science student who likes owning the whole problem: understanding the user, designing the system, building it, and finding out whether it works.",
      "My work spans conversational AI, developer tools, image generation, backend systems, and the evaluation pipelines that make intelligent products more trustworthy.",
    ],
  },
  projects: [
    {
      slug: "ai-voice-interview-platform",
      number: "01",
      name: "AI Voice Interview Platform",
      category: "Conversational AI · Full-stack product",
      oneLiner: "A real-time AI interviewer that listens, adapts, and evaluates.",
      overview:
        "I built a live interview experience that can hold a two-way voice conversation, ask follow-up questions informed by a candidate’s background, and score answers against a rubric.",
      problem:
        "Practice interviews often feel static. I wanted an experience that responds in the moment and gives structured feedback a candidate can act on.",
      built: [
        "A full-duplex audio pipeline using WebRTC, WebSockets, and voice activity detection for low-latency conversation.",
        "An orchestration layer for Gemini and Hugging Face models, with parallel execution and fallback routing.",
        "Three MCP context servers for interview flow, retrieval, and evaluation; FAISS retrieval informs targeted follow-up questions.",
        "A rubric-driven evaluation flow that scores answers across four dimensions.",
      ],
      result:
        "Sub-second conversational latency in the project setup, with one live full-duplex audio pipeline per session.",
      technologies: ["FastAPI", "WebRTC", "WebSockets", "Whisper", "MCP", "FAISS", "Docker"],
      links: {
        github: "https://github.com/YashJain2410/AI-Interview-Platform",
        live: "",
      },
      visual: "interview",
      visualLabel: "LIVE INTERVIEW / SESSION 01",
    },
    {
      slug: "codesage",
      number: "02",
      name: "CodeSage",
      category: "Developer tools · Code intelligence",
      oneLiner: "A codebase assistant that understands how a repository fits together.",
      overview:
        "I built a developer assistant that parses repositories into call graphs and retrieves the right code context before answering questions about a codebase.",
      problem:
        "Text-only search loses relationships between functions and files. I wanted developers to get answers grounded in the structure of the code itself.",
      built: [
        "AST-based repository parsing with tree-sitter and call graphs built with NetworkX.",
        "Intent-classified retrieval combining BM25, dense vectors, and graph-based context expansion.",
        "A LangGraph workflow with RAGAS evaluation gates, code-quality metrics, and Prometheus/Grafana monitoring.",
        "A deployable application using Qdrant and Railway.",
      ],
      result:
        "About 41% higher answer faithfulness than a text-chunking baseline in the project’s evaluation.",
      technologies: ["LangGraph", "tree-sitter", "NetworkX", "Qdrant", "UniXcoder", "RAGAS"],
      links: {
        github: "https://github.com/YashJain2410/CodeSage",
        live: "",
      },
      visual: "codesage",
      visualLabel: "REPOSITORY / INTELLIGENCE MAP",
    },
    {
      slug: "ai-image-generation-platform",
      number: "03",
      name: "AI Image Generation Platform",
      category: "Generative AI · Product infrastructure",
      oneLiner: "A flexible studio for consistent product visuals.",
      overview:
        "I built an image generation platform that uses reference images for style transfer so a product team can explore visual directions while keeping a consistent look.",
      problem:
        "Generating one image is easy. Building a repeatable workflow that handles different models, providers, and stored assets is the harder product problem.",
      built: [
        "A Dockerized FastAPI service for image-based style transfer and generation.",
        "A provider-agnostic layer supporting FAL.ai, Replicate, and Hugging Face, with SDXL and Flux model options.",
        "An AWS S3 storage flow for generated assets, with the application deployed using Render and Vercel.",
      ],
      result:
        "A working end-to-end workflow for creating and storing product visuals across multiple AI providers.",
      technologies: ["FastAPI", "Docker", "AWS S3", "SDXL", "Flux", "Vercel", "Render"],
      links: {
        github: "https://github.com/YashJain2410/AI-Image-Generator",
        live: "",
      },
      visual: "image",
      visualLabel: "GENERATIVE STUDIO / EXPLORATIONS",
    },
  ],
  experience: [
    {
      role: "AI Engineer Intern",
      company: "",
      period: "Present",
      description:
        "Focused on applied AI and the engineering needed to make it useful in practice.",
    },
    {
      role: "Software Engineering Intern",
      company: "Dokaai",
      period: "Apr – Jun 2025",
      description:
        "Built Node.js and Express REST APIs, implemented JWT authentication for more than five user roles, and strengthened backend testing with Postman.",
      highlights: ["30% backend performance improvement", "40% fewer production bugs"],
    },
  ],
  skills: [
    { title: "Languages & foundations", items: ["Python", "JavaScript", "C++", "C", "SQL"] },
    { title: "AI & machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "RAG", "NLP", "Computer vision"] },
    { title: "Systems & shipping", items: ["FastAPI", "Node.js", "Express", "Docker", "AWS", "MongoDB", "CI/CD", "MLOps"] },
  ],
  education: {
    school: "KIET Group of Institutions, Ghaziabad",
    degree: "B.Tech in Computer Science",
    period: "2023 – 2027",
  },
  notes: [
    "1st runner-up · Hack Genesis Hackathon",
    "1577 LeetCode rating",
  ],
  contact: {
    heading: "Have a hard problem? Let’s build something useful.",
    description:
      "I’m looking for opportunities across AI engineering, machine learning, data science, and software development. I’d love to hear what you’re building.",
  },
};
