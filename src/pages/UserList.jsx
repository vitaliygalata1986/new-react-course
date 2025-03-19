import User from './User';
function UserList() {
  const users = [
    { id: 1, name: 'Ivan', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'IvJoban', age: 28 },
  ];
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default UserList;
