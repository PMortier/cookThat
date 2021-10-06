import React, { useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { Link, Route } from 'react-router-dom';

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
    <form onSubmit={send}>
      <h1>Connexion</h1>
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
      <Link to="/inscription">Créer un compte</Link>
    </form>
  )
}

export default Connexion;


