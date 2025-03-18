import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.isDone ? <s>{todo.name}</s> : todo.name}</li>
      ))}
    </div>
  );
}

export default TodoList;
