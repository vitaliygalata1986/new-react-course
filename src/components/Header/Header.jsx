import { Button } from '../Button';
import './Header.css';
function Header() {
  const style = {
    color: 'blue',
    fontSize: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const showMessage = () => {
    alert('showMessageHeader');
  };

  return (
    <header className='container' style={style}>
      <h1>Заголовок</h1>
      <Button
        callback={showMessage}
        btnStyles={{ height: 20, backgroundColor: 'red' }}
      />
    </header>
  );
}

export default Header;
