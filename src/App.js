import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Connexion from './Components/Connexion.js'
import Inscription from './Components/Inscription.js'
import Deconnexion from './Components/Deconnexion.js'
import Navbar from './Components/Navbar.js'
import DernieresRecettes from './Components/DernieresRecettes.js'
import AjoutRecette from './Components/AjoutRecette.js'
import Profil from './Components/Profil.js'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <div className="App">
        <button><Link to="/inscription">Inscription</Link></button>
        <Deconnexion setUser={setUser}/>
        <Route path="/inscription" exact strict><Inscription /></Route>
        <Route path="/dernieresrecettes" exact strict><DernieresRecettes /></Route>
        <Route path="/ajoutrecette" exact strict><AjoutRecette user={user}/></Route>
        <Route path="/profil" exact strict><Profil user={user}/></Route>
        
        <Connexion user={user} setUser={setUser} setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        
        <Navbar user={user} setModalOpen={setModalOpen}></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
