import { useEffect, useState } from 'react';
import ClickComponent from '../components/ClickComponent/ClickComponent';

export function HomePage() {
  const [count, setCount] = useState(0);
  const [countEffect, setCountEffect] = useState(0);
  const [number, setNumber] = useState(0);

  /*
  useEffect(() => {
    setCountEffect(countEffect + 1);
  }, [count]);
  */

  useEffect(() => {
    setCountEffect(countEffect + 1);
  }, [number]);

  return (
    <>
      <p>Счетчик: {count}</p>
      <button
        className="border p-1 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Увеличить
      </button>
      <p>Эффект счетчика | useEffect: {countEffect}</p>
      <ClickComponent number={number} setNumber={setNumber} count={count} />
    </>
  );
}

/*
Как только компонент первый раз отрендерился, useEffect сработал и увеличил countEffect на 1.
А далее каждый раз когда мы меняем count, срабатывает useEffect и увеличивает countEffect на 1.
useState - влияет на повторный рендер компонента при изменении состояния.
*/

/*
Начальные значения:
  count = 0
  number = 0
  countEffect = 0

  1) Первый рендер (mount)
     Компонент отрендерился с number = 0.
  
  После этого выполняются эффекты:
  Эффект в HomePage с [number] всегда выполняется на mount, даже если number ещё не менялся:
  
  useEffect(() => {
    setCountEffect(countEffect + 1);
  }, [number]);

  → countEffect становится 1

  2) На этом же mount выполняется эффект в дочернем компоненте

  У ClickComponent:
    useEffect(() => {
      setNumber(number + 100);
    }, [count]);

  useEffect с зависимостями тоже выполняется на mount, поэтому он запускается и при count = 0.

  → number становится 100

  3) number изменился → HomePage перерендерился
  
  Теперь number изменился с 0 на 100, значит эффект [number] в HomePage сработает ещё раз.
    
    → countEffect увеличивается ещё на 1
    → становится 2

  Итог: 1 (mount) + 1 (number изменился из-за дочернего эффекта) = 2
    
*/
