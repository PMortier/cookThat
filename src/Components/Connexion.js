import React, { useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

function Connexion() {
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

      console.log(userCredential.user)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div>
      <Link to="/"><FontAwesome name="times"/></Link>
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
  )
}

export default Connexion;


