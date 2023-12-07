import React from 'react';
import './ProfilClub.css';
import Sidebar from './SideBarClub';
import Header from '../Header';

import userImage from '../../assets/images/chevre.jpg';

const MembersClub = () => {

  const membres = [
    { id: 1, nom: 'Doe', prenom: 'John', description: 'Description du membre 1', image: userImage },
    { id: 2, nom: 'Smith', prenom: 'Alice', description: 'Description du membre 2', image: userImage },
    { id: 3, nom: 'Johnson', prenom: 'Bob', description: 'Description du membre 3', image: userImage },
  ];
  return (
    <><Header />
    <div className="profile-container">
      <Sidebar />
      <div className='pageMembers'>
      <div className="contentMembers">
        <h1>Les membres</h1>
      </div>
      <div className="membersList">
        {membres.map((membre) => (
          <li key={membre.id} className="memberCard">
          <img src={membre.image} alt={`Profil de ${membre.nom} ${membre.prenom}`} className="memberImage" />
          <div className="memberInfo">
            <p className="memberName">{`${membre.nom} ${membre.prenom}`}</p>
            <p className="memberDescription">{membre.description}</p>
          </div>
        </li>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default MembersClub;
