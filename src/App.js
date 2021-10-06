import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Connexion from './Components/Connexion.js';
import Inscription from './Components/Inscription.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <button><Link to="/inscription">Inscription</Link></button>
        <button><Link to="/connexion">Connexion</Link></button>
        <Route path="/inscription" exact strict>
            <Inscription />
        </Route>
        <Route path="/connexion" exact strict>
          <Connexion />
        </Route>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
