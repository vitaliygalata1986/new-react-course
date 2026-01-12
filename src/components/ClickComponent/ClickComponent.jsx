import { useEffect } from 'react';

function ClickComponent({ number, setNumber, count }) {
  useEffect(() => {
    setNumber(number + 100);
  }, [count]);

  return (
    <button
      className="border p-1 cursor-pointer"
      onClick={() => setNumber(number + 1)}
    >
      Изменяем число {number}
    </button>
  );
}

export default ClickComponent;
