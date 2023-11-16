import React from 'react';
import './FuturEvent.css';

const FuturEvent = () => {
  return (
    <div className="event-section" style={{ backgroundColor: '#CBFACF' }}>
      <div className="left-content">
        <p className="centered-text">Découvrir les événements</p>
      </div>
      <div className="right-content">
        <div className="big-square">
          <div className='top-content'><div className="left-text">A la Une</div></div>
          <div className="central-content">
            <div className='content-smaller'>
              <div className="small-square"><div className='jour'>01</div><div className='mois'>Janvier</div></div>
              <div className="small-square"><div className='jour'>18</div><div className='mois'>Janvier</div></div>
              <div className="small-square"><div className='jour'>25</div><div className='mois'>Janvier</div></div>
              <div className="small-square"><div className='jour'>16</div><div className='mois'>Février</div></div>
            </div>
            <div className='bottom-content'>
            <div className="plus-text">Plus<img src="/plus.png" alt="plus" style={{ marginLeft: '8px' }} className="img-fluid" /></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default FuturEvent;
