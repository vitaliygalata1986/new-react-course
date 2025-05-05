import { UserContext } from '../../contexts/UserContext';

import Header from '../Header/Header';

function App() {
  const user = {
    name: 'Иван',
    email: 'ivan@example.com',
  };
  return (
    <main>
      <UserContext.Provider value={user}>
        <Header />
      </UserContext.Provider>
    </main>
  );
}

export default App;
