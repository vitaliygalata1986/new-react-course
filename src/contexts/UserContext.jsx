import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);

export function UseProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Vitaliy',
    email: 'vitos@gmail.com',
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
