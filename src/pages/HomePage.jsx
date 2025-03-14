import { Button } from '../components/Button';
import { UserList } from '../components/UserList';

import './HomePage.css';

function HomePage({ clicks, setClicks }) {
  const handleClick = () => {
    // setClicks(clicks + 1);
    setClicks((prevClicks) => prevClicks + 1);
    setClicks((prevClicks) => prevClicks + 1);
    setClicks((prevClicks) => prevClicks + 1);
    // setClicks(1000);
  };

  return (
    <div className='home-page'>
      <Button label='Counter' callback={handleClick} />
      <p>Количество кликов: {clicks}</p>
    </div>
  );
}

export default HomePage;
