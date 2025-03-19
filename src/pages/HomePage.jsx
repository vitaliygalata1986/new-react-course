import './HomePage.css';
import UserList from './UserList';
import { Task } from './Task';
import { Comments } from './Comments';
import { Products } from './Products';
import { v4 as uuidv4 } from 'uuid';

function HomePage() {
  const numbers = [1, 2, 3, 4, 5];
  const users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'IvJoban' },
  ];

  /*
  const listItems = numbers.map((number) => (
    // <li key={number.toString()}>{number}</li>
    <li key={uuidv4()}>
      {number} - {uuidv4()}
    </li>
  ));
  */
  const userList = users.map((user) => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      <ul>{userList}</ul>
      <UserList />
      <Task />
      <Comments />
      <Products />
    </div>
  );
}

export default HomePage;
