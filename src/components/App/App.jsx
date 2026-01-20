import { UseProvider } from '../../contexts/UserContext';
import { PlayerProvider } from '../../contexts/PlayerContext';
import Header from '../Header/Header';

function App() {
  return (
    <UseProvider>
      <PlayerProvider>
        <Header />
      </PlayerProvider>
    </UseProvider>
  );
}

export default App;
