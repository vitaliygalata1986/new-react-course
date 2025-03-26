import { Button } from '../Button';
import './Header.css';
function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>Заголовок</h1>
      <button onClick={toggleTheme} className="buttonSwitcher">
        Переключить {theme === 'light' ? 'Dark' : 'Light'} тему
      </button>
    </header>
  );
}

export default Header;
