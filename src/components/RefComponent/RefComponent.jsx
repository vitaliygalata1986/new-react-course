import { useRef } from 'react';

function RefComponent() {
  const inputRef = useRef(null); // null - инициализировать useRef как пустую ссылку во время монтирования компонента
  // указыая null, мы говорим React, что ссылка ещё не создана
  const focucInput = () => {
    if (inputRef.current) {
      console.log(inputRef);
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focucInput}>Фокус на поле ввода</button>
    </div>
  );
}

export default RefComponent;
