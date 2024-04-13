// Importation du composant Logo depuis le chemin relatif '../../assets/logo.jpg'
import Logo from '../../assets/logo.jpg';

// Importation des données pour le menu de la navbar depuis './data'
import data from './data';

// Importation de l'icône IoIosColorPalette depuis 'react-icons/io'
import { IoIosColorPalette } from 'react-icons/io';

// Importation du hook personnalisé pour accéder au contexte modal
import { useModalContext } from '../../context/modal-context';

// Importation du fichier de styles CSS pour la navbar
import './navbar.css';

// Définition du composant Navbar
const Navbar = () => {
  // Utilisation du hook personnalisé pour obtenir la fonction showModalHandler du contexte modal
  const { showModalHandler } = useModalContext();

  // Rendu du composant Navbar
  return (
    <nav>
      {/* Conteneur pour la navbar */}
      <div className="container nav__container">
        {/* Logo de la navbar avec un lien vers la page d'accueil */}
        <a href="index.html" className='nav__logo'>
          {/* Image du logo importée */}
          <img src={Logo} alt="Logo" />
        </a>
        {/* Liste du menu de la navbar */}
        <ul className='nav__menu'>
          {/* Mapping des données pour créer les éléments de la liste du menu */}
          {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
        </ul>
        {/* Bouton pour afficher le modal de changement de thème */}
        <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette /></button>
      </div>
    </nav>
  );
}

// Exportation du composant Navbar
export default Navbar;
