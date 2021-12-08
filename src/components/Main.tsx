import cardImg from '../assets/master.jpeg';
import {ReactComponent as DiscoverIcon} from '../assets/cc-discover-brands.svg';
import {ReactComponent as PaypalIcon} from '../assets/cc-paypal-brands.svg';
import {ReactComponent as VisaIcon} from '../assets/cc-visa-brands.svg';
import Button from './Button';

const Main = () => {
  return (
    <main>
      <div className="main-left">
        <h2 className="main-title">Payment Information</h2>
        <p className="main-subtitle">Choose your method of payment</p>
        <img src={cardImg} className='main-card-image' alt='a card' />
      </div>

      <div className="main-right">
        <div className="main-icon-flex">
          <VisaIcon className='main-icon' />
          <DiscoverIcon className='main-icon' />
          <PaypalIcon className='main-icon' />
        </div>

        <div className="main-input-container">
          <div className="main-input-div">
            <label htmlFor="creditCard" className='main-input-label'>Credit card number</label>
            <input type="number" name='creditCard' placeholder='432 5433 9382 1030' className='main-input' />
          </div>

          <div className="main-input-div">
            <label htmlFor="date" className='main-input-label'>Expiration date</label>
            <input type='date' name='date' className='main-input' />
          </div>

          <div className="main-input-div">
            <label htmlFor="securityCode" className='main-input-label'>Security Code</label>
            <input type="number" name='securityCode' placeholder='420' className='main-input' />
          </div>

          <div className="main-input-div">
            <label htmlFor="postalCode" className='main-input-label'>Postal code</label>
            <input type="number" name='postalCode' placeholder='1011' className='main-input' />
          </div>
        </div>

        <div className="main-check-div">
          <input type="radio" id="purchase" name="purchase" value="purchase" className='main-check' />
          <label htmlFor="purchase" className='main-check-label'>Use this card for next time purchase</label>
        </div>

        <div className="main-btn-div">
          <Button>Add Card</Button>
        </div>
      </div>
    </main>
  )
}

export default Main
