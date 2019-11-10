import React, {useState} from 'react';

const TodoInput = ({onSave, setAllDone, todosLength}) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length){
      onSave(text);
      setText('');
    }
  };

  const setAllDoneButton =  todosLength ? (
    <button
      onClick={setAllDone}
      type='button'> Done! </button>
  ) : ''

  return (
    <form
      onSubmit={handleSubmit}>
      {setAllDoneButton}
      <input
        placeholder='insert text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'/>
    </form>
  );
};

export default TodoInput;
