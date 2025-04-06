import { useEffect, useState } from 'react';
import { ClickComponent } from './ClickComponents';

export function Counter() {
  const [count, setCount] = useState(0);
  const [countEffect, setCountEffect] = useState(0);
  const [number, setNumber] = useState(0);

  /*
  useEffect(() => {
    setCountEffect(countEffect + 1);
  }, []); // функция сработет один раз при монтировании компонента
  */

  useEffect(() => {
    setCountEffect(countEffect + 1);
  }, [number]);
  return (
    <>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 12)}>Увеличить</button>
      <p>Эффект счетчика с useEffect: {countEffect}</p>
      <ClickComponent number={number} setNumber={setNumber} count={count} />
    </>
  );
}
