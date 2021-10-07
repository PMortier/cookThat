import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Connexion from './Components/Connexion.js';
import Inscription from './Components/Inscription.js';
import Navbar from './Components/Navbar.js'
import DernieresRecettes from './Components/DernieresRecettes.js'
import AjoutRecette from './Components/AjoutRecette.js'
import Profil from './Components/Profil.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <button><Link to="/inscription">Inscription</Link></button>
        <button><Link to="/connexion">Connexion</Link></button>
        <Route path="/inscription" exact strict><Inscription /></Route>
        <Route path="/connexion" exact strict><Connexion /></Route>
        <Route path="/dernieresrecettes" exact strict><DernieresRecettes /></Route>
        <Route path="/ajoutrecette" exact strict><AjoutRecette /></Route>
        <Route path="/profil" exact strict><Profil /></Route>
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
