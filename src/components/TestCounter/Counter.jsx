import { useCounter } from '../../customHoks/useCounter';

function Counter() {
  const [count, increment, decrement, reset] = useCounter(0, 15); // useCounter - custom hook
  return (
    <>
      <h1>Счетчик {count}</h1>
      <button onClick={increment}>Прибавить</button>
      <button onClick={decrement}>Убавить</button>
      <button onClick={reset}>Сбросить</button>
    </>
  );
}

export default Counter;
