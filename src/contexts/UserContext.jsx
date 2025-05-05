import { createContext, useContext } from 'react';

export const UserContext = createContext(null); // если не передать значение, то будет undefined
// createContext - создает контекст(распространяет данные, которые мы в него передаем)


// кастомный хук
export function useUserContext() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('Данные пользователя не найдены');
  }

  return user;
}

export default UserContext;
