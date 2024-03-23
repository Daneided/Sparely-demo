import '../styles/SuggestRoundUp.css';
import logo from '../assets/products/logo.svg';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

export  const SuggestRoundUp = ({onConfirm}) => {

 // Convert totalAmount to a number (if it's a string)
 const {  getTotalCartAmount } = useContext(ShopContext);
 const amountNumber = getTotalCartAmount();

 // Calculate the spare change
 const roundedUpAmount = Math.ceil(amountNumber);
 const spareChange = (roundedUpAmount - amountNumber).toFixed(2);




    return (
        <div className='container-suggest'>
       
            <div className='wrapper'>
                <p className='header'>Choose charity</p>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='amountWrapper'>
        <p className='donateAmount'>{spareChange}$.</p>
        <p className='roundUpText'>Round up from: {amountNumber}$.</p>
      </div>
      <button id='payDonateButton' onClick={onConfirm}>Pay & Donate</button>
        </div>
    );
}