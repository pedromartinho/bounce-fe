import React, {useState, useEffect} from 'react';
import CounterInput from '../../components/CounterInput';
import CreditCardInput from '../../components/CreditCardInput';
import Loading from '../../components/Loading';
import TextInput from '../../components/TextInput';
import { OrderService } from '../../services/orders';
import './Checkout.css';

// If depends on store, should come from the
const BAG_PRICE = 5.90;

const CheckoutPage = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [numberOfBags, setNumberOfBags] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderService = new OrderService();
    setLoading(true);
    setFailure(false);
    orderService.create({
      amount: numberOfBags,
      unitPrice: Math.round(numberOfBags * BAG_PRICE * 100) / 100,
      name: name,
      email,
      cardNumber,
    }).then(() => setSuccess(true))
      .catch(() => setFailure(true))
      .finally(() => setLoading(false));
  };

  if (!success){
    return (
      <form onSubmit={handleSubmit}>
        <div className="checkout-section">
          <h4>Booking storage at:</h4>
          <h2>Cody's Cookie Store</h2>
          <CounterInput initialValue={numberOfBags} onChange={setNumberOfBags}/>
        </div>
        <hr/>
        <div className="checkout-section">
          <h2>Personal Details</h2>
          <TextInput label='Name' placeholder='John Doe' onChange={setName} />
          <TextInput label='Email' placeholder='john@doe.com' onChange={setEmail}/>
        </div>
        <hr/>
        <div className="checkout-section">
          <h2>Payment Information</h2>
          <CreditCardInput label='Card Details' placeholder='4242 4242 4242 4242' onChange={setCardNumber}/>
          {failure && <h2 onClick={() => setFailure(false)}>Your booking has failed. Please try again.</h2>}
        </div>
        <div className="checkout-footer">
          <hr/>
          <div className="checkout-section submit-form">
            <span>
              <p>{`${numberOfBags} bags`}</p>
              {/* TODO: Move to util or service file */}
              <h2>{`$${Math.round(numberOfBags * BAG_PRICE * 100) / 100}`}</h2>
            </span>
            <button className="checkout-button" type="submit">Retry</button>
            {/* <button className="checkout-button" onClick={() => setLoading(true)}>Loading</button> */}
          </div>
        </div>
        {loading && <Loading message="Loading..." />}
      </form>
    );
  } else {
    return <h1 onClick={() => setSuccess(false)}> Booking Placed! </h1>;
  }
};

export default CheckoutPage;