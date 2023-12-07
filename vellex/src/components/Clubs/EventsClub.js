import React from 'react';
import './ProfilClub.css';
import Sidebar from './SideBarClub';
import Header from '../Header';
const EventsClub = () => {
  return (
    <><Header />
    <div className="profile-container">
      <Sidebar />
      <div className="content">
        <h1>Les événements</h1>
      </div>
    </div>
    </>
  );
};

export default EventsClub;
