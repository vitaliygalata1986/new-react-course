import Greeting from './Greeting';
import Notification from './Notification';
import UserProfile from './UserProfile';
import TodoList from './TodoList';
import WelcomeMessage from './WelcomeMessage';
import './HomePage.css';

function HomePage({ handlePropsClick }) {
  const messages = [1, 2, 3, 4, 5];
  const user = {
    name: 'Иван',
    age: 30,
  };
  const todos = [
    { id: 1, name: 'Stydy React', isDone: true },
    { id: 2, name: 'Stydy JS', isDone: true },
    { id: 3, name: 'Stydy VUE JS', isDone: false },
  ];
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
      <Notification messages={messages} />
      <Notification messages={[]} />
      <UserProfile user={user} />
      <UserProfile user={null} />
      <TodoList todos={todos} />
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default HomePage;
