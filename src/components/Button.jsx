export function Button({ label = 'Заглушка', callback, btnStyles, className }) {
  return (
    <button style={btnStyles} className={className} onClick={callback}>
      {label}
    </button>
  );
}
