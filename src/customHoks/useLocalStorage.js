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

/*
  За счёт ленивой инициализации useState реакт вызовит здесь getStoredValue один раз.
  Что происходит в useState(getStoredValue)
  У useState есть два режима:
    useState(значение)
    React возьмёт это значение как есть.
    useState(() => значение) или useState(функция)
    Если ты передаёшь функцию, React воспринимает её как инициализатор и вызовет её один раз при первом рендере компонента (mount), чтобы получить начальное состояние.

    Тоесть:
    То есть твоя строка:
    const [storedValue, setStoredValue] = useState(getStoredValue);
    эквивалентна:
    const [storedValue, setStoredValue] = useState(() => getStoredValue());

    Почему “один раз”?
    Потому что начальное значение состояния нужно только при инициализации.
    На последующих рендерах React не пересчитывает initialState, он просто достаёт уже сохранённое состояние.

    И зачем тогда useEffect у тебя?
    useEffect(() => setStoredValue(getStoredValue()), [key]) нужен, чтобы когда меняется key, ты подгрузил значение из другого ключа и обновил state.

*/
