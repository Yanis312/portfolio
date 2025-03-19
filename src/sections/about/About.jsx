import React from 'react';
import './about.css';
import CV from '../../assets/Yanis_Garoui_Software_Web_Developer.pdf';
import AboutImage from '../../assets/about.jpg';
import { FcDownload } from 'react-icons/fc';
//import data from './data';


const About = () => {
  const handleCVClick = (e) => {
    e.preventDefault();
    alert("Le CV n'est pas disponible pour le moment. Veuillez me contacter par email à yanisgaroui1@gmail.com");
  };

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
          <p>
            As a junior software developer,, I'm excited to start my journey in
            computer development. Even though I'm new to the field, I have a good grasp of the basics and I'm
            eager to learn more.
          </p>
          <p>
            I'm really interested in technology and I'm determined to keep learning and
            growing. Additionally, I'm considering exploring opportunities in data analysis as well.
          </p>

          {/* Bouton simulé comme désactivé */}
          <button 
            onClick={handleCVClick}
            style={{
              backgroundColor: '#ccc', // Couleur de fond gris clair
              color: '#666', // Couleur de texte gris foncé
              padding: '10px 20px', // Espacement interne
              border: 'none', // Pas de bordure
              borderRadius: '5px', // Bords arrondis
              cursor: 'not-allowed', // Curseur désactivé
              display: 'flex', // Affichage en ligne avec icône
              alignItems: 'center',
              gap: '10px',
              fontSize: '16px',
              opacity: '0.7' // Effet visuel de désactivation
            }}
          >
            Download CV <FcDownload />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
