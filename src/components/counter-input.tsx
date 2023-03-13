import React, { useState, useEffect } from 'react';

interface CounterProps {
  initialValue?: number;
  onChange: (value: number) => void;
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState<number>(props.initialValue && props.initialValue < 1 ? props.initialValue : 1);
  const [decrementDisable, setDecrementDisable] = useState<boolean>(count === 1);

  useEffect(() => {
    handleChange();
  })

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    const newValue = count - 1;
    setCount(newValue);
  };

  const handleChange = () => {
    if(decrementDisable && count > 1) {
      setDecrementDisable(false)
    } else {
      props.onChange(count);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement} disabled={decrementDisable} >Decrement</button>
    </div>
  );
}

export default Counter;