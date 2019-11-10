export const incrementCounter = () => ({type: 'INCREMENT_COUNTER'});
export const addTodo = (text) => ({type: 'ADD_TODO', text});
export const deleteTodo = (id) => ({type: 'DELETE_TODO', id});
export const editTodo = (text, id) => ({type: 'EDIT_TODO', text, id});
export const setDone = (id) => ({type: 'SET_DONE', id});
export const setAllDone = (id) => ({type: 'SET_ALL_DONE'});
export const setFilter = (filter) => ({type: 'SET_FILTER', filter});
export const deleteCompleted = () => ({type: 'DELETE_COMPLETED'});
