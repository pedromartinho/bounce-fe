import './CounterInput.css';
import { useState, useEffect } from 'react';

interface CounterInputProps {
  initialValue?: number;
  onChange: (value: number) => void;
}

const CounterInput = ({initialValue = 1, onChange}: CounterInputProps) => {
  const [count, setCount] = useState<number>(initialValue < 1 ? initialValue : 1);
  const [decrementDisable, setDecrementDisable] = useState<boolean>(count === 1);

  useEffect(() => {
    handleChange();
  }, [count]);

  const handleChange = () => {
    if(decrementDisable) {
      if (count > 1) setDecrementDisable(false);
    } else {
      if(count === 1) setDecrementDisable(true);
    }
    onChange(count);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter-container'>
      <p>Number of bags</p>
      <div className='counter-buttons'>
        <button type="button" onClick={handleDecrement} disabled={decrementDisable}>-</button>
        <p>{count}</p>
        <button type="button" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CounterInput;