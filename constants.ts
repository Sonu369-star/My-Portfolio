
import { DevInfo, Project, Experience, Skill } from './types';

export const DEV_INFO: DevInfo = {
  name: "Alex Rivera",
  role: "Senior Full Stack Engineer",
  bio: "I build scalable high-performance web applications with a focus on user experience and architectural clean code. With over 8 years of experience, I specialize in React ecosystem, Node.js, and Cloud Infrastructure.",
  email: "alex.rivera@example.dev",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "QuantumFlow AI",
    description: "An AI-powered workflow automation tool that helps DevOps teams manage CI/CD pipelines through natural language processing.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Terraform"],
    image: "https://picsum.photos/seed/project1/800/600",
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "EcoSphere Dashboard",
    description: "Real-time environmental monitoring dashboard visualizing data from IoT sensors across urban smart cities.",
    tags: ["Next.js", "D3.js", "GraphQL", "PostgreSQL"],
    image: "https://picsum.photos/seed/project2/800/600",
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "Aura Commerce",
    description: "A headless e-commerce solution with sub-second page loads and integrated AR product preview features.",
    tags: ["React", "Shopify API", "Three.js", "Tailwind"],
    image: "https://picsum.photos/seed/project3/800/600",
    link: "#",
    github: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "TechNova Solutions",
    role: "Lead Frontend Engineer",
    period: "2021 - Present",
    description: [
      "Led a team of 12 engineers in migrating legacy PHP platform to a modern React/Next.js stack.",
      "Improved Core Web Vitals across all product lines by 40% through aggressive caching strategies.",
      "Established a company-wide design system and component library used by 5 different product teams."
    ]
  },
  {
    id: "exp2",
    company: "CloudScale Systems",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: [
      "Designed and implemented a distributed microservices architecture handling 1M+ daily active users.",
      "Optimized database queries in MongoDB and PostgreSQL, reducing API latency by 300ms.",
      "Automated infrastructure provisioning using AWS CDK and GitHub Actions."
    ]
  },
  {
    id: "exp3",
    company: "StartUp Inc",
    role: "Junior Web Developer",
    period: "2016 - 2018",
    description: [
      "Developed responsive UI components using React and styled-components.",
      "Integrated third-party payment gateways like Stripe and PayPal.",
      "Collaborated with UX designers to iterate on user onboarding flows."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: 'Frontend' },
  { name: "TypeScript", level: 90, category: 'Frontend' },
  { name: "Tailwind CSS", level: 95, category: 'Frontend' },
  { name: "Node.js", level: 85, category: 'Backend' },
  { name: "PostgreSQL", level: 80, category: 'Backend' },
  { name: "AWS / GCP", level: 75, category: 'DevOps' },
  { name: "Docker / K8s", level: 70, category: 'DevOps' },
  { name: "Git / CI/CD", level: 90, category: 'Tools' }
];
