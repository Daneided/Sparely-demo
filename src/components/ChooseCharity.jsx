import React, { useState } from 'react';
import '../styles/ChooseCharity.css';
import logo from '../assets/products/logo.svg';

export const ChooseCharity = ({ onSelect }) => {
    // State to track the selected charity
    const [selectedCharity, setSelectedCharity] = useState(null);

    
    const charities = ['#HelpMetodii', '#BetterEducation', '#BreastCancerAwareness'];

    // Handler for list item click
    const handleSelectCharity = (charity) => {
        setSelectedCharity(charity);
    };

    return (
        <div className='container-choose'>
            <div className='wrapper'>
                <p className='header'>Choose charity</p>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <ul className='charityList'>
                {charities.map((charity, index) => (
                    <li
                        key={index}
                        className={selectedCharity === charity ? 'selected' : ''}
                        onClick={() => handleSelectCharity(charity)}
                    >
                        {charity}
                    </li>
                ))}
            </ul>
            <button
                id='button-choose'
                onClick={() => selectedCharity && onSelect()}
                disabled={!selectedCharity} // Button is disabled if no charity is selected
            >
                Continue
            </button>
        </div>
    );
};
