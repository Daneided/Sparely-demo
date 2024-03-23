import '../styles/DonateButton.css';
import logo from '../assets/products/logo.svg';


export const DonateButton = ( { onClick } ) => {
    return (
        <div className="container-donate" onClick={onClick}>
        <p className='donate-text'>Donate spare change</p>
        <img src={logo} alt="logo" className='logo' />
        </div>

    );
}