import './CreditCardInput.css';
import React, { useState } from 'react';

interface TextInputProps {
  initialValue: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const CreditCardInput = ({initialValue, label, placeholder, onChange}: TextInputProps) => {
  const [cardNumber, setCardNumber] = useState(initialValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Regex to remove non-numeric characters from input
    const sanitizedValue = e.target.value.replace(/\D/g, '');
    // Insert a space after every 4 digits of the input value
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ").trim();

    setCardNumber(formattedValue);
    onChange(formattedValue);
  };

  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        required
        value={cardNumber}
        className='input-field'
        type='text'
        id={label.toLowerCase()}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={19}
      />
    </div>
  );
};

export default CreditCardInput;