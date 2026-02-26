import { useLocalStorage } from '../../customHoks/useLocalStorage';
import Settings from '../Settings/Settings';

function App() {
  const [name, handleSetName, handleRemoveName] = useLocalStorage(
    'name',
    'Гость',
  ); 

  return (
    <div>
      <h1>Привет, {name}! </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleRemoveName}>Очистить имя</button>

      <Settings />
    </div>
  );
}

export default App;
