import React, { useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Redirect } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal'
import classes from './Inscription.module.css'

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

function Inscription({user, setUser, setModalInscriptionOpen, modalInscriptionOpen}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const send = async ev => {
    ev.preventDefault()

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    setUser(userCredential.user)

  }

  if (null !== user) return <Redirect to="/connexion"></Redirect>

  return (
    <Modal
        isOpen={modalInscriptionOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>setModalInscriptionOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        > 
    <div>
      <button onClick={()=>setModalInscriptionOpen(false)}><FontAwesome name="times"/></button>
      <h1>Inscription</h1>
      <form onSubmit={send}>
        <div className={classes.containerLabelInput}>
          <label htmlFor="email">Votre email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.containerLabelInput}>
          <label htmlFor="password">Votre mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.containerSubmit}>
          <button type="submit" className={classes.submit}>Inscription</button>
        </div>
      </form>
    </div>
    </Modal>
  )
}

export default Inscription;