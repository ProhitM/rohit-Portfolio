// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's


// Education Section Logo's
import itmLogo from './assets/education_logo/itm.png';
import svmLogo from './assets/education_logo/svm.png';
import schoolLogo from './assets/education_logo/school.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/gitlogimage.png';
import weatherLogo from './assets/work_logo/weather.png';
import todoLogo from './assets/work_logo/Todo snapshot.png';
import realestatLogo from './assets/work_logo/realestat.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      // img: ,
      role: "Frontend Developer",
      company: "SageNext",
      date: "April 2023 - 24",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: itmLogo,
      school: "Institute of Technology And Management, Gorakhpur",
      date: "Sept 2019 - July 2023",
      Percentage: "66.6%",
      desc: "I completed my Bachelor's degree in Information Technology (B.Tech) from Institute of Technology And Management, Gorakhpur(ITM, Gorakhapur) . Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring OOPs to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at ITM College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "B tech in Information Technology",
    },
    {
      id: 1,
      img: schoolLogo,
      school: " S N Singh Inter college,UJarauti Kala,Sant Kabir Nagar",
      date: "Aug 2017 - May 2018",
      grade: "79.9%",
      desc: "I completed my class 12th from S N Singh Inter college,UJarauti Kala,Sant Kabir Nagar, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Intermediate - PCM",
    },
    {
      id: 3,
      img: svmLogo,
      school: " K L R Sarswati Vidya Mandir,Khalilabad,Sant Kabir Nagar",
      date: "Aug 2015 - May 2016",
      grade: "83%",
       desc: "I completed my class 10th from K L R Sarswati Vidya Mandir,Khalilabad,Sant Kabir Nagar, under the CBSE board, where I studied Science with Computer.",
      degree: "High School, Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Search",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats,repositories,followers, and contributions.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/ProhitM/GitHub-Profile-Search.git",
       // webapp: ,
      
    },
    {
      id: 1,
      title: "Weather APP",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: weatherLogo,
      tags: ["Node.js","Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ProhitM/GitHub-Profile-Search.git",
      // webapp: ,
    },
    {
      id: 2,
      title: "X.com(Twitter UI Clone)",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      // image: ,
      tags: ["React JS", "TailwindCSS", "JavaScript"],
      github: "https://github.com/ProhitM/x.com-twiiter-/tree/main",
      // webapp: "",
    },
    {
      id: 3,
      title: "iTask-Management Todo App",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: todoLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/ProhitM/todo-list",
      // webapp: "",
    },
    {
      id: 4,
      title: "Real Estate Application",
      description:
        "Built a responsive real estate platform using React.js and Vite, featuring animated UI (Framer Motion), image sliders (Swiper.js), accessible accordions, and dynamic counters. Designed for scalability, responsiveness, and modern user experience",
      image: realestatLogo,
      tags: ["Reactjs","TailwindCSS","JavaScript", "CSS"],
      github: "https://github.com/ProhitM",
      // webapp: "",
    },
  ];  