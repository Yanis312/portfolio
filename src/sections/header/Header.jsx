import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3  data-aos="fade-up">Yanis Garoui</h3>
        <p> Aspirant ingénieur logiciel et développeur web Full Stack, je me passionne pour la création de solutions innovantes. Ma perspicacité naturelle et ma facilité d'apprentissage me permettent d'aborder avec enthousiasme les défis du développement web. Mes compétences englobent des langages tels que Java, JavaScript, et C#, ainsi que d'autres technologies prêtes à être mises au service de projets captivants. Explorez mon portfolio pour découvrir mes réalisations et témoigner de mon dévouement envers le monde professionnel. J'ai hâte de contribuer à des projets stimulants au sein de votre équipe.

</p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header