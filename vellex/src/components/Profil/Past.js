import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';
import Event from "../Events/Event";

const Past = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <div>
            <div className="content">
                <h1>Mes événements passé</h1>
            </div>
            <div className='futurEvent'>
                <Event />
                <Event />
            </div>
        </div>
    </div>
  );
};

export default Past;
