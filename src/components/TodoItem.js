import React, {useState} from 'react';

const TodoItem = ({todo, onDelete, onEdit, onDone}) => {
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setEditing] = useState(false);

  const handleKeyPress = (e) => {
    const key = e.key
    if(key === 'Enter'){
      onEdit(newText);
      setEditing(false);
    }
  };

  const handleBlur = (e) => {
    onEdit(newText);
    setEditing(false);
  }

  const showDoneButton = !todo.isDone ?
    (
      <button onClick={() => { onDone() }}
        type='button'>
        <span>✔</span>
      </button>
    ) : (
      <button onClick={() => { onDone() }}
        type='button'>
        <span>o</span>
      </button>
    )

  const showTodo = (
    <li onDoubleClick={() => setEditing(true)}>
      {showDoneButton}
      <span>{todo.text}</span>
      <button
        onClick={onDelete}
        type='button'> X </button>
    </li>
  );

  const editTodo =
    (<div>
      <input value={newText}
        autoFocus
        onChange={(e) => setNewText(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
        types='text'/>
      <button
        onClick={onDelete}
        type='button'> X </button>
    </div>);

  const element = isEditing ? editTodo : showTodo;

  return element;
};

export default TodoItem;
