import { Button } from '../Button';
import './Header.css';
function Header({ clicks, text }) {
  const style = {
    color: 'blue',
    fontSize: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <header className='container' style={style}>
      <h1>Заголовок</h1>
      <p>Количество кликов: {clicks}</p>
      <p>{text}</p>
    </header>
  );
}

export default Header;
