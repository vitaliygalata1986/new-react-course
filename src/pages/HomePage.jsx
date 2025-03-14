import { Button } from '../components/Button';
import { UserList } from '../components/UserList';
import programmer from '../assets/programmer.jpg';
import { useState } from 'react';
import './HomePage.css';

function HomePage({ onClick }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const showMessage = (str) => {
    alert(str);
  };

  return (
    <div className='home-page'>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button label='Нажми меня' callback={onClick} />
      <Button label='showMessage' callback={() => showMessage('Hello')} />
      <UserList />
      <img src={programmer} alt='Программист' />
      <img src='images/laptop.jpg' alt='Ноутбук' />
      <Button label='Counter' callback={handleClick} />
      <p>Количество кликов: {clicks}</p>
    </div>
  );
}

export default HomePage;
