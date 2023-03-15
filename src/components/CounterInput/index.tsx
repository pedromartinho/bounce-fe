import './CounterInput.css';
import { useState, useEffect } from 'react';

interface CounterInputProps {
  value: number;
  setValue: (value: number) => void;
}

const CounterInput = ({value = 1, setValue}: CounterInputProps) => {
  const [decrementDisable, setDecrementDisable] = useState<boolean>(value === 1);

  useEffect(() => {
    handleChange();
  }, [value]);

  const handleChange = () => {
    if(decrementDisable) {
      if (value > 1) setDecrementDisable(false);
    } else {
      if(value === 1) setDecrementDisable(true);
    }
  };

  const handleIncrement = () => {
    setValue(value + 1);

  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className='counter-buttons-section'>
      <button className='counter-action' type='button' onClick={handleDecrement} disabled={decrementDisable}>-</button>
      <p>{value}</p>
      <button className='counter-action' type='button' onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterInput;