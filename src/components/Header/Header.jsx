import { useUserContext } from '../../contexts/UserContext';
import UserInfo from '../UserInfo/UserInfo';

import './Header.css';
function Header() {
  const { user, updateUser } = useUserContext();
  return (
    <header className="header">
      <>
        <h1>Добро пожаловать, {user.name}</h1>
        <button
          onClick={() =>
            updateUser({ name: 'Vitaliy', email: 'vitos@gmail.com' })
          }
        >
          Change user
        </button>
        <UserInfo />
      </>
    </header>
  );
}

export default Header;
