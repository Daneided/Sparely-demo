import '../styles/ThankYou.css';
import logo from '../assets/products/logo.svg';


export const ThankYou = () => {
    return (
        <div className='container-thank'>
        <h1 className='thank'>THANK</h1>
      <img className='logo-thank' src={logo} alt="logo" />
      <h1 className='you'>YOU</h1>
        </div>
    );
}