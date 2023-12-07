import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './Connection.css';
import axios from "axios";


const Connection = ({url}) => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("id");
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const handleLogin = () => {
    const loginData = {
      "email": email,
      "password": motDePasse
    }

    axios.post(url+"users/login", loginData, {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json"
      }
  }).then(res =>{
      console.log(res.data.user); 
      localStorage.setItem("token", JSON.stringify(res.data));
      
      navigate("/events/");
    }).catch(error =>{
      setMessage('Auth failure! Please create an account');
    })
  };

  return (
    <div className="pageConnect">
      <div className="imgConnect">
        <img src="/image_ride.png" />
      </div>
      <div className="connect">
        <div className="welcome">
          <h1>Bienvenue</h1>
          <div className="email">
            <label>Email :</label>
            <div className="inputemail">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="password">
            <label>Mot de Passe :</label>
            <div className="inputpassword">
              <input
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
            </div>
          </div>
          <button className="btnConnect" onClick={handleLogin}>
            Se Connecter
          </button>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Connection;
