import { Children, useState } from 'react';
import { Button } from '../components/Button';
import { UserList } from '../components/UserList';

import './HomePage.css';

function HomePage({ handlePropsClick }) {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    alert('Fom is submitted');
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleMouseOver() {
    console.log('Mouse over');
  }
  function handleMouseOut() {
    console.log('Mouse out');
  }
  function handleFocus() {
    console.log('Field on focus');
  }
  function handleBlur() {
    console.log('Field on blur');
  }
  function handleScroll(event) {
    console.log('Прокрутка', event.target.scrollTop);
  }
  function handleLoad() {
    console.log('Изображение загружено');
  }
  function handleError() {
    console.log('Ошибка загрузки изображения');
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      console.log('Вы нажали', event.key);
    }
  }
  function handleChangeNew(event) {
    setValue(event.target.value);
  }
  function handleBtnClick() {
    console.log(value);
  }
  function handleEvent(event) {
    switch (event.type) {
      case 'click':
        console.log('click');
        break;
      case 'mouseenter':
        console.log('mouseenter');
        break;
      default:
        break;
    }
  }
  return (
    <div
      className="home-page"
      onScroll={handleScroll}
      style={{ height: '300px', overflow: 'auto' }}
    >
      <Button label="Counter" callback={handlePropsClick} />
      <input
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <p>Вы ввели: {text}</p>
      <form onSubmit={handleSubmit}>
        <Button type="submit" label="Submit" />
      </form>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Button
      </button>
      <div style={{ height: '900px' }}>Прокручиваемый элемент</div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s"
        alt="рисунок"
        onLoad={handleLoad}
        onError={handleError}
      />
      <input
        type="text"
        value={value}
        onChange={handleChangeNew}
        onKeyDown={handleKeyDown}
        placeholder='Input text and press "Enter"'
      />
      <p>Вы ввели: {value}</p>

      <button onClick={handleEvent} onMouseEnter={handleEvent}>
        Нажми или наведи
      </button>
    </div>
  );
}

export default HomePage;
