import './CreditCardInput.css';
import React from 'react';

interface TextInputProps {
  value: string;
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
}

const CreditCardInput = ({value, label, placeholder,  setValue}: TextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Regex to remove non-numeric characters from input
    const sanitizedValue = e.target.value.replace(/\D/g, '');
    // Insert a space after every 4 digits of the input value
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ").trim();
    setValue(formattedValue);
  };

  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        required
        value={value}
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