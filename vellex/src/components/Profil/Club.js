import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfilePage.css";
import Sidebar from "./SideBar";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import clubImage from "../../assets/images/chevre.jpg";
import Header from "../Header";
import "./ProfilePage.css";
import { Navigate } from "react-router-dom";
const Club = ({ url }) => {
  const [userClub, setUserClub] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const json = localStorage.getItem("token");
  const parsedUserInfo = JSON.parse(json);
  const token = parsedUserInfo.token;
  const userId = parsedUserInfo.user.id;

  const clubCoordinates = {
    latitude: 48.8566,
    longitude: 2.3522,
  };

  const [clubData, setClubData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    address: "",
    description: "",
    website: "",
    postalCode: "",
    ascoNumber: "",
  });

  useEffect(() => {
    const mapContainer = L.DomUtil.get("map");

    axios
      .get(url + "userClubs/user/" + userId, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserClub(res.data);
      })
      .catch((error) => {
        console.log("Auth failure! Please create an account");
      });
    if (userClub && userClub.length > 0) {
      const mapContainer = L.DomUtil.get("map");

      if (mapContainer != null) {
        mapContainer._leaflet_id = null;
      }

      const clubIcon = new L.Icon({
        iconUrl: clubImage,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });

      const mapTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

      const map = L.map("map").setView(
        [clubCoordinates.latitude, clubCoordinates.longitude],
        15
      );

      L.tileLayer(mapTiles, {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      L.marker([clubCoordinates.latitude, clubCoordinates.longitude], {
        icon: clubIcon,
      }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [url]);
  console.log(userClub);

  const handleSaveClub = () => {
    axios
      .post(url + "clubs", clubData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log("Club enregistré avec succès !", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement du club", error);
      });
  };

  function navigateAddEvent() {
    Navigate("/addEvent");
  }
  return (
    <div>
      <Header />
      <div className="profile-container">
        <Sidebar />
        <div className="content" style={{ color: "#225B7C" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={clubImage}
                alt="Club"
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
              />
              <h2>{userClub[0].name}</h2>
            </div>
            <button
              style={{
                color: "#CBFACF",
                backgroundColor: "#00997B",
                border: "none",
                borderRadius: "6px",
              }}
              onClick={navigateAddEvent}
            >
              Créer événement
            </button>
          </div>

            <div style={{ display: 'flex', marginTop: '20px' }}>
              <div style={{ flex: 1 }}>
                <h3>Coordonnées du Club</h3>
                <p>Adresse : {userClub[0].address}</p>
                <p>Ville : {userClub[0].postalCode} {userClub[0].city}</p>
                <p>Site Web : {userClub[0].website}</p>
              </div>

              <div style={{ flex: 1 }}>
                <h3>Localisation</h3>
                <div
                  id="map"
                  style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}
                ></div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <h3>Description du Club</h3>
              <p>
                {userClub[0].description}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button style={{color:'#CBFACF', backgroundColor:'#00997B', border:'none', borderRadius:'6px'}}>Mettre à jour</button>
            </div>
        
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                color: "#CBFACF",
                backgroundColor: "#00997B",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Mettre à jour
            </button>
          </div>
        </div>
      </div>
  );
};

export default Club;
