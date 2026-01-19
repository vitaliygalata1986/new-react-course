import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import UserInfo from '../UserInfo/UserInfo';

import './Header.css';
function Header() {
  const user = useContext(UserContext);
  return (
    <header className="header">
      <>
        <h1>Добро пожаловать, {user.name}</h1>
        <UserInfo/>
      </>
    </header>
  );
}

export default Header;
