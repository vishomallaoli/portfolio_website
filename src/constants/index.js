import projects1 from "../assets/diadetect.jpeg";
import projects2 from "../assets/contra.webp";
import projects3 from "../assets/cancer.png";
import projects4 from "../assets/event-master.png";
import projects5 from "../assets/gitbot.png";
import projects6 from "../assets/biga.png";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
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
    "I’m Visho, an AI Software Engineer, creating innovative and impactful software solutions.",
  description:
    "I’m currently working on AI SaaS platforms to bring business ideas to life through innovative digital experiences.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  // {
  //   name: "Streamerzz",
  //   description: "Live stream management tool for content creators",
  //   image: projects1,
  //   link: "https://github.com/your-github/streamerzz",
  // },

  {
    name: "DiaDetect",
    description: "A ML-based classifier for predicting diabetes, designed to aid in early detection and healthcare decision-making.",
    image: projects1, // Replace with the appropriate image variable
    link: "https://github.com/your-github/dia-detect",
    liveDemo: "https://render-dia-detect.onrender.com", // Live demo link
  },

  // {
  //   name: "NutriTrack",
  //   description: "Track your meals and calories with smart AI suggestions",
  //   image: projects2,
  //   link: "https://github.com/your-github/nutritrack",
  // },

  {
    name: "ContraAI",
    description: "ContraAI is an AI-driven SaaS platform for real-time legal contract analysis. It enables users to upload contracts, get detailed insights, ask questions, and manage contracts with ease",
    image: projects2, 
    link: "https://github.com/fiston-user/contract-analysis",
    liveDemo: "https://www.simplemetrics.app", // Live demo link
  },
  // {
  //   name: "HairRevive",
  //   description: "A platform for hair regrowth solutions powered by science",
  //   image: projects3,
  //   link: "https://github.com/your-github/hairrevive",
  // },


  // {
  //   name: "DevDeck",
  //   description:
  //     "Interactive dashboard for developers to track coding activity",
  //   image: projects4,
  //   link: "https://github.com/your-github/devdeck",
  // },
  {
    name: "BeatCancer",
    description: "An AI-powered assistant for personalized cancer care. It analyzes patient data, medical guidelines, and records to identify screening gaps and create tailored treatment plans aimed at improving patient outcomes.",
    image: projects3,
    link: "https://github.com/vishomallaoli/beatCancer",
  },

  {
    name: "Eventmaster",
    description: "A comprehensive event management tool that simplifies planning, attendee tracking, and scheduling, built to streamline event organization.",
    image: projects4, 
    link: "https://github.com/vishomallaoli/event-master"
  },
  // {
  //   name: "FitConnect",
  //   description: "Fitness social network to connect athletes and trainers",
  //   image: projects5,
  //   link: "https://github.com/your-github/fitconnect",
  // },

  {
    name: "GitHub Bot",
    description: "An automated bot that interacts with GitHub repositories, performing tasks like issue management, pull request monitoring, and notifications.",
    image: projects5, 
    link: "https://github.com/vishomallaoli/github-bot"
  },
  // {
  //   name: "WellNest",
  //   description: "A wellness app for mental and physical health improvement",
  //   image: projects6,
  //   link: "https://github.com/your-github/wellnest",
  // },
  {
    name: "Binary Image Growing Algorithm",
    description: "A Java application for binary PGM image segmentation, utilizing an 8-connected neighborhood algorithm to detect and grow regions based on pixel intensity values.",
    image: projects6,
    link: "https://github.com/vishomallaoli/binary-image-growing-algorithm",
  },
];

// export const ABOUT_CONTENT = {
//   paragraphs: [
//     "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
//     "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
//   ],
// };

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am an AI software engineer driven by the challenge of building smart, data-driven solutions that bring ideas to life. With a focus on scalable applications and AI integration, I create efficient, user-friendly platforms that solve complex problems while delivering seamless user experiences.",
    "I specialize in using Next.js, React, and Tailwind CSS to create responsive, scalable applications. I also integrate AI tools like OpenAI and Langchain to build intelligent systems. My focus is on writing clean code and collaborating with teams to deliver solutions that meet both business goals and user needs.",
  ],
};

// export const EXPERIENCES = [
//   {
//     yearRange: "2023 — Now",
//     title: "Senior Frontend Engineer at TechCorp",
//     location: "Paris, France",
//     description: [
//       "Leading the development of scalable frontend architecture for enterprise-level applications.",
//       "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
//       "Driving innovation through continuous improvements in performance and UI/UX design.",
//     ],
//   },
//   {
//     yearRange: "2021 — 2023",
//     title: "Frontend Engineer at Startup Inc.",
//     location: "Remote",
//     description: [
//       "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
//       "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
//       "Mentored junior developers and led internal frontend workshops.",
//     ],
//   },
//   {
//     yearRange: "2018 — 2021",
//     title: "Frontend Developer at Creative Solutions",
//     location: "London, UK",
//     description: [
//       "Developed and maintained user interfaces for high-traffic websites.",
//       "Worked closely with designers to implement pixel-perfect designs.",
//       "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
//     ],
//   },
// ];

export const EXPERIENCES = [
  {
    yearRange: "Oct, 2024 - Now",
    title: "Machine Learning Engineer at Fellowship.AI",
    location: "Remote",
    description: [
      "Collaborating on machine learning projects, building scalable AI models using DL/RL.",
      "Pair programming with fellows and mentors to deliver production-ready AI solutions.",
      "Contributing to commercial AI applications for partner companies on real-world challenges.",
    ],
  },
  
  {
    yearRange: "Aug, 2024 — Now",
    title: "Teaching Assistant at Ole Miss",
    location: "Oxford, MS",
    description: [
      "Led labs for Python & Java, focusing on algorithm optimization and data structures.",
      "Collaborated with professors and students to ensure academic success.",
      "Proctored exams and contributed to the development of grading rubrics for assignments.",
    ],
  },
  {
    yearRange: "June, 2024 - Aug, 2024",
    title: "Software Engineering Fellow at Headstarter AI",
    location: "Remote",
    description: [
      "Worked on a team, integrating OpenAI and Firebase to build AI-driven web applications.",
      "Collaborated with back-end engineers to ensure seamless AI integration into the web platform.",
      "Optimized AI functionality to improve responsiveness and scalability across the application.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
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
