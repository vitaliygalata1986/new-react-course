import UserDetails from '../UserDetails/UserDetails';
import { PlayerContext } from '../../contexts/PlayerContext';
import { useContext } from 'react';

function UserInfo() {
  const player = useContext(PlayerContext);
  return (
    <div>
      <h2>Информация о пользователе</h2>
      <button onClick={player.togglePlay}>
        {player.isPlaying ? 'Stop' : 'Play'}
      </button>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
