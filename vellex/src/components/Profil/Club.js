import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';

const Club = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Mon club</h1>
      </div>
    </div>
  );
};

export default Club;
