import React, {useState, useEffect} from 'react';
import CounterInput from '../../components/CounterInput';
import CreditCardInput from '../../components/CreditCardInput';
import Loading from '../../components/Loading';
import OverlayMessage from '../../components/OverlayMessage';
import TextInput from '../../components/TextInput';
import { OrderService } from '../../services/orders';
import { StoreService } from '../../services/stores';
import './Checkout.css';

// Leave just to have the page loaded even if BE fails
const BAG_PRICE = 5.90;

const CheckoutPage = () => {
  const [unitPrice, setUnitPrice] = useState(BAG_PRICE);
  const [storeName, setStoreName] = useState('A store');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [numberOfBags, setNumberOfBags] = useState(1);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    const storeService = new StoreService();
    storeService.getStore(1).then((data) => {
      setUnitPrice(data.unitPrice);
      setStoreName(data.name);
    })
      .catch(() => setFailure(true))
      .finally(() => setLoading(false));
    const savedName = localStorage.getItem('name');
    if(savedName) setName(savedName);
    const savedEmail = localStorage.getItem('email');
    if(savedEmail) setEmail(savedEmail);
    const cardNumber = localStorage.getItem('cardNumber');
    if(cardNumber) setCardNumber(cardNumber);
    const numberOfBags = localStorage.getItem('numberOfBags');
    if(numberOfBags && Number(numberOfBags) !== 1) setNumberOfBags(Number(numberOfBags));
    setValidForm(isFormValid());
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('numberOfBags', numberOfBags.toString());
    setValidForm(isFormValid());
  }, [name, email, cardNumber, numberOfBags]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderService = new OrderService();
    setLoading(true);
    setFailure(false);
    orderService.create({
      numberOfBags,
      unitPrice: Math.round(numberOfBags * BAG_PRICE * 100) / 100,
      name: name,
      email,
      creditCardNumber: cardNumber,
    }).then(() => {
      setSuccess(true);
      localStorage.clear();
    })
      .catch(() => setFailure(true))
      .finally(() => setLoading(false));
  };

  const isFormValid = (): boolean => {
    if (!name || !email || !cardNumber || !numberOfBags || cardNumber.length !== 19) {
      return false;
    }

    return true;
  };

  if (!success){
    return (
      <form className='top-section' onSubmit={handleSubmit}>
        <div className='checkout-section'>
          <p className='sub-title'>Booking storage at:</p>
          <p className='title'>{storeName}</p>
          <div className='counter-container'>
            <p className='section-title'>Number of bags</p>
            <CounterInput value={numberOfBags} setValue={setNumberOfBags}/>
          </div>
        </div>
        <hr/>
        <div className='checkout-section'>
          <p className='section-title'>Personal Details:</p>
          <TextInput initialValue={name} label='Name' type='text' placeholder='John Doe' onChange={setName} />
          <TextInput initialValue={email} label='Email' type='email' placeholder='john@doe.com' onChange={setEmail}/>
        </div>
        <hr/>
        <div className='checkout-section'>
          <p className='section-title'>Payment Information</p>
          <CreditCardInput initialValue={cardNumber} label='Card Details' placeholder='4242 4242 4242 4242' onChange={setCardNumber}/>
          {failure && <p className='error-message'>Your booking has failed.<br/> Please try again.</p>}
        </div>
        <div className='checkout-footer'>
          <div className='submit-form'>
            <span>
              <p className='sub-text'>{`${numberOfBags} bags`}</p>
              <p className='title'>{`$${Math.round(numberOfBags * unitPrice * 100) / 100}`}</p>
            </span>
            <button style={{backgroundColor: failure ? '#F54B23': '#649DFF'}} className='submit-button' type='submit' disabled={!validForm}>
              {failure ? 'Retry' : 'Book'}
            </button>
          </div>
        </div>
        {loading && <Loading message='Loading...' />}
      </form>
    );
  } else {
    return <OverlayMessage message='Booking Placed!' />;
  }
};

export default CheckoutPage;