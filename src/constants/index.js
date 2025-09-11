import projects1 from "../assets/diadetect.jpeg";
import projects2 from "../assets/test.jpg";
import projects3 from "../assets/ecoguard3.webp";
import projects4 from "../assets/vsm.jpeg";
import projects5 from "../assets/project5.jpg";
import projects6 from "../assets/biga.png";

import person1 from "../assets/earnest.JPG";
import person2 from "../assets/ishan.JPG";
import person3 from "../assets/shrestha.jpeg";
import person4 from "../assets/sandip.jpg";
import person5 from "../assets/person5.JPG";
import person6 from "../assets/person6.jpeg";



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
    "I’m Visho, a Software Engineer (with Data Science emphasis), creating innovative and impactful software solutions.",
  description:
    "I’m currently working a Operational Analyst to optimize manufacturing workflows to bridge engineering with business solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/SWEresume3.pdf",
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
    link: "https://github.com/vishomallaoli/dia-detect",
    liveDemo: "https://render-dia-detect.onrender.com", // Live demo link
  },

  // {
  //   name: "NutriTrack",
  //   description: "Track your meals and calories with smart AI suggestions",
  //   image: projects2,
  //   link: "https://github.com/your-github/nutritrack",
  // },

  {
    name: "Neural Bus Schema",
    description: "A research prototype in Python/FastAPI using ResNet-50 for vision and a transformer-based language model, designed to route and preserve information across specialized AI systems.",
    image: projects2, 
    link: "https://github.com/vishomallaoli/neural-bus-schema",
    // liveDemo: "https://www.placeholder.app", // Live demo link
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
    name: "EcoGuard",
    description: "An full stack waste management platform that streamlines reporting and collection, promoting sustainability and, targeting 50+ users.",
    image: projects3,
    link: "https://github.com/vishomallaoli/mol-iq-waste-mgmt",
    liveDemo: "https://mol-iq-waste-mgmt.vercel.app/",
  },

  {
    name: "Dynamic Value Stream Map",
    description: "Built an interactive Value Stream Map in Power BI using real-time machine data to visualize KPIs and identify bottlenecks across production lines.",
    image: projects4, // Replace with the appropriate image variable
    // link: "https://github.com/vishomallaoli/value-stream-mapping",
    liveDemo: "https://www.linkedin.com/in/vishomallaoli/overlay/projects/2057726594/multiple-media-viewer/?profileId=ACoAADb-ezYB1EZehtBYWo-F0rABXX2Kwt_BlQo&treasuryMediaId=1750109481456",
  },
  // {
  //   name: "FitConnect",
  //   description: "Fitness social network to connect athletes and trainers",
  //   image: projects5,
  //   link: "https://github.com/your-github/fitconnect",
  // },

  // {
  //   name: "GitHub Bot",
  //   description: "An automated bot that interacts with GitHub repositories, performing tasks like issue management, pull request monitoring, and notifications.",
  //   image: projects5, 
  //   link: "https://github.com/vishomallaoli/github-bot"
  // },
  {
    name: "Autonomous Finance Web Agent",
    description: "A platform for structured real estate and finance data pipelines with autonomous agent benchmarking.",
    image: projects5,


    // will release soon
    link: "https://github.com/fellowship/web-agent",
    // liveDemo: "https://llm-web-agent.vercel.app/",
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
    "I’m a software engineer (with strong background in ML models) passionate about turning complex challenges into smart, data-driven products. With a strong foundation in Next.js, React, and JavaScript, I build scalable, intuitive applications that combine clean design with robust performance. My work integrates AI tools like OpenAI and Langchain, enabling systems to think, adapt, and assist—bridging the gap between technology and real-world problem-solving.",
    "Currently, I’m also working part-time as an Operations Analyst, where I apply my analytical mindset to optimize manufacturing workflows. By using tools like Amper and Power BI, I translate raw production data into actionable insights that reduce delays, cut costs, and improve efficiency. This experience sharpens my ability to see both the business and engineering sides of problems—and create tech that truly delivers.",
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
    yearRange: "Sep 2025 - Present",
    title: "Foundational Engineer, Stealth Defense Startup",
    location: "Remote",
    description: [
      // "",
    ],
  },

  {
    yearRange: "Mar 2025 - Present",
    title: "Operations Analyst, Insituform Technologies LLC",
    location: "On-site",
    description: [
      "Built a dynamic Value Stream Map in Power BI using Amper REST API with Python/SQL pipelines, enabling real-time tracking of throughput, cycle time, and headcount.",
      "Modeled One-Piece Flow (OPF) improvements by analyzing headcount (3/station), WIP levels (25 units/station), and throughput (8 units/hr), revealing a 22% cycle time reduction opportunity.",
      "Designed a digital manufacturing framework migrating paper logs to Power Apps, Dataverse, and SharePoint, with a future path for SQL Server integration.",
      "Deployed an open-source GPT-4All RAG pipeline to automate data entry, reducing manual errors and improving productivity by 300%."
    ],
  },

  {
    yearRange: "Aug 2024 — May 2025",
    title: "Teaching Assistant, Ole Miss Department of Computer Science",
    location: "Oxford, MS",
    description: [
      "Led labs for Python & Java, focusing on algorithm optimization and data structures.",
      "Hosting 15 weekly office hours and lab assistance for over 200 students enrolled in CSCI 111/211/256.",
      "Proctored exams and contributed in development of grading rubrics for assignments.",
    ],
  },

  {
    yearRange: "Sep 2024 - Dec 2024",
    title: "Machine Learning Engineer, Fellowship.AI",
    location: "Remote",
    description: [
      "Collaborated with a team of 18 engineers to develop FastAPI services with PostgreSQL (Neon), enabling structured storage of 100+ real estate and finance listings per run.",
      "Pioneered a 6-layer control variable system that eliminated system crashes and improved data validation, ensuring 95% data integrity across pipelines.",
      "Benchmarked autonomous agents on 120+ actions, with Gemini Browser-Use Agent achieving 87.5% overall accuracy (F1: 90% scroll, 90.1% return values) compared to Perplexity Sonar’s strong factual QA.",
    ],
  },

  {
    yearRange: "May 2024 - July 2024",
    title: "Summer Coding Intern, Delta Health Alliance",
    location: "Stoneville, MS",
    description: [
      "Taught AI fundamentals through projects like rock-paper-scissors prediction to 30 students at Camp 2.0, increasing retention by 15%.",
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
    name: "Susan Subedi",
    title: "Senior Software Engineer, Chime",
    feedback:
      "In early 2025, Visho had no background in automotive repair, yet within six months he was confidently fixing brake pads and CV axles, all while working full-time as an intern. That ability to quickly master new domains without compromising his professional output shows the discipline, adaptability, and follow-through that make him invaluable to any team.",
    image: person5,
  },  

  {
    name: "Ankit Shrestha",
    title: "Assistant Professor, Ole Miss CompSci",
    feedback:
      "In Fall 2025, Visho approached me with his senior project focused on designing a neural bus to minimize information loss between specialized AI models. I have been impressed by his ability to both zoom in on highly technical details and zoom out to evaluate broader system design considerations. As his current research sponsor, I can attest to his intellectual curiosity, focus, and determination.",
    image: person6,
  },
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
