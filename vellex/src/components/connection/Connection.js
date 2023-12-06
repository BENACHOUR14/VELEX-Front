import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Connection.module.css";

const users = {
  utilisateurs: [
    {
      id: 1,
      nom: "Doe",
      prenom: "John",
      email: "john.doe@example.com",
      mot_de_passe: "motdepasse123",
    },
    {
      id: 2,
      nom: "Smith",
      prenom: "Alice",
      email: "alice.smith@example.com",
      mot_de_passe: "password456",
    },
    {
      id: 3,
      nom: "Johnson",
      prenom: "Bob",
      email: "bob.johnson@example.com",
      mot_de_passe: "securepass789",
    },
  ],
};

const Connection = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("id");
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const handleLogin = () => {
    const utilisateur = users.utilisateurs.find(
      (user) => user.email === email && user.mot_de_passe === motDePasse
    );

    if (utilisateur) {
      localStorage.setItem("id", utilisateur.id);
      navigate("/events/");
    } else {
      setMessage("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className={styles.pageConnect}>
      <div className={styles.imgConnect}>
        <img src="/image_ride.png" />
      </div>
      <div className={styles.connect}>
        <div className={styles.welcome}>
          <h1>Bienvenue</h1>
          <div className={styles.email}>
            <label>Email :</label>
            <div className={styles.inputemail}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.password}>
            <label>Mot de Passe :</label>
            <div className={styles.inputpassword}>
              <input
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
            </div>
          </div>
          <button className={styles.btnConnect} onClick={handleLogin}>
            Se Connecter
          </button>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Connection;
