import React, { useEffect, useState } from 'react';
import axios from "axios";
import './ProfilePage.css';
import Sidebar from './SideBar';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import clubImage from '../../assets/images/chevre.jpg';
import Header from '../Header';
import './ProfilePage.css';
const Club = ({url}) => {
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
    name: '',
    phoneNumber: '',
    city: '',
    address: '',
    description: '',
    website: '',
    postalCode: '',
    ascoNumber: '',
  });

  useEffect(() => {
    monClub();
    
  }, [url]);
  
  function monClub(){
    axios.get(url+'userClubs/user/'+userId, {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          'Authorization': 'Bearer ' + token
      }
    }).then(res =>{
      console.log(res.data); 
      setUserClub(res.data)
    }).catch(error =>{
      console.log('Auth failure! Please create an account');
    })
    if(userClub && userClub.length > 0 ){
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
    }
  }

  const handleSaveClub = () => {
    axios.post(url+'clubs', clubData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        'Authorization': 'Bearer ' + token
      }
    }).then((response) => {
        monClub();
        console.log('Club enregistré avec succès !', response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du club', error);
      });
  };


  return (
    <div>
    <Header />
    <div className="profile-container">
      <Sidebar />
      <div className="content" style={{ color: '#225B7C' }}>
        {userClub && userClub.length > 0 ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src={clubImage} alt="Club" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                <h2>Nom du Club</h2>
              </div>
              <button style={{color:'#CBFACF', backgroundColor:'#00997B', border:'none', borderRadius:'6px'}}>Créer événement</button>
            </div>

            <div style={{ display: 'flex', marginTop: '20px' }}>
              <div style={{ flex: 1 }}>
                <h3>Coordonnées du Club</h3>
                <p>Adresse: 123 Rue du Club</p>
                <p>Ville: Ville Club</p>
                <p>Téléphone: 123-456-7890</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus aliquet,
                turpis et cursus aliquet, sem augue pharetra libero, in facilisis odio felis eu elit.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button style={{color:'#CBFACF', backgroundColor:'#00997B', border:'none', borderRadius:'6px'}}>Mettre à jour</button>
            </div>
        
          </div>
      
        ) : (
          <div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  
                  <h2>Vous êtes présidents d'un club ?</h2>
                </div>
                <button style={{color:'#CBFACF', backgroundColor:'#00997B', border:'none', borderRadius:'6px', marginLeft: '10%'}} onClick={() => setShowForm(true)}>Enregistrer mon club</button>
            </div>
            {showForm && (
                <div>
                <div style={{ maxWidth: '600px', margin: 'auto', color: '#225B7C' }}>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                        <input 
                          className='formClub' 
                          style={{ color: '#225B7C', width: '100%' }} 
                          type="text" 
                          id="name" 
                          name="name" 
                          placeholder='Nom du Club' 
                          value={clubData.name}
                          onChange={(e) => setClubData({ ...clubData, name: e.target.value })}
                        />
                      </div>
                      <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                        <input 
                          className='formClub' 
                          style={{ color: '#225B7C', width: '100%' }} 
                          type="text" 
                          id="ascoNumber" 
                          name="ascoNumber" 
                          placeholder='N°association' 
                          value={clubData.ascoNumber}
                          onChange={(e) => setClubData({ ...clubData, ascoNumber: e.target.value })}
                        />
                      </div>
                    </div>
                    <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                      <input 
                        className='formClub' 
                        style={{ color: '#225B7C', width: '100%' }} 
                        type="text" 
                        id="website" 
                        name="website" 
                        placeholder='Site Web'
                        value={clubData.website}
                        onChange={(e) => setClubData({ ...clubData, website: e.target.value })}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                        <input 
                          className='formClub' 
                          style={{ color: '#225B7C', width: '100%' }} 
                          type="text" 
                          id="city" 
                          name="city" 
                          placeholder='Ville' 
                          value={clubData.city}
                          onChange={(e) => setClubData({ ...clubData, city: e.target.value })}
                        />
                      </div>
                      <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                        <input 
                          className='formClub' 
                          style={{ color: '#225B7C', width: '100%' }} 
                          type="text" 
                          id="postalCode" 
                          name="postalCode" 
                          placeholder='Code postal'
                          value={clubData.postalCode}
                          onChange={(e) => setClubData({ ...clubData, postalCode: e.target.value })}
                        />
                      </div>
                    </div>
                    <div style={{ flex: 1, border: '2px solid #225B7C', borderRadius: '6px', padding: '1px' }}>
                      <input 
                        className='formClub' 
                        style={{ color: '#225B7C', width: '100%' }} 
                        type="text" 
                        id="address" 
                        name="address"
                        placeholder='Adresse'
                        value={clubData.address}
                        onChange={(e) => setClubData({ ...clubData, address: e.target.value })}
                      />
                    </div>
  
                    <textarea 
                      id="description" 
                      name="description" 
                      placeholder='Description' 
                      style={{ border: '2px solid #225B7C', borderRadius: '6px', padding: '1px', color: '#225B7C' }}
                      value={clubData.description}
                      onChange={(e) => setClubData({ ...clubData, description: e.target.value })}
                    />
  
                    <button
                      type="button"
                      style={{ color: '#CBFACF', backgroundColor: '#00997B', border: 'none', borderRadius: '6px' }}
                      onClick={handleSaveClub}
                    >
                      Enregistrer
                    </button>
                  </form>
                </div>
              </div>
              )}
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Club;
