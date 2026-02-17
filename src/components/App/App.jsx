import { useCounter } from '../../customHoks/useCounter';
import Counter from '../TestCounter/Counter';

function App() {
  // useCounter - custom hook
  // методом деструктуризации получаем из useCounter 4 элемента: count, increment, decrement, reset
  const [count, increment, decrement, reset] = useCounter(0, 5);
  return (
    <>
      <h1>Счетчик {count}</h1>
      <button onClick={increment}>Прибавить</button>
      <button onClick={decrement}>Убавить</button>
      <button onClick={reset}>Сбросить</button>

      <Counter />
    </>
  );
}

export default App;
