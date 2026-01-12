import { HomePage } from '../../pages/HomePage';

function App() {
  return (
    <main>
      <HomePage />
    </main>
  );
}

export default App;

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
*/
