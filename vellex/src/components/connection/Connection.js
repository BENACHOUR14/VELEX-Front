import React, { useState } from 'react';
import './Connection.css';

const users = {
  "utilisateurs": [
    {
        "nom": "Doe",
        "prenom": "John",
        "email": "john.doe@example.com",
        "mot_de_passe": "motdepasse123"
      },
      {
        "nom": "Smith",
        "prenom": "Alice",
        "email": "alice.smith@example.com",
        "mot_de_passe": "password456"
      },
      {
        "nom": "Johnson",
        "prenom": "Bob",
        "email": "bob.johnson@example.com",
        "mot_de_passe": "securepass789"
      }
  ]
};

const Connection = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const utilisateur = users.utilisateurs.find(user => user.email === email && user.mot_de_passe === motDePasse);

    if (utilisateur) {
      setMessage(`Bienvenue, ${utilisateur.prenom} ${utilisateur.nom} !`);
    } else {
      setMessage('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <div className="App">
      <h1>Page de Connexion</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Mot de Passe:</label>
        <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Se Connecter</button>
      <p>{message}</p>
    </div>
  );
}

export default Connection;
