import './MyName.css';
function MyName() {
  const cats = ['Лев', 'Тигр', 'Волк'];
  return (
    <ul>
      {cats.map((cat) => (
        <li>{cat}</li>
      ))}
    </ul>
  );
}
export default MyName;
