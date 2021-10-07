import React, { useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Connexion({user, setUser, setModalConnexionOpen, modalConnexionOpen, setModalInscriptionOpen}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const send = async ev => {
    ev.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      setUser(userCredential.user)
      setModalConnexionOpen(false)
    } catch (e) {
      setError(e.message)
    }
  }
  
  return (
    <Modal
        isOpen={modalConnexionOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>setModalConnexionOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        > 
    <div>
      <button onClick={()=>setModalConnexionOpen(false)}><FontAwesome name="times"/></button>
      <h1>Connexion</h1>
      <form onSubmit={send}>
        <div>
          <label htmlFor="email">Votre email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Votre mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <div>
          <button type="submit">Connexion</button>
        </div>
      </form>
      <Link to="/inscription" onClick={()=>{
        setModalConnexionOpen(false)
        setModalInscriptionOpen(true)
        }}>Créer un compte</Link>
    </div>
    </Modal>
  )
}

export default Connexion;


