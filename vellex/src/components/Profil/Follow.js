import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';

const Follow = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Mes clubs suivis</h1>
      </div>
    </div>
  );
};

export default Follow;
