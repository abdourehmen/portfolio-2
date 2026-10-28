import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  starbucks,
  tesla,
  yancapImage,
  agkameImage,
  zrbikeImage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React & Frontend Developer",
    icon: mobile,
  },
  {
    title: "E-Commerce Architect",
    icon: backend,
  },
  {
    title: "UI/UX & 3D Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    companyName: "Freelance & E-Commerce Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developing custom e-commerce web applications, frontend user interfaces, and digital store architectures.",
      "Building full-stack stores like AGKAME and zr-bike-shop featuring responsive layouts, Supabase database synchronization, and regional shipping calculators.",
      "Implementing interactive user experiences with modern frameworks including React, Vite, and Tailwind CSS.",
      "Optimizing web applications for performance, deployment on Vercel, and Google Search Console indexing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Abdourehmen was a fantastic experience. His attention to detail in building modern e-commerce interfaces is top-notch.",

 
   
  },
];

const projects = [
  {
    name: "Yancap Store",
    description:
      "A verified e-commerce digital platform with automated domain configuration and optimized Google Search Console indexing for seamless regional performance.",
    tags: [
      {
        name: "e-commerce",
        color: "blue-text-gradient",
      },
      {
        name: "seo",
        color: "green-text-gradient",
      },
      {
        name: "web",
        color: "pink-text-gradient",
      },
    ],
    image: yancapImage,
    sourceCodeLink: "https://github.com/abdourehmen",
  },
  {
    name: "AGKAME Store",
    description:
      "An advanced e-commerce web application for electronic games, digital subscriptions, consoles, accessories, and anime figurines featuring multi-column layouts and regional shipping.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: agkameImage,
    sourceCodeLink: "https://github.com/abdourehmen",
  },
  {
    name: "ZR Bike Shop",
    description:
      "A full-stack e-commerce store for bicycles and accessories equipped with custom image-gallery navigation modals, WhatsApp ordering flow, and an administration dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zrbikeImage,
    sourceCodeLink: "https://github.com/abdourehmen",
  },
];

export { services, technologies, experiences, testimonials, projects };