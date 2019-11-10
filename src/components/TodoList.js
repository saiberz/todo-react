import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteTodo, editTodo, setDone}) => {
  const handleDelete = (i) => {
    console.log('Deleting item #: ', i);
    deleteTodo(i);
  };

  const handleEdit = (text, i) => {
    console.log('Editing item #: ', i, " with new text", text);
    editTodo(text, i);
  };

  const handleDone = (i) => {
    setDone(i);
  };

  return (
    <ul>
      {todos.map((todo, index) => {
        return (<TodoItem key={todo.id}
                  onEdit={(newText) => handleEdit(newText, todo.id)}
                  onDelete={() => handleDelete(todo.id)}
                  onDone={() => handleDone(todo.id)}
                  todo={todo}/>)
      })}
    </ul>
  );
}

export default TodoList;
