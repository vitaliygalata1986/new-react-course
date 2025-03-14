export function Button({ label = 'Заглушка', callback, btnStyles }) {
  return (
    <button style={btnStyles} onClick={callback}>
      {label}
    </button>
  );
}
