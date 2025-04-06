import { useEffect, useState } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // Эффект с таймером
  useEffect(() => {
    console.log('Компонент смонтирован или обновлен');
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Увеличиваем счетчик каждую секунду
    }, 1000);

    // Возвращаемая функция (() => clearInterval(intervalId)) вызывается автоматически при размонтировании компонента,
    // что останавливает таймер и предотвращает утечку памяти.
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p>Счетчик: {count}</p>
    </div>
  );
}

/*
  Утечка памяти могла бы возникнуть, если бы:
  Вы не вызвали clearInterval, и таймер продолжал бы работать даже после того, как компонент исчез с экрана.
  Компонент часто монтировался и размонтировался без очистки — старые таймеры накапливались бы.
*/

export default LifecycleDemo;
