export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/ChustomChatbotCreate.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Custom Chatbot Creator",
    des: "API-driven system to enable users to design and deploy personalized AI chatbots to offer tailored customer support, share unique personal experiences and advice, or serve specialized functions",
    img: "/CustomChatbotCreate.png",
    used: ["React", "Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
    newPage: true,
    link: "https://custom-chatbots-821bum5c2-wendys-projects-2720c50a.vercel.app/login",
    linkText: "Live Website",
  },
  {
    id: 2,
    title: "Social Media Management Dashboard",
    des: "A social media management dashboard that integrates consumer analytics from 4 social media platforms using various API calls and engagement data collected automatically with Python Selenium.",
    img: "/SocialInsightsComparisons.png",
    used: [
      "React",
      "Node.js",
      "Python Selenium",
      "Express",
      "MongoDB",
      "Facebook Graph",
      "Instagram Graph",
      "Google Analytics Data API",
    ],
    newPage: false,
    link: "#work",
    linkText: "Read More",
  },
  {
    id: 3,
    title: "Happiness Garden (Android App)",
    des: "A wellness app that gamifies the habit of self-reflection and gratitude. Each journal entry will add a new flower to a the garden. Users can write down what they are grateful for and any worries they may have.  Developed in a week to explore Kotlin and Android development.",
    img: "/happyImg.png",
    used: ["Kotlin", "Firebase", "Android Studio"],
    video: "/happyVid.mp4",
    newPage: false,
    link: "https://github.com/Wendyz1116/happiness-garden/tree/main",
    linkText: "Read More",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Software Engineer Intern",
    company: "Ivabalte",
    dates: "Jun 2024 - Aug 2024",
    bullets: [
      "Developed a full-stack social media management dashboard, from ideation to deployment, using the MERN (MongoDB, Express, React, Node.js) stack, integrating consumer analytics from 4 social media platforms.",
      "Increased audience interaction by 52% across multiple social media platforms by collaborating with the marketing specialists and generating data-driven analysis of the market dynamics using the dashboard's customizable visualization tools, such as stacked bar graphs and complex tables.",
      "Integrated Facebook Graph, Instagram Graph, and Google Analytics Data API and automated data collection with Python Selenium to efficiently gather engagement metrics from 4 different sources.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Researcher Part-Time Intern",
    company: "Inosport (startup)",
    dates: "Jun 2024 - Aug 2024",
    bullets: [
      "Integrated a new AI feature in their Rehab Exercise machine by experimenting with and developing various AI models in TensorFlow and PyTorch, including gradient-boosted trees, neural networks, and decision trees",
      "Achieved over 88% accuracy in predicting changes in patient-exerted force on the exercise machine, enabling more personalized physical therapy programs tailored to patients' strength and movement capabilities in various positions",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Massachusetts Institute of Technology (D-Lab)",
    dates: "Jul 2023 - May 2024",
    bullets: [
      "Created a thermal system simulation application using Python and CSS to analyze steam, chilled water, and electricity data from 50+ MIT buildings to evaluate the impact of the thermal system upgrades in MIT's decarbonization plans",
      "Optimized the user experience of the thermal system analysis tool by incorporating intuitive customization tools, interactive building selection maps, and dynamic graph visualizations, while leveraging the expertise of thermal system specialists",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Fundamentals of Programming Lab Assistant",
    company: "Massachusetts Institute of Technology (EECS Department)",
    dates: "Jan 2024 - May 2024",
    bullets: [
      "Led office hours for 450+ students in developing and debugging complex Python programs, deepening their programming comprehension of topics such as recursion, object-oriented programming, and graph search",
      "Guided students in optimizing algorithms' efficiency and clarity in their programming labs",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Wendyz1116",
  },
  {
    id: 2,
    img: "/email.svg",
    link: "mailto:wendyzhang1116@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/wendy-zhang38/",
  },
];
