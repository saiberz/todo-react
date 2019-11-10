import React from 'react';
import Filter from './Filter';

const Footer = ({todos, addTodo, setAllDone, setFilter, deleteCompleted}) => {
  const leftTodos = todos.filter(({isDone}) => !isDone).length;
  return (
    <div>
      <span>{leftTodos} items left</span>
      <p>Double click to edit a todo</p>
      <Filter text="All" applyFilter={() => {setFilter("ALL")}}/>
      <Filter text="Active" applyFilter={() => {setFilter("ACTIVE")}}/>
      <Filter text="Complete" applyFilter={() => {setFilter("COMPLETED")}}/>
      <button onClick={() => deleteCompleted() }> Clear completed </button>
    </div>
  );
}

export default Footer;
