import { createContext, useContext } from 'react';

export const UserContext = createContext(null); // если не передать значение, то будет undefined
// createContext - создает контекст(распространяет данные, которые мы в него передаем)

export function useUserContext() {
  const user = useContext(UserContext); // получаем значение user из контекста

  if (!user) {
    throw new Error('Данные пользоваетля не были получены');
  }

  return user;
}
