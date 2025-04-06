import { useEffect } from 'react';

export function ClickComponent({ number, setNumber, count }) {
  useEffect(() => {
    setNumber(number + 100);
  }, [count]);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>
        Меняем число {number}
      </button>
    </>
  );
}
