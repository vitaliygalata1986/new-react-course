import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import UserInfo from '../UserInfo/UserInfo';

import './Header.css';

function Header() {
  const { user, updateUser } = useContext(UserContext);
  const player = useContext(PlayerContext);
  return (
    <header className="header">
      <>
        <h1>Добро пожаловать, {user.name}</h1>
        <button onClick={player.togglePlay}>
          {player.isPlaying ? 'Stop' : 'Play'}
        </button>
        <button
          style={{ display: 'block', marginTop: '10px', border: '1px solid' }}
          onClick={() => updateUser({ name: 'John Doe', email: 'john@doe' })}
        >
          Change user
        </button>
        <UserInfo />
      </>
    </header>
  );
}

export default Header;
