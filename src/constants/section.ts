import { Component } from "./content";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiYarn,
  SiPrisma,
  SiPostgresql,
  SiNotion,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const workIcons = [
  { component: React.createElement(FaHtml5), name: "HTML5", color: "#E34F26", url: "https://developer.mozilla.org/docs/Web/HTML" },
  { component: React.createElement(FaCss3Alt), name: "CSS3", color: "#1572B6", url: "https://developer.mozilla.org/docs/Web/CSS" },
  { component: React.createElement(FaSass), name: "Sass", color: "#CC6699", url: "https://sass-lang.com/" },
  { component: React.createElement(FaJs), name: "JavaScript", color: "#F7DF1E", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { component: React.createElement(BiLogoTypescript), name: "Typescript", color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { component: React.createElement(FaReact), name: "React", color: "#61DAFB", url: "https://reactjs.org/" },
  { component: React.createElement(SiNextdotjs), name: "Next.js", color: "#393737ff", url: "https://nextjs.org/" },
  { component: React.createElement(FaNodeJs), name: "Node.js", color: "#339933", url: "https://nodejs.org/" },
  { component: React.createElement(SiNestjs), name: "NestJS", color: "#E0234E", url: "https://nestjs.com/" },
  { component: React.createElement(SiTailwindcss), name: "Tailwind", color: "#00bcff", url: "https://tailwindcss.com/" },
];

const toolIcons = [
  { component: React.createElement(FaFigma), name: "Figma", color: "#F24E1E", url: "https://www.figma.com/" },
  { component: React.createElement(BiLogoVisualStudio), name: "Visual Studio Code", color: "#23a8f2", url: "https://code.visualstudio.com/" },
  { component: React.createElement(FaGitAlt), name: "Git", color: "#F05032", url: "https://git-scm.com/" },
  { component: React.createElement(SiYarn), name: "yarn", color: "#2e2a65", url: "https://yarnpkg.com/" },
  { component: React.createElement(FaDocker), name: "Docker", color: "#1d63ed", url: "https://www.docker.com/" },
  { component: React.createElement(GrMysql), name: "MySql", color: "#3e6e93", url: "https://www.mysql.com/" },
  { component: React.createElement(SiPrisma), name: "Prisma", color: "#FFF", url: "https://www.prisma.io/" },
  { component: React.createElement(SiMongodb), name: "MongoDB", color: "#47A248", url: "https://www.mongodb.com/" },
  { component: React.createElement(SiPostgresql), name: "PostgreSQL", color: "#336791", url: "https://www.postgresql.org/" },
  { component: React.createElement(SiNotion), name: "Notion", color: "#FFF", url: "https://www.notion.so/" },
];

export const section: Array<Component> = [
  {
    key: "Banner",
    props: {
      locale: "Itapevi, São Paulo - Brasil",
    },
  },
  {
    key: "AboutMe",
    props: {
      text: "Me chamo Kaylane Guarino Santana, sou formada no curso de Ánalise e desenvolvimento de sistemas pela Anhanguera Educacional e desenvolvedor Front-end. Desenvolvo páginas e sistemas web responsívos e de layout atrativo. Tenho uma trajetória de cerca de 3 anos trabalhando tanto com Front-end quanto Back-end, o que me tornou um profissional dedicado e organizado. Atualmente eu curso inglês na wizard e uma certificação da AWS pelo Senai, na área de desenvolvimento vivo o aprendizado continuo, focando em tecnologias JavaScript. Busco oportunidades no mercado como Front-end e Back-end.",
    },
  },
  {
    key: "Knowledge",
    props: {
      workIcons,
      toolIcons,
    },
  },
  {
    key: "talkToMe",
    props: {},
  },
];
