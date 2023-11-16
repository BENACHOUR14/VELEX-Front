import React from 'react';
import './Infos.css';


const Infos = () => {
  return (
    <div className='container-infos'>
        <div className='info-content'>
            <div className='info-title'>
                <h2>Restez informé !</h2>
            </div>
            <div className='info-form'>
                <form>
                    <div className='title-form'><span>Email</span></div>
                    <div className='form-form'>
                        <div className='text-form'><input type='text' /></div>
                        <div className='btn-form'><input type='button' name="S'abonner" value="S'abonner"/></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Infos;
