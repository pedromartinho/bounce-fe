import React from 'react';

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
    <div>
      <label >{props.label}</label>
      <input type="text" id={props.label.toLowerCase()} placeholder={props.placeholder} required onChange={handleChange} />
    </div>
  );
}

export default TextInput;