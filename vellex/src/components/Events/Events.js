import Event from "./Event";
import styles from "./Events.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header";

function Events({ url }) {
  const [eventData, setEventData] = useState(null);

  const json = localStorage.getItem("token");
  const parsedUserInfo = JSON.parse(json);
  const token = parsedUserInfo.token;

  useEffect(() => {
    const apiUrl = `${url}events`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setEventData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, [url]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className="text-center p-3" style={{ color: "#225B7C" }}>
          Retrouvez tous les événements
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
            placeholder="Nom de l'évenement"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Lieu"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Catégories"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Date"
          ></input>
        </div>
        <div className="text-center">
          <button className={styles.search}> Recherchez </button>
        </div>
        <div className="content">
          <div className="title mt-3"></div>
          <div>
            <div className={styles.grid}>
              {eventData
                ? eventData.map((ev) => (
                    <Event
                      key={ev.id}
                      id={ev.id}
                      name={ev.name}
                      eventType={ev.eventType}
                      startDate={ev.startDate}
                      endDate={ev.endDate}
                      address={ev.address}
                      city={ev.city}
                      country={ev.country}
                      description={ev.description}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
