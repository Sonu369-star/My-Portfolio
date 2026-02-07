
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface DevInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
