import { useEffect, useState } from 'react';
import DataFertchApi from '../components/DataFertchApi/DataFertchApi';
import LifecycleDemo from '../components/LifecycleDemo/LifecycleDemo';
import { Counter } from '../components/NewCounter/Counter';
import Cleanup from '../components/Cleanup/Cleanup';
import WindowSize from '../components/WindowSize/WindowSize';

const HomePage = () => {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    // код, который выполняется после рендеринга

    // опциональный код для очистки
    return () => {
      // вовзращаемая функция, которая вызывается при размонтировании компонента
      // или выполнении следующего эффекта
    };
  }, []); // [] - зависимости - определяет, когда повторно выполнять эффект, если массив пуст, то эффект выполнится только один раз после первого рендеринга

  return (
    <>
      <DataFertchApi />
      <Counter />
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Скрыть компонент' : 'Показать'}
      </button>
      {showComponent && <LifecycleDemo />}
      <Cleanup />
      <WindowSize />
    </>
  );
};

export default HomePage;
