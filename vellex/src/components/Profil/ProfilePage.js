import React from 'react';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import profilImage from '../../assets/images/chevre.jpg';
import Header from '../Header';
const ProfilePage = ({url}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <><Header />
    <div className="profile-container "  style={{color:'#225B7C'}}>
      <Sidebar />
      
      <div className='container'>
        <div className='hederProfil'>
          <h2 className='title'>Mes coordonées</h2>
          <button
              style={{ color: '#CBFACF', backgroundColor: '#00997B', border: 'none', borderRadius: '6px' }}
              onClick={handleLogout} 
            >
            Déconnexion
          </button>

        </div>
        <div className="centered">
        
          <img src={profilImage} alt="Avatar" className="profilImage" />
        </div>
        <div className="columnsContainer">
          <div className="leftColumn">
            <div className="fieldGroup">
              <label>Nom:</label>
              <input type="text" />
            </div>
            <div className="fieldGroup">
              <label>Prénom:</label>
              <input type="text" />
            </div>
            <div className="fieldGroup">
              <label>Email:</label>
              <input type="email" />
            </div>
          </div>

          <div className="verticalSeparator"></div>

          <div className="rightColumn">
            <div className="fieldGroup">
              <label>Mot de passe actuel:</label>
              <input type="password" />
            </div>
            <div className="fieldGroup">
              <label>Modifier mot de passe:</label>
              <input type="password" />
            </div>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;
