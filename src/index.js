// Importation de la version client de ReactDOM depuis 'react-dom'
import ReactDOM from 'react-dom/client';

// Importation du composant principal de l'application
import App from './App';

// Importation du composant ModalProvider depuis le contexte modal
import { ModalProvider } from './context/modal-context';

// Importation du composant ThemeProvider depuis le contexte de thème
import { ThemeProvider } from './context/theme-context';

// Importation du fichier de styles principal
import './index.css';

// Création d'une instance de ReactDOM.createRoot pour le rendu
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Rendu de l'application à l'intérieur des fournisseurs de contexte (ThemeProvider et ModalProvider)
root.render(
    <ThemeProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </ThemeProvider>
);
