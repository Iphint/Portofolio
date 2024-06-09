// Enter all your detials in this file
// Logo images
import logogradient from './assets/logo.svg';
import logo from './assets/logo2.svg';
// Profile Image
import profile from './assets/profile.png';
// Tech stack images
import html from './assets/techstack/html.png';
import css from './assets/techstack/css.png';
import sass from './assets/techstack/sass.png';
import js from './assets/techstack/js.png';
import react from './assets/techstack/react.png';
import redux from './assets/techstack/redux.png';
import tailwind from './assets/techstack/tailwind.png';
import bootstrap from './assets/techstack/bootstrap.png';
import vscode from './assets/techstack/vscode.png';
import github from './assets/techstack/github.png';
import git from './assets/techstack/git.png';
import npm from './assets/techstack/npm.png';
import postman from './assets/techstack/postman.png';
import figma from './assets/techstack/figma.png';
// Porject Images
import projectImage1 from './assets/projects/project1.jpg';
import projectImage2 from './assets/projects/project2.jpg';
import projectImage3 from './assets/projects/project3.jpg';

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: 'Muhammad Arifin',
  tagline: 'Enthusiastic learner',
  img: profile,
  about: `Enthusiastic learner and persistent in web and Android app development. Proficient in React JS and React Native. Committed to innovative and responsive solutions. Ready to contribute in a dynamic and progressive team. I also possess fast learning abilities to stay aligned with the latest technological advancements.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: 'https://www.linkedin.com/in/m-arifin-4a76b7230/',
  github: 'https://github.com/Iphint',
  instagram: 'https://www.instagram.com/arief_iphint997/',
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: 'Fullstack Web Developer',
    Company: `Bengkel TI`,
    Location: 'Malang east, Java',
    Type: 'Freelance',
    Duration: 'Sep 2023 - now',
  },
  {
    Position: 'Coding Educator',
    Company: `Koodland`,
    Location: 'Jakarta',
    Type: 'Part time',
    Duration: 'June 2023 - now',
  },
  {
    Position: 'Internship IoT Engineer',
    Company: `Kedaireka.id`,
    Location: 'Malang east, Java',
    Type: 'Internship',
    Duration: 'July 2022 - Nov 2022',
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: 'Web Development',
    Company: 'Fullsatack Databagalore Surabaya',
    Location: 'Online',
    Type: 'Full Time',
    Duration: 'May 2022 - November 2022',
  },
  {
    Position: 'Bachelor in Information Technology',
    Company: `STMIK PPKIA PRADNYA PARAMITA`,
    Location: 'Malang',
    Type: 'Full Time',
    Duration: 'June 2021 - Present',
  },
  {
    Position: 'Bangkit Dicoding Mobile Development',
    Company: `Bangkit Academy`,
    Location: 'Bandung',
    Type: 'Full Time',
    Duration: 'October 2023 - January 2024',
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: 'Backend Sayurku',
    image: projectImage1,
    description: `Sayurku is an e-commerce application designed to make it easier to purchase vegetables and fresh food ingredients online. This application offers an easy ordering system, and transactions. With a backend built using Golang, Sayurku guarantees fast and reliable performance. A MySQL database and RDBMS are used to efficiently manage product, order and user data, while Laragon facilitates local development and testing.`,
    techstack: 'Golang, Mysql, Laragon, RDBMS',
    previewLink: 'https://documenter.getpostman.com/view/21060801/2sA3XLE3qR',
    githubLink: 'https://github.com/Iphint/GoApi.git',
  },
  {
    title: 'APLIKASI “QURAN KAREEM”',
    image: projectImage2,
    description: `The Quran reading application is a mobile application or software designed to help users read, understand and reflect on the holy text of the Koran.t`,
    techstack: 'Tailwind, JavaScript, React Native, GraphQl, AppoloClient',
    previewLink: '#',
    githubLink: 'https://github.com/Iphint/framework_uas.git',
  },
  {
    title: 'Ratuniaga Skincare',
    image: projectImage3,
    description: `Ratu Niaga is a skin care product sales application designed to help users care for their skin in a more effective and regular way.`,
    techstack: 'Express JS, JavaScript, Mysql, Laragon, RDBMS',
    previewLink: 'https://documenter.getpostman.com/view/21060801/2sA2xnwp6Q',
    githubLink: 'https://github.com/Iphint/ratuniaga-backend.git',
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: 'zaynm7719@gmail.com',
  phone: '082331319823',
};
