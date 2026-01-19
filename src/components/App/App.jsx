import Header from '../Header/Header';
import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: 'Иван Иванов',
    age: 30,
    email: 'vitaliy@gmail.com',
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Header user={user} />
    </UserContext.Provider>
  );
}

export default App;
