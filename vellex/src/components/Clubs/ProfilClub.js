import React from 'react';
import './ProfilClub.css';
import Sidebar from './SideBarClub';

const ProfileClub = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Le club</h1>
      </div>
    </div>
  );
};

export default ProfileClub;
