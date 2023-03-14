import React from 'react';
import './text-input.css';

interface TextInputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function TextInput(props: TextInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      <input className="input-field" type="text" id={props.label.toLowerCase()} placeholder={props.placeholder} required onChange={handleChange} />
    </div>
  );
}

export default TextInput;