import React, {useState} from 'react';
import Counter from '../components/counter-input';
import BlurMessage from '../components/loading';
import TextInput from '../components/text-input';

function CheckoutPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [numberOfBags, setNumberOfBags] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, phone, cardNumber });
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
        <TextInput label='Phone' placeholder='john@doe.com' onChange={setPhone}/>
        <hr/>
        <h2>Payment Information</h2>
        <TextInput label='Card Details' placeholder='4242 4242 4242 4242' onChange={setCardNumber}/>
        {failure && <h2 onClick={() => setFailure(false)}>Your booking has failed. Please try again.</h2>}
        <h2>{`${numberOfBags} bags`}</h2>
        <button type="submit">Retry</button>
        <button onClick={() => setSuccess(true)}>Request Success</button>
        <button onClick={() => setLoading(true)}>Loading</button>
        <button onClick={() => setFailure(true)}>Request Failure</button>
        {loading && <BlurMessage message="Loading..." />}
      </form>
    )
  } else {
    return <h1 onClick={() => setSuccess(false)}> Booking Placed! </h1>
  }
}

export default CheckoutPage;