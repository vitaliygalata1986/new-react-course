//import { useContext } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import UserInfo from '../UserInfo/UserInfo';

import './Header.css';
//function Header({ user }) {
function Header() {
  //const user = useContext(UserContext);
  const user = useUserContext();
  return (
    <header className="header">
      <>
        <h1>Добро пожаловать, {user.name}</h1>
        {/* <UserInfo user={user} /> */}
        <UserInfo />
      </>
    </header>
  );
}

export default Header;

// https://www.youtube.com/watch?v=x0U3T4u5CNI
13 - 25;
