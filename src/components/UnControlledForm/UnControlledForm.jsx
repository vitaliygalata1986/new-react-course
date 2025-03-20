import { useRef } from 'react';

function UnControlledForm() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    // const inputValue = event.target.elements.name.value;
    alert('Форма отправлена: ' + inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" ref={inputRef} />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default UnControlledForm;
