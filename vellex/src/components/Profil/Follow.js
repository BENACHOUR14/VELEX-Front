import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';
import Header from '../Header';

const Follow = () => {
  return (
    <><Header />
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Mes clubs suivis</h1>
      </div>
    </div>
    </>
  );
};

export default Follow;
