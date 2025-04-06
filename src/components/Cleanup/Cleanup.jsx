import { use, useEffect, useState } from 'react';

function Cleanup() {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => { // предыдущий интервал будет очищен при создании нового интервала
        // эта функция будет вызвана при размонтировании компонента или эффект будет вызван при обновлении компонента
      clearInterval(intervalId);
    };
  }, [message]); // каждый раз когда меняется message, интервал будет обновлен

  return (
    <div>
      <h3>Напечатайте, чтобы вывести в консоль</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>В консоль выводится {message}</div>
    </div>
  );
}

export default Cleanup;
