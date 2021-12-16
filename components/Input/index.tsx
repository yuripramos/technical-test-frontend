const Input = ({
  index,
  name,
  label,
  type,
  handleInputChange,
  validateEmail,
}) => {
  return (
    <div key={index}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onKeyPress={(e) =>
          type === 'email' &&
          validateEmail((event.target as HTMLInputElement).value)
        }
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
