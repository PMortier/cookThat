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
import Bienvenue from './Components/Bienvenue.js'

function App() {
  const [modalConnexionOpen, setModalConnexionOpen] = useState(false)
  const [modalInscriptionOpen, setModalInscriptionOpen] = useState(false)
  const [modalBienvenueOpen, setModalBienvenueOpen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <div className="App">
        <Deconnexion setUser={setUser}/>
        <Route path="/" exact strict><DernieresRecettes /></Route>
        <Route path="/ajoutrecette" exact strict><AjoutRecette user={user}/></Route>
        <Route path="/profil" exact strict><Profil user={user}/></Route>
        
        <Connexion user={user} setUser={setUser} setModalConnexionOpen={setModalConnexionOpen} modalConnexionOpen={modalConnexionOpen} setModalInscriptionOpen={setModalInscriptionOpen}/>

        <Inscription user={user} setUser={setUser} setModalInscriptionOpen={setModalInscriptionOpen} modalInscriptionOpen={modalInscriptionOpen} />

        {/* <Bienvenue user={user} setModalBienvenueOpen={setModalBienvenueOpen} modalBienvenueOpen={modalBienvenueOpen} /> */}

        <Navbar user={user} setModalConnexionOpen={setModalConnexionOpen}></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
