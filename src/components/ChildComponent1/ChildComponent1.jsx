import { memo } from 'react';

const ChildComponent = memo(({ onAction }) => {
  console.log('Дочерний компонент отрендерен');

  return (
    <div>
      <h2>Дочерний компонент</h2>
      <button onClick={onAction}>Вызвать действие</button>
    </div>
  );
});

export default ChildComponent;

/*

const memoizedCallback = useCallback(() => {
  console.log('Функция memoizedCallback вызвана, count:', count);
}, []

Из-за того, что useCallback вызывается с пустым массивом зависимостей [], функция memoizedCallback сохраняется один раз при первом рендере 
// и больше никогда не обновляется, даже если count изменился.
А поскольку ChildComponent1 обёрнут в React.memo, он не перерендеривается, если его пропсы не изменились. 
А memoizedCallback — это та же самая ссылка (не меняется), так что ChildComponent1 не перерендеривается, и в консоль не выводится console.log('Дочерний компонент отрендерен').
*/

/*
Что произойдёт, если добавить count в зависимости useCallback?

const memoizedCallback = useCallback(() => {
  console.log('Функция memoizedCallback вызвана, count:', count);
}, [count]

Тогда:
    - При каждом изменении count будет создаваться новая версия функции.
    - Соответственно, ChildComponent1 будет получать новый проп onAction.
    - Это приведёт к перерендеру дочернего компонента, и ты увидишь лог "Дочерний компонент отрендерен".
*/
