import { SiAdobexd, SiJavascript, SiPython, SiVisualstudio } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaAws, FaDatabase, FaGitSquare, FaJava, FaServer, FaVuejs } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { IoLogoJavascript } from "react-icons/io";

const data = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: 'JavaScript Development',
    desc: "Expert in JavaScript with experience in frameworks and libraries like React and Node.js. Proficient in utilizing JWT and Context API for state management and authentication, ensuring interactive and secure web applications.",
  },
  {
    id: 2,
    icon: <FaJava />,
    title: 'Java Development',
    desc: "Skilled in Java programming, focusing on Object-Oriented Programming (OOP) principles. Experienced with the integration of SQL databases, enhancing application performance and scalability.",
  },
  {
    id: 3,
    icon: <SiPython />,
    title: 'Python Analytics',
    desc: "Proficient in Python, utilizing libraries such as Pandas and Numpy for data analysis and manipulation. Experienced in creating insightful visualizations with PowerBI to drive business decisions.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: 'Database Management',
    desc: "Strong background in managing databases using MySQL, MongoDB, and SQL. Capable of designing robust database architectures and performing complex queries to support large-scale applications.",
  },
  
  {
    id: 5,
    icon: [<FaVuejs />, <FaAws />],
    title: 'Vue.js & Node.js E-Commerce Project',
    desc: "Developed an Amazon-style e-commerce site focusing on a user-friendly design on Udemy. Implemented a full online shopping system including cart management and secure payment features. Successfully deployed on AWS using S3 for robust image storage capabilities.",
  },
  {
    id: 6,
    icon: <RiReactjsLine />,
    title: 'Frontend Engineering',
    desc: "Advanced skills in frontend development with React. Capable of creating responsive and visually appealing interfaces that provide excellent user experience across all devices.",
  },
  {
    id: 7,
    icon: <FaGitSquare />,
    title: 'Version Control',
    desc: "Proficient in Git for version control, ensuring smooth workflow in development teams and safe storage of all versions of project code.",
  },
  {
    id: 8,
    icon: <SiVisualstudio />,
    title: 'Software Development',
    desc: "Skilled in using Visual Studio IDE to develop, test, and deploy software applications. Familiar with debugging tools and integrated development environments to enhance coding efficiency.",
  },
]


export default data;
