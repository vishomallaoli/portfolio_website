import projects1 from "../assets/diadetect.jpeg";
import projects2 from "../assets/project21.png";
import projects3 from "../assets/ecoguard2.jpg";
import projects4 from "../assets/event-master.png";
import projects5 from "../assets/web-agent.jpg";
import projects6 from "../assets/chessarm.jpg";

import person1 from "../assets/earnest.JPG";
import person2 from "../assets/ishan.JPG";
import person3 from "../assets/shrestha.jpeg";
import person4 from "../assets/sandip.jpg";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";



export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Visho, Full-stack alchemist turning code & data into products.",
  description:
    "Now engineering IIoT pipelines and dynamic Value Stream Maps at Insituform, transforming raw production telemetry into faster lead times and smarter decisions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/SWEresume2.pdf",
};

export const PROJECTS = [
  {
    name: "DiaDetect (Data Science Initiative)",
    description: "A ML-based classifier for predicting diabetes, designed to aid in early detection and healthcare decision-making.",
    image: projects1, // Replace with the appropriate image variable
    link: "https://github.com/vishomallaoli/dia-detect",
    liveDemo: "https://render-dia-detect.onrender.com", // Live demo link
  },

  {
    name: "Dynamic Value Stream Mapping Platform (Internship)",
    description: "A real-time Value Stream Mapping platform powered by Amper machine data, operator inputs, and Snowflake Streams, visualized through Power BI and Tableau to surface bottlenecks and drive Lean/Six Sigma decisions in manufacturing.",
    image: projects2, 
    // link: "https://github.com/fiston-user/contract-analysis",
    // liveDemo: "https://www.simplemetrics.app", // Live demo link
  },

  {
    name: "EcoGuard (HackHarvard 2024)",
    description: "An AI-powered waste management platform that streamlines reporting and collection, promoting sustainability and targeting 50+ users with eco-friendly incentives.",
    image: projects3,
    link: "https://github.com/vishomallaoli/mol-iq-waste-mgmt",
    liveDemo: "https://mol-iq-waste-mgmt.vercel.app/",
  },

  {
    name: "Eventmaster",
    description: "A comprehensive event management tool that simplifies planning, attendee tracking, and scheduling, built to streamline event organization.",
    image: projects4, 
    link: "https://github.com/vishomallaoli/event-master"
  },

  {
    name: "LLM Web Agent (Fellowship.AI Collaboration)",
    description: "An AI-driven autonomous agent built to extract real-time financial data from websites, focusing on tasks like interest rate extraction using LangChain and WebLlama. Optimized for handling 50+ complex web scenarios.",
    image: projects5,
    link: "https://github.com/fellowship/web-agent"
  },

  // {
  //   name: "Binary Image Growing Algorithm (Algorithm Design Project)",
  //   description: "A Java application for binary PGM image segmentation, utilizing an 8-connected neighborhood algorithm to detect and grow regions based on pixel intensity values.",
  //   image: projects6,
  //   link: "https://github.com/vishomallaoli/binary-image-growing-algorithm",
  // },

    {
    name: "BigDaddy: Robotic Chess Arm (Senior Design Project)",
    description: "An in-progress robotic arm capable of physically playing chess, integrating embedded motor control, chess engine logic, and real-time perception. Combines AI planning with hardware design to create an interactive, intelligent physical agent.",
    image: projects6,
    link: "https://github.com/vishomallaoli/binary-image-growing-algorithm",
  },
];


export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m a software engineer with a deep interest in applied AI and data engineering—especially where the digital meets the physical world. I build full-stack applications using Next.js, React, and TypeScript, often integrating tools like OpenAI and LangChain to make products that don’t just function, but adapt and assist.",
    
    "Lately, my focus has shifted toward the factory floor. As a Data Engineering Intern at Insituform, I’m building real-time IIoT pipelines and dynamic Value Stream Maps using Amper data, Snowflake, Power BI, and Tableau. These tools help cut production delays, optimize workflows, and bring Industry 4.0 principles to life in manufacturing environments.",

    "My work spans across products, machine learning, and process optimization, but the thread is the same: solve real problems with first principles thinking and never settle."
  ],
};


