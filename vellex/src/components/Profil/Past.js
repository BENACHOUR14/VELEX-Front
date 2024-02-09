import React from 'react';
import './ProfilePage.css';
import Sidebar from './SideBar';
import Event from "../Events/Event";
import Header from '../Header';
const Past = () => {
  return (
    <>
    <Header />
    <div className="profile-container">
      <Sidebar />
      <div>
            <div className="content">
                <h1>Mes événements passé</h1>
            </div>
            <div className='futurEvent'>
                
                
            </div>
        </div>
    </div>
    </>
  );
};

export default Past;
