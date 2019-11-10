import React from 'react';
import TodoInput from './TodoInput';

const Header = ({todos, addTodo, setAllDone}) => {
  const n = todos.length;
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput setAllDone={() => setAllDone()}
        todosLength={n}
        onSave={(text) =>{ addTodo(text)}}/>
    </div>
  );
}

export default Header;
