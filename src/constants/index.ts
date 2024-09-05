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
      "Developed UI elements using React, creating various macros for direct client interaction.",
      "Participated in integrating GraphQL into the system, enhancing data querying capabilities and efficiency.",
      "Worked collaboratively within a team using Agile methodologies, contributing to iterative development and project management.",
      "Focused on improving user experience by implementing responsive design and ensuring a seamless interaction flow.",
    ],
  },
  {
    title: "Rocket Hackathon Winner",
    company_name: "Arca Continental",
    icon: arcaContinental,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Led the team by organizing tasks and managing team dynamics during the hackathon.",
      "Engineered a machine learning solution leveraging TensorFlow to construct and train a predictive model.",
      "Implemented a solution to send targeted promotions based on detected customer preferences, enhancing the effectiveness of marketing efforts.",
      "Improved promotional strategies by leveraging data-driven insights to deliver more relevant offers to customers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [//CAMBIAR A CERTIFICATES
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
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
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
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
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
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
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
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
