import Image1 from '../../assets/My-Booking.jpg'
import Image2 from '../../assets/Amazon.jpg'
import Image3 from '../../assets/GoodFood_FrontEnd.png'
import Image5 from '../../assets/Sefar.png'
import Image6 from '../../assets/SchoolApp.jpg'
import Image7 from '../../assets/Portfolio.png'
import Image8 from '../../assets/gabarit-restau.JPG'
import Image9 from '../../assets/Java.png'
import Image10 from '../../assets/Scraping Python.jpg'





const data = [
    {
        id: 1,
        category: 'Full Stack',
        image: Image1,
        title: "React Booking System",
        desc: `Created a user-friendly React interface for hotel booking, ensuring an intuitive reservation experience.
        • Developed a robust Node.js API for efficient data and reservation management.
        • Implemented MongoDB database to store comprehensive hotel information, enhancing platform functionality.`,
        github: 'https://github.com/Yanis312/Booking_Mern'
    },
    {
        id: 2,
        category: 'Full Stack',
        image: Image2,
        title: "Developing Amazon Clone",
        desc: `Created an Amazon-style e-commerce site using Vue.js and Node.js, focusing on a user-friendly design for easy navigation.
        Built a comprehensive e-commerce platform featuring product browsing, cart management, and secure checkout, mirroring Amazon's functionality.
        Ensured end-to-end functionality, covering user interactions, cart management, secure payments, and deployment on AWS with image storage using S3.`,
        github: 'https://github.com/Yanis312/Amazon-Clone'
      },
      
    {
        id: 3,
        category: 'Frontend',
        image: Image3,
        title: "Good Food Front End",
        desc: `Designed and developed a user-friendly website for a restaurant,providing seamless navigation and an engaging interface.
        • Implemented a comprehensive online system allowing customers to effortlessly reserve tables for dining and place orders for both
        dine-in and takeout.
        • Incorporated e-commerce features and a variety of third-party APIs to enable customers to browse the menu, select items, and
        securely purchase meals online for delivery or pickup.`,
       github: 'https://github.com/Yanis312/good-Food2'
    },
    {
        id: 4,
        category: 'Full Stack',
        image: Image5,
        title: "Sefar Restaurant",
        desc: `Designed and developed a user-friendly website for a restaurant,providing seamless navigation and an engaging interface.
        • Implemented a comprehensive online system allowing customers to effortlessly reserve tables for dining and place orders for both
        dine-in and takeout.
        • Incorporated e-commerce features and a variety of third-party APIs to enable customers to browse the menu, select items, and
        securely purchase meals online for delivery or pickup.`,
       github: 'https://github.com/Yanis312/Sefar-Restaurant'
    },
    {
        id: 5,
        category: 'Udemy',
        image: Image9,
        title: "Java Master Class",
        desc: `Develop a solid understanding of the Java language through a comprehensive training including 45 practical exercises with solutions.
        Benefit from an effective pedagogical progression to master the basics of object-oriented programming, operators, variables, and control structures.
        Explore advanced concepts such as inheritance, interfacing, polymorphism, and the latest features of recent Java versions.
        Learn from a professional with nearly 20 years of experience in Java and Javascript development.
        Earn a Udemy certificate upon completion of the entire course.`,
        Udemy: 'https://www.udemy.com/course/cours-complet-de-programmation-java-pour-debutants/?couponCode=24T3FS41524'
    },
    {
        id: 6,
        category: 'Backend',
        image: Image3,
        title: "Good Food Back End",
        desc: `Designed and developed a user-friendly website for a restaurant,providing seamless navigation and an engaging interface.
        • Implemented a comprehensive online system allowing customers to effortlessly reserve tables for dining and place orders for both
        dine-in and takeout.
        • Incorporated e-commerce features and a variety of third-party APIs to enable customers to browse the menu, select items, and
        securely purchase meals online for delivery or pickup.`,
       github: 'https://github.com/Yanis312/good-Food1'
    },
   
    {
        id: 7,
        category: 'UI/UX',
        image: Image6,
        title: "College Management Desktop Application :",
        desc: `• Created a desktop application using C# and Visual Studio Community for efficient college management.
        • Developed a search functionality to explore and retrieve details of all available programs offered by the college.
        • Implemented features for accessing and managing lists of students, providing a centralized platform for streamlined administration`,
        github: 'https://github.com/Yanis312/schoolApp'
    },
    {
        id: 8,
        category: 'Frontend',
        image: Image7,
        title: "Yanis's Responsive Modern Portfolio",
        desc: `• Advanced React Features: Utilized Context API, React Portals, and Re-Usable Components for a modular codebase.
        • Personalization and Interaction:I ncorporated persistent Theme Customization to local storage, SwiperJS carousel/slides, and
        Filtering for an interactive experience.
        • CSS Proficiency: Applied CSS3 Variables, Flexbox, Grid System, and Media Queries for responsive design.
        • User Interface Enhancement: Designed an elegant Floating Navbar to elevate the user interface.`,
        github: 'https://github.com/Yanis312/portfolio'
    },
    {
        id: 9,
        category: 'Backend',
        image: Image8,
        title: "Gabarit Serveur Restaurant",
        desc: "Developed a streamlined server-side restaurant template with comprehensive GET, PUT, DELETE, and POST routes for seamless hybrid functionality.",
        github: 'https://github.com/Yanis312/Gabarit-Restaurant'
    },
    
   
    {
        id: 10,
        category: 'Youtube',
        image: Image10,
        title: "Python Web Scraping",
        desc: `Start your web scraping journey with essential concepts and tools like requests and BeautifulSoup.
        Overcome obstacles posed by anti-scraping mechanisms and navigate the legal landscape.
        Dive into advanced techniques and build projects capable of scraping any website`,
        Udemy: 'https://www.youtube.com/watch?v=HCV6nEACQo4&t=1657s'
    },
]


export default data