export const EXPERIENCES = [
  {
    yearRange: "Mar, 2025 - Now",
    title: "Data Engineering Intern - CI Manufacturing Analytics, Insituform Technologies LLC",
    location: "Batesville, MS",
    description: [
      "Engineered a dynamic Value Stream Mapping (VSM) system using Amper API and SQL, aligned with Lean Manufacturing and Industry 4.0 principles, reducing lead time by 25% through real-time integration of machine and operator data.",
      "Simulated future-state workflows in Tableau to evaluate continuous improvement scenarios, supporting Six Sigma decision-making before implementing process changes on the shop floor.",
      "Built and maintained ELT pipelines using Snowflake Tasks and Streams to automate ingestion of IIoT and operational data into a centralized warehouse powering Power BI dashboards.",
      "Improved efficiency by ~20% and reduced surplus material costs by 15% through automated KPI tracking and root cause analysis using DAX, Excel, and Power BI; maintained workflow integrity using Git and Azure DevOps.",
    ],
  },

  {
    yearRange: "Aug, 2024 — May, 2025",
    title: "Teaching Assistant - CSCI 111/211/256, Ole Miss",
    location: "Oxford, MS",
    description: [
      "Led labs for Python & Java, focusing on algorithm optimization and data structures.",
      "Collaborated with professors and students to ensure academic success.",
      "Proctored exams and contributed to the development of grading rubrics for assignments.",
    ],
  },

  {
    yearRange: "Oct, 2024 - Dec, 2024",
    title: "Machine Learning Engineer, Fellowship.AI",
    location: "Remote",
    description: [
      "Develop web agents using LangChain, SeeAct, and WebLlama to autonomously browse financial websites and extract real-time interest rates.",
      "Customize agents for dynamic data retrieval, error handling, and task optimization to ensure accuracy and adaptability.",
      "Provide daily updates, participate in meetings, and collaborate with fellows and mentors to align on goals and resolve challenges.",
    ],
  },
  
  
  // {
  //   yearRange: "June, 2024 - Aug, 2024",
  //   title: "Software Engineering Fellow, Headstarter AI",
  //   location: "Remote",
  //   description: [
  //     "Worked on a team, integrating OpenAI and Firebase to build AI-driven web applications.",
  //     "Collaborated with back-end engineers to ensure seamless AI integration into the web platform.",
  //     "Optimized AI functionality to improve responsiveness and scalability across the application.",
  //   ],
  // },
];

export const TESTIMONIALS = [
  // {
  //   name: "Sarah Johnson",
  //   title: "Frontend Engineer, Google",
  //   feedback:
  //     "Visho is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
  //   image: person1,
  // },
  {
    name: "Earnest James",
    title: "DevOps Engineer, CSpire",
    feedback:
      "I competed against Visho at HackOleMiss, where he played a pivotal role in leading his team to victory with a cutting-edge fake news detection project. His skills in AI model development are unparalleled, and his leadership and deep technical knowledge were clearly evident throughout the competition. Visho’s ability to stay sharp and focused, even under intense pressure, sets him apart as an exceptional developer.”",
    image: person1,
  },
  {
    name: "Ishan Pathak",
    title: "CompSci Student, Ole Miss",
    feedback:
      "I had the opportunity to share several classes with Visho, and his expertise in AI/ML and Data Analytics was impressive. What stood out to me the most was how quickly he picked up full-stack development. Despite starting later than many of us, he managed to complete numerous projects like SaaS AI Platform in a short time. His drive and focus during those sprints remind me of a rabbit in full motion.",
    image: person2,
  },
  {
    name: "Rishabh Shrestha",
    title: "Full-Stack Engineer, CSA",
    feedback:
      "What impresses me most about Visho is his preparedness. While I was pursuing my master’s, I saw him, as a sophomore, already having his LinkedIn profile and resume well-prepared. He strikes me as someone who can achieve anything, moving forward with a slow but steady determination. Beyond his technical skills and classroom achievements, it’s his ability to connect with people that truly stands out.",
    image: person3,
  },
  {
    name: "Sandip Rai",
    title: "Former President, NEPSA",
    feedback:
      "Visho served as the MC for Nepali Nights in 2023, where he showcased exceptional leadership, communication, and stage management skills. His humor and charisma kept an audience of over 100 people entertained throughout the event. Whatever project he takes on, Visho always proves to be a people’s person, connecting effortlessly with those around him.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "Software Engineer, Shopify",
    feedback:
      "Visho brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Software Engineer, Stripe",
    feedback:
      "Visho combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "vishomallaoli1@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/vishomallaoli",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/vishomallaoli",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Visho Malla Oli. All rights reserved.`,
};
