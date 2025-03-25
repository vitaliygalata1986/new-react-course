import { useState } from 'react';

function Child(props) {
  const [userAge, setUserage] = useState(18);
  const newPerosn = {
    ...props,
    email: 'nertis44@gmail.com',
  };
  return (
    <div>
      <p>Имя: {newPerosn.name}</p>
      <p>Возраст: {newPerosn.age}</p>
      <p>email: {newPerosn.email}</p>
      <p>{userAge}</p>
      <button onClick={() => setUserage(userAge + 1)}>Change name</button>
    </div>
  );
}

export default Child;
