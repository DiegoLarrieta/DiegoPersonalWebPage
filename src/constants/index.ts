// Contains constant data for using in website
// ! Don't remove anything from here if not sure
// Aqui editar 
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
  cpp,
  python,
  sql,
  swift,
  superpin,
  farmasana,
  intellsis,
  meta,
  arcaContinental,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  wiseCredit,
  amazonReplic,
  neorisProject,
  encriptorProject,
  metaCertification,
  googleCertification,
  javascriptCertification,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  whatsapp,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id:"project",
    title :"Projects",
    link:null,
  },
  {
    id: "certificates",
    title: "Certificates",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AI/ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",//Yes
    icon: html,
  },
  {
    name: "CSS 3",//Yes
    icon: css,
  },
  {
    name: "JavaScript",//Yes
    icon: javascript,
  },
  {
    name: "TypeScript",//Yes
    icon: typescript,
  },
  {
    name: "React JS",//Yes
    icon: reactjs,
  },
  {
    name: "Cpp",//Cambiar a cpp
    icon: cpp,
  },
  {
    name: "Python",//Cambiar a python
    icon: python,
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
    name: "Sql",//Cambiar a SQL
    icon: sql,
  },
  {
    name : "IOS",
    icon : swift,
  }
 
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "SWE Intern (Backend)",
    company_name: "Farmasana",
    icon: farmasana,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "Developed a system for tracking employee check-ins and check-outs, enabling efficient report generation and improving overall process efficiency.",
      "Collaborating with cross-functional teams including designers,managers, and other developers.",
      "Developed an SQL database to store and manage report data, facilitating efficient information retrieval and distribution..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder & Director",
    company_name: "SuperPin",
    icon: superpin,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Created a brand of gym accessories, including designing the product and coordinating manufacturing.",
      "Developed and implemented business strategies, including marketing and sales plans.",
      "Programmed the website for the brand, ensuring a seamless online experience.",
      "Managed customer service, addressing inquiries and providing support.",
      "Achieved sales through the website, Amazon, and Mercado Libre, expanding to 5 countries.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "Intellsis",
    icon: intellsis,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - August 2024",
    points: [
      "Developed reusable React components, optimizing code modularity and improving app scalability for future feature additions.",
      "Improved user experience by implementing responsive design with CSS frameworks, optimizing cross-device functionality, reducing bounce rates by 10%, and boosting overall performance and enhancing customer satisfaction.",
      "Integrated Three.js for real-time 3D visualizations, reducing rendering times by 25% and enhancing interaction with complex data.",
    ],
  },
  {
    title: "Rocket Hackathon Winner",
    company_name: "Arca Continental",
    icon: arcaContinental,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Led the team by organizing tasks and managing team dynamics during the hackathon.",
      "Engineered a machine learning solution using TensorFlow to develop and train apredictive model that identifies individual product preferences.",
      "Implemented a solution to send targeted promotions based on detected customer preferences, enhancing the effectiveness of marketing efforts.",
      "Enhanced promotional strategies by leveraging data-driven insights to deliver targeted marketing advertisements, ensuring more relevant offers reach customers based on their preferences.",
    ],
  },
] as const;

// Testimonials
export const CERTIFICATES = [
  {
    certificateName: "Meta FrontEnd Certification",
    image: metaCertification, // Reemplaza con la ruta real de la imagen
  },
  {
    certificateName: "Google Cloud Certification",
    image: googleCertification, // Reemplaza con la ruta real de la imagen
  },
  {
    certificateName: "JavaScript Certification",
    image: javascriptCertification, // Reemplaza con la ruta real de la imagen
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Amazon Replic",
    description:
      "I developed a fully responsive Amazon e-commerce clone, focusing on creating a functional shopping experience. The platform allows users to browse products, add items to their cart, and complete purchases seamlessly. This project showcases my skills in front-end development, ensuring an intuitive and user-friendly interface, as well as back-end integration for managing orders and payments.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Integration Testing",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amazonReplic,
    source_code_link: "https://github.com/DiegoLarrieta/AmazonReplic",
    live_site_link: "https://diegolarrieta.github.io/AmazonReplic/",
  },
  {
    name: "Employee Training Platform",
    description:
      "I developed an employee training platform for a tech company, featuring course assignments and progress tracking for employees. To enhance engagement, I integrated a Unity-based video game, where employees could earn rewards to use in their courses. The platform also included admin functionalities for course creation and user account management, allowing administrators to monitor employee progress efficiently.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
    ],
    image: neorisProject,
    source_code_link: "https://github.com/DiegoLarrieta/NeorisProject",
    live_site_link: "https://coursetrainingplatform.netlify.app/login/",
  },
  {
    name: "Cryptoverse",
    description:
      "Developed a web application for visualizing and analyzing cryptocurrencies. Users can search for different cryptocurrencies, view detailed performance graphs, and analyze historical data trends over time. The platform provides a comprehensive overview of each cryptocurrency's performance",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/DiegoLarrieta/CryptoWebPage",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "WiseCredit",
    description:
      "I developed an iOS finance app that helps users analyze and compare the best personal loan options from various banks. The app allows users to input their personal information and loan requirements, then compares different banks based on their interest rates and loan characteristics to provide the best options. Additionally, we built an admin webpage where administrators can add new banks, update existing bank details, and edit their interest rates. This tool streamlines the loan selection process, making it easier for users to find the most suitable financial institutions for their needs. ",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: wiseCredit,
    source_code_link: "https://github.com/DiegoLarrieta/HackathonCapOne",
    live_site_link: "https://github.com/DiegoLarrieta/HackathonCapOne",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/luis-diego-dominguez-larrieta-47975a2a3/",
  },
  {
    name: "Whatsapp",
    icon: whatsapp,
    link: "https://wa.me/527712325019",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/DiegoLarrieta",
  },
] as const;
