import { useState } from 'react';
import UserGreeting from '../UserGreeting/UserGreeting';

function UserComponent() {
  const [name, setName] = useState('Иван'); // Начальное значение имени
  const [inputValue, setInputValue] = useState(''); // Состояние для input

  const handleChange = (e) => {
    setInputValue(e.target.value); // Обновляем значение input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setName(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>Пример с useRef</h1>
      <UserGreeting name={name} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите новое имя"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Изменить имя</button>
      </form>
    </div>
  );
}

export default UserComponent;
