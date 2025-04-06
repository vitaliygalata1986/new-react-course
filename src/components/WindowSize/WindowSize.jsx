import { useState, useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Функция очистки
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей, чтобы подписаться только один раз

  return (
    <div>
      <h1>Размер окна:</h1>
      <p>Ширина: {windowSize.width}px</p>
      <p>Высота: {windowSize.height}px</p>
    </div>
  );
}

export default WindowSize;

/*
 если WindowSize когда-нибудь будет удалён из разметки (например, при навигации, переключении вкладок, скрытии), обработчик resize останется висеть в памяти браузера.
Он будет:

Продолжать вызывать setWindowSize даже после удаления компонента,

А сам компонент уже удалён — и React может начать ругаться:

"Can't perform a React state update on an unmounted component"

Это и есть утечка — неконтролируемая активность после уничтожения компонента.
*/
