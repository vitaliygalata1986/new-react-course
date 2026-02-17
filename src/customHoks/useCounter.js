import { useState } from 'react';

export function useCounter(initialValue, addedSum) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((preventCount) => preventCount + addedSum);
  };

  const decrement = () => {
    setCount((preventCount) => preventCount - addedSum);
  };

  const reset = () =>{
    setCount(initialValue);
  }

  return [count, increment, decrement, reset];
}
