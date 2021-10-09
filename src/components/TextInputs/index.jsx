import './styles.css';

export const TextInputs = ({placeholder, type}) => {

  return (
    <input
      type={type}
      className="text-input"
      placeholder={placeholder}
      
    />
  );
}