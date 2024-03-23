import React from 'react';
import './ChooseCharity.css';

export const ChooseCharity = () => {
    return (
        <div className='container'>
            <div className='wrapper'>

           <p className='header'>Choose charity</p>
            <img className='logo' src="/images/Framelogo.svg" alt="logo" />

            </div>
      <ul className='charityList'>
        <li>#HelpMetodii</li>
        <li>#BetterEducation</li>
        <li>#BreastCancerAwareness</li>
      </ul>
      <button className='button'>Continue</button>
        </div>
    );
}   