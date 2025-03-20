import { useState } from 'react';

function ControlledForm() {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    alert('Форма отправлена: ' + value);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form action={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Отправить</button>
      <p>{value}</p>
    </form>
  );
}

export default ControlledForm;
