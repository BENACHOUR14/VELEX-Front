import React from 'react';
import './ProfilClub.css';
import Sidebar from './SideBarClub';

const MembersClub = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Les membres</h1>
      </div>
    </div>
  );
};

export default MembersClub;
