import React, { useEffect, useState } from 'react';
import styles from "./Clubs.module.css";
import Club from "./Club";
import axios from "axios";
import Header from "../Header";
function Clubs({url}) {
  const [clubs, setClubs] = useState([]);

  const json = localStorage.getItem("token");
  const parsedUserInfo = JSON.parse(json);
  const token = parsedUserInfo.token;

  useEffect(() => {
    axios
      .get(url+'clubs', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          'Authorization': 'Bearer ' + token
        }
      }) 
      .then((response) => {
        setClubs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des clubs", error);
      });
  }, [url]);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className="text-center p-3" style={{ color: "#225B7C" }}>
          Retrouvez tous les clubs
        </h2>
        <hr
          // la couleur à changer !!
          style={{
            border: "5px solid #225B7C",
            width: "250px",
            margin: "auto",
          }}
        />
        <div className={styles.inputs}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nom du club"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Lieu"
          ></input>
          <button className={styles.search}> Recherchez </button>
        </div>
        <div className="content">
          <div className="title mt-3"></div>
          <div>
            <div className={styles.grid}>
            {clubs.map((club) => (
              <Club key={club.id} club={club} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clubs;
