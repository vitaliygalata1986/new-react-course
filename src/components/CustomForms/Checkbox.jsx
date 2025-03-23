export const Checkbox = ({ label, onChange, onBlur, name, ref }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label}
    </label>
  </div>
);

// Задаем displayName для компонента
// Checkbox.displayName = 'Checkbox';
