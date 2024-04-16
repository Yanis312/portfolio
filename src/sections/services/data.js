import {  SiJavascript, SiPython, SiVisualstudio } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaApple, FaAws, FaDatabase, FaGitSquare, FaJava, FaVuejs } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const data = [
  {
    id: 1,
    icon: <SiJavascript />,
    title: 'JavaScript Development',
    desc: "Expert in JavaScript with experience in frameworks and libraries like React, Next.js, Nuxt.js and Node.js,. Proficient in utilizing JWT and Context API for state management and authentication, ensuring interactive and secure web applications.",
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
    title: 'Python Analytics & Web Scraping',
    desc: "Proficient in Python, utilizing libraries such as Pandas and Numpy for data analysis and manipulation. Experienced in creating insightful visualizations with PowerBI to drive business decisions. Also skilled in web scraping using libraries like BeautifulSoup and Scrapy to gather and analyze data efficiently.",
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
  {
    id: 9,
    icon: [<IoLogoJavascript />, <AiFillAppstore />],
    title: 'Scrum and Agile Methodologies',
    desc: "Familiar with Scrum and Agile methodologies, enabling effective collaboration in team environments and adaptability to changing project requirements.",

  },
  {
    id: 10,
    icon: <LiaLaptopCodeSolid />,
    title: 'C# Desktop Application Development',
    desc: "Created a desktop application using C# and Visual Studio Community for efficient college management. Developed a search functionality to explore and retrieve details of all available programs offered by the college. Implemented features for accessing and managing lists of students, providing a centralized platform for streamlined administration.",
  },
  {
    id: 11,
    icon: <FaApple />,
    title: 'iOS App Development',
    desc: "Proficient in iOS app development using Swift and Xcode. Experienced in building engaging and user-friendly applications for the iOS platform, adhering to Apple's design guidelines and best practices."
  },
  {
    id: 12,
    icon: <IoLogoAndroid />,
    title: 'Android App Development',
    desc: "Skilled in Android app development using Java and Android Studio. Capable of creating dynamic and intuitive applications for Android devices, ensuring compatibility across various screen sizes and versions."
  },
]


export default data;
