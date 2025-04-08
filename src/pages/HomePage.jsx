import { useEffect, useState } from 'react';
import NewChildComponent from '../components/NewChildComponent/NewChildComponent';
import RefComponent from '../components/RefComponent/RefComponent';
import RefComponentEffect from '../components/RefComponentEffect/RefComponentEffect';
import NumberTracker from '../components/NumberTracker/NumberTracker';
import UserComponent from '../components/UserComponent/UserComponent';
import CustomVideoPlayer from '../components/CustomVideoPlayer/CustomVideoPlayer';
import AdvancedAudioPlayer from '../components/AdvancedAudioPlayer/AdvancedAudioPlayer';

const HomePage = () => {
  const [elementText, setElementText] = useState('');

  const handleClick = () => {
    const element = document.getElementById('myElement');
    setElementText(element.textContent);
  };

  return (
    <div>
      <div id="myElement">Это элемент с ID</div>
      <button onClick={handleClick}>Получить текст элемента</button>
      <p>Текст элемента {elementText}</p>
      <p>............</p>
      <NewChildComponent />
      <RefComponent />
      <p>............</p>
      <RefComponentEffect />
      <p>............</p>
      <NumberTracker />
      <p>............</p>
      <UserComponent />
      <p>............</p>
      <CustomVideoPlayer />
      <p>............</p>
      <AdvancedAudioPlayer />
    </div>
  );
};

export default HomePage;
