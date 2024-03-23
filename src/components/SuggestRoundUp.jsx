import '../styles/SuggestRoundUp.css';
import logo from '../assets/products/logo.svg';

export  const SuggestRoundUp = () => {
    return (
        <div className='container-suggest'>
       
            <div className='wrapper'>
                <p className='header'>Choose charity</p>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='amountWrapper'>
        <p className='donateAmount'>0,41лв.</p>
        <p className='roundUpText'>Round up from: 31,59лв.</p>
      </div>
      <button id='payDonateButton'>Pay & Donate</button>
        </div>
    );
}