import React from 'react';
import './ProfilClub.css';
import { Link  } from "react-router-dom";

const SideBarClub = () => {
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
          <li><Link className="elements" to="/profilClub">Le club</Link></li>
          <li><Link className="elements" to="/eventClub">Les évenements</Link></li>
          <li><Link className="elements" to="/membersClub">Les membres</Link></li>
        </ul>
      </div>
      

  );
};

export default SideBarClub;
