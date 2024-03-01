// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  oncf,
  AM,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "À propos de moi",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "Mon cv ",
    title: "Mon cv",
    link: "https://filebin.net/6hh47ugkn1t3r21k/CV_2024-02-12_El_Mehdi_Hail__11___1___1_.pdf",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur PHP",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer\n",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Stage Technique",
    company_name: "ONCF, Rabat ",
    icon: oncf,
    iconBg: "#fff",
    date: "Juil 2023 - Sept 2023",
    points: [
      "Digitalisation d'une application de demande matériel (DM).",
      "Collaborer avec des équipes dynamique, notamment des concepteurs, et d'autres développeurs, pour créer une numérisation de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre navigateurs.",
      "Participer aux révisions de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "PHP Développeur",
    company_name: "AM NEGOCE",
    icon: AM,
    iconBg: "#fff",
    date: "Juil 2022 - Août 2022",
    points: [
      "Développer et maintenir des applications Web utilisant PHP et d'autres technologies connexes.",
      "Le travail requis lors de ce projet est de créer une application web concernant la facturation client et la gestion des stocks avec PHP",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre navigateurs.",

    ],
  },


] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Hail El Mehdi a été un stagiaire exemplaire à l'ONCF. Il s'est montré professionnel, engagé et curieux tout au long de son stage.",
    name: "Mohssin Azzabi",
    designation: "Gérant Fondateur spécialisée en Domotique et SMART Things",
    company: "SMART-WAY Maroc Nav",
    image: user1,
  },


] as const;

// Projects
export const PROJECTS = [
  {
    name: "Gestion De Transport",
    description:
      "L'application de gestion de transport développée avec Java EE est une solution complète pour la gestion efficace des opérations de transport professionnel",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JEE",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Robot4/Robot4-Gestion-Transport-JEE",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Gestion De Stock",
    description:
      "L'application de gestion de stock développée en PHP est une solution complète pour optimiser la gestion des stocks de l'entreprise AM NEGOCE ",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Robot4/Gestion-Stock",
    live_site_link: "http://gestion-stock.42web.io/",
  },
  {
    name: "Club De Sport",
    description:
      "L'application de gestion de club de sport développée en PHP est une solution complète dédiée à simplifier la gestion quotidienne d'un club sportif",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Robot4/Club_sport",
    live_site_link: "https://emsiproject.netlify.app/index.html",
  },
  {
    name: "TikTok Clone",
    description:
      "Une application Web Next JS qui permet aux utilisateurs de télécharger des vidéos de n'importe quelle longueur et taille .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Gestion DM",
    description:
      "une application qui facilitera la collaboration entre les districts, le DRIC, le DMI et les magasiniers, tout en améliorant l'efficacité et la traçabilité de ce processus essentiel.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Robot4/Gestion_dm",
    live_site_link: "",
  },
  {
    name: "Conseiller en voyages",
    description:
      "Application Web qui vous permet de visualiser vos restaurants, hôtels et attractions à proximité, qui peuvent être triés par notes, prix et bien plus encore..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [

  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/hail-el-mehdi-873131197/",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Robot4",
  },
] as const;
