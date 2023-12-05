import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Mes coordonnées</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
