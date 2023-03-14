import React, {useState} from 'react';
import Counter from '../components/counter-input';
import BlurMessage from '../components/loading/loading';
import TextInput from '../components/text-input';
import { OrderService } from '../services/orders.service';

function CheckoutPage() {
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
    orderService.create({
      amount: numberOfBags,
      unitPrice: 10, // TODO: Depend on the BE
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
        <h4>Booking storage at:</h4>
        <h2>Cody's Cookie Store</h2>
        <h2>Number of bags</h2>
        <Counter initialValue={numberOfBags} onChange={setNumberOfBags}/>
        <hr/>
        <h2>Personal Details</h2>
        <TextInput label='Name' placeholder='John Doe' onChange={setName} />
        <TextInput label='Email' placeholder='john@doe.com' onChange={setEmail}/>
        <hr/>
        <h2>Payment Information</h2>
        <TextInput label='Card Details' placeholder='4242 4242 4242 4242' onChange={setCardNumber}/>
        {failure && <h2 onClick={() => setFailure(false)}>Your booking has failed. Please try again.</h2>}
        <h2>{`${numberOfBags} bags`}</h2>
        <button type="submit">Retry</button>
        <button onClick={() => setLoading(true)}>Loading</button>
        {loading && <BlurMessage message="Loading..." />}
      </form>
    );
  } else {
    return <h1 onClick={() => setSuccess(false)}> Booking Placed! </h1>;
  }
}

export default CheckoutPage;