import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';
import Event from "../Events/Event";

const Futur = () => {
  return (
    <div className="profile-container">
      <Sidebar />
        <div>
            <div className="content">
                <h1>Mes événements future</h1>
            </div>
            <div className='futurEvent'>
                <Event />
                <Event />
            </div>
        </div>
    </div>
  );
};

export default Futur;
