import React, { useState } from 'react'
import '../App.css'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Inscription() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const send = async ev => {
    ev.preventDefault()

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    console.log(userCredential.user)
  }

  return (
    <form onSubmit={send}>
      <h1>Inscription</h1>
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
      <div>
        <button type="submit">Inscription</button>
      </div>
    </form>
  )
}

export default Inscription;