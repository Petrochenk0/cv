import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Petrochenko Nikita",
  initials: "PN",
  location: "Russian",
  about:
    "Frontend Developer focused on building products with extra attention to detail",
  summary:
    "Experienced Frontend Developer with 3 years of expertise. Specializing in React, TypeScript, and Nextjs. Successfully optimized performance and enhanced user experience.Actively contributed to the development and launch of key projects. Ready for new challenges and continuous professional growth.",
  avatarUrl:
    "https://sun9-12.userapi.com/impg/VzaUcRiMBS6RAvu-igpDYrvf2e_MmW19g6OCOA/bhX2zf4JehA.jpg?size=1080x1080&quality=95&sign=f3796e08f39e0888df0f5894f284691d&type=album",
  contact: {
    email: "petrochenko.nikita@gmail.com",
    tel: "+79681877773",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Petrochenk0",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Higher School 52",
      degree: "Higher school degree in computer science",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Acron",
      badges: ["Remote"],
      title: "Middle Frontend Developer",
      start: "2019",
      end: "2021",
      description:
        "Experienced Frontend Developer with 2 years of experience at Acron. Specializing in React, TypeScript, and backend integration. Successfully optimized performance and contributed to launching key projects, enhancing user experience. Strong teamwork skills and experience in tackling technical challenges.",
    },
    {
      company: "SkillSphere",
      badges: ["Remote"],
      title: "Lead Frontend Developer",
      start: "2022",
      end: "2023",
      description:
        "Experienced Frontend Developer with a year of tenure at SkillSphere, contributing significantly to successful projects. Proficient in TypeScript, JavaScript (ES6+), Next.js, React, Zustand, and Tailwind CSS. Achievements include Next.js and TypeScript integration, development process optimization, UI enhancements, active team collaboration, and mobile adaptation. This experience enhanced development skills and highlighted adaptability in dynamic startup environments.",
    },
  ],
  skills: ["TypeScript", "JavaScript", "React", "Next.js", "CSS / SASS / SCSS"],
  projects: [
    {
      title: "Musical App",
      techStack: ["React", "JavaScript", "TypeScript", "Vite", "SCSS", "API"],
      description:
        "React music platform with the ability to search and get in a good mood",
      link: {
        href: "https://bespoke-rugelach-3a09f1.netlify.app/",
      },
    },
    {
      title: "Car Catalog",
      techStack: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"],
      description:
        "A catalog of machines with the possibility of adding other machines",
      link: {
        href: "https://merry-swan-79a7dc.netlify.app/",
      },
    },
    {
      title: "Wheather Feather",
      techStack: ["React", "JavaScript", "CSS / SASS", "Vite", "API"],
      description: "Applications showing the weather around the world",
      link: {
        href: "https://eclectic-bubblegum-17b08b.netlify.app/",
      },
    },
    {
      title: "Task To Do Glow",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "SCSS"],
      description:
        "An application for managing tasks. It allows users to manage their tasks from a smartphone, tablet and computer",
      link: {
        href: "https://react-todo-w9mt.onrender.com/",
      },
    },
    {
      title: "Cyberpunk website",
      techStack: ["React", "JavaScript", "SCSS / SASS", "Vite"],
      description: "A website dedicated to the cyberpunk game",
      link: {
        href: "https://cyberpank-site.vercel.app/",
      },
    },
    {
      title: "Google Main Page UI",
      techStack: ["React", "JavaScript", "SASS", "Vite"],
      description:
        "This project is an implementation of the user interface of the Google homepage using modern web technologies.",
      link: {
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;
