import React from 'react';
import './ProfilePage.css';
import { Link  } from "react-router-dom";

const SideBar = () => {
  return (
      <div className="sidebar">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src="chevre.jpg"
            alt="Profile"
          />
        </div>
        <ul className="sidebar-list">
          <li><Link className="elements" to="/futur">Mes évenement future</Link></li>
          <li><Link className="elements" to="/past">Mes évenement réaliser</Link></li>
          <li><Link className="elements" to="/club">Mon club</Link></li>
          <li><Link className="elements" to="/follow">Mes clubs suivis</Link></li>
          <li><Link className="elements" to="/profil">Mes coordonnées</Link></li>
        </ul>
      </div>
      

  );
};

export default SideBar;
