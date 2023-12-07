import React, { useEffect, useState } from 'react';
import axios from "axios";
import './ProfilClub.css';
import Sidebar from './SideBarClub';
import Header from '../Header';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import clubImage from '../../assets/images/chevre.jpg';
import { useParams } from 'react-router-dom';

const ProfileClub = ({url}) => {
  const [club, setClub] = useState([]);
  const json = localStorage.getItem("token");
  const parsedUserInfo = JSON.parse(json);
  const token = parsedUserInfo.token;
  const { id } = useParams();
  console.log('ID du club:', id);

  useEffect(() => {
    axios.get(url+'clubs/'+id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          'Authorization': 'Bearer ' + token
        }
      }) 
      .then((response) => {
        setClub(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du club", error);
      });
  }, [url]);

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
      iconUrl: clubImage,
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
  }, [clubCoordinates]);

  return (
    <><Header />
    <div className="profile-container">
      <Sidebar />
      <div className="content" style={{color:'#225B7C'}}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={clubImage} alt="Club" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h2>{club.name}</h2>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div style={{ flex: 1 }}>
            <h3>Coordonnées du Club</h3>
            <p>Adresse : {club.adress}</p>
            <p>Ville : {club.postalCode} {club.city}</p>
            <p>Site web: {club.website}</p>
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
          {club.description}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileClub;
