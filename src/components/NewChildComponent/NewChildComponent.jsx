import { useEffect, useState } from 'react';

const NewChildComponent = () => {
  const [elementText, setElementText] = useState('');

  const handleClick = () => {
    const element = document.getElementById('myElement');
    setElementText(element.textContent);
  };

  return (
    <div>
      <div id="myElement">Это другой элемент с таким же ID</div>
      <button onClick={handleClick}>Получить текст элемента</button>
      <p>Текст элемента {elementText}</p>
    </div>
  );
};

export default NewChildComponent;
