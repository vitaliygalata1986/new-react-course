import Header from '../Header/Header';
import { UserContext } from '../../contexts/UserContext';

function App() {
  const user = {
    name: 'Иван Иванов',
    age: 30,
    email: 'vitaliy@gmail.com',
  };
  return (
    <UserContext.Provider value={user}>
      <Header user={user} />
    </UserContext.Provider>
  );
}

export default App;
