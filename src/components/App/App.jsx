import Email from '../Email/Email';
import MyName from '../MyName/MyName';
import './App.css';

function App() {
  const name = 'Vitaliy';
  const text = <h1 style={{ color: 'red', fontSize: 20 }}>{name}</h1>;
  const condition = true; // true or false // null
  const test = true;
  return (
    condition && (
      <>
        <div>My Component {text}</div>
        {test && <MyName />}
        <Email />
        <input type='checkbox' checked={false} />
      </>
    )
  );
}

export default App;
