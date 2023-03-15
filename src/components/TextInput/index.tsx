import './TextInput.css';

interface TextInputProps {
  initialValue: string;
  label: string;
  type?: 'text' | 'email';
  placeholder: string;
  onChange: (value: string) => void;
}

const TextInput = ({initialValue, label, type = 'text', placeholder, onChange}: TextInputProps) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input
        required
        value={initialValue}
        className='input-field'
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        onChange={(event)=>onChange(event.target.value)}
      />
    </div>
  );
};

export default TextInput;