import React, { useState, useEffect } from 'react'
import '../App.css'
import { auth } from '../firebase'
import {signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from 'firebase/auth'
import { Link, Redirect } from 'react-router-dom';
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


function Connexion({user, setUser, setModalOpen, modalOpen}) {
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
      setModalOpen(false)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(()=>{
    if(null !== user) {
    setPersistence(auth, browserSessionPersistence)
    .then(() => {

    })
    .catch((error) => {
      return (error.message);
    })
      return <Redirect to="/dernieresrecettes"></Redirect>
    }
  },[])
  
  
  return (
    <Modal
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>setModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        > 
    <div>
      <button onClick={()=>setModalOpen(false)}><FontAwesome name="times"/></button>
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
      <Link to="/inscription">Créer un compte</Link>
    </div>
    </Modal>
  )
}

export default Connexion;


