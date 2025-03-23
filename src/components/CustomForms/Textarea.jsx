export const Textarea = ({ label, onChange, onBlur, name, ref }) => (
  <div>
    <label>{label}</label>
    <textarea name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
  </div>
);

// Задаем displayName для компонента
// Textarea.displayName = 'Textarea';
