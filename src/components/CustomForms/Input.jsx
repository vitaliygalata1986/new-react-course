export const Input = ({ label, onChange, onBlur, name, ref, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  </div>
);

// Задаем displayName для компонента
//Input.displayName = 'Input';
