/*
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Добро пожаловать</h1>;
  } else {
    return <h1>Пожалуйста, войдите</h1>;
  }
}
export default Greeting;
*/

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Добро пожаловать</h1>
      ) : (
        <h1>Пожалуйста, войдите</h1>
      )}
    </div>
  );
}
export default Greeting;
