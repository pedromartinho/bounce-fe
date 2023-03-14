import './TextInput.css';

interface TextInputProps {
  label: string;
  type?: 'text' | 'email | card';
  placeholder: string;
  onChange: (value: string) => void;
}

const TextInput = ({label, type = 'text', placeholder, onChange}: TextInputProps) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        required
        className="input-field"
        type={type}
        id={label.toLowerCase()}
        placeholder={placeholder}
        onChange={(event)=>onChange(event.target.value)}
      />
    </div>
  );
};

export default TextInput;