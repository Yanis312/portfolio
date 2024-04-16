import React from 'react';
import './about.css';
import CV from '../../assets/cv.pdf';
import AboutImage from '../../assets/about.jpg';
import { FcDownload } from 'react-icons/fc';
//import data from './data';


const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {/*data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))*/}
          </div>
          <p>
            As a junior software developer, I'm excited to start my journey in
            computer development. Even though I'm new to the field, I have a good grasp of the basics and I'm
            eager to learn more.
          </p>
          <p>
          I'm really interested in technology and I'm determined to keep learning and
            growing. Additionally, I'm considering exploring opportunities in data analysis as well.
          </p>
<p></p>

          <a href={CV} download className="btn primary">
            Download CV <FcDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
