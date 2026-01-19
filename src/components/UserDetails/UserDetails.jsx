import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function UserDetails() {
  const user = useContext(UserContext);
  return (
    <div>
      <h3>Детали пользователя:</h3>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
