import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // storedValue -> name- сохраненное значение
  // setValue соответствует handleSetName
  // removeValue -> handleRemoveName

  // getStoredValue - не вызываем с (), так как нам нужно ее вызвать один раз

  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue; // возвращаем распарсенное значение или начальное значение, если его нет
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  };

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error adding to localStorage:', error);
    }
  };

  useEffect(() => {
    setStoredValue(getStoredValue()); // здесь getStoredValue будет вызываться только при изменении key
  }, [key]);

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error('Error deleting from localStorage:', error);
    }
  };

  return [storedValue, setValue, removeValue];
};
