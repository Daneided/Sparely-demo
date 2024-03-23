import './SuggestRoundUp.css';

export  const SuggestRoundUp = () => {
    return (
        <div className='container'>
       
            <div className='wrapper'>
                <p className='header'>Choose charity</p>
                <img className='logo' src="/images/Framelogo.svg" alt="logo" />
            </div>
            <div className='amountWrapper'>
        <p className='donateAmount'>0,41лв.</p>
        <p className='roundUpText'>Round up from: 31,59лв.</p>
      </div>
      <button className='payDonateButton'>Pay & Donate</button>
        </div>
    );
}