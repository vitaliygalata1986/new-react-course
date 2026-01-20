import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { PlayerContext } from '../../contexts/PlayerContext';

function UserDetails() {
  const {user} = useContext(UserContext);
  const player = useContext(PlayerContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (player.isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [player.isPlaying]);

  return (
    <>
      <div>
        <h3>Детали пользователя:</h3>
        <p>Имя: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      <div>
        <h4>Player status: {player.isPlaying ? 'Playing' : 'Not playing'}</h4>
        <audio
          ref={audioRef}
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        ></audio>
      </div>
    </>
  );
}

export default UserDetails;
