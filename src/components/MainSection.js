import React from 'react';
import TodoList from './TodoList'

const MainSection = ({filter, todos, deleteTodo, editTodo, setDone}) => {
  const applyFilter = (filter) => {
    switch(filter){
      case "COMPLETED":
        return x => (x.isDone)
      case "ACTIVE":
        return x => (!x.isDone)
      default:
        return x => (x)
    }
  };

  const showTodos = todos.filter(applyFilter(filter));

  return (
    <div>
      <h2>List</h2>
      <TodoList todos={showTodos}
        editTodo={editTodo}
        setDone={setDone}
        deleteTodo={deleteTodo}/>
    </div>
  );
};

export default MainSection;
