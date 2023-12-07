import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import styles from "./DetailEvent.module.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import mapicon from '../../assets/images/map.png'

function DetailEvent({url}) {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const json = localStorage.getItem("token");
  const parsedUserInfo = JSON.parse(json);
  const token = parsedUserInfo.token;

  console.log(id)
  useEffect(() => {
    axios.get(url+'events/'+id, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        'Authorization': 'Bearer ' + token
      }
    }).then((response) => {
      setEvent(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du club", error);
      });
  }, [url]);


  /*const location = useLocation();
  const { name, eventType, description, startDate, address, city, country } =
    location.state;
  // console.log(location.state);
  // const { name, eventType, description } = location.state;
  console.log(startDate);*/


  const clubCoordinates = {
    latitude: 48.8566,
    longitude: 2.3522,
  };
  useEffect(() => {
    const mapContainer = L.DomUtil.get('map');

      if (mapContainer != null) {
        mapContainer._leaflet_id = null;
      }
  
      const clubIcon = new L.Icon({
        iconUrl: mapicon,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });
  
      const mapTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  
      const map = L.map('map').setView([clubCoordinates.latitude, clubCoordinates.longitude], 15);
  
      L.tileLayer(mapTiles, {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
  
      L.marker([clubCoordinates.latitude, clubCoordinates.longitude], { icon: clubIcon }).addTo(map);
  
       return () => {
        map.remove();
      };
  })

  function formatDate(date) {
    const originalDate = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={`pt-5 ${styles.eventdescription}`}>
          <div className={styles.event}>
            <div className={styles.title}>
              <h1>{event.name}</h1>
              <button className={styles.button}>S'inscrire</button>
            </div>
            <div className="eventType">
              <h3>Type de l'évenement </h3>
              <p>
                <strong>{event.eventType}</strong>
              </p>
            </div>
            <div className="eventInfo">
              <h3>Informations : </h3>
              <p>
                <strong>{event.description}</strong>
              </p>
            </div>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.test}>
              <h3>Quand</h3>
              <p>
                <strong>{formatDate(event.startDate)}</strong>
              </p>
            </div>

            <div className={styles.test}>
              <h3>Où</h3>
              <p>
                <strong>
                  Velo Club
                  <br />
                  {event.address}
                  <br />
                  {event.city} <br />
                  {event.country} <br />
                </strong>
              </p>
            </div>
            <div
              id="map"
              style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailEvent;
